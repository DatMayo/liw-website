// "Behind the scenes": needs, temperature and seasons - a day in the wild.
// Values from the LiW repository (state a36320e, 12 Nov 2026):
//   liw_needs/config.lua + server/main.lua (drain, activity, rest, temperature, winter coat, thresholds, start values)
//   liw_health/config.lua (damage from needs, regeneration), liw_feeding/config.lua (bites, sips)
//   liw_seasons/config.lua (season offsets), liw_world/config.lua (clock, weather mix), liw_species (ranges, coat, class)
(() => {
  window.LIW_SIMS = window.LIW_SIMS || [];

  // ---- Server values ------------------------------------------------------------------------------
  const CFG = {
    tick: 10,                                          // liw_needs Config.TickSeconds
    drainMinutes: { hunger: 150, thirst: 120, sleep: 180 },
    activity: { walk: 1.0, run: 1.3, sprint: 1.8 },    // Config.Activity (speed >= 3 m/s run, >= 6 m/s sprint)
    rest: { recoveryMinutes: 20, drain: 0.5, recoveryDrain: 1.5, recoverySeconds: 120 },
    temp: { coldHunger: 1.5, hotThirst: 1.5, severe: 10, warn: 4, shelterFactor: 0.2, shelterWarmth: 4, wetOffset: -5, wetSeconds: 180 },
    coat: { heatShare: 0.5, wetFactor: 0.5, juvenile: 0.6 },
    thresholds: { low: 25, critical: 0, exhausted: 10 },
    start: { hunger: 80, thirst: 80, sleep: 90 },
    // liw_health: fractions of max health per needs report (~10 s); regeneration 0.005 per 5 s, x3 resting,
    // only while hunger and thirst are both above 50.
    damage: { starving: 0.015, dehydrated: 0.02, freezing: 0.01, overheating: 0.01 },
    regen: { perSecond: 0.005 / 5, resting: 3.0, minNeed: 50 },
    // liw_feeding: one bite / sip every 2 s; hunger per bite = units per bite x hunger per unit.
    biteSeconds: 2,
    food: { meat: 4 * 1.0, graze: 5 * 0.8, berries: 5 * 1.4, forage: 4 * 0.6 },
    thirstPerSip: 6,
    // liw_world: 2 game days per real day -> one game day = 12 real hours; weather changes every 20-45 real minutes.
    realSecondsPerGameDay: 12 * 3600,
    weatherMinutes: [20, 45],
  };
  const SEASONS = {   // liw_seasons Config.Seasons (temperature), length from the calendar (Config.Starts)
    spring: { temp: 0, days: 92 }, summer: { temp: 5, days: 92 }, autumn: { temp: -2, days: 91 }, winter: { temp: -8, days: 90 },
  };
  // liw_needs Config.Temperature.weather (missing types: 0); names as in the HUD.
  const WEATHER = {
    SUNNY: [2, 'Sonnig', 'Sunny'], HIGHPRESSURE: [2, 'Klar', 'Clear'], CLOUDS: [0, 'Bewölkt', 'Cloudy'],
    OVERCAST: [0, 'Bedeckt', 'Overcast'], OVERCASTDARK: [-1, 'Stark bedeckt', 'Dark overcast'], MISTY: [-1, 'Dunstig', 'Misty'],
    FOG: [-1, 'Nebel', 'Fog'], DRIZZLE: [-1, 'Nieselregen', 'Drizzle'], SHOWER: [-2, 'Schauer', 'Showers'], RAIN: [-3, 'Regen', 'Rain'],
    THUNDER: [-2, 'Gewitterwolken', 'Thunder'], THUNDERSTORM: [-4, 'Gewitter', 'Thunderstorm'], HAIL: [-4, 'Hagel', 'Hail'],
    SLEET: [-5, 'Schneeregen', 'Sleet'], SNOWLIGHT: [-4, 'Leichter Schnee', 'Light snow'], SNOW: [-6, 'Schnee', 'Snow'],
    BLIZZARD: [-12, 'Schneesturm', 'Blizzard'], GROUNDBLIZZARD: [-10, 'Bodenschneesturm', 'Ground blizzard'],
    WHITEOUT: [-12, 'Whiteout', 'Whiteout'], SANDSTORM: [3, 'Sandsturm', 'Sandstorm'], HURRICANE: [-6, 'Orkan', 'Hurricane'],
  };
  // liw_world Config.Weather.seasons: relative weights of the automatic weather.
  const MIX = {
    spring: { SUNNY: 25, HIGHPRESSURE: 8, CLOUDS: 20, OVERCAST: 10, MISTY: 8, FOG: 5, DRIZZLE: 10, SHOWER: 8, RAIN: 6 },
    summer: { SUNNY: 40, HIGHPRESSURE: 18, CLOUDS: 18, OVERCAST: 6, THUNDER: 4, THUNDERSTORM: 4, SHOWER: 4, DRIZZLE: 2 },
    autumn: { CLOUDS: 22, OVERCAST: 16, OVERCASTDARK: 8, MISTY: 10, FOG: 10, DRIZZLE: 10, RAIN: 10, SUNNY: 12, THUNDERSTORM: 2 },
    winter: { OVERCAST: 18, OVERCASTDARK: 10, CLOUDS: 14, SNOWLIGHT: 16, SNOW: 10, SLEET: 6, FOG: 8, SUNNY: 10, BLIZZARD: 2 },
  };
  // liw_species: class, comfortable range (°C), winter coat (°C); names from its locales.
  const SPECIES = {
    wolf: ['carnivore', -15, 28, 12, 'Wolf', 'Wolf'], coyote: ['carnivore', -12, 36, 8, 'Kojote', 'Coyote'],
    fox: ['carnivore', -18, 30, 10, 'Rotfuchs', 'Red Fox'], cougar: ['carnivore', -8, 32, 6, 'Puma', 'Cougar'],
    panther: ['carnivore', -2, 38, 3, 'Panther', 'Panther'], alligator: ['carnivore', 8, 40, 0, 'Alligator', 'Alligator'],
    badger: ['carnivore', -18, 34, 9, 'Dachs', 'Badger'],
    deer: ['herbivore', -12, 30, 8, 'Weißwedelhirsch', 'Whitetail Deer'], elk: ['herbivore', -22, 28, 12, 'Wapiti', 'Elk'],
    moose: ['herbivore', -30, 24, 14, 'Elch', 'Moose'], bison: ['herbivore', -28, 34, 16, 'Bison', 'Bison'],
    horse: ['herbivore', -20, 34, 10, 'Wildpferd', 'Wild Horse'], pronghorn: ['herbivore', -15, 36, 8, 'Gabelbock', 'Pronghorn'],
    bighorn: ['herbivore', -28, 26, 14, 'Dickhornschaf', 'Bighorn Sheep'], beaver: ['herbivore', -25, 30, 12, 'Biber', 'Beaver'],
    rabbit: ['herbivore', -20, 34, 8, 'Kaninchen', 'Rabbit'], squirrel: ['herbivore', -22, 32, 8, 'Eichhörnchen', 'Squirrel'],
    chipmunk: ['herbivore', -18, 34, 6, 'Streifenhörnchen', 'Chipmunk'], muskrat: ['herbivore', -25, 30, 10, 'Bisamratte', 'Muskrat'],
    bear: ['omnivore', -20, 26, 14, 'Schwarzbär', 'Black Bear'], grizzly: ['omnivore', -25, 24, 15, 'Grizzlybär', 'Grizzly Bear'],
    boar: ['omnivore', -10, 34, 6, 'Wildschwein', 'Wild Boar'], raccoon: ['omnivore', -15, 34, 8, 'Waschbär', 'Raccoon'],
    possum: ['omnivore', -10, 36, 5, 'Opossum', 'Opossum'], skunk: ['omnivore', -15, 34, 8, 'Stinktier', 'Skunk'],
    armadillo: ['omnivore', -2, 42, 2, 'Gürteltier', 'Armadillo'], rat: ['omnivore', -15, 38, 4, 'Ratte', 'Rat'],
  };
  // Assumption of this page (not a LiW value): the game's own temperature swings this much around its daily mean,
  // warmest at 15:00, coldest at 03:00 game time.
  const DAY_SWING = 6;

  const SCENARIOS = {
    autumn: { species: 'wolf', juvenile: false, season: 'autumn', day: 73, weather: 'mix', mean: 6, run: 15, sprint: 5, swim: 5, shelter: true, eat: true, drink: true, sleep: true, thr: 25 },
    blizzard: { species: 'deer', juvenile: false, season: 'winter', day: 45, weather: 'BLIZZARD', mean: -8, run: 10, sprint: 5, swim: 0, shelter: false, eat: true, drink: true, sleep: true, thr: 25 },
    heat: { species: 'grizzly', juvenile: false, season: 'summer', day: 50, weather: 'SUNNY', mean: 26, run: 10, sprint: 5, swim: 0, shelter: true, eat: true, drink: true, sleep: true, thr: 25 },
    nowater: { species: 'coyote', juvenile: false, season: 'summer', day: 30, weather: 'mix', mean: 22, run: 20, sprint: 5, swim: 0, shelter: true, eat: true, drink: false, sleep: true, thr: 25 },
  };

  const TEXT = {
    de: {
      animal: 'Tier', juvenile: 'Jungtier (wächst 60 % des Winterfells)',
      carnivore: 'Fleischfresser', herbivore: 'Pflanzenfresser', omnivore: 'Allesfresser',
      seasonWeather: 'Jahreszeit & Wetter', spring: 'Frühling', summer: 'Sommer', autumn: 'Herbst', winter: 'Winter',
      dayOf: 'Tag der Jahreszeit', coat: 'Winterfell', weather: 'Wetter', mix: 'Wechselnd (Mix der Jahreszeit)',
      mean: 'Spieltemperatur am Ort (Tagesmittel)', meanHint: 'Kommt im Spiel aus der Karte: Berge und Nächte kälter, Wüste und Sumpf wärmer.',
      routine: 'Tagesablauf', run: 'Rennen', sprint: 'Sprinten', swim: 'Schwimmen', walk: 'Gehen / Stehen',
      shelter: 'Ruht im Unterschlupf (Höhle, Felsdach)', care: 'Instinkt',
      eat: 'frisst, wenn hungrig', drink: 'trinkt, wenn durstig', sleep: 'legt sich hin, wenn müde', thr: 'kümmert sich ab',
      scenarios: 'Szenarien', sc_autumn: 'Herbsttag', sc_blizzard: 'Schneesturm', sc_heat: 'Hitzetag', sc_nowater: 'Kein Wasser',
      reroll: 'Anderer Tag', play: 'Tag abspielen', pause: 'Anhalten', time: 'Uhrzeit (Spielzeit)',
      hunger: 'Hunger', thirst: 'Durst', rest: 'Ruhe', health: 'Gesundheit', felt: 'gefühlt', game: 'Spiel',
      comfort: 'Wohlfühlbereich', chilly: 'Vorwarnung', cold: 'kalt / heiß', severe: 'erfrieren / überhitzen', night: 'Nacht',
      a_walk: 'gehen', a_run: 'rennen', a_sprint: 'sprinten', a_swim: 'schwimmen', a_rest: 'ruhen', a_eat: 'fressen', a_drink: 'trinken',
      needsTitle: 'Bedürfnisse', tempTitle: 'Temperatur', actLane: 'Tun', weatherLane: 'Wetter',
      at: 'Um', real: 'echt', status: 'Zustand', doing: 'Tut', drainNow: 'Hunger / Durst je Std.', downed: 'zusammengebrochen',
      st_freezing: 'erfriert', st_cold: 'kalt', st_chilly: 'kühl', st_ok: 'angenehm', st_warm: 'warm', st_hot: 'heiß', st_overheating: 'überhitzt',
      diary: 'Tagebuch', diaryEmpty: 'Ein ruhiger Tag – nichts, worunter das Tier leidet.',
      ev_hunger_low: '„Du bekommst Hunger.“', ev_hunger_critical: '„Du verhungerst!“ – Schaden',
      ev_thirst_low: '„Du bekommst Durst.“', ev_thirst_critical: '„Du verdurstest!“ – Schaden',
      ev_sleep_low: '„Du wirst müde.“', ev_sleep_exhausted: 'Erschöpft: kein Sprinten mehr', ev_sleep_critical: '„Du bist erschöpft …“',
      ev_cold: '„Dir ist kalt.“ – Hunger ×1,5', ev_freezing: '„Du erfrierst!“ – Schaden', ev_hot: '„Dir ist zu heiß.“ – Durst ×1,5',
      ev_overheating: '„Du überhitzt!“ – Schaden', ev_noregen: 'Hunger oder Durst ≤ 50: keine Heilung', ev_downed: 'Bricht zusammen (Gesundheit 0)',
      times: '×',
      balance: 'Tagesbilanz', meals: 'Mahlzeiten', drinks: 'Trinkpausen', rests: 'Ruhezeit', timeCold: 'Zeit zu kalt', timeHot: 'Zeit zu heiß',
      minHealth: 'Niedrigste Gesundheit', bites: 'Bissen', sips: 'Schlucke', downedAt: 'Zusammenbruch um',
      range: 'Wohlfühlbereich heute', food: 'Futter', f_meat: 'Fleisch', f_graze: 'Gras', f_berries: 'Beeren', f_forage: 'Wurzeln & Insekten',
      perBite: 'je Bissen', to: 'bis',
      canvas: 'Diagramm: Hunger, Durst, Ruhe und Gesundheit über einen Spieltag, darunter Tätigkeit, Wetter und gefühlte Temperatur.',
      note: '<b>So rechnet der Server:</b> Alle 10 Sekunden sinken Hunger, Durst und Ruhe (voll bis leer in 150 / 120 / 180 Minuten beim Gehen), mal Tempo (Rennen ×1,3, Sprinten ×1,8), mal Kälte (Hunger ×1,5) oder Hitze (Durst ×1,5). Beim Ruhen füllt sich die Ruhe in 20 Minuten, Hunger und Durst sinken mit ×0,5 – in den ersten 2 Minuten, solange die Ausdauer lädt, mit ×1,5. Die gefühlte Temperatur ist Spieltemperatur + Wetter + Jahreszeit (unter Dach nur ein Fünftel davon, bei Kälte bis zu 4 °C wärmer) − 5 °C mit nassem Fell (3 Minuten nach dem Schwimmen). Das Winterfell senkt den Wohlfühlbereich (die Obergrenze nur zur Hälfte; nass zählt es halb). Bei 0 Hunger oder Durst und beim Erfrieren oder Überhitzen kostet jede Meldung 1,5 / 2 / 1 % der Gesundheit; sie heilt nur, wenn Hunger und Durst über 50 liegen. <b>Vereinfacht:</b> Die Temperatur des Spiels selbst ist hier eine Tageskurve (±6 °C um den gewählten Mittelwert) – im Spiel hängt sie vom Ort ab. Futter und Wasser liegen immer bereit (keine Jagd, keine Wege, kein leeres Revier), Schwimmen zählt wie Gehen, der Tagesablauf wird in 2-Minuten-Stücken gewürfelt. Fähigkeiten, Revier, Krankheiten, Wunden und Überfressen sind nicht eingerechnet. Ein Spieltag dauert 12 echte Stunden.',
    },
    en: {
      animal: 'Animal', juvenile: 'Juvenile (grows 60 % of the winter coat)',
      carnivore: 'Carnivores', herbivore: 'Herbivores', omnivore: 'Omnivores',
      seasonWeather: 'Season & weather', spring: 'Spring', summer: 'Summer', autumn: 'Autumn', winter: 'Winter',
      dayOf: 'Day of the season', coat: 'Winter coat', weather: 'Weather', mix: 'Changing (season mix)',
      mean: 'Game temperature at the spot (daily mean)', meanHint: 'In the game it comes from the map: mountains and nights colder, desert and swamp warmer.',
      routine: 'Daily routine', run: 'Running', sprint: 'Sprinting', swim: 'Swimming', walk: 'Walking / standing',
      shelter: 'Rests under shelter (cave, rock roof)', care: 'Instinct',
      eat: 'eats when hungry', drink: 'drinks when thirsty', sleep: 'lies down when tired', thr: 'takes care at',
      scenarios: 'Scenarios', sc_autumn: 'Autumn day', sc_blizzard: 'Blizzard', sc_heat: 'Hot day', sc_nowater: 'No water',
      reroll: 'Another day', play: 'Play the day', pause: 'Pause', time: 'Time (game time)',
      hunger: 'Hunger', thirst: 'Thirst', rest: 'Rest', health: 'Health', felt: 'felt', game: 'game',
      comfort: 'Comfortable range', chilly: 'Early warning', cold: 'cold / hot', severe: 'freezing / overheating', night: 'Night',
      a_walk: 'walk', a_run: 'run', a_sprint: 'sprint', a_swim: 'swim', a_rest: 'rest', a_eat: 'eat', a_drink: 'drink',
      needsTitle: 'Needs', tempTitle: 'Temperature', actLane: 'Doing', weatherLane: 'Weather',
      at: 'At', real: 'real', status: 'State', doing: 'Doing', drainNow: 'Hunger / thirst per hour', downed: 'collapsed',
      st_freezing: 'freezing', st_cold: 'cold', st_chilly: 'chilly', st_ok: 'comfortable', st_warm: 'warm', st_hot: 'hot', st_overheating: 'overheating',
      diary: 'Diary', diaryEmpty: 'A quiet day – nothing the animal suffers from.',
      ev_hunger_low: '"You are getting hungry."', ev_hunger_critical: '"You are starving!" – damage',
      ev_thirst_low: '"You are getting thirsty."', ev_thirst_critical: '"You are dying of thirst!" – damage',
      ev_sleep_low: '"You are getting tired."', ev_sleep_exhausted: 'Exhausted: no more sprinting', ev_sleep_critical: '"You are exhausted …"',
      ev_cold: '"You are cold." – hunger ×1.5', ev_freezing: '"You are freezing!" – damage', ev_hot: '"You are too hot." – thirst ×1.5',
      ev_overheating: '"You are overheating!" – damage', ev_noregen: 'Hunger or thirst ≤ 50: no healing', ev_downed: 'Collapses (health 0)',
      times: '×',
      balance: 'Day in numbers', meals: 'Meals', drinks: 'Drinks', rests: 'Time resting', timeCold: 'Time too cold', timeHot: 'Time too hot',
      minHealth: 'Lowest health', bites: 'bites', sips: 'sips', downedAt: 'Collapse at',
      range: 'Comfortable range today', food: 'Food', f_meat: 'meat', f_graze: 'grass', f_berries: 'berries', f_forage: 'roots & insects',
      perBite: 'per bite', to: 'to',
      canvas: 'Chart: hunger, thirst, rest and health over one game day, below it activity, weather and felt temperature.',
      note: '<b>How the server counts:</b> every 10 seconds hunger, thirst and rest drop (full to empty in 150 / 120 / 180 minutes while walking), times the pace (running ×1.3, sprinting ×1.8), times cold (hunger ×1.5) or heat (thirst ×1.5). Resting fills rest in 20 minutes while hunger and thirst drop at ×0.5 – at ×1.5 in the first 2 minutes while stamina recharges. The felt temperature is the game temperature + weather + season (under a roof only a fifth of those, and up to 4 °C warmer in the cold) − 5 °C with wet fur (3 minutes after swimming). The winter coat lowers the comfortable range (the upper limit by half; wet, it counts half). At 0 hunger or thirst and while freezing or overheating each report costs 1.5 / 2 / 1 % of health; it only heals while hunger and thirst are both above 50. <b>Simplified:</b> the game\'s own temperature is a daily curve here (±6 °C around the chosen mean) – in the game it depends on the place. Food and water are always at hand (no hunting, no paths, no eaten-out ground), swimming counts like walking, and the routine is rolled in 2-minute pieces. Skills, territory, diseases, wounds and overeating are left out. A game day lasts 12 real hours.',
    },
  };

  // ---- Simulation ---------------------------------------------------------------------------------
  const ACTS = ['walk', 'run', 'sprint', 'swim', 'rest', 'eat', 'drink'];
  const STATES = ['freezing', 'cold', 'chilly', 'ok', 'warm', 'hot', 'overheating'];

  function rng(seed) {   // mulberry32
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function pick(weights, r) {
    const keys = Object.keys(weights);
    let total = 0;
    keys.forEach((k) => { total += weights[k]; });
    let x = r() * total;
    for (const k of keys) { x -= weights[k]; if (x < 0) return k; }
    return keys[keys.length - 1];
  }
  function coatOf(p) {   // liw_needs server/main.lua coatOf
    const days = SEASONS[p.season].days;
    const progress = Math.min(1, Math.max(0, (p.day - 1) / days));
    const coat = { autumn: progress, winter: 1, spring: 1 - progress }[p.season] || 0;
    return coat * (p.juvenile ? CFG.coat.juvenile : 1);
  }
  function foodOf(p) {
    const cls = SPECIES[p.species][0];
    if (cls === 'carnivore') return 'meat';
    if (cls === 'herbivore') return 'graze';
    return p.season === 'winter' ? 'forage' : 'berries';
  }

  function simulate(p) {
    const T = CFG.tick, N = CFG.realSecondsPerGameDay / T;
    const sp = SPECIES[p.species];
    const r = rng(p.seed);
    const out = {
      n: N, hunger: new Float32Array(N + 1), thirst: new Float32Array(N + 1), sleep: new Float32Array(N + 1),
      health: new Float32Array(N + 1), felt: new Float32Array(N), ambient: new Float32Array(N),
      rMin: new Float32Array(N), rMax: new Float32Array(N), act: new Uint8Array(N), status: new Uint8Array(N),
      weather: [], events: [], downedAt: -1,
      stats: { meals: 0, bites: 0, drinks: 0, sips: 0, restTicks: 0, coldTicks: 0, hotTicks: 0, minHealth: 100 },
    };
    // Weather segments (real seconds).
    if (p.weather === 'mix') {
      let t = 0;
      while (t < N * T) {
        const len = (CFG.weatherMinutes[0] + r() * (CFG.weatherMinutes[1] - CFG.weatherMinutes[0])) * 60;
        out.weather.push({ t0: t, t1: Math.min(N * T, t + len), type: pick(MIX[p.season], r) });
        t += len;
      }
    } else {
      out.weather.push({ t0: 0, t1: N * T, type: p.weather });
    }
    // Planned activity in 2-minute pieces of awake time.
    const share = { run: p.run, sprint: p.sprint, swim: p.swim };
    const busy = p.run + p.sprint + p.swim;
    const plan = [];
    for (let i = 0; i < N * T / 120; i++) {
      const x = r() * Math.max(100, busy);
      plan.push(x < share.run ? 'run' : x < share.run + share.sprint ? 'sprint' : x < busy ? 'swim' : 'walk');
    }

    const coat = coatOf(p);
    const drainPerTick = (need) => 100 / (CFG.drainMinutes[need] * 60) * T;
    const perBite = CFG.food[foodOf(p)];
    let hunger = CFG.start.hunger, thirst = CFG.start.thirst, sleep = CFG.start.sleep, health = 100;
    let mode = 'act', restElapsed = 0, wetUntil = -1, weatherIdx = 0, prevStatus = 'ok';
    const thr = p.thr;
    out.hunger[0] = hunger; out.thirst[0] = thirst; out.sleep[0] = sleep; out.health[0] = health;
    const seen = {};
    const addEvent = (key, i, kind) => {
      out.events.push({ key, i, kind });
      seen[key] = true;
    };

    for (let i = 0; i < N; i++) {
      const t = i * T;
      while (weatherIdx < out.weather.length - 1 && t >= out.weather[weatherIdx].t1) weatherIdx++;
      const weather = out.weather[weatherIdx].type;

      // Instinct: drink first (thirst drops faster), then eat, then lie down.
      const needDrink = p.drink && thirst <= thr, needEat = p.eat && hunger <= thr;
      if (mode === 'act' || mode === 'rest') {
        if (needDrink) mode = 'drink';
        else if (needEat) mode = 'eat';
        else if (mode === 'act' && p.sleep && sleep <= thr) { mode = 'rest'; restElapsed = 0; }
        if (mode === 'drink') out.stats.drinks++;
        if (mode === 'eat') out.stats.meals++;
        if (mode === 'rest' && restElapsed === 0) addEvent('care_rest', i, 'care');
      }
      let act = mode === 'act' ? plan[Math.floor(t / 120)] : mode;
      if (act === 'sprint' && sleep <= CFG.thresholds.exhausted) act = 'run';   // exhausted: no sprinting
      if (act === 'swim') wetUntil = t + T + CFG.temp.wetSeconds;
      const wet = act === 'swim' || t < wetUntil;
      const sheltered = act === 'rest' && p.shelter;

      // Temperature (liw_needs comfortRange / feltTemperature / temperatureStatus).
      const gameHour = (t / CFG.realSecondsPerGameDay * 24) % 24;
      const ambient = p.mean + DAY_SWING * Math.cos(2 * Math.PI * (gameHour - 15) / 24);
      const shift = coat * (wet ? CFG.coat.wetFactor : 1) * sp[3];
      const rMin = sp[1] - shift, rMax = sp[2] - shift * CFG.coat.heatShare;
      const factor = sheltered ? CFG.temp.shelterFactor : 1;
      let felt = ambient + WEATHER[weather][0] * factor + SEASONS[p.season].temp * factor + (wet ? CFG.temp.wetOffset : 0);
      if (sheltered && felt < rMin) felt = Math.min(rMin, felt + CFG.temp.shelterWarmth);
      const sv = CFG.temp.severe;
      const status = felt < rMin - sv ? 'freezing' : felt < rMin ? 'cold' : felt > rMax + sv ? 'overheating'
        : felt > rMax ? 'hot' : felt < rMin + CFG.temp.warn ? 'chilly' : felt > rMax - CFG.temp.warn ? 'warm' : 'ok';
      if (status !== prevStatus && ['cold', 'freezing', 'hot', 'overheating'].includes(status)) addEvent(status, i, 'temp');
      prevStatus = status;

      // Drain (liw_needs tick).
      let mult = CFG.activity[act] || CFG.activity.walk;   // swim, eat and drink: walking pace or standing
      if (act === 'rest') mult = restElapsed < CFG.rest.recoverySeconds ? CFG.rest.recoveryDrain : CFG.rest.drain;
      const cold = status === 'cold' || status === 'freezing' ? CFG.temp.coldHunger : 1;
      const hot = status === 'hot' || status === 'overheating' ? CFG.temp.hotThirst : 1;
      const before = { hunger, thirst, sleep };
      hunger = Math.max(0, hunger - drainPerTick('hunger') * mult * cold);
      thirst = Math.max(0, thirst - drainPerTick('thirst') * mult * hot);
      if (act === 'rest') {
        sleep = Math.min(100, sleep + 100 / (CFG.rest.recoveryMinutes * 60) * T);
        restElapsed += T;
        out.stats.restTicks++;
      } else {
        sleep = Math.max(0, sleep - drainPerTick('sleep') * mult);
      }
      // Bites and sips (liw_feeding): one every 2 s, up to full.
      const bites = T / CFG.biteSeconds;
      if (act === 'eat') {
        hunger = Math.min(100, hunger + bites * perBite);
        out.stats.bites += Math.min(bites, Math.ceil((100 - before.hunger) / perBite));
        if (hunger >= 100) mode = 'act';
      } else if (act === 'drink') {
        thirst = Math.min(100, thirst + bites * CFG.thirstPerSip);
        out.stats.sips += Math.min(bites, Math.ceil((100 - before.thirst) / CFG.thirstPerSip));
        if (thirst >= 100) mode = 'act';
      } else if (act === 'rest' && sleep >= 100) {
        mode = 'act';
      }

      // Warnings (liw_needs client checkWarnings) and the exhausted step.
      [['hunger', hunger, before.hunger], ['thirst', thirst, before.thirst], ['sleep', sleep, before.sleep]].forEach(([need, v, b]) => {
        if (v <= CFG.thresholds.low && b > CFG.thresholds.low) addEvent(`${need}_low`, i, 'warn');
        if (need === 'sleep' && v <= CFG.thresholds.exhausted && b > CFG.thresholds.exhausted) addEvent('sleep_exhausted', i, 'warn');
        if (v <= CFG.thresholds.critical && b > CFG.thresholds.critical) addEvent(`${need}_critical`, i, 'crit');
      });
      if ((hunger <= CFG.regen.minNeed || thirst <= CFG.regen.minNeed) && before.hunger > CFG.regen.minNeed && before.thirst > CFG.regen.minNeed) {
        addEvent('noregen', i, 'info');
      }

      // Health (liw_health): damage per report, regeneration while fed.
      let dmg = 0;
      if (hunger <= 0) dmg += CFG.damage.starving;
      if (thirst <= 0) dmg += CFG.damage.dehydrated;
      if (status === 'freezing') dmg += CFG.damage.freezing;
      else if (status === 'overheating') dmg += CFG.damage.overheating;
      health -= dmg * 100;
      if (hunger > CFG.regen.minNeed && thirst > CFG.regen.minNeed) {
        health += CFG.regen.perSecond * T * 100 * (act === 'rest' ? CFG.regen.resting : 1);
      }
      health = Math.min(100, health);

      if (status === 'cold' || status === 'freezing') out.stats.coldTicks++;
      if (status === 'hot' || status === 'overheating') out.stats.hotTicks++;
      out.act[i] = ACTS.indexOf(act);
      out.status[i] = STATES.indexOf(status);
      out.felt[i] = felt; out.ambient[i] = ambient; out.rMin[i] = rMin; out.rMax[i] = rMax;

      if (health <= 0) {
        health = 0;
        out.downedAt = i + 1;
        addEvent('downed', i + 1, 'crit');
        out.hunger[i + 1] = hunger; out.thirst[i + 1] = thirst; out.sleep[i + 1] = sleep; out.health[i + 1] = 0;
        for (let j = i + 2; j <= N; j++) { out.hunger[j] = out.thirst[j] = out.sleep[j] = out.health[j] = NaN; }
        for (let j = i + 1; j < N; j++) { out.felt[j] = out.ambient[j] = NaN; out.rMin[j] = rMin; out.rMax[j] = rMax; out.act[j] = 255; out.status[j] = 3; }
        out.stats.minHealth = 0;
        break;
      }
      out.stats.minHealth = Math.min(out.stats.minHealth, health);
      out.hunger[i + 1] = hunger; out.thirst[i + 1] = thirst; out.sleep[i + 1] = sleep; out.health[i + 1] = health;
    }
    out.coat = coat;
    out.food = foodOf(p);
    return out;
  }

  // ---- Page ---------------------------------------------------------------------------------------
  const STYLE = `
.sim-beduerfnisse .bd-main { display: grid; gap: 0.8rem; min-width: 0; }
.sim-beduerfnisse .sim-view canvas { touch-action: pan-y; cursor: crosshair; }
.sim-beduerfnisse .bd-time { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.4rem 0.8rem; align-items: center; }
.sim-beduerfnisse .bd-time .sim-field { min-width: 0; }
.sim-beduerfnisse .bd-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr)); gap: 0.8rem; }
.sim-beduerfnisse .bd-cards .sim-box { align-content: start; }
.sim-beduerfnisse .bd-read { display: grid; }
.sim-beduerfnisse .sim-field output, .sim-beduerfnisse .sim-stat b { white-space: nowrap; }
.sim-beduerfnisse .bd-diary { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.15rem; max-height: 14rem; overflow-y: auto; font-size: 0.98rem; }
.sim-beduerfnisse .bd-diary li { display: grid; grid-template-columns: 3.3rem minmax(0, 1fr); gap: 0.5rem; align-items: baseline; }
.sim-beduerfnisse .bd-diary button { font: inherit; font-variant-numeric: tabular-nums; color: var(--muted); background: none; border: 0; padding: 0; cursor: pointer; text-align: left; }
.sim-beduerfnisse .bd-diary button:hover { color: var(--ink); }
.sim-beduerfnisse .bd-diary .warn { color: var(--gold); }
.sim-beduerfnisse .bd-diary .crit { color: var(--rust); }
.sim-beduerfnisse .bd-diary .temp { color: var(--sky); }
.sim-beduerfnisse .bd-diary .info { color: var(--soft); }
.sim-beduerfnisse .bd-diary small { color: var(--muted); }
.sim-beduerfnisse .bd-hint { margin: 0; color: var(--muted); font-size: 0.92rem; line-height: 1.35; }
.sim-beduerfnisse .bd-seasons { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.4rem; }
.sim-beduerfnisse .bd-seasons .sim-btn { padding: 0.3rem 0.5rem; }
.sim-beduerfnisse .sim-field select { min-width: 0; width: 100%; }
.sim-beduerfnisse .sim-btn.ghost[aria-pressed="true"] { color: #14110c; }
.sim-beduerfnisse .bd-play { min-width: 2.6rem; }
`;

  window.LIW_SIMS.push({
    id: 'beduerfnisse',
    order: 40,
    title: { de: 'Bedürfnisse & Wetter', en: 'Needs & weather' },
    teaser: { de: 'Ein Tag in der Wildnis', en: 'A day in the wild' },
    lede: {
      de: 'Ein Spieltag im Zeitraffer: Wähle Art, Jahreszeit, Wetter und Tagesablauf und sieh, wie Hunger, Durst, Ruhe und Körpertemperatur sich entwickeln – und ab wann dein Tier leidet.',
      en: 'One game day in fast motion: pick species, season, weather and routine and watch hunger, thirst, rest and body temperature develop – and when your animal starts to suffer.',
    },
    mount(root, lang) {
      const L = TEXT[lang] || TEXT.de;
      const loc = lang === 'de' ? 'de-DE' : 'en-GB';
      const css = getComputedStyle(document.documentElement);
      const tok = (name, fb) => (css.getPropertyValue(name) || '').trim() || fb;
      const C = {
        ink: tok('--ink', '#efe7d8'), soft: tok('--soft', '#cfc4b0'), muted: tok('--muted', '#9f927e'),
        gold: tok('--gold', '#d6ae5e'), goldHi: tok('--gold-hi', '#e8c47a'), rust: tok('--rust', '#c8694a'),
        moss: tok('--moss', '#8fb878'), sky: tok('--sky', '#7ea6cc'), bg: '#0b0a08',
        font: tok('--body', 'Georgia, serif'),
      };
      const SERIES = [['hunger', C.gold], ['thirst', C.sky], ['sleep', C.moss], ['health', C.rust]];
      const ACT_COLOR = { walk: 'rgba(159,146,126,0.45)', run: C.gold, sprint: C.rust, swim: C.sky, rest: C.moss, eat: C.ink, drink: C.ink };
      const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const fmt = (v, d = 0) => v.toLocaleString(loc, { minimumFractionDigits: d, maximumFractionDigits: d }).replace('-', '−');
      const deg = (v, d = 0) => `${fmt(v, d)} °C`;
      const clock = (i) => {   // tick index -> game time "h:mm"
        const m = Math.round(i * CFG.tick / CFG.realSecondsPerGameDay * 1440);
        return `${Math.floor(m / 60) % 24 + (m >= 1440 ? 24 : 0)}:${String(m % 60).padStart(2, '0')}`;
      };
      const realDur = (seconds) => {
        const m = Math.round(seconds / 60);
        return `${Math.floor(m / 60)}:${String(m % 60).padStart(2, '0')} h`;
      };
      const el = (tag, attrs = {}, ...kids) => {
        const e = document.createElement(tag);
        Object.entries(attrs).forEach(([k, v]) => {
          if (k === 'class') e.className = v; else if (k === 'html') e.innerHTML = v; else if (k === 'text') e.textContent = v; else e.setAttribute(k, v);
        });
        kids.forEach((k) => k && e.append(k));
        return e;
      };

      // ---- State ----
      const p = { ...SCENARIOS.autumn, seed: 7 };
      let res = null, cursor = 0, playing = false, raf = 0, lastFrame = 0;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      let W = 800, H = 460, geo = null;
      const layer = document.createElement('canvas');

      // ---- DOM ----
      root.append(el('style', { text: STYLE }));
      const canvas = el('canvas', { role: 'img', 'aria-label': L.canvas });
      const view = el('div', { class: 'sim-view' }, canvas);
      const legend = el('div', { class: 'sim-legend' });
      [[L.hunger, C.gold], [L.thirst, C.sky], [L.rest, C.moss], [L.health, C.rust], [`${L.tempTitle} (${L.felt})`, C.ink],
        [L.comfort, 'rgba(143,184,120,0.35)'], [L.cold, 'rgba(126,166,204,0.45)'], [L.night, 'rgba(126,166,204,0.18)']]
        .forEach(([txt, c]) => legend.append(el('span', {}, el('i', { style: `--c:${c}` }), document.createTextNode(txt))));
      const actLegend = el('div', { class: 'sim-legend' });
      ['walk', 'run', 'sprint', 'swim', 'rest', 'eat'].forEach((a) => actLegend.append(el('span', {},
        el('i', { style: `--c:${ACT_COLOR[a]}` }), document.createTextNode(a === 'eat' ? `${L.a_eat} / ${L.a_drink}` : L[`a_${a}`]))));

      const playBtn = el('button', { type: 'button', class: 'sim-btn bd-play' });
      const timeOut = el('output', {});
      const timeRange = el('input', { type: 'range', min: '0', max: '4320', step: '6', value: '4320', 'aria-label': L.time });
      const timeField = el('label', { class: 'sim-field' }, el('span', {}, el('span', { text: L.time }), timeOut), timeRange);
      const timeRow = el('div', { class: 'bd-time' }, playBtn, timeField);

      const read = el('div', { class: 'bd-read' });
      const readTitle = el('h3', {});
      const readBox = el('div', { class: 'sim-box' }, readTitle, read);
      const diary = el('ul', { class: 'bd-diary' });
      const diaryBox = el('div', { class: 'sim-box' }, el('h3', { text: L.diary }), diary);
      const balance = el('div', {});
      const balanceBox = el('div', { class: 'sim-box' }, el('h3', { text: L.balance }), balance);
      const main = el('div', { class: 'bd-main' }, view, legend, actLegend, timeRow, el('div', { class: 'bd-cards' }, readBox, diaryBox, balanceBox));

      // Controls
      const field = (label, input, out) => el('label', { class: 'sim-field' }, el('span', {}, el('span', { text: label }), out || ''), input);
      const range = (min, max, step) => el('input', { type: 'range', min: String(min), max: String(max), step: String(step) });
      const check = (label) => {
        const input = el('input', { type: 'checkbox' });
        return [input, el('label', { class: 'sim-check' }, input, document.createTextNode(label))];
      };

      const speciesSel = el('select', {});
      ['carnivore', 'herbivore', 'omnivore'].forEach((cls) => {
        const group = el('optgroup', { label: L[cls] });
        Object.keys(SPECIES).filter((k) => SPECIES[k][0] === cls)
          .sort((a, b) => SPECIES[a][lang === 'de' ? 4 : 5].localeCompare(SPECIES[b][lang === 'de' ? 4 : 5], loc))
          .forEach((k) => group.append(el('option', { value: k, text: SPECIES[k][lang === 'de' ? 4 : 5] })));
        speciesSel.append(group);
      });
      const [juvIn, juvLabel] = check(L.juvenile);
      const speciesInfo = el('p', { class: 'bd-hint' });
      const animalBox = el('div', { class: 'sim-box' }, el('h3', { text: L.animal }), field(L.animal, speciesSel), juvLabel, speciesInfo);

      const seasonBtns = {};
      const seasonRow = el('div', { class: 'bd-seasons', role: 'group', 'aria-label': L.seasonWeather });
      Object.keys(SEASONS).forEach((s) => {
        seasonBtns[s] = el('button', { type: 'button', class: 'sim-btn ghost', text: L[s] });
        seasonBtns[s].addEventListener('click', () => { p.season = s; p.day = Math.min(p.day, SEASONS[s].days); update(); });
        seasonRow.append(seasonBtns[s]);
      });
      const dayIn = range(1, 92, 1), dayOut = el('output', {}), coatInfo = el('p', { class: 'bd-hint' });
      const weatherSel = el('select', {});
      weatherSel.append(el('option', { value: 'mix', text: L.mix }));
      Object.keys(WEATHER).forEach((w) => {
        const o = WEATHER[w][0];
        weatherSel.append(el('option', { value: w, text: `${WEATHER[w][lang === 'de' ? 1 : 2]} (${o > 0 ? '+' : ''}${fmt(o)} °C)` }));
      });
      const meanIn = range(-25, 40, 1), meanOut = el('output', {});
      const seasonBox = el('div', { class: 'sim-box' }, el('h3', { text: L.seasonWeather }), seasonRow,
        field(L.dayOf, dayIn, dayOut), coatInfo, field(L.weather, weatherSel), field(L.mean, meanIn, meanOut), el('p', { class: 'bd-hint', text: L.meanHint }));

      const runIn = range(0, 60, 5), runOut = el('output', {});
      const sprintIn = range(0, 30, 5), sprintOut = el('output', {});
      const swimIn = range(0, 30, 5), swimOut = el('output', {});
      const walkInfo = el('p', { class: 'bd-hint' });
      const [shelterIn, shelterLabel] = check(L.shelter);
      const routineBox = el('div', { class: 'sim-box' }, el('h3', { text: L.routine }), field(L.run, runIn, runOut),
        field(L.sprint, sprintIn, sprintOut), field(L.swim, swimIn, swimOut), walkInfo, shelterLabel);

      const [eatIn, eatLabel] = check(L.eat);
      const [drinkIn, drinkLabel] = check(L.drink);
      const [sleepIn, sleepLabel] = check(L.sleep);
      const thrIn = range(0, 60, 5), thrOut = el('output', {});
      const careBox = el('div', { class: 'sim-box' }, el('h3', { text: L.care }), drinkLabel, eatLabel, sleepLabel, field(L.thr, thrIn, thrOut));

      const scenarioRow = el('div', { class: 'sim-row' });
      Object.keys(SCENARIOS).forEach((k) => {
        const b = el('button', { type: 'button', class: 'sim-btn ghost', text: L[`sc_${k}`] });
        b.addEventListener('click', () => { Object.assign(p, SCENARIOS[k]); update(true); });
        scenarioRow.append(b);
      });
      const rerollBtn = el('button', { type: 'button', class: 'sim-btn ghost', text: L.reroll });
      rerollBtn.addEventListener('click', () => { p.seed = (p.seed * 48271 + 11) % 2147483647; update(true); });
      scenarioRow.append(rerollBtn);
      const scenarioBox = el('div', { class: 'sim-box' }, el('h3', { text: L.scenarios }), scenarioRow);

      const side = el('div', { class: 'sim-side' }, scenarioBox, animalBox, seasonBox, routineBox, careBox);
      root.append(el('div', { class: 'sim-grid' }, main, side), el('p', { class: 'sim-note', html: L.note }));

      // Control wiring
      const bind = (input, key, num = true) => input.addEventListener('input', () => { p[key] = num ? Number(input.value) : input.value; update(); });
      bind(dayIn, 'day'); bind(meanIn, 'mean'); bind(runIn, 'run'); bind(sprintIn, 'sprint'); bind(swimIn, 'swim'); bind(thrIn, 'thr');
      speciesSel.addEventListener('change', () => { p.species = speciesSel.value; update(); });
      weatherSel.addEventListener('change', () => { p.weather = weatherSel.value; update(); });
      [[juvIn, 'juvenile'], [shelterIn, 'shelter'], [eatIn, 'eat'], [drinkIn, 'drink'], [sleepIn, 'sleep']]
        .forEach(([input, key]) => input.addEventListener('change', () => { p[key] = input.checked; update(); }));

      function syncControls() {
        speciesSel.value = p.species; juvIn.checked = p.juvenile;
        Object.keys(seasonBtns).forEach((s) => seasonBtns[s].setAttribute('aria-pressed', String(s === p.season)));
        dayIn.max = String(SEASONS[p.season].days); dayIn.value = String(p.day);
        dayOut.textContent = `${p.day}/${SEASONS[p.season].days}`;
        coatInfo.textContent = `${L.coat}: ${fmt(Math.round(coatOf(p) * 100))} %`;
        weatherSel.value = p.weather;
        meanIn.value = String(p.mean); meanOut.textContent = deg(p.mean);
        runIn.value = String(p.run); runOut.textContent = `${p.run} %`;
        sprintIn.value = String(p.sprint); sprintOut.textContent = `${p.sprint} %`;
        swimIn.value = String(p.swim); swimOut.textContent = `${p.swim} %`;
        walkInfo.textContent = `${L.walk}: ${Math.max(0, 100 - p.run - p.sprint - p.swim)} %`;
        shelterIn.checked = p.shelter; eatIn.checked = p.eat; drinkIn.checked = p.drink; sleepIn.checked = p.sleep;
        thrIn.value = String(p.thr); thrOut.textContent = String(p.thr);
        const sp = SPECIES[p.species];
        const shift = coatOf(p) * sp[3];
        const food = foodOf(p);
        speciesInfo.textContent = `${L.comfort} ${deg(sp[1])} ${L.to} ${deg(sp[2])}, ${L.coat} ${deg(sp[3])}. `
          + `${L.range}: ${deg(sp[1] - shift, 1)} ${L.to} ${deg(sp[2] - shift * CFG.coat.heatShare, 1)}. `
          + `${L.food}: ${L[`f_${food}`]}, ${fmt(CFG.food[food], 1)} ${L.hunger} ${L.perBite}.`;
      }

      // ---- Drawing ----
      function layout() {
        W = Math.max(280, Math.round(view.clientWidth || 800));
        H = Math.round(Math.min(480, Math.max(400, W * 0.58)));
        canvas.width = layer.width = Math.round(W * dpr);
        canvas.height = layer.height = Math.round(H * dpr);
        canvas.style.height = `${H}px`;
        const left = 34, right = 10, narrow = W < 520;
        const needsTop = 30, needsH = Math.round(H * 0.38);
        const laneTop = needsTop + needsH + 10, laneH = 10, weatherH = 15;
        const tempTop = laneTop + laneH + 4 + weatherH + 24, axis = narrow ? 34 : 36;
        geo = { left, right, narrow, needsTop, needsH, laneTop, laneH, weatherH, tempTop, tempH: H - tempTop - axis, plotW: W - left - right };
      }
      const xOf = (i) => geo.left + (i / res.n) * geo.plotW;

      function drawLayer() {
        const g = layer.getContext('2d');
        g.setTransform(dpr, 0, 0, dpr, 0, 0);
        g.clearRect(0, 0, W, H);
        g.fillStyle = C.bg; g.fillRect(0, 0, W, H);
        const { left, plotW, needsTop, needsH, laneTop, laneH, weatherH, tempTop, tempH, narrow } = geo;
        const n = res.n;
        g.font = `${narrow ? 12 : 13}px ${C.font}`;
        g.textBaseline = 'middle';

        // Night (game 21:00-05:00) across all panels.
        g.fillStyle = 'rgba(126,166,204,0.07)';
        const nightX = (h) => left + (h / 24) * plotW;
        g.fillRect(nightX(0), needsTop, nightX(5) - nightX(0), tempTop + tempH - needsTop);
        g.fillRect(nightX(21), needsTop, nightX(24) - nightX(21), tempTop + tempH - needsTop);

        // Panel titles.
        g.fillStyle = C.muted; g.textAlign = 'left';
        g.fillText(L.needsTitle, left, needsTop - 20);
        g.fillText(`${L.tempTitle} (°C)`, left, tempTop - 12);

        // Needs panel: grid and guides.
        const yN = (v) => needsTop + needsH - (v / 100) * needsH;
        g.lineWidth = 1;
        [0, 25, 50, 75, 100].forEach((v) => {
          g.strokeStyle = v === 25 ? 'rgba(214,174,94,0.55)' : v === 50 ? 'rgba(239,231,216,0.22)' : 'rgba(239,231,216,0.07)';
          g.setLineDash(v === 25 || v === 50 ? [4, 4] : []);
          g.beginPath(); g.moveTo(left, Math.round(yN(v)) + 0.5); g.lineTo(left + plotW, Math.round(yN(v)) + 0.5); g.stroke();
          g.fillStyle = v === 25 ? C.gold : C.muted; g.textAlign = 'right';
          g.fillText(String(v), left - 6, yN(v));
        });
        g.setLineDash([]);
        SERIES.forEach(([key, color]) => {
          const arr = res[key];
          g.strokeStyle = color; g.lineWidth = key === 'health' ? 2.2 : 1.8;
          g.beginPath();
          let started = false;
          for (let i = 0; i <= n; i++) {
            const v = arr[i];
            if (Number.isNaN(v)) break;
            const x = xOf(i), y = yN(v);
            if (!started) { g.moveTo(x, y); started = true; } else g.lineTo(x, y);
          }
          g.stroke();
        });

        // Event markers above the needs panel.
        res.events.forEach((ev) => {
          if (ev.kind === 'care' || ev.kind === 'info') return;
          const x = xOf(ev.i);
          const color = ev.key === 'downed' ? C.rust : ev.key.startsWith('hunger') ? C.gold : ev.key.startsWith('thirst') ? C.sky
            : ev.key.startsWith('sleep') ? C.moss : ['cold', 'freezing'].includes(ev.key) ? C.sky : C.rust;
          const y = needsTop - 7, s = ev.kind === 'crit' || ev.key === 'freezing' || ev.key === 'overheating' ? 5 : 3.5;
          g.fillStyle = color; g.strokeStyle = color;
          g.beginPath(); g.moveTo(x - s, y - s); g.lineTo(x + s, y - s); g.lineTo(x, y + s * 0.8); g.closePath();
          if (ev.kind === 'crit' || ev.key === 'freezing' || ev.key === 'overheating') g.fill(); else { g.lineWidth = 1.2; g.stroke(); }
        });
        if (res.downedAt >= 0) {
          const x = xOf(res.downedAt), y = yN(0);
          g.strokeStyle = C.rust; g.lineWidth = 2.2;
          g.beginPath(); g.moveTo(x - 5, y - 5); g.lineTo(x + 5, y + 5); g.moveTo(x + 5, y - 5); g.lineTo(x - 5, y + 5); g.stroke();
        }

        // Lanes: activity, weather.
        g.textAlign = 'right'; g.fillStyle = C.muted;
        g.font = `${narrow ? 10 : 11}px ${C.font}`;
        let runStart = 0;
        for (let i = 1; i <= n; i++) {
          if (i === n || res.act[i] !== res.act[runStart]) {
            const a = ACTS[res.act[runStart]];
            if (a) {
              g.fillStyle = ACT_COLOR[a];
              const x0 = xOf(runStart), x1 = xOf(i);
              g.fillRect(x0, laneTop, Math.max(1, x1 - x0), laneH);
            }
            runStart = i;
          }
        }
        const wy = laneTop + laneH + 4;
        const total = res.n * CFG.tick;
        res.weather.forEach((seg) => {
          const o = WEATHER[seg.type][0];
          const x0 = left + seg.t0 / total * plotW, x1 = left + seg.t1 / total * plotW;
          g.fillStyle = o < 0 ? `rgba(126,166,204,${0.12 + Math.min(1, -o / 12) * 0.4})` : o > 0 ? `rgba(214,174,94,${0.22 + o / 3 * 0.2})` : 'rgba(239,231,216,0.08)';
          g.fillRect(x0, wy, Math.max(1, x1 - x0 - 1), weatherH);
          const name = WEATHER[seg.type][lang === 'de' ? 1 : 2];
          if (x1 - x0 > g.measureText(name).width + 8) {
            g.fillStyle = C.ink; g.textAlign = 'left';
            g.fillText(name, x0 + 4, wy + weatherH / 2 + 0.5);
          }
        });
        g.font = `${narrow ? 12 : 13}px ${C.font}`;

        // Temperature panel: scale from the data and the comfortable range.
        let lo = Infinity, hi = -Infinity;
        for (let i = 0; i < n; i++) {
          if (Number.isNaN(res.felt[i])) break;
          lo = Math.min(lo, res.felt[i], res.ambient[i], res.rMin[i] - 2);
          hi = Math.max(hi, res.felt[i], res.ambient[i], res.rMax[i] + 2);
        }
        lo = Math.floor((lo - 2) / 10) * 10; hi = Math.ceil((hi + 2) / 10) * 10;
        const yT = (v) => tempTop + tempH - ((v - lo) / (hi - lo)) * tempH;
        g.save();
        g.beginPath(); g.rect(left, tempTop, plotW, tempH); g.clip();
        const sv = CFG.temp.severe, wn = CFG.temp.warn;
        const zones = [
          [-1e3, (i) => res.rMin[i] - sv, 'rgba(126,166,204,0.30)'],
          [(i) => res.rMin[i] - sv, (i) => res.rMin[i], 'rgba(126,166,204,0.14)'],
          [(i) => res.rMin[i], (i) => res.rMin[i] + wn, 'rgba(214,174,94,0.10)'],
          [(i) => res.rMin[i] + wn, (i) => res.rMax[i] - wn, 'rgba(143,184,120,0.12)'],
          [(i) => res.rMax[i] - wn, (i) => res.rMax[i], 'rgba(214,174,94,0.10)'],
          [(i) => res.rMax[i], (i) => res.rMax[i] + sv, 'rgba(200,105,74,0.14)'],
          [(i) => res.rMax[i] + sv, 1e3, 'rgba(200,105,74,0.30)'],
        ];
        const val = (f, i) => (typeof f === 'function' ? f(i) : f);
        const cols = Math.ceil(plotW);
        zones.forEach(([a, b, color]) => {
          g.fillStyle = color;
          for (let c = 0; c < cols; c++) {
            const i = Math.min(n - 1, Math.floor(c / plotW * n));
            const y0 = yT(val(b, i)), y1 = yT(val(a, i));
            if (y1 > y0) g.fillRect(left + c, y0, 1.05, y1 - y0);
          }
        });
        g.restore();
        g.lineWidth = 1;
        for (let v = lo; v <= hi; v += 10) {
          g.strokeStyle = v === 0 ? 'rgba(239,231,216,0.18)' : 'rgba(239,231,216,0.06)';
          g.beginPath(); g.moveTo(left, Math.round(yT(v)) + 0.5); g.lineTo(left + plotW, Math.round(yT(v)) + 0.5); g.stroke();
          if ((hi - lo) <= 60 || v % 20 === 0) {
            g.fillStyle = C.muted; g.textAlign = 'right';
            g.fillText(fmt(v), left - 6, yT(v));
          }
        }
        const line = (arr, color, width, dash) => {
          g.strokeStyle = color; g.lineWidth = width; g.setLineDash(dash || []);
          g.beginPath();
          for (let i = 0; i < n; i++) {
            if (Number.isNaN(arr[i])) break;
            const x = xOf(i + 0.5), y = yT(arr[i]);
            if (i === 0) g.moveTo(x, y); else g.lineTo(x, y);
          }
          g.stroke(); g.setLineDash([]);
        };
        line(res.ambient, C.muted, 1.2, [3, 4]);
        line(res.felt, C.ink, 1.8);

        // Time axis: game time, real time below.
        const step = narrow ? 6 : 3;
        g.textAlign = 'center'; g.textBaseline = 'top';
        for (let h = 0; h <= 24; h += step) {
          const x = left + h / 24 * plotW;
          g.strokeStyle = 'rgba(239,231,216,0.12)';
          g.beginPath(); g.moveTo(Math.round(x) + 0.5, tempTop + tempH); g.lineTo(Math.round(x) + 0.5, tempTop + tempH + 4); g.stroke();
          g.textAlign = h === 0 ? 'left' : h === 24 ? 'right' : 'center';
          g.fillStyle = C.soft;
          g.fillText(`${h}:00`, x, tempTop + tempH + 6);
          g.fillStyle = C.muted;
          g.font = `${narrow ? 10 : 11}px ${C.font}`;
          g.fillText(`${fmt(h / 2, h % 2 ? 1 : 0)} h ${L.real}`, x, tempTop + tempH + (narrow ? 20 : 22));
          g.font = `${narrow ? 12 : 13}px ${C.font}`;
        }
        g.textBaseline = 'middle';
      }

      function draw() {
        const g = canvas.getContext('2d');
        g.setTransform(1, 0, 0, 1, 0, 0);
        g.drawImage(layer, 0, 0);
        g.setTransform(dpr, 0, 0, dpr, 0, 0);
        const x = xOf(cursor);
        const top = geo.needsTop - 14, bottom = geo.tempTop + geo.tempH;
        if (cursor < res.n) {   // future part dimmed
          g.fillStyle = 'rgba(11,10,8,0.62)';
          g.fillRect(x, top, geo.left + geo.plotW - x + 1, bottom - top);
        }
        g.strokeStyle = C.goldHi; g.lineWidth = 1;
        g.beginPath(); g.moveTo(Math.round(x) + 0.5, top); g.lineTo(Math.round(x) + 0.5, bottom); g.stroke();
        const yN = (v) => geo.needsTop + geo.needsH - (v / 100) * geo.needsH;
        SERIES.forEach(([key, color]) => {
          const v = res[key][Math.min(cursor, res.n)];
          if (Number.isNaN(v)) return;
          g.fillStyle = color; g.beginPath(); g.arc(x, yN(v), 3.5, 0, Math.PI * 2); g.fill();
        });
      }

      // ---- Readouts ----
      function stat(label, value, color) {
        const b = el('b', { text: value });
        if (color) b.style.color = color;
        return el('div', { class: 'sim-stat' }, el('span', { text: label }), b);
      }
      function updateReadout() {
        const i = Math.min(cursor, res.n);
        const ti = Math.min(i, res.n - 1);
        readTitle.textContent = `${L.at} ${clock(i)} · ${realDur(i * CFG.tick)} ${L.real}`;
        timeOut.textContent = clock(i);
        const v = (k) => (Number.isNaN(res[k][i]) ? '–' : fmt(res[k][i]));
        const down = res.downedAt >= 0 && i >= res.downedAt;
        const st = STATES[res.status[ti]];
        const a = ACTS[res.act[ti]];
        // Current drain per real hour from the neighbouring samples.
        let rate = '–';
        if (!down && ti < res.n) {
          const dh = (res.hunger[ti] - res.hunger[ti + 1]) * 360, dt = (res.thirst[ti] - res.thirst[ti + 1]) * 360;
          if (!Number.isNaN(dh) && a !== 'eat' && a !== 'drink') rate = `${fmt(dh)} / ${fmt(dt)}`;
        }
        const stColor = ['freezing', 'cold', 'chilly'].includes(st) ? C.sky : ['hot', 'overheating', 'warm'].includes(st) ? C.rust : C.moss;
        read.replaceChildren(
          stat(L.hunger, v('hunger'), C.gold), stat(L.thirst, v('thirst'), C.sky),
          stat(L.rest, v('sleep'), C.moss), stat(`${L.health} %`, v('health'), C.rust),
          stat(`${L.tempTitle} (${L.felt})`, down || Number.isNaN(res.felt[ti]) ? '–' : deg(res.felt[ti], 1)),
          stat(L.status, down ? L.downed : L[`st_${st}`], down ? C.rust : stColor),
          stat(L.doing, down || !a ? '–' : L[`a_${a}`]),
          stat(L.drainNow, rate),
        );
        timeRange.value = String(i);
        playBtn.textContent = playing ? '❚❚' : '▶';
        playBtn.setAttribute('aria-label', playing ? L.pause : L.play);
        playBtn.title = playing ? L.pause : L.play;
      }
      function updateDiary() {
        const groups = new Map();
        res.events.forEach((ev) => {
          if (ev.kind === 'care') return;
          const g = groups.get(ev.key);
          if (g) g.count++; else groups.set(ev.key, { ...ev, count: 1 });
        });
        const list = [...groups.values()].sort((a, b) => a.i - b.i);
        if (!list.length) {
          diary.replaceChildren(el('li', {}, el('span', {}), el('span', { class: 'info', text: L.diaryEmpty })));
          return;
        }
        diary.replaceChildren(...list.map((ev) => {
          const btn = el('button', { type: 'button', text: clock(ev.i) });
          btn.addEventListener('click', () => { stop(); cursor = ev.i; draw(); updateReadout(); });
          const txt = el('span', { class: ev.kind, text: L[`ev_${ev.key}`] });
          if (ev.count > 1) txt.append(el('small', { text: ` (${ev.count}${L.times})` }));
          return el('li', {}, btn, txt);
        }));
      }
      function updateBalance() {
        const s = res.stats;
        const tick = CFG.tick;
        balance.replaceChildren(
          stat(L.meals, `${s.meals} · ${s.bites} ${L.bites}`, C.gold),
          stat(L.drinks, `${s.drinks} · ${s.sips} ${L.sips}`, C.sky),
          stat(L.rests, realDur(s.restTicks * tick), C.moss),
          stat(L.timeCold, realDur(s.coldTicks * tick), s.coldTicks ? C.sky : null),
          stat(L.timeHot, realDur(s.hotTicks * tick), s.hotTicks ? C.rust : null),
          stat(L.minHealth, `${fmt(s.minHealth)} %`, s.minHealth < 100 ? C.rust : null),
        );
        if (res.downedAt >= 0) balance.append(stat(L.downedAt, clock(res.downedAt), C.rust));
      }

      // ---- Animation ----
      const DURATION = 9000;   // ms for a full day
      function frame(now) {
        if (!playing) return;
        const dt = lastFrame ? now - lastFrame : 16;
        lastFrame = now;
        const end = res.downedAt >= 0 ? res.downedAt : res.n;
        cursor = Math.min(end, cursor + Math.max(1, Math.round(dt / DURATION * res.n)));
        draw(); updateReadout();
        if (cursor >= end) { playing = false; updateReadout(); return; }
        raf = requestAnimationFrame(frame);
      }
      function play() {
        if (reduced) { cursor = res.n; draw(); updateReadout(); return; }
        if (cursor >= (res.downedAt >= 0 ? res.downedAt : res.n)) cursor = 0;
        playing = true; lastFrame = 0;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(frame);
        updateReadout();
      }
      function stop() { playing = false; cancelAnimationFrame(raf); raf = 0; }
      playBtn.addEventListener('click', () => { if (playing) { stop(); updateReadout(); } else play(); });
      timeRange.addEventListener('input', () => { stop(); cursor = Number(timeRange.value); draw(); updateReadout(); });
      const scrub = (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        cursor = Math.round(Math.min(1, Math.max(0, (x - geo.left) / geo.plotW)) * res.n);
        draw(); updateReadout();
      };
      canvas.addEventListener('pointerdown', (e) => { stop(); scrub(e); });
      canvas.addEventListener('pointermove', (e) => { if (e.buttons || e.pointerType === 'mouse') { if (!playing) scrub(e); } });

      function update(restart) {
        res = simulate(p);
        syncControls();
        drawLayer();
        updateDiary(); updateBalance();
        if (restart && !reduced) { stop(); cursor = 0; play(); return; }
        if (!playing) cursor = res.n;
        draw(); updateReadout();
      }

      layout();
      res = simulate(p);
      syncControls();
      drawLayer();
      cursor = res.n;
      draw(); updateReadout(); updateDiary(); updateBalance();
      if (!reduced) { cursor = 0; play(); }

      let resizeTimer = 0;
      const ro = typeof ResizeObserver === 'function' ? new ResizeObserver(() => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          const w = Math.round(view.clientWidth);
          if (w && w !== W) { layout(); drawLayer(); draw(); }
        }, 60);
      }) : null;
      if (ro) ro.observe(view);

      return {
        destroy() {
          stop();
          clearTimeout(resizeTimer);
          if (ro) ro.disconnect();
        },
      };
    },
  });
})();
