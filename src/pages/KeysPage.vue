<!-- Key bindings: keyboard (QWERTZ in German, QWERTY in English) and mouse, legend filter, the full list and
     the controller section. Texts and keys: data/keys.js. -->
<script setup>
import { computed, ref, shallowRef } from 'vue';
import SiteBar from '../components/SiteBar.vue';
import SiteFooter from '../components/SiteFooter.vue';
import PageHero from '../components/PageHero.vue';
import { lang } from '../lang.js';
import { usePageHead } from '../head.js';
import { ACTIONS, GROUPS, PAD, PAD_COLORS, ROWS, TEXT } from '../data/keys.js';

const L = computed(() => TEXT[lang.value]);
usePageHead({
    path: '/tasten',
    title: computed(() => `${L.value.title} · Life In Wilderness`),
    description: 'Alle Tasten von Life In Wilderness auf einen Blick. / Every Life In Wilderness key at a glance.',
    pageClass: 'page-tasten',
});

const byKey = {};
ACTIONS.forEach((a) => { [a.key, ...(a.also || [])].forEach((k) => { byKey[k] = a; }); });
const color = (group) => `var(${GROUPS[group]})`;
const groupNames = Object.keys(GROUPS);
const padGroups = Object.keys(PAD_COLORS);

const hidden = ref(new Set());
const current = shallowRef(null);
const show = (action) => { current.value = action; };
function toggleGroup(group) {
    const next = new Set(hidden.value);
    if (next.has(group)) next.delete(group); else next.add(group);
    hidden.value = next;
}

// One key cap: [id, width, label] of a row, or the mouse buttons.
function cap(id, width, label, extra) {
    const action = byKey[id];
    return { id, width, label: label ?? id, extra, action };
}
const rows = computed(() => ROWS[lang.value].map((row) => row.map(([id, width, label]) => (id === '_' ? { gap: true, width } : cap(id, width, label)))));
const mouse = computed(() => [
    cap('LMB', 1, lang.value === 'de' ? 'Links' : 'Left'),
    cap('WHEEL', 1, '●', 'wheel'),
    cap('RMB', 1, lang.value === 'de' ? 'Rechts' : 'Right', 'right'),
]);
function keyClass(k) {
    const a = k.action;
    return [k.extra, a && 'on', a && hidden.value.has(a.group) && 'dim', a && a === current.value && 'active'];
}
function keyStyle(k) {
    return k.action ? { '--w': k.width, '--c': color(k.action.group) } : { '--w': k.width };
}
</script>

<template>
  <SiteBar current="keys" />

  <PageHero>
    <div class="eyebrow">{{ L.eyebrow }}</div>
    <h1>{{ L.title }}</h1>
    <p class="lede">{{ L.intro }}</p>
  </PageHero>

  <main class="keys-page">
    <div id="legend" class="legend">
      <button v-for="group in groupNames" :key="group" type="button" :aria-pressed="hidden.has(group) ? 'false' : 'true'" @click="toggleGroup(group)">
        <span class="dot" :style="{ '--c': color(group) }"></span>{{ L.groups[group] }}
      </button>
    </div>

    <div class="board-box">
      <div class="board-row">
        <div id="board" class="board">
          <div v-for="(row, r) in rows" :key="`${lang}-${r}`" class="row">
            <template v-for="(k, i) in row" :key="i">
              <div v-if="k.gap" class="gap" :style="{ width: `calc(var(--u) * ${k.width})` }"></div>
              <button v-else-if="k.action" type="button" class="key" :class="keyClass(k)" :style="keyStyle(k)" :data-action="ACTIONS.indexOf(k.action)"
                :aria-label="`${k.action[lang][0]}: ${k.action[lang][1]}`" @mouseenter="show(k.action)" @focus="show(k.action)" @click="show(k.action)">
                <span class="cap">{{ k.label }}</span><span class="what">{{ k.action.short[lang] }}</span><span v-if="k.action.hold && k.id !== 'WHEEL'" class="hold" :title="L.hold">⏷</span>
              </button>
              <div v-else class="key" :class="keyClass(k)" :style="keyStyle(k)"><span class="cap">{{ k.label }}</span></div>
            </template>
          </div>
        </div>
        <div class="mouse">
          <div id="mouse" class="mouse-body">
            <button v-for="k in mouse" :key="k.id" type="button" class="key" :class="keyClass(k)" :style="keyStyle(k)" :data-action="ACTIONS.indexOf(k.action)"
              :aria-label="`${k.action[lang][0]}: ${k.action[lang][1]}`" @mouseenter="show(k.action)" @focus="show(k.action)" @click="show(k.action)">
              <span class="cap">{{ k.label }}</span><span class="what">{{ k.action.short[lang] }}</span><span v-if="k.action.hold && k.id !== 'WHEEL'" class="hold" :title="L.hold">⏷</span>
            </button>
            <div class="palm"></div>
          </div>
          <div class="mouse-label">{{ L.mouse }}</div>
        </div>
      </div>
    </div>

    <div id="detail" class="detail" aria-live="polite" :style="current ? { '--detail-c': color(current.group) } : null">
      <template v-if="current"><strong>{{ current[lang][0] }} · {{ current[lang][1] }}</strong><br>{{ current[lang][2] }}</template>
      <template v-else>{{ L.hint }}</template>
    </div>

    <div id="groups" class="groups">
      <section v-for="group in groupNames" :key="group" class="group" :style="{ '--c': color(group) }">
        <h2><span class="dot"></span>{{ L.groups[group] }}</h2>
        <ul>
          <li v-for="a in ACTIONS.filter((x) => x.group === group)" :key="a.key" :data-action="ACTIONS.indexOf(a)" :class="{ hl: a === current }" @mouseenter="show(a)">
            <kbd>{{ a[lang][0] }}</kbd><div style="min-width: 0"><span>{{ a[lang][1] }}</span><small>{{ a[lang][2] }}</small></div>
          </li>
        </ul>
      </section>
    </div>

    <section class="pad-box">
      <h2 class="pad-title">{{ L.pad_title }}</h2>
      <p class="pad-intro">{{ L.pad_intro }}</p>
      <div id="pad" class="groups">
        <section v-for="group in padGroups" :key="group" class="group" :style="{ '--c': `var(${PAD_COLORS[group]})` }">
          <h2><span class="dot"></span>{{ L.pad_groups[group] }}</h2>
          <ul>
            <li v-for="(p, i) in PAD.filter((x) => x.group === group)" :key="i">
              <kbd>{{ p[lang][0] }}</kbd><div style="min-width: 0"><span>{{ p[lang][1] }}</span><small>{{ p[lang][2] }}</small></div>
            </li>
          </ul>
        </section>
      </div>
    </section>

    <div class="note">
      <div v-html="L.note1"></div>
      <div v-html="L.note2"></div>
      <div v-html="L.note3"></div>
      <div v-html="L.note4"></div>
    </div>
  </main>

  <SiteFooter />
</template>

<style>
/* Layout: a plate on dark earth - title, the keyboard as the specimen, a legend of groups, then the full list. */
:where(.page-tasten) .keys-page { width: min(1180px, 100% - var(--gutter-l) - var(--gutter-r)); margin: 0 auto; padding-top: 1rem; display: flex; flex-direction: column; gap: 1.75rem; }
:where(.page-tasten) .key:focus-visible, :where(.page-tasten) .legend button:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }

:where(.page-tasten) .legend { display: flex; flex-wrap: wrap; gap: 0.5rem; }
:where(.page-tasten) .legend button { display: inline-flex; align-items: center; gap: 0.45rem; font: 1rem var(--old); color: var(--ink); background: transparent; border: 1px solid var(--line); border-radius: 3px; padding: 0.25rem 0.85rem; cursor: pointer; }
:where(.page-tasten) .legend button[aria-pressed="false"] { opacity: 0.4; }
:where(.page-tasten) .dot { width: 0.7rem; height: 0.7rem; border-radius: 50%; background: var(--c); }

:where(.page-tasten) .board-box { overflow-x: auto; padding-bottom: 0.25rem; }
:where(.page-tasten) .board-row { display: flex; gap: 1rem; align-items: flex-start; min-width: max-content; }
:where(.page-tasten) .board { --u: 3.5rem; display: flex; flex-direction: column; gap: 0.3rem; padding: 0.9rem; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); }
:where(.page-tasten) .row { display: flex; gap: 0.3rem; }
:where(.page-tasten) .gap { width: calc(var(--u) * 0.5); }
:where(.page-tasten) .key {
  --c: var(--cap-edge);
  position: relative; width: calc(var(--u) * var(--w, 1) + 0.3rem * (var(--w, 1) - 1)); height: var(--u);
  background: var(--cap-off); border: 1px solid var(--cap-edge); border-bottom-width: 3px; border-radius: 3px;
  color: var(--muted); font: 0.85rem/1 var(--body); padding: 0.3rem 0.35rem; text-align: left;
  display: flex; flex-direction: column; justify-content: space-between; cursor: default;
}
:where(.page-tasten) .key .cap { font-size: 0.85rem; }
:where(.page-tasten) .key .what { font-size: 0.7rem; line-height: 1.1; color: var(--ink); overflow-wrap: anywhere; hyphens: auto; }
:where(.page-tasten) .key.on { background: var(--cap); border-color: var(--c); color: var(--ink); cursor: pointer; box-shadow: inset 0 0.22rem 0 var(--c); }
:where(.page-tasten) .key.on .cap { font-weight: 600; }
:where(.page-tasten) .key.dim { opacity: 0.3; }
:where(.page-tasten) .key.active { background: var(--c); color: var(--page); }
:where(.page-tasten) .key.active .what { color: var(--page); }
:where(.page-tasten) .key .hold { position: absolute; top: 0.25rem; right: 0.3rem; font-size: 0.6rem; }

:where(.page-tasten) .mouse { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; padding: 0.9rem; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); }
:where(.page-tasten) .mouse-body { --u: 3.5rem; width: 8rem; display: grid; grid-template-columns: 1fr 1.7rem 1fr; gap: 0.25rem; }
:where(.page-tasten) .mouse-body .key { width: auto; height: 5rem; border-radius: 3px 3px 3px 3px; padding: 1.4rem 0.5rem 0.4rem; }
:where(.page-tasten) .mouse-body .key.right { border-radius: 3px 3px 3px 3px; }
:where(.page-tasten) .mouse-body .key.wheel { border-radius: 3px; padding: 0.5rem 0.25rem; align-items: center; text-align: center; height: 3.6rem; align-self: start; margin-top: 0.4rem; }
:where(.page-tasten) .mouse-body .key.wheel .what { font-size: 0.6rem; white-space: nowrap; }
:where(.page-tasten) .mouse-body .palm { grid-column: 1 / 4; height: 4.2rem; border: 1px solid var(--cap-edge); border-radius: 3px 3px 3px 3px; background: var(--cap-off); }
:where(.page-tasten) .mouse-label { font-family: var(--display); color: var(--muted); font-size: 0.9rem; letter-spacing: 0.08em; }

:where(.page-tasten) .detail { min-height: 3.4rem; border-left: 3px solid var(--detail-c, var(--line-gold)); border-radius: 0 3px 3px 0; background: var(--panel); padding: 0.6rem 1rem 0.6rem 1rem; color: var(--muted); }
:where(.page-tasten) .detail strong { color: var(--ink); font-weight: 600; }

:where(.page-tasten) .groups { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr)); gap: 1.5rem 2rem; }
:where(.page-tasten) .group h2 { font-family: var(--display); font-weight: normal; font-size: 1.35rem; letter-spacing: 0.04em; margin: 0 0 0.5rem; display: flex; align-items: center; gap: 0.5rem; color: var(--c); }
:where(.page-tasten) .group ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
:where(.page-tasten) .group li { display: grid; grid-template-columns: 8.5rem 1fr; gap: 0.75rem; padding: 0.45rem 0.3rem; border-top: 1px dotted var(--line); min-width: 0; }
:where(.page-tasten) .group li.hl { background: color-mix(in srgb, var(--c) 16%, transparent); }
:where(.page-tasten) kbd { font: 600 0.85rem var(--body); display: inline-block; padding: 0.05rem 0.45rem; border: 1px solid var(--cap-edge); border-bottom-width: 2px; border-radius: 3px; background: var(--cap); color: var(--ink); white-space: nowrap; justify-self: start; align-self: start; }
:where(.page-tasten) .group small { display: block; color: var(--muted); font-size: 0.95rem; }
:where(.page-tasten) .pad-box { margin-top: 2.5rem; padding-top: 1.5rem; border-top: 1px solid var(--line); }
:where(.page-tasten) .pad-title { font-family: var(--display); font-weight: normal; font-size: 1.6rem; letter-spacing: 0.04em; margin: 0 0 0.4rem; }
:where(.page-tasten) .pad-intro { color: var(--muted); margin: 0 0 1.2rem; max-width: 46rem; }
:where(.page-tasten) .note { border-top: 1px solid var(--line); padding-top: 1rem; color: var(--muted); display: grid; gap: 0.4rem; max-width: 46rem; }
:where(.page-tasten) .note b { color: var(--ink); font-weight: 600; }
@media (max-width: 40rem) { :where(.page-tasten) .board, :where(.page-tasten) .mouse-body { --u: 3rem; } }
@media (prefers-reduced-motion: no-preference) { :where(.page-tasten) .key, :where(.page-tasten) .legend button { transition: background-color 0.15s, opacity 0.15s; } }
</style>
