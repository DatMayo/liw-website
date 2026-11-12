// Territories: one territory, two groups (A and B). The tick follows liw_territory/server/main.lua
// (updateTerritory, attackAllowed, alarmRunsOut, addClaim, setOwner, the mark callback); the numbers
// are the defaults of liw_territory/config.lua and shared/size.lua (as of 12.11.2026).
(() => {
    // Real values (liw_territory/config.lua, shared/size.lua).
    const CFG = {
        tick: 5,                                     // Config.TickSeconds
        limits: { small: 80000, medium: 300000 },    // Config.SizeLimits (m²)
        capture: { minutes: 10, ref: 100000, min: 3, max: 40, perExtra: 0.5, maxAnimals: 4, claimDecay: 20, declare: 10, start: 100 },
        hold: { regen: 10, decayHours: 72 },         // Config.Hold
        def: { protectHours: 48, neglect: 50, absentHours: 24, minOnline: 1, from: 12, to: 24, alarm: 5, alarmReset: 2 },
        mark: { amount: 8, cool: 90 },               // Config.Mark
        allow: { loner: 1, pack: 2, skillBonus: 1, lonerMax: 2 },
    };
    const START_HOUR = 14;                           // simulated clock starts at 14:00 (inside the attack hours)
    const KEEP = 100 * 3600;                         // seconds of history kept for the chart

    const C = {
        ink: '#efe7d8', soft: '#cfc4b0', muted: '#9f927e', gold: '#d6ae5e', goldHi: '#e8c47a', rust: '#c8694a',
        moss: '#8fb878', sky: '#7ea6cc', line: 'rgba(239,231,216,0.09)', grid: 'rgba(239,231,216,0.07)', edge: '#4a3d2e', plate: '#0b0a08',
    };
    const GROUP_C = { A: C.sky, B: C.rust };
    const STATUS_C = { free: C.edge, claiming: C.gold, held: C.moss, challenged: C.goldHi, attacked: C.rust, contested: C.ink, protected: C.muted };

    const T = {
        de: {
            name: 'Kiefernsenke', groupA: 'Gruppe A', groupB: 'Gruppe B',
            free: 'Herrenlos', ownedBy: 'Revier von {name}', claim: 'Anspruch', control: 'Zustand',
            st_free: 'Zweimal G drücken, um Anspruch zu erheben', st_free_decl: 'Niemand mit Anspruch ist im Revier',
            st_claiming: '{name} nimmt es ein', st_held_in: 'Besitzer vor Ort – Zustand steigt', st_held_away: 'Niemand da – Zustand sinkt langsam',
            st_challenged: 'Eindringlinge! Zustand sinkt in {time}', st_attacked: '{name} verdrängt die Besitzer',
            st_contested: 'Umkämpft – nichts bewegt sich',
            st_protected_takeover: 'Frisch eingenommen – noch {h} Std. geschützt', st_protected_hours: 'Herausfordern nur {from}–{to} Uhr',
            st_protected_offline: 'Besitzer fort – gepflegt, nicht herausforderbar',
            size_small: 'klein', size_medium: 'mittel', size_large: 'groß',
            hScen: 'ausgangslage', scClaim: 'Einnehmen', scAttack: 'Angriff', scDefend: 'Verteidigen', scDecay: 'Verfall',
            hTerr: 'revier & zeit', area: 'Fläche', areaOut: '{ha} ha · {cls}', alone: 'Allein einnehmen: {min}',
            speed: 'Tempo', speedOpt: '1 s = {v}', play: 'Weiter', pause: 'Pause', skip: '+6 Std.', skipTitle: 'Sechs Stunden vorspulen',
            kind: 'Art der Gruppe', k_pack: 'Rudel (bis mittel)', k_pack_skill: 'Rudel mit Revierkunde (bis groß)',
            k_loner: 'Einzeltier (bis klein)', k_loner_skill: 'Einzeltier mit Revierkunde (bis mittel)',
            inside: 'Tiere im Revier', online: 'Sonst irgendwo in der Wildnis online', declare: 'Zweimal G', mark: 'G markieren ({n}/{m})',
            owner: 'Besitzer', declared: 'Anspruch erhoben', none: '–',
            hStats: 'stand', sClock: 'Uhrzeit (simuliert)', sDay: 'Tag {d}, {hm} Uhr', sProtect: 'Übernahmeschutz', sCare: 'Pflege',
            cared: 'gepflegt', neglected: 'vernachlässigt', sAlarm: 'Alarm', sRate: 'Tempo vor Ort', rateOut: '100 in {time}',
            hLog: 'meldungen', now: 'jetzt',
            lControl: 'Zustand (Farbe des Besitzers)', lClaim: 'Anspruch', lMark: 'Duftmarke', lNeglect: 'unter 50: vernachlässigt',
            sts: { free: 'herrenlos', claiming: 'wird eingenommen', held: 'gehalten', challenged: 'Alarm', attacked: 'angegriffen', contested: 'umkämpft', protected: 'geschützt' },
            m_inside: '{g}: niemand im Revier', m_cool: '{g}: Duftmarke noch frisch (90 s je Tier)', m_need: '{g}: erst Anspruch erheben (zweimal G)',
            m_big: '{g}: Zu groß für euch ({cls})', m_prot: '{g}: {why}',
            m_decl_free: '{g} erhebt Anspruch – jetzt zählt ihre Anwesenheit', m_decl_alarm: '{g} erhebt Anspruch – Besitzer gewarnt, Verdrängen ab {n} Min.',
            m_own: '{g} markiert: Zustand +8', m_claim: '{g} markiert: Anspruch +8', m_push: '{g} markiert: Anspruch des anderen −8',
            m_attack: '{g} markiert: Zustand der Besitzer −8', m_alarm: '{g} markiert – Verdrängen erst nach dem Alarm',
            m_taken: 'Revier erobert von {g} – {h} Std. Übernahmeschutz', m_retaken: '{g} holt es zurück – nur der Rest des alten Schutzes',
            m_lost: '{g} verliert das Revier', m_decayed: 'Zustand bei 0 – das Revier ist wieder frei',
            m_expired: 'Anspruch von {g} erloschen ({n} Min. nicht im Revier)', m_alarm_end: 'Alarm vorbei – Fremde {n} Min. fort',
            m_defended: '{g} hat das Revier verteidigt', m_neglected: 'Revier gilt jetzt als vernachlässigt – jederzeit angreifbar',
            min: '{n} Min.', hrs: '{h} Std.', hrsMin: '{h} Std. {m} Min.', sec: '{n} s', ago: '−{v}', none2: 'keiner', running: 'läuft, noch {time}',
            title: 'Revier und Zeitverlauf',
            note: '<b>So rechnet der Server:</b> Alle 5 Sekunden prüft er, wer im Revier steht. Einfach hineinlaufen nimmt nichts ein – eine Gruppe zählt erst, wenn sie Anspruch erhoben hat (zweimal G); der Anspruch erlischt, wenn 10 Minuten niemand von ihr drin war. Allein dauert das Einnehmen 10 Min. × √(Fläche / 10 ha), mindestens 3 und höchstens 40 Minuten; jedes weitere Tier macht 50 % schneller (bis 4 Tiere). Eine Duftmarke zählt 8 von 100 Punkten, danach braucht dasselbe Tier 90 s Pause. Besitzer vor Ort heben den Zustand in 10 Minuten von 0 auf 100, ohne sie fällt er in 72 Stunden auf 0 – dann ist das Revier frei. Nach jeder Übernahme ist es 48 Stunden geschützt. Ein gepflegtes Revier (Zustand ab 50, Besitzer in den letzten 24 Stunden drin) lässt sich nur von 12 bis 24 Uhr herausfordern und nur, wenn ein Besitzer online ist. Erst 5 Minuten nach dem Alarm sinkt der Zustand; sind zwei Gruppen drin, ist es umkämpft. <b>Vereinfacht:</b> ein Revier und zwei Gruppen; Bündnisse, Rudelränge, Alter, Neulinge im Rudel, Begleiter, wilde Rudel und Rudel-Perks (die Zeiten und Größen verlängern) fehlen; jede Gruppe erhebt nur hier Anspruch; die Uhr ist simuliert und beginnt um 14 Uhr. Werte: liw_territory/config.lua, Stand 12.11.2026.',
        },
        en: {
            name: 'Pine Hollow', groupA: 'Group A', groupB: 'Group B',
            free: 'Unclaimed', ownedBy: 'Territory of {name}', claim: 'Claim', control: 'Hold',
            st_free: 'Press G twice to lay claim', st_free_decl: 'Nobody with a claim is inside',
            st_claiming: '{name} is claiming it', st_held_in: 'Owners inside – hold rises', st_held_away: 'Nobody home – hold slowly drops',
            st_challenged: 'Intruders! Hold starts dropping in {time}', st_attacked: '{name} is pushing the owners out',
            st_contested: 'Contested – nothing moves',
            st_protected_takeover: 'Recently taken – protected for {h} h', st_protected_hours: "Can only be challenged {from}-{to} o'clock",
            st_protected_offline: 'Owners away – cared for, cannot be challenged',
            size_small: 'small', size_medium: 'medium', size_large: 'large',
            hScen: 'starting point', scClaim: 'Claim', scAttack: 'Attack', scDefend: 'Defend', scDecay: 'Decay',
            hTerr: 'territory & time', area: 'Area', areaOut: '{ha} ha · {cls}', alone: 'Taking it alone: {min}',
            speed: 'Speed', speedOpt: '1 s = {v}', play: 'Resume', pause: 'Pause', skip: '+6 h', skipTitle: 'Skip six hours ahead',
            kind: 'Kind of group', k_pack: 'Pack (up to medium)', k_pack_skill: 'Pack with Territorial (up to large)',
            k_loner: 'Loner (up to small)', k_loner_skill: 'Loner with Territorial (up to medium)',
            inside: 'Animals inside', online: 'Otherwise online somewhere in the wild', declare: 'G twice', mark: 'Mark with G ({n}/{m})',
            owner: 'Owner', declared: 'Claim laid', none: '–',
            hStats: 'state', sClock: 'Time (simulated)', sDay: 'Day {d}, {hm}', sProtect: 'Takeover protection', sCare: 'Care',
            cared: 'cared for', neglected: 'neglected', sAlarm: 'Alarm', sRate: 'Pace inside', rateOut: '100 in {time}',
            hLog: 'messages', now: 'now',
            lControl: "Hold (owner's colour)", lClaim: 'Claim', lMark: 'Scent mark', lNeglect: 'below 50: neglected',
            sts: { free: 'unclaimed', claiming: 'being claimed', held: 'held', challenged: 'alarm', attacked: 'attacked', contested: 'contested', protected: 'protected' },
            m_inside: '{g}: nobody inside', m_cool: '{g}: scent mark still fresh (90 s per animal)', m_need: '{g}: lay claim first (G twice)',
            m_big: '{g}: Too big for you ({cls})', m_prot: '{g}: {why}',
            m_decl_free: '{g} lays claim – their presence counts now', m_decl_alarm: '{g} lays claim – owners warned, pushing out from {n} min',
            m_own: '{g} marks: hold +8', m_claim: '{g} marks: claim +8', m_push: "{g} marks: the other group's claim −8",
            m_attack: "{g} marks: owners' hold −8", m_alarm: '{g} marks – pushing out only after the alarm',
            m_taken: 'Territory taken by {g} – {h} h takeover protection', m_retaken: '{g} takes it back – only the rest of the old protection',
            m_lost: '{g} loses the territory', m_decayed: 'Hold at 0 – the territory is free again',
            m_expired: "{g}'s claim ran out ({n} min not inside)", m_alarm_end: 'Alarm over – strangers gone for {n} min',
            m_defended: '{g} defended the territory', m_neglected: 'The territory now counts as neglected – it can be attacked any time',
            min: '{n} min', hrs: '{h} h', hrsMin: '{h} h {m} min', sec: '{n} s', ago: '−{v}', none2: 'none', running: 'running, {time} left',
            title: 'Territory and timeline',
            note: '<b>How the server counts:</b> every 5 seconds it checks who stands in the territory. Just walking in takes nothing – a group only counts once it has laid claim (G twice); the claim runs out when none of it has been inside for 10 minutes. Alone, taking it takes 10 min × √(area / 10 ha), at least 3 and at most 40 minutes; every further animal makes it 50 % faster (up to 4 animals). A scent mark counts 8 of 100 points, then the same animal needs a 90 s break. Owners inside raise the hold from 0 to 100 in 10 minutes; without them it falls to 0 in 72 hours – then the territory is free. After every takeover it is protected for 48 hours. A cared-for territory (hold at least 50, an owner inside within the last 24 hours) can only be challenged from 12:00 to 24:00 and only while an owner is online. The hold only drops 5 minutes after the alarm; with two groups inside it is contested. <b>Simplified:</b> one territory and two groups; alliances, pack ranks, age, pack newcomers, companions, wild packs and pack perks (which extend times and sizes) are left out; each group only lays claim here; the clock is simulated and starts at 14:00. Values: liw_territory/config.lua, as of 12.11.2026.',
        },
    };

    const SPEEDS = [1, 10, 30, 120, 600, 3600];
    const WINDOWS = [600, 900, 1200, 3600, 6 * 3600, 80 * 3600];   // chart window (simulated seconds) per speed

    const STYLE = `
.sim-reviere .rv-panel { display: grid; gap: 0.35rem; padding: 0.75rem 0.9rem 0.6rem; border-bottom: 1px solid var(--line); }
.sim-reviere .rv-top { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.2rem 0.8rem; align-items: baseline; }
.sim-reviere .rv-name { font-family: var(--old); font-size: 1.3rem; line-height: 1.2; }
.sim-reviere .rv-clock { color: var(--muted); font-size: 0.95rem; font-variant-numeric: tabular-nums; }
.sim-reviere .rv-owner { color: var(--soft); font-size: 1rem; }
.sim-reviere .rv-status { border-left: 2px solid var(--gold); padding: 0.05rem 0.6rem; font-size: 1rem; color: var(--ink); min-height: 1.6em; }
.sim-reviere .rv-bar { position: relative; height: 0.7rem; border-radius: 999px; background: #1a1510; border: 1px solid var(--cap-edge); overflow: hidden; }
.sim-reviere .rv-fill { position: absolute; inset: 0 auto 0 0; width: 0; background: var(--gold); }
.sim-reviere .rv-foot { display: flex; justify-content: space-between; gap: 0.5rem; font-size: 0.9rem; color: var(--muted); font-variant-numeric: tabular-nums; }
.sim-reviere .rv-legend { padding: 0.5rem 0.9rem 0.7rem; border-top: 1px solid var(--line); }
.sim-reviere .rv-gh { display: flex; align-items: center; gap: 0.45rem; }
.sim-reviere .rv-gh i { width: 0.75rem; height: 0.75rem; border-radius: 50%; background: var(--c); flex: none; }
.sim-reviere .rv-badge { font-size: 0.85rem; color: var(--muted); margin-left: auto; font-family: var(--body); letter-spacing: 0; text-transform: none; }
.sim-reviere .rv-log { display: grid; gap: 0.2rem; font-size: 0.95rem; color: var(--soft); margin: 0; padding: 0; list-style: none; min-height: 5.5em; }
.sim-reviere .rv-log li { display: grid; grid-template-columns: 4.6rem 1fr; gap: 0.4rem; }
.sim-reviere .rv-log time { color: var(--muted); font-variant-numeric: tabular-nums; }
.sim-reviere .rv-small { font-size: 0.95rem; color: var(--muted); }
.sim-reviere .sim-btn:disabled { opacity: 0.45; cursor: default; }
.sim-reviere .sim-field select { min-width: 0; max-width: 100%; }
`;

    const fill = (s, vars) => s.replace(/\{(\w+)\}/g, (_, k) => (vars && vars[k] != null ? vars[k] : `{${k}}`));
    const clamp = (v) => Math.max(0, Math.min(100, v));

    function el(tag, props, kids) {
        const n = document.createElement(tag);
        if (props) {
            for (const [k, v] of Object.entries(props)) {
                if (k === 'style') n.style.cssText = v;
                else if (k in n) n[k] = v;
                else n.setAttribute(k, v);
            }
        }
        for (const kid of kids || []) if (kid != null) n.append(kid);
        return n;
    }

    // shared/size.lua
    function sizeClass(area) { return area <= CFG.limits.small ? 1 : area <= CFG.limits.medium ? 2 : 3; }
    function captureMinutes(area) {
        const m = CFG.capture.minutes * Math.sqrt(area / CFG.capture.ref);
        return Math.max(CFG.capture.min, Math.min(CFG.capture.max, m));
    }
    // Config.Allowance: largest size class per kind of group.
    function allowance(kind) {
        const a = CFG.allow;
        if (kind === 'pack') return a.pack;
        if (kind === 'pack_skill') return a.pack + a.skillBonus;
        if (kind === 'loner') return a.loner;
        return Math.min(a.loner + a.skillBonus, a.lonerMax);
    }

    window.LIW_SIMS = window.LIW_SIMS || [];
    window.LIW_SIMS.push({
        id: 'reviere',
        order: 10,
        title: { de: 'Reviere', en: 'Territories' },
        teaser: { de: 'Einnehmen, halten, verlieren', en: 'Claim, hold, lose' },
        lede: {
            de: 'Ein Revier, zwei Gruppen: Setze Tiere hinein, erhebe Anspruch, markiere mit G und sieh zu, wie Anspruch und Zustand im Zeitraffer steigen und fallen – mit den echten Zeiten des Servers.',
            en: 'One territory, two groups: put animals inside, lay claim, mark with G and watch claim and hold rise and fall in fast motion – with the real timings of the server.',
        },
        mount(root, lang) {
            const t = T[lang] || T.de;
            const loc = lang === 'de' ? 'de-DE' : 'en-GB';
            const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const num = (v, d = 1) => v.toLocaleString(loc, { maximumFractionDigits: d });
            const gName = (k) => (k === 'A' ? t.groupA : t.groupB);
            const clsName = (c) => t[['size_small', 'size_medium', 'size_large'][c - 1]];

            function dur(sec) {
                sec = Math.max(0, sec);
                if (sec < 60) return fill(t.sec, { n: Math.ceil(sec) });
                if (sec < 3600) return fill(t.min, { n: num(sec / 60, sec < 600 ? 1 : 0) });
                const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60);
                return m && h < 10 ? fill(t.hrsMin, { h, m }) : fill(t.hrs, { h });
            }

            // ---------------------------------------------------------------- state
            let s;
            function fresh(area) {
                return {
                    t: 0, area, owner: null, control: 0, claim: 0, claimKey: null,
                    declared: { A: null, B: null }, alarm: null, protectedUntil: null, prevOwner: null, prevProtectedUntil: null,
                    lastVisit: null, status: 'free', protectReason: null, wasNeglected: false,
                    groups: {
                        A: { kind: 'pack', count: 0, online: true, cool: [] },
                        B: { kind: 'pack', count: 0, online: true, cool: [] },
                    },
                    samples: [], events: [], log: [],
                };
            }
            const capMin = () => captureMinutes(s.area);
            const fits = (k) => allowance(s.groups[k].kind) >= sizeClass(s.area);
            const hourAt = (time) => ((START_HOUR * 3600 + time) / 3600) % 24;
            function inAttackHours() {
                const { from, to } = CFG.def, h = hourAt(s.t);
                if (from === to) return true;
                return from < to ? h >= from && h < to : h >= from || h < to;
            }
            const online = (k) => s.groups[k].count > 0 || s.groups[k].online;
            const neglected = () => s.control < CFG.def.neglect || s.t - (s.lastVisit ?? s.t) >= CFG.def.absentHours * 3600;
            // Control / claim points per second (server/main.lua speed()).
            function speed(k) {
                const n = Math.min(s.groups[k].count, CFG.capture.maxAnimals);
                return (100 / (capMin() * 60)) * (1 + CFG.capture.perExtra * (n - 1));
            }
            function say(text) {
                s.log.unshift({ t: s.t, text });
                s.log.length = Math.min(s.log.length, 6);
            }
            function attackAllowed() {
                if (!s.owner) return [true];
                if (s.protectedUntil != null && s.t < s.protectedUntil) return [false, 'takeover'];
                if (neglected()) return [true];
                if (!inAttackHours()) return [false, 'hours'];
                if ((online(s.owner) ? 1 : 0) < CFG.def.minOnline) return [false, 'offline'];
                return [true];
            }
            function protectText(why) {
                if (why === 'takeover') return fill(t.st_protected_takeover, { h: Math.floor(Math.max(0, s.protectedUntil - s.t) / 3600) });
                if (why === 'hours') return fill(t.st_protected_hours, { from: CFG.def.from, to: CFG.def.to });
                return t.st_protected_offline;
            }
            function alarmRunsOut(k) {
                if (!s.alarm || s.alarm.key !== k) {
                    s.alarm = { key: k, startedAt: s.t, seenAt: s.t };
                    return false;
                }
                s.alarm.seenAt = s.t;
                return s.t - s.alarm.startedAt >= CFG.def.alarm * 60;
            }
            function addClaim(k, amount) {
                if (s.claimKey && s.claimKey !== k && s.claim > 0) {
                    s.claim = Math.max(0, s.claim - amount);   // push back the other claim first
                    return false;
                }
                s.claimKey = k;
                s.claim = clamp(s.claim + amount);
                return s.claim >= 100;
            }
            function setOwner(k) {
                const previous = s.owner;
                if (k) {
                    if (s.prevOwner === k) {
                        s.protectedUntil = s.prevProtectedUntil != null && s.prevProtectedUntil > s.t ? s.prevProtectedUntil : null;
                        say(fill(t.m_retaken, { g: gName(k) }));
                    } else {
                        s.protectedUntil = s.t + CFG.def.protectHours * 3600;
                        say(fill(t.m_taken, { g: gName(k), h: CFG.def.protectHours }));
                    }
                    s.prevOwner = null; s.prevProtectedUntil = null;
                    s.declared[k] = null;
                    s.events.push({ t: s.t, type: 'owner', k });
                } else {
                    s.prevOwner = previous; s.prevProtectedUntil = s.protectedUntil;
                    s.protectedUntil = null;
                    if (previous) s.events.push({ t: s.t, type: 'lost', k: previous });
                }
                s.owner = k;
                s.claimKey = null; s.claim = 0; s.alarm = null;
                s.control = k ? CFG.capture.start : 0;
                s.lastVisit = k ? s.t : null;
                s.wasNeglected = false;
            }

            // One server tick (updateTerritory).
            function tick() {
                const dt = CFG.tick;
                s.t += dt;
                for (const k of ['A', 'B']) {
                    if (s.declared[k] == null) continue;
                    if (s.groups[k].count > 0 && fits(k)) s.declared[k] = s.t;
                    else if (s.t - s.declared[k] >= CFG.capture.declare * 60) {
                        s.declared[k] = null;
                        say(fill(t.m_expired, { g: gName(k), n: CFG.capture.declare }));
                    }
                }
                const owner = s.owner && s.groups[s.owner].count > 0 ? s.owner : null;
                const others = ['A', 'B'].filter((k) => k !== s.owner && s.groups[k].count > 0 && fits(k) && s.declared[k] != null);
                const wasContested = s.status === 'contested';
                let status;
                if (owner) s.lastVisit = s.t;
                if (s.alarm && s.t - s.alarm.seenAt >= CFG.def.alarmReset * 60) {
                    s.alarm = null;
                    say(fill(t.m_alarm_end, { n: CFG.def.alarmReset }));
                }
                if (others.length === 0) {
                    if (owner) {
                        s.control = clamp(s.control + dt * 100 / (CFG.hold.regen * 60));
                        status = 'held';
                        if (wasContested) say(fill(t.m_defended, { g: gName(owner) }));
                    } else if (s.owner) {
                        s.control = clamp(s.control - dt * 100 / (CFG.hold.decayHours * 3600));
                        status = 'held';
                        if (s.control <= 0) {
                            setOwner(null);
                            say(t.m_decayed);
                            status = 'free';
                        }
                    } else {
                        status = 'free';
                    }
                    if (s.claim > 0) {
                        s.claim = Math.max(0, s.claim - dt * 100 / (CFG.capture.claimDecay * 60));
                        if (s.claim <= 0) s.claimKey = null;
                    }
                } else if (others.length === 1 && !owner) {
                    const k = others[0];
                    if (s.owner) {
                        const [ok, why] = attackAllowed();
                        if (!ok) {
                            status = 'protected';
                            s.protectReason = why;
                        } else if (!alarmRunsOut(k)) {
                            status = 'challenged';
                        } else {
                            status = 'attacked';
                            s.control = clamp(s.control - dt * speed(k));
                            if (s.control <= 0) {
                                say(fill(t.m_lost, { g: gName(s.owner) }));
                                setOwner(null);
                                status = 'claiming';
                            }
                        }
                    } else {
                        status = 'claiming';
                        if (addClaim(k, dt * speed(k))) {
                            setOwner(k);
                            status = 'held';
                        }
                    }
                } else {
                    status = 'contested';
                }
                if (status !== 'protected') s.protectReason = null;
                s.status = status;
                const neg = s.owner && neglected();
                if (neg && !s.wasNeglected) say(t.m_neglected);
                s.wasNeglected = !!neg;
                s.samples.push({ t: s.t, c: s.owner ? s.control : null, o: s.owner, cl: s.claim, ck: s.claimKey, st: status });
                if (s.samples.length > KEEP / CFG.tick + 4000) s.samples.splice(0, 4000);
                if (s.events.length > 400) s.events.splice(0, 100);
            }
            const runUntil = (time) => { while (s.t < time) tick(); };

            // A free animal of the group (scent mark cooldown per animal); index or -1.
            function readyAnimal(k) {
                const g = s.groups[k];
                for (let i = 0; i < g.count; i++) if (!(g.cool[i] > s.t)) return i;
                return -1;
            }
            const readyCount = (k) => { let n = 0; const g = s.groups[k]; for (let i = 0; i < g.count; i++) if (!(g.cool[i] > s.t)) n++; return n; };

            // G pressed (the mark callback); confirm = the second G of a claim.
            function press(k, confirm) {
                const g = s.groups[k];
                const gn = gName(k);
                if (g.count === 0) { say(fill(t.m_inside, { g: gn })); return; }
                const who = readyAnimal(k);
                if (who < 0) { say(fill(t.m_cool, { g: gn })); return; }
                const own = s.owner === k;
                if (!own && !fits(k)) { say(fill(t.m_big, { g: gn, cls: clsName(sizeClass(s.area)) })); return; }
                if (!own && s.declared[k] == null) {
                    if (!confirm) { say(fill(t.m_need, { g: gn })); return; }
                    if (s.owner) {
                        const [ok, why] = attackAllowed();
                        if (!ok) { say(fill(t.m_prot, { g: gn, why: protectText(why) })); return; }
                    }
                    s.declared[k] = s.t;
                    if (s.owner) {
                        alarmRunsOut(k);
                        s.status = 'challenged';
                        say(fill(t.m_decl_alarm, { g: gn, n: CFG.def.alarm }));
                    } else {
                        say(fill(t.m_decl_free, { g: gn }));
                    }
                    g.cool[who] = s.t + CFG.mark.cool;
                    return;
                }
                const amount = CFG.mark.amount;
                if (own) {
                    s.control = clamp(s.control + amount);
                    s.lastVisit = s.t;
                    say(fill(t.m_own, { g: gn }));
                } else if (s.owner) {
                    const [ok, why] = attackAllowed();
                    if (!ok) { say(fill(t.m_prot, { g: gn, why: protectText(why) })); return; }
                    if (!alarmRunsOut(k)) {
                        s.status = 'challenged';
                        g.cool[who] = s.t + CFG.mark.cool;
                        say(fill(t.m_alarm, { g: gn }));
                        return;
                    }
                    s.control = clamp(s.control - amount);
                    say(fill(t.m_attack, { g: gn }));
                    if (s.control <= 0) {
                        say(fill(t.m_lost, { g: gName(s.owner) }));
                        setOwner(null);
                    }
                } else {
                    const pushing = s.claimKey && s.claimKey !== k && s.claim > 0;
                    say(fill(pushing ? t.m_push : t.m_claim, { g: gn }));
                    if (addClaim(k, amount)) setOwner(k);
                }
                g.cool[who] = s.t + CFG.mark.cool;
                s.events.push({ t: s.t, type: 'mark', k });
                pulse(k);
            }

            // ---------------------------------------------------------------- scenarios
            let speedIdx = 2, running = !reduce, scenario = 'claim';
            const SCEN = {
                // A pack of two lays claim on a free medium territory and marks once each.
                claim() {
                    s = fresh(200000);
                    s.groups.A.count = 2;
                    runUntil(60);
                    press('A', true);
                    runUntil(90); press('A');
                    runUntil(160); press('A');
                    runUntil(330);
                    speedIdx = 2;
                },
                // A holds the territory (protection over); A leaves, a pack of three lays claim.
                attack() {
                    s = fresh(200000);
                    s.groups.A.count = 1;
                    setOwner('A');
                    s.protectedUntil = s.t - 3600;
                    s.control = 80;
                    s.log.length = 0; s.events.length = 0;
                    runUntil(15 * 60);
                    s.groups.A.count = 0;
                    s.groups.B.count = 3;
                    runUntil(17 * 60);
                    press('B', true);
                    runUntil(18 * 60);
                    speedIdx = 2;
                },
                // Like the attack, but the owners come back while the hold drops: contested.
                defend() {
                    SCEN.attack();
                    runUntil(25 * 60);
                    s.groups.A.count = 2;
                    tick();
                    speedIdx = 2;
                },
                // A takes it, then nobody visits any more and A is offline: the hold runs down over 72 hours.
                decay() {
                    s = fresh(200000);
                    s.groups.A.count = 2;
                    setOwner('A');
                    runUntil(3600);
                    s.groups.A.count = 0;
                    s.groups.A.online = false;
                    runUntil(20 * 3600);
                    speedIdx = 5;
                },
            };

            // ---------------------------------------------------------------- DOM
            const style = el('style', { textContent: STYLE });
            const canvas = el('canvas', { role: 'img', 'aria-label': t.title });
            const ctx = canvas.getContext('2d');
            const ui = {};
            const panel = el('div', { className: 'rv-panel' }, [
                el('div', { className: 'rv-top' }, [
                    el('span', { className: 'rv-name' }, [t.name, ' ', ui.tag = el('span', { className: 'sim-tag' })]),
                    ui.clock = el('span', { className: 'rv-clock' }),
                ]),
                ui.owner = el('div', { className: 'rv-owner' }),
                ui.status = el('div', { className: 'rv-status', 'aria-live': 'polite' }),
                el('div', { className: 'rv-bar' }, [ui.fill = el('div', { className: 'rv-fill' })]),
                el('div', { className: 'rv-foot' }, [ui.valueL = el('span'), ui.valueR = el('span')]),
            ]);
            const legend = el('div', { className: 'sim-legend rv-legend' }, [
                el('span', {}, [el('i', { style: `--c:${C.sky}` }), t.groupA]),
                el('span', {}, [el('i', { style: `--c:${C.rust}` }), t.groupB]),
                el('span', {}, [el('i', { style: `--c:${C.gold};height:2px` }), t.lControl]),
                el('span', {}, [el('i', { style: `--c:repeating-linear-gradient(90deg,${C.soft} 0 4px,transparent 4px 7px);height:2px` }), t.lClaim]),
                el('span', {}, [el('i', { style: `--c:${C.soft};border-radius:50%;width:0.5rem;height:0.5rem` }), t.lMark]),
                ...Object.keys(STATUS_C).map((k) => el('span', {}, [el('i', { style: `--c:${STATUS_C[k]};height:0.45rem` }), t.sts[k]])),
            ]);
            const view = el('div', { className: 'sim-view' }, [panel, canvas, legend]);

            function field(label, input, out) {
                return el('label', { className: 'sim-field' }, [el('span', {}, [label, out || null]), input]);
            }
            const scenBtns = {};
            const scenBox = el('div', { className: 'sim-box' }, [
                el('h3', { textContent: t.hScen }),
                el('div', { className: 'sim-row' }, ['claim', 'attack', 'defend', 'decay'].map((k) => {
                    scenBtns[k] = el('button', { type: 'button', className: 'sim-btn ghost', textContent: t['sc' + k[0].toUpperCase() + k.slice(1)] });
                    scenBtns[k].addEventListener('click', () => start(k));
                    return scenBtns[k];
                })),
            ]);

            ui.area = el('input', { type: 'range', min: 1, max: 160, step: 1, value: 20 });
            ui.areaOut = el('output');
            ui.alone = el('div', { className: 'rv-small' });
            ui.speed = el('select', {}, SPEEDS.map((v, i) => el('option', { value: i, textContent: fill(t.speedOpt, { v: dur(v) }) })));
            ui.play = el('button', { type: 'button', className: 'sim-btn' });
            ui.skip = el('button', { type: 'button', className: 'sim-btn ghost', textContent: t.skip, title: t.skipTitle });
            const terrBox = el('div', { className: 'sim-box' }, [
                el('h3', { textContent: t.hTerr }),
                field(t.area, ui.area, ui.areaOut),
                ui.alone,
                field(t.speed, ui.speed),
                el('div', { className: 'sim-row' }, [ui.play, ui.skip]),
            ]);
            ui.area.addEventListener('input', () => { s.area = Number(ui.area.value) * 10000; update(true); });
            ui.speed.addEventListener('change', () => { speedIdx = Number(ui.speed.value); update(true); });
            ui.play.addEventListener('click', () => { running = !running; update(true); });
            ui.skip.addEventListener('click', () => { runUntil(s.t + 6 * 3600); update(true); });

            const gui = {};
            function groupBox(k) {
                const g = gui[k] = {};
                g.kind = el('select', {}, ['pack', 'pack_skill', 'loner', 'loner_skill'].map((v) => el('option', { value: v, textContent: t['k_' + v] })));
                g.count = el('input', { type: 'range', min: 0, max: 5, step: 1 });
                g.countOut = el('output');
                g.online = el('input', { type: 'checkbox' });
                g.declare = el('button', { type: 'button', className: 'sim-btn ghost', textContent: t.declare });
                g.mark = el('button', { type: 'button', className: 'sim-btn' });
                g.badge = el('span', { className: 'rv-badge' });
                g.kind.addEventListener('change', () => {
                    s.groups[k].kind = g.kind.value;
                    if (g.kind.value.startsWith('loner')) s.groups[k].count = Math.min(s.groups[k].count, 1);
                    update(true);
                });
                g.count.addEventListener('input', () => { s.groups[k].count = Number(g.count.value); update(true); });
                g.online.addEventListener('change', () => { s.groups[k].online = g.online.checked; update(true); });
                g.declare.addEventListener('click', () => { press(k, true); update(true); });
                g.mark.addEventListener('click', () => { press(k, false); update(true); });
                return el('div', { className: 'sim-box' }, [
                    el('h3', { className: 'rv-gh', style: `--c:${GROUP_C[k]}` }, [el('i'), gName(k), g.badge]),
                    field(t.kind, g.kind),
                    field(t.inside, g.count, g.countOut),
                    el('label', { className: 'sim-check' }, [g.online, t.online]),
                    el('div', { className: 'sim-row' }, [g.declare, g.mark]),
                ]);
            }

            ui.stats = {};
            const statBox = el('div', { className: 'sim-box' }, [el('h3', { textContent: t.hStats }),
                ...[['clock', t.sClock], ['protect', t.sProtect], ['care', t.sCare], ['alarm', t.sAlarm], ['rate', t.sRate]].map(([k, label]) => {
                    ui.stats[k] = el('b');
                    return el('div', { className: 'sim-stat' }, [el('span', { textContent: label }), ui.stats[k]]);
                })]);
            ui.log = el('ul', { className: 'rv-log', 'aria-live': 'polite' });
            const logBox = el('div', { className: 'sim-box' }, [el('h3', { textContent: t.hLog }), ui.log]);

            const side = el('div', { className: 'sim-side' }, [scenBox, terrBox, groupBox('A'), groupBox('B'), statBox]);
            const main = el('div', { style: 'display:grid;gap:1rem;min-width:0' }, [view, logBox]);
            root.append(style, el('div', { className: 'sim sim-reviere' }, [
                el('div', { className: 'sim-grid' }, [main, side]),
                el('p', { className: 'sim-note', innerHTML: t.note }),
            ]));

            const setText = (n, v) => { if (n.textContent !== v) n.textContent = v; };
            const clockText = (time) => {
                const total = START_HOUR * 3600 + time;
                const d = Math.floor(total / 86400) + 1, h = Math.floor((total % 86400) / 3600), m = Math.floor((total % 3600) / 60);
                return { d, hm: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}` };
            };

            function statusText() {
                switch (s.status) {
                    case 'free': return s.declared.A != null || s.declared.B != null ? t.st_free_decl : t.st_free;
                    case 'claiming': return fill(t.st_claiming, { name: gName(s.claimKey || ['A', 'B'].find((k) => s.declared[k] != null) || 'A') });
                    case 'held': return s.groups[s.owner].count > 0 ? t.st_held_in : t.st_held_away;
                    case 'challenged': return fill(t.st_challenged, { time: dur(s.alarm ? CFG.def.alarm * 60 - (s.t - s.alarm.startedAt) : CFG.def.alarm * 60) });
                    case 'attacked': return fill(t.st_attacked, { name: gName(s.alarm ? s.alarm.key : s.owner === 'A' ? 'B' : 'A') });
                    case 'contested': return t.st_contested;
                    case 'protected': return protectText(s.protectReason);
                    default: return '';
                }
            }

            // Refresh all DOM texts; full = also controls that the user may be changing.
            function update(full) {
                const cls = sizeClass(s.area);
                const ha = s.area / 10000;
                if (full) {
                    ui.area.value = String(ha);
                    ui.speed.value = String(speedIdx);
                    for (const k of ['A', 'B']) {
                        const g = s.groups[k], d = gui[k];
                        d.kind.value = g.kind;
                        d.count.max = g.kind.startsWith('loner') ? '1' : '5';
                        d.count.value = String(g.count);
                        d.online.checked = g.online;
                    }
                    for (const k in scenBtns) scenBtns[k].setAttribute('aria-pressed', String(k === scenario));
                }
                setText(ui.areaOut, fill(t.areaOut, { ha: num(ha, 0), cls: clsName(cls) }));
                setText(ui.alone, fill(t.alone, { min: dur(capMin() * 60) }));
                setText(ui.play, running ? t.pause : t.play);
                setText(ui.tag, `${clsName(cls)} · ${num(ha, 0)} ha`);
                const ck = clockText(s.t);
                setText(ui.clock, fill(t.sDay, ck));
                setText(ui.owner, s.owner ? fill(t.ownedBy, { name: gName(s.owner) }) : t.free);
                setText(ui.status, statusText());
                ui.status.style.borderLeftColor = STATUS_C[s.status];
                const claiming = !s.owner;
                const value = claiming ? s.claim : s.control;
                ui.fill.style.width = `${value}%`;
                ui.fill.style.background = claiming ? (s.claimKey ? GROUP_C[s.claimKey] : C.gold) : GROUP_C[s.owner];
                ui.fill.style.opacity = claiming ? '0.7' : '1';
                setText(ui.valueL, `${claiming ? t.claim : t.control} ${Math.floor(value + 0.5)} %`);
                setText(ui.valueR, s.owner ? `${s.owner && neglected() ? t.neglected : t.cared}` : (s.claimKey ? gName(s.claimKey) : ''));

                for (const k of ['A', 'B']) {
                    const g = s.groups[k], d = gui[k];
                    setText(d.countOut, String(g.count));
                    const own = s.owner === k;
                    d.declare.hidden = own;
                    d.declare.disabled = g.count === 0 || s.declared[k] != null;
                    setText(d.mark, fill(t.mark, { n: readyCount(k), m: g.count }));
                    d.mark.disabled = g.count === 0;
                    setText(d.badge, own ? t.owner : s.declared[k] != null ? t.declared : '');
                }

                const st = ui.stats;
                setText(st.clock, fill(t.sDay, ck));
                setText(st.protect, s.protectedUntil != null && s.t < s.protectedUntil ? fill(t.running, { time: dur(s.protectedUntil - s.t) }) : t.none2);
                setText(st.care, s.owner ? (neglected() ? t.neglected : t.cared) : t.none);
                setText(st.alarm, s.alarm ? fill(t.running, { time: dur(Math.max(0, CFG.def.alarm * 60 - (s.t - s.alarm.startedAt))) }) : t.none2);
                const here = ['A', 'B'].filter((k) => s.groups[k].count > 0);
                setText(st.rate, here.length ? here.map((k) => `${k}: ${fill(t.rateOut, { time: dur(100 / speed(k)) })}`).join(' · ') : t.none);

                const logKey = s.log.map((l) => l.t + l.text).join('|');
                if (ui.log.dataset.key !== logKey) {
                    ui.log.dataset.key = logKey;
                    ui.log.replaceChildren(...s.log.map((l) => el('li', {}, [el('time', { textContent: clockText(l.t).hm }), el('span', { textContent: l.text })])));
                }
            }

            // ---------------------------------------------------------------- drawing
            // Irregular outline of the territory (unit radius).
            const SHAPE = [1, 0.84, 0.96, 0.78, 0.9, 1.06, 0.82, 0.94, 0.88, 1.0, 0.86].map((r, i, a) => {
                const ang = (i / a.length) * Math.PI * 2 - Math.PI / 2;
                return [Math.cos(ang) * r, Math.sin(ang) * r * 0.82];
            });
            const shapeArea = (() => { let a = 0; for (let i = 0; i < SHAPE.length; i++) { const p = SHAPE[i], q = SHAPE[(i + 1) % SHAPE.length]; a += p[0] * q[1] - q[0] * p[1]; } return Math.abs(a) / 2; })();
            // Fixed spots for animals (inside the outline), one list per group.
            const SPOTS = {
                A: [[-0.42, -0.18], [-0.2, 0.3], [-0.55, 0.22], [-0.1, -0.42], [-0.32, 0.02]],
                B: [[0.42, 0.12], [0.22, -0.32], [0.55, -0.12], [0.12, 0.38], [0.32, 0.25]],
            };
            const pulses = [];
            function pulse(k) {
                const g = s.groups[k];
                const i = Math.max(0, Math.min(g.count - 1, Math.floor(Math.random() * g.count)));
                pulses.push({ k, i, at: performance.now() });
            }

            let W = 0, H = 0, dpr = 1;
            function layout() {
                const w = Math.max(280, Math.round(view.clientWidth || 600));
                const wide = w >= 620;
                const h = wide ? 290 : 430;
                const r = Math.min(window.devicePixelRatio || 1, 2);
                if (w !== W || h !== H || r !== dpr) {
                    W = w; H = h; dpr = r;
                    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
                }
                return wide
                    ? { map: { x: 0, y: 0, w: Math.min(320, Math.round(W * 0.34)), h: H }, chart: { x: Math.min(320, Math.round(W * 0.34)), y: 0, w: W - Math.min(320, Math.round(W * 0.34)), h: H } }
                    : { map: { x: 0, y: 0, w: W, h: 190 }, chart: { x: 0, y: 190, w: W, h: H - 190 } };
            }

            function drawMap(r, now) {
                const cx = r.x + r.w / 2, cy = r.y + r.h / 2 + 4;
                const maxR = Math.min(r.w * 0.44, r.h * 0.5);
                const rad = maxR * (0.35 + 0.65 * Math.sqrt(s.area / 1600000));
                const colour = s.owner ? GROUP_C[s.owner] : C.gold;
                ctx.save();
                ctx.beginPath();
                SHAPE.forEach(([x, y], i) => (i ? ctx.lineTo(cx + x * rad, cy + y * rad) : ctx.moveTo(cx + x * rad, cy + y * rad)));
                ctx.closePath();
                ctx.globalAlpha = s.owner ? 0.2 : 0.1;
                ctx.fillStyle = colour;
                ctx.fill();
                ctx.globalAlpha = 1;
                const glow = ['claiming', 'challenged', 'attacked', 'contested'].includes(s.status);
                ctx.lineWidth = glow ? 2 : 1.25;
                ctx.setLineDash(glow ? [] : [5, 4]);
                ctx.strokeStyle = glow ? STATUS_C[s.status] : colour;
                ctx.stroke();
                ctx.setLineDash([]);
                // Scale bar: 100 m.
                const mPerPx = Math.sqrt(s.area / (shapeArea * rad * rad));
                const bar = 100 / mPerPx;
                ctx.fillStyle = C.muted; ctx.strokeStyle = C.muted; ctx.lineWidth = 1.5;
                ctx.font = `14px ${getComputedStyle(root).getPropertyValue('--body') || 'Georgia, serif'}`;
                ctx.textBaseline = 'alphabetic';
                ctx.beginPath(); ctx.moveTo(r.x + 12, r.y + r.h - 12); ctx.lineTo(r.x + 12 + bar, r.y + r.h - 12); ctx.stroke();
                ctx.fillText('100 m', r.x + 12, r.y + r.h - 18);
                ctx.textAlign = 'right';
                ctx.fillText(`${num(s.area / 10000, 0)} ha · ${clsName(sizeClass(s.area))}`, r.x + r.w - 10, r.y + r.h - 12);
                ctx.textAlign = 'left';
                // Animals.
                for (const k of ['A', 'B']) {
                    const g = s.groups[k];
                    for (let i = 0; i < g.count; i++) {
                        const [sx, sy] = SPOTS[k][i];
                        const wob = reduce ? 0 : Math.sin(now / 900 + i * 1.7 + (k === 'B' ? 2 : 0)) * 0.05;
                        const x = cx + (sx + wob) * rad, y = cy + (sy + (reduce ? 0 : Math.cos(now / 1100 + i) * 0.04)) * rad;
                        ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2);
                        ctx.fillStyle = GROUP_C[k]; ctx.fill();
                        ctx.lineWidth = 1.5; ctx.strokeStyle = C.plate; ctx.stroke();
                        if (g.cool[i] > s.t) { // fresh scent mark: thin ring
                            ctx.beginPath(); ctx.arc(x, y, 10, 0, Math.PI * 2);
                            ctx.globalAlpha = 0.45; ctx.strokeStyle = GROUP_C[k]; ctx.lineWidth = 1; ctx.stroke(); ctx.globalAlpha = 1;
                        }
                    }
                }
                for (let p = pulses.length - 1; p >= 0; p--) {
                    const pl = pulses[p], age = (now - pl.at) / 1400;
                    if (age > 1 || pl.i >= s.groups[pl.k].count) { pulses.splice(p, 1); continue; }
                    const [sx, sy] = SPOTS[pl.k][pl.i];
                    ctx.beginPath(); ctx.arc(cx + sx * rad, cy + sy * rad, reduce ? 16 : 8 + age * 30, 0, Math.PI * 2);
                    ctx.globalAlpha = reduce ? 0.6 : 1 - age; ctx.strokeStyle = GROUP_C[pl.k]; ctx.lineWidth = 2; ctx.stroke(); ctx.globalAlpha = 1;
                }
                ctx.restore();
            }

            function axisLabel(sec) {
                if (sec === 0) return t.now;
                return fill(t.ago, { v: sec < 3600 ? fill(t.min, { n: Math.round(sec / 60) }) : fill(t.hrs, { h: Math.round(sec / 3600) }) });
            }

            function drawChart(r) {
                const font = getComputedStyle(root).getPropertyValue('--body') || 'Georgia, serif';
                const pad = { l: 34, r: 12, t: 16, b: 44 };
                const x0 = r.x + pad.l, x1 = r.x + r.w - pad.r, y0 = r.y + pad.t, y1 = r.y + r.h - pad.b;
                const win = WINDOWS[speedIdx];
                const tEnd = s.t, tStart = tEnd - win;
                const X = (time) => x0 + ((time - tStart) / win) * (x1 - x0);
                const Y = (v) => y1 - (v / 100) * (y1 - y0);
                ctx.save();
                ctx.font = `13px ${font}`;
                // Grid and neglect line.
                ctx.strokeStyle = C.grid; ctx.lineWidth = 1; ctx.fillStyle = C.muted; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
                for (const v of [0, 50, 100]) {
                    ctx.beginPath(); ctx.moveTo(x0, Y(v)); ctx.lineTo(x1, Y(v)); ctx.stroke();
                    ctx.fillText(String(v), x0 - 6, Y(v));
                }
                ctx.setLineDash([3, 4]); ctx.strokeStyle = 'rgba(214,174,94,0.35)';
                ctx.beginPath(); ctx.moveTo(x0, Y(CFG.def.neglect)); ctx.lineTo(x1, Y(CFG.def.neglect)); ctx.stroke(); ctx.setLineDash([]);
                ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; ctx.fillStyle = 'rgba(214,174,94,0.7)';
                ctx.fillText(t.lNeglect, x0 + 4, Y(CFG.def.neglect) - 2);
                // X axis ticks.
                const steps = [60, 120, 300, 600, 900, 1800, 3600, 7200, 3 * 3600, 6 * 3600, 12 * 3600, 24 * 3600];
                const maxTicks = Math.max(2, Math.floor((x1 - x0) / 70));
                const step = steps.find((v) => win / v <= maxTicks) || 24 * 3600;
                ctx.textBaseline = 'top'; ctx.textAlign = 'center'; ctx.fillStyle = C.muted;
                for (let ago = 0; ago <= win + 1; ago += step) {
                    const x = X(tEnd - ago);
                    ctx.strokeStyle = C.grid; ctx.beginPath(); ctx.moveTo(x, y0); ctx.lineTo(x, y1); ctx.stroke();
                    ctx.textAlign = ago === 0 ? 'right' : x - x0 < 30 ? 'left' : 'center';
                    ctx.fillText(axisLabel(ago), ago === 0 ? x1 : x, y1 + 18);
                }
                // Samples in the window (thinned to ~2 per pixel).
                const smp = s.samples;
                let lo = 0, hi = smp.length;
                while (lo < hi) { const mid = (lo + hi) >> 1; if (smp[mid].t < tStart) lo = mid + 1; else hi = mid; }
                const n = smp.length - lo;
                const every = Math.max(1, Math.floor(n / ((x1 - x0) * 2)));
                const pts = [];
                for (let i = lo; i < smp.length; i += every) pts.push(smp[i]);
                if (smp.length && pts[pts.length - 1] !== smp[smp.length - 1]) pts.push(smp[smp.length - 1]);
                // Status strip.
                const sy = y1 + 4, sh = 8;
                for (let i = 0; i < pts.length; i++) {
                    const a = Math.max(x0, X(i ? pts[i - 1].t : pts[i].t - CFG.tick)), b = X(pts[i].t);
                    ctx.fillStyle = STATUS_C[pts[i].st]; ctx.fillRect(a, sy, Math.max(1, b - a + 0.5), sh);
                }
                // Claim (dashed) and control (solid, owner's colour).
                ctx.lineJoin = 'round';
                const line = (val, key, dash, width) => {
                    ctx.setLineDash(dash); ctx.lineWidth = width;
                    let open = null;
                    for (const p of pts) {
                        const v = val(p), k = key(p);
                        if (v == null || !k) { if (open) { ctx.stroke(); open = null; } continue; }
                        if (open !== k) {
                            if (open) ctx.stroke();
                            ctx.strokeStyle = GROUP_C[k]; ctx.beginPath(); ctx.moveTo(X(p.t), Y(v)); open = k;
                        } else ctx.lineTo(X(p.t), Y(v));
                    }
                    if (open) ctx.stroke();
                    ctx.setLineDash([]);
                };
                ctx.save();
                ctx.beginPath(); ctx.rect(x0, y0 - 4, x1 - x0, y1 - y0 + 8); ctx.clip();
                line((p) => (p.cl > 0 ? p.cl : null), (p) => p.ck, [5, 4], 1.75);
                line((p) => p.c, (p) => p.o, [], 2.5);
                ctx.restore();
                // Events: scent marks as dots at the top, owner changes as vertical lines.
                for (const e of s.events) {
                    if (e.t < tStart) continue;
                    const x = X(e.t);
                    if (e.type === 'mark') {
                        ctx.beginPath(); ctx.arc(x, y0 - 7, 3, 0, Math.PI * 2); ctx.fillStyle = GROUP_C[e.k]; ctx.fill();
                    } else {
                        ctx.strokeStyle = GROUP_C[e.k]; ctx.globalAlpha = 0.6; ctx.setLineDash(e.type === 'lost' ? [2, 3] : []);
                        ctx.beginPath(); ctx.moveTo(x, y0); ctx.lineTo(x, y1); ctx.stroke(); ctx.setLineDash([]); ctx.globalAlpha = 1;
                    }
                }
                ctx.restore();
            }

            function draw(now) {
                const lay = layout();
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                ctx.fillStyle = C.plate; ctx.fillRect(0, 0, W, H);
                drawMap(lay.map, now);
                ctx.strokeStyle = C.line; ctx.lineWidth = 1;
                ctx.beginPath();
                if (lay.chart.x > 0) { ctx.moveTo(lay.chart.x + 0.5, 12); ctx.lineTo(lay.chart.x + 0.5, H - 12); } else { ctx.moveTo(12, lay.chart.y + 0.5); ctx.lineTo(W - 12, lay.chart.y + 0.5); }
                ctx.stroke();
                drawChart(lay.chart);
            }

            // ---------------------------------------------------------------- loop
            let raf = 0, last = 0, acc = 0, uiAt = 0;
            function frame(now) {
                raf = requestAnimationFrame(frame);
                const dt = Math.min(0.25, last ? (now - last) / 1000 : 0);
                last = now;
                if (running) {
                    acc += dt * SPEEDS[speedIdx];
                    let n = 0;
                    while (acc >= CFG.tick && n < 4000) { tick(); acc -= CFG.tick; n++; }
                }
                draw(now);
                if (now - uiAt > 120) { uiAt = now; update(false); }
            }

            function start(name) {
                scenario = name;
                SCEN[name]();
                acc = 0;
                pulses.length = 0;
                update(true);
            }
            start('claim');
            raf = requestAnimationFrame(frame);

            return {
                destroy() {
                    cancelAnimationFrame(raf);
                    raf = 0;
                },
            };
        },
    });
})();
