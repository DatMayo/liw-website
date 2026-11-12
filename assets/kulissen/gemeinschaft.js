// Community goals ("Gemeinschaftsziele") of liw_goals: the weekly pick from the pool, the target scaled by
// last week's active accounts, the stages and who gets which reward. The pure logic is a port of
// liw_goals/shared/community.lua (unit tests: tools/test_community.lua); the values are Config.Community of
// liw_goals/config.lua (as of 12.11.2026). Only the contributions of the simulated week are a model.
(() => {
    // Config.Community (liw_goals/config.lua)
    const CFG = { count: 1, referencePlayers: 10, minFactor: 0.25, maxFactor: 3.0, minShare: 0.02, minAmount: 1, lateFactor: 0.5, topCount: 5 };
    const STAGES = [
        { percent: 50, xp: 300, fame: 2 },
        { percent: 100, xp: 800, fame: 5, bonus: { xpGain: 0.10 } },
        { percent: 150, xp: 1500, fame: 10, bonus: { hungerDrain: -0.10, thirstDrain: -0.10 }, title: 'together_strong' },
    ];
    // unit: counted units per config unit (travel is configured in km and counted in m)
    const POOL = [
        { id: 'hunt', kind: 'kill', target: 150 },
        { id: 'big_game', kind: 'kill', target: 40 },
        { id: 'feast', kind: 'eat', target: 3000 },
        { id: 'water', kind: 'drink', target: 1500 },
        { id: 'travel', kind: 'travel', target: 300, unit: 1000 },
        { id: 'marks', kind: 'mark', target: 400 },
        { id: 'helpers', kind: 'help_up', target: 50 },
        { id: 'cubs', kind: 'litter', target: 15 },
        { id: 'days', kind: 'survive_days', target: 120 },
        { id: 'chorus', kind: 'roar', target: 1000 },
    ];
    const RESET_HOUR_UTC = 2; // Config.ResetHourUtc
    const DAY = 86400, WEEK = 7 * DAY;

    // ---- Port of liw_goals/shared/community.lua -------------------------------------------------
    const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    const L = {
        Factor(accounts, cfg) {
            const reference = Math.max(1, cfg.referencePlayers);
            const low = cfg.minFactor, high = Math.max(low, cfg.maxFactor);
            return clamp(accounts / reference, low, high);
        },
        Nice(n) {
            n = Math.max(1, Math.floor(n + 0.5));
            if (n < 100) return n;
            const step = Math.pow(10, Math.floor(Math.log10(n)) - 1);
            return Math.floor(n / step + 0.5) * step;
        },
        Target(base, accounts, cfg) { return L.Nice(base * L.Factor(accounts, cfg)); },
        StageTargets(target, stages) {
            const out = []; let last = 0;
            stages.forEach((s, i) => {
                let need = Math.max(1, Math.ceil(target * s.percent / 100 - 1e-9));
                need = Math.max(need, last + (i > 0 ? 1 : 0));
                out.push(need); last = need;
            });
            return out;
        },
        StageReached(progress, target, stages) {
            let reached = 0;
            L.StageTargets(target, stages).forEach((need, i) => { if (progress >= need) reached = i + 1; });
            return reached;
        },
        MinContribution(target, cfg) { return Math.max(Math.floor(cfg.minAmount), Math.ceil(target * cfg.minShare - 1e-9)); },
        RewardFactor(stage, qualifiedAt, cfg) {
            if (qualifiedAt == null) return 0;
            return qualifiedAt < stage ? 1 : clamp(cfg.lateFactor, 0, 1);
        },
        // Deterministic pick (LCG like the quest picks); last week's goals only when there are not enough others.
        Pick(pool, count, week, last) {
            const fresh = [], again = [];
            pool.forEach((d) => (last && last[d.id] ? again : fresh).push(d));
            let state = (Math.floor(week) * 7919 + 101) % 2147483647;
            const shuffle = (list) => {
                for (let i = list.length; i >= 2; i--) {
                    state = (state * 48271) % 2147483647;
                    const j = state % i;
                    [list[i - 1], list[j]] = [list[j], list[i - 1]];
                }
            };
            shuffle(fresh); shuffle(again);
            const out = [], kinds = {};
            for (let pass = 1; pass <= 2; pass++) {
                for (const list of [fresh, again]) {
                    for (const d of list) {
                        if (out.length < count && !out.includes(d) && (pass === 2 || !kinds[d.kind])) { out.push(d); kinds[d.kind] = true; }
                    }
                }
            }
            return out;
        },
        Bonus(stageReached) {
            const mods = {}; let any = false;
            for (let i = 0; i < Math.min(stageReached, STAGES.length); i++) {
                for (const [m, d] of Object.entries(STAGES[i].bonus || {})) { mods[m] = (mods[m] || 0) + d; any = true; }
            }
            return any ? mods : null;
        },
    };

    // Week index like LiwQuests.PeriodIndex('w'): weeks start on Monday at the reset hour.
    const weekIndex = (sec) => Math.floor((sec - RESET_HOUR_UTC * 3600 - 4 * DAY) / WEEK);
    const weekStart = (index) => new Date(((index * WEEK) + 4 * DAY + RESET_HOUR_UTC * 3600) * 1000);

    const T = {
        de: {
            goals: {
                hunt: 'Erlegt gemeinsam {n} Tiere', big_game: 'Erlegt gemeinsam {n} große Beutetiere', feast: 'Fresst gemeinsam {n} Einheiten',
                water: 'Trinkt gemeinsam {n}-mal', travel: 'Durchstreift gemeinsam {n} km', marks: 'Setzt gemeinsam {n} Duftmarken',
                helpers: 'Helft gemeinsam {n} niedergestreckten Tieren auf', cubs: 'Begrüßt gemeinsam {n} Jungtiere in der Wildnis',
                days: 'Überlebt gemeinsam {n} Spieltage', chorus: 'Heult und brüllt gemeinsam {n}-mal',
            },
            short: {
                hunt: 'Jagd', big_game: 'Großwild', feast: 'Fressen', water: 'Trinken', travel: 'Strecke', marks: 'Duftmarken',
                helpers: 'Aufhelfen', cubs: 'Jungtiere', days: 'Überleben', chorus: 'Heulen und Brüllen',
            },
            stages: ['Bronze', 'Silber', 'Gold'], days: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
            hGoal: 'Ziel der Woche', hAct: 'Aktivität', hCalc: 'So entsteht das Ziel', hWeek: 'Die Woche',
            goal: 'Ziel aus dem Pool', drawn: 'ausgelost', draw: 'Auslosung', thisWeek: 'diese Woche', from: 'ab {d}',
            last: 'Aktive Konten letzte Woche', now: 'Aktive Konten diese Woche', zeal: 'Eifer je Konto',
            zealHint: '100 % = so viel, wie der Pool für {r} Konten vorsieht',
            base: 'Pool-Ziel (für {r} Konten)', factor: 'Faktor {a} ÷ {r}', factorClamp: '(begrenzt auf {lo} … {hi})',
            raw: 'Pool-Ziel × Faktor', target: 'Ziel, gerundet', min: 'Mindestbeitrag ({p} %)',
            run: 'Woche simulieren', running: 'Woche läuft …',
            progress: 'Fortschritt', share: 'Beteiligte Konten', xpTotal: 'EP verteilt', titles: 'Titel „Gemeinsam stark“',
            chartTop: 'Fortschritt der Woche', chartBottom: 'Beitrag jedes Kontos', minLine: 'Mindestbeitrag {n}',
            bonusAll: 'für alle: {b}', capped: 'gedeckelt bei Gold',
            thStage: 'Stufe', thAt: 'bei', thWhen: 'erreicht', thFull: 'voll', thLate: 'halb', thBonus: 'für alle bis Montag',
            reward: '{xp} EP, {fame} Ruhm', title: 'Titel „Gemeinsam stark“', notYet: '–', accounts: '{n} Konten', one: '1 Konto',
            mods: { xpGain: '+{n} % EP', hungerDrain: 'Hunger {n} % langsamer', thirstDrain: 'Durst {n} % langsamer' },
            lFull: 'beteiligt vor der Stufe (volle Belohnung)', lLate: 'erst danach dazugekommen (halbe EP und Ruhm)', lNone: 'unter dem Mindestbeitrag',
            at: '{d} {h} Uhr',
            note: '<b>Echte Logik, Modell-Woche:</b> Zielberechnung, Rundung, Stufen, Mindestbeitrag, Belohnungen und die Auslosung sind die Funktionen aus <code>liw_goals/shared/community.lua</code> mit den Werten aus <code>Config.Community</code>. Erfunden sind nur die Beiträge der simulierten Woche: Jedes Konto bringt im Mittel so viel, wie das Pool-Ziel für {r} Konten vorsieht (Eifer 100 %), verteilt auf zufällige Spieltage mit Abendspitze; manche steigen erst später ein. Der Beitrag wird stündlich in kleinen Portionen gezählt statt Ereignis für Ereignis. Die Auslosung zeigt die Kette ab vier Wochen vor dieser ohne Vorgeschichte; neu ausgeloste Wochen durch das Team sind nicht berücksichtigt. Belohnungen für Offline-Spieler kommen im Spiel beim nächsten Betreten der Wildnis, hier zählen sie sofort.',
        },
        en: {
            goals: {
                hunt: 'Bring down {n} animals together', big_game: 'Bring down {n} large prey animals together', feast: 'Eat {n} units together',
                water: 'Drink {n} times together', travel: 'Roam {n} km together', marks: 'Set {n} scent marks together',
                helpers: 'Help {n} downed animals up together', cubs: 'Welcome {n} young into the wild together',
                days: 'Survive {n} game days together', chorus: 'Howl and roar {n} times together',
            },
            short: {
                hunt: 'Hunting', big_game: 'Big game', feast: 'Eating', water: 'Drinking', travel: 'Roaming', marks: 'Scent marks',
                helpers: 'Helping up', cubs: 'Young', days: 'Surviving', chorus: 'Howling and roaring',
            },
            stages: ['Bronze', 'Silver', 'Gold'], days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            hGoal: 'Goal of the week', hAct: 'Activity', hCalc: 'How the target is made', hWeek: 'The week',
            goal: 'Goal from the pool', drawn: 'drawn', draw: 'Draw', thisWeek: 'this week', from: 'from {d}',
            last: 'Active accounts last week', now: 'Active accounts this week', zeal: 'Effort per account',
            zealHint: '100 % = what the pool intends for {r} accounts',
            base: 'Pool target (for {r} accounts)', factor: 'Factor {a} ÷ {r}', factorClamp: '(kept within {lo} … {hi})',
            raw: 'Pool target × factor', target: 'Target, rounded', min: 'Minimum share ({p} %)',
            run: 'Simulate a week', running: 'Week running …',
            progress: 'Progress', share: 'Accounts taking part', xpTotal: 'XP handed out', titles: 'Title "Stronger Together"',
            chartTop: 'Progress of the week', chartBottom: 'Contribution of every account', minLine: 'minimum {n}',
            bonusAll: 'for everyone: {b}', capped: 'capped at gold',
            thStage: 'Stage', thAt: 'at', thWhen: 'reached', thFull: 'full', thLate: 'half', thBonus: 'for everyone until Monday',
            reward: '{xp} XP, {fame} fame', title: 'title "Stronger Together"', notYet: '–', accounts: '{n} accounts', one: '1 account',
            mods: { xpGain: '+{n} % XP', hungerDrain: 'hunger {n} % slower', thirstDrain: 'thirst {n} % slower' },
            lFull: 'took part before the stage (full reward)', lLate: 'joined only afterwards (half XP and fame)', lNone: 'below the minimum share',
            at: '{d} {h}:00',
            note: '<b>Real logic, model week:</b> target, rounding, stages, minimum share, rewards and the draw are the functions of <code>liw_goals/shared/community.lua</code> with the values of <code>Config.Community</code>. Only the contributions of the simulated week are made up: on average every account brings what the pool target intends for {r} accounts (effort 100 %), spread over random play days with an evening peak; some join only later. Contributions are counted hourly in small portions instead of event by event. The draw shows the chain from four weeks before this one without earlier history; weeks redrawn by the team are not included. Rewards for offline players arrive in game the next time they enter the wild; here they count at once.',
        },
    };
    const fill = (s, v) => s.replace(/\{(\w+)\}/g, (m, k) => (v[k] !== undefined ? v[k] : m));

    // Small seeded PRNG (mulberry32).
    function rng(seed) {
        let a = seed >>> 0;
        return () => {
            a = (a + 0x6D2B79F5) >>> 0;
            let t = a;
            t = Math.imul(t ^ (t >>> 15), t | 1);
            t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
    }
    const gauss = (r) => Math.sqrt(-2 * Math.log(1 - r())) * Math.cos(2 * Math.PI * r());
    function poisson(r, lambda) {
        if (lambda <= 0) return 0;
        if (lambda > 30) return Math.max(0, Math.round(lambda + Math.sqrt(lambda) * gauss(r)));
        const l = Math.exp(-lambda); let k = 0, p = 1;
        do { k++; p *= r(); } while (p > l);
        return k - 1;
    }
    // Model: share of play by hour of the day (evening peak), hours after the reset (04:00).
    const HOURLY = Array.from({ length: 24 }, (_, h) => {
        const clock = (h + 4) % 24;
        return 0.15 + Math.exp(-Math.pow((clock - 21) / 3, 2)) + 0.35 * Math.exp(-Math.pow((clock - 14) / 3, 2));
    });

    // Simulates one week: returns per hour the progress, stage times, and per account the history.
    function simulate(goal, target, accountsNow, zeal, seed) {
        const r = rng(seed);
        const unit = goal.unit || 1;
        const counted = target * unit;
        const needs = L.StageTargets(counted, STAGES);
        const cap = needs[needs.length - 1];
        const minC = L.MinContribution(counted, CFG);
        const perAccount = goal.target * unit / CFG.referencePlayers * zeal; // what the pool intends per account
        const M = Math.max(1, accountsNow);
        const weights = Array.from({ length: M }, () => Math.exp(0.8 * gauss(r)));
        const wsum = weights.reduce((a, b) => a + b, 0);
        const accounts = weights.map((w, i) => {
            const firstDay = r() < 0.25 ? 1 + Math.floor(r() * 5) : 0;
            const pDay = 0.3 + 0.6 * r();
            const hours = new Set();
            for (let d = firstDay; d < 7; d++) {
                if (r() < pDay || (d === 6 && hours.size === 0)) {
                    // session start drawn from the evening-weighted hours, 1-4 hours long
                    let x = r() * HOURLY.reduce((a, b) => a + b, 0), h = 0;
                    while (x > HOURLY[h] && h < 23) { x -= HOURLY[h]; h++; }
                    const len = 1 + Math.floor(r() * 4);
                    for (let k = 0; k < len; k++) hours.add(Math.min(167, d * 24 + h + k));
                }
            }
            return { id: i + 1, total: (w / wsum) * M * perAccount, hours, amount: 0, qualified: null, hist: new Float64Array(169) };
        });
        accounts.forEach((a) => { a.perHour = a.total / a.hours.size; });
        const progress = new Float64Array(169);
        const stageAt = [];
        let p = 0, stage = 0;
        for (let h = 0; h < 168; h++) {
            const online = accounts.filter((a) => a.hours.has(h));
            // each hour in four portions, accounts interleaved
            const chunks = online.map((a) => {
                const amt = unit > 1 ? Math.max(0, a.perHour * (0.5 + r())) : poisson(r, a.perHour);
                const parts = [0, 0, 0, 0];
                if (unit > 1) parts.fill(Math.round(amt / 4));
                else for (let k = 0; k < amt; k++) parts[Math.floor(r() * 4)]++;
                return parts;
            });
            for (let q = 0; q < 4; q++) {
                const order = online.map((_, i) => i);
                for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
                for (const i of order) {
                    const add = chunks[i][q];
                    if (add <= 0) continue;
                    const a = online[i];
                    p = Math.min(cap, p + add);
                    a.amount += add;
                    if (a.qualified === null && a.amount >= minC) a.qualified = stage;
                    const reached = L.StageReached(p, counted, STAGES);
                    while (stage < reached) { stage++; stageAt[stage] = h + (q + 1) / 4; }
                }
            }
            progress[h + 1] = p;
            accounts.forEach((a) => { a.hist[h + 1] = a.amount; a.qAt = a.qAt != null ? a.qAt : (a.qualified !== null ? h + 1 : null); });
        }
        accounts.sort((x, y) => y.amount - x.amount || x.id - y.id);
        return { counted, needs, cap, minC, unit, accounts, progress, stageAt, M };
    }

    window.LIW_SIMS = window.LIW_SIMS || [];
    window.LIW_SIMS.push({
        id: 'gemeinschaft',
        order: 80,
        title: { de: 'Gemeinschaftsziele', en: 'Community goals' },
        teaser: { de: 'Ein Ziel für den ganzen Server', en: 'One goal for the whole server' },
        lede: {
            de: 'Jede Woche arbeitet der ganze Server an einem Ziel. Seine Größe richtet sich nach den aktiven Konten der Vorwoche – stell die Aktivität ein und sieh, wie Ziel, Stufen und Belohnungen entstehen.',
            en: 'Every week the whole server works on one goal. Its size follows the active accounts of the week before – set the activity and watch how target, stages and rewards come about.',
        },
        mount(root, lang) {
            const t = T[lang] || T.de;
            const loc = lang === 'de' ? 'de-DE' : 'en-GB';
            const num = (n, d = 0) => n.toLocaleString(loc, { minimumFractionDigits: 0, maximumFractionDigits: d });
            const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            // The real draw: chain from four weeks before this one (each week excludes the week before).
            const nowWeek = weekIndex(Date.now() / 1000);
            const chain = [];
            let lastSet = null;
            for (let w = nowWeek - 4; w <= nowWeek + 3; w++) {
                const pick = L.Pick(POOL, CFG.count, w, lastSet)[0];
                chain.push({ week: w, goal: pick });
                lastSet = { [pick.id]: true };
            }
            const thisPick = chain.find((c) => c.week === nowWeek).goal;

            const style = document.createElement('style');
            style.textContent = `
.sim-gemeinschaft .cg-main { display: grid; gap: 0.8rem; min-width: 0; }
.sim-gemeinschaft .cg-goal { font-family: var(--old); font-size: 1.2rem; line-height: 1.25; color: var(--ink); }
.sim-gemeinschaft .cg-draw { display: grid; gap: 0.1rem; font-size: 0.95rem; color: var(--muted); margin: 0; padding: 0; list-style: none; }
.sim-gemeinschaft .cg-draw li { display: flex; justify-content: space-between; gap: 0.6rem; }
.sim-gemeinschaft .cg-draw li.now { color: var(--gold); }
.sim-gemeinschaft .cg-draw button { font: inherit; color: inherit; background: none; border: 0; padding: 0; cursor: pointer; text-align: right; text-decoration: underline dotted; text-underline-offset: 0.2em; }
.sim-gemeinschaft .sim-field select { width: 100%; min-width: 0; }
.sim-gemeinschaft .sim-note code { font-size: 0.9em; }
.sim-gemeinschaft .cg-kpis { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 11rem), 1fr)); column-gap: 1.5rem; }
.sim-gemeinschaft .cg-kpis .sim-stat { border-top: 1px dotted var(--line); }
.sim-gemeinschaft .cg-hint { font-size: 0.9rem; color: var(--muted); }
.sim-gemeinschaft .cg-table-wrap { overflow-x: auto; background: var(--panel); border: 1px solid var(--line); border-radius: 12px; }
.sim-gemeinschaft table { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
.sim-gemeinschaft th, .sim-gemeinschaft td { text-align: left; padding: 0.4rem 0.6rem; border-top: 1px solid var(--line); vertical-align: top; }
.sim-gemeinschaft thead th { border-top: 0; color: var(--muted); font-weight: 600; font-size: 0.85rem; }
.sim-gemeinschaft td.n { font-variant-numeric: tabular-nums; white-space: nowrap; }
.sim-gemeinschaft td small { display: block; color: var(--muted); font-size: 0.85rem; }
.sim-gemeinschaft .st { font-weight: 600; }
.sim-gemeinschaft tr.off td { color: var(--muted); }
.sim-gemeinschaft .sim-stat.calc b { color: var(--ink); }
.sim-gemeinschaft .sim-stat .sub { color: var(--muted); font-size: 0.85rem; display: block; }
@media (max-width: 860px) { .sim-gemeinschaft .sim-side { order: -1; } }
@media (max-width: 520px) { .sim-gemeinschaft .hide-s { display: none; } .sim-gemeinschaft th, .sim-gemeinschaft td { padding: 0.35rem 0.4rem; } }
`;
            root.appendChild(style);

            const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
            const grid = el('div', 'sim-grid');
            const main = el('div', 'cg-main');
            const view = el('div', 'sim-view');
            const canvas = document.createElement('canvas');
            canvas.setAttribute('role', 'img');
            view.appendChild(canvas);
            const legend = el('div', 'sim-legend',
                `<span><i style="--c:var(--moss)"></i>${t.lFull}</span><span><i style="--c:var(--sky)"></i>${t.lLate}</span><span><i style="--c:var(--muted)"></i>${t.lNone}</span>`);
            const tableWrap = el('div', 'cg-table-wrap');
            main.append(view, legend);

            const side = el('div', 'sim-side');
            // Goal box
            const boxGoal = el('div', 'sim-box', `<h3>${t.hGoal}</h3>`);
            const goalName = el('div', 'cg-goal');
            const selField = el('label', 'sim-field', `<span>${t.goal}</span>`);
            const select = document.createElement('select');
            POOL.forEach((g) => {
                const o = document.createElement('option');
                o.value = g.id;
                o.textContent = t.short[g.id] + (g === thisPick ? ` (${t.drawn})` : '');
                select.appendChild(o);
            });
            selField.appendChild(select);
            const drawList = el('ul', 'cg-draw');
            const fmtDate = (d) => d.toLocaleDateString(loc, { day: '2-digit', month: '2-digit' });
            chain.slice(3, 7).forEach((c) => {
                const li = el('li', c.week === nowWeek ? 'now' : '');
                const label = c.week === nowWeek ? t.thisWeek : fill(t.from, { d: fmtDate(weekStart(c.week)) });
                li.appendChild(el('span', '', label));
                const b = el('button', '', t.short[c.goal.id]);
                b.type = 'button';
                b.addEventListener('click', () => { select.value = c.goal.id; update(false); });
                li.appendChild(b);
                drawList.appendChild(li);
            });
            boxGoal.append(goalName, selField, el('div', 'cg-hint', `${t.draw}:`), drawList);

            // Activity box
            const boxAct = el('div', 'sim-box', `<h3>${t.hAct}</h3>`);
            const slider = (label, min, max, step, value, fmt) => {
                const f = el('label', 'sim-field');
                const head = el('span', '', `<span>${label}</span>`);
                const out = document.createElement('output');
                head.appendChild(out);
                const input = document.createElement('input');
                Object.assign(input, { type: 'range', min, max, step, value });
                f.append(head, input);
                const sync = () => { out.textContent = fmt(+input.value); };
                sync();
                input.addEventListener('input', () => { sync(); update(false); });
                return { f, input };
            };
            const sLast = slider(t.last, 0, 60, 1, 14, (v) => num(v));
            const sNow = slider(t.now, 1, 60, 1, 14, (v) => num(v));
            const sZeal = slider(t.zeal, 50, 200, 10, 100, (v) => `${v} %`);
            const runBtn = el('button', 'sim-btn', t.run);
            runBtn.type = 'button';
            const row = el('div', 'sim-row');
            row.appendChild(runBtn);
            boxAct.append(sLast.f, sNow.f, sZeal.f, el('div', 'cg-hint', fill(t.zealHint, { r: CFG.referencePlayers })), row);

            // Calculation box
            const boxCalc = el('div', 'sim-box', `<h3>${t.hCalc}</h3>`);
            const calc = el('div', '');
            boxCalc.appendChild(calc);
            // Week result box
            const boxWeek = el('div', 'sim-box', `<h3>${t.hWeek}</h3>`);
            const week = el('div', 'cg-kpis');
            boxWeek.appendChild(week);

            main.append(boxWeek, tableWrap);
            side.append(boxGoal, boxAct, boxCalc);
            grid.append(main, side);
            const note = el('p', 'sim-note', fill(t.note, { r: CFG.referencePlayers }));
            root.append(grid, note);

            // Colours from the site tokens (canvas uses the same values).
            const cs = getComputedStyle(root);
            const tok = (n, fb) => (cs.getPropertyValue(n).trim() || fb);
            const C = {
                gold: tok('--gold', '#d6ae5e'), rust: tok('--rust', '#c8694a'), moss: tok('--moss', '#8fb878'), sky: tok('--sky', '#7ea6cc'),
                ink: tok('--ink', '#efe7d8'), soft: tok('--soft', '#cfc4b0'), muted: tok('--muted', '#9f927e'),
                body: tok('--body', 'Georgia, serif'),
            };
            const stageColor = [C.rust, C.soft, C.gold];

            let sim = null, goal = null, target = 0, hour = 168, raf = 0, seed = 20261118, lastTs = 0;

            const fmtAmount = (v) => (sim && sim.unit > 1 ? num(v / sim.unit, 1) : num(v));
            const whenText = (x) => {
                const h = Math.min(167.99, x);
                const d = Math.floor(h / 24);
                const clock = (Math.floor(h % 24) + 4) % 24; // week starts at 04:00 German time (reset hour)
                return fill(t.at, { d: t.days[d], h: String(clock).padStart(2, '0') });
            };
            const bonusText = (mods) => Object.keys(mods).sort().map((m) => fill(t.mods[m], { n: Math.round(Math.abs(mods[m]) * 100) })).join(', ');

            function update(animate) {
                cancelAnimationFrame(raf); raf = 0;
                goal = POOL.find((g) => g.id === select.value);
                const accLast = +sLast.input.value;
                target = L.Target(goal.target, accLast, CFG);
                if (animate) seed = (seed * 48271 + 7) % 2147483647;
                sim = simulate(goal, target, +sNow.input.value, +sZeal.input.value / 100, seed);
                goalName.textContent = fill(t.goals[goal.id], { n: num(target) });
                const factor = L.Factor(accLast, CFG);
                const clamped = factor !== accLast / CFG.referencePlayers;
                calc.innerHTML = [
                    [fill(t.base, { r: CFG.referencePlayers }), num(goal.target)],
                    [fill(t.factor, { a: accLast, r: CFG.referencePlayers }) + (clamped ? `<span class="sub">${fill(t.factorClamp, { lo: num(CFG.minFactor, 2), hi: num(CFG.maxFactor, 2) })}</span>` : ''), `× ${num(factor, 2)}`],
                    [t.raw, num(goal.target * factor, 2)],
                    [t.target, `<span style="color:var(--gold)">${num(target)}</span>`],
                    ...STAGES.map((s, i) => [`<span style="color:${stageColor[i]}">${t.stages[i]}</span> · ${s.percent} %`, fmtAmount(sim.needs[i])]),
                    [fill(t.min, { p: num(CFG.minShare * 100) }), fmtAmount(sim.minC)],
                ].map(([k, v]) => `<div class="sim-stat calc"><span>${k}</span><b>${v}</b></div>`).join('');
                if (animate && !reduced) {
                    hour = 0; lastTs = 0;
                    runBtn.textContent = t.running; runBtn.disabled = true;
                    raf = requestAnimationFrame(tick);
                } else {
                    hour = 168;
                    runBtn.textContent = t.run; runBtn.disabled = false;
                }
                render();
            }

            function tick(ts) {
                if (!lastTs) lastTs = ts;
                hour = Math.min(168, hour + (ts - lastTs) / 1000 * 28); // a week in about six seconds
                lastTs = ts;
                render();
                if (hour < 168) raf = requestAnimationFrame(tick);
                else { raf = 0; runBtn.textContent = t.run; runBtn.disabled = false; }
            }

            // State at the current hour: stage, rewards and who took part.
            function stateAt(h) {
                const hi = Math.floor(h);
                const p = sim.progress[hi];
                const stage = sim.stageAt.reduce((s, at, i) => (at != null && at <= h ? Math.max(s, i) : s), 0);
                let xp = 0, part = 0, titles = 0;
                const perStage = STAGES.map(() => ({ full: 0, late: 0 }));
                sim.accounts.forEach((a) => {
                    const q = a.qAt != null && a.qAt <= hi ? a.qualified : null;
                    a.status = q === null ? 0 : 1;
                    if (q === null) return;
                    part++;
                    for (let s = 1; s <= stage; s++) {
                        const f = L.RewardFactor(s, q, CFG);
                        if (f >= 1) perStage[s - 1].full++; else perStage[s - 1].late++;
                        xp += Math.floor(STAGES[s - 1].xp * f + 0.5);
                        if (s === STAGES.length && f >= 1) titles++;
                    }
                    a.status = q === 0 ? 1 : 2; // 1 = in from the start, 2 = joined after a stage
                });
                return { hi, p, stage, xp, part, titles, perStage };
            }

            function render() {
                if (!sim) return;
                const st = stateAt(hour);
                // side: week results
                const pct = Math.round(st.p / sim.counted * 100);
                week.innerHTML = [
                    [t.progress, `${fmtAmount(st.p)} / ${num(target)} · ${pct} %`],
                    [t.share, `${num(st.part)} / ${num(sim.M)}`],
                    [t.xpTotal, num(st.xp)],
                    [t.titles, num(st.titles)],
                ].map(([k, v]) => `<div class="sim-stat"><span>${k}</span><b>${v}</b></div>`).join('');
                // table of stages
                const accText = (n) => (n === 1 ? t.one : fill(t.accounts, { n: num(n) }));
                const rows = STAGES.map((s, i) => {
                    const on = i < st.stage;
                    const full = fill(t.reward, { xp: num(s.xp), fame: num(s.fame) }) + (s.title ? `, ${t.title}` : '');
                    const late = fill(t.reward, { xp: num(Math.floor(s.xp * CFG.lateFactor + 0.5)), fame: num(Math.floor(s.fame * CFG.lateFactor + 0.5)) });
                    return `<tr class="${on ? '' : 'off'}">
<td><span class="st" style="color:${stageColor[i]}">${t.stages[i]}</span><small>${s.percent} % · ${fmtAmount(sim.needs[i])}</small></td>
<td class="n">${on ? whenText(sim.stageAt[i + 1]) : t.notYet}</td>
<td>${full}<small>${on ? accText(st.perStage[i].full) : ''}</small></td>
<td class="hide-s">${late}<small>${on ? accText(st.perStage[i].late) : ''}</small></td>
<td>${s.bonus ? bonusText(s.bonus) : t.notYet}</td></tr>`;
                }).join('');
                tableWrap.innerHTML = `<table><thead><tr><th>${t.thStage}</th><th>${t.thWhen}</th><th>${t.thFull}</th><th class="hide-s">${t.thLate}</th><th>${t.thBonus}</th></tr></thead><tbody>${rows}</tbody></table>`;
                draw(st);
            }

            function draw(st) {
                const w = Math.max(280, view.clientWidth || 600);
                const h = Math.round(clamp(w * 0.66, 340, 500));
                const dpr = Math.min(2, window.devicePixelRatio || 1);
                if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
                    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
                }
                canvas.style.height = `${h}px`;
                const g = canvas.getContext('2d');
                g.setTransform(dpr, 0, 0, dpr, 0, 0);
                g.clearRect(0, 0, w, h);
                const small = w < 480;
                const fs = small ? 11 : 13;
                const font = (size, weight = '') => `${weight} ${size}px ${C.body}`;
                const padL = small ? 10 : 16, padR = small ? 10 : 16;
                const x0 = padL, x1 = w - padR;
                // --- top panel: progress over the week
                const tTop = 12, y0 = tTop + 22, y1 = Math.round(h * 0.6);
                g.fillStyle = C.soft; g.font = font(fs + 1, '600'); g.textBaseline = 'top'; g.textAlign = 'left';
                g.fillText(t.chartTop, x0, tTop);
                const yMax = sim.cap * 1.14;
                const X = (hr) => x0 + (x1 - x0) * hr / 168;
                const Y = (v) => y1 - (y1 - y0) * v / yMax;
                // bonus bands
                [2, 3].forEach((s) => {
                    const at = sim.stageAt[s];
                    if (at != null && at <= hour) {
                        g.fillStyle = 'rgba(126,166,204,' + (s === 2 ? 0.07 : 0.07) + ')';
                        g.fillRect(X(at), y0, x1 - X(at), y1 - y0);
                    }
                });
                // day grid
                g.strokeStyle = 'rgba(239,231,216,0.07)'; g.lineWidth = 1;
                g.font = font(fs); g.fillStyle = C.muted; g.textAlign = 'center'; g.textBaseline = 'top';
                for (let d = 0; d <= 7; d++) {
                    const x = Math.round(X(d * 24)) + 0.5;
                    g.beginPath(); g.moveTo(x, y0); g.lineTo(x, y1); g.stroke();
                    if (d < 7) g.fillText(t.days[d], X(d * 24 + 12), y1 + 4);
                }
                // stage lines
                g.setLineDash([5, 4]);
                sim.needs.forEach((need, i) => {
                    const y = Math.round(Y(need)) + 0.5;
                    g.strokeStyle = stageColor[i]; g.globalAlpha = 0.75;
                    g.beginPath(); g.moveTo(x0, y); g.lineTo(x1, y); g.stroke();
                    g.globalAlpha = 1;
                    g.fillStyle = stageColor[i]; g.textAlign = 'left'; g.textBaseline = 'bottom'; g.font = font(fs);
                    g.fillText(`${t.stages[i]} · ${fmtAmount(need)}`, x0 + 4, y - 2);
                });
                g.setLineDash([]);
                // progress line
                g.strokeStyle = C.moss; g.lineWidth = 2.2; g.lineJoin = 'round';
                g.beginPath();
                for (let k = 0; k <= st.hi; k++) { const x = X(k), y = Y(sim.progress[k]); if (k) g.lineTo(x, y); else g.moveTo(x, y); }
                if (hour > st.hi && st.hi < 168) g.lineTo(X(hour), Y(sim.progress[st.hi]));
                g.stroke();
                g.lineWidth = 1;
                // markers where stages were reached
                sim.stageAt.forEach((at, s) => {
                    if (at == null || at > hour) return;
                    const x = X(at), y = Y(sim.needs[s - 1]);
                    g.fillStyle = stageColor[s - 1]; g.strokeStyle = '#0b0a08'; g.lineWidth = 2;
                    g.beginPath(); g.arc(x, y, 5, 0, Math.PI * 2); g.fill(); g.stroke(); g.lineWidth = 1;
                });
                // bonus label
                const bonusNow = L.Bonus(st.stage);
                if (bonusNow) {
                    g.fillStyle = C.sky; g.font = font(fs - 1); g.textAlign = 'right'; g.textBaseline = 'top';
                    const text = fill(t.bonusAll, { b: bonusText(bonusNow) });
                    let tx = text;
                    while (g.measureText(tx).width > (x1 - x0) * 0.62 && tx.length > 8) tx = tx.slice(0, -2);
                    g.fillText(tx === text ? text : tx + '…', x1 - 2, tTop + 2);
                }
                // cursor while running
                if (hour < 168) {
                    g.strokeStyle = 'rgba(214,174,94,0.5)';
                    g.beginPath(); g.moveTo(Math.round(X(hour)) + 0.5, y0); g.lineTo(Math.round(X(hour)) + 0.5, y1); g.stroke();
                }
                if (st.p >= sim.cap) {
                    g.fillStyle = C.muted; g.font = font(fs - 1); g.textAlign = 'right'; g.textBaseline = 'bottom';
                    g.fillText(t.capped, x1 - 2, Y(sim.cap) - 2);
                }
                // --- bottom panel: contribution of every account (sorted by the week's total)
                const bTop = y1 + fs + 16, by0 = bTop + 20, by1 = h - 10;
                g.fillStyle = C.soft; g.font = font(fs + 1, '600'); g.textAlign = 'left'; g.textBaseline = 'top';
                g.fillText(t.chartBottom, x0, bTop);
                const maxA = Math.max(sim.minC * 1.5, sim.accounts[0].amount) * 1.05;
                const BY = (v) => by1 - (by1 - by0) * v / maxA;
                const n = sim.accounts.length, slot = (x1 - x0) / n, bw = Math.max(1, Math.min(28, slot * (n > 30 ? 0.75 : 0.68)));
                g.strokeStyle = 'rgba(239,231,216,0.12)';
                g.beginPath(); g.moveTo(x0, by1 + 0.5); g.lineTo(x1, by1 + 0.5); g.stroke();
                sim.accounts.forEach((a, i) => {
                    const v = a.hist[st.hi];
                    g.fillStyle = a.status === 1 ? C.moss : a.status === 2 ? C.sky : C.muted;
                    g.globalAlpha = a.status ? 0.95 : 0.55;
                    const top = BY(v);
                    g.fillRect(x0 + i * slot + (slot - bw) / 2, top, bw, Math.max(v > 0 ? 1 : 0, by1 - top));
                });
                g.globalAlpha = 1;
                const my = Math.round(BY(sim.minC)) + 0.5;
                g.setLineDash([4, 4]); g.strokeStyle = C.gold;
                g.beginPath(); g.moveTo(x0, my); g.lineTo(x1, my); g.stroke(); g.setLineDash([]);
                // legend of the minimum line, right of the panel title
                g.font = font(fs - 1); g.textAlign = 'right'; g.textBaseline = 'top';
                const mText = fill(t.minLine, { n: fmtAmount(sim.minC) });
                const mx = x1 - g.measureText(mText).width - 6;
                g.setLineDash([4, 4]); g.beginPath(); g.moveTo(mx - 22, bTop + fs * 0.6); g.lineTo(mx, bTop + fs * 0.6); g.stroke(); g.setLineDash([]);
                g.fillStyle = C.gold; g.fillText(mText, x1, bTop + 1);
                canvas.setAttribute('aria-label', `${goalName.textContent}: ${fmtAmount(st.p)} / ${num(target)}`);
            }

            select.value = thisPick.id;
            select.addEventListener('change', () => update(false));
            runBtn.addEventListener('click', () => update(true));
            let resizeRaf = 0;
            const onResize = () => { cancelAnimationFrame(resizeRaf); resizeRaf = requestAnimationFrame(() => { if (!raf) render(); }); };
            const ro = window.ResizeObserver ? new ResizeObserver(onResize) : null;
            if (ro) ro.observe(view); else window.addEventListener('resize', onResize);
            update(false);

            return {
                destroy() {
                    cancelAnimationFrame(raf); cancelAnimationFrame(resizeRaf); raf = 0;
                    if (ro) ro.disconnect(); else window.removeEventListener('resize', onResize);
                },
            };
        },
    });
})();
