// Shared parts of all pages: texts of the bar and footer ([data-s]), Discord links, the menu on small
// screens and the darker bar once the page scrolls. Pages call LiwSite.apply(lang) when the language changes.
window.LiwSite = (() => {
    const DISCORD_URL = 'https://discord.gg/jzYN3zEEyz';
    const TEXT = {
        de: {
            nav_menu: 'Menü', nav_game: 'Das Spiel', nav_species: 'Arten', nav_join: 'Einstieg', nav_rules: 'Regeln',
            nav_dev: 'Entwicklung', nav_keys: 'Tasten', nav_handbook: 'Handbuch',
            imprint: 'Impressum', privacy: 'Datenschutz',
            disclaimer: 'Life In Wilderness ist ein Fanprojekt und steht in keiner Verbindung zu Rockstar Games oder Take-Two Interactive.',
        },
        en: {
            nav_menu: 'Menu', nav_game: 'The game', nav_species: 'Species', nav_join: 'Join', nav_rules: 'Rules',
            nav_dev: 'Development', nav_keys: 'Controls', nav_handbook: 'Handbook',
            imprint: 'Imprint', privacy: 'Privacy',
            disclaimer: 'Life In Wilderness is a fan project and is not affiliated with Rockstar Games or Take-Two Interactive.',
        },
    };

    function apply(lang) {
        const t = TEXT[lang] || TEXT.de;
        document.querySelectorAll('[data-s]').forEach((el) => { el.textContent = t[el.dataset.s] ?? ''; });
    }

    document.querySelectorAll('[data-discord]').forEach((a) => { a.href = DISCORD_URL; a.target = '_blank'; a.rel = 'noopener'; });

    const bar = document.getElementById('bar');
    if (bar) {
        const menu = bar.querySelector('.menu');
        const close = () => { bar.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); };
        menu.addEventListener('click', () => {
            const open = !bar.classList.contains('open');
            bar.classList.toggle('open', open);
            menu.setAttribute('aria-expanded', String(open));
        });
        bar.querySelectorAll('nav a').forEach((a) => a.addEventListener('click', close));
        document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') close(); });
        const onScroll = () => bar.classList.toggle('scrolled', window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    return { apply, DISCORD_URL };
})();
