// Senses and voice: a top-down map around the own animal. Sense mode (scent / night vision) with the
// species' range, marker colours, clusters, energy and blood trails; voice ranges and pack call.
// Values from LiW (as of 12.11.2026): liw_senses/config.lua, liw_species/shared/species.lua + categories.lua,
// liw_health/config.lua (BloodTrail), liw_voice/config.lua.
(() => {
  window.LIW_SIMS = window.LIW_SIMS || [];

  // --- Real values -----------------------------------------------------------------------------
  const SENSE = {
    duration: 12, recharge: 25, reuseDelay: 2, minEnergy: 0.15,        // liw_senses Config.DurationSeconds ...
    base: 30, perPoint: 8,                                             // Config.Range
    bloodBelow: 0.5, maxMarkers: 40,
    cluster: { radius: 8, minDistance: 20 },
    discovery: { distance: 15, seconds: 3 },
  };
  const BLOOD = { sampleMs: 1000, spacing: 2.5, range: 150 };          // liw_health Config.BloodTrail
  const VOICE = {
    ranges: [{ key: 'whisper', d: 3 }, { key: 'normal', d: 10 }, { key: 'shout', d: 25 }],
    fine: { min: 1, max: 25 }, packCall: 150, soundRange: 150, ringSeconds: 2.5,
  };
  const DANGER = { canine: 1, feline: 1, bear: 1, boar: 1, alligator: 1 };
  const REL = {   // LiwRelations (missing = 3)
    prey_small: { prey_small: 2, prey_large: 3, canine: 6, feline: 6, bear: 6, boar: 3, alligator: 6, snake: 6 },
    prey_large: { prey_small: 3, prey_large: 2, canine: 6, feline: 6, bear: 6, boar: 4, alligator: 6, snake: 6 },
    canine: { prey_small: 6, prey_large: 6, canine: 2, feline: 4, bear: 4, boar: 4, alligator: 4 },
    feline: { prey_small: 6, prey_large: 6, canine: 6, feline: 4, bear: 4, boar: 6, alligator: 4 },
    bear: { prey_small: 3, prey_large: 6, canine: 6, feline: 6, bear: 4, boar: 4, alligator: 4 },
    boar: { prey_small: 3, prey_large: 4, canine: 4, feline: 4, bear: 4, boar: 2, alligator: 4 },
    alligator: { prey_small: 6, prey_large: 6, canine: 6, feline: 6, bear: 6, boar: 6, alligator: 2 },
  };
  const rel = (a, b) => (REL[a] && REL[a][b]) || 3;

  // key: [de, en, category, senses value, class, sense (scent | night strength), reveal flags p/c/b]
  const SP = {
    wolf: ['Wolf', 'Wolf', 'canine', 8, 'carnivore', 0, 'pcb'],
    coyote: ['Kojote', 'Coyote', 'canine', 8, 'carnivore', 0, 'pcb'],
    fox: ['Rotfuchs', 'Red fox', 'canine', 9, 'carnivore', 0.7, 'pc'],
    cougar: ['Puma', 'Cougar', 'feline', 7, 'carnivore', 0.8, 'pb'],
    panther: ['Panther', 'Panther', 'feline', 7, 'carnivore', 0.9, 'pb'],
    alligator: ['Alligator', 'Alligator', 'alligator', 6, 'carnivore', 0, 'pb'],
    badger: ['Dachs', 'Badger', 'prey_small', 7, 'carnivore', 0.7, 'pc'],
    deer: ['Weißwedelhirsch', 'Whitetail deer', 'prey_large', 8, 'herbivore', 0, ''],
    elk: ['Wapiti', 'Elk', 'prey_large', 7, 'herbivore', 0, ''],
    moose: ['Elch', 'Moose', 'prey_large', 6, 'herbivore', 0, ''],
    bison: ['Bison', 'Bison', 'prey_large', 6, 'herbivore', 0, ''],
    horse: ['Wildpferd', 'Wild horse', 'prey_large', 6, 'herbivore', 0, ''],
    pronghorn: ['Gabelbock', 'Pronghorn', 'prey_large', 8, 'herbivore', 0, ''],
    bighorn: ['Dickhornschaf', 'Bighorn sheep', 'prey_large', 7, 'herbivore', 0, ''],
    beaver: ['Biber', 'Beaver', 'prey_small', 6, 'herbivore', 0, ''],
    rabbit: ['Kaninchen', 'Rabbit', 'prey_small', 9, 'herbivore', 0, ''],
    bear: ['Schwarzbär', 'Black bear', 'bear', 6, 'omnivore', 0, 'pcb'],
    grizzly: ['Grizzlybär', 'Grizzly bear', 'bear', 7, 'omnivore', 0, 'pcb'],
    boar: ['Wildschwein', 'Wild boar', 'boar', 8, 'omnivore', 0, 'c'],
    raccoon: ['Waschbär', 'Raccoon', 'prey_small', 7, 'omnivore', 0.7, 'c'],
    possum: ['Opossum', 'Opossum', 'prey_small', 7, 'omnivore', 0.7, 'c'],
    skunk: ['Stinktier', 'Skunk', 'prey_small', 7, 'omnivore', 0.6, 'pc'],
    armadillo: ['Gürteltier', 'Armadillo', 'prey_small', 5, 'omnivore', 0.6, 'c'],
    squirrel: ['Eichhörnchen', 'Squirrel', 'prey_small', 9, 'herbivore', 0, ''],
    chipmunk: ['Streifenhörnchen', 'Chipmunk', 'prey_small', 8, 'herbivore', 0, ''],
    muskrat: ['Bisamratte', 'Muskrat', 'prey_small', 6, 'herbivore', 0, ''],
    rat: ['Ratte', 'Rat', 'prey_small', 8, 'omnivore', 0.7, 'cb'],
  };
  const senseRange = (k) => SENSE.base + SP[k][3] * SENSE.perPoint;

  // Colours: site.css tokens plus the in-game marker colours that have no token.
  const C = {
    gold: '#d6ae5e', rust: '#c8694a', moss: '#8fb878', sky: '#7ea6cc', ink: '#efe7d8', soft: '#cfc4b0', muted: '#9f927e',
    prey: '#e8a24a', carcass: '#8d6c4c', blood: '#a3302a', berry: '#a98bd0', neutral: 'rgba(232, 214, 160, 0.75)',
  };
  const TYPE_COL = { pack: C.sky, kin: C.moss, neutral: C.neutral, danger: C.rust, prey: C.prey, carcass: C.carcass, blood: C.blood };

  const T = {
    de: {
      title: 'Sinne & Stimme', teaser: 'Witterung, Nachtsicht, Hörweite',
      lede: 'Eine Lichtung von oben, dein Tier in der Mitte. Schärfe die Sinne und sieh, was deine Art wittert und wie weit – oder sprich und sieh, wer dich hört.',
      modeSense: 'Sinne', modeVoice: 'Stimme', species: 'Deine Art', view: 'Ansicht',
      scent: 'Witterung', night: 'Nachtsicht', range: 'Reichweite', reveals: 'zeigt zusätzlich', none: 'nichts weiter',
      rv: { p: 'Beute', c: 'Aas', b: 'Blut', f: 'Beeren' },
      senseBox: 'Sinnesmodus', senseBtn: 'Sinne schärfen (V)', nightChk: 'Nacht', energyChk: 'Energie verbrauchen (wie im Spiel)',
      energy: 'Energie', ph: { active: 'aktiv', cooldown: 'lädt', ready: 'bereit', blocked: 'braucht Ruhe' },
      marked: 'Markierte Tiere', groups: 'davon Gruppen', learned: 'Neue Witterung',
      types: { pack: 'Rudel', kin: 'Artgenossen', neutral: 'Tiere', danger: 'Gefahr', prey: 'Beute', carcass: 'Aas', blood: 'Blut', berry: 'Beeren' },
      trail: 'Blutspur', you: 'du', bird: 'Vogel',
      voiceBox: 'Sprachreichweite (Z)', fine: 'Mausrad: eigene Reichweite', packBtn: 'Rudelruf halten (B)', soundBtn: 'Tierlaut (R)',
      rn: { whisper: 'leise', normal: 'normal', shout: 'laut', custom: 'eigene', pack: 'Rudelruf' },
      hears: 'Hören dich', nobody: 'niemand in Hörweite', hud: 'HUD', hearsYou: 'hört dich', soundHear: 'hören den Laut',
      legPlayer: 'Spielertier', legPack: 'Rudelmitglied', legHear: 'hört dich', legNot: 'hört nichts', legSound: 'Tierlaut, 150 m',
      noSense: 'Diese Art hat keinen Sinnesmodus.',
      note: '<b>Vereinfacht:</b> Die Karte zeigt alles von oben; im Spiel erscheinen die Markierungen auf dem Bildschirm, mit Entfernung. Unbekannte Arten tragen dort „Unbekannte Fährte“ statt eines Namens, hier nur die Entfernung; bleibst du mit geschärften Sinnen 3 Sekunden näher als 15 m an einer Art, kennt dein Tier sie (Neue Witterung). Werte ohne Fortschritt: Attribut Sinne und Fähigkeiten vergrößern Reichweite und Dauer. Rudelmitglieder haben hier deine Art; die Fährtenleiste oben ist nach Norden ausgerichtet; den Wind gibt das Spiel vor, er fehlt hier. Blutspuren sind echte Blutlachen des Spiels (alle 2,5 m, nur bei Blutenden und Tieren unter 50 % Gesundheit) und bleiben liegen, bis das Spiel sie ersetzt – hier verblassen sie nach 90 Sekunden. Eigene Fährten zeichnet der Server nicht (die Spielfährten sind abgeschaltet). Nachtsicht als Aufhellung um die Stärke der Art. Bei der Stimme wird angenommen, dass du sprichst und alle den Sprachchat an haben; im Spiel wird die Stimme mit der Entfernung leiser. Der Rudelruf erreicht die Mitglieder, die beim Drücken in Reichweite sind.',
    },
    en: {
      title: 'Senses & voice', teaser: 'Scent, night vision, hearing range',
      lede: 'A clearing from above, your animal in the middle. Sharpen your senses and see what your species scents and how far – or talk and see who hears you.',
      modeSense: 'Senses', modeVoice: 'Voice', species: 'Your species', view: 'View',
      scent: 'Scent', night: 'Night vision', range: 'Range', reveals: 'also shows', none: 'nothing more',
      rv: { p: 'prey', c: 'carrion', b: 'blood', f: 'berries' },
      senseBox: 'Sense mode', senseBtn: 'Sharpen senses (V)', nightChk: 'Night', energyChk: 'Use energy (as in game)',
      energy: 'Energy', ph: { active: 'active', cooldown: 'recharging', ready: 'ready', blocked: 'needs rest' },
      marked: 'Marked animals', groups: 'of them groups', learned: 'New scent',
      types: { pack: 'Pack', kin: 'Own kind', neutral: 'Animals', danger: 'Danger', prey: 'Prey', carcass: 'Carrion', blood: 'Blood', berry: 'Berries' },
      trail: 'Blood trail', you: 'you', bird: 'Bird',
      voiceBox: 'Voice range (Z)', fine: 'Mouse wheel: custom range', packBtn: 'Hold pack call (B)', soundBtn: 'Animal sound (R)',
      rn: { whisper: 'quiet', normal: 'normal', shout: 'loud', custom: 'custom', pack: 'pack call' },
      hears: 'Hear you', nobody: 'nobody in range', hud: 'HUD', hearsYou: 'hears you', soundHear: 'hear the sound',
      legPlayer: 'Player animal', legPack: 'Pack member', legHear: 'hears you', legNot: 'hears nothing', legSound: 'Animal sound, 150 m',
      noSense: 'This species has no sense mode.',
      note: '<b>Simplified:</b> The map shows everything from above; in game the markers appear on screen, with their distance. Unknown kinds carry "Unknown scent" there instead of a name, here only the distance; stay closer than 15 m to a kind for 3 seconds with your senses sharpened and your animal knows it (New scent). Values without progress: the Senses attribute and skills add range and duration. Pack members have your species here, and the scent strip at the top is aligned to north; the game sets the wind, it is left out here. Blood trails are real blood pools of the game (every 2.5 m, only for bleeding players and animals below 50 % health) and stay until the game replaces them – here they fade after 90 seconds. The server draws no other tracks (the game\'s own trails are switched off). Night vision is shown as brightening by the species\' strength. For the voice it is assumed that you are talking and everyone has voice chat on; in game the voice gets quieter with distance. The pack call reaches the members in range when the key is pressed.',
    },
  };

  window.LIW_SIMS.push({
    id: 'sinne',
    order: 50,
    title: { de: T.de.title, en: T.en.title },
    teaser: { de: T.de.teaser, en: T.en.teaser },
    lede: { de: T.de.lede, en: T.en.lede },
    mount(root, lang) {
      const t = T[lang] || T.de;
      const spName = (k) => (k && SP[k] ? SP[k][lang === 'en' ? 1 : 0] : t.bird);
      const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // --- World: metres, x = east, y = north; you stand at 0,0 facing north --------------------
      let seed = 7;
      const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
      const ents = [];
      const add = (o) => { const e = Object.assign({ x: o.ax, y: o.ay, tx: o.ax, ty: o.ay, wander: 4, speed: 1, bleed: false, dead: false, player: false, pack: false, wait: 0 }, o); ents.push(e); return e; };
      // Players (pack members take your species)
      add({ ax: 4, ay: -5, player: true, pack: true, wander: 1.2 });
      add({ ax: -40, ay: 45, player: true, pack: true, wander: 6 });
      add({ ax: 95, ay: -92, player: true, pack: true, wander: 6 });
      add({ ax: -150, ay: -112, player: true, pack: true, wander: 6 });
      add({ ax: 2.0, ay: 1.2, player: true, sp: 'fox', wander: 0.4, speed: 0.4 });
      add({ ax: -7, ay: 3, player: true, sp: 'deer', wander: 1, speed: 0.6 });
      add({ ax: 15, ay: 14, player: true, sp: 'cougar', wander: 4, bleed: true, speed: 0.9 });
      add({ ax: -32, ay: -24, player: true, sp: 'bear', wander: 5 });
      // Wildlife
      [[68, 38], [74, 44], [71, 47], [77, 37]].forEach(([x, y]) => add({ ax: x, ay: y, sp: 'elk', wander: 4, speed: 0.5 }));
      [[-60, -20], [-65, -27]].forEach(([x, y]) => add({ ax: x, ay: y, sp: 'deer', wander: 5, speed: 0.6 }));
      add({ ax: 30, ay: -50, sp: 'deer', wander: 22, speed: 1.6, bleed: true });   // wounded deer (below 50 % health)
      add({ ax: -22, ay: 68, sp: 'deer', dead: true, wander: 0 });
      [[10, 30], [14, 35]].forEach(([x, y]) => add({ ax: x, ay: y, sp: 'rabbit', wander: 3, speed: 1.2 }));
      [[-84, 30], [-90, 37], [-88, 26]].forEach(([x, y]) => add({ ax: x, ay: y, sp: 'wolf', wander: 6, speed: 1.1 }));
      add({ ax: 2, ay: -86, sp: 'cougar', wander: 8, speed: 0.9 });
      add({ ax: 56, ay: -18, sp: 'boar', wander: 6, speed: 0.8 });
      add({ ax: 24, ay: 9, sp: null, wander: 3, speed: 1.5 });                       // bird
      add({ ax: 110, ay: 22, sp: 'coyote', wander: 6, speed: 1 });
      add({ ax: -100, ay: -62, sp: 'alligator', wander: 3, speed: 0.4 });
      const bushes = [[20, -15], [-35, 10], [48, 62], [-12, -70]];
      const trees = [];
      for (let i = 0; i < 70; i++) trees.push([(rnd() - 0.5) * 360, (rnd() - 0.5) * 360, 2 + rnd() * 5]);
      let drops = [];

      // --- State --------------------------------------------------------------------------------
      const st = {
        mode: 'sense', species: 'wolf', sense: true, night: false, useEnergy: false,
        energy: 1, blockedUntil: 0, time: 0, bloodAt: 0,
        voice: 10, voiceKey: 'normal', packCall: false, soundAt: -99, ringUntil: 0,
        known: new Set(), close: {}, learned: [], view: 125,
      };
      const spOf = (e) => (e.pack ? st.species : e.sp);
      const hasSense = (k) => !!SP[k];

      // What does this animal look like to our nose? (liw_senses classify)
      function classify(e) {
        const mine = st.species, myCat = SP[mine][2], rv = SP[mine][6];
        const kind = spOf(e), cat = kind ? SP[kind][2] : null;
        const relKind = () => {
          if (cat && cat !== myCat && DANGER[cat] && rel(cat, myCat) >= 4) return 'danger';
          if (rv.includes('p') && cat && rel(myCat, cat) === 6) return 'prey';
          return null;
        };
        if (e.player) {
          if (e.pack) return 'pack';
          if (kind === mine) return 'kin';
          const k = relKind();
          if (k !== 'danger' && rv.includes('b') && e.bleed) return 'blood';
          return k || 'neutral';
        }
        if (e.dead) return rv.includes('c') ? 'carcass' : null;
        if (kind === mine) return 'kin';
        const k = relKind();
        if (k !== 'danger' && rv.includes('b') && e.bleed) return 'blood';
        return k || 'neutral';
      }

      // Markers in range, then clusters of the same type beyond minDistance (Config.Cluster).
      function markers() {
        const range = senseRange(st.species), list = [];
        for (const e of ents) {
          const d = Math.hypot(e.x, e.y);
          if (d > range) continue;
          const type = classify(e);
          if (type) list.push({ e, type, d });
        }
        list.sort((a, b) => ((b.type === 'danger') - (a.type === 'danger')) || a.d - b.d);
        const out = [], groups = [];
        for (const m of list.slice(0, SENSE.maxMarkers)) {
          if (m.d < SENSE.cluster.minDistance) { out.push({ x: m.e.x, y: m.e.y, type: m.type, n: 1, d: m.d, e: m.e }); continue; }
          const g = groups.find((g) => g.type === m.type && Math.hypot(g.first.x - m.e.x, g.first.y - m.e.y) <= SENSE.cluster.radius);
          if (g) g.members.push(m.e);
          else groups.push({ type: m.type, first: m.e, members: [m.e], d: m.d });
        }
        for (const g of groups) {
          const x = g.members.reduce((s, e) => s + e.x, 0) / g.members.length;
          const y = g.members.reduce((s, e) => s + e.y, 0) / g.members.length;
          out.push({ x, y, type: g.type, n: g.members.length, d: Math.hypot(x, y), e: g.first });
        }
        return out;
      }

      // --- DOM ------------------------------------------------------------------------------------
      root.innerHTML = `
<style>
.sim-sinne .sn-energy { height: 0.55rem; border-radius: 999px; background: var(--cap-off); border: 1px solid var(--cap-edge); overflow: hidden; }
.sim-sinne .sn-energy i { display: block; height: 100%; width: 100%; background: var(--gold); }
.sim-sinne .sn-energy.low i { background: var(--rust); }
.sim-sinne .sn-hud { font-variant-numeric: tabular-nums; padding: 0.25rem 0.6rem; border-radius: 8px; background: var(--cap-off); border: 1px solid var(--cap-edge); }
.sim-sinne .sn-hud.ok { color: var(--moss); } .sim-sinne .sn-hud.no { color: var(--gold); }
.sim-sinne .sn-info { color: var(--soft); font-size: 1rem; margin: 0; }
.sim-sinne .sn-info b { color: var(--ink); font-weight: 600; }
.sim-sinne [hidden] { display: none !important; }
.sim-sinne .sim-legend .ring { background: transparent; border: 2px solid var(--c); border-radius: 50%; }
</style>
<div class="sim sim-sinne">
  <div class="sim-grid">
    <div class="sim-view"><canvas aria-label="${t.title}"></canvas></div>
    <div class="sim-side">
      <div class="sim-box">
        <h3>${t.view}</h3>
        <div class="sim-row">
          <button type="button" class="sim-btn ghost" data-mode="sense">${t.modeSense}</button>
          <button type="button" class="sim-btn ghost" data-mode="voice">${t.modeVoice}</button>
        </div>
        <label class="sim-field"><span>${t.species}</span><select data-k="species"></select></label>
        <p class="sn-info" data-k="info"></p>
      </div>
      <div class="sim-box" data-box="sense">
        <h3>${t.senseBox}</h3>
        <div class="sim-row"><button type="button" class="sim-btn ghost" data-k="sense">${t.senseBtn}</button></div>
        <label class="sim-check"><input type="checkbox" data-k="night"> ${t.nightChk}</label>
        <label class="sim-check"><input type="checkbox" data-k="useEnergy"> ${t.energyChk}</label>
        <div class="sim-stat"><span>${t.energy}</span><b data-k="phase"></b></div>
        <div class="sn-energy"><i data-k="bar"></i></div>
        <div class="sim-stat"><span>${t.marked}</span><b data-k="marked"></b></div>
        <div class="sim-stat"><span>${t.groups}</span><b data-k="groups"></b></div>
        <div class="sim-stat"><span>${t.learned}</span><b data-k="learned"></b></div>
        <div class="sim-legend" data-k="legS"></div>
      </div>
      <div class="sim-box" data-box="voice" hidden>
        <h3>${t.voiceBox}</h3>
        <div class="sim-row" data-k="presets"></div>
        <label class="sim-field"><span>${t.fine} <output data-k="fineOut"></output></span>
          <input type="range" min="${VOICE.fine.min}" max="${VOICE.fine.max}" step="1" data-k="fine"></label>
        <div class="sim-row">
          <button type="button" class="sim-btn ghost" data-k="pack">${t.packBtn}</button>
          <button type="button" class="sim-btn ghost" data-k="sound">${t.soundBtn}</button>
        </div>
        <div class="sim-stat"><span>${t.hud}</span><span class="sn-hud" data-k="hud"></span></div>
        <div class="sim-stat"><span>${t.hears}</span><b data-k="listeners"></b></div>
        <div class="sim-legend">
          <span><i class="ring" style="--c:${C.ink}"></i>${t.legPlayer}</span>
          <span><i class="ring" style="--c:${C.sky}"></i>${t.legPack}</span>
          <span><i style="--c:${C.moss}"></i>${t.legHear}</span>
          <span><i style="--c:${C.muted}"></i>${t.legNot}</span>
          <span><i class="ring" style="--c:${C.gold}"></i>${t.legSound}</span>
        </div>
      </div>
    </div>
  </div>
  <p class="sim-note">${t.note}</p>
</div>`;
      const q = (k) => root.querySelector(`[data-k="${k}"]`);
      const canvas = root.querySelector('canvas');
      const ctx = canvas.getContext('2d');
      const sel = q('species');
      Object.keys(SP).forEach((k) => { const o = document.createElement('option'); o.value = k; o.textContent = spName(k); sel.appendChild(o); });
      sel.value = st.species;
      VOICE.ranges.forEach((r) => {
        const b = document.createElement('button');
        b.type = 'button'; b.className = 'sim-btn ghost'; b.dataset.preset = r.key; b.textContent = `${t.rn[r.key]} · ${r.d} m`;
        q('presets').appendChild(b);
      });
      q('fine').value = st.voice;
      q('legS').innerHTML = Object.keys(t.types).map((k) => `<span><i style="--c:${k === 'berry' ? C.berry : TYPE_COL[k]}"></i>${t.types[k]}</span>`).join('')
        + `<span><i style="--c:${C.blood};border-radius:50%"></i>${t.trail}</span>`;

      // --- Sizing ---------------------------------------------------------------------------------
      let W = 0, H = 0, dpr = 1;
      function resize() {
        const w = canvas.parentElement.clientWidth || 600;
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = w; H = Math.round(w < 620 ? w : Math.min(w * 0.72, 620));
        canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
        canvas.style.height = H + 'px';
        draw();
      }

      // --- Simulation step ------------------------------------------------------------------------
      function moveAll(dt) {
        for (const e of ents) {
          if (e.dead || !e.wander) continue;
          if (e.wait > 0) { e.wait -= dt; continue; }
          const dx = e.tx - e.x, dy = e.ty - e.y, d = Math.hypot(dx, dy);
          if (d < 0.2) {
            const a = rnd() * Math.PI * 2, r = Math.sqrt(rnd()) * e.wander;
            e.tx = e.ax + Math.cos(a) * r; e.ty = e.ay + Math.sin(a) * r; e.wait = rnd() * 3;
            continue;
          }
          const s = Math.min(d, e.speed * dt);
          e.x += dx / d * s; e.y += dy / d * s;
        }
      }
      function bloodStep() {
        // Every sampleMs: a pool behind each bleeding animal within range, at least `spacing` metres apart.
        while (st.time - st.bloodAt >= BLOOD.sampleMs / 1000) {
          st.bloodAt += BLOOD.sampleMs / 1000;
          for (const e of ents) {
            if (!e.bleed || e.dead || Math.hypot(e.x, e.y) > BLOOD.range) continue;
            if (!e.last || Math.hypot(e.x - e.last[0], e.y - e.last[1]) >= BLOOD.spacing) {
              drops.push({ x: e.x, y: e.y, t: st.time, r: 0.5 + rnd() * 0.4 });
              e.last = [e.x, e.y];
            }
          }
        }
        drops = drops.filter((p) => st.time - p.t < 90);
      }
      function senseStep(dt) {
        const k = st.species;
        if (st.sense && hasSense(k)) {
          if (st.useEnergy) {
            st.energy = Math.max(0, st.energy - dt / SENSE.duration);
            if (st.energy <= 0) { st.sense = false; st.blockedUntil = st.time + SENSE.reuseDelay; }
          }
          // Discovery: an unknown kind within 15 m for 3 s in a row.
          const seen = {};
          for (const e of ents) {
            const kind = spOf(e);
            if (!kind || e.dead || kind === k || st.known.has(kind)) continue;
            if (Math.hypot(e.x, e.y) <= SENSE.discovery.distance) seen[kind] = true;
          }
          for (const kind of Object.keys(st.close)) if (!seen[kind]) delete st.close[kind];
          for (const kind of Object.keys(seen)) {
            st.close[kind] = (st.close[kind] || 0) + dt;
            if (st.close[kind] >= SENSE.discovery.seconds) { st.known.add(kind); st.learned.push(kind); delete st.close[kind]; }
          }
        } else if (st.time >= st.blockedUntil && st.energy < 1) {
          st.energy = Math.min(1, st.energy + dt / SENSE.recharge);
        }
      }
      function step(dt, move) {
        st.time += dt;
        if (move) moveAll(dt);
        bloodStep();
        senseStep(dt);
        const target = targetView();
        st.view = reduced ? target : st.view + (target - st.view) * Math.min(1, dt * 4);
      }
      function voiceReach() { return st.packCall ? VOICE.packCall : st.voice; }
      function soundActive() { return st.time - st.soundAt < 2.2; }
      function targetView() {
        if (st.mode === 'sense') return Math.max(senseRange(st.species), 60) * 1.18;
        if (st.packCall || soundActive()) return 168;
        return Math.max(st.voice * 1.7, 7);
      }

      // --- Drawing --------------------------------------------------------------------------------
      function draw() {
        if (!W) return;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const narrow = W < 520;
        const top = st.mode === 'sense' && st.sense ? (narrow ? 30 : 36) : 0;
        const cx = W / 2, cy = top + (H - top) / 2;
        const s = (Math.min(W, H - top) / 2 - 8) / st.view;   // px per metre
        const X = (x) => cx + x * s, Y = (y) => cy - y * s;
        const font = (px, w) => `${w || ''} ${px}px ${getComputedStyle(root).getPropertyValue('--body') || 'Georgia, serif'}`;

        ctx.fillStyle = '#0b0a08'; ctx.fillRect(0, 0, W, H);
        // Ground: soft trees and distance rings
        for (const [x, y, r] of trees) {
          ctx.beginPath(); ctx.arc(X(x), Y(y), Math.min(Math.max(r * s, 1.5), 9), 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(143, 184, 120, 0.05)'; ctx.fill();
        }
        const ringStep = st.view > 90 ? 25 : st.view > 30 ? 10 : st.view > 12 ? 5 : 1;
        ctx.lineWidth = 1; ctx.font = font(narrow ? 10 : 11); ctx.textAlign = 'left';
        for (let r = ringStep; r < st.view * 1.5; r += ringStep) {
          ctx.beginPath(); ctx.arc(cx, cy, r * s, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(239, 231, 216, 0.05)'; ctx.stroke();
          const main = st.mode === 'sense' ? senseRange(st.species) : voiceReach();
          if (r * s < Math.min(W, H) / 2 - 10 && Math.abs(r - main) * s > 16) { ctx.fillStyle = 'rgba(159, 146, 126, 0.55)'; ctx.fillText(`${r} m`, cx + 3, cy - r * s - 3); }
        }
        // Blood pools (stand out in the sense mode)
        const bright = st.mode === 'sense' && st.sense;
        for (const p of drops) {
          const a = 1 - (st.time - p.t) / 90;
          ctx.beginPath(); ctx.arc(X(p.x), Y(p.y), Math.min(Math.max(p.r * s, bright ? 2.2 : 1.6), 4), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(163, 48, 42, ${(bright ? 0.95 : 0.45) * a})`; ctx.fill();
        }
        // Berry bushes and animals as they are (no sense)
        for (const [x, y] of bushes) {
          ctx.beginPath(); ctx.arc(X(x), Y(y), Math.min(Math.max(1.6 * s, 3), 8), 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(143, 184, 120, 0.22)'; ctx.fill();
        }
        for (const e of ents) {
          const x = X(e.x), y = Y(e.y);
          if (x < -10 || y < -10 || x > W + 10 || y > H + 10) continue;
          if (e.dead) {
            ctx.strokeStyle = 'rgba(159, 146, 126, 0.7)'; ctx.lineWidth = 1.5; ctx.beginPath();
            ctx.moveTo(x - 3, y - 3); ctx.lineTo(x + 3, y + 3); ctx.moveTo(x + 3, y - 3); ctx.lineTo(x - 3, y + 3); ctx.stroke();
            continue;
          }
          ctx.beginPath(); ctx.arc(x, y, e.player ? 3.2 : 2.4, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(207, 196, 176, 0.55)'; ctx.fill();
        }
        // Night: darkness, lifted by night vision while the sense is on
        const k = st.species, nv = SP[k][5];
        if (st.night && st.mode === 'sense') {
          const lift = st.sense && nv ? nv : 0;
          ctx.fillStyle = `rgba(4, 6, 12, ${0.82 * (1 - lift)})`; ctx.fillRect(0, 0, W, H);
          if (lift) { ctx.fillStyle = 'rgba(126, 166, 204, 0.06)'; ctx.fillRect(0, 0, W, H); }
        }
        if (st.mode === 'sense') drawSense(X, Y, s, cx, cy, top, narrow, font); else drawVoice(X, Y, s, cx, cy, narrow, font);
        // You
        ctx.beginPath(); ctx.arc(cx, cy, 6, 0, Math.PI * 2); ctx.fillStyle = C.gold; ctx.fill();
        ctx.beginPath(); ctx.moveTo(cx, cy - 12); ctx.lineTo(cx - 4, cy - 6); ctx.lineTo(cx + 4, cy - 6); ctx.closePath(); ctx.fill();
        ctx.font = font(narrow ? 11 : 12, '600'); ctx.textAlign = 'left'; ctx.fillStyle = C.gold;
        ctx.textAlign = 'right'; ctx.fillText(t.you, cx - 9, cy + 14);
      }

      function label(text, x, y, color, font, narrow) {
        ctx.font = font(narrow ? 10 : 11.5); ctx.textAlign = 'center';
        ctx.lineWidth = 3; ctx.strokeStyle = 'rgba(11, 10, 8, 0.85)'; ctx.strokeText(text, x, y);
        ctx.fillStyle = color; ctx.fillText(text, x, y);
      }

      function drawSense(X, Y, s, cx, cy, top, narrow, font) {
        const k = st.species, range = senseRange(k);
        if (!st.sense || !hasSense(k)) {
          ctx.setLineDash([4, 6]); ctx.beginPath(); ctx.arc(cx, cy, range * s, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(214, 174, 94, 0.25)'; ctx.lineWidth = 1; ctx.stroke(); ctx.setLineDash([]);
          return;
        }
        ctx.beginPath(); ctx.arc(cx, cy, range * s, 0, Math.PI * 2);
        ctx.fillStyle = SP[k][5] ? 'rgba(126, 166, 204, 0.05)' : 'rgba(214, 174, 94, 0.05)'; ctx.fill();
        ctx.strokeStyle = 'rgba(214, 174, 94, 0.6)'; ctx.lineWidth = 1.5; ctx.stroke();
        label(`${range} m`, cx, cy - range * s + 14, C.gold, font, narrow);
        // Berry bushes for omnivores (Config.FoodSpots)
        if (SP[k][4] === 'omnivore') {
          for (const [x, y] of bushes) {
            if (Math.hypot(x, y) > range) continue;
            ctx.beginPath(); ctx.arc(X(x), Y(y), 6, 0, Math.PI * 2);
            ctx.strokeStyle = C.berry; ctx.lineWidth = 2; ctx.stroke();
          }
        }
        const list = markers();
        for (const m of list) {
          const x = X(m.x), y = Y(m.y), r = m.n > 1 ? 9 + Math.min(m.n, 6) : 6;
          ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = TYPE_COL[m.type]; ctx.globalAlpha = 0.28; ctx.fill(); ctx.globalAlpha = 1;
          ctx.strokeStyle = TYPE_COL[m.type]; ctx.lineWidth = 2; ctx.stroke();
          if (m.n > 1) { ctx.font = font(narrow ? 11 : 12, '600'); ctx.textAlign = 'center'; ctx.fillStyle = C.ink; ctx.fillText(String(m.n), x, y + 4); }
          if (m.d >= (narrow ? 24 : 14)) {
            const kind = spOf(m.e);
            const known = !kind || kind === k || st.known.has(kind) || m.type === 'pack';
            const txt = !narrow && known ? `${spName(kind)} · ${Math.round(m.d)} m` : `${Math.round(m.d)} m`;
            label(txt, x, y + r + 12, TYPE_COL[m.type] === C.neutral ? C.soft : TYPE_COL[m.type], font, narrow);
          }
        }
        // Scent strip: every marker by direction (north in the middle)
        const pad = 10, w = W - pad * 2, h = top - 10;
        ctx.fillStyle = 'rgba(25, 21, 18, 0.92)'; ctx.fillRect(pad, 5, w, h);
        ctx.strokeStyle = 'rgba(214, 174, 94, 0.3)'; ctx.lineWidth = 1; ctx.strokeRect(pad + 0.5, 5.5, w - 1, h - 1);
        const bx = (deg) => pad + ((((deg + 180) % 360) + 360) % 360) / 360 * w;
        ctx.font = font(narrow ? 10 : 11); ctx.textAlign = 'center'; ctx.fillStyle = C.muted;
        const dirs = lang === 'en' ? ['N', 'E', 'S', 'W'] : ['N', 'O', 'S', 'W'];
        [0, 90, 180, 270].forEach((deg, i) => { if (deg !== 180) ctx.fillText(dirs[i], bx(deg), 5 + h - 3); });
        for (const m of list) {
          const deg = (Math.atan2(m.x, m.y) * 180 / Math.PI + 360) % 360;
          ctx.beginPath(); ctx.arc(bx(deg), 5 + h / 2 - 3, m.n > 1 ? 4.5 : 3.2, 0, Math.PI * 2);
          ctx.fillStyle = TYPE_COL[m.type]; ctx.fill();
        }
        st.lastMarkers = list;
      }

      function drawVoice(X, Y, s, cx, cy, narrow, font) {
        const reach = voiceReach();
        // Animal sound: a ring growing to 150 m
        if (soundActive()) {
          const p = reduced ? 1 : Math.min(1, (st.time - st.soundAt) / 1.2);
          ctx.beginPath(); ctx.arc(cx, cy, VOICE.soundRange * s * p, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(214, 174, 94, ${0.8 * (1 - Math.max(0, (st.time - st.soundAt - 1.2)))})`; ctx.lineWidth = 2; ctx.stroke();
        }
        const col = st.packCall ? '126, 166, 204' : '143, 184, 120';
        ctx.beginPath(); ctx.arc(cx, cy, reach * s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col}, 0.1)`; ctx.fill();
        ctx.strokeStyle = `rgba(${col}, 0.85)`; ctx.lineWidth = 2; ctx.stroke();
        label(`${reach} m`, cx, cy - reach * s - 6, `rgb(${col})`, font, narrow);
        for (const e of ents) {
          if (!e.player) continue;
          const x = X(e.x), y = Y(e.y);
          if (x < -20 || y < -20 || x > W + 20 || y > H + 20) continue;
          const d = Math.hypot(e.x, e.y);
          const hears = st.packCall ? e.pack && d <= VOICE.packCall : d <= reach;
          const hearsSound = soundActive() && d <= VOICE.soundRange;
          if (hears) {
            ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(x, y);
            ctx.strokeStyle = `rgba(${col}, 0.45)`; ctx.lineWidth = 1; ctx.stroke();
          }
          ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2);
          ctx.fillStyle = hears ? (st.packCall ? C.sky : C.moss) : 'rgba(159, 146, 126, 0.35)'; ctx.fill();
          ctx.strokeStyle = hearsSound ? C.gold : (e.pack ? C.sky : C.ink); ctx.lineWidth = 2; ctx.stroke();
          const name = spName(spOf(e));
          label(narrow ? `${Math.round(d)} m` : `${name} · ${d < 10 ? d.toFixed(1) : Math.round(d)} m`, x, y + 20, hears ? C.ink : C.muted, font, narrow);
        }
      }

      // --- UI state -------------------------------------------------------------------------------
      function listeners() {
        return ents.filter((e) => e.player && (st.packCall ? e.pack && Math.hypot(e.x, e.y) <= VOICE.packCall : Math.hypot(e.x, e.y) <= st.voice)).length;
      }
      function phase() {
        if (st.sense) return 'active';
        if (st.energy < SENSE.minEnergy || st.time < st.blockedUntil) return 'blocked';
        return st.energy < 1 ? 'cooldown' : 'ready';
      }
      function updateUI() {
        const k = st.species, info = SP[k];
        const rv = info[6].split('').map((c) => t.rv[c]);
        if (info[4] === 'omnivore') rv.push(t.rv.f);
        q('info').innerHTML = `<b>${info[5] ? `${t.night} (${Math.round(info[5] * 100)} %)` : t.scent}</b> · ${t.range} <b>${senseRange(k)} m</b> (${SENSE.base} + ${info[3]} × ${SENSE.perPoint})<br>${t.reveals}: ${rv.length ? rv.join(', ') : t.none}`;
        root.querySelectorAll('[data-mode]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === st.mode)));
        root.querySelector('[data-box="sense"]').hidden = st.mode !== 'sense';
        root.querySelector('[data-box="voice"]').hidden = st.mode !== 'voice';
        q('sense').setAttribute('aria-pressed', String(st.sense));
        q('night').checked = st.night; q('useEnergy').checked = st.useEnergy;
        q('phase').textContent = `${t.ph[phase()]} · ${Math.round(st.energy * 100)} %`;
        q('bar').style.width = `${st.energy * 100}%`;
        q('bar').parentElement.classList.toggle('low', st.energy < SENSE.minEnergy);
        const list = st.sense ? (st.lastMarkers || markers()) : [];
        q('marked').textContent = list.reduce((n, m) => n + m.n, 0);
        q('groups').textContent = list.filter((m) => m.n > 1).length;
        q('learned').textContent = st.learned.length ? st.learned.map(spName).join(', ') : '–';
        root.querySelectorAll('[data-preset]').forEach((b) => b.setAttribute('aria-pressed', String(!st.packCall && b.dataset.preset === st.voiceKey)));
        q('fineOut').textContent = `${st.voice} m`;
        q('pack').setAttribute('aria-pressed', String(st.packCall));
        const n = listeners();
        const key = st.packCall ? 'pack' : st.voiceKey;
        const hud = q('hud');
        hud.textContent = `${t.rn[key]} · ${voiceReach()} m${n ? '' : ` · ${t.nobody}`}`;
        hud.className = `sn-hud ${n ? 'ok' : 'no'}`;
        q('listeners').textContent = n;
      }

      root.addEventListener('click', (ev) => {
        const b = ev.target.closest('button');
        if (!b) return;
        if (b.dataset.mode) st.mode = b.dataset.mode;
        else if (b.dataset.preset) {
          const r = VOICE.ranges.find((x) => x.key === b.dataset.preset);
          st.voice = r.d; st.voiceKey = r.key; st.packCall = false; q('fine').value = r.d;
        } else if (b.dataset.k === 'sense') {
          if (st.sense) { st.sense = false; st.blockedUntil = st.time + SENSE.reuseDelay; }
          else if (st.time >= st.blockedUntil && (st.energy >= SENSE.minEnergy || !st.useEnergy)) st.sense = true;
        } else if (b.dataset.k === 'pack') st.packCall = !st.packCall;
        else if (b.dataset.k === 'sound') st.soundAt = st.time;
        refresh();
      });
      root.addEventListener('change', (ev) => {
        const el = ev.target;
        if (el === sel) {
          st.species = sel.value; st.known.clear(); st.learned = []; st.close = {};
        } else if (el.dataset.k === 'night') st.night = el.checked;
        else if (el.dataset.k === 'useEnergy') { st.useEnergy = el.checked; if (!el.checked) st.energy = Math.max(st.energy, 1); }
        refresh();
      });
      q('fine').addEventListener('input', (ev) => {
        st.voice = Number(ev.target.value);
        const preset = VOICE.ranges.find((r) => r.d === st.voice);
        st.voiceKey = preset ? preset.key : 'custom'; st.packCall = false;
        refresh();
      });

      function refresh() {
        if (reduced) st.view = targetView();
        st.lastMarkers = null;
        draw(); updateUI();
      }

      // Warm up: let the animals walk for a minute so blood trails already lie on the ground.
      for (let i = 0; i < 240; i++) step(0.25, true);
      st.time = 0; st.bloodAt = 0; st.known.clear(); st.learned = []; st.close = {};
      drops = drops.map((p) => Object.assign(p, { t: p.t - 60 }));
      st.view = targetView();

      let raf = 0, timer = 0, last = 0, uiAt = 0;
      function frame(now) {
        const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
        last = now;
        step(dt, true);
        draw();
        if (now - uiAt > 200) { uiAt = now; updateUI(); }
        raf = requestAnimationFrame(frame);
      }
      const onResize = () => resize();
      window.addEventListener('resize', onResize);
      resize(); updateUI();
      if (reduced) timer = setInterval(() => { step(0.25, false); draw(); updateUI(); }, 250);
      else raf = requestAnimationFrame(frame);

      return {
        destroy() {
          cancelAnimationFrame(raf); clearInterval(timer);
          window.removeEventListener('resize', onResize);
          root.innerHTML = '';
        },
      };
    },
  });
})();
