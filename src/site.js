// Shared parts of all pages: texts of the bar and footer (DE/EN), the Discord invite, the connect address and
// the canonical domain. The bar, the footer and the pages import from here.
export const SITE_URL = 'https://www.playliw.com';
export const DISCORD_URL = 'https://discord.gg/playliw';
export const CONNECT_URL = 'https://cfx.re/join/4ggl8rq';
// Voice plugin for Mumble: vercel.json sends /voice to the latest GitHub release of DatMayo/liw-voice.
export const VOICE_URL = 'https://www.playliw.com/voice';

export const SITE_TEXT = {
    de: {
        nav_menu: 'Menü', nav_game: 'Das Spiel', nav_species: 'Arten', nav_join: 'Einstieg', nav_rules: 'Regeln',
        nav_dev: 'Entwicklung', nav_keys: 'Tasten', nav_handbook: 'Handbuch', nav_scenes: 'Einblicke',
        imprint: 'Impressum', privacy: 'Datenschutz',
        disclaimer: 'Life In Wilderness ist ein Fanprojekt und steht in keiner Verbindung zu Rockstar Games oder Take-Two Interactive.',
    },
    en: {
        nav_menu: 'Menu', nav_game: 'The game', nav_species: 'Species', nav_join: 'Join', nav_rules: 'Rules',
        nav_dev: 'Development', nav_keys: 'Controls', nav_handbook: 'Handbook', nav_scenes: 'Insights',
        imprint: 'Imprint', privacy: 'Privacy',
        disclaimer: 'Life In Wilderness is a fan project and is not affiliated with Rockstar Games or Take-Two Interactive.',
    },
};
