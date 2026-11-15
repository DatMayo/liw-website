<!-- A link to another page of the site: a plain <a> (no automatic aria-current or active classes) that the
     router handles, so the page changes without a reload. -->
<script setup>
defineOptions({ inheritAttrs: false });
defineProps({ to: { type: String, required: true } });
</script>

<template>
  <RouterLink v-slot="{ href, navigate }" :to="to" custom>
    <a v-bind="$attrs" :href="href" @click="navigate"><slot /></a>
  </RouterLink>
</template>
