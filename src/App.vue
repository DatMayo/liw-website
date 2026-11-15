<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue';
import { lang, detectLang } from './lang.js';

const route = useRoute();
// Pages that exist once per language (trailer docs) set meta.lang; all others follow the language switch.
useHead({
    htmlAttrs: { lang: computed(() => route.meta.lang || lang.value) },
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }],
});
// The prerendered HTML is German; the saved or browser language takes over once the page is hydrated.
onMounted(() => { lang.value = detectLang(); });
</script>

<template>
  <RouterView :key="route.path" />
</template>
