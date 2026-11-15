// Head of a page: title, description, canonical URL and og:url on the main domain (none without a path),
// optional noindex, and the page class on <html> that limits the page's own (unscoped) styles to that page.
import { computed, onBeforeMount, onUnmounted, unref } from 'vue';
import { useHead } from '@unhead/vue';
import { SITE_URL } from './site.js';

export function usePageHead({ path, title, description, ogTitle, ogDescription, noindex = false, pageClass = '' }) {
    const url = path ? `${SITE_URL}${path}` : null;
    const titleText = computed(() => unref(title));
    useHead({
        title: titleText,
        htmlAttrs: pageClass ? { class: pageClass } : {},
        link: url ? [{ rel: 'canonical', href: url }] : [],
        meta: [
            { name: 'description', content: description },
            ...(noindex ? [{ name: 'robots', content: 'noindex, nofollow' }] : []),
            { property: 'og:type', content: 'website' },
            ...(url ? [{ property: 'og:url', content: url }] : []),
            { property: 'og:title', content: computed(() => ogTitle || titleText.value) },
            { property: 'og:description', content: ogDescription || description },
        ],
    });
    // The head is updated asynchronously; the page's styles must apply before its first paint (and before the
    // router scrolls to an anchor), so the class is also set directly while the page is mounted.
    if (pageClass) {
        onBeforeMount(() => document.documentElement.classList.add(pageClass));
        onUnmounted(() => document.documentElement.classList.remove(pageClass));
    }
}
