# Life In Wilderness – Homepage

Die öffentliche Homepage von **Life In Wilderness**, einem RedM-Roleplay-Server, auf dem jeder Spieler ein Tier ist.
Eine einzige statische Seite (reines HTML/CSS/JS, kein Build-Schritt), auf Deutsch und Englisch.

## Veröffentlichen (GitHub Pages)

Einmalig: **Settings → Pages → Build and deployment → Source: „Deploy from a branch“**, Branch `main`, Ordner `/ (root)`.
Danach ist die Seite unter `https://datmayo.github.io/liw-website/` erreichbar; jeder Push auf `main` aktualisiert sie.

Eigene Domain später: Datei `CNAME` mit der Domain anlegen und beim Domain-Anbieter einen CNAME-Eintrag auf
`datmayo.github.io` setzen (GitHub-Doku „Managing a custom domain for your GitHub Pages site“).

## Aufbau

```
index.html          die ganze Seite: Styles oben, Inhalt, unten das Skript mit allen Texten (T.de / T.en) und den Arten
assets/fonts/       Schriften (IM Fell English, Crimson Pro; SIL Open Font License) – lokal, keine Anfragen an Google
.nojekyll           Seite wird so ausgeliefert, wie sie ist
```

## Texte ändern

- Alle Texte stehen im Skript am Ende von `index.html` in `T.de` und `T.en` (gleiche Schlüssel in beiden Sprachen).
- Die Arten stehen in `SPECIES` (Schlüssel, Ernährung, Grundwerte, Namen und Beschreibungen) und kommen aus
  `liw_species` des Server-Repos.
- Die Discord-Einladung steht in `DISCORD_URL`, die Verbindungsadresse in `CONNECT_URL` und im Text `s4`.

## Offen

- Regeln (Vorschlag, durch die echten ersetzen)
- Impressum und Datenschutz als eigene Seiten
- Screenshots aus dem Spiel (Hintergrund oben, je Art)
