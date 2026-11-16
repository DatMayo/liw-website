<!-- Behind the scenes: one simulation at a time. Every file in src/kulissen/ (except hoehle-data.js) exports
     one simulation { id, order, title, teaser, lede, mount(root, lang) -> { destroy() } }; see its README.md.
     Simulations only run in the browser (mounted after hydration), never while prerendering. -->
<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SiteBar from '../components/SiteBar.vue';
import SiteFooter from '../components/SiteFooter.vue';
import PageHero from '../components/PageHero.vue';
import { lang } from '../lang.js';
import { usePageHead } from '../head.js';

const TEXT = {
    de: {
        eyebrow: 'Life In Wilderness · Hinter den Kulissen', title: 'Hinter den Kulissen',
        intro: 'Wie funktionieren Reviere, Vererbung oder Kämpfe eigentlich? Hier laufen die Systeme des Servers als kleine Simulationen – mit den Werten, die auch im Spiel gelten.',
        disclaimer: 'Die Simulationen rechnen mit den aktuellen Einstellungen des Servers, vereinfachen aber das Drumherum: keine echte Spielwelt, keine anderen Spieler. Werte können sich mit Updates ändern; im Zweifel gilt, was im Spiel passiert.',
        system: 'System', loading: 'Wird geladen …',
    },
    en: {
        eyebrow: 'Life In Wilderness · Behind the scenes', title: 'Behind the scenes',
        intro: 'How do territories, inheritance or fights actually work? Here the systems of the server run as small simulations – with the same values as in the game.',
        disclaimer: 'The simulations use the server\'s current settings but simplify everything around them: no real game world, no other players. Values can change with updates; when in doubt, what happens in the game counts.',
        system: 'System', loading: 'Loading …',
    },
};

const files = import.meta.glob(['../kulissen/*.js', '!../kulissen/hoehle-data.js'], { eager: true, import: 'default' });
const sims = Object.values(files).filter((s) => s && s.id && typeof s.mount === 'function').sort((a, b) => a.order - b.order);

const route = useRoute();
const router = useRouter();
const L = computed(() => TEXT[lang.value]);
usePageHead({
    path: '/kulissen',
    title: computed(() => `${L.value.title} · Life In Wilderness`),
    description: 'Interaktive Simulationen der Spielsysteme von Life In Wilderness. / Interactive simulations of the game systems of Life In Wilderness.',
    pageClass: 'page-kulissen',
});

const currentId = ref(sims[0] ? sims[0].id : null);
const sim = computed(() => sims.find((s) => s.id === currentId.value) || sims[0]);
const stage = ref(null);
const mountedId = ref(null);   // the simulation now in the stage (null while prerendered / loading)
let mounted = null;
// Shown in the prerendered page until the simulation is mounted; a constant, so Vue never rewrites the stage.
const LOADING = TEXT.de.loading;

function unmountSim() {
    if (mounted) { try { if (mounted.destroy) mounted.destroy(); } catch { /* ignore */ } mounted = null; }
}

// Mounts the simulation with this id (or the first one) into the stage; on a language change it is mounted again.
function show(id) {
    const next = sims.find((s) => s.id === id) || sims[0];
    if (!next || !stage.value) return;
    unmountSim();
    currentId.value = next.id;
    mountedId.value = next.id;
    const root = stage.value;
    root.replaceChildren();
    try { mounted = next.mount(root, lang.value) || null; } catch (e) { console.error(e); root.textContent = String(e); }
}

function pick(id) {
    if (location.hash !== `#${id}`) router.push({ hash: `#${id}` }); else show(id);
}

watch(() => route.hash, (hash) => show(decodeURIComponent(hash.slice(1))));
watch(lang, () => { if (mountedId.value) show(currentId.value); }, { flush: 'post' });
onMounted(() => show(decodeURIComponent(location.hash.slice(1))));
onUnmounted(unmountSim);
</script>

<template>
  <SiteBar current="scenes" />

  <PageHero>
    <div class="eyebrow">{{ L.eyebrow }}</div>
    <h1>{{ L.title }}</h1>
    <p class="lede">{{ L.intro }}</p>
  </PageHero>

  <main class="scenes">
    <div id="systems" class="systems" role="tablist">
      <button v-for="s in sims" :id="`tab-${s.id}`" :key="s.id" type="button" role="tab" :aria-selected="String(s.id === currentId)" @click="pick(s.id)">
        <strong>{{ s.title[lang] }}</strong><span>{{ s.teaser[lang] }}</span>
      </button>
    </div>
    <section aria-live="polite">
      <div v-if="sim" class="stage-head">
        <div id="stage-eyebrow" class="eyebrow">{{ L.system }} · {{ sim.title[lang] }}</div>
        <h2 id="stage-title">{{ sim.title[lang] }}</h2>
        <p id="stage-lede">{{ sim.lede[lang] }}</p>
      </div>
    </section>
    <!-- The stage belongs to the simulation: Vue never renders into it after the first paint. -->
    <div id="stage" ref="stage" class="stage" :class="mountedId ? ['sim', `sim-${mountedId}`] : null" :textContent="LOADING"></div>
    <p class="disclaimer">{{ L.disclaimer }}</p>
  </main>

  <SiteFooter />
</template>

<style>
/* Layout: a field journal of the machinery - a row of system tabs, then one working model at a time on a dark plate. */
:where(.page-kulissen) .scenes { width: min(1180px, 100% - var(--gutter-l) - var(--gutter-r)); margin: 0 auto; padding-top: 1rem; display: flex; flex-direction: column; gap: 1.5rem; }
:where(.page-kulissen) .systems { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 13.5rem), 1fr)); gap: 0.6rem; }
:where(.page-kulissen) .systems button { display: grid; gap: 0.15rem; text-align: left; font: inherit; color: var(--ink); background: var(--panel); border: 1px solid var(--line); border-radius: 3px; padding: 0.7rem 0.9rem; cursor: pointer; min-width: 0; }
:where(.page-kulissen) .systems button strong { font-family: var(--old); font-weight: normal; font-size: 1.15rem; line-height: 1.2; }
:where(.page-kulissen) .systems button span { color: var(--muted); font-size: 0.95rem; line-height: 1.3; }
:where(.page-kulissen) .systems button[aria-selected="true"] { border-color: var(--gold); background: var(--panel-2); box-shadow: inset 0 0 0 1px var(--line-gold); }
:where(.page-kulissen) .systems button:hover { border-color: var(--line-gold); }
:where(.page-kulissen) .stage-head { display: grid; gap: 0.4rem; max-width: 52rem; }
:where(.page-kulissen) .stage-head h2 { font-size: clamp(1.8rem, 3.6vw, 2.6rem); letter-spacing: 0.02em; text-wrap: balance; }
:where(.page-kulissen) .stage-head p { margin: 0; color: var(--soft); }
:where(.page-kulissen) .stage { min-height: 20rem; }
:where(.page-kulissen) .disclaimer { border-top: 1px solid var(--line); padding-top: 1rem; color: var(--muted); font-size: 1rem; max-width: 52rem; }

/* Shared parts of every simulation (assets/kulissen/*.js). */
:where(.page-kulissen) .sim [hidden] { display: none !important; }
:where(.page-kulissen) .sim { display: grid; gap: 1rem; }
:where(.page-kulissen) .sim-grid { display: grid; grid-template-columns: minmax(0, 1fr) 19rem; gap: 1rem; align-items: start; }
@media (max-width: 860px) { :where(.page-kulissen) .sim-grid { grid-template-columns: minmax(0, 1fr); } }
:where(.page-kulissen) .sim-view { position: relative; background: var(--leather-dark); border: 1px solid var(--line); border-radius: 3px; overflow: hidden; min-width: 0; }
:where(.page-kulissen) .sim-view canvas { display: block; width: 100%; height: auto; }
:where(.page-kulissen) .sim-side { display: grid; gap: 0.8rem; min-width: 0; }
:where(.page-kulissen) .sim-box { background: var(--panel); border: 1px solid var(--line); border-radius: 3px; padding: 0.8rem 1rem; display: grid; gap: 0.5rem; min-width: 0; }
:where(.page-kulissen) .sim-box h3 { font-family: var(--display); font-size: 0.85rem; letter-spacing: 0.16em; text-transform: lowercase; color: var(--gold); }
:where(.page-kulissen) .sim-row { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
:where(.page-kulissen) .sim-btn { font: 600 1rem var(--body); color: var(--on-accent); background: var(--gold); border: 0; border-radius: 3px; padding: 0.35rem 1rem; cursor: pointer; }
:where(.page-kulissen) .sim-btn.ghost { color: var(--ink); background: transparent; border: 1px solid var(--line-gold); }
:where(.page-kulissen) .sim-btn[aria-pressed="true"] { background: var(--gold); color: var(--on-accent); }
:where(.page-kulissen) .sim-field { display: grid; gap: 0.15rem; font-size: 1rem; color: var(--soft); }
:where(.page-kulissen) .sim-field > span { display: flex; justify-content: space-between; gap: 0.5rem; }
:where(.page-kulissen) .sim-field output, :where(.page-kulissen) .sim-num { font-variant-numeric: tabular-nums; color: var(--ink); }
:where(.page-kulissen) .sim-field input[type=range] { width: 100%; accent-color: var(--gold); }
:where(.page-kulissen) .sim-field select { font: inherit; color: var(--ink); background: var(--cap-off); border: 1px solid var(--cap-edge); border-radius: 3px; padding: 0.2rem 0.4rem; }
:where(.page-kulissen) .sim-check { display: flex; gap: 0.5rem; align-items: center; font-size: 1rem; color: var(--soft); cursor: pointer; }
:where(.page-kulissen) .sim-check input { accent-color: var(--gold); }
:where(.page-kulissen) .sim-stat { display: flex; justify-content: space-between; gap: 0.75rem; font-size: 1rem; border-top: 1px dotted var(--line); padding-top: 0.3rem; }
:where(.page-kulissen) .sim-stat:first-of-type { border-top: 0; }
:where(.page-kulissen) .sim-stat b { font-weight: 600; font-variant-numeric: tabular-nums; }
:where(.page-kulissen) .sim-legend { display: flex; flex-wrap: wrap; gap: 0.3rem 1.1rem; font-size: 0.95rem; color: var(--muted); }
:where(.page-kulissen) .sim-legend span { display: inline-flex; align-items: center; gap: 0.4rem; }
:where(.page-kulissen) .sim-legend i { width: 0.8rem; height: 0.8rem; border-radius: 3px; background: var(--c); flex: none; }
:where(.page-kulissen) .sim-note { color: var(--muted); font-size: 1rem; max-width: 52rem; margin: 0; }
:where(.page-kulissen) .sim-note b { color: var(--soft); font-weight: 600; }
:where(.page-kulissen) .sim-tag { display: inline-block; font-size: 0.8rem; letter-spacing: 0.06em; padding: 0.05rem 0.5rem; border-radius: 3px; border: 1px solid var(--line-gold); color: var(--gold); }
@media (prefers-reduced-motion: no-preference) { :where(.page-kulissen) .systems button { transition: border-color 0.15s, background-color 0.15s; } }
</style>
