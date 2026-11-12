// "Behind the scenes": breeding and bloodlines (liw_breeding, liw_lineage).
// Values as of the LiW code of 12 Nov 2026:
//   liw_breeding/config.lua  Config.Pairing (range, cooldownHours, durationSeconds, xp, revealMinutes),
//                            Config.LitterSize, Config.Claim
//   liw_lineage/config.lua   Config.Inheritance (variantFromParent 1.0, bonus 1, passOnChance 0.5, maxBonus 3),
//                            Config.Inbreeding
//   liw_species/shared/species.lua  coat presets per species (variants / maleVariants)
// The roll follows LiwLitters.Create (liw_breeding/server/litters.lua) and inherit() / lineageFor()
// (liw_lineage/server/main.lua).
(() => {
    window.LIW_SIMS = window.LIW_SIMS || [];

    // --- Real values -------------------------------------------------------------------------
    const INHERIT = { variantFromParent: 1.0, bonus: 1, passOnChance: 0.5, maxBonus: 3 };
    const INBREEDING = {
        close: { maxHealth: -0.15, staminaRecharge: -0.15, damage: -0.10 },
        half: { maxHealth: -0.08, staminaRecharge: -0.08, damage: -0.05 },
    };
    // size: Config.LitterSize; coats: number of coat presets (deer: own model per sex, only the
    // parent of the same sex passes its coat on).
    const SPECIES = {
        wolf: { size: [2, 5], coats: 9, de: 'Wolf', en: 'Wolf' },
        fox: { size: [2, 4], coats: 3, de: 'Rotfuchs', en: 'Red fox' },
        deer: { size: [1, 2], coats: { female: 6, male: 3 }, bySex: true, de: 'Weißwedelhirsch', en: 'Whitetail deer' },
        bear: { size: [1, 3], coats: 4, de: 'Schwarzbär', en: 'Black bear' },
        bison: { size: [1, 1], coats: 3, de: 'Bison', en: 'Bison' },
        rabbit: { size: [4, 8], coats: 5, de: 'Kaninchen', en: 'Rabbit' },
        rat: { size: [5, 10], coats: 5, de: 'Ratte', en: 'Rat' },
    };
    const ATTRS = ['strength', 'stamina', 'speed', 'senses', 'stealth', 'constitution'];   // LiwAttributeOrder
    // Placeholder swatches: in the game the coats are numbered presets of the model.
    const SWATCH = ['#8a7a66', '#b39a74', '#5b5047', '#d6cbb5', '#7a5236', '#a8693c', '#3b3631', '#c4a882', '#e9e4da', '#6d6f73'];

    const TEXT = {
        de: {
            title: 'Blutlinien', teaser: 'Paarung, Wurf, Erbe, Stammbaum',
            lede: 'Ein Züchter mit den echten Regeln: Wähle zwei Eltern einer Art, würfle Würfe und sieh, mit welcher Wahrscheinlichkeit Fell und Attribut-Punkte weitergegeben werden. Übernimm ein Jungtier, und die Blutlinie wächst um eine Generation.',
            mother: 'Mutter', father: 'Vater', female: 'Weibchen', male: 'Männchen',
            coat: 'Fell', coatN: 'Fell {n}', coatRandom: 'zufällig je Wurf', fav: 'Meiste Punkte in', favNone: 'keine verteilt (zufällig)',
            inherited: 'Geerbt', inhNone: 'nichts', wild: 'wildes Tier', gen: 'Generation {n}', genShort: 'Gen. {n}',
            line: 'Blutlinie „{name}“', lineNew: 'gründet die Blutlinie „{name}“', outsider: 'ohne Blutlinie',
            roll: 'Wurf würfeln', roll100: '+100 Würfe', reset: 'Strichliste leeren',
            litter: 'Wurf · {n} Jungtiere', litter1: 'Wurf · 1 Jungtier', litterOf: 'Jungtiere der Generation {n}',
            takeOver: 'übernehmen', taken: 'übernommen',
            pSex: '{p}', pCoat: '{p}', pBonus: '{p}',
            tally: 'Strichliste', tallyN: '{l} Würfe · {c} Jungtiere', expected: 'erwartet', observed: 'gewürfelt',
            tSize: 'Jungtiere je Wurf', tCoat: 'Fell der Jungtiere', tBonus: 'Geerbte Punkte je Jungtier', tAttr: 'Der feste Punkt geht auf',
            tSex: 'Geschlecht', chance: 'Wahrscheinlichkeit {p}', points1: '1 Punkt', pointsN: '{n} Punkte',
            species: 'Art', next: 'Partner der nächsten Generation', nextOut: 'fremdes Tier ohne Blutlinie', nextWild: 'wildes Tier', nextSib: 'Geschwister aus dem Wurf (Inzucht)',
            noSib: 'Kein Geschwister des anderen Geschlechts im Wurf – ein fremdes Tier springt ein.',
            pair: 'Paar', rules: 'Voraussetzungen', after: 'Nach der Paarung', tree: 'Stammbaum',
            ruleList: [
                'Weibchen und Männchen derselben Art, beide mit gewähltem Geschlecht',
                'beide erwachsen – Jungtiere sind es nach <b>5 Std</b> Spielzeit',
                'Brunftzeit: nur im <b>Herbst</b> (ab 1. September)',
                'im Revier der Gruppe von einem der beiden; mit wildem Partner nur im eigenen',
                'erholt seit dem letzten Wurf: Weibchen <b>72 Std</b>, Männchen <b>24 Std</b>',
                'Seite an Seite (<b>2,5 m</b>), dann <b>20 s</b> ungestört liegen',
            ],
            afterList: [
                '<b>+300 EP</b> für jedes Elternteil',
                'der Wurf bleibt <b>60 Min</b> verdeckt, dann zeigt er Anzahl, Geschlecht und Erbe',
                'die ersten <b>24 Std</b> dürfen nur die Eltern übernehmen, weitere <b>24 Std</b> auch ihr Rudel, dann alle',
                'nach <b>7 Tagen</b> geht ein nicht übernommenes Jungtier eigene Wege',
            ],
            inbred: { close: 'Inzucht', half: 'Leichte Inzucht' },
            inbredEff: 'max. Gesundheit {h} %, Ausdauer-Erholung {s} %, Schaden {d} % – ein Leben lang',
            founder: 'Gründerin', guest: 'aus anderer Linie', wildTag: 'wild', waiting: 'wartet',
            treeMore: '… {n} ältere Generationen ausgeblendet',
            attrs: { strength: 'Stärke', stamina: 'Ausdauer', speed: 'Geschwindigkeit', senses: 'Sinne', stealth: 'Tarnung', constitution: 'Konstitution' },
            note: '<b>Vereinfacht:</b> Namen sind erfunden, die Farbfelder stehen nur für die nummerierten Felle der Art. Statt aller verteilten Attribut-Punkte wählst du nur das Attribut mit den meisten Punkten (bei Gleichstand würfelt das Spiel unter ihnen). Pro Generation wird hier genau ein Jungtier übernommen; fremde Partner haben keine eigene Blutlinie (hätten sie eine, gehörte der Wurf zur Linie der Mutter). Ein wildes Elternteil bringt für den ganzen Wurf ein zufälliges Fell mit, „Standard“ zählt dabei wie Fell 1. Ein zufälliges Fell statt eines Eltern-Fells („Mutation“) ist eingestellt, aber derzeit auf 0 %. Stößt die Weitergabe an die Grenze von 3 Punkten, entscheidet im Spiel die Reihenfolge, welcher Punkt fehlt. Paarungsbedingungen, Wartezeiten und Ruhm werden nicht nachgespielt. Stand der Werte: LiW-Code vom 12.11.2026.',
        },
        en: {
            title: 'Bloodlines', teaser: 'Pairing, litter, inheritance, family tree',
            lede: 'A breeder with the real rules: pick two parents of one species, roll litters and see how likely coat and attribute points are passed on. Take over a juvenile and the bloodline grows by one generation.',
            mother: 'Mother', father: 'Father', female: 'female', male: 'male',
            coat: 'Coat', coatN: 'Coat {n}', coatRandom: 'random per litter', fav: 'Most points in', favNone: 'none spent (random)',
            inherited: 'Inherited', inhNone: 'nothing', wild: 'wild animal', gen: 'Generation {n}', genShort: 'Gen. {n}',
            line: 'Bloodline “{name}”', lineNew: 'founds the bloodline “{name}”', outsider: 'no bloodline',
            roll: 'Roll a litter', roll100: '+100 litters', reset: 'Clear tally',
            litter: 'Litter · {n} juveniles', litter1: 'Litter · 1 juvenile', litterOf: 'Juveniles of generation {n}',
            takeOver: 'take over', taken: 'taken over',
            pSex: '{p}', pCoat: '{p}', pBonus: '{p}',
            tally: 'Tally', tallyN: '{l} litters · {c} juveniles', expected: 'expected', observed: 'rolled',
            tSize: 'Juveniles per litter', tCoat: 'Coat of the juveniles', tBonus: 'Inherited points per juvenile', tAttr: 'The fixed point goes to',
            tSex: 'Sex', chance: 'chance {p}', points1: '1 point', pointsN: '{n} points',
            species: 'Species', next: 'Partner of the next generation', nextOut: 'unrelated animal, no bloodline', nextWild: 'wild animal', nextSib: 'sibling from the litter (inbreeding)',
            noSib: 'No sibling of the other sex in the litter – an unrelated animal steps in.',
            pair: 'Pair', rules: 'Conditions', after: 'After the pairing', tree: 'Family tree',
            ruleList: [
                'a female and a male of the same species, both with a chosen sex',
                'both adult – juveniles are after <b>5 h</b> of play',
                'rutting season: only in <b>autumn</b> (from 1 September)',
                'inside the territory of either one\'s group; with a wild partner only your own',
                'rested since the last litter: female <b>72 h</b>, male <b>24 h</b>',
                'side by side (<b>2.5 m</b>), then lie <b>20 s</b> undisturbed',
            ],
            afterList: [
                '<b>+300 XP</b> for each parent',
                'the litter stays hidden for <b>60 min</b>, then shows count, sex and inheritance',
                'for the first <b>24 h</b> only the parents may take a juvenile over, another <b>24 h</b> also their pack, then everyone',
                'after <b>7 days</b> a juvenile nobody took goes its own way',
            ],
            inbred: { close: 'Inbred', half: 'Slightly inbred' },
            inbredEff: 'max. health {h} %, stamina recovery {s} %, damage {d} % – for life',
            founder: 'founder', guest: 'other line', wildTag: 'wild', waiting: 'waiting',
            treeMore: '… {n} older generations hidden',
            attrs: { strength: 'Strength', stamina: 'Stamina', speed: 'Speed', senses: 'Senses', stealth: 'Stealth', constitution: 'Constitution' },
            note: '<b>Simplified:</b> names are made up, the colour swatches only stand for the numbered coats of the species. Instead of all spent attribute points you only pick the attribute with the most points (on a tie the game rolls among them). One juvenile per generation is taken over here; unrelated partners have no bloodline of their own (if they had, the litter would belong to the mother\'s line). A wild parent brings one random coat for the whole litter, "Standard" counts as coat 1. A random coat instead of a parent\'s coat ("mutation") is configurable but currently at 0 %. If passing on hits the limit of 3 points, the order in the game decides which point is left out. Pairing conditions, waiting times and fame are not played out. Values as of the LiW code of 12 Nov 2026.',
        },
    };

    const NAMES = {
        female: ['Mira', 'Tala', 'Asha', 'Nuka', 'Sira', 'Enya', 'Kaya', 'Lumi', 'Wren', 'Yara', 'Isla', 'Runa', 'Saga', 'Ilka'],
        male: ['Kodi', 'Rune', 'Bran', 'Taro', 'Ash', 'Fenn', 'Orin', 'Kesh', 'Juno', 'Sorn', 'Vale', 'Eiko', 'Tamo', 'Ulf'],
    };

    const CSS = `
.sim-erbe .erbe-plate { padding: 1rem; display: grid; gap: 1rem; }
.sim-erbe .erbe-head { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0.3rem 1rem; align-items: baseline; }
.sim-erbe .erbe-head strong { font-family: var(--old); font-weight: normal; font-size: 1.25rem; color: var(--ink); }
.sim-erbe .erbe-head span { color: var(--muted); font-size: 0.95rem; }
.sim-erbe .erbe-pair { display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); gap: 0.6rem; align-items: stretch; }
.sim-erbe .erbe-x { align-self: center; color: var(--gold); font-family: var(--old); font-size: 1.4rem; }
@media (max-width: 560px) { .sim-erbe .erbe-pair { grid-template-columns: minmax(0, 1fr); } .sim-erbe .erbe-x { justify-self: center; line-height: 1; } }
.sim-erbe .erbe-parent { background: var(--panel); border: 1px solid var(--line); border-radius: 10px; padding: 0.6rem 0.75rem; display: grid; gap: 0.4rem; min-width: 0; }
.sim-erbe .erbe-parent[data-sex=female] { border-left: 3px solid var(--rust); }
.sim-erbe .erbe-parent[data-sex=male] { border-left: 3px solid var(--sky); }
.sim-erbe .erbe-pname { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
.sim-erbe .erbe-pname b { font-family: var(--old); font-weight: normal; font-size: 1.2rem; }
.sim-erbe .erbe-pname small { color: var(--muted); font-size: 0.9rem; }
.sim-erbe .erbe-parent label { display: grid; grid-template-columns: 6.6rem minmax(0, 1fr); align-items: center; gap: 0.4rem; font-size: 0.95rem; color: var(--soft); }
.sim-erbe .erbe-parent select { font: inherit; font-size: 0.95rem; color: var(--ink); background: var(--cap-off); border: 1px solid var(--cap-edge); border-radius: 8px; padding: 0.1rem 0.3rem; min-width: 0; width: 100%; }
.sim-erbe .erbe-parent select:disabled { opacity: 0.55; }
.sim-erbe .sw { display: inline-block; width: 0.95rem; height: 0.95rem; border-radius: 50%; border: 1px solid rgba(239,231,216,0.35); background: var(--c); flex: none; vertical-align: -0.12rem; }
.sim-erbe .sw.q { background: repeating-linear-gradient(45deg, #4a3d2e 0 3px, #2b231b 3px 6px); }
.sim-erbe .tags { display: flex; flex-wrap: wrap; gap: 0.25rem; }
.sim-erbe .tg { font-size: 0.85rem; line-height: 1.3; padding: 0 0.45rem; border-radius: 999px; border: 1px solid rgba(143,184,120,0.45); color: var(--moss); white-space: nowrap; }
.sim-erbe .tg.r { border-color: rgba(200,105,74,0.5); color: var(--rust); }
.sim-erbe .tg.m { border-color: var(--line); color: var(--muted); }
.sim-erbe .erbe-litter { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 9.5rem), 1fr)); gap: 0.5rem; }
.sim-erbe .cub { background: var(--panel-2); border: 1px solid var(--line); border-radius: 10px; padding: 0.5rem 0.6rem; display: grid; gap: 0.3rem; font-size: 0.95rem; min-width: 0; }
.sim-erbe .cub .l { display: flex; justify-content: space-between; gap: 0.4rem; align-items: center; }
.sim-erbe .cub .p { color: var(--muted); font-variant-numeric: tabular-nums; font-size: 0.85rem; white-space: nowrap; }
.sim-erbe .cub .f { color: var(--rust); } .sim-erbe .cub .mm { color: var(--sky); }
.sim-erbe .cub button { font: 600 0.9rem var(--body); color: var(--ink); background: transparent; border: 1px solid var(--line-gold); border-radius: 999px; padding: 0.05rem 0.6rem; cursor: pointer; justify-self: start; }
.sim-erbe .cub button:hover { border-color: var(--gold); color: var(--gold-hi); }
@media (prefers-reduced-motion: no-preference) { .sim-erbe .cub.new { animation: erbe-in 0.35s ease-out both; } }
@keyframes erbe-in { from { opacity: 0; transform: translateY(0.4rem); } to { opacity: 1; transform: none; } }
.sim-erbe .erbe-sub { font-family: var(--display); font-size: 0.85rem; letter-spacing: 0.16em; text-transform: lowercase; color: var(--gold); margin: 0; }
.sim-erbe .erbe-tally { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr)); gap: 0.8rem 1.2rem; }
.sim-erbe .tb { display: grid; gap: 0.2rem; min-width: 0; align-content: start; }
.sim-erbe .tb h4 { margin: 0; font: 600 0.95rem var(--body); color: var(--soft); }
.sim-erbe .br { display: grid; grid-template-columns: 5.4rem minmax(0, 1fr) 5.6rem; gap: 0.45rem; align-items: center; font-size: 0.9rem; }
.sim-erbe .br > span:first-child { color: var(--soft); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.sim-erbe .br .v { text-align: right; font-variant-numeric: tabular-nums; color: var(--muted); white-space: nowrap; }
.sim-erbe .br .v b { color: var(--ink); font-weight: 600; }
.sim-erbe .trk { position: relative; height: 0.6rem; background: var(--cap-off); border-radius: 3px; }
.sim-erbe .trk i { position: absolute; inset: 0 auto 0 0; background: var(--gold); opacity: 0.75; border-radius: 3px; }
.sim-erbe .trk u { position: absolute; top: -0.15rem; bottom: -0.15rem; width: 2px; background: var(--ink); margin-left: -1px; }
.sim-erbe .erbe-key { display: flex; flex-wrap: wrap; gap: 0.2rem 1rem; font-size: 0.85rem; color: var(--muted); }
.sim-erbe .erbe-key i { display: inline-block; width: 0.8rem; height: 0.5rem; background: var(--gold); opacity: 0.75; border-radius: 2px; margin-right: 0.35rem; }
.sim-erbe .erbe-key u { display: inline-block; width: 2px; height: 0.8rem; background: var(--ink); margin-right: 0.35rem; vertical-align: -0.1rem; }
.sim-erbe .sim-box ul { margin: 0; padding-left: 1.1rem; font-size: 0.95rem; color: var(--soft); display: grid; gap: 0.2rem; }
.sim-erbe .sim-box ul b { color: var(--ink); font-weight: 600; }
.sim-erbe .hint { font-size: 0.9rem; color: var(--rust); margin: 0; }
.sim-erbe .tree { padding: 1rem; display: grid; gap: 0; }
.sim-erbe .gen { display: grid; grid-template-columns: 4.2rem minmax(0, 1fr); gap: 0.6rem; }
.sim-erbe .gen > .g { font-family: var(--display); letter-spacing: 0.08em; color: var(--gold); font-size: 0.9rem; padding-top: 0.25rem; text-transform: lowercase; }
.sim-erbe .gen > .b { border-left: 2px solid var(--line-gold); padding: 0 0 1rem 0.8rem; display: grid; gap: 0.35rem; min-width: 0; }
.sim-erbe .gen:last-child > .b { border-left-color: transparent; padding-bottom: 0; }
.sim-erbe .tp { display: flex; flex-wrap: wrap; align-items: center; gap: 0.3rem 0.6rem; font-size: 1rem; }
.sim-erbe .tp .x { color: var(--gold); }
.sim-erbe .an { display: inline-flex; align-items: center; gap: 0.35rem; flex-wrap: wrap; }
.sim-erbe .an b { font-weight: 600; }
.sim-erbe .sibs { display: flex; flex-wrap: wrap; gap: 0.3rem; font-size: 0.85rem; color: var(--muted); align-items: center; }
.sim-erbe .sib { display: inline-flex; align-items: center; gap: 0.25rem; padding: 0 0.4rem; border: 1px solid var(--line); border-radius: 999px; }
.sim-erbe .sib.on { border-color: var(--gold); color: var(--ink); }
.sim-erbe .tmore { color: var(--muted); font-size: 0.9rem; margin: 0 0 0.6rem; }
`;

    const pct = (p) => {
        const v = p * 100;
        if (v === 0) return '0 %';
        if (v < 1) return '<1 %';
        return (Math.abs(v - Math.round(v)) < 0.05 ? Math.round(v) : v.toFixed(1)) + ' %';
    };
    const randInt = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
    const pick = (list) => list[Math.floor(Math.random() * list.length)];
    const fmt = (s, v) => s.replace(/\{(\w+)\}/g, (_, k) => (v && v[k] !== undefined ? v[k] : ''));
    const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

    window.LIW_SIMS.push({
        id: 'erbe',
        order: 70,
        title: { de: TEXT.de.title, en: TEXT.en.title },
        teaser: { de: TEXT.de.teaser, en: TEXT.en.teaser },
        lede: { de: TEXT.de.lede, en: TEXT.en.lede },
        mount(root, lang) {
            const T = TEXT[lang] || TEXT.de;
            let alive = true;
            let nextId = 1;
            const used = new Set();

            // --- Model ---------------------------------------------------------------------------
            const st = {
                species: 'wolf',
                partner: 'outsider',
                history: [],      // finished generations: { gen, line, founded, mother, father, cubs, chosen: [idx], inbreeding }
                mother: null, father: null,
                litter: null,     // { cubs, wildCoats, inbreeding }
                tally: null,
                flash: '',
            };
            const sp = () => SPECIES[st.species];
            const coatCount = (sex) => (sp().bySex ? sp().coats[sex] : sp().coats);

            function freshName(sex) {
                const free = NAMES[sex].filter((n) => !used.has(n));
                const name = free.length ? pick(free) : pick(NAMES[sex]) + ' ' + (nextId);
                used.add(name);
                return name;
            }
            // An animal: member = has a row in the bloodline (gets one when pairing: lineageFor).
            function animal(sex, o) {
                return Object.assign({ id: nextId++, sex, name: freshName(sex), coat: randInt(0, coatCount(sex) - 1), fav: pick(ATTRS),
                    inherited: {}, gen: 1, line: null, wild: false, motherId: null, fatherId: null, inbred: null, guest: false }, o || {});
            }

            // Bloodline and generation of a litter of these parents (lineageFor).
            function lineage(m, f) {
                const line = (!m.wild && m.line) || (!f.wild && f.line);
                const founder = m.wild ? f : m;
                const gm = !m.wild && m.line ? m.gen : 1;
                const gf = !f.wild && f.line ? f.gen : 1;
                return { line: line || founder.name, founded: !line, gen: Math.max(gm, gf) + 1 };
            }
            // 'close' (parent and child, full siblings), 'half' (half siblings, aunt/uncle) or null.
            function relation(a, b) {
                if (a.wild || b.wild) return null;
                if (a.id === b.motherId || a.id === b.fatherId || b.id === a.motherId || b.id === a.fatherId) return 'close';
                const sm = a.motherId && a.motherId === b.motherId;
                const sf = a.fatherId && a.fatherId === b.fatherId;
                if (sm && sf) return 'close';
                return sm || sf ? 'half' : null;
            }
            // The parents that pass inherited points on: a row in a bloodline (not wild).
            const rows = () => [st.mother, st.father].filter((p) => !p.wild);

            // --- Exact probabilities -------------------------------------------------------------
            // Coat distribution of a wild parent's single roll: math.random(-1, count - 1), -1 looks like coat 1.
            function wildCoatDist(sex) {
                const n = coatCount(sex);
                const d = new Array(n).fill(1 / (n + 1));
                d[0] += 1 / (n + 1);
                return d;
            }
            function coatOptions(sex) {
                return [st.mother, st.father].filter((p) => !sp().bySex || p.sex === sex);
            }
            function coatDist(sex) {
                const n = coatCount(sex);
                const d = new Array(n).fill(0);
                const opts = coatOptions(sex);
                for (const p of opts) {
                    const pd = p.wild ? wildCoatDist(p.sex) : null;
                    for (let c = 0; c < n; c++) d[c] += (pd ? pd[c] : (p.coat === c ? 1 : 0)) / opts.length;
                }
                return d;
            }
            function favDist(p) {
                const d = {};
                ATTRS.forEach((a) => { d[a] = !p.wild && p.fav ? (a === p.fav ? 1 : 0) : 1 / ATTRS.length; });
                return d;
            }
            function attrDist() {
                const a = favDist(st.mother), b = favDist(st.father), d = {};
                ATTRS.forEach((k) => { d[k] = 0.5 * a[k] + 0.5 * b[k]; });
                return d;
            }
            function passEntries() {
                const list = [];
                for (const p of rows()) for (const k of Object.keys(p.inherited)) list.push(p.inherited[k]);
                return list;
            }
            function bonusDist() {
                const e = passEntries();
                const d = new Array(INHERIT.maxBonus + 1).fill(0);
                for (let mask = 0; mask < (1 << e.length); mask++) {
                    let sum = INHERIT.bonus, p = 1;
                    e.forEach((v, i) => {
                        if (mask & (1 << i)) { sum += v; p *= INHERIT.passOnChance; } else p *= 1 - INHERIT.passOnChance;
                    });
                    d[Math.min(sum, INHERIT.maxBonus)] += p;
                }
                return d;
            }
            function sizeDist() {
                const [a, b] = sp().size, d = {};
                for (let n = a; n <= b; n++) d[n] = 1 / (b - a + 1);
                return d;
            }

            // --- The roll (LiwLitters.Create + inherit) ------------------------------------------
            function rollLitter() {
                const m = st.mother, f = st.father;
                const [a, b] = sp().size;
                const count = randInt(a, b);
                const wildCoats = {};
                for (const p of [m, f]) if (p.wild) wildCoats[p.sex] = Math.max(0, randInt(-1, coatCount(p.sex) - 1));
                const cubs = [];
                for (let i = 0; i < count; i++) {
                    const sex = Math.random() < 0.5 ? 'female' : 'male';
                    const opts = coatOptions(sex).map((p) => (p.wild ? wildCoats[p.sex] : p.coat));
                    const coat = opts.length && Math.random() < INHERIT.variantFromParent ? pick(opts) : randInt(0, coatCount(sex) - 1);
                    const bonus = {};
                    let total = 0;
                    const add = (k, pts) => {
                        pts = Math.min(pts, INHERIT.maxBonus - total);
                        if (pts > 0) { bonus[k] = (bonus[k] || 0) + pts; total += pts; }
                    };
                    const src = Math.random() < 0.5 ? m : f;
                    const base = !src.wild && src.fav ? src.fav : pick(ATTRS);
                    add(base, INHERIT.bonus);
                    for (const p of rows()) {
                        for (const k of Object.keys(p.inherited)) if (Math.random() < INHERIT.passOnChance) add(k, p.inherited[k]);
                    }
                    cubs.push({ sex, coat, bonus, total, base });
                }
                return { cubs, wildCoats, inbreeding: relation(m, f) };
            }
            function newTally() {
                return { litters: 0, cubs: 0, size: {}, coat: {}, bonus: {}, attr: {}, sex: { female: 0, male: 0 } };
            }
            function count(litter) {
                const t = st.tally;
                t.litters++;
                t.size[litter.cubs.length] = (t.size[litter.cubs.length] || 0) + 1;
                for (const c of litter.cubs) {
                    t.cubs++;
                    t.sex[c.sex]++;
                    const key = (sp().bySex ? c.sex + ':' : '') + c.coat;
                    t.coat[key] = (t.coat[key] || 0) + 1;
                    t.bonus[c.total] = (t.bonus[c.total] || 0) + 1;
                    t.attr[c.base] = (t.attr[c.base] || 0) + 1;
                }
            }
            function roll(n) {
                for (let i = 0; i < n; i++) {
                    const l = rollLitter();
                    count(l);
                    if (i === n - 1) st.litter = l;
                }
            }
            function pairChanged() {
                st.tally = newTally();
                roll(1);
            }

            // --- Starting state: a wolf line in its fourth generation --------------------------
            function seed() {
                const mira = animal('female', { name: 'Mira', coat: 1, fav: 'stamina' });
                const kodi = animal('male', { name: 'Kodi', coat: 4, fav: 'strength' });
                const tala = animal('female', { name: 'Tala', coat: 1, fav: 'stealth', inherited: { stamina: 1 }, gen: 2, line: 'Mira', motherId: mira.id, fatherId: kodi.id });
                const rune = animal('male', { name: 'Rune', coat: 6, fav: 'senses', guest: true });
                const asha = animal('female', { name: 'Asha', coat: 6, fav: 'senses', inherited: { senses: 1, stamina: 1 }, gen: 3, line: 'Mira', motherId: tala.id, fatherId: rune.id });
                const bran = animal('male', { name: 'Bran', coat: 0, fav: 'strength', guest: true });
                ['Mira', 'Kodi', 'Tala', 'Rune', 'Asha', 'Bran'].forEach((n) => used.add(n));
                st.history = [
                    { gen: 2, line: 'Mira', founded: true, mother: mira, father: kodi, inbreeding: null, chosen: [2],
                        cubs: [{ sex: 'male', coat: 4, bonus: { strength: 1 } }, { sex: 'female', coat: 4, bonus: { stamina: 1 } },
                            { sex: 'female', coat: 1, bonus: { stamina: 1 } }, { sex: 'male', coat: 1, bonus: { stamina: 1 } }] },
                    { gen: 3, line: 'Mira', founded: false, mother: tala, father: rune, inbreeding: null, chosen: [0],
                        cubs: [{ sex: 'female', coat: 6, bonus: { senses: 1, stamina: 1 } }, { sex: 'male', coat: 1, bonus: { stealth: 1 } },
                            { sex: 'male', coat: 6, bonus: { senses: 1 } }] },
                ];
                st.mother = asha;
                st.father = bran;
                st.tally = newTally();
                roll(100);
            }
            function founders() {
                used.clear();
                st.history = [];
                st.mother = animal('female');
                st.father = animal('male');
                pairChanged();
            }

            // Take over juvenile i of the current litter: it becomes a parent of the next generation.
            function takeOver(i) {
                const lin = lineage(st.mother, st.father);
                const litter = st.litter;
                const cub = litter.cubs[i];
                const asParent = (c) => {
                    const top = Object.keys(c.bonus).sort((a, b) => c.bonus[b] - c.bonus[a])[0];
                    return animal(c.sex, { coat: c.coat, fav: top || pick(ATTRS), inherited: Object.assign({}, c.bonus), gen: lin.gen,
                        line: lin.line, motherId: st.mother.wild ? null : st.mother.id, fatherId: st.father.wild ? null : st.father.id,
                        inbred: litter.inbreeding });
                };
                const child = asParent(cub);
                const chosen = [i];
                const other = cub.sex === 'female' ? 'male' : 'female';
                let partner;
                st.flash = '';
                if (st.partner === 'sibling') {
                    const j = litter.cubs.findIndex((c, k) => k !== i && c.sex === other);
                    if (j >= 0) {
                        partner = asParent(litter.cubs[j]);
                        partner.motherId = child.motherId;
                        partner.fatherId = child.fatherId;
                        chosen.push(j);
                    } else {
                        st.flash = T.noSib;
                    }
                }
                if (!partner) partner = st.partner === 'wild' ? animal(other, { wild: true, name: '' }) : animal(other, { guest: true });
                st.history.push({ gen: lin.gen, line: lin.line, founded: lin.founded, mother: st.mother, father: st.father,
                    cubs: litter.cubs, chosen, inbreeding: litter.inbreeding });
                st.mother = child.sex === 'female' ? child : partner;
                st.father = child.sex === 'male' ? child : partner;
                pairChanged();
                renderAll(true);
            }

            // --- View ----------------------------------------------------------------------------
            const attrName = (k) => T.attrs[k];
            const bonusTags = (b, cls) => {
                const keys = Object.keys(b || {});
                if (!keys.length) return `<span class="tg m">${T.inhNone}</span>`;
                return keys.map((k) => `<span class="tg ${cls || ''}">+${b[k]} ${esc(attrName(k))}</span>`).join('');
            };
            const sw = (coat) => `<i class="sw" style="--c:${SWATCH[coat % SWATCH.length]}"></i>`;
            const sexSym = (s) => (s === 'female' ? '♀' : '♂');
            const coatLabel = (c) => fmt(T.coatN, { n: c + 1 });
            const inbredText = (deg) => {
                const e = INBREEDING[deg];
                return fmt(T.inbredEff, { h: Math.round(e.maxHealth * 100), s: Math.round(e.staminaRecharge * 100), d: Math.round(e.damage * 100) });
            };

            root.innerHTML = `<style>${CSS}</style>
<div class="sim sim-erbe">
  <div class="sim-grid">
    <div class="sim-view"><div class="erbe-plate">
      <div class="erbe-head" data-head></div>
      <div class="erbe-pair" data-pair></div>
      <div class="sim-row">
        <button type="button" class="sim-btn" data-roll>${T.roll}</button>
        <button type="button" class="sim-btn ghost" data-roll100>${T.roll100}</button>
        <button type="button" class="sim-btn ghost" data-reset>${T.reset}</button>
      </div>
      <p class="hint" data-flash hidden></p>
      <div class="erbe-head" data-lhead></div>
      <div class="erbe-litter" data-litter></div>
      <div class="erbe-head"><strong>${T.tally}</strong><span data-tn></span></div>
      <div class="erbe-key"><span><i></i>${T.observed}</span><span><u></u>${T.expected}</span></div>
      <div class="erbe-tally" data-tally></div>
    </div></div>
    <div class="sim-side">
      <div class="sim-box"><h3>${T.pair}</h3>
        <label class="sim-field"><span>${T.species}</span><select data-species>${Object.keys(SPECIES).map((k) => `<option value="${k}">${SPECIES[k][lang] || SPECIES[k].de}</option>`).join('')}</select></label>
        <label class="sim-field"><span>${T.next}</span><select data-partner>
          <option value="outsider">${T.nextOut}</option><option value="wild">${T.nextWild}</option><option value="sibling">${T.nextSib}</option></select></label>
      </div>
      <div class="sim-box"><h3>${T.rules}</h3><ul>${T.ruleList.map((r) => `<li>${r}</li>`).join('')}</ul></div>
      <div class="sim-box"><h3>${T.after}</h3><ul>${T.afterList.map((r) => `<li>${r}</li>`).join('')}</ul></div>
    </div>
  </div>
  <div class="sim-view"><div class="tree"><p class="erbe-sub" style="margin-bottom:0.6rem">${T.tree}</p><div data-tree></div></div></div>
  <p class="sim-note">${T.note}</p>
</div>`;
            const $ = (s) => root.querySelector(s);

            function parentCard(p, role) {
                const n = coatCount(p.sex);
                const coatSel = p.wild
                    ? `<select disabled><option>${T.coatRandom}</option></select>`
                    : `<select data-k="coat">${Array.from({ length: n }, (_, c) => `<option value="${c}"${c === p.coat ? ' selected' : ''}>${coatLabel(c)}</option>`).join('')}</select>`;
                const favSel = `<select data-k="fav"${p.wild ? ' disabled' : ''}><option value="">${T.favNone}</option>${ATTRS.map((a) => `<option value="${a}"${a === p.fav && !p.wild ? ' selected' : ''}>${esc(attrName(a))}</option>`).join('')}</select>`;
                // Inherited bonus: the real one from the tree, or a preset in the favourite attribute.
                const presets = [{}];
                if (Object.keys(p.inherited).length) presets.unshift(p.inherited);
                const favA = p.fav || 'strength';
                for (let k = 1; k <= INHERIT.maxBonus; k++) presets.push({ [favA]: k });
                const sig = (b) => JSON.stringify(Object.keys(b).sort().map((k) => [k, b[k]]));
                const seen = new Set();
                const opts = [];
                presets.forEach((b) => { const s = sig(b); if (!seen.has(s)) { seen.add(s); opts.push(b); } });
                const cur = sig(p.inherited);
                const inhSel = `<select data-k="inh"${p.wild ? ' disabled' : ''}>${opts.map((b, k) => `<option value="${k}"${sig(b) === cur && !p.wild ? ' selected' : ''}>${Object.keys(b).length ? Object.keys(b).map((a) => `+${b[a]} ${esc(attrName(a))}`).join(', ') : T.inhNone}</option>`).join('')}</select>`;
                const sub = p.wild ? T.wild : (p.line ? fmt(T.genShort, { n: p.gen }) + ' · ' + esc(p.line) : T.outsider);
                const el = document.createElement('div');
                el.className = 'erbe-parent';
                el.dataset.sex = p.sex;
                el.innerHTML = `<div class="erbe-pname">${p.wild ? '<i class="sw q"></i>' : sw(p.coat)}<b>${sexSym(p.sex)} ${p.wild ? T.wild : esc(p.name)}</b><small>${p.wild ? T[role] : T[role] + ' · ' + sub}</small></div>
<label><span>${T.coat}</span>${coatSel}</label>
<label><span>${T.fav}</span>${favSel}</label>
<label><span>${T.inherited}</span>${inhSel}</label>
<label class="sim-check" style="display:flex"><input type="checkbox" data-k="wild"${p.wild ? ' checked' : ''}> ${T.wild}</label>
${p.inbred ? `<div class="tags"><span class="tg r">${T.inbred[p.inbred]}</span></div>` : ''}`;
                el.addEventListener('change', (e) => {
                    const k = e.target.dataset.k;
                    if (k === 'coat') p.coat = +e.target.value;
                    else if (k === 'fav') p.fav = e.target.value || null;
                    else if (k === 'inh') p.inherited = Object.assign({}, opts[+e.target.value]);
                    else if (k === 'wild') {
                        const other = p === st.mother ? st.father : st.mother;
                        if (e.target.checked && other.wild) other.wild = false;   // one parent must be a player
                        p.wild = e.target.checked;
                        if (!p.wild && !p.name) p.name = freshName(p.sex);
                        if (!p.wild && !p.fav) p.fav = pick(ATTRS);
                    }
                    pairChanged();
                    renderAll(true);
                });
                return el;
            }

            function renderPair() {
                const lin = lineage(st.mother, st.father);
                $('[data-head]').innerHTML = `<strong>${esc(fmt(lin.founded ? T.lineNew : T.line, { name: lin.line }))}</strong><span>${SPECIES[st.species][lang] || SPECIES[st.species].de} · ${fmt(T.litterOf, { n: lin.gen })}</span>`;
                const box = $('[data-pair]');
                box.innerHTML = '';
                box.appendChild(parentCard(st.mother, 'mother'));
                const x = document.createElement('div');
                x.className = 'erbe-x';
                x.textContent = '×';
                box.appendChild(x);
                box.appendChild(parentCard(st.father, 'father'));
            }

            function renderLitter(animate) {
                const l = st.litter;
                const cd = { female: coatDist('female'), male: coatDist('male') };
                const bd = bonusDist();
                const sd = sizeDist();
                const n = l.cubs.length;
                $('[data-lhead]').innerHTML = `<strong>${n === 1 ? T.litter1 : fmt(T.litter, { n })}</strong><span>${fmt(T.chance, { p: pct(sd[n]) })}${l.inbreeding ? ` · <span class="tg r">${T.inbred[l.inbreeding]}</span> ${inbredText(l.inbreeding)}` : ''}</span>`;
                const box = $('[data-litter]');
                box.innerHTML = l.cubs.map((c, i) => `<div class="cub${animate ? ' new' : ''}" style="animation-delay:${i * 60}ms">
  <div class="l"><span class="${c.sex === 'female' ? 'f' : 'mm'}">${sexSym(c.sex)} ${T[c.sex]}</span><span class="p">50 %</span></div>
  <div class="l"><span>${sw(c.coat)} ${coatLabel(c.coat)}</span><span class="p">${pct(cd[c.sex][c.coat])}</span></div>
  <div class="l"><span class="tags">${bonusTags(c.bonus)}</span><span class="p">${pct(bd[c.total])}</span></div>
  <button type="button" data-take="${i}">${T.takeOver}</button>
</div>`).join('');
                const fl = $('[data-flash]');
                fl.hidden = !st.flash;
                fl.textContent = st.flash;
            }

            function bars(title, list) {
                const max = Math.max(0.0001, ...list.map((r) => Math.max(r.obs, r.exp)));
                return `<div class="tb"><h4>${title}</h4>${list.map((r) => `<div class="br"><span>${r.label}</span><span class="trk"><i style="width:${(r.obs / max) * 100}%"></i><u style="left:${(r.exp / max) * 100}%"></u></span><span class="v"><b>${pct(r.obs)}</b> / ${pct(r.exp)}</span></div>`).join('')}</div>`;
            }
            function renderTally() {
                const t = st.tally;
                $('[data-tn]').textContent = fmt(T.tallyN, { l: t.litters, c: t.cubs }).replace(/^1 (Würfe|litters)/, (m, w) => (w === 'Würfe' ? '1 Wurf' : '1 litter')).replace(/ 1 (Jungtiere|juveniles)$/, (m, w) => (w === 'Jungtiere' ? ' 1 Jungtier' : ' 1 juvenile'));
                const L = Math.max(1, t.litters), C = Math.max(1, t.cubs);
                const sd = sizeDist();
                const html = [];
                html.push(bars(T.tSize, Object.keys(sd).map((k) => ({ label: k, obs: (t.size[k] || 0) / L, exp: sd[k] }))));
                const coatRows = [];
                const sexes = sp().bySex ? ['female', 'male'] : [null];
                for (const s of sexes) {
                    const d = s ? coatDist(s) : coatDist('female');
                    const nC = s ? (t.sex[s] || 0) : t.cubs;
                    d.forEach((p, c) => {
                        const o = (t.coat[(s ? s + ':' : '') + c] || 0) / Math.max(1, nC);
                        if (p > 0 || o > 0) coatRows.push({ label: `${sw(c)} ${s ? sexSym(s) + ' ' : ''}${c + 1}`, obs: o, exp: p });
                    });
                }
                html.push(bars(T.tCoat, coatRows));
                const bd = bonusDist();
                html.push(bars(T.tBonus, bd.map((p, k) => ({ k, p })).filter((r) => r.k >= 1).map((r) => ({
                    label: r.k === 1 ? T.points1 : fmt(T.pointsN, { n: r.k }), obs: (t.bonus[r.k] || 0) / C, exp: r.p }))));
                const ad = attrDist();
                html.push(bars(T.tAttr, ATTRS.filter((a) => ad[a] > 0 || t.attr[a]).map((a) => ({ label: esc(attrName(a)), obs: (t.attr[a] || 0) / C, exp: ad[a] }))));
                $('[data-tally]').innerHTML = html.join('');
            }

            function renderTree() {
                const an = (p, extra, cross) => (p.wild
                    ? `<span class="an">${cross ? '<span class="x">×</span>' : ''}<i class="sw q"></i>${sexSym(p.sex)} <b>${T.wildTag}</b></span>`
                    : `<span class="an">${cross ? '<span class="x">×</span>' : ''}${sw(p.coat)}${sexSym(p.sex)} <b>${esc(p.name)}</b>${extra || ''}${Object.keys(p.inherited).length ? bonusTags(p.inherited) : ''}${p.guest ? `<span class="tg m">${T.outsider}</span>` : ''}${p.inbred ? `<span class="tg r">${T.inbred[p.inbred]}</span>` : ''}</span>`);
                const rowsHtml = [];
                const list = st.history.slice();
                const MAX = 5;
                const hidden = Math.max(0, list.length - MAX);
                list.slice(hidden).forEach((h, idx) => {
                    const first = hidden === 0 && idx === 0 && h.founded;
                    const g = h.gen - 1;
                    const sibs = h.cubs.map((c, k) => `<span class="sib${h.chosen.includes(k) ? ' on' : ''}">${sw(c.coat)}${sexSym(c.sex)}${h.chosen.includes(k) ? ' ' + T.taken : ''}</span>`).join('');
                    rowsHtml.push(`<div class="gen"><div class="g">${fmt(T.genShort, { n: g })}</div><div class="b">
<div class="tp">${an(h.mother, first && !h.mother.wild ? ` <span class="tg">${T.founder}</span>` : '')}${an(h.father, '', true)}</div>
<div class="sibs">${h.cubs.length === 1 ? T.litter1 : fmt(T.litter, { n: h.cubs.length })}${h.inbreeding ? ` <span class="tg r">${T.inbred[h.inbreeding]}</span>` : ''} ${sibs}</div></div></div>`);
                });
                const lin = lineage(st.mother, st.father);
                rowsHtml.push(`<div class="gen"><div class="g">${fmt(T.genShort, { n: lin.gen - 1 })}</div><div class="b">
<div class="tp">${an(st.mother, lin.founded && !st.mother.wild ? ` <span class="tg">${T.founder}</span>` : '')}${an(st.father, '', true)}</div>
<div class="sibs">${fmt(T.litterOf, { n: lin.gen })}: ${st.litter.cubs.map((c) => `<span class="sib">${sw(c.coat)}${sexSym(c.sex)}</span>`).join('')} · ${T.waiting}</div></div></div>`);
                $('[data-tree]').innerHTML = (hidden ? `<p class="tmore">${fmt(T.treeMore, { n: hidden })}</p>` : '') + rowsHtml.join('');
            }

            function renderAll(animate) {
                if (!alive) return;
                renderPair();
                renderLitter(animate);
                renderTally();
                renderTree();
            }

            // --- Events --------------------------------------------------------------------------
            const onClick = (e) => {
                const b = e.target.closest('button');
                if (!b || !root.contains(b)) return;
                if (b.hasAttribute('data-roll')) { roll(1); renderLitter(true); renderTally(); renderTree(); }
                else if (b.hasAttribute('data-roll100')) { roll(100); renderLitter(true); renderTally(); renderTree(); }
                else if (b.hasAttribute('data-reset')) { st.tally = newTally(); count(st.litter); renderTally(); }
                else if (b.dataset.take !== undefined) takeOver(+b.dataset.take);
            };
            const onChange = (e) => {
                if (e.target.matches('[data-species]')) {
                    st.species = e.target.value;
                    st.flash = '';
                    founders();
                    renderAll(true);
                } else if (e.target.matches('[data-partner]')) {
                    st.partner = e.target.value;
                }
            };
            root.addEventListener('click', onClick);
            root.addEventListener('change', onChange);

            seed();
            renderAll(false);

            return {
                destroy() {
                    alive = false;
                    root.removeEventListener('click', onClick);
                    root.removeEventListener('change', onChange);
                },
            };
        },
    });
})();
