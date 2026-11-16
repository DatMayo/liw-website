<!-- Team documentation of the trailer tool (liw_cinematic), once per language: /trailer-werkzeug (DE) and
     /trailer-tool (EN). Deliberately linked nowhere and noindex. The text is plain HTML in src/content/. -->
<script setup>
import { computed } from 'vue';
import SiteBar from '../components/SiteBar.vue';
import SiteFooter from '../components/SiteFooter.vue';
import { usePageHead } from '../head.js';
import de from '../content/trailer-werkzeug.html?raw';
import en from '../content/trailer-tool.html?raw';

const props = defineProps({ doc: { type: String, default: 'de' } });
const HEAD = {
    de: {
        path: '/trailer-werkzeug', title: 'Trailer-Werkzeug · Life In Wilderness',
        description: 'Dokumentation des Trailer-Werkzeugs liw_cinematic: Szenen bauen, Darsteller, Schritte, Kamera, Aufnahme.',
    },
    en: {
        path: '/trailer-tool', title: 'Trailer tool · Life In Wilderness',
        description: 'Documentation of the trailer tool liw_cinematic: building scenes, actors, steps, camera, recording.',
    },
};
const head = HEAD[props.doc] || HEAD.de;
usePageHead({ ...head, noindex: true, pageClass: 'page-trailer' });
const html = computed(() => (props.doc === 'en' ? en : de));
</script>

<template>
  <SiteBar :fixed-lang="doc" :lang-links="{ de: '/trailer-werkzeug', en: '/trailer-tool' }" />
  <div class="trailer-doc" v-html="html"></div>
  <SiteFooter :fixed-lang="doc" />
</template>

<style>
/* Reference page of the trailer tool: table of contents on the left, the chapters on the right. */
:where(.page-trailer) .doc { width: min(1180px, 100% - var(--gutter-l) - var(--gutter-r)); margin: 0 auto; padding: 1rem 0 3rem; display: grid; grid-template-columns: 15rem minmax(0, 1fr); gap: 2.5rem; align-items: start; }
:where(.page-trailer) .toc { position: sticky; top: 5.5rem; max-height: calc(100vh - 7rem); overflow-y: auto; padding: 1rem 1.1rem; background: var(--panel); border: 1px solid var(--line); border-radius: var(--radius); }
:where(.page-trailer) .toc h2 { font-family: var(--display); font-weight: normal; font-size: 1.05rem; letter-spacing: 0.08em; margin: 0 0 0.5rem; color: var(--gold); }
:where(.page-trailer) .toc ol { margin: 0; padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.98rem; }
:where(.page-trailer) .toc a { color: var(--muted); text-decoration: none; }
:where(.page-trailer) .toc a:hover { color: var(--ink); }
:where(.page-trailer) .content { display: flex; flex-direction: column; gap: 2.75rem; min-width: 0; }
:where(.page-trailer) .content section { scroll-margin-top: 5.5rem; }
:where(.page-trailer) .content h2 { font-family: var(--display); font-weight: normal; font-size: clamp(1.6rem, 3vw, 2.1rem); letter-spacing: 0.03em; margin: 0 0 0.75rem; color: var(--gold); border-bottom: 1px solid var(--line); padding-bottom: 0.4rem; }
:where(.page-trailer) .content h3 { font-family: var(--display); font-weight: normal; font-size: 1.3rem; margin: 1.5rem 0 0.5rem; color: var(--ink); }
:where(.page-trailer) .content p, :where(.page-trailer) .content li { line-height: 1.6; color: var(--soft); }
:where(.page-trailer) .content p { margin: 0 0 0.8rem; }
:where(.page-trailer) .content ul, :where(.page-trailer) .content ol { margin: 0 0 0.9rem; padding-left: 1.4rem; }
:where(.page-trailer) .content li { margin: 0.2rem 0; }
:where(.page-trailer) .content strong { color: var(--ink); font-weight: 600; }
:where(.page-trailer) code { font-family: Consolas, 'Courier New', monospace; font-size: 0.88em; background: var(--panel-2); border: 1px solid var(--line); border-radius: 3px; padding: 0.05rem 0.35rem; color: var(--ink); }
:where(.page-trailer) pre { background: rgba(var(--ink-rgb), 0.06); border: 1px solid var(--line); border-radius: var(--radius); padding: 0.9rem 1rem; overflow-x: auto; margin: 0 0 1rem; }
:where(.page-trailer) .content p code, :where(.page-trailer) .content li code { overflow-wrap: anywhere; }
:where(.page-trailer) pre code { background: none; border: none; padding: 0; font-size: 0.85rem; line-height: 1.5; }
:where(.page-trailer) kbd { font: 600 0.85rem var(--body); display: inline-block; padding: 0.02rem 0.42rem; border: 1px solid var(--cap-edge); border-bottom-width: 2px; border-radius: 3px; background: var(--cap); color: var(--ink); white-space: nowrap; }
:where(.page-trailer) table { width: 100%; border-collapse: collapse; margin: 0 0 1rem; font-size: 0.98rem; }
:where(.page-trailer) th { text-align: left; color: var(--gold); font-weight: 600; padding: 0.45rem 0.6rem; border-bottom: 1px solid var(--line-gold, var(--line)); }
:where(.page-trailer) td { padding: 0.45rem 0.6rem; border-bottom: 1px solid var(--line); vertical-align: top; color: var(--soft); }
:where(.page-trailer) td:first-child { white-space: nowrap; }
:where(.page-trailer) .table-box { overflow-x: auto; }
:where(.page-trailer) figure { margin: 0 0 1.2rem; }
:where(.page-trailer) figure img { width: 100%; height: auto; display: block; border: 1px solid var(--line); border-radius: var(--radius); }
:where(.page-trailer) figcaption { color: var(--muted); font-size: 0.95rem; margin-top: 0.4rem; }
:where(.page-trailer) .box { border-left: 3px solid var(--gold); background: var(--panel); border-radius: 0 3px 3px 0; padding: 0.75rem 1rem; margin: 0 0 1rem; }
:where(.page-trailer) .box.warn { border-left-color: var(--rust); }
:where(.page-trailer) .box p:last-child { margin-bottom: 0; }
:where(.page-trailer) .steps { counter-reset: s; list-style: none; padding-left: 0; }
:where(.page-trailer) .steps > li { counter-increment: s; position: relative; padding-left: 2.4rem; margin: 0.6rem 0; }
:where(.page-trailer) .steps > li::before { content: counter(s); position: absolute; left: 0; top: 0.1rem; width: 1.7rem; height: 1.7rem; border-radius: 50%; display: grid; place-items: center; background: var(--panel-2); border: 1px solid var(--gold); color: var(--gold); font-size: 0.85rem; }
:where(.page-trailer) .timeline { font-family: Consolas, 'Courier New', monospace; font-size: 0.82rem; line-height: 1.45; }
:where(.page-trailer) .lang a { color: var(--muted); text-decoration: none; font-size: 0.85rem; letter-spacing: 0.08em; padding: 0.15rem 0.65rem; border-radius: 3px; }
:where(.page-trailer) .lang a[aria-current="page"] { background: var(--gold); color: var(--on-accent); }
@media (max-width: 62rem) { :where(.page-trailer) .doc { grid-template-columns: minmax(0, 1fr); } :where(.page-trailer) .toc { position: static; max-height: none; } }
</style>
