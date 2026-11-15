# Hinter den Kulissen – Simulationen

`kulissen.html` zeigt die Systeme des Servers als kleine interaktive Simulationen. Jede Simulation ist eine
Datei in diesem Ordner, die in `index.js` (`LIW_SIM_FILES`) eingetragen ist. Die Seite lädt sie der Reihe nach;
eine fehlende Datei wird übersprungen.

## Format einer Datei

```js
(() => {
  window.LIW_SIMS = window.LIW_SIMS || [];
  window.LIW_SIMS.push({
    id: 'reviere',                 // ASCII, wird zum Anker (kulissen.html#reviere)
    order: 10,                     // Reihenfolge der Reiter
    title:  { de: 'Reviere', en: 'Territories' },
    teaser: { de: 'Einnehmen, halten, verlieren', en: 'Claim, hold, lose' },          // eine Zeile im Reiter
    lede:   { de: 'Ein, zwei Sätze, was die Simulation zeigt.', en: '…' },              // unter der Überschrift
    mount(root, lang) {
      // root: leeres Element; alles hier hinein bauen. lang: 'de' oder 'en'.
      // Beim Sprachwechsel oder Wechsel des Reiters ruft die Seite destroy() auf und mountet neu.
      return { destroy() { /* Timer, requestAnimationFrame, Listener am window aufräumen */ } };
    },
  });
})();
```

## Regeln

- Kein Framework, keine fremden Server (keine CDNs, keine Webfonts von außen). Bibliotheken liegen in
  `assets/vendor/` und werden erst geladen, wenn die Simulation sie braucht (z. B. three.js für den 3D-Höhlenscan).
- Alle Texte auf Deutsch und Englisch, in der Datei selbst.
- Werte aus den echten Configs von LiW (Stand der Datei angeben), keine erfundenen Zahlen. Vereinfachungen in der
  Notiz unter der Simulation nennen.
- Nichts über Anti-Cheat, Admin-Werkzeuge oder vertrauliche Teile.
- Gemeinsame Klassen aus `kulissen.html`: `sim-grid` (Ansicht + Seitenleiste), `sim-view` (Canvas-Rahmen),
  `sim-side`, `sim-box` mit `h3`, `sim-row`, `sim-btn` (`.ghost`, `aria-pressed`), `sim-field` (Label + Regler/Auswahl
  + `output`), `sim-check`, `sim-stat`, `sim-legend` (`<span><i style="--c:…"></i>…</span>`), `sim-note`, `sim-tag`.
  Eigene Styles nur unter `.sim-<id>` (einmal als `<style>` in `root` einfügen).
- Farben aus den Tokens von `assets/site.css` (`--gold`, `--rust`, `--moss`, `--sky`, `--ink`, `--muted` …); im Canvas
  dieselben Werte.
- Muss bei 390 px Breite funktionieren, ohne waagerechtes Scrollen. Canvas mit fester interner Auflösung und
  `width: 100%`, bei Bedarf `devicePixelRatio` beachten.
- Die Simulation zeigt beim Öffnen sofort einen sinnvollen Zustand (kein leerer Kasten). Animationen respektieren
  `prefers-reduced-motion`.
