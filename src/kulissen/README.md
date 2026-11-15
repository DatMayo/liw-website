# Hinter den Kulissen – Simulationen

Die Seite `/kulissen` (`src/pages/ScenesPage.vue`) zeigt die Systeme des Servers als kleine interaktive Simulationen.
Jede Simulation ist ein ES-Modul in diesem Ordner. Die Seite sammelt beim Build alle `*.js`-Dateien hier ein
(`import.meta.glob`, ausgenommen `hoehle-data.js`) und sortiert sie nach `order` – eine Liste der Dateien gibt es nicht.
Dateien ohne `id` oder `mount` werden übersprungen.

## Format einer Datei

```js
// Konstanten, Texte, Hilfsfunktionen: alles auf Modulebene ist erlaubt, solange es nicht auf window, document,
// localStorage o. Ä. zugreift (die Datei wird auch beim Vorrendern geladen; mount() läuft nur im Browser).
const sim = {
    id: 'reviere',                 // ASCII, wird zum Anker (/kulissen#reviere)
    order: 10,                     // Reihenfolge der Reiter
    title:  { de: 'Reviere', en: 'Territories' },
    teaser: { de: 'Einnehmen, halten, verlieren', en: 'Claim, hold, lose' },          // eine Zeile im Reiter
    lede:   { de: 'Ein, zwei Sätze, was die Simulation zeigt.', en: '…' },              // unter der Überschrift
    mount(root, lang) {
        // root: leeres Element; alles hier hinein bauen. lang: 'de' oder 'en'.
        // Beim Sprachwechsel oder Wechsel des Reiters ruft die Seite destroy() auf und mountet neu.
        return { destroy() { /* Timer, requestAnimationFrame, Listener an window und root aufräumen */ } };
    },
};

export default sim;
```

Titel, Teaser und Lede stehen im vorgerenderten HTML (Reiter und Überschrift); die Simulation selbst wird erst im
Browser gemountet.

## Regeln

- Kein Framework, keine fremden Server (keine CDNs, keine Webfonts von außen). Große Bibliotheken liegen in
  `public/vendor/` und werden erst geladen, wenn die Simulation sie braucht (three.js für den 3D-Höhlenscan, per
  `<script>` von `${import.meta.env.BASE_URL}vendor/…`). Große Daten als eigenes Modul per dynamischem `import()`
  laden, dann wird daraus eine eigene Datei, die erst bei Bedarf kommt (z. B. `import('./hoehle-data.js')`).
- Alle Texte auf Deutsch und Englisch, in der Datei selbst.
- Werte aus den echten Configs von LiW (Stand der Datei angeben), keine erfundenen Zahlen. Vereinfachungen in der
  Notiz unter der Simulation nennen.
- Nichts über Anti-Cheat, Admin-Werkzeuge oder vertrauliche Teile.
- `root` ist das Bühnen-Element der Seite und bleibt nach `destroy()` bestehen: Listener, die direkt an `root` hängen,
  in `destroy()` wieder entfernen (sonst laufen sie in der nächsten Simulation weiter).
- Gemeinsame Klassen (Styles in `src/pages/ScenesPage.vue`): `sim-grid` (Ansicht + Seitenleiste), `sim-view`
  (Canvas-Rahmen), `sim-side`, `sim-box` mit `h3`, `sim-row`, `sim-btn` (`.ghost`, `aria-pressed`), `sim-field`
  (Label + Regler/Auswahl + `output`), `sim-check`, `sim-stat`, `sim-legend` (`<span><i style="--c:…"></i>…</span>`),
  `sim-note`, `sim-tag`. Eigene Styles nur unter `.sim-<id>` (einmal als `<style>` in `root` einfügen).
- Farben aus den Tokens von `src/assets/site.css` (`--gold`, `--rust`, `--moss`, `--sky`, `--ink`, `--muted` …); im
  Canvas dieselben Werte.
- Muss bei 390 px Breite funktionieren, ohne waagerechtes Scrollen. Canvas mit fester interner Auflösung und
  `width: 100%`, bei Bedarf `devicePixelRatio` beachten.
- Die Simulation zeigt beim Öffnen sofort einen sinnvollen Zustand (kein leerer Kasten). Animationen respektieren
  `prefers-reduced-motion`.
