<!-- Server status for players: is the wilderness open, the voice chat and the panel reachable, how were the last
     30 days, how many animals are out there. Data: status.json of the watcher server (liw-watch, every minute
     from its uptime checks), fetched in the browser and refreshed every minute; the prerendered page shows
     "loading". -->
<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import SiteBar from '../components/SiteBar.vue';
import SiteFooter from '../components/SiteFooter.vue';
import PageHero from '../components/PageHero.vue';
import { lang } from '../lang.js';
import { usePageHead } from '../head.js';
import { DISCORD_URL, STATUS_URL } from '../site.js';

const DAYS = 30;
const REFRESH_MS = 60000;

const TEXT = {
    de: {
        eyebrow: 'Life In Wilderness · Status', title: 'Server-Status',
        lede: 'Läuft die Wildnis gerade? Hier siehst du, ob Spielserver, Voice-Chat und Panel erreichbar sind – geprüft jede Minute von einem zweiten Server in einem anderen Rechenzentrum.',
        loading: 'Status wird geladen …', failed: 'Der Status ist gerade nicht abrufbar.', failed_hint: 'Das heißt nicht, dass der Server aus ist – schau im Discord nach.',
        all_up: 'Alles läuft', some_down: 'Teilweise gestört', all_down: 'Die Wildnis ist gerade nicht erreichbar',
        players: (n, m) => (n === 1 ? `1 Tier von ${m} ist gerade in der Wildnis` : `${n} von ${m} Tieren sind gerade in der Wildnis`),
        updated: (t) => `aktualisiert ${t}`,
        up: 'läuft', down: 'gestört', unknown: 'unbekannt',
        since_up: (t) => `läuft seit ${t}`, since_down: (t) => `gestört seit ${t}`,
        uptime: (p) => `${p} % in den letzten ${DAYS} Tagen`, no_data: 'noch keine Messwerte',
        day: (d, p) => (p == null ? `${d}: keine Messwerte` : `${d}: ${p} % erreichbar`),
        ago_now: 'gerade eben', ago_s: (n) => `vor ${n} s`, ago_m: (n) => `vor ${n} min`, ago_h: (n) => `vor ${n} h`,
        ago_d: (n) => (n === 1 ? 'vor 1 Tag' : `vor ${n} Tagen`),
        old: `vor ${DAYS} Tagen`, today: 'heute',
        news: 'Wartungen und Neuigkeiten kündigen wir im Discord an.', discord: 'Zum Discord',
        services: {
            game: { name: 'Spielserver', what: 'Die Wildnis selbst – hier spielst du dein Tier.' },
            voice: { name: 'Voice-Chat', what: 'Mumble für die Stimmen der Tiere in deiner Nähe.' },
            panel: { name: 'Panel', what: 'Dein Konto, deine Tiere und Meldungen im Browser.' },
        },
    },
    en: {
        eyebrow: 'Life In Wilderness · Status', title: 'Server status',
        lede: 'Is the wilderness open right now? See whether the game server, the voice chat and the panel can be reached – checked every minute from a second server in another data centre.',
        loading: 'Loading the status …', failed: 'The status cannot be loaded right now.', failed_hint: 'That does not mean the server is down – have a look on Discord.',
        all_up: 'All systems running', some_down: 'Partly disrupted', all_down: 'The wilderness cannot be reached right now',
        players: (n, m) => (n === 1 ? `1 of ${m} animals is in the wilderness right now` : `${n} of ${m} animals are in the wilderness right now`),
        updated: (t) => `updated ${t}`,
        up: 'running', down: 'disrupted', unknown: 'unknown',
        since_up: (t) => `running since ${t}`, since_down: (t) => `disrupted since ${t}`,
        uptime: (p) => `${p} % over the last ${DAYS} days`, no_data: 'no measurements yet',
        day: (d, p) => (p == null ? `${d}: no measurements` : `${d}: ${p} % reachable`),
        ago_now: 'just now', ago_s: (n) => `${n} s ago`, ago_m: (n) => `${n} min ago`, ago_h: (n) => `${n} h ago`,
        ago_d: (n) => (n === 1 ? '1 day ago' : `${n} days ago`),
        old: `${DAYS} days ago`, today: 'today',
        news: 'Maintenance and news are announced on Discord.', discord: 'Open Discord',
        services: {
            game: { name: 'Game server', what: 'The wilderness itself – this is where you play your animal.' },
            voice: { name: 'Voice chat', what: 'Mumble for the voices of the animals near you.' },
            panel: { name: 'Panel', what: 'Your account, your animals and reports in the browser.' },
        },
    },
};
const L = computed(() => TEXT[lang.value]);
usePageHead({
    path: '/status',
    title: computed(() => `${L.value.title} · Life In Wilderness`),
    description: 'Läuft Life In Wilderness gerade? Status von Spielserver, Voice-Chat und Panel. / Is Life In Wilderness up? Status of the game server, voice chat and panel.',
    pageClass: 'page-status',
});

const status = ref(null);
const failed = ref(false);
const now = ref(Date.now());
let refreshTimer = 0;
let clockTimer = 0;

async function load() {
    try {
        const response = await fetch(STATUS_URL, { cache: 'no-store' });
        if (!response.ok) throw new Error(String(response.status));
        status.value = await response.json();
        failed.value = false;
    } catch {
        failed.value = true;
    }
}

onMounted(() => {
    load();
    refreshTimer = setInterval(load, REFRESH_MS);
    clockTimer = setInterval(() => { now.value = Date.now(); }, 10000);
});
onUnmounted(() => {
    clearInterval(refreshTimer);
    clearInterval(clockTimer);
});

function ago(iso) {
    if (!iso) return '';
    const s = Math.max(0, Math.round((now.value - Date.parse(iso)) / 1000));
    if (s < 15) return L.value.ago_now;
    if (s < 60) return L.value.ago_s(s);
    if (s < 3600) return L.value.ago_m(Math.floor(s / 60));
    if (s < 86400) return L.value.ago_h(Math.floor(s / 3600));
    return L.value.ago_d(Math.floor(s / 86400));
}

// The last DAYS days (calendar days in Germany, as the watcher counts them), oldest first.
const dayKeys = computed(() => {
    const format = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Berlin' });
    const keys = [];
    for (let i = DAYS - 1; i >= 0; i -= 1) keys.push(format.format(new Date(now.value - i * 86400000)));
    return keys;
});
const dayLabel = (key) => new Date(`${key}T12:00:00`).toLocaleDateString(lang.value === 'de' ? 'de-DE' : 'en-GB', { day: 'numeric', month: 'short' });
const percent = (p) => (p == null ? null : (Math.floor(p * 100) / 100).toLocaleString(lang.value === 'de' ? 'de-DE' : 'en-GB', { maximumFractionDigits: 2 }));
const tone = (p) => (p == null ? 'none' : p >= 99.5 ? 'good' : p >= 95 ? 'fair' : 'bad');

const services = computed(() => ['game', 'voice', 'panel'].map((key) => {
    const s = status.value?.services?.[key] || {};
    const byDay = Object.fromEntries((s.days || []).map((d) => [d.day, d.uptime]));
    return {
        key,
        ...L.value.services[key],
        state: s.up === true ? 'up' : s.up === false ? 'down' : 'unknown',
        since: s.since,
        uptime: percent(s.uptime),
        days: dayKeys.value.map((day) => ({ day, uptime: byDay[day] ?? null })),
    };
}));

const overall = computed(() => {
    if (!status.value) return failed.value ? 'failed' : 'loading';
    const states = services.value.map((s) => s.state);
    if (states.every((s) => s === 'up')) return 'up';
    if (services.value[0].state === 'down') return 'down';
    return 'partial';
});
const overallText = computed(() => ({
    loading: L.value.loading, failed: L.value.failed, up: L.value.all_up, partial: L.value.some_down, down: L.value.all_down,
}[overall.value]));
</script>

<template>
  <SiteBar current="status" />

  <PageHero>
    <div class="eyebrow">{{ L.eyebrow }}</div>
    <h1>{{ L.title }}</h1>
    <p class="lede">{{ L.lede }}</p>
  </PageHero>

  <main class="status-page">
    <section class="summary" :class="overall" aria-live="polite">
      <span class="lamp" aria-hidden="true"></span>
      <div class="summary-text">
        <h2>{{ overallText }}</h2>
        <p v-if="overall === 'failed'">{{ L.failed_hint }}</p>
        <p v-else-if="status">
          <template v-if="status.players && services[0].state === 'up'">{{ L.players(status.players.online, status.players.max) }} · </template>{{ L.updated(ago(status.updated)) }}
        </p>
      </div>
    </section>

    <section v-for="s in services" :key="s.key" class="service" :class="s.state">
      <header>
        <div>
          <h3>{{ s.name }}</h3>
          <p class="what">{{ s.what }}</p>
        </div>
        <span class="badge"><span class="dot" aria-hidden="true"></span>{{ L[s.state] }}</span>
      </header>
      <div class="days" role="img" :aria-label="s.uptime != null ? L.uptime(s.uptime) : L.no_data">
        <span v-for="d in s.days" :key="d.day" class="day" :class="tone(d.uptime)" :title="L.day(dayLabel(d.day), percent(d.uptime))"></span>
      </div>
      <div class="foot">
        <span>{{ L.old }}</span>
        <span class="mid">
          <template v-if="s.since && s.state !== 'unknown'">{{ (s.state === 'up' ? L.since_up : L.since_down)(ago(s.since).replace(/^vor /, '').replace(/ ago$/, '')) }} · </template>{{ s.uptime != null ? L.uptime(s.uptime) : L.no_data }}
        </span>
        <span>{{ L.today }}</span>
      </div>
    </section>

    <p class="news">{{ L.news }} <a :href="DISCORD_URL" target="_blank" rel="noopener">{{ L.discord }}</a></p>
  </main>

  <SiteFooter />
</template>

<style>
/* A plate per service on the parchment: name and what it is for, a lamp, 30 small day marks like notches on a
   tally stick (moss = reachable, amber = partly, rust = mostly not, faint = no measurement). */
:where(.page-status) .status-page { width: min(860px, 100% - var(--gutter-l) - var(--gutter-r)); margin: 0 auto; padding: 1.5rem 0 3rem; display: flex; flex-direction: column; gap: 1.1rem; }

:where(.page-status) .summary {
  --c: var(--muted);
  display: flex; align-items: center; gap: 1.1rem; padding: 1.2rem 1.4rem;
  background: var(--panel); border: 1px solid var(--line); border-left: 4px solid var(--c); border-radius: var(--radius);
}
:where(.page-status) .summary.up { --c: var(--moss); }
:where(.page-status) .summary.partial { --c: var(--amber); }
:where(.page-status) .summary.down, :where(.page-status) .summary.failed { --c: var(--rust); }
:where(.page-status) .summary h2 { font-size: clamp(1.5rem, 4vw, 2rem); color: var(--ink); }
:where(.page-status) .summary p { margin: 0.25rem 0 0; color: var(--muted); }
:where(.page-status) .lamp { flex: none; width: 1.1rem; height: 1.1rem; border-radius: 50%; background: var(--c); box-shadow: 0 0 0 0.3rem rgba(var(--ink-rgb), 0.06); }
:where(.page-status) .summary.up .lamp { animation: status-breathe 3s ease-in-out infinite; }
@keyframes status-breathe { 50% { box-shadow: 0 0 0 0.45rem rgba(var(--moss-rgb), 0.18); } }
@media (prefers-reduced-motion: reduce) { :where(.page-status) .summary.up .lamp { animation: none; } }

:where(.page-status) .service {
  --c: var(--muted);
  padding: 1.1rem 1.4rem 1rem; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius);
}
:where(.page-status) .service.up { --c: var(--moss); }
:where(.page-status) .service.down { --c: var(--rust); }
:where(.page-status) .service header { display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; }
:where(.page-status) .service h3 { font-size: 1.45rem; color: var(--ink); }
:where(.page-status) .service .what { margin: 0.2rem 0 0; color: var(--muted); font-size: 1rem; }
:where(.page-status) .badge {
  flex: none; display: inline-flex; align-items: center; gap: 0.45rem; padding: 0.15rem 0.7rem;
  border: 1px solid var(--c); border-radius: 999px; color: var(--c); font-family: var(--old); font-size: 1rem; white-space: nowrap;
}
:where(.page-status) .badge .dot { width: 0.55rem; height: 0.55rem; border-radius: 50%; background: var(--c); }

:where(.page-status) .days { display: grid; grid-template-columns: repeat(30, minmax(0, 1fr)); gap: 3px; margin: 1rem 0 0.45rem; height: 2.2rem; }
:where(.page-status) .day { border-radius: 2px; background: rgba(var(--ink-rgb), 0.1); }
:where(.page-status) .day.good { background: var(--moss); }
:where(.page-status) .day.fair { background: var(--amber); }
:where(.page-status) .day.bad { background: var(--rust); }
:where(.page-status) .day:hover { outline: 1px solid var(--ink); outline-offset: 1px; }
:where(.page-status) .foot { display: flex; justify-content: space-between; gap: 0.75rem; font-size: 0.85rem; color: var(--muted); }
:where(.page-status) .foot .mid { text-align: center; }

:where(.page-status) .news { margin: 0.5rem 0 0; text-align: center; color: var(--muted); }

@media (max-width: 560px) {
  :where(.page-status) .service header { flex-direction: column; }
  :where(.page-status) .days { gap: 2px; height: 1.8rem; }
  :where(.page-status) .foot { flex-wrap: wrap; }
  :where(.page-status) .foot .mid { order: 3; width: 100%; text-align: left; }
}
</style>
