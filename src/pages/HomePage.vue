<!-- Start page: night-sky hero, numbers, then one column of sections. Texts and species: data/home.js. -->
<script setup>
import { computed, onUnmounted, ref } from 'vue';
import SiteBar from '../components/SiteBar.vue';
import SiteFooter from '../components/SiteFooter.vue';
import SiteLink from '../components/SiteLink.vue';
import { lang } from '../lang.js';
import { usePageHead } from '../head.js';
import { CONNECT_URL, DISCORD_URL, VOICE_URL } from '../site.js';
import { SPECIES, STAT_KEYS, T, imageOf } from '../data/home.js';

usePageHead({
    path: '/',
    title: 'Life In Wilderness',
    description: 'Life In Wilderness – ein RedM-Roleplay-Server, auf dem jeder Spieler ein Tier ist.',
    pageClass: 'page-home',
    ogDescription: 'Ein RedM-Roleplay-Server, auf dem jeder Spieler ein Tier ist. / A RedM roleplay server where every player is an animal.',
});

const t = (key) => T[lang.value][key] ?? T.de[key] ?? '';
const nameOf = (s) => (lang.value === 'de' ? s[3] : s[4]);

// Species: filter by diet, one selected species in the detail panel.
const filter = ref('all');
const selected = ref('wolf');
const FILTERS = [['all', 'f_all'], ['carnivore', 'cls_carnivore'], ['herbivore', 'cls_herbivore'], ['omnivore', 'cls_omnivore']];
const list = computed(() => SPECIES.filter((s) => filter.value === 'all' || s[1] === filter.value));
function setFilter(next) {
    filter.value = next;
    if (!list.value.some((s) => s[0] === selected.value) && list.value.length) selected.value = list.value[0][0];
}
const detail = computed(() => {
    const s = SPECIES.find((x) => x[0] === selected.value) || SPECIES[0];
    return { key: s[0], cls: s[1], stats: s[2], name: nameOf(s), text: lang.value === 'de' ? s[5] : s[6] };
});

// Copy the connect command.
const copyLabel = ref('');
let copyTimer = null;
async function copy() {
    try { await navigator.clipboard.writeText('connect cfx.re/join/4ggl8rq'); copyLabel.value = t('copied'); }
    catch { copyLabel.value = 'connect cfx.re/join/4ggl8rq'; }
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => { copyLabel.value = ''; }, 2000);
}
onUnmounted(() => clearTimeout(copyTimer));
</script>

<template>
  <SiteBar home />

  <section id="top" class="hero">
    <div class="moon" aria-hidden="true"></div>
    <svg class="scene" viewBox="0 0 1600 600" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <path d="M0 260 L110 200 L230 240 L360 150 L480 220 L600 170 L740 240 L880 140 L1010 210 L1150 160 L1290 230 L1420 180 L1600 230 V600 H0z" fill="#3a3a3c" opacity="0.55" />
      <path d="M0 340 L120 300 L260 330 L400 270 L540 320 L700 285 L860 335 L1020 280 L1180 325 L1340 290 L1480 330 L1600 300 V600 H0z" fill="#2c2721" />
      <path id="trees" d="M0 430 L30 380 L45 400 L60 350 L80 395 L100 360 L120 410 L150 370 L170 405 L200 345 L225 400 L260 385 L300 420 L360 405 L430 430 L520 415 L600 440 L700 425 L800 445 L900 428 L1000 440 L1080 420 L1130 380 L1150 400 L1175 340 L1200 395 L1225 355 L1250 405 L1280 365 L1305 410 L1340 375 L1370 415 L1420 395 L1480 425 L1540 405 L1600 420 V600 H0z" fill="#1a1611" />
      <g fill="#0f0c09">
        <path d="M560 470 c8-6 14-6 22-8 l12-14 4 6 -6 10 c10 2 20 6 26 14 l8 22 -6 1 -8-16 -14 0 -4 18 -6 0 0-18 -20 0 -6 18 -6 0 2-20 c-6-4-8-8-4-13z" />
        <path d="M0 520 C200 500 400 515 600 505 C800 495 1000 520 1200 505 C1400 495 1500 510 1600 500 V600 H0z" />
      </g>
    </svg>
    <div class="hero-copy">
      <p class="eyebrow">{{ t('hero_eyebrow') }}</p>
      <h1>Life In<br>Wilderness</h1>
      <p class="lede">{{ t('hero_lede') }}</p>
      <div class="actions">
        <a class="btn primary" :href="DISCORD_URL" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.3 4.4A19.6 19.6 0 0015.4 3l-.6 1.3a18 18 0 00-5.6 0L8.6 3a19.6 19.6 0 00-4.9 1.5C.6 9.2-.3 13.8.1 18.3a19.8 19.8 0 006 3l1.3-2a12.7 12.7 0 01-2-1l.5-.4a14 14 0 0012.2 0l.5.4-2 1 1.3 2a19.7 19.7 0 006-3c.5-5.2-.8-9.8-3.6-13.9zM8 15.6c-1.2 0-2.2-1.1-2.2-2.4S6.8 10.8 8 10.8s2.2 1.1 2.2 2.4-1 2.4-2.2 2.4zm8 0c-1.2 0-2.2-1.1-2.2-2.4s1-2.4 2.2-2.4 2.2 1.1 2.2 2.4-1 2.4-2.2 2.4z" /></svg>
          <span>{{ t('cta_discord') }}</span>
        </a>
        <a class="btn" href="#einstieg">{{ t('cta_join') }}</a>
        <a class="btn" :href="CONNECT_URL">{{ t('cta_connect') }}</a>
      </div>
      <p class="status"><i aria-hidden="true"></i><span>{{ t('status') }}</span></p>
    </div>
  </section>

  <main class="wrap">
    <div class="facts">
      <div class="fact"><b>27</b><span>{{ t('fact_species') }}</span></div>
      <div class="fact"><b>3</b><span>{{ t('fact_slots') }}</span></div>
      <div class="fact"><b>460</b><span>{{ t('fact_quests') }}</span></div>
      <div class="fact"><b>130</b><span>{{ t('fact_titles') }}</span></div>
    </div>

    <section id="spiel" aria-labelledby="intro-title">
      <div class="section-head">
        <p class="eyebrow">{{ t('intro_eyebrow') }}</p>
        <h2 id="intro-title">{{ t('intro_title') }}</h2>
      </div>
      <div class="manifest">
        <p>{{ t('manifest_1') }}</p>
        <p>{{ t('manifest_2') }}</p>
      </div>
    </section>

    <section aria-labelledby="pillars-title">
      <div class="section-head">
        <p class="eyebrow">{{ t('pillars_eyebrow') }}</p>
        <h2 id="pillars-title">{{ t('pillars_title') }}</h2>
      </div>
      <div class="pillars">
        <article class="pillar"><div class="ic"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4c-4 6-8 10-8 15a8 8 0 0016 0c0-5-4-9-8-15z" /><path d="M12 20a4 4 0 004 4" /></svg></div><h3>{{ t('p_survive_h') }}</h3><p>{{ t('p_survive') }}</p></article>
        <article class="pillar"><div class="ic"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="10" cy="12" r="3" /><circle cx="22" cy="12" r="3" /><circle cx="16" cy="7" r="3" /><path d="M4 26c1-5 4-8 6-8s4 2 6 2 4-2 6-2 5 3 6 8" /></svg></div><h3>{{ t('p_pack_h') }}</h3><p>{{ t('p_pack') }}</p></article>
        <article class="pillar"><div class="ic"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 9l7-4 8 4 7-4v18l-7 4-8-4-7 4z" /><path d="M12 5v18M20 9v18" /></svg></div><h3>{{ t('p_territory_h') }}</h3><p>{{ t('p_territory') }}</p></article>
        <article class="pillar"><div class="ic"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="6" r="3" /><circle cx="8" cy="24" r="3" /><circle cx="24" cy="24" r="3" /><path d="M16 9v6M16 15l-8 6M16 15l8 6" /></svg></div><h3>{{ t('p_lineage_h') }}</h3><p>{{ t('p_lineage') }}</p></article>
        <article class="pillar"><div class="ic"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="5" /><path d="M16 3v4M16 25v4M3 16h4M25 16h4M7 7l3 3M22 22l3 3M25 7l-3 3M10 22l-3 3" /></svg></div><h3>{{ t('p_seasons_h') }}</h3><p>{{ t('p_seasons') }}</p></article>
        <article class="pillar"><div class="ic"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M8 4h13l4 4v20H8z" /><path d="M12 12h9M12 17h9M12 22h5" /></svg></div><h3>{{ t('p_quests_h') }}</h3><p>{{ t('p_quests') }}</p></article>
        <article class="pillar"><div class="ic"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 13v6M10 10v12M14 7v18M18 10v12M22 13v6M26 15v2" /></svg></div><h3>{{ t('p_voice_h') }}</h3><p>{{ t('p_voice') }}</p></article>
        <article class="pillar"><div class="ic"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M3 16c4-6 8-9 13-9s9 3 13 9c-4 6-8 9-13 9s-9-3-13-9z" /><circle cx="16" cy="16" r="4" /></svg></div><h3>{{ t('p_senses_h') }}</h3><p>{{ t('p_senses') }}</p></article>
      </div>
    </section>

    <section id="arten" aria-labelledby="species-title">
      <div class="section-head">
        <p class="eyebrow">{{ t('species_eyebrow') }}</p>
        <h2 id="species-title">{{ t('species_title') }}</h2>
        <p>{{ t('species_lede') }}</p>
      </div>
      <div class="filters" role="group" :aria-label="t('species_filter')">
        <button v-for="[key, label] in FILTERS" :key="key" type="button" :aria-pressed="String(filter === key)" @click="setFilter(key)">{{ t(label) }}</button>
      </div>
      <div id="species" class="species" role="group" :aria-label="t('species_pick')">
        <button v-for="s in list" :key="s[0]" type="button" class="tile" :aria-pressed="String(s[0] === selected)" @click="selected = s[0]">
          <div class="pic"><img :src="imageOf(s[0])" alt="" loading="lazy"></div>
          <b>{{ nameOf(s) }}</b>
          <small>{{ t(`cls_${s[1]}`) }}</small>
        </button>
      </div>
      <article id="detail" class="detail" aria-live="polite">
        <div class="pic"><img id="detail-img" :src="imageOf(detail.key)" :alt="detail.name"></div>
        <div><h3 id="detail-name">{{ detail.name }}</h3><span id="detail-cls" class="cls" :class="detail.cls">{{ t(`cls_${detail.cls}`) }}</span><p id="detail-text">{{ detail.text }}</p>
          <p class="credit">{{ t('img_credit') }}</p></div>
        <div id="detail-stats" class="stats">
          <template v-for="(v, i) in detail.stats" :key="i">
            <span>{{ t(STAT_KEYS[i]) }}</span>
            <div class="bar-track" role="img" :aria-label="`${t(STAT_KEYS[i])} ${v}/10`"><div class="bar-fill" :style="{ width: `${v * 10}%` }"></div></div>
            <span>{{ v }}</span>
          </template>
        </div>
      </article>
    </section>

    <section aria-labelledby="life-title">
      <div class="section-head">
        <p class="eyebrow">{{ t('life_eyebrow') }}</p>
        <h2 id="life-title">{{ t('life_title') }}</h2>
        <p>{{ t('life_lede') }}</p>
      </div>
      <div class="life">
        <div class="stage"><i>I</i><h3>{{ t('st_young_h') }}</h3><p>{{ t('st_young') }}</p></div>
        <div class="stage"><i>II</i><h3>{{ t('st_adult_h') }}</h3><p>{{ t('st_adult') }}</p></div>
        <div class="stage"><i>III</i><h3>{{ t('st_old_h') }}</h3><p>{{ t('st_old') }}</p></div>
        <div class="stage dead"><i>✝</i><h3>{{ t('st_dead_h') }}</h3><p>{{ t('st_dead') }}</p></div>
      </div>
      <p class="life-note">{{ t('life_note') }}</p>
    </section>

    <section id="einstieg" aria-labelledby="join-title">
      <div class="section-head">
        <p class="eyebrow">{{ t('join_eyebrow') }}</p>
        <h2 id="join-title">{{ t('join_title') }}</h2>
      </div>
      <div class="steps">
        <div class="step"><h3>{{ t('s1_h') }}</h3><p>{{ t('s1') }}</p></div>
        <div class="step"><h3>{{ t('s2_h') }}</h3><p>{{ t('s2') }}</p></div>
        <div class="step"><h3>{{ t('s3_h') }}</h3><p>{{ t('s3') }}</p></div>
        <div class="step"><h3>{{ t('s_voice_h') }}</h3><p>{{ t('s_voice') }}</p><a class="step-dl" :href="VOICE_URL">{{ t('s_voice_dl') }}</a></div>
        <div class="step"><h3>{{ t('s4_h') }}</h3><p v-html="t('s4')"></p></div>
      </div>
      <div class="join-cta">
        <a class="btn primary" :href="DISCORD_URL" target="_blank" rel="noopener"><span>{{ t('cta_discord') }}</span></a>
        <span class="copy">F8 → <b>connect cfx.re/join/4ggl8rq</b><button id="copy" type="button" @click="copy">{{ copyLabel || t('copy') }}</button></span>
        <SiteLink class="btn" to="/tasten">{{ t('cta_keys') }}</SiteLink>
        <SiteLink class="btn" to="/handbuch">{{ t('cta_handbook') }}</SiteLink>
        <p>{{ t('join_note') }}</p>
      </div>
    </section>

    <section id="regeln" aria-labelledby="rules-title">
      <div class="section-head">
        <p class="eyebrow">{{ t('rules_eyebrow') }}</p>
        <h2 id="rules-title">{{ t('rules_title') }}</h2>
        <p>{{ t('rules_lede') }}</p>
      </div>
      <ol class="rules">
        <li v-for="n in 6" :key="n"><b>{{ t(`r${n}_h`) }}</b><span>{{ t(`r${n}`) }}</span></li>
      </ol>
    </section>

    <section id="entwicklung" aria-labelledby="dev-title">
      <div class="section-head">
        <p class="eyebrow">{{ t('dev_eyebrow') }}</p>
        <h2 id="dev-title">{{ t('dev_title') }}</h2>
        <p>{{ t('dev_lede') }}</p>
      </div>
      <div class="road">
        <div class="phase done"><span class="tag">{{ t('ph_done') }}</span><h3>{{ t('ph0_h') }}</h3><p>{{ t('ph0') }}</p></div>
        <div class="phase now"><span class="tag">{{ t('ph_test') }}</span><h3>{{ t('ph1_h') }}</h3><p>{{ t('ph1') }}</p></div>
        <div class="phase now"><span class="tag">{{ t('ph_test') }}</span><h3>{{ t('ph2_h') }}</h3><p>{{ t('ph2') }}</p></div>
        <div class="phase"><span class="tag">{{ t('ph_planned') }}</span><h3>{{ t('ph3_h') }}</h3><p>{{ t('ph3') }}</p></div>
        <div class="phase"><span class="tag">{{ t('ph_planned') }}</span><h3>{{ t('ph4_h') }}</h3><p>{{ t('ph4') }}</p></div>
      </div>
      <p class="dev-more"><span>{{ t('dev_more') }}</span> <SiteLink class="btn" to="/kulissen">{{ t('cta_scenes') }}</SiteLink></p>
    </section>

    <section id="faq" aria-labelledby="faq-title">
      <div class="section-head">
        <p class="eyebrow">FAQ</p>
        <h2 id="faq-title">{{ t('faq_title') }}</h2>
      </div>
      <div class="faq">
        <details v-for="n in 6" :key="n"><summary>{{ t(`q${n}`) }}</summary><p>{{ t(`a${n}`) }}</p></details>
      </div>
    </section>

    <div class="closing">
      <h2>{{ t('closing_title') }}</h2>
      <div class="actions"><a class="btn primary" :href="DISCORD_URL" target="_blank" rel="noopener"><span>{{ t('cta_discord') }}</span></a><SiteLink class="btn" to="/handbuch">{{ t('cta_handbook') }}</SiteLink></div>
    </div>
  </main>

  <SiteFooter home />
</template>

<style>
/* Layout: a full-screen night sky with a floating bar on top, a strip of numbers over its lower edge, then
   one column of card sections; species as small picture tiles with one detail panel. */
:where(.page-home) p { margin: 0; }


/* Hero */
:where(.page-home) .hero {
    position: relative; min-height: max(100svh, 640px); overflow: hidden; display: grid; place-items: center;
    background:
        radial-gradient(ellipse 45% 35% at 74% 20%, rgba(240, 226, 190, 0.16), transparent 62%),
        linear-gradient(180deg, #131923 0%, #1c1b1f 42%, #2a2016 70%, #0f0d0b 100%);
}
:where(.page-home) .hero .moon { position: absolute; top: 15%; right: 19%; width: clamp(3.5rem, 7vw, 6rem); aspect-ratio: 1; border-radius: 50%;
    background: radial-gradient(circle at 38% 36%, #fbf3dc, #e2d3ad 60%, #c9b88e); box-shadow: 0 0 80px 18px rgba(240, 226, 190, 0.25); }
:where(.page-home) .hero svg.scene { position: absolute; inset: auto 0 0 0; width: 100%; height: 56%; }
:where(.page-home) .hero-copy { position: relative; z-index: 1; text-align: center; padding: 7rem var(--gutter-r) 9rem var(--gutter-l); max-width: 60rem; }
:where(.page-home) .hero h1 { font-size: clamp(3.2rem, 9vw, 8rem); line-height: 0.95; letter-spacing: 0.02em; text-shadow: 0 12px 60px rgba(0, 0, 0, 0.6); margin: 0.4rem 0 1.4rem; }
:where(.page-home) .hero .lede { font-size: clamp(1.15rem, 1.8vw, 1.45rem); color: #ddd3c0; max-width: 40rem; margin: 0 auto 2rem; line-height: 1.5; }
:where(.page-home) .actions { display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: center; }
:where(.page-home) .btn { display: inline-flex; align-items: center; gap: 0.55rem; padding: 0.85rem 1.6rem; border-radius: 999px; text-decoration: none;
    font-family: var(--display); font-size: 1.1rem; letter-spacing: 0.08em; color: var(--ink); border: 1px solid rgba(239, 231, 216, 0.3); backdrop-filter: blur(8px); }
:where(.page-home) .btn:hover { border-color: var(--gold); }
:where(.page-home) .btn.primary { background: var(--gold); color: #14110c; border-color: var(--gold); box-shadow: 0 10px 40px rgba(214, 174, 94, 0.3); }
:where(.page-home) .btn.primary:hover { background: var(--gold-hi); }
:where(.page-home) .btn svg { width: 1.25rem; height: 1.25rem; fill: currentColor; }
:where(.page-home) .status { margin-top: 1.4rem; display: inline-flex; gap: 0.5rem; align-items: center; color: var(--muted); font-size: 1rem; }
:where(.page-home) .status i { width: 0.5rem; height: 0.5rem; border-radius: 50%; background: var(--moss); box-shadow: 0 0 10px var(--moss); }

/* Numbers over the lower edge of the hero */
:where(.page-home) .facts { position: relative; z-index: 2; margin-top: -4.5rem; display: grid; grid-template-columns: repeat(4, 1fr);
    border: 1px solid var(--line-gold); border-radius: 22px; background: rgba(25, 21, 18, 0.88); backdrop-filter: blur(10px); }
:where(.page-home) .fact { padding: 1.4rem 1.6rem; border-right: 1px solid var(--line); }
:where(.page-home) .fact:last-child { border-right: none; }
:where(.page-home) .fact b { display: block; font-family: var(--old); font-weight: normal; font-size: 2.6rem; line-height: 1; color: var(--gold); }
:where(.page-home) .fact span { color: var(--muted); font-size: 1rem; line-height: 1.35; display: block; margin-top: 0.3rem; }

/* Sections */
:where(.page-home) main section { padding: 6.5rem 0 0; }
:where(.page-home) .section-head { margin-bottom: 2rem; max-width: 46rem; }
:where(.page-home) .section-head h2 { font-size: clamp(2.2rem, 4vw, 3.2rem); margin-bottom: 0.75rem; }
:where(.page-home) .section-head p:not(.eyebrow) { color: var(--muted); font-size: 1.15rem; }
:where(.page-home) .manifest { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; color: #d9cfbc; font-size: 1.2rem; line-height: 1.65; }
:where(.page-home) .manifest p:first-child::first-letter { font-family: var(--old); float: left; font-size: 3.6rem; line-height: 0.85; padding: 0.3rem 0.5rem 0 0; color: var(--gold); }

:where(.page-home) .pillars { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
:where(.page-home) .pillar { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); padding: 1.4rem; transition: border-color 0.2s, transform 0.2s; }
:where(.page-home) .pillar:hover { border-color: var(--line-gold); transform: translateY(-2px); }
:where(.page-home) .pillar .ic { width: 2.8rem; height: 2.8rem; border-radius: 12px; display: grid; place-items: center; background: rgba(214, 174, 94, 0.12); margin-bottom: 1rem; }
:where(.page-home) .pillar svg { width: 1.7rem; height: 1.7rem; fill: none; stroke: var(--gold); stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
:where(.page-home) .pillar h3 { font-size: 1.45rem; margin-bottom: 0.4rem; }
:where(.page-home) .pillar p { color: var(--muted); font-size: 1.02rem; line-height: 1.5; }

/* Species: filter, tiles, detail */
:where(.page-home) .filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 1rem; }
:where(.page-home) .filters button { font: inherit; font-size: 1rem; padding: 0.4rem 1rem; border-radius: 10px; background: var(--panel); color: var(--muted); border: 1px solid var(--line); cursor: pointer; }
:where(.page-home) .filters button[aria-pressed="true"] { color: var(--ink); border-color: var(--gold); }
:where(.page-home) .species { display: grid; grid-template-columns: repeat(auto-fill, minmax(9.5rem, 1fr)); gap: 10px; }
:where(.page-home) .tile { font: inherit; color: var(--ink); text-align: center; background: var(--panel); border: 1px solid var(--line); border-radius: 14px; padding: 0.6rem 0.6rem 0.8rem; cursor: pointer; transition: border-color 0.15s, background 0.15s; }
:where(.page-home) .tile:hover { border-color: var(--line-gold); }
:where(.page-home) .tile[aria-pressed="true"] { border-color: var(--gold); background: var(--panel-2); }
:where(.page-home) .tile .pic { aspect-ratio: 4 / 3; border-radius: 10px; background: radial-gradient(circle at 50% 65%, rgba(214, 174, 94, 0.14), transparent 70%), #15110e; overflow: hidden; display: grid; place-items: center; }
:where(.page-home) .tile img { width: 100%; height: 100%; object-fit: contain; }
:where(.page-home) .tile b { display: block; font-weight: 600; margin-top: 0.45rem; line-height: 1.2; }
:where(.page-home) .tile small { color: var(--muted); font-size: 0.85rem; }
:where(.page-home) .detail { margin-top: 12px; display: grid; grid-template-columns: 0.9fr 1fr 1.1fr; gap: 1.8rem; align-items: center; background: var(--panel); border: 1px solid var(--line-gold); border-radius: var(--radius); padding: 1.6rem; }
:where(.page-home) .detail .pic { aspect-ratio: 4 / 3; border-radius: 14px; background: radial-gradient(circle at 50% 65%, rgba(214, 174, 94, 0.18), transparent 70%), #15110e; display: grid; place-items: center; overflow: hidden; }
:where(.page-home) .detail .pic img { width: 100%; height: 100%; object-fit: contain; }
:where(.page-home) .detail h3 { font-size: 2.2rem; }
:where(.page-home) .cls { display: inline-block; margin: 0.5rem 0 0.8rem; font-size: 0.8rem; letter-spacing: 0.14em; text-transform: uppercase; border: 1px solid var(--line-gold); border-radius: 999px; padding: 0.1rem 0.7rem; color: var(--gold); }
:where(.page-home) .cls.herbivore { color: var(--moss); border-color: rgba(143, 184, 120, 0.4); }
:where(.page-home) .cls.omnivore { color: #d39a6a; border-color: rgba(211, 154, 106, 0.4); }
:where(.page-home) .detail p { color: #d4cab7; }
:where(.page-home) .stats { display: grid; grid-template-columns: 7.5rem 1fr 1.5rem; gap: 0.45rem 0.8rem; align-items: center; font-size: 0.98rem; color: var(--muted); }
:where(.page-home) .bar-track { height: 6px; border-radius: 6px; background: rgba(239, 231, 216, 0.08); overflow: hidden; }
:where(.page-home) .bar-fill { height: 100%; border-radius: 6px; background: linear-gradient(90deg, var(--gold), var(--gold-hi)); transition: width 0.4s; }
:where(.page-home) .credit { margin-top: 0.6rem; font-size: 0.85rem; color: var(--muted); }

/* Life */
:where(.page-home) .life { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; position: relative; }
:where(.page-home) .stage { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); padding: 1.3rem; }
:where(.page-home) .stage i { font-style: normal; font-family: var(--old); color: var(--gold); font-size: 1.6rem; }
:where(.page-home) .stage h3 { font-size: 1.4rem; margin: 0.3rem 0; }
:where(.page-home) .stage p { color: var(--muted); font-size: 1rem; }
:where(.page-home) .stage.dead { border-color: rgba(200, 105, 74, 0.35); }
:where(.page-home) .stage.dead i { color: var(--rust); }
:where(.page-home) .life-note { margin-top: 14px; padding: 1rem 1.3rem; border-left: 3px solid var(--rust); background: rgba(200, 105, 74, 0.07); border-radius: 0 12px 12px 0; color: #d4cab7; }

/* Join */
:where(.page-home) .steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr)); gap: 14px; counter-reset: step; }
:where(.page-home) .step-dl { display: inline-block; margin-top: 0.7rem; font-weight: 600; color: #14110c; background: var(--gold); border-radius: 999px; padding: 0.3rem 0.95rem; text-decoration: none; }
:where(.page-home) .step-dl:hover { filter: brightness(1.08); }
:where(.page-home) .step { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); padding: 1.3rem; position: relative; }
:where(.page-home) .step::before { counter-increment: step; content: counter(step); display: grid; place-items: center; width: 2.2rem; height: 2.2rem; border-radius: 50%; background: var(--gold); color: #14110c; font-family: var(--old); font-size: 1.2rem; margin-bottom: 0.9rem; }
:where(.page-home) .step h3 { font-size: 1.35rem; margin-bottom: 0.4rem; }
:where(.page-home) .step p { color: var(--muted); font-size: 1rem; }
:where(.page-home) .step code { font-size: 0.9rem; background: rgba(0, 0, 0, 0.35); border: 1px solid var(--line); border-radius: 6px; padding: 0.05rem 0.35rem; color: var(--ink); }
:where(.page-home) .join-cta { margin-top: 1.4rem; display: flex; flex-wrap: wrap; gap: 0.75rem; align-items: center; }
:where(.page-home) .join-cta p { flex-basis: 100%; color: var(--muted); font-size: 1rem; }
:where(.page-home) .copy { display: inline-flex; align-items: center; gap: 0.7rem; background: var(--panel); border: 1px solid var(--line); border-radius: 12px; padding: 0.55rem 0.6rem 0.55rem 1rem; font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 0.95rem; color: var(--muted); }
:where(.page-home) .copy b { color: var(--ink); font-weight: normal; }
:where(.page-home) .copy button { font: inherit; font-family: var(--body); font-size: 0.95rem; background: var(--panel-2); color: var(--gold); border: 1px solid var(--line-gold); border-radius: 8px; padding: 0.2rem 0.7rem; cursor: pointer; }

/* Rules */
:where(.page-home) .rules { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; counter-reset: rule; }
:where(.page-home) .rules li { counter-increment: rule; display: grid; grid-template-columns: 2.6rem 1fr; gap: 0 1rem; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); padding: 1.1rem 1.3rem; }
:where(.page-home) .rules li::before { content: counter(rule, upper-roman); grid-row: span 2; font-family: var(--old); color: var(--gold); font-size: 1.5rem; }
:where(.page-home) .rules b { font-family: var(--display); font-weight: normal; font-size: 1.3rem; }
:where(.page-home) .rules span { color: var(--muted); font-size: 1rem; }

/* Roadmap */
:where(.page-home) .road { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
:where(.page-home) .dev-more { margin: 1.5rem 0 0; display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem 1rem; color: var(--soft); }
:where(.page-home) .phase { background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); padding: 1.2rem; position: relative; }
:where(.page-home) .phase::before { content: ''; display: block; height: 4px; border-radius: 4px; background: rgba(239, 231, 216, 0.1); margin-bottom: 1rem; }
:where(.page-home) .phase.done::before { background: var(--moss); }
:where(.page-home) .phase.now::before { background: linear-gradient(90deg, var(--gold) 55%, rgba(239, 231, 216, 0.1) 55%); }
:where(.page-home) .phase .tag { font-size: 0.78rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); }
:where(.page-home) .phase.done .tag { color: var(--moss); }
:where(.page-home) .phase.now .tag { color: var(--gold); }
:where(.page-home) .phase h3 { font-size: 1.3rem; margin: 0.3rem 0 0.4rem; }
:where(.page-home) .phase p { color: var(--muted); font-size: 0.98rem; line-height: 1.45; }

/* FAQ */
:where(.page-home) .faq { display: grid; gap: 10px; max-width: 52rem; }
:where(.page-home) .faq details { background: var(--panel); border: 1px solid var(--line); border-radius: 14px; padding: 0 1.2rem; }
:where(.page-home) .faq details[open] { border-color: var(--line-gold); }
:where(.page-home) .faq summary { cursor: pointer; list-style: none; padding: 1rem 0; font-size: 1.15rem; display: flex; justify-content: space-between; gap: 1rem; }
:where(.page-home) .faq summary::after { content: '+'; color: var(--gold); font-size: 1.4rem; line-height: 1; }
:where(.page-home) .faq details[open] summary::after { content: '–'; }
:where(.page-home) .faq summary::-webkit-details-marker { display: none; }
:where(.page-home) .faq p { color: var(--muted); padding-bottom: 1rem; }

/* Closing call and footer */
:where(.page-home) .closing { margin-top: 6.5rem; border-radius: 26px; padding: 3rem 2rem; text-align: center; border: 1px solid var(--line-gold);
    background: radial-gradient(ellipse 60% 80% at 50% 0%, rgba(214, 174, 94, 0.16), transparent 70%), var(--panel); }
:where(.page-home) .closing h2 { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 1.2rem; }

@media (max-width: 1080px) {
    :where(.page-home) .pillars { grid-template-columns: repeat(2, 1fr); }
    :where(.page-home) .road { grid-template-columns: repeat(2, 1fr); }
    :where(.page-home) .detail { grid-template-columns: 1fr 1fr; }
    :where(.page-home) .detail .pic { grid-column: span 2; max-height: 16rem; }
}
@media (max-width: 720px) {
    :where(.page-home) .facts { grid-template-columns: repeat(2, 1fr); margin-top: -3rem; }
    :where(.page-home) .fact:nth-child(2) { border-right: none; }
    :where(.page-home) .fact:nth-child(-n+2) { border-bottom: 1px solid var(--line); }
    :where(.page-home) .manifest, :where(.page-home) .pillars, :where(.page-home) .life, :where(.page-home) .steps, :where(.page-home) .rules, :where(.page-home) .road, :where(.page-home) .detail { grid-template-columns: 1fr; }
    :where(.page-home) .detail .pic { grid-column: auto; }
    :where(.page-home) .species { grid-template-columns: repeat(3, 1fr); }
    :where(.page-home) .tile b { font-size: 0.95rem; }
    :where(.page-home) .hero-copy { padding-bottom: 7rem; }
}
@media (prefers-reduced-motion: reduce) { html:where(.page-home) { scroll-behavior: auto; } :where(.page-home) .pillar, :where(.page-home) .bar-fill { transition: none; } }
</style>
