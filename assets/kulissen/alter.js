// "Ein Leben" - life course of one animal: age phases (liw_aging) and progression (liw_progression).
// Values as of 12.11.2026 from the LiW configs; sources are noted next to each constant.
(() => {
  window.LIW_SIMS = window.LIW_SIMS || [];

  // --- Real values -------------------------------------------------------------------------------
  // liw_aging/config.lua
  const AGE = {
    juvenileHours: 5, oldHours: 70, rampHours: 30, startScale: 0.6,
    juvenile: { damage: -0.4, maxHealth: -0.4, regen: 0.5, xpGain: 0.5, detection: -0.2 },
    old: { moveRate: -0.05, staminaRecharge: -0.2, maxHealth: -0.1, regen: -0.2 },
  };
  // liw_progression/config.lua
  const PROG = {
    maxLevel: 30, base: 100, exponent: 1.5, attrPerLevel: 1, skillEvery: 2, maxAttr: 10,
    constitutionHealth: 0.03,
    kill: { prey_small: 5, prey_large: 20, boar: 15 },
    fed: { meat: 0.5, plants: 0.4, berries: 0.4 },
    drink: 1, survival: { everyMinutes: 5, amount: 10 }, newDistrict: 50, districts: 18,
    helpedUp: 15, duelWon: 50,
    limits: {
      damage: [0.5, 2.0], staminaRecharge: [0.5, 2.5], moveRate: [0.8, 1.2], detection: [0.4, 1.5],
      maxHealth: [0.5, 2.0], regen: [0.5, 3.0], xpGain: [0.5, 2.0],
    },
  };
  const NPC_PACK_XP = 400;          // liw_npcpacks/config.lua (rival pack driven off)
  const MENTOR = { xpGain: 0.1, newPlayerHours: 20 };   // liw_mentor/config.lua, liw_core/config.lua
  // liw_goals/config.lua: level-tier daily (d1/d2/d3) and weekly (w1/w2/w3) quests; 3 daily, 2 weekly.
  const QUESTS = {
    daily: 3, weekly: 2,
    d: [[120, 80, 100, 130, 100], [280, 280, 300, 260, 380, 280], [550, 550, 550, 750, 800, 550, 650]],
    w: [[500, 500, 450, 600, 500], [1300, 1300, 1400, 1200, 1600, 1300], [2600, 2600, 2800, 2500, 3200, 2600, 2800]],
  };
  // liw_species/shared/species.lua: base maximum health.
  const SPECIES = { wolf: 250, deer: 200, bear: 450, fox: 140, rabbit: 60 };

  // Assumed activity per hour of play for each style (counts only; the XP per event are the real values).
  const STYLES = {
    hunt: { kills: { prey_small: 4, prey_large: 2, boar: 1 }, fed: { meat: 60 }, drink: 10 },
    explore: { kills: { prey_small: 1 }, fed: { plants: 20, berries: 10 }, drink: 10, districts: 2 },
    pack: { kills: { prey_small: 2, prey_large: 1 }, fed: { meat: 40 }, drink: 10, helpedUp: 2, duelWon: 0.25, npcPack: 0.1 },
    quests: { kills: { prey_small: 2 }, fed: { meat: 15, plants: 15 }, drink: 10, quests: true },
  };

  const MAX_H = 120, STEP = 0.1;

  const TEXT = {
    de: {
      title: 'Ein Leben', teaser: 'Wachsen, Stufen, Altern',
      lede: 'Ein Tier altert nur, solange du es spielst. Zieh am Regler durch die Stunden in der Wildnis: Größe, Kraft und Erfahrung entwickeln sich nach den echten Werten des Servers.',
      time: 'Zeit', hours: 'Stunden in der Wildnis', play: 'Abspielen', pause: 'Anhalten',
      jump: ['Geburt', 'Erwachsen', 'Alt'],
      style: 'Spielstil', styles: { hunt: 'Jagen', explore: 'Erkunden', pack: 'Rudel', quests: 'Quests' },
      perDay: 'Spielzeit pro Tag', perDayOpt: (n) => `${n} h`,
      species: 'Art', speciesNames: { wolf: 'Wolf', deer: 'Hirsch', bear: 'Bär', fox: 'Fuchs', rabbit: 'Kaninchen' },
      mentor: 'Mit Mentor (+10 % EP bis 20 h)', con: 'Attributpunkte in Konstitution',
      state: 'Stand', phase: 'Phase', phases: { juvenile: 'Jungtier', adult: 'Erwachsen', old: 'Alt' },
      size: 'Größe', level: 'Stufe', xp: 'Erfahrung', attr: 'Attributpunkte', skill: 'Fähigkeitspunkte',
      rate: 'EP pro Stunde (jetzt)', health: 'Gesundheit', base: 'Basis',
      mods: 'Boni und Mali durch das Alter', none: 'keine – volle Kraft',
      modNames: {
        damage: 'Schaden', maxHealth: 'Gesundheit', regen: 'Heilung', xpGain: 'Erfahrung',
        detection: 'Bemerkt werden', moveRate: 'Tempo', staminaRecharge: 'Ausdauer-Erholung',
      },
      miles: 'Meilensteine', mileAt: (l) => `Stufe ${l}`, after: (h) => `nach ${h} h`, never: `nicht in ${MAX_H} h`,
      chartA: 'Werte durch das Alter (100 % = erwachsen)', chartB: 'Stufe', skillDot: 'Fähigkeitspunkt',
      ramp: 'lässt nach', axis: 'Std.', zoom: 'erste 5 h gedehnt', maxLv: 'Höchststufe',
      legend: { health: 'Gesundheit', damage: 'Schaden', regen: 'Heilung', xp: 'EP-Gewinn', move: 'Tempo', stam: 'Ausdauer-Erholung', level: 'Stufe' },
      note: '<b>Echte Werte</b> (Stand 12.11.2026): Phasen, Größe und Boni/Mali aus liw_aging, EP-Kurve (100 · n<sup>1,5</sup> je Stufe), EP je Ereignis, Punkte je Stufe und die Grenzen der Werte aus liw_progression, Gesundheit der Arten aus liw_species, Quest-EP aus liw_goals. <b>Vereinfacht:</b> Wie oft du in einer Stunde jagst, frisst, trinkst, aufhilfst oder Regionen entdeckst, ist eine Annahme je Spielstil (die EP je Ereignis sind echt). Quests sind der Durchschnitt der Stufenquests; alle 3 Tages- und 2 Wochenquests gelten als erledigt. Der Mentor zählt so, als wäre das Tier dein erstes. Quests aus Ereignissen, Paarung, legendäre Tiere, Gemeinschaftsziele und Revierboni fehlen, ebenso Fähigkeiten und geerbte Punkte. Die Zeitachse ist in den ersten 5 Stunden gedehnt. An Altersschwäche stirbt derzeit kein Tier.',
    },
    en: {
      title: 'One life', teaser: 'Growing, levels, aging',
      lede: 'An animal only ages while you play it. Drag through the hours in the wild: size, strength and experience follow the real values of the server.',
      time: 'Time', hours: 'Hours in the wild', play: 'Play', pause: 'Pause',
      jump: ['Birth', 'Adult', 'Old'],
      style: 'Play style', styles: { hunt: 'Hunting', explore: 'Exploring', pack: 'Pack', quests: 'Quests' },
      perDay: 'Play time per day', perDayOpt: (n) => `${n} h`,
      species: 'Species', speciesNames: { wolf: 'Wolf', deer: 'Deer', bear: 'Bear', fox: 'Fox', rabbit: 'Rabbit' },
      mentor: 'With a mentor (+10 % XP up to 20 h)', con: 'Attribute points into constitution',
      state: 'Status', phase: 'Phase', phases: { juvenile: 'Juvenile', adult: 'Adult', old: 'Old' },
      size: 'Size', level: 'Level', xp: 'Experience', attr: 'Attribute points', skill: 'Skill points',
      rate: 'XP per hour (now)', health: 'Health', base: 'base',
      mods: 'Bonuses and penalties from age', none: 'none – full strength',
      modNames: {
        damage: 'Damage', maxHealth: 'Health', regen: 'Healing', xpGain: 'Experience',
        detection: 'Being noticed', moveRate: 'Speed', staminaRecharge: 'Stamina recovery',
      },
      miles: 'Milestones', mileAt: (l) => `Level ${l}`, after: (h) => `after ${h} h`, never: `not within ${MAX_H} h`,
      chartA: 'Values from age (100 % = adult)', chartB: 'Level', skillDot: 'skill point',
      ramp: 'declining', axis: 'h', zoom: 'first 5 h stretched', maxLv: 'max level',
      legend: { health: 'Health', damage: 'Damage', regen: 'Healing', xp: 'XP gain', move: 'Speed', stam: 'Stamina recovery', level: 'Level' },
      note: '<b>Real values</b> (as of 12 Nov 2026): phases, size and bonuses/penalties from liw_aging, the XP curve (100 · n<sup>1.5</sup> per level), XP per event, points per level and the value limits from liw_progression, species health from liw_species, quest XP from liw_goals. <b>Simplified:</b> how often you hunt, eat, drink, help others up or discover regions in an hour is an assumption per play style (the XP per event are real). Quests are the average of the level-tier quests; all 3 daily and 2 weekly quests count as done. The mentor counts as if this were your first animal. Event quests, mating, legendary animals, community goals and territory bonuses are left out, as are skills and inherited points. The time axis is stretched for the first 5 hours. Currently no animal dies of old age.',
    },
  };

  // --- Model -------------------------------------------------------------------------------------
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lim = (name, v) => clamp(v, PROG.limits[name][0], PROG.limits[name][1]);

  // Total XP to reach each level (liw_progression xpForLevel).
  const LEVEL_XP = [0, 0];
  for (let l = 2; l <= PROG.maxLevel; l++) LEVEL_XP[l] = LEVEL_XP[l - 1] + Math.floor(PROG.base * Math.pow(l, PROG.exponent));
  const levelFor = (xp) => {
    let l = 1;
    while (l < PROG.maxLevel && xp >= LEVEL_XP[l + 1]) l++;
    return l;
  };

  const phaseOf = (h) => (h < AGE.juvenileHours ? 'juvenile' : h < AGE.oldHours ? 'adult' : 'old');
  const scaleOf = (h) => (h < AGE.juvenileHours ? AGE.startScale + (1 - AGE.startScale) * (h / AGE.juvenileHours) : 1);

  // Age deltas (liw_aging effects()).
  function ageDeltas(h) {
    const out = {};
    if (h < AGE.juvenileHours) {
      const g = clamp(h / AGE.juvenileHours, 0, 1);
      for (const k in AGE.juvenile) out[k] = AGE.juvenile[k] * (1 - g);
    } else if (h >= AGE.oldHours) {
      const d = clamp((h - AGE.oldHours) / AGE.rampHours, 0, 1);
      for (const k in AGE.old) out[k] = AGE.old[k] * d;
    }
    return out;
  }

  function modsAt(h, level, opt) {
    const a = ageDeltas(h);
    const con = opt.con ? Math.min((level - 1) * PROG.attrPerLevel, PROG.maxAttr) * PROG.constitutionHealth : 0;
    return {
      maxHealth: lim('maxHealth', 1 + (a.maxHealth || 0) + con),
      damage: lim('damage', 1 + (a.damage || 0)),
      regen: lim('regen', 1 + (a.regen || 0)),
      xpGain: lim('xpGain', 1 + (a.xpGain || 0) + (opt.mentor && h < MENTOR.newPlayerHours ? MENTOR.xpGain : 0)),
      moveRate: lim('moveRate', 1 + (a.moveRate || 0)),
      staminaRecharge: lim('staminaRecharge', 1 + (a.staminaRecharge || 0)),
    };
  }

  const avg = (list) => list.reduce((s, v) => s + v, 0) / list.length;
  const tierOf = (level) => (level <= 5 ? 0 : level <= 14 ? 1 : 2);

  // Raw XP per hour (before the xpGain modifier) of a style at a level; districts left for exploring.
  function rawRate(style, level, districtsLeft, perDay) {
    const s = STYLES[style];
    let r = (60 / PROG.survival.everyMinutes) * PROG.survival.amount + s.drink * PROG.drink;
    for (const k in s.kills) r += s.kills[k] * PROG.kill[k];
    for (const k in s.fed) r += s.fed[k] * PROG.fed[k];
    if (s.districts && districtsLeft > 0) r += s.districts * PROG.newDistrict;
    if (s.helpedUp) r += s.helpedUp * PROG.helpedUp;
    if (s.duelWon) r += s.duelWon * PROG.duelWon;
    if (s.npcPack) r += s.npcPack * NPC_PACK_XP;
    if (s.quests) {
      const t = tierOf(level);
      r += (QUESTS.daily / perDay) * avg(QUESTS.d[t]) + (QUESTS.weekly / (7 * perDay)) * avg(QUESTS.w[t]);
    }
    return r;
  }

  // Whole life at STEP resolution: xp, level, XP rate.
  function simulate(opt) {
    const n = Math.round(MAX_H / STEP) + 1;
    const xp = new Float64Array(n), level = new Uint8Array(n), rate = new Float64Array(n);
    let total = 0, districts = PROG.districts;
    for (let i = 0; i < n; i++) {
      const h = i * STEP;
      const lv = levelFor(total);
      const r = rawRate(opt.style, lv, districts, opt.perDay) * modsAt(h, lv, opt).xpGain;
      xp[i] = total; level[i] = lv; rate[i] = r;
      total += r * STEP;
      if (STYLES[opt.style].districts && districts > 0) districts = Math.max(0, districts - STYLES[opt.style].districts * STEP);
    }
    return { xp, level, rate };
  }

  // --- Page -------------------------------------------------------------------------------------
  window.LIW_SIMS.push({
    id: 'alter',
    order: 60,
    title: { de: TEXT.de.title, en: TEXT.en.title },
    teaser: { de: TEXT.de.teaser, en: TEXT.en.teaser },
    lede: { de: TEXT.de.lede, en: TEXT.en.lede },
    mount(root, lang) {
      const T = TEXT[lang] || TEXT.de;
      const nf = new Intl.NumberFormat(lang === 'en' ? 'en-GB' : 'de-DE', { maximumFractionDigits: 1 });
      const nf0 = new Intl.NumberFormat(lang === 'en' ? 'en-GB' : 'de-DE', { maximumFractionDigits: 0 });
      const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const css = getComputedStyle(document.documentElement);
      const tok = (n, f) => (css.getPropertyValue(n).trim() || f);
      const C = {
        gold: tok('--gold', '#d6ae5e'), rust: tok('--rust', '#c8694a'), moss: tok('--moss', '#8fb878'),
        sky: tok('--sky', '#7ea6cc'), ink: tok('--ink', '#efe7d8'), soft: tok('--soft', '#cfc4b0'),
        muted: tok('--muted', '#9f927e'), body: tok('--body', 'Georgia, serif'), display: tok('--display', 'Georgia, serif'),
      };
      const pct = (v) => `${v > 0 ? '+' : v < 0 ? '−' : '±'}${nf0.format(Math.abs(Math.round(v * 100)))} %`;

      const opt = { style: 'hunt', perDay: 2, mentor: false, con: true, species: 'wolf' };
      let hours = 80, sim = simulate(opt), raf = 0, timer = 0, lastTs = 0;

      root.innerHTML = `
<style>
.sim-alter .sim-view canvas { touch-action: pan-y; cursor: ew-resize; }
.sim-alter .alter-styles { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.4rem; }
.sim-alter .alter-styles .sim-btn { padding: 0.3rem 0.5rem; }
.sim-alter .alter-size { width: 100%; height: auto; display: block; }
.sim-alter .alter-mods { display: grid; gap: 0.1rem; font-size: 1rem; color: var(--soft); }
.sim-alter .alter-mods div { display: flex; justify-content: space-between; gap: 0.5rem; }
.sim-alter .alter-mods b { font-weight: 600; font-variant-numeric: tabular-nums; }
.sim-alter .alter-mods .up { color: var(--moss); }
.sim-alter .alter-mods .down { color: var(--rust); }
.sim-alter .alter-mods .empty { color: var(--muted); }
.sim-alter .alter-dash i { background: repeating-linear-gradient(90deg, var(--c) 0 0.25rem, transparent 0.25rem 0.4rem); height: 0.2rem; border-radius: 0; }
</style>
<div class="sim sim-alter">
  <div class="sim-grid">
    <div style="display:grid;gap:0.8rem;min-width:0">
      <div class="sim-view"><canvas aria-label="${T.chartA} / ${T.chartB}"></canvas></div>
      <div class="sim-legend">
        <span><i style="--c:${C.moss}"></i>${T.legend.health}</span>
        <span><i style="--c:${C.rust}"></i>${T.legend.damage}</span>
        <span><i style="--c:${C.sky}"></i>${T.legend.regen}</span>
        <span><i style="--c:${C.gold}"></i>${T.legend.xp}</span>
        <span class="alter-dash"><i style="--c:${C.soft}"></i>${T.legend.move}</span>
        <span class="alter-dash"><i style="--c:${C.sky}"></i>${T.legend.stam}</span>
        <span><i style="--c:${C.ink};border-radius:50%"></i>${T.legend.level} · ◆ ${T.skillDot}</span>
      </div>
      <div class="sim-box">
        <h3>${T.state}</h3>
        <div class="sim-row" style="justify-content:space-between;align-items:end;gap:1rem">
          <div style="flex:1 1 9rem;min-width:0"><canvas class="alter-size" width="360" height="120" aria-hidden="true"></canvas></div>
          <div style="flex:2 1 14rem;min-width:0;display:grid" data-k="stats"></div>
        </div>
      </div>
    </div>
    <div class="sim-side">
      <div class="sim-box">
        <h3>${T.time}</h3>
        <label class="sim-field"><span>${T.hours}<output data-k="hout"></output></span>
          <input type="range" min="0" max="${MAX_H}" step="0.5" data-k="hours"></label>
        <div class="sim-row">
          <button class="sim-btn" type="button" data-k="play">${T.play}</button>
          <button class="sim-btn ghost" type="button" data-jump="0">${T.jump[0]}</button>
          <button class="sim-btn ghost" type="button" data-jump="${AGE.juvenileHours}">${T.jump[1]}</button>
          <button class="sim-btn ghost" type="button" data-jump="${AGE.oldHours}">${T.jump[2]}</button>
        </div>
      </div>
      <div class="sim-box">
        <h3>${T.style}</h3>
        <div class="alter-styles">${Object.keys(STYLES).map((k) => `<button class="sim-btn ghost" type="button" data-style="${k}">${T.styles[k]}</button>`).join('')}</div>
        <label class="sim-field" data-k="perdayRow"><span>${T.perDay}</span>
          <select data-k="perday">${[1, 2, 3, 4].map((n) => `<option value="${n}">${T.perDayOpt(n)}</option>`).join('')}</select></label>
        <label class="sim-field"><span>${T.species}</span>
          <select data-k="species">${Object.keys(SPECIES).map((k) => `<option value="${k}">${T.speciesNames[k]}</option>`).join('')}</select></label>
        <label class="sim-check"><input type="checkbox" data-k="mentor">${T.mentor}</label>
        <label class="sim-check"><input type="checkbox" data-k="con" checked>${T.con}</label>
      </div>
      <div class="sim-box">
        <h3>${T.mods}</h3>
        <div class="alter-mods" data-k="mods"></div>
      </div>
      <div class="sim-box">
        <h3>${T.miles}</h3>
        <div data-k="miles" style="display:grid"></div>
      </div>
    </div>
  </div>
  <p class="sim-note">${T.note}</p>
</div>`;

      const $ = (k) => root.querySelector(`[data-k="${k}"]`);
      const canvas = root.querySelector('.sim-view canvas');
      const sizeCanvas = root.querySelector('.alter-size');
      const slider = $('hours');
      const playBtn = $('play');
      slider.value = hours;
      $('perday').value = String(opt.perDay);

      // Piecewise time axis: the first 5 hours get a wider share so growing up stays visible.
      const ZOOM = 0.16;
      const hx = (h, x0, w) => x0 + (h <= AGE.juvenileHours ? (h / AGE.juvenileHours) * ZOOM * w
        : (ZOOM + (1 - ZOOM) * (h - AGE.juvenileHours) / (MAX_H - AGE.juvenileHours)) * w);
      const xh = (x, x0, w) => {
        const f = clamp((x - x0) / w, 0, 1);
        return f <= ZOOM ? (f / ZOOM) * AGE.juvenileHours : AGE.juvenileHours + ((f - ZOOM) / (1 - ZOOM)) * (MAX_H - AGE.juvenileHours);
      };
      let geo = { x0: 0, w: 1 };

      function draw() {
        const cw = Math.max(280, canvas.clientWidth || canvas.parentElement.clientWidth || 600);
        const ch = Math.round(clamp(cw * 0.62, 400, 520));
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        if (canvas.width !== Math.round(cw * dpr) || canvas.height !== Math.round(ch * dpr)) {
          canvas.width = Math.round(cw * dpr); canvas.height = Math.round(ch * dpr);
          canvas.style.height = `${ch}px`;
        }
        const ctx = canvas.getContext('2d');
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, cw, ch);
        const narrow = cw < 520;
        const fs = narrow ? 11 : 12;
        const padL = narrow ? 34 : 44, padR = narrow ? 10 : 16;
        const x0 = padL, w = cw - padL - padR;
        geo = { x0, w };
        const top = 26;
        const aH = Math.round((ch - top - 60) * 0.55), gap = 26;
        const aY = top + 16, bY = aY + aH + gap, bH = ch - bY - 30;

        // Phase bands across both panels.
        const bands = [
          [0, AGE.juvenileHours, 'rgba(143,184,120,0.10)', 'juvenile'],
          [AGE.juvenileHours, AGE.oldHours, 'rgba(214,174,94,0.04)', 'adult'],
          [AGE.oldHours, MAX_H, 'rgba(200,105,74,0.10)', 'old'],
        ];
        for (const [a, b, col, key] of bands) {
          const xa = hx(a, x0, w), xb = hx(b, x0, w);
          ctx.fillStyle = col; ctx.fillRect(xa, top, xb - xa, bY + bH - top);
          ctx.fillStyle = key === 'juvenile' ? C.moss : key === 'old' ? C.rust : C.gold;
          ctx.font = `${fs}px ${C.display}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText(T.phases[key].toLowerCase(), (xa + xb) / 2, top - 12);
        }
        // Old-age ramp: gradient that deepens until the deltas apply in full.
        const r0 = hx(AGE.oldHours, x0, w), r1 = hx(AGE.oldHours + AGE.rampHours, x0, w);
        const grad = ctx.createLinearGradient(r0, 0, r1, 0);
        grad.addColorStop(0, 'rgba(200,105,74,0)'); grad.addColorStop(1, 'rgba(200,105,74,0.12)');
        ctx.fillStyle = grad; ctx.fillRect(r0, top, r1 - r0, bY + bH - top);
        ctx.fillStyle = 'rgba(200,105,74,0.12)'; ctx.fillRect(r1, top, hx(MAX_H, x0, w) - r1, bY + bH - top);
        if (!narrow) {
          ctx.fillStyle = C.muted; ctx.font = `italic ${fs - 1}px ${C.body}`;
          ctx.fillText(`→ ${T.ramp}`, (r0 + r1) / 2, aY + aH - 8);
        }

        // Panel A: modifiers.
        const yMin = 0.5, yMax = 1.7;
        const ya = (v) => aY + aH - ((v - yMin) / (yMax - yMin)) * aH;
        ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.font = `${fs}px ${C.body}`;
        for (let v = 0.6; v <= 1.61; v += 0.2) {
          const y = ya(v);
          ctx.strokeStyle = Math.abs(v - 1) < 0.01 ? 'rgba(239,231,216,0.28)' : 'rgba(239,231,216,0.07)';
          ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x0 + w, y); ctx.stroke();
          ctx.fillStyle = C.muted; ctx.fillText(`${Math.round(v * 100)}%`, x0 - 5, y);
        }
        ctx.textAlign = 'left'; ctx.fillStyle = C.soft; ctx.font = `${fs}px ${C.body}`;
        ctx.fillText(T.chartA, x0 + 4, aY - 6);

        const series = [
          ['maxHealth', C.moss, []], ['damage', C.rust, []], ['regen', C.sky, []], ['xpGain', C.gold, []],
          ['moveRate', C.soft, [5, 4]], ['staminaRecharge', C.sky, [5, 4]],
        ];
        const pts = 360;
        for (const [key, col, dash] of series) {
          ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.setLineDash(dash); ctx.beginPath();
          for (let i = 0; i <= pts; i++) {
            const h = xh(x0 + (i / pts) * w, x0, w);
            const lv = sim.level[Math.min(sim.level.length - 1, Math.round(h / STEP))];
            const y = ya(modsAt(h, lv, opt)[key]);
            const x = x0 + (i / pts) * w;
            if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
          }
          ctx.stroke();
        }
        ctx.setLineDash([]);

        // Panel B: level curve with skill-point marks.
        const yb = (lv) => bY + bH - ((lv - 1) / (PROG.maxLevel - 1)) * bH;
        ctx.textAlign = 'right'; ctx.font = `${fs}px ${C.body}`;
        for (const lv of [1, 10, 20, 30]) {
          const y = yb(lv);
          ctx.strokeStyle = 'rgba(239,231,216,0.07)'; ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x0 + w, y); ctx.stroke();
          ctx.fillStyle = C.muted; ctx.fillText(String(lv), x0 - 5, y);
        }
        ctx.textAlign = 'left'; ctx.fillStyle = C.soft;
        ctx.fillText(T.chartB, x0 + 4, bY - 8);
        ctx.strokeStyle = C.ink; ctx.lineWidth = 2; ctx.beginPath();
        // Fractional level (between thresholds) gives a smooth line; marks sit where a level is reached.
        const marks = [];
        let prevLv = 1;
        for (let i = 0; i <= pts; i++) {
          const x = x0 + (i / pts) * w;
          const h = xh(x, x0, w);
          const idx = Math.min(sim.xp.length - 1, Math.round(h / STEP));
          const xpv = sim.xp[idx], lv = sim.level[idx];
          const frac = lv >= PROG.maxLevel ? 0 : (xpv - LEVEL_XP[lv]) / (LEVEL_XP[lv + 1] - LEVEL_XP[lv]);
          const y = yb(lv + frac);
          if (i) ctx.lineTo(x, y); else ctx.moveTo(x, y);
          for (let l = prevLv + 1; l <= lv; l++) if (l % PROG.skillEvery === 0) marks.push([x, yb(l)]);
          prevLv = lv;
        }
        ctx.stroke();
        ctx.fillStyle = C.gold;
        for (const [mx, my] of marks) {
          ctx.beginPath(); ctx.moveTo(mx, my - 4); ctx.lineTo(mx + 4, my); ctx.lineTo(mx, my + 4); ctx.lineTo(mx - 4, my); ctx.closePath(); ctx.fill();
        }

        // Time axis.
        const ticks = narrow ? [0, 5, 20, 40, 70, 100, 120] : [0, 1, 2, 3, 4, 5, 20, 40, 60, 70, 80, 100, 120];
        ctx.fillStyle = C.muted; ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.font = `${fs}px ${C.body}`;
        for (const t of ticks) {
          const x = hx(t, x0, w);
          ctx.strokeStyle = 'rgba(239,231,216,0.18)'; ctx.beginPath(); ctx.moveTo(x, bY + bH); ctx.lineTo(x, bY + bH + 4); ctx.stroke();
          ctx.fillText(t === MAX_H ? `${t} ${T.axis}` : String(t), clamp(x, x0 + 6, x0 + w - 14), bY + bH + 7);
        }
        // Mark of the stretched first hours.
        const zx = hx(AGE.juvenileHours, x0, w);
        ctx.strokeStyle = 'rgba(239,231,216,0.25)'; ctx.setLineDash([2, 3]);
        ctx.beginPath(); ctx.moveTo(zx, top); ctx.lineTo(zx, bY + bH); ctx.stroke(); ctx.setLineDash([]);
        if (!narrow) {
          ctx.textAlign = 'left'; ctx.font = `italic ${fs - 1}px ${C.body}`; ctx.fillStyle = C.muted;
          ctx.fillText(T.zoom, x0 + 2, bY + bH + 20);
        }

        // Scrubber.
        const sx = hx(hours, x0, w);
        ctx.strokeStyle = C.gold; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(sx, top); ctx.lineTo(sx, bY + bH); ctx.stroke();
        const idx = Math.min(sim.xp.length - 1, Math.round(hours / STEP));
        const lvNow = sim.level[idx];
        const m = modsAt(hours, lvNow, opt);
        for (const [key, col] of series) {
          ctx.fillStyle = col; ctx.beginPath(); ctx.arc(sx, ya(m[key]), 3.2, 0, Math.PI * 2); ctx.fill();
        }
        const frac = lvNow >= PROG.maxLevel ? 0 : (sim.xp[idx] - LEVEL_XP[lvNow]) / (LEVEL_XP[lvNow + 1] - LEVEL_XP[lvNow]);
        ctx.fillStyle = C.ink; ctx.beginPath(); ctx.arc(sx, yb(lvNow + frac), 4, 0, Math.PI * 2); ctx.fill();
        // Label on the scrubber.
        const label = `${nf.format(hours)} ${T.axis} · ${T.level} ${lvNow}`;
        ctx.font = `600 ${fs}px ${C.body}`;
        const lw = ctx.measureText(label).width + 12;
        const lx = clamp(sx - lw / 2, x0, x0 + w - lw);
        ctx.fillStyle = 'rgba(11,10,8,0.85)'; ctx.fillRect(lx, bY - 22, lw, 18);
        ctx.strokeStyle = 'rgba(214,174,94,0.45)'; ctx.lineWidth = 1; ctx.strokeRect(lx + 0.5, bY - 21.5, lw - 1, 17);
        ctx.fillStyle = C.gold; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
        ctx.fillText(label, lx + 6, bY - 13);

        drawSize(scaleOf(hours));
      }

      // Simple four-legged silhouette: dashed adult outline and the animal at its current size.
      function drawSize(scale) {
        const ctx = sizeCanvas.getContext('2d');
        const W = sizeCanvas.width, H = sizeCanvas.height, ground = H - 14;
        ctx.clearRect(0, 0, W, H);
        ctx.strokeStyle = 'rgba(239,231,216,0.15)'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(8, ground + 1); ctx.lineTo(W - 8, ground + 1); ctx.stroke();
        const shape = (s) => {
          ctx.save(); ctx.translate(W / 2 - 20, ground); ctx.scale(s, s);
          ctx.beginPath();
          ctx.ellipse(0, -52, 70, 24, 0, 0, Math.PI * 2);                 // body
          ctx.moveTo(52, -62); ctx.ellipse(78, -82, 22, 15, -0.35, 0, Math.PI * 2);   // head
          ctx.moveTo(100, -86); ctx.ellipse(104, -78, 14, 7, 0.2, 0, Math.PI * 2);   // muzzle
          ctx.moveTo(70, -96); ctx.lineTo(66, -116); ctx.lineTo(80, -98);            // ear
          for (const lx of [-52, -36, 36, 50]) ctx.rect(lx - 5, -40, 10, 40);         // legs
          ctx.moveTo(-66, -60); ctx.quadraticCurveTo(-100, -64, -108, -40);           // tail
          ctx.quadraticCurveTo(-96, -56, -64, -48);
          ctx.restore();
        };
        ctx.setLineDash([4, 4]); ctx.strokeStyle = 'rgba(239,231,216,0.35)'; ctx.lineWidth = 1.5;
        shape(0.8); ctx.stroke(); ctx.setLineDash([]);
        ctx.fillStyle = scale < 1 ? C.moss : (hours >= AGE.oldHours ? C.rust : C.gold);
        shape(0.8 * scale); ctx.fill();
        ctx.fillStyle = C.soft; ctx.font = `600 20px ${C.body}`; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
        ctx.fillText(`${Math.round(scale * 100)} %`, 10, 6);
      }

      function stat(label, value) {
        return `<div class="sim-stat"><span>${label}</span><b>${value}</b></div>`;
      }

      function updateText() {
        const idx = Math.min(sim.xp.length - 1, Math.round(hours / STEP));
        const lv = sim.level[idx], xp = sim.xp[idx];
        const phase = phaseOf(hours);
        const m = modsAt(hours, lv, opt);
        const nextTxt = lv >= PROG.maxLevel ? T.maxLv : `${nf0.format(LEVEL_XP[lv + 1])}`;
        $('hout').textContent = `${nf.format(hours)} h`;
        $('stats').innerHTML = [
          stat(T.phase, `<span class="sim-tag">${T.phases[phase]}</span>`),
          stat(T.size, `${Math.round(Math.round(scaleOf(hours) * 100))} %`),
          stat(T.level, `${lv} / ${PROG.maxLevel}`),
          stat(T.xp, `${nf0.format(xp)} / ${nextTxt}`),
          stat(T.rate, nf0.format(sim.rate[idx])),
          stat(T.attr, `${(lv - 1) * PROG.attrPerLevel}`),
          stat(T.skill, `${Math.floor(lv / PROG.skillEvery)}`),
          stat(`${T.health} (${T.speciesNames[opt.species]})`, `${nf0.format(Math.floor(SPECIES[opt.species] * m.maxHealth))} (${T.base} ${SPECIES[opt.species]})`),
        ].join('');

        const d = ageDeltas(hours);
        const rows = Object.keys(d).filter((k) => Math.abs(d[k]) >= 0.005).map((k) => {
          const good = k === 'detection' ? d[k] < 0 : d[k] > 0;
          return `<div><span>${T.modNames[k]}</span><b class="${good ? 'up' : 'down'}">${pct(d[k])}</b></div>`;
        });
        $('mods').innerHTML = rows.length ? rows.join('') : `<div class="empty">${T.none}</div>`;

        $('miles').innerHTML = [5, 10, 20, 30].map((l) => {
          let at = -1;
          for (let i = 0; i < sim.level.length; i++) if (sim.level[i] >= l) { at = i * STEP; break; }
          return stat(T.mileAt(l), at < 0 ? T.never : T.after(nf.format(Math.round(at * 2) / 2)));
        }).join('');

        root.querySelectorAll('[data-style]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.style === opt.style)));
        $('perdayRow').hidden = opt.style !== 'quests';
        playBtn.textContent = raf || timer ? T.pause : T.play;
      }

      function render() { draw(); updateText(); }
      function setHours(h) { hours = clamp(Math.round(h * 2) / 2, 0, MAX_H); slider.value = hours; render(); }
      function resim() { sim = simulate(opt); render(); }

      function stop() {
        if (raf) cancelAnimationFrame(raf);
        if (timer) clearInterval(timer);
        raf = 0; timer = 0;
      }
      function play() {
        if (hours >= MAX_H) hours = 0;
        if (reduced) {
          timer = setInterval(() => {
            hours = Math.min(MAX_H, hours + 5); slider.value = hours;
            if (hours >= MAX_H) stop();
            render();
          }, 600);
        } else {
          lastTs = 0;
          const tick = (ts) => {
            const dt = lastTs ? Math.min(0.1, (ts - lastTs) / 1000) : 0;
            lastTs = ts;
            // Slower through childhood, then 10 hours per second.
            hours = Math.min(MAX_H, hours + dt * (hours < AGE.juvenileHours ? 1.2 : 10));
            slider.value = hours;
            if (hours >= MAX_H) { raf = 0; render(); return; }
            render();
            raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }
        render();
      }

      slider.addEventListener('input', () => { stop(); hours = Number(slider.value); render(); });
      playBtn.addEventListener('click', () => { if (raf || timer) { stop(); render(); } else play(); });
      root.querySelectorAll('[data-jump]').forEach((b) => b.addEventListener('click', () => { stop(); setHours(Number(b.dataset.jump)); }));
      root.querySelectorAll('[data-style]').forEach((b) => b.addEventListener('click', () => { opt.style = b.dataset.style; resim(); }));
      $('perday').addEventListener('change', (e) => { opt.perDay = Number(e.target.value); resim(); });
      $('species').addEventListener('change', (e) => { opt.species = e.target.value; render(); });
      $('mentor').addEventListener('change', (e) => { opt.mentor = e.target.checked; resim(); });
      $('con').addEventListener('change', (e) => { opt.con = e.target.checked; render(); });

      // Scrub on the chart.
      let dragging = false;
      const scrub = (e) => {
        const r = canvas.getBoundingClientRect();
        setHours(xh(e.clientX - r.left, geo.x0, geo.w));
      };
      canvas.addEventListener('pointerdown', (e) => { stop(); dragging = true; canvas.setPointerCapture(e.pointerId); scrub(e); });
      canvas.addEventListener('pointermove', (e) => { if (dragging) scrub(e); });
      const end = () => { dragging = false; };
      canvas.addEventListener('pointerup', end);
      canvas.addEventListener('pointercancel', end);

      let lastW = 0;
      const ro = typeof ResizeObserver === 'function' ? new ResizeObserver((entries) => {
        const cw = Math.round(entries[0].contentRect.width);
        if (cw !== lastW) { lastW = cw; draw(); }
      }) : null;
      if (ro) ro.observe(canvas.parentElement); else window.addEventListener('resize', draw);

      render();

      return {
        destroy() {
          stop();
          if (ro) ro.disconnect(); else window.removeEventListener('resize', draw);
        },
      };
    },
  });
})();
