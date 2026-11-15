// Texts of the handbook page (search, contents, footer), the chapter icons and the chapters themselves.
// Every file in src/handbook/ is one chapter (format in README.md); they are sorted by `order`.
export const TEXT = {
  de: {
    eyebrow: 'Life In Wilderness · Spielerhandbuch', title: 'Handbuch',
    intro: 'Alles, was du als Tier in der Wildnis wissen musst, zum Nachschlagen. Such nach einem Begriff (Taste <kbd>/</kbd>) oder stöbere in den Kapiteln.',
    search_label: 'Handbuch durchsuchen', search_ph: 'Suchen … z. B. Aas, Duftmarke',
    clear: 'Suche leeren', home: '← Startseite', keys: 'Tastenbelegung', toc: 'Inhalt', close: 'Schließen', chapters: 'Kapitel',
    top: 'Nach oben', loading: 'Das Handbuch lädt …', empty: 'Das Handbuch konnte nicht geladen werden. Lade die Seite bitte neu.',
    sections: (n) => (n === 1 ? '1 Abschnitt' : `${n} Abschnitte`),
    hits: (n) => (n === 1 ? '1 Treffer' : `${n} Treffer`),
    none: (q) => `Nichts gefunden für „${q}“.`,
    none_hint: 'Versuch ein anderes oder kürzeres Wort (z. B. „Revier“ statt „Reviereinnahme“) oder schau ins <a href="#help-glossary" data-jump="help-glossary">Glossar</a>.',
    toc_none: 'Keine passenden Abschnitte.', anchor: 'Link zu diesem Abschnitt',
    footer: 'Werte können sich mit dem Balancing ändern.',
    page: 'Handbuch',
  },
  en: {
    eyebrow: 'Life In Wilderness · Player handbook', title: 'Handbook',
    intro: 'Everything you need to know as an animal in the wild, ready to look up. Search for a term (key <kbd>/</kbd>) or browse the chapters.',
    search_label: 'Search the handbook', search_ph: 'Search … e.g. carrion, scent mark',
    clear: 'Clear search', home: '← Homepage', keys: 'Key bindings', toc: 'Contents', close: 'Close', chapters: 'Chapters',
    top: 'Back to top', loading: 'Loading the handbook …', empty: 'The handbook could not be loaded. Please reload the page.',
    sections: (n) => (n === 1 ? '1 section' : `${n} sections`),
    hits: (n) => (n === 1 ? '1 result' : `${n} results`),
    none: (q) => `Nothing found for “${q}”.`,
    none_hint: 'Try another or shorter word (e.g. “territory” instead of “territory claiming”) or have a look at the <a href="#help-glossary" data-jump="help-glossary">glossary</a>.',
    toc_none: 'No matching sections.', anchor: 'Link to this section',
    footer: 'Values can change with balancing.',
    page: 'Handbook',
  },
};

// Line icons (32 x 32, stroked like the pillars on the homepage), one per chapter icon name.
export const ICONS = {
  start: '<path d="M9 28V4"/><path d="M9 5h15l-3.5 4.5L24 14H9"/><path d="M5 28h8"/>',
  hud: '<circle cx="10" cy="20" r="6"/><circle cx="23" cy="21" r="4"/><path d="M10 14a6 6 0 016 6"/><path d="M23 17a4 4 0 014 4"/><path d="M5 7h22"/>',
  life: '<path d="M9 4h14M9 28h14"/><path d="M10 4c0 7 12 8 12 12s-12 5-12 12M22 4c0 7-12 8-12 12s12 5 12 12"/><path d="M13 25h6"/>',
  needs: '<path d="M16 4c-4 6-8 10-8 15a8 8 0 0016 0c0-5-4-9-8-15z"/><path d="M12 20a4 4 0 004 4"/>',
  food: '<circle cx="11" cy="21" r="4"/><circle cx="20" cy="23" r="4"/><circle cx="16" cy="14.5" r="4"/><path d="M16 10.5V6l5-2"/><path d="M16 6c-2-2-5-2-7 0"/>',
  health: '<path d="M16 27S5 20 5 12a5.5 5.5 0 0111-2.5A5.5 5.5 0 0127 12c0 8-11 15-11 15z"/><path d="M8.5 15h4l2-3 2.5 6 2-3h4.5"/>',
  disease: '<circle cx="16" cy="16" r="7"/><path d="M16 9V5M16 27v-4M9 16H5M27 16h-4M11 11L8.2 8.2M21 21l2.8 2.8M21 11l2.8-2.8M11 21l-2.8 2.8"/><circle cx="14" cy="14.5" r="1"/><circle cx="18.5" cy="17.5" r="1.3"/>',
  senses: '<path d="M3 16c4-6 8-9 13-9s9 3 13 9c-4 6-8 9-13 9s-9-3-13-9z"/><circle cx="16" cy="16" r="4"/>',
  combat: '<path d="M9 5c2.5 8 1.5 15-3 22M16 4c2.5 9 1.5 16-2 24M23 5c2.5 8 2 14-1 21"/>',
  voice: '<path d="M6 13v6M10 10v12M14 7v18M18 10v12M22 13v6M26 15v2"/>',
  species: '<path d="M16 17c-4 0-7 4-7 7 0 2.5 2.5 3.5 4 3 1.5-.4 2-1 3-1s1.5.6 3 1c1.5.5 4-.5 4-3 0-3-3-7-7-7z"/><ellipse cx="8" cy="13" rx="2.2" ry="2.8"/><ellipse cx="13" cy="7.5" rx="2.2" ry="2.9"/><ellipse cx="19" cy="7.5" rx="2.2" ry="2.9"/><ellipse cx="24" cy="13" rx="2.2" ry="2.8"/>',
  progress: '<path d="M4 27h6v-6h6v-6h6V9h6"/><path d="M20 4h8v8"/><path d="M28 4l-9 9"/>',
  pack: '<circle cx="10" cy="12" r="3"/><circle cx="22" cy="12" r="3"/><circle cx="16" cy="7" r="3"/><path d="M4 26c1-5 4-8 6-8s4 2 6 2 4-2 6-2 5 3 6 8"/>',
  territory: '<path d="M5 9l7-4 8 4 7-4v18l-7 4-8-4-7 4z"/><path d="M12 5v18M20 9v18"/>',
  family: '<circle cx="16" cy="6" r="3"/><circle cx="8" cy="24" r="3"/><circle cx="24" cy="24" r="3"/><path d="M16 9v6M16 15l-8 6M16 15l8 6"/>',
  companion: '<circle cx="11" cy="11" r="4"/><circle cx="23" cy="15" r="3"/><path d="M3 27c1-6 4-10 8-10s7 4 8 10"/><path d="M18 27c.8-4 2.5-6.5 5-6.5s4.2 2.5 5 6.5"/>',
  quest: '<path d="M8 4h13l4 4v20H8z"/><path d="M12 12h9M12 17h9M12 22h5"/>',
  event: '<rect x="5" y="7" width="22" height="20" rx="1"/><path d="M5 13h22M11 4v6M21 4v6"/><path d="M16 15.5l1.5 3.1 3.3.5-2.4 2.3.6 3.3-3-1.6-3 1.6.6-3.3-2.4-2.3 3.3-.5z"/>',
  mentor: '<path d="M16 9c-3-2-7-3-11-3v19c4 0 8 1 11 3 3-2 7-3 11-3V6c-4 0-8 1-11 3z"/><path d="M16 9v19"/>',
  ranking: '<path d="M10 5h12v6a6 6 0 01-12 0z"/><path d="M10 7H6c0 4 2 6 4 6M22 7h4c0 4-2 6-4 6M16 17v5M11 27h10M12 27c0-3 2-5 4-5s4 2 4 5"/>',
  world: '<circle cx="16" cy="16" r="12"/><path d="M4 16h24M16 4c4 4 5 8 5 12s-1 8-5 12c-4-4-5-8-5-12s1-8 5-12z"/>',
  help: '<circle cx="16" cy="16" r="12"/><path d="M12.5 12.5a3.5 3.5 0 117 0c0 2.5-3.5 3-3.5 5.5"/><path d="M16 22.5v.5"/>',
  _: '<circle cx="16" cy="16" r="10"/><path d="M16 11v10M11 16h10"/>',
};
export const icon = (name) => `<svg class="ico" viewBox="0 0 32 32" aria-hidden="true">${ICONS[name] || ICONS._}</svg>`;
export const CARET = '<svg class="ico" viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>';

// Chapters: every module in ../handbook/, validated (ids unique) and sorted by order, then id.
const files = import.meta.glob('../handbook/*.js', { eager: true, import: 'default' });

function collect(entries) {
    const seenChapters = new Set();
    const seenSections = new Set();
    const list = [];
    entries.forEach((ch) => {
        if (!ch || typeof ch.id !== 'string' || !Array.isArray(ch.sections) || seenChapters.has(ch.id)) return;
        seenChapters.add(ch.id);
        const sections = ch.sections.filter((s) => {
            if (!s || typeof s.id !== 'string' || seenSections.has(s.id)) return false;
            seenSections.add(s.id);
            return true;
        });
        list.push({ ...ch, order: Number(ch.order) || 0, sections });
    });
    list.sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
    return list;
}

export const CHAPTERS = collect(Object.keys(files).sort().map((k) => files[k]));
