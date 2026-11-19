// Pages of the site. Every route is prerendered to its own HTML file (vite-ssg); see README.md.
// meta.ownScroll: the page scrolls to its anchors itself (handbook, simulations).
export const routes = [
    { path: '/', component: () => import('./pages/HomePage.vue') },
    { path: '/tasten', component: () => import('./pages/KeysPage.vue') },
    { path: '/handbuch', component: () => import('./pages/HandbookPage.vue'), meta: { ownScroll: true } },
    { path: '/status', component: () => import('./pages/StatusPage.vue') },
    { path: '/kulissen', component: () => import('./pages/ScenesPage.vue'), meta: { ownScroll: true } },
    { path: '/trailer-werkzeug', component: () => import('./pages/TrailerDocPage.vue'), props: { doc: 'de' }, meta: { lang: 'de' } },
    { path: '/trailer-tool', component: () => import('./pages/TrailerDocPage.vue'), props: { doc: 'en' }, meta: { lang: 'en' } },
    { path: '/:pathMatch(.*)*', component: () => import('./pages/NotFoundPage.vue') },
];

export function scrollBehavior(to, from, saved) {
    // Same page, new anchor: the browser (or the page itself) has already scrolled.
    if (to.path === from.path) return to.meta.ownScroll ? false : saved || false;
    if (to.hash && to.meta.ownScroll) return false;
    if (saved) return saved;
    return to.hash ? { el: to.hash } : { top: 0 };
}
