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
            tags: {
                de: 'auswahl werkzeug picker bild runter ring mausrad doppelklick alt umschauen',
                en: 'selection tool picker page down ring mouse wheel double click alt look around',
            },
            de: `<p><kbd>Bild↓</kbd> schaltet das Werkzeug ein und aus. Ein Mauszeiger erscheint, die Kamera steht still, ein Ring am Boden folgt der Maus und rastet an Tieren ein.</p>
<ul>
<li><kbd>Mausrad</kbd>: Ring größer/kleiner (0,5–60 m).</li>
<li><kbd>Linksklick</kbd>: wählt alles im Ring – rechts öffnet sich die Leiste.</li>
<li><kbd>Doppelklick</kbd> auf eine Stelle ohne Tier: dorthin teleportieren.</li>
<li><kbd>Alt</kbd> halten: Cursor weg, die Maus dreht die Kamera (umschauen).</li>
<li><kbd>Rechtsklick</kbd> oder <kbd>Esc</kbd>: Auswahl lösen.</li>
</ul>
<p>Die Leiste hat Reiter: <strong>Auswahl</strong> (nur wenn etwas im Ring war), <strong>Am Punkt</strong>, <strong>Spawnpunkte</strong> und <strong>Welt</strong> – je nach Recht. Einzelne Einträge lassen sich abhaken; Aktionen treffen nur die angehakten. Gefährliche Knöpfe (Kicken, Bannen, Revier freigeben, Spawnpunkt entfernen) fragen erst auf dem Knopf nach – zweiter Klick führt aus.</p>
<p>Jede Aktion hat ein eigenes Recht: <code>pickerTeleport</code> (Doppelklick, „Hierher teleportieren“), <code>npcControl</code> (herholen, einfrieren, auftauen), <code>npcKill</code> (töten, Aas, entfernen), <code>npcPacks</code> (NPC-Rudel), <code>spawnAnimals</code> (Tiere spawnen). Ohne das Recht fehlt der Knopf.</p>`,
            en: `<p><kbd>Page Down</kbd> turns the tool on and off. A mouse cursor appears, the camera stands still, and a ring on the ground follows the mouse and snaps to animals.</p>
<ul>
<li><kbd>Mouse wheel</kbd>: make the ring bigger/smaller (0.5–60 m).</li>
<li><kbd>Left click</kbd>: selects everything in the ring – the panel opens on the right.</li>
<li><kbd>Double click</kbd> on a spot without an animal: teleport there.</li>
<li>Hold <kbd>Alt</kbd>: the cursor disappears and the mouse turns the camera (look around).</li>
<li><kbd>Right click</kbd> or <kbd>Esc</kbd>: clear the selection.</li>
</ul>
<p>The panel has tabs: <strong>Selection</strong> (only if something was in the ring), <strong>Spot</strong>, <strong>Spawn points</strong> and <strong>World</strong> – depending on your rights. You can tick single entries; actions only affect the ticked ones. Dangerous buttons (Kick, Ban, free territory, remove spawn point) ask for confirmation on the button first – a second click carries it out.</p>
<p>Every action has its own right: <code>pickerTeleport</code> (double click, “Teleport here”), <code>npcControl</code> (bring, freeze, unfreeze), <code>npcKill</code> (kill, carrion, remove), <code>npcPacks</code> (NPC packs), <code>spawnAnimals</code> (spawn animals). Without the right the button is missing.</p>`,
        },
        {
            id: 'a-picker-players',
            level: 3,
            rights: ['picker'],
            title: { de: 'Spieler in der Auswahl', en: 'Players in the selection' },
            tags: {
                de: 'spieler auswahl heilen alter jungtier alt kicken',
                en: 'players selection heal age juvenile old kick',
            },
            de: `<p>Dieselben Aktionen wie im Admin-Menü, jede mit ihrem eigenen Recht: Hinteleportieren und Zuschauen (nur mit genau einem Haken), Herholen, Heilen, Wiederbeleben, Sperren zurücksetzen, Kicken und Bannen. Dazu:</p>
<ul>
<li><strong>Alter setzen</strong> (<code>setAge</code>): Jungtier, Erwachsen, Alt – oder eine Stundenzahl.</li>
<li><strong>Mysteriös</strong> (<code>mystery</code>, Owner): siehe <a href="#a-mystery">Mysteriöses verschenken</a>.</li>
</ul>`,
            en: `<p>The same actions as in the admin menu, each with its own right: Go to and Spectate (only with exactly one tick), Bring, Heal, Revive, Reset waiting times, Kick and Ban. In addition:</p>
<ul>
<li><strong>Set age</strong> (<code>setAge</code>): Juvenile, Adult, Old – or a number of hours.</li>
<li><strong>Mysterious</strong> (<code>mystery</code>, Owner): see <a href="#a-mystery">Handing out something mysterious</a>.</li>
</ul>`,
        },
        {
            id: 'a-picker-npcs',
            level: 3,
            rights: ['npcControl', 'npcKill', 'npcPacks'],
            anyRight: true,
            title: { de: 'NPC-Tiere und Kadaver', en: 'NPC animals and carcasses' },
            tags: {
                de: 'npc tiere töten aas einfrieren auftauen herholen entfernen rudel neu spawnen revier freigeben kadaver',
                en: 'npc animals kill carrion freeze unfreeze bring remove pack spawn anew respawn free territory carcass carcasses',
            },
            de: `<p><strong>NPC-Tiere:</strong> Töten, Töten als Aas, Herholen, Einfrieren, Auftauen, Entfernen. Tiere eines NPC-Rudels zeigen ihr Rudel und Revier; dazu „Rudel neu spawnen“ und „Revier des Rudels freigeben“ (zusätzlich Recht <code>territory</code>).</p>
<p><strong>Kadaver:</strong> „Sofort zu Aas machen“ (davon fressen zählt sofort als Aas, Aasfieber möglich) und Entfernen.</p>
<div class="hb-tip"><p>Begleiter, legendäre Tiere und Platzhalter von Spielern werden nie getötet oder entfernt – die Leiste weist darauf hin.</p></div>
<p>Rechte: Herholen, Einfrieren, Auftauen <code>npcControl</code>; Töten, Aas, Entfernen (auch Kadaver) <code>npcKill</code>; Rudel neu spawnen <code>npcPacks</code>, Revier freigeben <code>npcPacks</code> und <code>territory</code>.</p>`,
            en: `<p><strong>NPC animals:</strong> Kill, Kill as carrion, Bring, Freeze, Unfreeze, Remove. Animals of an NPC pack show their pack and territory; there are also “Spawn pack anew” and “Free pack territory” (additionally needs the right <code>territory</code>).</p>
<p><strong>Carcasses:</strong> “Make carrion now” (eating from it counts as carrion right away, carrion fever is possible) and Remove.</p>
<div class="hb-tip"><p>Companions, legendary animals and stand-ins of players are never killed or removed – the panel points this out.</p></div>
<p>Rights: bring, freeze, unfreeze <code>npcControl</code>; kill, carrion, remove (carcasses too) <code>npcKill</code>; spawn pack anew <code>npcPacks</code>, free territory <code>npcPacks</code> and <code>territory</code>.</p>`,
        },
        {
            id: 'a-picker-point',
            level: 3,
            rights: ['spawnAnimals', 'pickerTeleport'],
            anyRight: true,
            title: { de: 'Am Punkt: Tiere spawnen, teleportieren', en: 'At the spot: spawn animals, teleport' },
            tags: {
                de: 'am punkt spawnen tier liste kategorie teleportieren',
                en: 'spot spawn animal list category teleport',
            },
            de: `<p>Ein Klick auf leeren Boden öffnet „Am Punkt“. Die Tierliste ist nach Kategorie gegliedert (Wildtiere, Vögel, Nutztiere, Hunde, Pferde, Reptilien, Fische, Online-Modelle), darin nach Namen sortiert; Suche und Kategorie-Filter oben. Tier wählen, Anzahl (höchstens 10), <strong>spawnen</strong> – die Tiere sind wild. <strong>Hierher teleportieren</strong> bringt dich an den Punkt.</p>`,
            en: `<p>A click on empty ground opens “Spot”. The animal list is grouped by category (Wild animals, Birds, Farm animals, Dogs, Horses, Reptiles, Fish, Online models) and sorted by name within each; search and category filter are at the top. Pick an animal and a number (at most 10), then <strong>spawn</strong> – the animals are wild. <strong>Teleport here</strong> takes you to the spot.</p>`,
        },
        {
            id: 'a-spawnpoints',
            level: 4,
            rights: ['spawnPoints'],
            title: { de: 'Spawnpunkte neuer Tiere', en: 'Spawn points of new animals' },
            tags: {
                de: 'spawnpunkt start neues tier klasse fleischfresser pflanzenfresser allesfresser art',
                en: 'spawn point start new animal class group carnivore herbivore omnivore species',
            },
            de: `<p>Wo ein neu erstelltes Tier zum ersten Mal in die Welt kommt:</p>
<ol>
<li>Mit dem Werkzeug auf die gewünschte Stelle klicken und in die Richtung schauen, in die das Tier schauen soll.</li>
<li>Reiter <strong>Spawnpunkte</strong> → „Neuer Spawnpunkt am gewählten Punkt“.</li>
<li><strong>Für:</strong> „Alle Tiere einer Gruppe“ (Fleisch-, Pflanzen-, Allesfresser) oder „Ein bestimmtes Tier“ (nach Gruppe und Name sortiert).</li>
<li><strong>Hier setzen</strong>.</li>
</ol>
<p>Ein neues Tier startet an einem zufälligen Punkt <em>seiner Art</em>; hat sie keinen, an einem Punkt <em>seiner Gruppe</em>; sonst am festen Punkt aus dem Code. Pro Gruppe und Art beliebig viele Punkte. Darunter die Liste aller Punkte mit <strong>Hin</strong> und <strong>Entfernen</strong>.</p>`,
            en: `<p>Where a newly created animal enters the world for the first time:</p>
<ol>
<li>Click the spot you want with the tool and look in the direction the animal should face.</li>
<li>Tab <strong>Spawn points</strong> → “New spawn point at the selected spot”.</li>
<li><strong>For:</strong> “Every animal of a group” (carnivores, herbivores, omnivores) or “One animal” (sorted by group and name).</li>
<li><strong>Set here</strong>.</li>
</ol>
<p>A new animal starts at a random point of <em>its species</em>; if the species has none, at a point of <em>its group</em>; otherwise at the fixed point from the code. You can set as many points per group and species as you like. Below is the list of all points with <strong>Go there</strong> and <strong>Remove</strong>.</p>`,
        },
        {
            id: 'a-mystery',
            level: 4,
            rights: ['mystery'],
            title: { de: 'Mysteriöses verschenken', en: 'Handing out something mysterious' },
            tags: {
                de: 'mysteriös kratzpapier sternenhimmel mondamulett glut runenblatt flasche goodie geschenk',
                en: 'mysterious scratch paper night sky moon amulet ember rune page bottle goodie gift',
            },
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
            en: `<p>Select a player with the tool → row <strong>Mysterious</strong> → pick the kind → <strong>Give</strong>. The player only learns “You have received something mysterious” – not what it is and not from whom; in the animal book it appears under “Mysterious”.</p>
<table class="hb-table">
<thead><tr><th>Kind</th><th>What the player does with it</th></tr></thead>
<tbody>
<tr><td>Scratch paper</td><td>scratches a picture into black wax over gold with their animal's paw</td></tr>
<tr><td>Night sky</td><td>joins stars into a constellation and names it</td></tr>
<tr><td>Moon amulet</td><td>opens it and sees the moon of the night you gave it; all eight phases give the title “Child of All Moons”</td></tr>
<tr><td>Ember</td><td>blows the smoke into a shape and holds it</td></tr>
<tr><td>Rune page</td><td>draws a rune in one stroke; it glows while their animal stands in a territory</td></tr>
<tr><td>Empty bottle</td><td>writes a bottle post; hours to days later it reaches another player anonymously</td></tr>
</tbody>
</table>
<p>A reported bottle post is announced to everyone with the right <code>reports</code>; the log (action <code>bottleReport</code>) shows the writer's account, animal and text.</p>`,
        },
        {
            id: 'a-picker-world',
            level: 3,
            rights: ['worldTime', 'worldSeason'],
            anyRight: true,
            title: { de: 'Welt im Werkzeug', en: 'World in the tool' },
            tags: {
                de: 'welt uhrzeit jahreszeit werkzeug',
                en: 'world time of day season tool',
            },
            de: `<p>Reiter <strong>Welt</strong>: Uhrzeit eine Stunde vor oder zurück, Jahreszeit festhalten oder „Nach Kalender“.</p>
<p>Uhrzeit braucht <code>worldTime</code>, Jahreszeit <code>worldSeason</code>.</p>`,
            en: `<p>Tab <strong>World</strong>: move the time one hour forward or back, fix the season or set it to “By calendar”.</p>
<p>Time needs <code>worldTime</code>, season <code>worldSeason</code>.</p>`,
        },
    ],
};
