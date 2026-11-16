<!-- The footer of every page; the default slot adds a line after the copyright (handbook). -->
<script setup>
import { computed } from 'vue';
import SiteLink from './SiteLink.vue';
import { DISCORD_URL, SITE_TEXT } from '../site.js';
import { lang } from '../lang.js';

const props = defineProps({
    home: { type: Boolean, default: false },
    fixedLang: { type: String, default: '' },
});
const s = computed(() => SITE_TEXT[props.fixedLang || lang.value] || SITE_TEXT.de);
</script>

<template>
  <footer>
    <div class="wrap">
      <span>© Life In Wilderness</span>
      <slot />
      <nav>
        <SiteLink to="/tasten">{{ s.nav_keys }}</SiteLink>
        <SiteLink to="/handbuch">{{ s.nav_handbook }}</SiteLink>
        <SiteLink to="/kulissen">{{ s.nav_scenes }}</SiteLink>
        <a v-if="home" href="#top">{{ s.imprint }}</a>
        <SiteLink v-else to="/#top">{{ s.imprint }}</SiteLink>
        <a v-if="home" href="#top">{{ s.privacy }}</a>
        <SiteLink v-else to="/#top">{{ s.privacy }}</SiteLink>
        <a :href="DISCORD_URL" target="_blank" rel="noopener">Discord</a>
      </nav>
      <small>{{ s.disclaimer }} {{ s.credit_mark }}</small>
    </div>
  </footer>
</template>
