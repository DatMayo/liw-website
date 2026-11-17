<!-- Admin handbook (/admin-handbuch): not linked, noindex. The handbook page with the chapters of src/adminbook/,
     filtered by the role chosen in the head (saved in the browser): a section shows from its `level` on, with a line
     naming the lowest role and the rights it needs. Changing the role draws the page anew. -->
<script setup>
import { computed, onMounted, ref } from 'vue';
import HandbookPage from './HandbookPage.vue';
import { lang } from '../lang.js';
import { CHAPTERS, ICONS, ROLES, TEXT } from '../data/adminbook.js';

const KEY = 'liw_admin_handbook_role';
const role = ref(5);
onMounted(() => {
    try {
        const saved = Number(localStorage.getItem(KEY));
        if (ROLES.some((r) => r.level === saved)) role.value = saved;
    } catch { /* private window */ }
});
function pick(level) {
    role.value = level;
    try { localStorage.setItem(KEY, String(level)); } catch { /* private window */ }
}

const T = computed(() => TEXT[lang.value]);
const roleName = (level) => {
    const r = ROLES.find((x) => x.level === level);
    return r ? r[lang.value] || r.de : '';
};

// The line above each section: lowest role and the rights.
function need(section) {
    const t = TEXT[lang.value];
    const rights = (section.rights || []).map((r) => `<code>${r}</code>`);
    const parts = [`${t.need} <strong>${roleName(section.level || 1)}</strong>`];
    if (rights.length) parts.push(`${rights.length > 1 ? t.rights : t.right} ${rights.join(section.anyRight ? ` ${t.any_of} ` : ', ')}`);
    return `<p class="ab-need">${parts.join(' · ')}</p>`;
}

const chapters = computed(() => CHAPTERS.map((ch) => ({
    ...ch,
    sections: ch.sections.filter((s) => (s.level || 1) <= role.value).map((s) => ({
        ...s,
        de: need(s) + (s.de || ''),
        en: need(s) + (s.en || s.de || ''),
    })),
})).filter((ch) => ch.sections.length));
</script>

<template>
  <HandbookPage :key="`${role}-${lang}`" :chapters="chapters" :text="TEXT" :icons="ICONS" path="/admin-handbuch" current="" noindex
    description="Admin-Handbuch von Life In Wilderness (nur für das Team).">
    <template #hero>
      <div class="ab-roles" role="radiogroup" :aria-label="T.role">
        <span class="ab-roles-label">{{ T.role }}</span>
        <button v-for="r in ROLES" :key="r.level" type="button" role="radio" :aria-checked="String(role === r.level)"
          :class="{ on: role === r.level }" @click="pick(r.level)">{{ r[lang] || r.de }}</button>
      </div>
    </template>
  </HandbookPage>
</template>

<style>
:where(.page-handbuch) .ab-roles { display: flex; flex-wrap: wrap; align-items: center; gap: 0.4rem; margin-top: 1.2rem; }
:where(.page-handbuch) .ab-roles { justify-content: center; }
/* The head is always the night sky: light on dark, whatever the page colours. */
:where(.page-handbuch) .ab-roles-label { margin-right: 0.3rem; font-family: var(--display); letter-spacing: 0.12em; font-size: 0.85rem; color: rgba(233, 225, 203, 0.7); text-transform: uppercase; }
:where(.page-handbuch) .ab-roles button { font: 0.95rem var(--body); color: #e9e1cb; background: rgba(233, 225, 203, 0.08); border: 1px solid rgba(228, 216, 185, 0.35); border-radius: 3px; padding: 0.4rem 0.8rem; cursor: pointer; }
:where(.page-handbuch) .ab-roles button:hover { border-color: #e4d8b9; background: rgba(233, 225, 203, 0.16); }
:where(.page-handbuch) .ab-roles button.on { background: #e4d8b9; border-color: #e4d8b9; color: #22302a; }
:where(.page-handbuch) .ab-need { margin: 0 0 0.6rem; font-size: 0.85rem; color: var(--muted); }
:where(.page-handbuch) .ab-need strong { color: var(--gold-hi); font-weight: normal; }
:where(.page-handbuch) .ab-need code { font-size: 0.82rem; padding: 0 0.3rem; border: 1px solid var(--line); border-radius: 2px; }
</style>
