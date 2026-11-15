import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    // The handbook chunk carries all chapters (the same text is in handbuch.html for search engines).
    build: { chunkSizeWarningLimit: 700 },
    ssgOptions: {
        // Every page gets its own HTML file (tasten.html, handbuch.html …); the catch-all route becomes 404.html,
        // which Vercel serves for unknown paths.
        dirStyle: 'flat',
        includedRoutes: (paths) => [...paths.filter((p) => !p.includes(':')), '/404'],
    },
});
