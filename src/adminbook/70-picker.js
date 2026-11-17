export default {
    id: 'a-picker-ch',
    order: 70,
    icon: 'cursor',
    title: { de: 'Auswahl-Werkzeug', en: 'Selection tool' },
    sections: [
        {
            id: 'a-picker',
            level: 3,
            rights: ['picker'],
            title: { de: 'Bedienung', en: 'How it works' },
            tags: { de: 'auswahl werkzeug picker bild runter ring mausrad doppelklick alt umschauen' },
            de: `<p><kbd>Bild↓</kbd> schaltet das Werkzeug ein und aus. Ein Mauszeiger erscheint, die Kamera steht still, ein Ring am Boden folgt der Maus und rastet an Tieren ein.</p>
<ul>
<li><kbd>Mausrad</kbd>: Ring größer/kleiner (0,5–60 m).</li>
<li><kbd>Linksklick</kbd>: wählt alles im Ring – rechts öffnet sich die Leiste.</li>
<li><kbd>Doppelklick</kbd> auf eine Stelle ohne Tier: dorthin teleportieren.</li>
<li><kbd>Alt</kbd> halten: Cursor weg, die Maus dreht die Kamera (umschauen).</li>
<li><kbd>Rechtsklick</kbd> oder <kbd>Esc</kbd>: Auswahl lösen.</li>
</ul>
<p>Die Leiste hat Reiter: <strong>Auswahl</strong> (nur wenn etwas im Ring war), <strong>Am Punkt</strong>, <strong>Spawnpunkte</strong> und <strong>Welt</strong> – je nach Recht. Einzelne Einträge lassen sich abhaken; Aktionen treffen nur die angehakten. Gefährliche Knöpfe (Kicken, Bannen, Revier freigeben, Spawnpunkt entfernen) fragen erst auf dem Knopf nach – zweiter Klick führt aus.</p>`,
        },
        {
            id: 'a-picker-players',
            level: 3,
            rights: ['picker'],
            title: { de: 'Spieler in der Auswahl', en: 'Players in the selection' },
            tags: { de: 'spieler auswahl heilen alter jungtier alt kicken' },
            de: `<p>Dieselben Aktionen wie im Admin-Menü, jede mit ihrem eigenen Recht: Hinteleportieren und Zuschauen (nur mit genau einem Haken), Herholen, Heilen, Wiederbeleben, Sperren zurücksetzen, Kicken und Bannen. Dazu:</p>
<ul>
<li><strong>Alter setzen</strong> (<code>setAge</code>): Jungtier, Erwachsen, Alt – oder eine Stundenzahl.</li>
<li><strong>Mysteriös</strong> (<code>mystery</code>, Owner): siehe <a href="#a-mystery">Mysteriöses verschenken</a>.</li>
</ul>`,
        },
        {
            id: 'a-picker-npcs',
            level: 3,
            rights: ['picker'],
            title: { de: 'NPC-Tiere und Kadaver', en: 'NPC animals and carcasses' },
            tags: { de: 'npc tiere töten aas einfrieren auftauen herholen entfernen rudel neu spawnen revier freigeben kadaver' },
            de: `<p><strong>NPC-Tiere:</strong> Töten, Töten als Aas, Herholen, Einfrieren, Auftauen, Entfernen. Tiere eines NPC-Rudels zeigen ihr Rudel und Revier; dazu „Rudel neu spawnen“ und „Revier des Rudels freigeben“ (zusätzlich Recht <code>territory</code>).</p>
<p><strong>Kadaver:</strong> „Sofort zu Aas machen“ (davon fressen zählt sofort als Aas, Aasfieber möglich) und Entfernen.</p>
<div class="hb-tip"><p>Begleiter, legendäre Tiere und Platzhalter von Spielern werden nie getötet oder entfernt – die Leiste weist darauf hin.</p></div>`,
        },
        {
            id: 'a-picker-point',
            level: 3,
            rights: ['picker'],
            title: { de: 'Am Punkt: Tiere spawnen, teleportieren', en: 'At the spot: spawn animals, teleport' },
            tags: { de: 'am punkt spawnen tier liste kategorie teleportieren' },
            de: `<p>Ein Klick auf leeren Boden öffnet „Am Punkt“. Die Tierliste ist nach Kategorie gegliedert (Wildtiere, Vögel, Nutztiere, Hunde, Pferde, Reptilien, Fische, Online-Modelle), darin nach Namen sortiert; Suche und Kategorie-Filter oben. Tier wählen, Anzahl (höchstens 10), <strong>spawnen</strong> – die Tiere sind wild. <strong>Hierher teleportieren</strong> bringt dich an den Punkt.</p>`,
        },
        {
            id: 'a-spawnpoints',
            level: 4,
            rights: ['spawnPoints'],
            title: { de: 'Spawnpunkte neuer Tiere', en: 'Spawn points of new animals' },
            tags: { de: 'spawnpunkt start neues tier klasse fleischfresser pflanzenfresser allesfresser art' },
            de: `<p>Wo ein neu erstelltes Tier zum ersten Mal in die Welt kommt:</p>
<ol>
<li>Mit dem Werkzeug auf die gewünschte Stelle klicken und in die Richtung schauen, in die das Tier schauen soll.</li>
<li>Reiter <strong>Spawnpunkte</strong> → „Neuer Spawnpunkt am gewählten Punkt“.</li>
<li><strong>Für:</strong> „Alle Tiere einer Gruppe“ (Fleisch-, Pflanzen-, Allesfresser) oder „Ein bestimmtes Tier“ (nach Gruppe und Name sortiert).</li>
<li><strong>Hier setzen</strong>.</li>
</ol>
<p>Ein neues Tier startet an einem zufälligen Punkt <em>seiner Art</em>; hat sie keinen, an einem Punkt <em>seiner Gruppe</em>; sonst am festen Punkt aus dem Code. Pro Gruppe und Art beliebig viele Punkte. Darunter die Liste aller Punkte mit <strong>Hin</strong> und <strong>Entfernen</strong>.</p>`,
        },
        {
            id: 'a-mystery',
            level: 4,
            rights: ['mystery'],
            title: { de: 'Mysteriöses verschenken', en: 'Handing out something mysterious' },
            tags: { de: 'mysteriös kratzpapier sternenhimmel mondamulett glut runenblatt flasche goodie geschenk' },
            de: `<p>Spieler im Werkzeug wählen → Zeile <strong>Mysteriös</strong> → Art wählen → <strong>Geben</strong>. Der Spieler erfährt nur „Du hast etwas Mysteriöses erhalten“ – nicht was und nicht von wem; im Tierbuch erscheint es unter „Mystisches“.</p>
<table class="hb-table">
<thead><tr><th>Art</th><th>Was der Spieler damit tut</th></tr></thead>
<tbody>
<tr><td>Kratzpapier</td><td>kratzt mit der Pfote seines Tiers ein Bild in schwarzes Wachs über Gold</td></tr>
<tr><td>Sternenhimmel</td><td>verbindet Sterne zu einem Sternbild und benennt es</td></tr>
<tr><td>Mondamulett</td><td>öffnet es und sieht den Mond der Nacht, in der du es verschenkt hast; alle acht Phasen geben den Titel „Kind aller Monde“</td></tr>
<tr><td>Glut</td><td>pustet den Rauch in eine Form und hält sie fest</td></tr>
<tr><td>Runenblatt</td><td>zeichnet eine Rune in einem Zug; sie glimmt, wenn sein Tier in einem Revier steht</td></tr>
<tr><td>Leere Flasche</td><td>schreibt eine Flaschenpost; sie landet Stunden bis Tage später anonym bei einem anderen Spieler</td></tr>
</tbody>
</table>
<p>Eine gemeldete Flaschenpost meldet sich bei allen mit dem Recht <code>reports</code>; im Protokoll (Aktion <code>bottleReport</code>) stehen Konto, Tier und Text des Schreibers.</p>`,
        },
        {
            id: 'a-picker-world',
            level: 3,
            rights: ['world'],
            title: { de: 'Welt im Werkzeug', en: 'World in the tool' },
            tags: { de: 'welt uhrzeit jahreszeit werkzeug' },
            de: `<p>Reiter <strong>Welt</strong>: Uhrzeit eine Stunde vor oder zurück, Jahreszeit festhalten oder „Nach Kalender“.</p>`,
        },
    ],
};
