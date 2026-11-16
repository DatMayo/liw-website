<!-- Unknown address: prerendered as 404.html, which Vercel serves for every path that has no page. -->
<script setup>
import { computed } from 'vue';
import SiteBar from '../components/SiteBar.vue';
import SiteFooter from '../components/SiteFooter.vue';
import PageHero from '../components/PageHero.vue';
import SiteLink from '../components/SiteLink.vue';
import { lang } from '../lang.js';
import { usePageHead } from '../head.js';

const TEXT = {
    de: { eyebrow: 'Life In Wilderness · 404', title: 'Hier ist nichts', lede: 'Diese Seite gibt es nicht (mehr). Vielleicht hat ein Tier die Spur verwischt.', home: 'Zur Startseite' },
    en: { eyebrow: 'Life In Wilderness · 404', title: 'Nothing here', lede: 'This page does not exist (any more). Maybe an animal covered the trail.', home: 'Back to the homepage' },
};
const L = computed(() => TEXT[lang.value]);
usePageHead({
    path: null,
    title: computed(() => `${L.value.title} · Life In Wilderness`),
    description: 'Life In Wilderness – ein RedM-Roleplay-Server, auf dem jeder Spieler ein Tier ist.',
    noindex: true,
});
</script>

<template>
  <SiteBar />
  <PageHero>
    <div class="eyebrow">{{ L.eyebrow }}</div>
    <h1>{{ L.title }}</h1>
    <p class="lede">{{ L.lede }}</p>
    <p class="home"><SiteLink to="/">{{ L.home }}</SiteLink></p>
  </PageHero>
  <SiteFooter />
</template>

<style scoped>
.home { margin: 1.6rem 0 0; }
.home a { display: inline-block; background: var(--gold); color: var(--on-accent); text-decoration: none; border-radius: 3px; padding: 0.6rem 1.4rem; font-family: var(--display); letter-spacing: 0.08em; }
</style>
