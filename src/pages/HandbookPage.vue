<!-- Handbook page: search, contents with scroll spy, all chapters in one column. By default the
     player handbook (chapters: the modules in src/handbook/, see README.md; page texts and icons: data/handbook.js);
     the admin handbook (AdminHandbookPage.vue) passes its own chapters, texts and path, and its role choice in the
     slot "hero". -->
<script setup>
import { computed, nextTick, onMounted, onUnmounted, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SiteBar from '../components/SiteBar.vue';
import SiteFooter from '../components/SiteFooter.vue';
import PageHero from '../components/PageHero.vue';
import { lang } from '../lang.js';
import { usePageHead } from '../head.js';
import { CARET, CHAPTERS, ICONS, TEXT } from '../data/handbook.js';

const props = defineProps({
    chapters: { type: Array, default: () => CHAPTERS },
    text: { type: Object, default: () => TEXT },
    icons: { type: Object, default: () => ICONS },
    path: { type: String, default: '/handbuch' },
    description: { type: String, default: 'Das Spielerhandbuch von Life In Wilderness: alles zum Nachschlagen. / The Life In Wilderness player handbook: everything to look up.' },
    noindex: { type: Boolean, default: false },
    current: { type: String, default: 'handbook' },   // page marked in the site bar
});

const route = useRoute();
const router = useRouter();
const T = computed(() => props.text[lang.value]);
usePageHead({
    path: props.path,
    title: computed(() => `${T.value.page} · Life In Wilderness`),
    description: props.description,
    noindex: props.noindex,
    pageClass: 'page-handbuch',
});

const chapters = props.chapters;
const icons = props.icons;
const chapterOf = {};
chapters.forEach((ch) => ch.sections.forEach((s) => { chapterOf[s.id] = ch.id; }));

const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const tx = (value) => (value && typeof value === 'object' ? (value[lang.value] ?? value.de ?? value.en ?? '') : (value ?? ''));
const body = (section) => section[lang.value] ?? section.de ?? section.en ?? '';
// Wide tables scroll inside their own box.
const bodyHtml = (section) => body(section).replace(/<table\b/g, '<div class="hb-table-wrap"><table').replace(/<\/table>/g, '</table></div>');

const tools = ref(null);
const qEl = ref(null);
const resultsEl = ref(null);
const tocEl = ref(null);
const tocList = ref(null);
const menuBtn = ref(null);

const query = ref('');
const terms = ref([]);            // current search terms (normalised)
const hits = ref([]);             // current search results
const active = ref(-1);           // keyboard selection in the results
const resultsOpen = ref(false);
const current = ref(null);        // id of the section in view
const tocOpen = reactive({});     // chapter id -> sub-list open
const expanded = new Set();       // chapters opened by hand in the contents
const drawer = ref(false);        // contents as a drawer (phones)
const stuck = ref(false);
const showTop = ref(false);
let sectionTops = [];             // [{ id, chapter, top }] for the scroll spy
const indexes = {};               // search index per language, built once
let reduceMotion = false;

// ---------------------------------------------------------------- search helpers
// Case- and diacritic-insensitive: lower case, accents removed (ä = a), ß = ss. map[i] is the index of the
// original character that produced normalised character i, so matches can be marked in the original text.
function normChar(c) {
    const l = c.toLowerCase();
    if (l === 'ß') return 'ss';
    if (l === 'æ') return 'ae';
    if (l === 'œ') return 'oe';
    return l.normalize('NFD').replace(/[̀-ͯ]/g, '');
}
function normMap(str) {
    let out = '';
    const map = [];
    for (let i = 0; i < str.length; i++) {
        const n = normChar(str[i]);
        for (let k = 0; k < n.length; k++) { out += n[k]; map.push(i); }
    }
    map.push(str.length);
    return { out, map };
}
const norm = (str) => normMap(str).out;
const isWord = (c) => !!c && /[a-z0-9]/.test(c);

function stripHtml(html) {
    const tpl = document.createElement('template');
    tpl.innerHTML = String(html).replace(/<\/dt>/gi, ':</dt>').replace(/<(br|\/p|\/li|\/td|\/th|\/tr|\/h\d|\/div|\/dt|\/dd|\/ul|\/ol|\/table)\b[^>]*>/gi, ' $&');
    return tpl.content.textContent.replace(/\s+/g, ' ').trim();
}

function buildIndex() {
    if (indexes[lang.value]) return indexes[lang.value];
    const entries = [];
    chapters.forEach((ch, ci) => {
        const chTitle = tx(ch.title);
        ch.sections.forEach((s) => {
            const title = tx(s.title);
            const text = stripHtml(body(s));
            const nText = normMap(text);
            entries.push({ ci, ch: ch.id, sec: s.id, chTitle, title, text, nTitle: norm(title), nTags: norm(tx(s.tags)), nCh: norm(chTitle), nText: nText.out, map: nText.map });
        });
    });
    indexes[lang.value] = entries;
    return entries;
}

function countMatches(hay, term, limit) {
    let n = 0;
    let starts = 0;
    let from = 0;
    while (n < limit) {
        const i = hay.indexOf(term, from);
        if (i < 0) break;
        n++;
        if (!isWord(hay[i - 1])) starts++;
        from = i + term.length;
    }
    return { n, starts };
}

function search(q) {
    terms.value = [...new Set(norm(q).split(/[^a-z0-9]+/).filter(Boolean))];
    const ts = terms.value;
    if (!ts.length) return [];
    const results = [];
    buildIndex().forEach((e) => {
        let score = 0;
        for (const term of ts) {
            const t = e.nTitle.indexOf(term);
            const g = e.nTags.indexOf(term);
            const c = e.nCh.indexOf(term);
            const b = countMatches(e.nText, term, 8);
            if (t < 0 && g < 0 && c < 0 && b.n === 0) return;
            if (t >= 0) score += isWord(e.nTitle[t - 1]) ? 40 : 25;
            if (g >= 0) score += isWord(e.nTags[g - 1]) ? 12 : 16;
            if (c >= 0) score += 5;
            // Body: whole words and word starts weigh much more than hits inside a word ("bar" in "sichtbar").
            score += b.starts * 3 + (b.n - b.starts) * 0.5;
        }
        if (ts.every((term) => e.nTitle.includes(term))) score += 20;
        if (e.nTitle === ts.join(' ')) score += 30;
        results.push({ e, score });
    });
    results.sort((a, b) => b.score - a.score || a.e.ci - b.e.ci);
    return results.map((r) => r.e);
}

// Ranges [start, end) of the terms in the original text of a normalised string with its map.
function ranges(n, map, from = 0, to = n.length) {
    const found = [];
    terms.value.forEach((term) => {
        let i = n.indexOf(term, from);
        while (i >= 0 && i < to) {
            found.push([map[i], map[Math.min(i + term.length, map.length - 1)]]);
            i = n.indexOf(term, i + term.length);
        }
    });
    found.sort((a, b) => a[0] - b[0]);
    const merged = [];
    found.forEach((r) => {
        const last = merged[merged.length - 1];
        if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]); else merged.push([...r]);
    });
    return merged;
}

function markText(text, rs, offset = 0) {
    let out = '';
    let at = 0;
    rs.forEach(([a, b]) => {
        a -= offset; b -= offset;
        if (b <= 0 || a >= text.length) return;
        a = Math.max(a, at); b = Math.min(b, text.length);
        if (b <= a) return;
        out += `${escapeHtml(text.slice(at, a))}<mark>${escapeHtml(text.slice(a, b))}</mark>`;
        at = b;
    });
    return out + escapeHtml(text.slice(at));
}

function snippet(e) {
    const SPAN = 150;
    let first = -1;
    terms.value.forEach((term) => { const i = e.nText.indexOf(term); if (i >= 0 && (first < 0 || i < first)) first = i; });
    if (first < 0) {
        const text = e.text.length > SPAN ? `${e.text.slice(0, SPAN).replace(/\s+\S*$/, '')} …` : e.text;
        return escapeHtml(text);
    }
    const origFirst = e.map[first];
    let start = Math.max(0, origFirst - 55);
    let end = Math.min(e.text.length, start + SPAN);
    if (start > 0) { const sp = e.text.indexOf(' ', start); if (sp >= 0 && sp < origFirst) start = sp + 1; }
    if (end < e.text.length) { const sp = e.text.lastIndexOf(' ', end); if (sp > origFirst) end = sp; }
    const piece = e.text.slice(start, end);
    const rs = ranges(e.nText, e.map).filter(([a, b]) => b > start && a < end);
    return `${start > 0 ? '… ' : ''}${markText(piece, rs, start)}${end < e.text.length ? ' …' : ''}`;
}

function highlightTitle(title) {
    const { out, map } = normMap(title);
    return markText(title, ranges(out, map));
}

// ---------------------------------------------------------------- contents
// Every chapter with its sections; with a search only the matching ones (quick filter).
const tocItems = computed(() => {
    const filter = terms.value.length ? new Set(hits.value.map((e) => e.sec)) : null;
    const items = [];
    chapters.forEach((ch) => {
        const secs = filter ? ch.sections.filter((s) => filter.has(s.id)) : ch.sections;
        if (filter && !secs.length) return;
        items.push({ ch, secs });
    });
    return items;
});

function renderToc() {
    const filtered = terms.value.length > 0;
    chapters.forEach((ch) => {
        tocOpen[ch.id] = filtered ? true : expanded.has(ch.id) || ch.sections.some((s) => s.id === current.value);
    });
    markCurrent();
}

function toggleChapter(id) {
    tocOpen[id] = !tocOpen[id];
    if (tocOpen[id]) expanded.add(id); else expanded.delete(id);
}

function markCurrent() {
    if (!current.value) return;
    const chId = chapterOf[current.value];
    if (!terms.value.length) {
        // Only the current chapter (and the ones opened by hand) stay open, so the list does not keep growing.
        chapters.forEach((ch) => { tocOpen[ch.id] = ch.id === chId || expanded.has(ch.id); });
    }
    nextTick(() => {
        const toc = tocEl.value;
        const link = tocList.value && tocList.value.querySelector(`a[data-sec="${CSS.escape(current.value || '')}"]`);
        if (!toc || !link) return;
        // Position of the entry inside the scrolling contents (offsetTop would count from the sticky contents
        // themselves since they are positioned, so the current entry could stay out of sight).
        const top = link.getBoundingClientRect().top - toc.getBoundingClientRect().top + toc.scrollTop;
        if (top < toc.scrollTop + 40 || top > toc.scrollTop + toc.clientHeight - 60) {
            toc.scrollTo({ top: Math.max(0, top - toc.clientHeight / 3), behavior: reduceMotion ? 'instant' : 'smooth' });
        }
    });
}

// ---------------------------------------------------------------- scroll spy
function measure() {
    const y = window.scrollY;
    sectionTops = [];
    chapters.forEach((ch) => ch.sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) sectionTops.push({ id: s.id, chapter: ch.id, top: el.getBoundingClientRect().top + y });
    }));
    document.documentElement.style.setProperty('--bar-h', `${chromeH()}px`);
}

// Height of the fixed bar plus the sticky search strip: section headings must land below both.
function barBottom() {
    const el = document.getElementById('bar');
    return el ? el.getBoundingClientRect().bottom : 0;
}
function chromeH() {
    const top = Math.round(barBottom() + 10);
    document.documentElement.style.setProperty('--tools-top', `${top}px`);
    return top + (tools.value ? tools.value.offsetHeight : 0) + 8;
}

const onStick = () => { if (tools.value) stuck.value = tools.value.getBoundingClientRect().top <= barBottom() + 12; };

let spyQueued = false;
function spy() {
    if (spyQueued) return;
    spyQueued = true;
    requestAnimationFrame(() => {
        spyQueued = false;
        const line = window.scrollY + chromeH() + 90;
        let found = null;
        for (const s of sectionTops) { if (s.top <= line) found = s.id; else break; }
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4 && sectionTops.length) {
            found = sectionTops[sectionTops.length - 1].id;
        }
        if (found !== current.value) { current.value = found; markCurrent(); }
        showTop.value = window.scrollY > 700;
    });
}

// ---------------------------------------------------------------- navigation
// A link to a section that does not exist (chapter not there yet) falls back to its chapter.
function resolve(id) {
    if (!id) return null;
    if (document.getElementById(id)) return id;
    const chapter = id.split('-')[0];
    return document.getElementById(chapter) ? chapter : null;
}
const hashId = () => decodeURIComponent(location.hash.slice(1));

function scrollToId(id, smooth) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: smooth && !reduceMotion ? 'smooth' : 'instant', block: 'start' });
}

function goTo(id, flash) {
    const target = resolve(id);
    if (!target) return;
    closeResults();
    closeToc();
    if (location.hash !== `#${target}`) router.push({ hash: `#${target}` });
    scrollToId(target, true);
    if (flash && terms.value.length) setTimeout(() => flashTerms(document.getElementById(target)), reduceMotion ? 0 : 350);
}

// Marks the search words in the section for a moment (only inside text the page renders as HTML).
function flashTerms(root) {
    if (!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: (n) => (n.parentElement.closest('.hb-anchor, svg') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    const marks = [];
    nodes.forEach((node) => {
        const { out, map } = normMap(node.data);
        const rs = ranges(out, map);
        if (!rs.length) return;
        const frag = document.createDocumentFragment();
        let at = 0;
        rs.forEach(([a, b]) => {
            if (a > at) frag.append(node.data.slice(at, a));
            const m = document.createElement('mark');
            m.className = 'hb-flash';
            m.textContent = node.data.slice(a, b);
            frag.append(m);
            marks.push(m);
            at = b;
        });
        if (at < node.data.length) frag.append(node.data.slice(at));
        node.replaceWith(frag);
    });
    if (!marks.length) return;
    setTimeout(() => marks.forEach((m) => m.classList.add('fade')), 2600);
    setTimeout(() => {
        marks.forEach((m) => { const parent = m.parentNode; if (parent) { m.replaceWith(m.textContent); parent.normalize(); } });
    }, 3600);
}

// ---------------------------------------------------------------- search UI
const shownHits = computed(() => hits.value.slice(0, 40));

function openResults() {
    active.value = -1;
    if (!terms.value.length) { closeResults(); return; }
    resultsOpen.value = true;
    nextTick(() => { if (resultsEl.value) resultsEl.value.scrollTop = 0; });
}

function closeResults() {
    resultsOpen.value = false;
    active.value = -1;
}

function setActive(i) {
    const n = hits.value.length ? shownHits.value.length : 0;
    if (!n) return;
    active.value = (i + n) % n;
    nextTick(() => {
        const el = resultsEl.value && resultsEl.value.querySelector(`#hit-${active.value}`);
        if (el) el.scrollIntoView({ block: 'nearest' });
    });
}

let searchTimer = null;
function runSearch(show = true) {
    hits.value = search(query.value);
    if (show) openResults();
    renderToc();
}

function clearSearch() {
    query.value = '';
    runSearch(false);
    closeResults();
}

function onInput(ev) {
    query.value = ev.target.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(runSearch, 70);
}
function onFocus() { if (query.value.trim()) runSearch(); }
function onKeydown(ev) {
    const q = qEl.value;
    const open = resultsOpen.value;
    if (ev.key === 'ArrowDown') { ev.preventDefault(); if (!open && query.value.trim()) runSearch(); setActive(active.value + 1); }
    else if (ev.key === 'ArrowUp') { ev.preventDefault(); setActive(active.value - 1); }
    else if (ev.key === 'Enter') {
        ev.preventDefault();
        clearTimeout(searchTimer);
        if (!open) runSearch();
        const pick = hits.value[active.value >= 0 ? active.value : 0];
        if (pick) { goTo(pick.sec, true); q.blur(); }
    } else if (ev.key === 'Escape') {
        ev.preventDefault();
        if (query.value) clearSearch(); else { closeResults(); q.blur(); }
    }
}
function onClear() { clearSearch(); qEl.value.focus(); }
function onResultsClick(ev) {
    const link = ev.target.closest('a');
    if (!link) return;
    ev.preventDefault();
    const hit = link.dataset.i !== undefined ? hits.value[Number(link.dataset.i)] : null;
    goTo(hit ? hit.sec : link.dataset.jump || link.getAttribute('href').slice(1), !!hit);
    qEl.value.blur();
}

// ---------------------------------------------------------------- drawer (phones)
function openToc() {
    drawer.value = true;
    nextTick(() => {
        const list = tocList.value;
        const link = list && (list.querySelector('a.current') || list.querySelector('a'));
        if (link) link.focus({ preventScroll: true });
    });
}
function closeToc() { drawer.value = false; }
const toggleToc = () => (drawer.value ? closeToc() : openToc());
function toTop() {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'instant' : 'smooth' });
    router.replace({ path: route.path, query: route.query });
}

// ---------------------------------------------------------------- language
// Keep the reader on the same section: stay at the same offset from its top.
watch(lang, () => {
    const keep = current.value || resolve(hashId());
    const el = keep && document.getElementById(keep);
    const offset = el ? el.getBoundingClientRect().top : 0;
    nextTick(() => {
        if (query.value) hits.value = search(query.value);
        renderToc();
        const again = keep && document.getElementById(keep);
        if (again) window.scrollTo({ top: again.getBoundingClientRect().top + window.scrollY - offset, behavior: 'instant' });
        measure();
        spy();
    });
}, { flush: 'pre' });

// ---------------------------------------------------------------- events
function onDocClick(ev) {
    if (!ev.target.closest('#search')) closeResults();
    // Links from a section to another page of the site (e.g. /tasten) change the page without a reload.
    const page = ev.target.closest('.hb-body a[href^="/"]');
    if (page && !ev.defaultPrevented && ev.button === 0 && !ev.metaKey && !ev.ctrlKey && !ev.shiftKey && !ev.altKey) {
        ev.preventDefault();
        router.push(page.getAttribute('href'));
        return;
    }
    // In-page links (contents, chapter list, links between sections).
    const link = ev.target.closest('a[href^="#"]');
    if (!link || link.closest('#results') || ev.defaultPrevented || ev.button !== 0 || ev.metaKey || ev.ctrlKey || ev.shiftKey) return;
    const id = decodeURIComponent(link.getAttribute('href').slice(1));
    if (!id) return;
    ev.preventDefault();
    goTo(id, false);
}
function onDocKey(ev) {
    const q = qEl.value;
    const typing = ev.target.closest && ev.target.closest('input, textarea, select, [contenteditable="true"]');
    if ((ev.key === 'k' || ev.key === 'K') && (ev.ctrlKey || ev.metaKey)) {
        ev.preventDefault();
        q.focus();
        q.select();
    } else if (ev.key === '/' && !typing && !ev.ctrlKey && !ev.metaKey && !ev.altKey) {
        ev.preventDefault();
        q.focus();
        q.select();
    } else if (ev.key === 'Escape' && drawer.value) {
        closeToc();
        menuBtn.value.focus();
    }
}
const onResize = () => { measure(); spy(); onStick(); };
const onHash = () => { const id = resolve(hashId()); if (id) scrollToId(id, true); };
const onPop = () => {
    const id = resolve(hashId());
    if (id) scrollToId(id, false); else if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
};
const onScroll = () => { onStick(); spy(); };

onMounted(() => {
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onDocKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('hashchange', onHash);
    window.addEventListener('popstate', onPop);
    onStick();
    renderToc();
    measure();
    const target = resolve(hashId());
    if (target) scrollToId(target, false);
    spy();
    // Fonts change the heights: measure again and keep a deep link in place.
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
            if (!tools.value) return;
            const el = target && document.getElementById(target);
            const moved = el && Math.abs(el.getBoundingClientRect().top - chromeH()) > 4;
            measure();
            if (moved) scrollToId(target, false);
            spy();
        });
    }
});
onUnmounted(() => {
    clearTimeout(searchTimer);
    document.removeEventListener('click', onDocClick);
    document.removeEventListener('keydown', onDocKey);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('hashchange', onHash);
    window.removeEventListener('popstate', onPop);
    document.documentElement.style.removeProperty('--bar-h');
    document.documentElement.style.removeProperty('--tools-top');
});
</script>

<template>
  <SiteBar :current="current" />

  <PageHero aria-labelledby="hb-title">
    <div class="eyebrow">{{ T.eyebrow }}</div>
    <h1 id="hb-title">{{ T.title }}</h1>
    <p class="lede" v-html="T.intro"></p>
    <slot name="hero" />
  </PageHero>

  <div id="hb-tools" ref="tools" class="hb-tools" :class="{ stuck }">
    <button id="menu-btn" ref="menuBtn" type="button" class="menu-btn" aria-controls="toc" :aria-expanded="String(drawer)" @click="toggleToc">
      <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg><span>{{ T.toc }}</span>
    </button>
    <div id="search" class="search" :class="{ 'has-q': query.length > 0 }" role="search">
      <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5L21 21" /></svg>
      <label class="sr" for="q">{{ T.search_label }}</label>
      <input id="q" ref="qEl" :value="query" type="search" autocomplete="off" spellcheck="false" enterkeyhint="search" :placeholder="T.search_ph"
        role="combobox" aria-autocomplete="list" :aria-expanded="String(resultsOpen)" aria-controls="results"
        :aria-activedescendant="resultsOpen && active >= 0 ? `hit-${active}` : null"
        @input="onInput" @focus="onFocus" @keydown="onKeydown">
      <kbd class="keyhint" aria-hidden="true">/</kbd>
      <button id="clear" type="button" class="clear" :aria-label="T.clear" @click="onClear">×</button>
      <div id="results" ref="resultsEl" class="results" role="listbox" :hidden="!resultsOpen" @mousedown.prevent @click="onResultsClick">
        <template v-if="resultsOpen">
          <div v-if="!hits.length" class="none"><span>{{ T.none(query.trim()) }}</span><small v-html="T.none_hint"></small></div>
          <template v-else>
            <div class="count">{{ T.hits(hits.length) }}</div>
            <a v-for="(e, i) in shownHits" :id="`hit-${i}`" :key="e.sec" class="hit" :class="{ active: i === active }" role="option" :href="`#${e.sec}`" :data-i="i" :aria-selected="String(i === active)">
              <span class="where">{{ e.chTitle }} ›</span>
              <span class="t" v-html="highlightTitle(e.title)"></span>
              <span class="snip" v-html="snippet(e)"></span>
            </a>
          </template>
        </template>
      </div>
    </div>
  </div>

  <div class="layout">
    <aside id="toc" ref="tocEl" class="toc" :class="{ open: drawer }" :aria-label="T.toc">
      <div class="toc-head"><span>{{ T.toc }}</span><button id="toc-close" type="button" :aria-label="T.close" @click="closeToc">×</button></div>
      <ol id="toc-list" ref="tocList">
        <li v-for="{ ch, secs } in tocItems" :key="ch.id" class="toc-ch" :class="{ current: current && chapterOf[current] === ch.id }" :data-ch="ch.id">
          <div class="toc-row">
            <a :href="`#${ch.id}`"><svg class="ico" viewBox="0 0 32 32" aria-hidden="true" v-html="icons[ch.icon] || icons._"></svg><span>{{ tx(ch.title) }}</span></a>
            <button type="button" :aria-expanded="String(!!tocOpen[ch.id])" :aria-controls="`toc-${ch.id}`" :aria-label="tx(ch.title)" @click="toggleChapter(ch.id)" v-html="CARET"></button>
          </div>
          <ol :id="`toc-${ch.id}`" class="toc-secs" :hidden="!tocOpen[ch.id]">
            <li v-for="s in secs" :key="s.id"><a :href="`#${s.id}`" :data-sec="s.id" :class="{ current: s.id === current }" :aria-current="s.id === current ? 'location' : null">{{ tx(s.title) }}</a></li>
          </ol>
        </li>
        <li v-if="!tocItems.length" class="toc-none">{{ T.toc_none }}</li>
      </ol>
    </aside>
    <div id="scrim" class="scrim" :class="{ show: drawer }" @click="closeToc"></div>
    <main id="content" class="content">
      <p v-if="!chapters.length" class="state">{{ T.empty }}</p>
      <section v-for="ch in chapters" :id="ch.id" :key="ch.id" class="hb-chapter" :aria-labelledby="`h-${ch.id}`">
        <h2 :id="`h-${ch.id}`"><svg class="ico" viewBox="0 0 32 32" aria-hidden="true" v-html="icons[ch.icon] || icons._"></svg><span>{{ tx(ch.title) }}</span></h2>
        <article v-for="s in ch.sections" :id="s.id" :key="s.id" class="hb-section" :aria-labelledby="`h-${s.id}`">
          <h3 :id="`h-${s.id}`"><span v-html="escapeHtml(tx(s.title))"></span><a class="hb-anchor" :href="`#${s.id}`" :aria-label="T.anchor">#</a></h3>
          <div class="hb-body" v-html="bodyHtml(s)"></div>
        </article>
      </section>
    </main>
  </div>

  <button id="to-top" type="button" class="to-top" :class="{ show: showTop }" :aria-label="T.top" @click="toTop">
    <svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg><span>{{ T.top }}</span>
  </button>

  <SiteFooter><span>{{ T.footer }}</span></SiteFooter>
</template>

<style>
/* Layout: a sticky bar with the search, then a reference book - table of contents on the left, all chapters in one column. */
:root:where(.page-handbuch) { --bar-h: 8rem; --tools-top: 5rem; }
:where(.page-handbuch) * { box-sizing: border-box; }
html:where(.page-handbuch) { scroll-behavior: smooth; scroll-padding-top: calc(var(--bar-h) + 1rem); overflow-anchor: none; }
:where(.page-handbuch) a { color: var(--gold-hi); }
:where(.page-handbuch) a:focus-visible, :where(.page-handbuch) button:focus-visible, :where(.page-handbuch) input:focus-visible { outline: 2px solid var(--gold); outline-offset: 2px; }
:where(.page-handbuch) h1, :where(.page-handbuch) h2, :where(.page-handbuch) h3 { letter-spacing: 0.03em; text-wrap: balance; }
:where(.page-handbuch) .sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
:where(.page-handbuch) svg.ico { fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; flex: none; }

:where(.page-handbuch) .menu-btn { display: none; flex: none; align-items: center; gap: 0.4rem; font: 1rem var(--old); color: var(--ink); background: rgba(var(--panel-rgb), 0.94); border: 1px solid var(--line-gold); border-radius: 3px; padding: 0.55rem 0.9rem; cursor: pointer; box-shadow: 0 0.6rem 1.6rem rgba(var(--ink-rgb), 0.2); }
:where(.page-handbuch) .menu-btn svg { width: 1.1rem; height: 1.1rem; }

/* Search: a sticky strip right under the floating bar */
:where(.page-handbuch) .hb-tools { position: sticky; top: var(--tools-top); z-index: 20; display: flex; gap: 0.6rem; align-items: center; width: min(1180px, 100% - var(--gutter-l) - var(--gutter-r)); margin: 0.5rem auto 0; }
:where(.page-handbuch) .search { position: relative; flex: 1; min-width: 0; }
/* Once stuck, a dark band behind bar and search keeps the scrolling text from showing between them. */
:where(.page-handbuch) .hb-tools::before { content: ''; position: absolute; z-index: -1; left: calc(50% - 50vw); right: calc(50% - 50vw); top: calc(-1 * var(--tools-top)); bottom: -0.6rem;
  background: linear-gradient(180deg, var(--page) 85%, rgba(var(--page-rgb), 0)); opacity: 0; transition: opacity 0.2s; pointer-events: none; }
:where(.page-handbuch) .hb-tools.stuck::before { opacity: 1; }
:where(.page-handbuch) .search > svg { position: absolute; z-index: 1; left: 1rem; top: 50%; width: 1.15rem; height: 1.15rem; transform: translateY(-50%); color: var(--gold); pointer-events: none; }
:where(.page-handbuch) .search input { width: 100%; font: 1.08rem var(--body); color: var(--ink); background: rgba(var(--panel-rgb), 0.94); border: 1px solid var(--line-gold); border-radius: 3px;
  padding: 0.7rem 3rem 0.7rem 2.8rem; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); box-shadow: 0 0.6rem 1.6rem rgba(var(--ink-rgb), 0.2); -webkit-appearance: none; appearance: none; }
:where(.page-handbuch) .search input::placeholder { color: var(--muted); opacity: 1; }
:where(.page-handbuch) .search input:focus { outline: none; border-color: var(--gold); background: var(--panel-2); }
:where(.page-handbuch) .search input::-webkit-search-cancel-button { -webkit-appearance: none; }
:where(.page-handbuch) .search .keyhint { position: absolute; right: 0.9rem; top: 50%; transform: translateY(-50%); pointer-events: none; }
:where(.page-handbuch) .search .clear { position: absolute; right: 0.6rem; top: 50%; transform: translateY(-50%); background: none; border: 0; color: var(--muted); font-size: 1.4rem; line-height: 1; padding: 0.2rem 0.45rem; cursor: pointer; }
:where(.page-handbuch) .search .clear:hover { color: var(--gold-hi); }
:where(.page-handbuch) .search.has-q .keyhint, :where(.page-handbuch) .search:not(.has-q) .clear, :where(.page-handbuch) .search:focus-within .keyhint { display: none; }
:where(.page-handbuch) .results { position: absolute; top: calc(100% + 0.4rem); left: 0; right: 0; z-index: 31; background: var(--panel); border: 1px solid var(--line-gold); border-radius: 3px;
  max-height: min(70vh, 36rem); overflow-y: auto; overscroll-behavior: contain; box-shadow: 0 1rem 2.5rem rgba(var(--ink-rgb), 0.25); }
:where(.page-handbuch) .results[hidden] { display: none; }
:where(.page-handbuch) .results .count { padding: 0.45rem 0.9rem; font-size: 0.9rem; color: var(--muted); border-bottom: 1px solid var(--line); }
:where(.page-handbuch) .hit { display: block; padding: 0.6rem 0.9rem 0.65rem; border-bottom: 1px dotted var(--line); border-left: 3px solid transparent; color: var(--ink); text-decoration: none; }
:where(.page-handbuch) .hit:last-child { border-bottom: 0; }
:where(.page-handbuch) .hit .where { display: block; font-family: var(--old); font-size: 0.88rem; color: var(--muted); }
:where(.page-handbuch) .hit .t { display: block; font-weight: 600; font-size: 1.08rem; }
:where(.page-handbuch) .hit .snip { display: block; font-size: 0.97rem; color: var(--soft); line-height: 1.45; overflow-wrap: anywhere; }
:where(.page-handbuch) .hit.active, :where(.page-handbuch) .hit:hover { background: var(--panel-2); border-left-color: var(--gold); }
:where(.page-handbuch) .none { padding: 0.9rem; color: var(--soft); display: grid; gap: 0.3rem; }
:where(.page-handbuch) .none small { color: var(--muted); font-size: 0.97rem; }
:where(.page-handbuch) mark { background: rgba(var(--brass-rgb), 0.35); color: inherit; padding: 0 0.06em; border-radius: 2px; }
:where(.page-handbuch) mark.hb-flash { background: var(--gold); color: var(--page); transition: background-color 0.8s, color 0.8s; }
:where(.page-handbuch) mark.hb-flash.fade { background: transparent; color: inherit; }

/* Chapters as cards below the head */
:where(.page-handbuch) .page-hero .lede kbd { font-size: 0.8rem; color: #22302a; background: #e4d8b9; border-color: #a87f35; }

/* Book: contents + text */
:where(.page-handbuch) .layout { width: min(1180px, 100% - var(--gutter-l) - var(--gutter-r)); margin: 1.5rem auto 0; padding: 0 0 1rem; display: grid; grid-template-columns: 16.5rem minmax(0, 1fr); gap: 3rem; align-items: start; }
:where(.page-handbuch) .toc { position: sticky; top: calc(var(--bar-h) + 1rem); max-height: calc(100vh - var(--bar-h) - 2rem); overflow-y: auto; overscroll-behavior: contain; padding: 1.5rem 0.5rem 1rem 0; scrollbar-width: thin; scrollbar-color: var(--cap-edge) transparent; }
:where(.page-handbuch) .toc-head { display: flex; justify-content: space-between; align-items: center; font-family: var(--display); letter-spacing: 0.12em; color: var(--gold); font-size: 0.9rem; margin-bottom: 0.5rem; }
:where(.page-handbuch) .toc-head button { display: none; background: none; border: 0; color: var(--muted); font-size: 1.5rem; line-height: 1; cursor: pointer; padding: 0 0.3rem; }
:where(.page-handbuch) .toc ol { list-style: none; margin: 0; padding: 0; }
:where(.page-handbuch) .toc-row { display: flex; align-items: center; gap: 0.25rem; }
:where(.page-handbuch) .toc-row a { flex: 1; min-width: 0; display: flex; align-items: center; gap: 0.5rem; padding: 0.3rem 0.2rem; color: var(--ink); text-decoration: none; font-family: var(--old); font-size: 1.02rem; line-height: 1.25; }
:where(.page-handbuch) .toc-row a svg { width: 1.15rem; height: 1.15rem; color: var(--gold); }
:where(.page-handbuch) .toc-row a:hover { color: var(--gold-hi); }
:where(.page-handbuch) .toc-row button { flex: none; width: 1.8rem; height: 1.8rem; display: grid; place-items: center; background: none; border: 0; color: var(--muted); cursor: pointer; }
:where(.page-handbuch) .toc-row button svg { width: 0.9rem; height: 0.9rem; transition: transform 0.15s; }
:where(.page-handbuch) .toc-row button[aria-expanded="true"] svg { transform: rotate(90deg); }
:where(.page-handbuch) .toc-secs { margin: 0 0 0.4rem 0.75rem !important; border-left: 1px solid var(--line); }
:where(.page-handbuch) .toc-secs[hidden] { display: none; }
:where(.page-handbuch) .toc-secs a { display: block; padding: 0.18rem 0.5rem 0.18rem 0.8rem; margin-left: -1px; border-left: 2px solid transparent; color: var(--muted); text-decoration: none; font-size: 0.98rem; line-height: 1.3; }
:where(.page-handbuch) .toc-secs a:hover { color: var(--ink); }
:where(.page-handbuch) .toc-secs a.current { color: var(--gold-hi); border-left-color: var(--gold); }
:where(.page-handbuch) .toc-ch.current > .toc-row a { color: var(--gold-hi); }
:where(.page-handbuch) .toc .toc-none { color: var(--muted); font-size: 0.98rem; padding: 0.3rem 0.2rem; }
:where(.page-handbuch) .scrim { display: none; }

:where(.page-handbuch) .content { min-width: 0; max-width: 47rem; }
:where(.page-handbuch) .state { padding: 2rem 0; color: var(--muted); }
:where(.page-handbuch) .hb-chapter { padding-top: 2.5rem; }
:where(.page-handbuch) .hb-chapter + .hb-chapter { margin-top: 2.5rem; border-top: 1px solid var(--line); }
:where(.page-handbuch) .hb-chapter > h2 { display: flex; align-items: center; gap: 0.8rem; font-size: clamp(1.9rem, 4.5vw, 2.5rem); line-height: 1.1; }
:where(.page-handbuch) .hb-chapter > h2 svg { width: 2.4rem; height: 2.4rem; color: var(--gold); }
:where(.page-handbuch) .hb-section { margin-top: 2.1rem; }
:where(.page-handbuch) .hb-section > h3 { font-size: 1.45rem; line-height: 1.2; color: var(--ink); display: flex; align-items: baseline; gap: 0.5rem; }
:where(.page-handbuch) .hb-anchor { font-family: var(--body); font-size: 1rem; color: var(--muted); text-decoration: none; opacity: 0; transition: opacity 0.15s; }
:where(.page-handbuch) .hb-section:hover .hb-anchor, :where(.page-handbuch) .hb-anchor:focus-visible { opacity: 1; }
:where(.page-handbuch) .hb-section:target > h3 { color: var(--gold-hi); }
:where(.page-handbuch) .hb-body { overflow-wrap: break-word; }
:where(.page-handbuch) .hb-body > :first-child { margin-top: 0.6rem; }
:where(.page-handbuch) .hb-body p, :where(.page-handbuch) .hb-body ul, :where(.page-handbuch) .hb-body ol, :where(.page-handbuch) .hb-body dl { margin: 0.7rem 0 0; }
:where(.page-handbuch) .hb-body ul, :where(.page-handbuch) .hb-body ol { padding-left: 1.35rem; }
:where(.page-handbuch) .hb-body li { margin-top: 0.25rem; }
:where(.page-handbuch) .hb-body li::marker { color: var(--gold); }
:where(.page-handbuch) .hb-body strong, :where(.page-handbuch) .hb-body b { font-weight: 600; color: var(--ink); }
:where(.page-handbuch) .hb-body dl { display: grid; grid-template-columns: minmax(7rem, max-content) minmax(0, 1fr); gap: 0.45rem 1.1rem; }
:where(.page-handbuch) .hb-body dt { font-weight: 600; color: var(--gold-hi); }
:where(.page-handbuch) .hb-body dd { margin: 0; color: var(--soft); }
:where(.page-handbuch) .hb-body code { font-family: ui-monospace, 'Cascadia Mono', Consolas, monospace; font-size: 0.88rem; background: rgba(var(--ink-rgb), 0.07); padding: 0.1rem 0.35rem; color: var(--gold-hi); overflow-wrap: anywhere; }
:where(.page-handbuch) .hb-table-wrap { overflow-x: auto; margin: 0.9rem 0 0; }
:where(.page-handbuch) .hb-table { border-collapse: collapse; width: 100%; font-size: 1.02rem; line-height: 1.4; }
:where(.page-handbuch) .hb-table th { text-align: left; font-family: var(--old); font-weight: 400; color: var(--gold); border-bottom: 1px solid var(--line); padding: 0.4rem 0.7rem 0.4rem 0; }
:where(.page-handbuch) .hb-table td { border-bottom: 1px dotted var(--line); padding: 0.45rem 0.7rem 0.45rem 0; vertical-align: top; }
:where(.page-handbuch) .hb-table tr:last-child td { border-bottom: 0; }
:where(.page-handbuch) kbd { font: 600 0.85rem var(--body); display: inline-block; padding: 0.02rem 0.42rem; border: 1px solid var(--cap-edge); border-bottom-width: 2px; border-radius: 3px; background: var(--cap); color: var(--ink); white-space: nowrap; line-height: 1.4; }
:where(.page-handbuch) .hb-tip, :where(.page-handbuch) .hb-warn { margin: 1rem 0 0; padding: 0.75rem 1rem 0.8rem 1.1rem; background: var(--panel); border-radius: 0 3px 3px 0; border-left: 3px solid var(--moss); }
:where(.page-handbuch) .hb-warn { border-left-color: var(--rust); }
:where(.page-handbuch) .hb-tip::before, :where(.page-handbuch) .hb-warn::before { display: block; font-family: var(--display); letter-spacing: 0.12em; font-size: 0.82rem; color: var(--moss); content: 'Tipp'; }
:where(.page-handbuch) .hb-warn::before { color: var(--rust); content: 'Achtung'; }
html:where(.page-handbuch):lang(en) .hb-tip::before { content: 'Tip'; }
html:where(.page-handbuch):lang(en) .hb-warn::before { content: 'Warning'; }
:where(.page-handbuch) .hb-tip > :first-child, :where(.page-handbuch) .hb-warn > :first-child { margin-top: 0.15rem; }

:where(.page-handbuch) .to-top { position: fixed; right: var(--gutter-r); bottom: calc(1rem + env(safe-area-inset-bottom, 0px)); z-index: 25; display: flex; align-items: center; gap: 0.4rem;
  font: 0.95rem var(--old); color: var(--ink); background: var(--panel); border: 1px solid var(--line-gold); border-radius: 3px; padding: 0.45rem 0.9rem; cursor: pointer;
  opacity: 0; pointer-events: none; transform: translateY(0.5rem); transition: opacity 0.2s, transform 0.2s; }
:where(.page-handbuch) .to-top.show { opacity: 1; pointer-events: auto; transform: none; }
:where(.page-handbuch) .to-top:hover { border-color: var(--gold); color: var(--gold-hi); }
:where(.page-handbuch) .to-top svg { width: 1rem; height: 1rem; }

@media (max-width: 64rem) {
  :where(.page-handbuch) .layout { grid-template-columns: minmax(0, 1fr); gap: 0; }
  :where(.page-handbuch) .content { max-width: none; }
  :where(.page-handbuch) .menu-btn { display: inline-flex; }
  :where(.page-handbuch) .toc { position: fixed; top: 0; bottom: 0; left: 0; z-index: 41; width: min(21rem, 86vw); max-height: none; background: var(--panel);
    padding: calc(1rem + env(safe-area-inset-top, 0px)) 1rem 2rem max(1rem, env(safe-area-inset-left, 0px)); transform: translateX(-102%); visibility: hidden;
    transition: transform 0.2s, visibility 0s 0.2s; border-right: 1px solid var(--line); }
  :where(.page-handbuch) .toc.open { transform: none; visibility: visible; transition: transform 0.2s; }
  :where(.page-handbuch) .toc-head button { display: block; }
  :where(.page-handbuch) .scrim { position: fixed; inset: 0; z-index: 40; background: rgba(0, 0, 0, 0.55); }
  :where(.page-handbuch) .scrim.show { display: block; }
}
@media (max-width: 52rem) {
  :where(.page-handbuch) .search .keyhint { display: none; }
  :where(.page-handbuch) .hb-body dl { grid-template-columns: minmax(0, 1fr); gap: 0.1rem; }
  :where(.page-handbuch) .hb-body dd { margin-bottom: 0.5rem; }
}
@media (prefers-reduced-motion: reduce) { html:where(.page-handbuch) { scroll-behavior: auto; } :where(.page-handbuch) .toc, :where(.page-handbuch) .to-top, :where(.page-handbuch) mark.hb-flash { transition: none; } }
@media print {
  :where(.page-handbuch) .bar, :where(.page-handbuch) .hb-tools, :where(.page-handbuch) .toc, :where(.page-handbuch) .scrim, :where(.page-handbuch) .to-top, :where(.page-handbuch) footer { display: none !important; }
  html:where(.page-handbuch), :where(.page-handbuch) body { background: #fff; color: #000; }
  :where(.page-handbuch) .layout { display: block; padding: 0; }
  :where(.page-handbuch) .hb-chapter { break-before: page; }
  :where(.page-handbuch) .hb-body dd, :where(.page-handbuch) .hb-table td, :where(.page-handbuch) .hb-tip, :where(.page-handbuch) .hb-warn { color: #000; background: none; }
  :where(.page-handbuch) a { color: #000; }
}
</style>
