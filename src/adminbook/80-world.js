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
            tags: {
                de: 'uhrzeit zeit anhalten zeitrate wetter auto echtzeit',
                en: 'time of day stop time freeze time rate weather automatic real time',
            },
            de: `<p>Reiter <em>Welt</em>: Uhrzeit setzen, Zeit anhalten, Zeitrate ändern oder auf Echtzeit stellen; Wetter wählen oder „Auto-Wetter“ wieder einschalten. Gilt sofort für alle Spieler.</p>
<div class="hb-warn"><p>Angehaltene Zeit oder festes Wetter bleiben, bis jemand es zurückstellt – nach einem Event nicht vergessen.</p></div>`,
            en: `<p>Tab <em>World</em>: set the time, stop time, change the time rate or set it to real time; pick the weather or turn “Automatic weather on” again. This applies to all players right away.</p>
<div class="hb-warn"><p>Stopped time or fixed weather stays until someone resets it – do not forget this after an event.</p></div>`,
        },
        {
            id: 'a-berries',
            level: 3,
            rights: ['world'],
            title: { de: 'Beerengebiete', en: 'Berry areas' },
            tags: {
                de: 'beeren gebiet zeichnen dichte editor',
                en: 'berries berry area draw density editor',
            },
            de: `<p>Reiter <em>Beeren</em>: Gebiete mit dem Revier-Editor zeichnen (siehe unten), Dichte ändern, umbenennen, neu würfeln oder entfernen.</p>`,
            en: `<p>Tab <em>Berries</em>: draw areas with the territory editor (see below), change the density, rename them, spread the bushes anew or remove them.</p>`,
        },
        {
            id: 'a-territories',
            level: 3,
            rights: ['territory'],
            title: { de: 'Reviere anlegen und bearbeiten', en: 'Creating and editing territories' },
            tags: {
                de: 'revier editor einfg entf ende punkt grenzen höhle bau name würfel kleinstrevier höhlenmodus f5',
                en: 'territory editor insert ins delete del end point borders den name dice tiny territory cave mode f5',
            },
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
            en: `<p>Tab <em>Territories</em> → “+ New territory”: a name (the dice next to it suggests one), then draw:</p>
<ul>
<li><kbd>Ins</kbd> sets a point at your position, <kbd>Del</kbd> removes the last one, <kbd>End</kbd> saves.</li>
<li>Pillars, walls and the borders of existing territories are only visible while drawing.</li>
<li>The area determines the size class (small/medium/large) and the time it takes to claim.</li>
<li><strong>Tiny territories</strong> for small animals (an option when creating) may lie inside normal territories.</li>
<li><strong>Cave mode</strong> (<kbd>F5</kbd>): in caves, walk through the passage and the tool measures the walls; pressing <kbd>F5</kbd> again creates the outline, which you can edit as usual.</li>
</ul>
<p><strong>Edit borders</strong> (territory details): <kbd>Ins</kbd> inserts a point into the nearest edge, <kbd>Del</kbd> removes the nearest point, <kbd>End</kbd> saves; owner, state and name stay the same.</p>
<p><strong>Den</strong> (section “Den” in the territory): set it at your position, with a name and radius; move, rename, go to or remove it – at most one per territory.</p>`,
        },
        {
            id: 'a-territory-actions',
            level: 3,
            rights: ['territory'],
            title: { de: 'Revier-Aktionen', en: 'Territory actions' },
            tags: {
                de: 'revier freigeben mir geben an rudel schutz alarm aufheben umbenennen grenzen zeigen ruhm',
                en: 'territory free give to me give to pack protection alarm lift rename show borders fame',
            },
            de: `<p>Im Detail eines Reviers (auch auf der Live-Karte):</p>
<ul>
<li><strong>Hingehen</strong> (Mitte), <strong>Zur Höhle</strong>, <strong>Grenzen zeigen</strong> (nur für dich, Spieler sehen sie nie).</li>
<li><strong>Umbenennen</strong>, <strong>Freigeben</strong>, <strong>Mir geben</strong>, <strong>An Rudel von …</strong> (das Revier geht an dessen Rudel bzw. den Einzelgänger).</li>
<li><strong>Schutz / Alarm aufheben</strong> – nach einer Übernahme sind Reviere 48 Stunden geschützt; ein Angriff löst 5 Minuten Alarm aus.</li>
<li><strong>Ruhm</strong> des Besitzers setzen (Tests, Korrekturen).</li>
<li><strong>Entfernen</strong> (zweimal drücken).</li>
</ul>
<p>„Grenzen zeigen / verbergen“ oben im Reiter blendet die Grenzen aller Reviere für dich ein.</p>`,
            en: `<p>In a territory's details (also on the live map):</p>
<ul>
<li><strong>Go to</strong> (centre), <strong>Go to den</strong>, <strong>Show borders</strong> (only for you, players never see them).</li>
<li><strong>Rename</strong>, <strong>Free</strong>, <strong>Give to me</strong>, <strong>Give to pack of …</strong> (the territory goes to that player's pack or to the loner).</li>
<li><strong>Lift protection / alarm</strong> – after a takeover, territories are protected for 48 hours; an attack sets off a 5-minute alarm.</li>
<li>Set the owner's <strong>fame</strong> (tests, corrections).</li>
<li><strong>Delete</strong> (press twice).</li>
</ul>
<p>“Show / hide borders” at the top of the tab shows the borders of all territories for you.</p>`,
        },
        {
            id: 'a-packs',
            level: 3,
            rights: ['pack'],
            title: { de: 'Rudel', en: 'Packs' },
            tags: {
                de: 'rudel farbe freischalten bündnis verbündete mitglieder',
                en: 'pack colour color unlock alliance allies members',
            },
            de: `<p>Reiter <em>Rudel</em>: alle Rudel mit Mitgliedern, Rängen, Revier und Verbündeten. Hier lässt sich die <strong>Rudelfarbe freischalten</strong> – danach wählt der Alpha die Farbe im Rudelmenü.</p>`,
            en: `<p>Tab <em>Packs</em>: all packs with members, ranks, territory and allies. Here you can <strong>unlock the pack colour</strong> – the alpha then picks the colour in the pack menu.</p>`,
        },
        {
            id: 'a-memorials',
            level: 3,
            rights: ['memorial'],
            title: { de: 'Gedenksteine', en: 'Memorial stones' },
            tags: {
                de: 'gedenkstein gefallen tier rudel inschrift aufstellen versetzen',
                en: 'memorial stone memorials fallen animal pack inscription place move',
            },
            de: `<p>Reiter <em>Gedenksteine</em> → „Neuer Stein“: gefallenes Tier oder Rudel suchen, Modell und Inschrift wählen, dann <strong>Vor mir aufstellen</strong> (nur im Spiel). Bestehende Steine: Inschrift und Modell ändern, versetzen, hingehen, entfernen. Ein Stein je Tier bzw. Rudel.</p>`,
            en: `<p>Tab <em>Memorials</em> → “New stone”: search for a fallen animal or a pack, pick a model and an inscription, then <strong>Place in front of me</strong> (in game only). Existing stones: change the inscription and model, move, go to, remove. One stone per animal or pack.</p>`,
        },
    ],
};
