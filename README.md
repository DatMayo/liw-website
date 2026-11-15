# Life In Wilderness – Homepage

Die öffentliche Homepage von **Life In Wilderness**, einem RedM-Roleplay-Server, auf dem jeder Spieler ein Tier ist.
Startseite, Tastenbelegung, Spielerhandbuch und „Hinter den Kulissen“, auf Deutsch und Englisch.

Gebaut mit **Vue 3**, **Vite** und **vue-router**; beim Build rendert **vite-ssg** jede Seite vorab zu fertigem HTML
(Inhalt für Suchmaschinen und Link-Vorschauen), im Browser übernimmt Vue danach (Hydration) die Interaktion.
Hauptdomain ist **https://playliw.com**.

## Lokal starten

Voraussetzung: Node.js 20.19+ oder 22.12+ (Vite 8).

```
npm install        # Abhängigkeiten installieren (einmalig bzw. nach Änderungen an package.json)
npm run dev        # Entwicklungsserver mit Hot Reload (http://localhost:5173)
npm run build      # fertige Seite nach dist/ bauen (jede Route als eigene HTML-Datei)
npm run preview    # den Build aus dist/ lokal ansehen
```

## Veröffentlichen (Vercel)

Das Repo ist bei Vercel als Projekt eingebunden; jeder Push auf den Produktions-Branch baut und veröffentlicht die Seite.
Einstellungen des Projekts: **Framework Preset „Vite“**, Build Command **`npm run build`**, Output Directory **`dist`**
(stehen auch in `vercel.json`). Hauptdomain ist `playliw.com`; weitere Domains und deren Weiterleitungen werden in
Vercel unter *Settings → Domains* eingerichtet, nicht im Repo.

`vercel.json` sorgt außerdem für:

- **Saubere Adressen** (`cleanUrls`): `dist/tasten.html` ist unter `/tasten` erreichbar, ein Schrägstrich am Ende wird
  entfernt (`trailingSlash: false`).
- **Weiterleitungen** (dauerhaft, 308) von den alten Adressen: `/index.html` → `/`, `/tasten.html` → `/tasten`,
  `/handbuch.html` → `/handbuch`, `/kulissen.html` → `/kulissen`, `/trailer-werkzeug.html` → `/trailer-werkzeug`,
  `/trailer-tool.html` → `/trailer-tool`. Anker bleiben erhalten (`/kulissen#reviere`, `/handbuch#life-memorials`).
- **Deep Links:** Jede Route liegt als fertige HTML-Datei vor, ein direkter Aufruf oder Neuladen funktioniert also ohne
  Umweg über die Startseite. Unbekannte Adressen bekommen `404.html` (vorgerenderte Seite „Hier ist nichts“).
- Lange Cache-Zeit für `/assets/` (Dateinamen enthalten einen Hash).

## Aufbau

```
index.html                 HTML-Vorlage von Vite (Kopf, Favicon); die Seiten selbst sind Vue-Komponenten
vite.config.js             Vite + Vorrendern (vite-ssg: eine HTML-Datei je Route, 404.html)
vercel.json                Vercel: saubere Adressen, Weiterleitungen der alten .html-Adressen
public/                    wird unverändert ausgeliefert
  cinematic/               Bilder des Baukastens für die Trailer-Doku (en/ = englische Oberfläche)
  vendor/                  three.js + OrbitControls, nur für die 3D-Ansicht der Höhlen-Simulation, erst bei Bedarf geladen
src/
  main.js                  Einstieg (ViteSSG mit Router)
  App.vue                  Rahmen: Sprache (<html lang>), Viewport, RouterView
  routes.js                alle Seiten und das Scroll-Verhalten bei Ankern
  lang.js                  Sprache DE/EN: localStorage-Schlüssel liw_lang, sonst Browsersprache
  site.js                  gemeinsame Texte von Leiste und Fußzeile (DE/EN), DISCORD_URL, CONNECT_URL, SITE_URL
  head.js                  Titel, Beschreibung, Canonical/og:url (https://playliw.com/<route>), noindex
  assets/site.css          gemeinsames Aussehen aller Seiten: Farben, Schriften, Leiste, Nachthimmel-Kopf, Fußzeile
  assets/fonts/            Schriften (IM Fell English, Crimson Pro; SIL Open Font License) – lokal, keine Anfragen an Google
  components/              SiteBar (Leiste, Menü auf kleinen Bildschirmen, Sprachumschalter), SiteFooter,
                           PageHero (Nachthimmel-Kopf), SiteLink (Link auf eine andere Seite, ohne Neuladen)
  pages/                   HomePage (/), KeysPage (/tasten), HandbookPage (/handbuch), ScenesPage (/kulissen),
                           TrailerDocPage (/trailer-werkzeug, /trailer-tool), NotFoundPage (404)
  data/home.js             Texte der Startseite (T.de / T.en) und die Arten (SPECIES, Bilder)
  data/keys.js             Tastenbelegung: Texte, ACTIONS, Controller (PAD), Tastatur-Reihen (ROWS)
  data/handbook.js         Texte der Handbuch-Seite, Kapitel-Symbole (ICONS) und das Einsammeln der Kapitel
  handbook/                ein Kapitel des Handbuchs je Datei (<Reihenfolge>-<id>.js)
  kulissen/                eine Simulation je Datei, siehe src/kulissen/README.md
  content/                 Text der Trailer-Doku als HTML (trailer-werkzeug.html DE, trailer-tool.html EN)
```

**Styles:** Gemeinsames steht in `src/assets/site.css` (global). Das Aussehen einer Seite steht im `<style>`-Block
ihrer Komponente unter `src/pages/`. Jede Seite setzt eine Klasse auf `<html>` (`page-home`, `page-tasten`,
`page-handbuch`, `page-kulissen`, `page-trailer`), und ihre Regeln beginnen mit `:where(.page-…)` bzw.
`html:where(.page-…)`. So gelten sie nur auf ihrer Seite, auch für Inhalte, die als HTML eingesetzt oder von
Simulationen erzeugt werden, und `:where()` lässt die Spezifität unverändert (dieselbe Gewichtung wie bisher gegenüber
`site.css`). `scoped` wird nur dort verwendet, wo das keine Rolle spielt (404-Seite).

**Vorrendern und Sprache:** Das vorgerenderte HTML ist Deutsch. Im Browser liest die Seite nach dem Laden
`liw_lang` aus dem localStorage (sonst die Browsersprache) und schaltet bei Bedarf auf Englisch um; der Umschalter
speichert die Wahl. Zugriffe auf `window`, `document` und `localStorage` stehen nur in `onMounted` bzw. in
Ereignissen, nie im Code, der beim Vorrendern läuft. Die Trailer-Doku gibt es je Sprache als eigene Seite; ihr
DE/EN-Umschalter verlinkt die beiden Seiten und ändert `liw_lang` nicht.

**Nicht verlinkt:** `/trailer-werkzeug` und `/trailer-tool` (Doku des Trailer-Werkzeugs liw_cinematic für das Team) sind
bewusst nirgends verlinkt und haben `noindex, nofollow`.

## Texte ändern

- Startseite: `src/data/home.js`, `T.de` und `T.en` (gleiche Schlüssel in beiden Sprachen).
  Ausnahme: Texte der Leiste und der Fußzeile (auf allen Seiten gleich) stehen in `src/site.js`.
- Die Arten stehen in `SPECIES` in `src/data/home.js` (Schlüssel, Ernährung, Grundwerte, Namen und Beschreibungen) und
  kommen aus `liw_species` des Server-Repos. Die Bilder (`IMAGES`) kommen von RedM Forge (redm-forge.com).
- Die Tasten stehen in `src/data/keys.js` in `ACTIONS` (Taste, Gruppe, Texte je Sprache), der Controller in `PAD`;
  Quelle ist `docs/STEUERUNG.md` im Server-Repo.
- Titel und Beschreibung (Meta) einer Seite stehen oben in ihrer Komponente (`usePageHead`).
- Die Discord-Einladung steht in `DISCORD_URL` (`src/site.js`), die Verbindungsadresse in `CONNECT_URL` und im Text `s4`.
- Trailer-Doku: `src/content/trailer-werkzeug.html` (DE) und `src/content/trailer-tool.html` (EN); Bilder unter
  `public/cinematic/`, eingebunden als `/cinematic/<datei>.png`.

## Handbuch

`/handbuch` ist das Nachschlagewerk für Spieler (nur Spielerwissen: keine Admin-Werkzeuge, keine Befehle für das
Team, keine Server-Interna). Die Seite (`src/pages/HandbookPage.vue`) enthält Gerüst, Suche und Styles; jedes Kapitel
ist eine eigene Datei unter `src/handbook/`. Alle Dateien dort werden beim Build automatisch eingesammelt
(`import.meta.glob` in `src/data/handbook.js`) – eine Liste der Dateien gibt es nicht mehr. Angezeigt werden die
Kapitel nach `order`; doppelte Kapitel- oder Abschnitts-IDs werden übersprungen. Alle Kapitel stehen fertig im
vorgerenderten `handbuch.html`.

**Ein Kapitel anlegen:**

1. Datei `src/handbook/<order>-<id>.js` anlegen, z. B. `56-weather.js`:

   ```js
   export default {
       id: 'weather',            // Kapitel-ID: eindeutig, a-z, 0-9 und -, zugleich der Anker #weather
       order: 56,                // Reihenfolge im Handbuch
       icon: 'world',            // Symbol, siehe unten (fehlt es, gibt es ein neutrales)
       title: { de: 'Wetter', en: 'Weather' },
       sections: [
           {
               id: 'weather-rain',   // eindeutig im ganzen Handbuch: <kapitel-id>-<kurzname>, zugleich der Anker
               title: { de: 'Regen', en: 'Rain' },
               tags: { de: 'nass schauer', en: 'wet shower' },   // zusätzliche Suchwörter (Synonyme), optional
               de: `<p>…</p>`,
               en: `<p>…</p>`,
           },
       ],
   };
   ```

2. `npm run build` (oder `npm run dev`) – das Kapitel ist sofort dabei.

**Inhalt der Abschnitte:** kurzes HTML: `<p>`, `<ul>`/`<ol>`, `<table class="hb-table">`, `<dl>` (Glossar),
`<kbd>` für Tasten, `<div class="hb-tip">…</div>` für Tipps, `<div class="hb-warn">…</div>` für Warnungen, Links auf
andere Abschnitte mit `<a href="#abschnitt-id">` (zeigt eine ID ins Leere, springt der Link zum Kapitel, also zum Teil
vor dem ersten Bindestrich), Links auf andere Seiten der Homepage mit `<a href="/tasten">` bzw. `<a href="/">`
(wechseln die Seite ohne Neuladen). Keine Inline-Styles, keine Skripte, keine Bilder. Deutsch und Englisch mit gleichem Inhalt;
Werte aus der aktuellen Config des Server-Repos, Zeiten in Echtzeit.

**Symbole:** `start`, `hud`, `life`, `needs`, `food`, `health`, `disease`, `senses`, `combat`, `voice`, `species`,
`progress`, `pack`, `territory`, `family`, `companion`, `quest`, `event`, `mentor`, `ranking`, `world`, `help`
(als SVG in `ICONS` in `src/data/handbook.js`).

**Suche:** durchsucht Titel, `tags` und Text der aktuellen Sprache, ohne Groß-/Kleinschreibung und Akzente (ä = a,
ß = ss); mehrere Wörter müssen alle vorkommen, Treffer im Titel stehen oben. Taste `/` oder Strg+K springt ins
Suchfeld, Pfeiltasten und Enter wählen einen Treffer, Esc leert die Suche. Die Suche filtert zugleich das
Inhaltsverzeichnis. Deep Links wie `/handbuch#life-memorials` funktionieren beim Laden und beim Sprachwechsel.

## Hinter den Kulissen

`/kulissen` zeigt die Systeme des Servers als interaktive Simulationen, eine Datei je Simulation unter
`src/kulissen/`. Format, Regeln und gemeinsame Klassen: [`src/kulissen/README.md`](src/kulissen/README.md).

## Offen

- Regeln (Vorschlag, durch die echten ersetzen)
- Impressum und Datenschutz als eigene Seiten
- Screenshots aus dem Spiel (Hintergrund oben, je Art)

## Voice-Plugin

`https://playliw.com/voice` leitet (Weiterleitung in `vercel.json`, nicht dauerhaft) immer auf die neueste
Release-Datei des Mumble-Plugins (`github.com/DatMayo/liw-voice/releases/latest/download/liw_proximity.mumble_plugin`).
Jeder Push im Plugin-Repo baut ein Release – die Adresse braucht dafür keine Änderung. Benutzt auf der Startseite
(Schritt „Voice“, `VOICE_URL` in `src/site.js`), im Handbuch (`voice-setup`) und im Spiel (Charaktermenü → Einstellungen → Voice).
