// Behind the scenes: combat and health as a duel simulator.
// Values as of 12.11.2026 from the LiW resources liw_species (species combat data), liw_combat (damage formula,
// stamina cost factor, dodge window, loner bonus, self-defence rule), liw_health (bleeding, limping, regeneration,
// downed state, helping up), liw_progression (attribute modifiers and their limits) and liw_aging (age modifiers).
(() => {
  window.LIW_SIMS = window.LIW_SIMS || [];

  // liw_species/shared/species.lua: maxHealth, class, solitary and combat.light/heavy/dodge/special
  // (damage, cooldown ms, hitDelay ms, duration ms, stamina % of max). special only where it hits (attack, pounce).
  const SPECIES = {
    wolf: { hp: 250, cls: 'carnivore', solo: false, light: { dmg: 15, cd: 900, hd: 250, dur: 900, st: 8 }, heavy: { dmg: 35, cd: 3000, hd: 450, dur: 1400, st: 20 }, dodge: { cd: 1500, dur: 700, st: 12 }, special: null },
    coyote: { hp: 190, cls: 'carnivore', solo: false, light: { dmg: 12, cd: 800, hd: 250, dur: 850, st: 7 }, heavy: { dmg: 28, cd: 2800, hd: 450, dur: 1300, st: 18 }, dodge: { cd: 1300, dur: 650, st: 10 }, special: null },
    fox: { hp: 140, cls: 'carnivore', solo: true, light: { dmg: 8, cd: 700, hd: 220, dur: 800, st: 6 }, heavy: { dmg: 18, cd: 2500, hd: 400, dur: 1200, st: 15 }, dodge: { cd: 1000, dur: 600, st: 8 }, special: { dmg: 25, cd: 12000, hd: 450, dur: 1200, st: 22, type: 'pounce' } },
    cougar: { hp: 300, cls: 'carnivore', solo: true, light: { dmg: 20, cd: 1000, hd: 300, dur: 1000, st: 10 }, heavy: { dmg: 40, cd: 3500, hd: 500, dur: 1500, st: 22 }, dodge: { cd: 1500, dur: 600, st: 12 }, special: { dmg: 45, cd: 15000, hd: 450, dur: 1200, st: 30, type: 'pounce' } },
    panther: { hp: 280, cls: 'carnivore', solo: true, light: { dmg: 19, cd: 950, hd: 300, dur: 1000, st: 10 }, heavy: { dmg: 38, cd: 3400, hd: 500, dur: 1500, st: 22 }, dodge: { cd: 1500, dur: 600, st: 12 }, special: { dmg: 46, cd: 15000, hd: 450, dur: 1200, st: 30, type: 'pounce' } },
    bear: { hp: 450, cls: 'omnivore', solo: true, light: { dmg: 22, cd: 1200, hd: 350, dur: 1100, st: 10 }, heavy: { dmg: 45, cd: 3500, hd: 600, dur: 1600, st: 25 }, dodge: null, special: { dmg: 60, cd: 20000, hd: 500, dur: 1500, st: 35, type: 'attack' } },
    grizzly: { hp: 600, cls: 'omnivore', solo: true, light: { dmg: 28, cd: 1300, hd: 350, dur: 1150, st: 12 }, heavy: { dmg: 55, cd: 3800, hd: 600, dur: 1700, st: 28 }, dodge: { cd: 2000, dur: 800, st: 15 }, special: { dmg: 75, cd: 22000, hd: 500, dur: 1500, st: 38, type: 'attack' } },
    alligator: { hp: 420, cls: 'carnivore', solo: true, light: { dmg: 24, cd: 1300, hd: 350, dur: 1100, st: 10 }, heavy: { dmg: 48, cd: 4000, hd: 450, dur: 1400, st: 24 }, dodge: { cd: 1800, dur: 700, st: 12 }, special: { dmg: 70, cd: 20000, hd: 450, dur: 1400, st: 34, type: 'attack' } },
    boar: { hp: 260, cls: 'omnivore', solo: false, light: { dmg: 12, cd: 1000, hd: 300, dur: 1000, st: 8 }, heavy: { dmg: 26, cd: 3200, hd: 450, dur: 1300, st: 18 }, dodge: { cd: 1300, dur: 600, st: 10 }, special: { dmg: 38, cd: 16000, hd: 450, dur: 1300, st: 28, type: 'attack' } },
    deer: { hp: 200, cls: 'herbivore', solo: false, light: { dmg: 8, cd: 1200, hd: 300, dur: 1000, st: 8 }, heavy: { dmg: 18, cd: 4000, hd: 400, dur: 1200, st: 20 }, dodge: { cd: 1200, dur: 600, st: 10 }, special: null },
    elk: { hp: 320, cls: 'herbivore', solo: false, light: { dmg: 14, cd: 1200, hd: 350, dur: 1100, st: 9 }, heavy: { dmg: 32, cd: 4000, hd: 450, dur: 1300, st: 22 }, dodge: { cd: 1400, dur: 650, st: 10 }, special: null },
    moose: { hp: 380, cls: 'herbivore', solo: true, light: { dmg: 16, cd: 1300, hd: 350, dur: 1100, st: 10 }, heavy: { dmg: 38, cd: 4200, hd: 450, dur: 1400, st: 24 }, dodge: { cd: 1500, dur: 700, st: 11 }, special: { dmg: 65, cd: 22000, hd: 500, dur: 1500, st: 36, type: 'attack' } },
    bison: { hp: 500, cls: 'herbivore', solo: false, light: { dmg: 16, cd: 1400, hd: 400, dur: 1200, st: 10 }, heavy: { dmg: 40, cd: 4500, hd: 500, dur: 1400, st: 25 }, dodge: { cd: 1800, dur: 700, st: 12 }, special: { dmg: 60, cd: 22000, hd: 500, dur: 1500, st: 35, type: 'attack' } },
  };
  const NAMES = {
    wolf: ['Wolf', 'Wolf'], coyote: ['Kojote', 'Coyote'], fox: ['Rotfuchs', 'Red fox'], cougar: ['Puma', 'Cougar'],
    panther: ['Panther', 'Panther'], bear: ['Schwarzbär', 'Black bear'], grizzly: ['Grizzlybär', 'Grizzly bear'],
    alligator: ['Alligator', 'Alligator'], boar: ['Wildschwein', 'Wild boar'], deer: ['Weißwedelhirsch', 'Whitetail deer'],
    elk: ['Wapiti', 'Elk'], moose: ['Elch', 'Moose'], bison: ['Bison', 'Bison'],
  };

  // Server rules: liw_combat/config.lua, liw_health/config.lua, liw_progression/config.lua, liw_aging/config.lua.
  const R = {
    staminaCostFactor: 0.5,     // liw_combat Config.StaminaCostFactor
    dodgeWindowMs: 500,         // liw_combat Config.DodgeWindowMs
    selfDefenceMs: 30000,       // liw_combat Config.SelfDefenceSeconds
    lonerBonus: 1.1,            // liw_combat Config.LonerDamageBonus
    bleed: { hitFraction: 0.15, tickMs: 2000, fraction: 0.01, durationMs: 60000 },   // liw_health Config.Bleeding
    limp: { hitFraction: 0.25, durationMs: 45000 },                                  // liw_health Config.Limp
    regen: { tickMs: 5000, fraction: 0.005 },                                        // liw_health Config.Regen
    downed: { ms: 60000, helpMs: 5000, revive: 0.2, lying: 0.05 },                   // liw_health Config.Downed
    attr: { damage: 0.03, maxHealth: 0.03, bleedTaken: -0.03, staminaRecharge: 0.03, staminaDrain: -0.025 },
    limits: { damage: [0.5, 2.0], maxHealth: [0.5, 2.0], bleedTaken: [0.3, 1.5], staminaRecharge: [0.5, 2.5], staminaDrain: [0.6, 1.5], regen: [0.5, 3.0] },
  };
  // Age (liw_aging): juvenile deltas in full at age 0 and fading out until 5 h; old deltas in full after 70 + 30 h.
  const AGES = {
    young0: { damage: -0.4, maxHealth: -0.4, regen: 0.5 },
    young25: { damage: -0.2, maxHealth: -0.2, regen: 0.25 },
    adult: {},
    old: { maxHealth: -0.1, staminaRecharge: -0.2, regen: -0.2 },
  };
  // Allocated attribute points (max 10 per attribute, one per level-up).
  const BUILDS = {
    none: {}, str10: { strength: 10 }, con10: { constitution: 10 }, sta10: { stamina: 10 }, mix: { strength: 5, constitution: 5 },
  };
  // Simulation assumptions (not LiW values): a player's reaction and pause between attacks, a helper's way.
  const SIM = { thinkMin: 100, thinkMax: 300, readChance: 0.6, reactMin: 150, reactMax: 450, helperArriveMs: 10000, fightLimitMs: 180000 };

  const TEXT = {
    de: {
      fighterA: 'kämpfer a', fighterB: 'kämpfer b', run: 'ablauf', result: 'ergebnis', log: 'trefferprotokoll', math: 'rechnung',
      species: 'Art', age: 'Alter', build: 'Attributpunkte', tactic: 'Taktik',
      ages: { young0: 'Jungtier, frisch geboren', young25: 'Jungtier, 2,5 h alt', adult: 'Erwachsen', old: 'Alt (ab 100 h)' },
      builds: { none: 'keine verteilt', str10: 'Stärke +10', con10: 'Konstitution +10', sta10: 'Ausdauer +10', mix: 'Stärke +5, Konstitution +5' },
      tactics: { light: 'Meist leichte Angriffe', heavy: 'Schwer + Sonderangriff', dodge: 'Leicht + oft ausweichen' },
      play: 'Abspielen', reroll: 'Neu würfeln', end: 'Zum Ende', speed: 'Tempo',
      helper: 'Ein Rudel- oder Herdenmitglied hilft auf', regenSlider: 'Ausdauer-Erholung (Spiel)', perSec: '%/s',
      legend: { hp: 'Gesundheit', st: 'Ausdauer (gestrichelt)', bleed: 'Blutung', limp: 'Humpeln', down: 'Niedergestreckt' },
      tags: { bleed: 'Blutung', limp: 'Humpeln', down: 'Niedergestreckt', dead: 'Tot', up: 'Aufgeholfen', loner: 'Einzelgänger ×1,1', wait: 'wehrt sich nur' },
      actions: { light: 'leichter Angriff', heavy: 'schwerer Angriff', special: 'Sonderangriff' },
      left: 'noch', s: 's', hp: 'Gesundheit', st: 'Ausdauer',
      noFight: 'Zwei Pflanzenfresser: Beide wehren sich nur, also fängt keiner an. (Nur im Alpha-Duell eines Rudels dürfen beide angreifen.)',
      ev: {
        start: (a, b) => `${a} greift ${b} an.`,
        noDodge: (a) => `${a} hat kein Ausweichen – kämpft nur mit leichten Angriffen.`,
        defend: (a) => `${a} wurde angegriffen und darf sich jetzt 30 s lang wehren.`,
        hit: (a, b, act, d, from, to) => `${a} → ${b}: ${act}, ${d} Schaden (${from} → ${to})`,
        dodged: (b, act) => `${b} weicht dem ${act === 'leichter Angriff' ? 'leichten Angriff' : act === 'schwerer Angriff' ? 'schweren Angriff' : 'Sonderangriff'} aus.`,
        bleed: 'blutet 60 s', limp: 'humpelt 45 s',
        breath: (a) => `${a} ist außer Atem und wartet auf Ausdauer.`,
        down: (b, hp, cause) => `${b} bricht zusammen${cause === 'bleed' ? ' (Blutung)' : ''}: ${hp} Gesundheit, 60 s Zeit. Jeder weitere Treffer wäre tödlich – der Sieger lässt ab.`,
        helper: (b) => `Ein Artgenosse erreicht ${b} und hält 5 s lang die Hilfe-Taste.`,
        up: (b, hp) => `${b} steht wieder auf: ${hp} Gesundheit (20 %), humpelt 45 s.`,
        dead: (b) => `60 s abgelaufen – ${b} stirbt endgültig.`,
        limit: 'Nach 3 Minuten hat keiner aufgegeben – Abbruch.',
      },
      res: {
        downed: (b, t) => `${b} nach ${t} s niedergestreckt`, none: 'Kein Kampf', draw: 'Unentschieden nach 3 min',
        hitsBy: (a) => `Treffer von ${a}`, dodges: (a) => `${a} ausgewichen`, bleedLoss: 'Verlust durch Blutung',
        after: 'Danach', up: (t) => `aufgeholfen (${t} s am Boden)`, dead: 'tot nach 60 s', lowSt: (a) => `${a}: niedrigste Ausdauer`,
      },
      math1: (n, base, mod, max) => `${n}: max. Gesundheit ${base} × ${mod} = <b>${max}</b>`,
      math2: (t, b) => `Blutung ab ${t}, Humpeln ab ${b} Schaden pro Treffer`,
      math3: (act, base, mod, d, hits) => `${act}: ${base} × ${mod} = <b>${d}</b> · ${hits} Treffer bis 0`,
      note: 'Vereinfacht: Beide stehen sich die ganze Zeit in Reichweite gegenüber, jeder Angriff, dem nicht ausgewichen wird, trifft (im Spiel muss man zielen; Treffhilfe gibt etwas Spielraum). Die Pause zwischen zwei Aktionen (0,1–0,3 s), ob ein Ausweicher den Angriff kommen sieht (60 %) und seine Reaktionszeit (0,15–0,45 s) sind Annahmen der Simulation, ebenso dass der Helfer nach 10 s ankommt. <b>Aus der Spiel-Engine, nicht aus LiW:</b> wie schnell sich die Ausdauer erholt (darum der Regler; LiW skaliert sie nur mit dem Attribut Ausdauer und dem Alter) und wie viel Ausdauer ein Tier absolut hat – LiW rechnet Kosten in Prozent der maximalen Ausdauer. Auch dass ein Treffer genau seinen Schaden abzieht, übernimmt die Engine. Echte Werte aus LiW: Schaden, Abklingzeiten, Trefferzeitpunkt, Ausdauerkosten (× 0,5), 0,5 s Ausweichfenster, Einzelgänger-Bonus ×1,1 (allein ohne Rudel), Pflanzenfresser wehren sich nur 30 s nach einem Angriff, Blutung ab 15 % der max. Gesundheit in einem Treffer (1 % alle 2 s, 60 s), Humpeln ab 25 %, Regeneration 0,5 % alle 5 s (satt und ohne Blutung), niedergestreckt mit 5 %, 60 s Zeit, 5 s Aufhelfen auf 20 %. Ohne Fähigkeiten, Buffs, Skills, Krankheiten und Reviere; Werte Stand 12.11.2026.',
    },
    en: {
      fighterA: 'fighter a', fighterB: 'fighter b', run: 'playback', result: 'result', log: 'hit log', math: 'the numbers',
      species: 'Species', age: 'Age', build: 'Attribute points', tactic: 'Tactic',
      ages: { young0: 'Juvenile, newborn', young25: 'Juvenile, 2.5 h old', adult: 'Adult', old: 'Old (from 100 h)' },
      builds: { none: 'none allocated', str10: 'Strength +10', con10: 'Constitution +10', sta10: 'Stamina +10', mix: 'Strength +5, Constitution +5' },
      tactics: { light: 'Mostly light attacks', heavy: 'Heavy + special attack', dodge: 'Light + dodge often' },
      play: 'Play', reroll: 'Roll again', end: 'Skip to end', speed: 'Speed',
      helper: 'A pack or herd mate helps up', regenSlider: 'Stamina recovery (game)', perSec: '%/s',
      legend: { hp: 'Health', st: 'Stamina (dashed)', bleed: 'Bleeding', limp: 'Limping', down: 'Downed' },
      tags: { bleed: 'Bleeding', limp: 'Limping', down: 'Downed', dead: 'Dead', up: 'Helped up', loner: 'Loner ×1.1', wait: 'only defends' },
      actions: { light: 'light attack', heavy: 'heavy attack', special: 'special attack' },
      left: '', s: 's', hp: 'Health', st: 'Stamina',
      noFight: 'Two herbivores: both only defend themselves, so neither starts. (Only in a pack\'s alpha duel may both attack.)',
      ev: {
        start: (a, b) => `${a} attacks ${b}.`,
        noDodge: (a) => `${a} has no dodge – fights with light attacks only.`,
        defend: (a) => `${a} was attacked and may now fight back for 30 s.`,
        hit: (a, b, act, d, from, to) => `${a} → ${b}: ${act}, ${d} damage (${from} → ${to})`,
        dodged: (b, act) => `${b} dodges the ${act}.`,
        bleed: 'bleeds 60 s', limp: 'limps 45 s',
        breath: (a) => `${a} is out of breath and waits for stamina.`,
        down: (b, hp, cause) => `${b} collapses${cause === 'bleed' ? ' (bleeding)' : ''}: ${hp} health, 60 s left. Any further hit would be fatal – the winner backs off.`,
        helper: (b) => `One of its kind reaches the ${b} and holds the help key for 5 s.`,
        up: (b, hp) => `${b} gets back up: ${hp} health (20 %), limps 45 s.`,
        dead: (b) => `60 s are over – the ${b} dies for good.`,
        limit: 'After 3 minutes nobody is down – stopped.',
      },
      res: {
        downed: (b, t) => `${b} downed after ${t} s`, none: 'No fight', draw: 'Draw after 3 min',
        hitsBy: (a) => `Hits by ${a}`, dodges: (a) => `${a} dodged`, bleedLoss: 'Lost to bleeding',
        after: 'Then', up: (t) => `helped up (${t} s on the ground)`, dead: 'dead after 60 s', lowSt: (a) => `${a}: lowest stamina`,
      },
      math1: (n, base, mod, max) => `${n}: max health ${base} × ${mod} = <b>${max}</b>`,
      math2: (t, b) => `bleeding from ${t}, limping from ${b} damage in one hit`,
      math3: (act, base, mod, d, hits) => `${act}: ${base} × ${mod} = <b>${d}</b> · ${hits} hits to 0`,
      note: 'Simplified: both stand face to face in range the whole time, and every attack that is not dodged lands (in the game you have to aim; hit assist gives some leeway). The pause between two actions (0.1–0.3 s), whether a dodger sees the attack coming (60 %) and its reaction time (0.15–0.45 s) are assumptions of the simulation, as is the helper arriving after 10 s. <b>From the game engine, not from LiW:</b> how fast stamina recovers (hence the slider; LiW only scales it with the Stamina attribute and age) and how much stamina an animal has in absolute terms – LiW counts costs in percent of the maximum. The engine also applies a hit\'s damage; the simulation takes it 1:1. Real LiW values: damage, cooldowns, moment of the hit, stamina costs (× 0.5), 0.5 s dodge window, loner bonus ×1.1 (alone, no pack), herbivores only fight back for 30 s after being attacked, bleeding from 15 % of max health in one hit (1 % every 2 s, 60 s), limping from 25 %, regeneration 0.5 % every 5 s (fed and not bleeding), downed with 5 %, 60 s left, 5 s of helping up to 20 %. No abilities, buffs, skills, diseases or territories; values as of 12 Nov 2026.',
    },
  };

  const clamp = (v, [lo, hi]) => Math.min(hi, Math.max(lo, v));
  const r2 = (v) => Math.round(v * 100) / 100;

  function modsOf(age, build) {
    const a = AGES[age] || {}, b = BUILDS[build] || {};
    return {
      damage: clamp(1 + (b.strength || 0) * R.attr.damage + (a.damage || 0), R.limits.damage),
      maxHealth: clamp(1 + (b.constitution || 0) * R.attr.maxHealth + (a.maxHealth || 0), R.limits.maxHealth),
      bleedTaken: clamp(1 + (b.constitution || 0) * R.attr.bleedTaken, R.limits.bleedTaken),
      staminaRecharge: clamp(1 + (b.stamina || 0) * R.attr.staminaRecharge + (a.staminaRecharge || 0), R.limits.staminaRecharge),
      staminaDrain: clamp(1 + (b.stamina || 0) * R.attr.staminaDrain, R.limits.staminaDrain),
      regen: clamp(1 + (a.regen || 0), R.limits.regen),
    };
  }

  // Server damage (liw_combat computeDamage): base x damage modifier (x loner bonus), rounded, at least 1;
  // then x the target's damageTaken (1.0 without buffs).
  function hitDamage(base, f) {
    return Math.max(1, Math.floor(base * f.mods.damage * (f.loner ? R.lonerBonus : 1) + 0.5));
  }

  function rng(seed) {
    let s = seed >>> 0;
    return () => {
      s = (s + 0x6D2B79F5) >>> 0;
      let t = s;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function makeFighter(p, idx) {
    const sp = SPECIES[p.species];
    const mods = modsOf(p.age, p.build);
    const max = Math.floor(sp.hp * mods.maxHealth);
    return {
      idx, key: p.species, sp, p, mods, max, hp: max, st: 100, loner: sp.solo, busy: 0, nextThink: 0, cd: {},
      dodgeUntil: -1, bleedUntil: -1, limpUntil: -1, downedAt: null, deadAt: null, revivedAt: null, helpAt: null,
      lastHitBy: -1e9, hits: 0, dmg: 0, dodges: 0, bleedLoss: 0, minSt: 100, breathless: false, defending: false,
      tactic: p.tactic === 'dodge' && !sp.dodge ? 'light' : p.tactic,
    };
  }

  // The whole fight on a 50 ms grid; returns events and samples for playback.
  function simulate(cfg, L) {
    const rand = rng(cfg.seed);
    const between = (a, b) => a + rand() * (b - a);
    const F = [makeFighter(cfg.a, 0), makeFighter(cfg.b, 1)];
    const name = (f) => NAMES[f.key][L === 'de' ? 0 : 1];
    const events = [], samples = [], hits = [], dodgesQ = [];
    const log = (t, kind, text, who) => events.push({ t, kind, text, who });
    const stCost = (f, data) => data.st * R.staminaCostFactor * f.mods.staminaDrain;
    const herb = (f) => f.sp.cls === 'herbivore';
    const out = { F, events, samples, end: 0, noFight: false, downed: null, downT: null, draw: false };

    if (herb(F[0]) && herb(F[1])) {
      out.noFight = true;
      for (let t = 0; t <= 10000; t += 500) samples.push({ t, v: F.map((f) => ({ hp: 1, st: 1, bleed: false, limp: false, down: false, dead: false })) });
      out.end = 10000;
      log(0, 'info', TEXT[L].noFight, null);
      return out;
    }
    // The carnivore / omnivore opens the fight; a herbivore waits until it is attacked.
    const opener = herb(F[0]) ? F[1] : F[0];
    log(0, 'info', TEXT[L].ev.start(name(opener), name(F[1 - opener.idx])), opener.idx);
    F.forEach((f) => { if (f.p.tactic === 'dodge' && !f.sp.dodge) log(0, 'info', TEXT[L].ev.noDodge(name(f)), f.idx); });
    F.forEach((f) => { f.nextThink = f === opener ? between(0, 200) : between(SIM.thinkMin, SIM.thinkMax); });

    const down = (f, t, cause) => {
      f.hp = Math.max(1, Math.floor(f.max * R.downed.lying));
      f.bleedUntil = -1;
      f.downedAt = t;
      if (cfg.helper) f.helpAt = t + SIM.helperArriveMs;
      if (out.downT === null) { out.downT = t; out.downed = f.idx; }
      log(t, 'down', TEXT[L].ev.down(name(f), f.hp, cause), f.idx);
    };
    const ready = (f, act, t) => f.sp[act] && t >= (f.cd[act] || 0);
    const choose = (f, t) => {
      const can = (act, reserve = 0) => ready(f, act, t) && f.st - stCost(f, f.sp[act]) >= reserve;
      const wants = [];
      if (f.tactic === 'heavy') {
        if (f.sp.special) wants.push(['special', 0]);
        wants.push(['heavy', 0], ['light', 50]);
      } else if (f.tactic === 'dodge') {
        wants.push(['light', stCost(f, f.sp.dodge)]);
      } else {
        wants.push(['light', 0]);
      }
      for (const [act, reserve] of wants) if (can(act, reserve)) return act;
      // Ready but short of breath for the main attack.
      const main = wants[0][0] === 'special' && !ready(f, 'special', t) ? 'heavy' : wants[0][0];
      if (ready(f, main, t) && f.st < stCost(f, f.sp[main]) + wants.find((w) => w[0] === main)[1] && !f.breathless) {
        f.breathless = true;
        log(t, 'info', TEXT[L].ev.breath(name(f)), f.idx);
      }
      return null;
    };

    let t = 0, combat = true, stopAt = null;
    const DT = 50;
    while (true) {
      // Dodges that react to an incoming attack (client: not while busy, cooldown, stamina; server: 500 ms window).
      for (let i = dodgesQ.length - 1; i >= 0; i--) {
        const d = dodgesQ[i];
        if (d.t > t) continue;
        dodgesQ.splice(i, 1);
        const f = F[d.who], data = f.sp.dodge;
        if (!combat || t < f.busy || !ready(f, 'dodge', t) || f.st < stCost(f, data)) continue;
        f.st -= stCost(f, data);
        f.busy = t + data.dur;
        f.cd.dodge = t + data.cd;
        f.dodgeUntil = t + R.dodgeWindowMs;
        f.nextThink = Math.max(f.nextThink, f.busy + between(SIM.thinkMin, SIM.thinkMax));
      }
      // Hits arriving at the server.
      for (let i = hits.length - 1; i >= 0; i--) {
        const h = hits[i];
        if (h.t > t) continue;
        hits.splice(i, 1);
        if (!combat) continue;
        const a = F[h.from], b = F[h.to];
        const actName = TEXT[L].actions[h.act];
        if (t <= b.dodgeUntil) {
          b.dodges++;
          log(t, 'dodge', TEXT[L].ev.dodged(name(b), actName), b.idx);
          continue;
        }
        if (herb(a) && t - a.lastHitBy > R.selfDefenceMs) continue;   // defence only
        const before = b.hp;
        b.hp = Math.max(0, b.hp - h.dmg);
        b.lastHitBy = t;
        a.hits++;
        a.dmg += h.dmg;
        const extra = [];
        if (h.dmg >= b.max * R.bleed.hitFraction) { b.bleedUntil = t + R.bleed.durationMs; extra.push(TEXT[L].ev.bleed); }
        if (h.dmg >= b.max * R.limp.hitFraction) { b.limpUntil = t + R.limp.durationMs; extra.push(TEXT[L].ev.limp); }
        log(t, 'hit', TEXT[L].ev.hit(name(a), name(b), actName, h.dmg, before, b.hp) + (extra.length ? ' · ' + extra.join(', ') : ''), a.idx);
        if (herb(b) && !b.defending) { b.defending = true; log(t, 'info', TEXT[L].ev.defend(name(b)), b.idx); b.nextThink = t + between(SIM.thinkMin, SIM.thinkMax); }
        if (b.hp <= 0) down(b, t, 'hit');
      }
      for (const f of F) {
        if (f.deadAt !== null) continue;
        if (f.downedAt !== null && f.revivedAt === null) {
          // Downed: help arrives and holds the key, or the time runs out.
          if (f.helpAt !== null && t === Math.ceil(f.helpAt / DT) * DT) log(t, 'info', TEXT[L].ev.helper(name(f)), f.idx);
          if (f.helpAt !== null && t >= f.helpAt + R.downed.helpMs) {
            f.revivedAt = t;
            f.hp = Math.max(1, Math.floor(f.max * R.downed.revive));
            f.limpUntil = t + R.limp.durationMs;
            log(t, 'up', TEXT[L].ev.up(name(f), f.hp), f.idx);
          } else if (f.helpAt === null && t >= f.downedAt + R.downed.ms) {
            f.deadAt = t;
            f.hp = 0;
            log(t, 'dead', TEXT[L].ev.dead(name(f)), f.idx);
          }
          continue;
        }
        if (t > 0 && t % R.bleed.tickMs === 0 && t < f.bleedUntil) {
          const loss = Math.ceil(f.max * R.bleed.fraction * f.mods.bleedTaken);
          f.hp = Math.max(0, f.hp - loss);
          f.bleedLoss += loss;
          if (f.hp <= 0) down(f, t, 'bleed');
        }
        if (t > 0 && t % R.regen.tickMs === 0 && t >= f.bleedUntil && f.hp > 0 && f.hp < f.max) {
          f.hp = Math.min(f.max, f.hp + Math.ceil(f.max * R.regen.fraction * f.mods.regen));
        }
        f.st = Math.min(100, f.st + cfg.regenRate * f.mods.staminaRecharge * DT / 1000);
      }
      combat = F.every((f) => f.downedAt === null);
      if (combat) {
        for (const f of F) {
          if (t < f.busy || t < f.nextThink) continue;
          if (herb(f) && t - f.lastHitBy > R.selfDefenceMs) { f.nextThink = t + 100; continue; }
          const act = choose(f, t);
          if (!act) { f.nextThink = t + 100; continue; }
          const data = f.sp[act];
          f.breathless = false;
          f.st -= stCost(f, data);
          f.busy = t + data.dur;
          f.cd[act] = t + data.cd;
          f.nextThink = f.busy + between(SIM.thinkMin, SIM.thinkMax);
          const o = F[1 - f.idx];
          hits.push({ t: t + data.hd, from: f.idx, to: o.idx, act, dmg: hitDamage(data.dmg, f) });
          if (o.tactic === 'dodge' && rand() < SIM.readChance) dodgesQ.push({ t: t + Math.round(between(SIM.reactMin, SIM.reactMax) / DT) * DT, who: o.idx });
        }
      }
      for (const f of F) f.minSt = Math.min(f.minSt, f.st);
      if (t % 100 === 0) {
        samples.push({ t, v: F.map((f) => ({
          hp: f.hp / f.max, st: f.st / 100, hpAbs: f.hp, bleed: t < f.bleedUntil && f.downedAt === null, limp: t < f.limpUntil && f.deadAt === null,
          down: f.downedAt !== null && f.revivedAt === null && f.deadAt === null, dead: f.deadAt !== null, up: f.revivedAt !== null,
          downLeft: f.downedAt !== null ? Math.max(0, R.downed.ms - (t - f.downedAt)) : 0, defending: herb(f) && t - f.lastHitBy <= R.selfDefenceMs,
        })) });
      }
      const settled = F.every((f) => f.downedAt === null || f.revivedAt !== null || f.deadAt !== null);
      if (!combat && settled && stopAt === null) stopAt = t + 3000;
      if (stopAt !== null && t >= stopAt) break;
      if (combat && t >= SIM.fightLimitMs) { out.draw = true; log(t, 'info', TEXT[L].ev.limit, null); break; }
      t += DT;
    }
    out.end = t;
    return out;
  }

  const fmtS = (ms, L) => (ms / 1000).toFixed(1).replace('.', L === 'de' ? ',' : '.');

  window.LIW_SIMS.push({
    id: 'kampf',
    order: 30,
    title: { de: 'Kampf', en: 'Combat' },
    teaser: { de: 'Duell mit echten Kampfwerten', en: 'A duel with real combat values' },
    lede: {
      de: 'Zwei Tiere, eine Taktik, echte Werte: Schaden, Abklingzeiten und Ausdauerkosten der Arten, dazu Blutung, Humpeln, Zusammenbruch und das Aufhelfen – im Zeitraffer.',
      en: 'Two animals, one tactic, real values: the species\' damage, cooldowns and stamina costs, plus bleeding, limping, collapsing and being helped up – sped up.',
    },
    mount(root, lang) {
      const L = lang === 'en' ? 'en' : 'de';
      const T = TEXT[L];
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const css = getComputedStyle(document.documentElement);
      const tok = (n, fb) => (css.getPropertyValue(n) || '').trim() || fb;
      const C = {
        gold: tok('--gold', '#d6ae5e'), sky: tok('--sky', '#7ea6cc'), rust: tok('--rust', '#c8694a'), moss: tok('--moss', '#8fb878'),
        ink: tok('--ink', '#efe7d8'), muted: tok('--muted', '#9f927e'), soft: tok('--soft', '#cfc4b0'), body: tok('--body', 'Georgia, serif'),
      };
      const COL = [C.gold, C.sky];

      const style = document.createElement('style');
      style.textContent = `
.sim-kampf .kf-head { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 0.6rem 1rem; padding: 0.8rem 0.9rem 0.3rem; }
.sim-kampf .kf-card { display: grid; gap: 0.25rem; min-width: 0; }
.sim-kampf .kf-name { font-family: var(--old); font-size: 1.1rem; line-height: 1.15; color: var(--ink); display: flex; align-items: center; gap: 0.45rem; min-width: 0; }
.sim-kampf .kf-name i { width: 0.7rem; height: 0.7rem; border-radius: 50%; background: var(--c); flex: none; }
.sim-kampf .kf-name span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.sim-kampf .kf-bar { position: relative; height: 0.85rem; border-radius: 999px; background: rgba(239, 231, 216, 0.08); overflow: hidden; }
.sim-kampf .kf-bar.st { height: 0.4rem; }
.sim-kampf .kf-bar b { position: absolute; inset: 0 auto 0 0; width: 100%; background: var(--c); border-radius: 999px; }
.sim-kampf .kf-bar.st b { opacity: 0.55; }
.sim-kampf .kf-nums { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 0 0.6rem; font-size: 0.9rem; color: var(--muted); font-variant-numeric: tabular-nums; }
.sim-kampf .kf-nums span { white-space: nowrap; }
.sim-kampf .kf-tags { display: flex; flex-wrap: wrap; gap: 0.25rem; min-height: 1.35rem; }
.sim-kampf .kf-tags .sim-tag { font-size: 0.75rem; }
.sim-kampf .kf-tags .bleed { color: var(--rust); border-color: rgba(200, 105, 74, 0.5); }
.sim-kampf .kf-tags .limp { color: var(--soft); border-color: var(--line); }
.sim-kampf .kf-tags .down, .sim-kampf .kf-tags .dead { color: #14110c; background: var(--rust); border-color: var(--rust); }
.sim-kampf .kf-tags .up { color: var(--moss); border-color: rgba(143, 184, 120, 0.5); }
.sim-kampf .kf-main { display: grid; gap: 1rem; min-width: 0; }
.sim-kampf .kf-lower { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr); gap: 1rem; align-items: start; }
@media (max-width: 860px) { .sim-kampf .kf-lower { grid-template-columns: minmax(0, 1fr); } }
.sim-kampf .kf-log { list-style: none; margin: 0; padding: 0; max-height: 17rem; overflow-y: auto; font-size: 0.95rem; line-height: 1.35; display: grid; gap: 0.3rem; overscroll-behavior: contain; }
.sim-kampf .kf-log li { display: grid; grid-template-columns: 3.2rem minmax(0, 1fr); gap: 0.4rem; border-left: 3px solid var(--c, var(--line)); padding-left: 0.45rem; color: var(--soft); }
.sim-kampf .kf-log li time { color: var(--muted); font-variant-numeric: tabular-nums; }
.sim-kampf .kf-log li.dodge { color: var(--muted); font-style: italic; }
.sim-kampf .kf-log li.down, .sim-kampf .kf-log li.dead { color: var(--rust); }
.sim-kampf .kf-log li.up { color: var(--moss); }
.sim-kampf .kf-math { display: grid; gap: 0.35rem; font-size: 0.95rem; color: var(--soft); line-height: 1.35; }
.sim-kampf .kf-math p { margin: 0; }
.sim-kampf .kf-math b { color: var(--ink); font-weight: 600; }
.sim-kampf .kf-math .kf-sub { color: var(--muted); }
.sim-kampf .kf-speed { display: inline-flex; gap: 0.3rem; }
.sim-kampf .kf-speed .sim-btn { padding: 0.25rem 0.7rem; }
.sim-kampf .sim-field select { width: 100%; min-width: 0; }
.sim-kampf .sim-stat span { color: var(--soft); }
.sim-kampf .sim-stat b { text-align: right; white-space: nowrap; }
.sim-kampf .kf-verdict { margin: 0; font-family: var(--old); font-size: 1.15rem; line-height: 1.25; color: var(--ink); }
.sim-kampf .sim-view .sim-legend { padding: 0 0.9rem 0.7rem; }
`;
      root.append(style);

      // ---------- DOM ----------
      const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };
      const grid = el('div', 'sim-grid');
      const main = el('div', 'kf-main');
      const view = el('div', 'sim-view');
      const head = el('div', 'kf-head');
      const cards = [0, 1].map((i) => {
        const card = el('div', 'kf-card');
        card.style.setProperty('--c', COL[i]);
        const nm = el('div', 'kf-name', '<i></i><span></span>');
        const hpBar = el('div', 'kf-bar', '<b></b>');
        const hpNums = el('div', 'kf-nums', '<span></span><span></span>');
        const stBar = el('div', 'kf-bar st', '<b></b>');
        const tags = el('div', 'kf-tags');
        card.append(nm, hpBar, hpNums, stBar, tags);
        head.append(card);
        return { nm: nm.querySelector('span'), hp: hpBar.querySelector('b'), nums: hpNums.children, st: stBar.querySelector('b'), tags };
      });
      const canvas = document.createElement('canvas');
      canvas.setAttribute('role', 'img');
      const legend = el('div', 'sim-legend');
      [[C.ink, T.legend.hp], [C.muted, T.legend.st], [C.rust, T.legend.bleed], ['rgba(159,146,126,0.55)', T.legend.limp], ['rgba(200,105,74,0.35)', T.legend.down]]
        .forEach(([c, label]) => { const s = el('span', null, `<i style="--c:${c}"></i>`); s.append(label); legend.append(s); });
      view.append(head, canvas, legend);

      const lower = el('div', 'kf-lower');
      const logBox = el('div', 'sim-box', `<h3>${T.log}</h3>`);
      const logList = el('ol', 'kf-log');
      logBox.append(logList);
      const mathBox = el('div', 'sim-box', `<h3>${T.math}</h3>`);
      const mathBody = el('div', 'kf-math');
      mathBox.append(mathBody);
      lower.append(logBox, mathBox);
      main.append(view, lower);

      const side = el('div', 'sim-side');
      const state = {
        a: { species: 'wolf', age: 'adult', build: 'none', tactic: 'heavy' },
        b: { species: 'deer', age: 'adult', build: 'none', tactic: 'dodge' },
        helper: true, regenRate: 3, speed: 5, seed: 7,
      };
      const select = (label, options, value, onChange) => {
        const lab = el('label', 'sim-field');
        const sp = el('span'); sp.textContent = label;
        const sel = document.createElement('select');
        options.forEach(([v, text]) => { const o = document.createElement('option'); o.value = v; o.textContent = text; sel.append(o); });
        sel.value = value;
        sel.addEventListener('change', () => onChange(sel.value));
        lab.append(sp, sel);
        return lab;
      };
      const speciesOpts = Object.keys(SPECIES).map((k) => [k, NAMES[k][L === 'de' ? 0 : 1]]);
      ['a', 'b'].forEach((k, i) => {
        const box = el('div', 'sim-box', `<h3>${i ? T.fighterB : T.fighterA}</h3>`);
        box.style.borderLeft = `3px solid ${COL[i]}`;
        box.append(
          select(T.species, speciesOpts, state[k].species, (v) => { state[k].species = v; rerun(); }),
          select(T.age, Object.keys(AGES).map((a) => [a, T.ages[a]]), state[k].age, (v) => { state[k].age = v; rerun(); }),
          select(T.build, Object.keys(BUILDS).map((b) => [b, T.builds[b]]), state[k].build, (v) => { state[k].build = v; rerun(); }),
          select(T.tactic, Object.keys(T.tactics).map((tk) => [tk, T.tactics[tk]]), state[k].tactic, (v) => { state[k].tactic = v; rerun(); }),
        );
        side.append(box);
      });

      const runBox = el('div', 'sim-box', `<h3>${T.run}</h3>`);
      const btnRow = el('div', 'sim-row');
      const playBtn = el('button', 'sim-btn'); playBtn.type = 'button'; playBtn.textContent = T.play;
      const endBtn = el('button', 'sim-btn ghost'); endBtn.type = 'button'; endBtn.textContent = T.end;
      const rollBtn = el('button', 'sim-btn ghost'); rollBtn.type = 'button'; rollBtn.textContent = T.reroll;
      btnRow.append(playBtn, endBtn, rollBtn);
      const speedRow = el('div', 'sim-row');
      const speedLabel = el('span'); speedLabel.textContent = T.speed; speedLabel.style.color = 'var(--soft)';
      const speedGroup = el('span', 'kf-speed');
      const speedBtns = [2, 5, 10].map((v) => {
        const b = el('button', 'sim-btn ghost'); b.type = 'button'; b.textContent = `${v}×`;
        b.addEventListener('click', () => { state.speed = v; syncSpeed(); });
        speedGroup.append(b);
        return [v, b];
      });
      const syncSpeed = () => speedBtns.forEach(([v, b]) => b.setAttribute('aria-pressed', v === state.speed ? 'true' : 'false'));
      speedRow.append(speedLabel, speedGroup);
      const helpLab = el('label', 'sim-check');
      const helpBox = document.createElement('input'); helpBox.type = 'checkbox'; helpBox.checked = state.helper;
      helpBox.addEventListener('change', () => { state.helper = helpBox.checked; rerun(); });
      helpLab.append(helpBox, document.createTextNode(T.helper));
      const regenLab = el('label', 'sim-field');
      const regenHead = el('span'); const regenName = el('span'); regenName.textContent = T.regenSlider;
      const regenOut = document.createElement('output');
      regenHead.append(regenName, regenOut);
      const regenIn = document.createElement('input'); regenIn.type = 'range'; regenIn.min = '1'; regenIn.max = '10'; regenIn.step = '1'; regenIn.value = String(state.regenRate);
      regenIn.addEventListener('input', () => { state.regenRate = Number(regenIn.value); rerun(); });
      regenLab.append(regenHead, regenIn);
      runBox.append(btnRow, speedRow, helpLab, regenLab);
      if (reduce) speedRow.hidden = true;

      const resBox = el('div', 'sim-box', `<h3>${T.result}</h3>`);
      const resBody = el('div');
      resBox.append(resBody);
      side.append(runBox, resBox);
      grid.append(main, side);
      const note = el('p', 'sim-note');
      note.innerHTML = T.note;
      root.append(grid, note);

      // ---------- simulation + playback ----------
      let result = null, now = 0, raf = 0, last = 0, shownEvents = -1;
      const name = (i) => NAMES[result.F[i].key][L === 'de' ? 0 : 1];
      const dec = (v) => String(r2(v)).replace('.', L === 'de' ? ',' : '.');

      function renderMath() {
        const F = result.F;
        const parts = [];
        F.forEach((f, i) => {
          const o = F[1 - i];
          parts.push(`<p style="border-left:3px solid ${COL[i]};padding-left:0.45rem">${T.math1(name(i), f.sp.hp, dec(f.mods.maxHealth), f.max)}<br><span class="kf-sub">${T.math2(Math.ceil(f.max * R.bleed.hitFraction), Math.ceil(f.max * R.limp.hitFraction))}</span><br>`
            + ['light', 'heavy', 'special'].filter((a) => f.sp[a]).map((a) => {
              const d = hitDamage(f.sp[a].dmg, f);
              const mod = dec(f.mods.damage * (f.loner ? R.lonerBonus : 1));
              return T.math3(T.actions[a][0].toUpperCase() + T.actions[a].slice(1), f.sp[a].dmg, mod, d, Math.ceil(o.max / d));
            }).join('<br>') + (f.loner ? `<br><span class="kf-sub">${T.tags.loner}</span>` : '') + '</p>');
        });
        mathBody.innerHTML = parts.join('');
      }

      function renderResult() {
        const F = result.F;
        const rows = [];
        const stat = (k, v) => rows.push(`<div class="sim-stat"><span>${k}</span><b>${v}</b></div>`);
        const verdict = (text) => rows.push(`<p class="kf-verdict">${text}</p>`);
        if (result.noFight) verdict(T.res.none);
        else if (result.draw) verdict(T.res.draw);
        else {
          const lo = F[result.downed];
          verdict(T.res.downed(name(lo.idx), fmtS(result.downT, L)));
          stat(T.res.after, lo.deadAt !== null ? T.res.dead : lo.revivedAt !== null ? T.res.up(fmtS(lo.revivedAt - lo.downedAt, L)) : '–');
        }
        if (!result.noFight) {
          F.forEach((f, i) => stat(T.res.hitsBy(name(i)), `${f.hits} · ${f.dmg}`));
          F.forEach((f, i) => { if (f.sp.dodge && f.tactic === 'dodge') stat(T.res.dodges(name(i)), f.dodges); });
          F.forEach((f, i) => { if (f.bleedLoss) stat(`${T.res.bleedLoss} (${name(i)})`, f.bleedLoss); });
          F.forEach((f, i) => stat(T.res.lowSt(name(i)), `${Math.round(f.minSt)} %`));
        }
        resBody.innerHTML = rows.join('');
      }

      function rerun(keepTime) {
        result = simulate({ a: state.a, b: state.b, helper: state.helper, regenRate: state.regenRate, seed: state.seed }, L);
        regenOut.textContent = `${state.regenRate} ${T.perSec}`;
        cards.forEach((c, i) => { c.nm.textContent = name(i); c.nm.title = name(i); });
        canvas.setAttribute('aria-label', `${name(0)} – ${name(1)}`);
        renderMath();
        renderResult();
        shownEvents = -1;
        logList.replaceChildren();
        if (keepTime === 'end' || reduce) { now = result.end; stop(); draw(); } else play();
      }

      function sampleAt(t) {
        const s = result.samples;
        if (!s.length) return null;
        let i = Math.min(s.length - 1, Math.max(0, Math.floor(t / 100)));
        while (i > 0 && s[i].t > t) i--;
        return s[i];
      }

      function renderHead() {
        const s = sampleAt(now);
        if (!s) return;
        s.v.forEach((v, i) => {
          const f = result.F[i], c = cards[i];
          c.hp.style.width = `${Math.max(0, v.hp * 100)}%`;
          c.st.style.width = `${Math.max(0, v.st * 100)}%`;
          c.nums[0].textContent = `${T.hp} ${result.noFight ? f.max : v.hpAbs} / ${f.max}`;
          c.nums[1].textContent = `${T.st} ${Math.round(v.st * 100)} %`;
          const tags = [];
          if (v.dead) tags.push(['dead', T.tags.dead]);
          else if (v.down) tags.push(['down', `${T.tags.down} · ${L === 'de' ? 'noch ' : ''}${Math.ceil(v.downLeft / 1000)} s`]);
          if (v.up && !v.dead) tags.push(['up', T.tags.up]);
          if (v.bleed) tags.push(['bleed', T.tags.bleed]);
          if (v.limp && !v.dead && !v.down) tags.push(['limp', T.tags.limp]);
          if (!result.noFight && f.sp.cls === 'herbivore' && !v.defending && !v.down && !v.dead) tags.push(['limp', T.tags.wait]);
          const key = tags.map((x) => x.join(':')).join('|');
          if (c.tags.dataset.key !== key) {
            c.tags.dataset.key = key;
            c.tags.replaceChildren(...tags.map(([cls, text]) => { const sp = el('span', `sim-tag ${cls}`); sp.textContent = text; return sp; }));
          }
        });
      }

      function renderLog() {
        const evs = result.events;
        let n = 0;
        while (n < evs.length && evs[n].t <= now) n++;
        if (n === shownEvents) return;
        if (n < shownEvents) { logList.replaceChildren(); shownEvents = 0; }
        for (let i = Math.max(0, shownEvents); i < n; i++) {
          const e = evs[i];
          const li = el('li', e.kind);
          if (e.who !== null && e.who !== undefined) li.style.setProperty('--c', COL[e.who]);
          const tm = el('time'); tm.textContent = `${fmtS(e.t, L)} s`;
          const tx = el('span'); tx.textContent = e.text;
          li.append(tm, tx);
          logList.append(li);
        }
        shownEvents = n;
        logList.scrollTop = logList.scrollHeight;
      }

      // ---------- canvas ----------
      const ctx = canvas.getContext('2d');
      let cw = 0, ch = 0;
      function size() {
        const w = Math.max(240, Math.floor(view.clientWidth));
        const h = w < 560 ? 230 : 300;
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        if (w === cw && h === ch && canvas.width === Math.round(w * dpr)) return;
        cw = w; ch = h;
        canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
        canvas.style.height = `${h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      function draw() {
        if (!result) return;
        size();
        renderHead();
        renderLog();
        const w = cw, h = ch;
        ctx.clearRect(0, 0, w, h);
        const small = w < 560;
        const padL = small ? 30 : 38, padR = 12, padT = 12, laneH = 7, lanes = 2;
        const axisH = 18;
        const plotB = h - axisH - lanes * (laneH + 4) - 6;
        const pw = w - padL - padR, ph = plotB - padT;
        const total = Math.max(result.end, 1000);
        const X = (t) => padL + (t / total) * pw;
        const Y = (v) => plotB - v * ph;
        ctx.font = `${small ? 11 : 12}px ${C.body}`;
        ctx.textBaseline = 'middle';
        // Grid
        ctx.strokeStyle = 'rgba(239,231,216,0.08)';
        ctx.lineWidth = 1;
        ctx.fillStyle = C.muted;
        ctx.textAlign = 'right';
        [0, 0.25, 0.5, 0.75, 1].forEach((v) => {
          ctx.beginPath(); ctx.moveTo(padL, Math.round(Y(v)) + 0.5); ctx.lineTo(w - padR, Math.round(Y(v)) + 0.5); ctx.stroke();
          ctx.fillText(`${v * 100}%`, padL - 5, Y(v));
        });
        // Time ticks
        const step = total > 120000 ? 30000 : total > 50000 ? 10000 : total > 20000 ? 5000 : 2000;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        for (let t = 0; t <= total; t += step) {
          const x = X(t);
          ctx.beginPath(); ctx.moveTo(Math.round(x) + 0.5, padT); ctx.lineTo(Math.round(x) + 0.5, plotB); ctx.stroke();
          if (x < w - padR - 14 || t === 0) ctx.fillText(`${t / 1000} s`, x, plotB + 4);
        }
        const S = result.samples.filter((s) => s.t <= now);
        // Downed regions
        [0, 1].forEach((i) => {
          let start = null;
          const flush = (endT) => {
            ctx.fillStyle = 'rgba(200,105,74,0.12)';
            ctx.fillRect(X(start), padT, X(endT) - X(start), ph);
            start = null;
          };
          S.forEach((s) => { if (s.v[i].down && start === null) start = s.t; if (!s.v[i].down && start !== null) flush(s.t); });
          if (start !== null) flush(S[S.length - 1].t);
        });
        // Status lanes
        const laneY = (i) => plotB + axisH + i * (laneH + 4);
        [0, 1].forEach((i) => {
          const y = laneY(i);
          ctx.fillStyle = 'rgba(239,231,216,0.05)';
          ctx.fillRect(padL, y, pw, laneH);
          ctx.fillStyle = COL[i];
          ctx.beginPath(); ctx.arc(padL - 10, y + laneH / 2, 3.5, 0, Math.PI * 2); ctx.fill();
          for (let k = 0; k < S.length; k++) {
            const v = S[k].v[i];
            const x0 = X(S[k].t), x1 = X(S[k].t + 100) + 0.5;
            if (v.down) { ctx.fillStyle = 'rgba(200,105,74,0.35)'; ctx.fillRect(x0, y, x1 - x0, laneH); }
            else if (v.dead) { ctx.fillStyle = 'rgba(239,231,216,0.18)'; ctx.fillRect(x0, y, x1 - x0, laneH); }
            if (v.limp) { ctx.fillStyle = 'rgba(159,146,126,0.55)'; ctx.fillRect(x0, y + laneH * 0.55, x1 - x0, laneH * 0.45); }
            if (v.bleed) { ctx.fillStyle = C.rust; ctx.fillRect(x0, y, x1 - x0, laneH * 0.5); }
          }
        });
        // Curves
        const curve = (i, key, dashed) => {
          if (S.length < 1) return;
          ctx.save();
          ctx.strokeStyle = COL[i];
          ctx.globalAlpha = dashed ? 0.55 : 1;
          ctx.lineWidth = dashed ? 1.25 : 2;
          if (dashed) ctx.setLineDash([4, 4]);
          ctx.lineJoin = 'round';
          ctx.beginPath();
          S.forEach((s, k) => {
            const x = X(s.t), y = Y(Math.max(0, s.v[i][key]));
            if (k === 0) ctx.moveTo(x, y);
            else if (!dashed) { ctx.lineTo(x, Y(Math.max(0, S[k - 1].v[i][key]))); ctx.lineTo(x, y); }
            else ctx.lineTo(x, y);
          });
          ctx.stroke();
          ctx.restore();
        };
        [0, 1].forEach((i) => curve(i, 'st', true));
        [0, 1].forEach((i) => curve(i, 'hp', false));
        // Hit and dodge markers on the target's curve.
        result.events.forEach((e) => {
          if (e.t > now || (e.kind !== 'hit' && e.kind !== 'dodge' && e.kind !== 'up' && e.kind !== 'dead')) return;
          const target = e.kind === 'hit' ? 1 - e.who : e.who;
          const s = sampleAt(e.t + 100);
          if (!s) return;
          const x = X(e.t), y = Y(Math.max(0, s.v[target].hp));
          ctx.beginPath();
          if (e.kind === 'hit') { ctx.fillStyle = COL[1 - target]; ctx.arc(x, y, 2.6, 0, Math.PI * 2); ctx.fill(); }
          else if (e.kind === 'dodge') { ctx.strokeStyle = COL[target]; ctx.lineWidth = 1.25; ctx.arc(x, y - 7, 3.2, 0, Math.PI * 2); ctx.stroke(); }
          else if (e.kind === 'up') { ctx.fillStyle = C.moss; ctx.moveTo(x, y - 9); ctx.lineTo(x - 5, y - 2); ctx.lineTo(x + 5, y - 2); ctx.closePath(); ctx.fill(); }
          else { ctx.strokeStyle = C.ink; ctx.lineWidth = 1.5; ctx.moveTo(x - 4, y - 4); ctx.lineTo(x + 4, y + 4); ctx.moveTo(x + 4, y - 4); ctx.lineTo(x - 4, y + 4); ctx.stroke(); }
        });
        // Playhead and clock
        if (now < result.end) {
          ctx.strokeStyle = 'rgba(239,231,216,0.35)';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(Math.round(X(now)) + 0.5, padT); ctx.lineTo(Math.round(X(now)) + 0.5, plotB); ctx.stroke();
        }
        ctx.textAlign = 'right';
        ctx.textBaseline = 'top';
        ctx.fillStyle = C.ink;
        ctx.font = `600 ${small ? 12 : 13}px ${C.body}`;
        ctx.fillText(`${fmtS(Math.min(now, result.end), L)} s`, w - padR - 2, padT + 2);
        if (result.noFight) {
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = C.soft;
          ctx.font = `${small ? 13 : 15}px ${C.body}`;
          wrap(T.noFight, padL + pw / 2, padT + ph / 2, pw - 20, small ? 17 : 20);
        }
      }
      function wrap(text, x, y, maxW, lh) {
        const words = text.split(' ');
        const lines = [];
        let line = '';
        words.forEach((wd) => { const test = line ? `${line} ${wd}` : wd; if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = wd; } else line = test; });
        if (line) lines.push(line);
        lines.forEach((ln, i) => ctx.fillText(ln, x, y + (i - (lines.length - 1) / 2) * lh));
      }

      function frame(ts) {
        const dt = last ? Math.min(100, ts - last) : 16;
        last = ts;
        now = Math.min(result.end, now + dt * state.speed);
        draw();
        if (now < result.end) raf = requestAnimationFrame(frame);
        else raf = 0;
      }
      function stop() { if (raf) cancelAnimationFrame(raf); raf = 0; last = 0; }
      function play() {
        stop();
        if (reduce) { now = result.end; draw(); return; }
        now = 0;
        logList.replaceChildren(); shownEvents = 0;
        raf = requestAnimationFrame(frame);
      }

      playBtn.addEventListener('click', play);
      endBtn.addEventListener('click', () => { stop(); now = result.end; draw(); });
      rollBtn.addEventListener('click', () => { state.seed += 1; rerun(); });
      syncSpeed();

      const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(() => { if (!raf) draw(); }) : null;
      if (ro) ro.observe(view);

      // Opens on the finished fight; any change replays it.
      rerun('end');

      return {
        destroy() {
          stop();
          if (ro) ro.disconnect();
        },
      };
    },
  });
})();
