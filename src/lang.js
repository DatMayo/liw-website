// The site language (DE/EN). The prerendered HTML is German; in the browser the saved choice (localStorage
// key liw_lang) or the browser language takes over right after hydration. Every page shares it.
import { ref } from 'vue';

export const lang = ref('de');

export function detectLang() {
    let next = 'de';
    try {
        next = (navigator.language || 'de').toLowerCase().startsWith('de') ? 'de' : 'en';
        const saved = localStorage.getItem('liw_lang');
        if (saved === 'de' || saved === 'en') next = saved;
    } catch { /* private window or no storage */ }
    return next;
}

export function setLang(next) {
    if (next !== 'de' && next !== 'en') return;
    lang.value = next;
    try { localStorage.setItem('liw_lang', next); } catch { /* private window */ }
}
