export default {
    id: 'a-world',
    order: 80,
    icon: 'world',
    title: { de: 'Welt, Reviere, Rudel', en: 'World, territories, packs' },
    sections: [
        {
            id: 'a-world-tab',
            level: 3,
            rights: ['world'],
            title: { de: 'Uhrzeit und Wetter', en: 'Time and weather' },
            tags: { de: 'uhrzeit zeit anhalten zeitrate wetter auto echtzeit' },
            de: `<p>Reiter <em>Welt</em>: Uhrzeit setzen, Zeit anhalten, Zeitrate ändern oder auf Echtzeit stellen; Wetter wählen oder „Auto-Wetter“ wieder einschalten. Gilt sofort für alle Spieler.</p>
<div class="hb-warn"><p>Angehaltene Zeit oder festes Wetter bleiben, bis jemand es zurückstellt – nach einem Event nicht vergessen.</p></div>`,
        },
        {
            id: 'a-berries',
            level: 3,
            rights: ['world'],
            title: { de: 'Beerengebiete', en: 'Berry areas' },
            tags: { de: 'beeren gebiet zeichnen dichte editor' },
            de: `<p>Reiter <em>Beeren</em>: Gebiete mit dem Revier-Editor zeichnen (siehe unten), Dichte ändern, umbenennen, neu würfeln oder entfernen.</p>`,
        },
        {
            id: 'a-territories',
            level: 3,
            rights: ['territory'],
            title: { de: 'Reviere anlegen und bearbeiten', en: 'Creating and editing territories' },
            tags: { de: 'revier editor einfg entf ende punkt grenzen höhle bau name würfel kleinstrevier höhlenmodus f5' },
            de: `<p>Reiter <em>Reviere</em> → „+ Neues Revier“: Name (der Würfel daneben schlägt einen vor), dann zeichnen:</p>
<ul>
<li><kbd>Einfg</kbd> setzt einen Punkt an deiner Position, <kbd>Entf</kbd> entfernt den letzten, <kbd>Ende</kbd> speichert.</li>
<li>Säulen, Wände und die Grenzen bestehender Reviere sind nur beim Zeichnen sichtbar.</li>
<li>Aus der Fläche ergeben sich Größenklasse (klein/mittel/groß) und Einnahmedauer.</li>
<li><strong>Kleinstreviere</strong> für Kleintiere (Option beim Anlegen) dürfen in normalen Revieren liegen.</li>
<li><strong>Höhlenmodus</strong> (<kbd>F5</kbd>): in Höhlen durch den Gang laufen, das Werkzeug misst die Wände; erneut <kbd>F5</kbd> erzeugt den Umriss, der sich wie gewohnt bearbeiten lässt.</li>
</ul>
<p><strong>Grenzen bearbeiten</strong> (Detail eines Reviers): <kbd>Einfg</kbd> fügt einen Punkt in die nächste Kante ein, <kbd>Entf</kbd> entfernt den nächsten Punkt, <kbd>Ende</kbd> speichert; Besitzer, Zustand und Name bleiben.</p>
<p><strong>Höhle/Bau</strong> (Abschnitt „Höhle“ im Revier): an deiner Position setzen, Name und Radius, verlegen, umbenennen, hingehen, entfernen – höchstens eine je Revier.</p>`,
        },
        {
            id: 'a-territory-actions',
            level: 3,
            rights: ['territory'],
            title: { de: 'Revier-Aktionen', en: 'Territory actions' },
            tags: { de: 'revier freigeben mir geben an rudel schutz alarm aufheben umbenennen grenzen zeigen ruhm' },
            de: `<p>Im Detail eines Reviers (auch auf der Live-Karte):</p>
<ul>
<li><strong>Hingehen</strong> (Mitte), <strong>Zur Höhle</strong>, <strong>Grenzen zeigen</strong> (nur für dich, Spieler sehen sie nie).</li>
<li><strong>Umbenennen</strong>, <strong>Freigeben</strong>, <strong>Mir geben</strong>, <strong>An Rudel von …</strong> (das Revier geht an dessen Rudel bzw. den Einzelgänger).</li>
<li><strong>Schutz / Alarm aufheben</strong> – nach einer Übernahme sind Reviere 48 Stunden geschützt; ein Angriff löst 5 Minuten Alarm aus.</li>
<li><strong>Ruhm</strong> des Besitzers setzen (Tests, Korrekturen).</li>
<li><strong>Entfernen</strong> (zweimal drücken).</li>
</ul>
<p>„Grenzen zeigen / verbergen“ oben im Reiter blendet die Grenzen aller Reviere für dich ein.</p>`,
        },
        {
            id: 'a-packs',
            level: 3,
            rights: ['pack'],
            title: { de: 'Rudel', en: 'Packs' },
            tags: { de: 'rudel farbe freischalten bündnis verbündete mitglieder' },
            de: `<p>Reiter <em>Rudel</em>: alle Rudel mit Mitgliedern, Rängen, Revier und Verbündeten. Hier lässt sich die <strong>Rudelfarbe freischalten</strong> – danach wählt der Alpha die Farbe im Rudelmenü.</p>`,
        },
        {
            id: 'a-memorials',
            level: 3,
            rights: ['memorial'],
            title: { de: 'Gedenksteine', en: 'Memorial stones' },
            tags: { de: 'gedenkstein gefallen tier rudel inschrift aufstellen versetzen' },
            de: `<p>Reiter <em>Gedenksteine</em> → „Neuer Stein“: gefallenes Tier oder Rudel suchen, Modell und Inschrift wählen, dann <strong>Vor mir aufstellen</strong> (nur im Spiel). Bestehende Steine: Inschrift und Modell ändern, versetzen, hingehen, entfernen. Ein Stein je Tier bzw. Rudel.</p>`,
        },
    ],
};
