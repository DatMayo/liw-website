<!-- The floating bar of every page: mark, navigation (a menu on small screens), language switch, Discord. -->
<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import SiteLink from './SiteLink.vue';
import { DISCORD_URL, SITE_TEXT } from '../site.js';
import { lang, setLang } from '../lang.js';

const props = defineProps({
    home: { type: Boolean, default: false },     // on the start page the links are plain anchors
    current: { type: String, default: '' },      // 'keys' | 'handbook' | 'scenes': marked as the current page
    fixedLang: { type: String, default: '' },    // pages that exist once per language (trailer docs)
    langLinks: { type: Object, default: null },  // { de: '/…', en: '/…' }: language switch as links
});

const l = computed(() => props.fixedLang || lang.value);
const s = computed(() => SITE_TEXT[l.value] || SITE_TEXT.de);
const at = (id) => (props.home ? `#${id}` : `/#${id}`);
const page = (name) => (props.current === name ? 'page' : null);

const open = ref(false);
const scrolled = ref(false);
const toggle = () => { open.value = !open.value; };
const close = () => { open.value = false; };
const onKey = (ev) => { if (ev.key === 'Escape') close(); };
const onScroll = () => { scrolled.value = window.scrollY > 40; };

onMounted(() => {
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});
onUnmounted(() => {
    document.removeEventListener('keydown', onKey);
    window.removeEventListener('scroll', onScroll);
});
</script>

<template>
  <header id="bar" class="bar" :class="{ open, scrolled }">
    <a v-if="home" class="mark" href="#top"><img src="/brand/mark.svg" alt="" width="40" height="40">Life In Wilderness</a>
    <SiteLink v-else class="mark" to="/"><img src="/brand/mark.svg" alt="" width="40" height="40">Life In Wilderness</SiteLink>
    <button type="button" class="menu" :aria-expanded="String(open)" aria-controls="nav" @click="toggle">{{ s.nav_menu }}</button>
    <nav id="nav">
      <template v-if="home">
        <a :href="at('spiel')" @click="close">{{ s.nav_game }}</a>
        <a :href="at('arten')" @click="close">{{ s.nav_species }}</a>
        <a :href="at('einstieg')" @click="close">{{ s.nav_join }}</a>
        <a :href="at('regeln')" @click="close">{{ s.nav_rules }}</a>
        <a :href="at('entwicklung')" @click="close">{{ s.nav_dev }}</a>
      </template>
      <template v-else>
        <SiteLink :to="at('spiel')" @click="close">{{ s.nav_game }}</SiteLink>
        <SiteLink :to="at('arten')" @click="close">{{ s.nav_species }}</SiteLink>
        <SiteLink :to="at('einstieg')" @click="close">{{ s.nav_join }}</SiteLink>
        <SiteLink :to="at('regeln')" @click="close">{{ s.nav_rules }}</SiteLink>
        <SiteLink :to="at('entwicklung')" @click="close">{{ s.nav_dev }}</SiteLink>
      </template>
      <SiteLink to="/tasten" :aria-current="page('keys')" @click="close">{{ s.nav_keys }}</SiteLink>
      <SiteLink to="/handbuch" :aria-current="page('handbook')" @click="close">{{ s.nav_handbook }}</SiteLink>
      <SiteLink to="/kulissen" :aria-current="page('scenes')" @click="close">{{ s.nav_scenes }}</SiteLink>
      <a v-if="home" :href="at('faq')" @click="close">FAQ</a>
      <SiteLink v-else :to="at('faq')" @click="close">FAQ</SiteLink>
    </nav>
    <div v-if="langLinks" class="lang" role="group" aria-label="Sprache / Language">
      <SiteLink :to="langLinks.de" lang="de" :aria-current="l === 'de' ? 'page' : null">DE</SiteLink>
      <SiteLink :to="langLinks.en" lang="en" :aria-current="l === 'en' ? 'page' : null">EN</SiteLink>
    </div>
    <div v-else class="lang" role="group" aria-label="Sprache / Language">
      <button id="lang-de" type="button" data-lang="de" :aria-pressed="String(l === 'de')" @click="setLang('de')">DE</button>
      <button id="lang-en" type="button" data-lang="en" :aria-pressed="String(l === 'en')" @click="setLang('en')">EN</button>
    </div>
    <a class="discord" :href="DISCORD_URL" target="_blank" rel="noopener">Discord</a>
  </header>
</template>
