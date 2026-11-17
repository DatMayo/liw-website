// The admin handbook (/admin-handbuch, not linked anywhere, noindex): texts of the page, the roles to filter
// by, and the chapters - every module in ../adminbook/ (same format as the player handbook, see README.md,
// plus per section `level` = the lowest role that has it and `rights` = the rights it needs).
import { ICONS as PLAYER_ICONS } from './handbook.js';

export const TEXT = {
  de: {
    eyebrow: 'Life In Wilderness · Admin-Handbuch', title: 'Admin-Handbuch',
    intro: 'Alles, was das Team im Admin-Menü, in den Werkzeugen und in der Weboberfläche tun kann – Schritt für Schritt. Wähle deine Rolle, dann siehst du nur, was du darfst. Suchen mit <kbd>/</kbd>.',
    search_label: 'Admin-Handbuch durchsuchen', search_ph: 'Suchen … z. B. Bann, Auszeit, Spawnpunkt',
    clear: 'Suche leeren', home: '← Startseite', keys: 'Tastenbelegung', toc: 'Inhalt', close: 'Schließen', chapters: 'Kapitel',
    top: 'Nach oben', loading: 'Das Handbuch lädt …', empty: 'Für diese Rolle gibt es hier nichts.',
    sections: (n) => (n === 1 ? '1 Abschnitt' : `${n} Abschnitte`),
    hits: (n) => (n === 1 ? '1 Treffer' : `${n} Treffer`),
    none: (q) => `Nichts gefunden für „${q}“.`,
    none_hint: 'Versuch ein anderes Wort – oder wähl oben eine höhere Rolle, vielleicht gehört es zu Rechten, die deine Rolle nicht hat.',
    toc_none: 'Keine passenden Abschnitte.', anchor: 'Link zu diesem Abschnitt',
    footer: 'Nur für das Team. Bitte nicht weitergeben.',
    page: 'Admin-Handbuch',
    role: 'Meine Rolle', need: 'Ab', right: 'Recht', rights: 'Rechte', any_of: 'oder',
  },
  en: {
    eyebrow: 'Life In Wilderness · Admin handbook', title: 'Admin handbook',
    intro: 'Everything the team can do in the admin menu, the tools and the web interface – step by step. Pick your role and you only see what you may do. Search with <kbd>/</kbd>. (The chapters are in German for now.)',
    search_label: 'Search the admin handbook', search_ph: 'Search … e.g. ban, time-out, spawn point',
    clear: 'Clear search', home: '← Homepage', keys: 'Key bindings', toc: 'Contents', close: 'Close', chapters: 'Chapters',
    top: 'Back to top', loading: 'Loading the handbook …', empty: 'Nothing here for this role.',
    sections: (n) => (n === 1 ? '1 section' : `${n} sections`),
    hits: (n) => (n === 1 ? '1 result' : `${n} results`),
    none: (q) => `Nothing found for “${q}”.`,
    none_hint: 'Try another word – or pick a higher role above, it may belong to rights your role does not have.',
    toc_none: 'No matching sections.', anchor: 'Link to this section',
    footer: 'For the team only. Please do not pass it on.',
    page: 'Admin handbook',
    role: 'My role', need: 'From', right: 'Right', rights: 'Rights', any_of: 'or',
  },
};

// Roles as in liw_admin Config.Roles; 5 = single rights above every role (account transfer).
export const ROLES = [
  { level: 1, de: 'Tester', en: 'Tester' },
  { level: 2, de: 'Moderator', en: 'Moderator' },
  { level: 3, de: 'Admin', en: 'Admin' },
  { level: 4, de: 'Owner', en: 'Owner' },
  { level: 5, de: 'Alles (mit Sonderrechten)', en: 'Everything (with special rights)' },
];

export const ICONS = {
  ...PLAYER_ICONS,
  shield: '<path d="M16 4l10 4v7c0 7-4.5 11-10 13-5.5-2-10-6-10-13V8z"/><path d="M11.5 16l3 3 6-6"/>',
  gavel: '<path d="M14 6l8 8M10 10l8 8M12 8l6-6 8 8-6 6"/><path d="M15 15L5 25"/><path d="M4 28h12"/>',
  flag: '<path d="M8 28V4"/><path d="M8 5h16l-3 5 3 5H8"/>',
  tools: '<path d="M20 4a6 6 0 00-5.6 8.2L5 21.6 10.4 27l9.4-9.4A6 6 0 0028 12l-3.5 3.5-4-1-1-4L23 7a6 6 0 00-3-3z"/>',
  cursor: '<path d="M7 4l17 10-7.5 2L13 24z"/><circle cx="23" cy="24" r="4"/>',
  gear: '<circle cx="16" cy="16" r="4"/><path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M6.8 25.2l2.8-2.8M22.4 9.6l2.8-2.8"/>',
  person: '<circle cx="16" cy="10" r="5"/><path d="M6 28c1-6 5-9 10-9s9 3 10 9"/>',
};

const files = import.meta.glob('../adminbook/*.js', { eager: true, import: 'default' });

export const CHAPTERS = Object.keys(files).sort().map((k) => files[k])
    .filter((ch) => ch && typeof ch.id === 'string' && Array.isArray(ch.sections))
    .map((ch) => ({ ...ch, order: Number(ch.order) || 0 }))
    .sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
