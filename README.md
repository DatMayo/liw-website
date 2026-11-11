# Life In Wilderness – Homepage

Die öffentliche Homepage von **Life In Wilderness**, einem RedM-Roleplay-Server, auf dem jeder Spieler ein Tier ist.
Statische Seiten (reines HTML/CSS/JS, kein Build-Schritt): Startseite, Tastenbelegung und Spielerhandbuch, auf Deutsch und Englisch.

## Veröffentlichen (GitHub Pages)

Einmalig: **Settings → Pages → Build and deployment → Source: „Deploy from a branch“**, Branch `main`, Ordner `/ (root)`.
Danach ist die Seite unter `https://datmayo.github.io/liw-website/` erreichbar; jeder Push auf `main` aktualisiert sie.

Eigene Domain später: Datei `CNAME` mit der Domain anlegen und beim Domain-Anbieter einen CNAME-Eintrag auf
`datmayo.github.io` setzen (GitHub-Doku „Managing a custom domain for your GitHub Pages site“).

## Aufbau

```
index.html          die ganze Seite: Styles oben, Inhalt, unten das Skript mit allen Texten (T.de / T.en) und den Arten
tasten.html         Tastenbelegung: Tastatur (QWERTZ / QWERTY je Sprache) und Liste aller Spieler-Tasten
trailer-werkzeug.html  Doku des Trailer-Werkzeugs (liw_cinematic) für das Team – bewusst nirgends verlinkt, noindex
handbuch.html       Spielerhandbuch: Suche, Inhaltsverzeichnis, alle Kapitel (Gerüst; die Texte stehen in assets/handbook/)
assets/site.css     gemeinsames Aussehen aller Seiten: Farben, Schriften, schwebende Leiste, Nachthimmel-Kopf, Fußzeile
assets/site.js      gemeinsame Leiste/Fußzeile: Texte (data-s, DE/EN), Discord-Link, Menü auf kleinen Bildschirmen
assets/handbook/    ein Kapitel des Handbuchs je Datei (<Reihenfolge>-<id>.js) und index.js mit der Liste der Dateien
assets/cinematic/   Bilder des Baukastens für trailer-werkzeug.html (Browser-Vorschau von liw_ui)
assets/fonts/       Schriften (IM Fell English, Crimson Pro; SIL Open Font License) – lokal, keine Anfragen an Google
.nojekyll           Seite wird so ausgeliefert, wie sie ist
```

## Texte ändern

- Alle Texte stehen im Skript am Ende von `index.html` in `T.de` und `T.en` (gleiche Schlüssel in beiden Sprachen).
  Ausnahme: Texte der Leiste und der Fußzeile (auf allen Seiten gleich) stehen in `assets/site.js`.
- Die Arten stehen in `SPECIES` (Schlüssel, Ernährung, Grundwerte, Namen und Beschreibungen) und kommen aus
  `liw_species` des Server-Repos.
- Die Tasten stehen in `tasten.html` in `ACTIONS` (Taste, Gruppe, Texte je Sprache); Quelle ist
  `docs/STEUERUNG.md` im Server-Repo. Die Sprache teilt sich die Seite mit der Startseite (`liw_lang`).
- Die Discord-Einladung steht in `DISCORD_URL`, die Verbindungsadresse in `CONNECT_URL` und im Text `s4`.

## Handbuch

`handbuch.html` ist das Nachschlagewerk für Spieler (nur Spielerwissen: keine Admin-Werkzeuge, keine Befehle für das
Team, keine Server-Interna). Die Seite selbst enthält nur Gerüst, Suche und Styles; jedes Kapitel ist eine eigene Datei
unter `assets/handbook/`. Weil es keinen Build-Schritt gibt, steht in `assets/handbook/index.js` die Liste der Dateien
(`LIW_HANDBOOK_FILES`). Die Seite lädt sie der Reihe nach; fehlt eine Datei, wird sie übersprungen. Angezeigt werden
die Kapitel nach `order`.

**Ein Kapitel anlegen:**

1. Datei `assets/handbook/<order>-<id>.js` anlegen, z. B. `56-weather.js`:

   ```js
   window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
   window.LIW_HANDBOOK.push({
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
   });
   ```

2. Den Dateinamen in `assets/handbook/index.js` eintragen.
3. `node --check assets/handbook/<datei>.js` ausführen.

**Inhalt der Abschnitte:** kurzes HTML: `<p>`, `<ul>`/`<ol>`, `<table class="hb-table">`, `<dl>` (Glossar),
`<kbd>` für Tasten, `<div class="hb-tip">…</div>` für Tipps, `<div class="hb-warn">…</div>` für Warnungen, Links auf
andere Abschnitte mit `<a href="#abschnitt-id">` (zeigt eine ID ins Leere, springt der Link zum Kapitel, also zum Teil
vor dem ersten Bindestrich). Keine Inline-Styles, keine Skripte, keine Bilder. Deutsch und Englisch mit gleichem Inhalt;
Werte aus der aktuellen Config des Server-Repos, Zeiten in Echtzeit.

**Symbole:** `start`, `hud`, `life`, `needs`, `food`, `health`, `disease`, `senses`, `combat`, `voice`, `species`,
`progress`, `pack`, `territory`, `family`, `companion`, `quest`, `event`, `mentor`, `ranking`, `world`, `help`
(als SVG in `ICONS` in `handbuch.html`).

**Suche:** durchsucht Titel, `tags` und Text der aktuellen Sprache, ohne Groß-/Kleinschreibung und Akzente (ä = a,
ß = ss); mehrere Wörter müssen alle vorkommen, Treffer im Titel stehen oben. Taste `/` oder Strg+K springt ins
Suchfeld, Pfeiltasten und Enter wählen einen Treffer, Esc leert die Suche. Die Suche filtert zugleich das
Inhaltsverzeichnis. Deep Links wie `handbuch.html#life-memorials` funktionieren beim Laden und beim Sprachwechsel.

## Offen

- Regeln (Vorschlag, durch die echten ersetzen)
- Impressum und Datenschutz als eigene Seiten
- Screenshots aus dem Spiel (Hintergrund oben, je Art)
