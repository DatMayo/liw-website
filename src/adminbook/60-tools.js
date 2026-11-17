export default {
    id: 'a-tools',
    order: 60,
    icon: 'tools',
    title: { de: 'Werkzeuge', en: 'Tools' },
    sections: [
        {
            id: 'a-tools-tab',
            level: 2,
            title: { de: 'Reiter „Werkzeuge“', en: 'The “Tools” tab' },
            tags: { de: 'werkzeuge reiter kategorien eigenes tier karte editoren technik', en: 'tools tab categories your animal map editors technical' },
            de: `<p>Alle Werkzeuge liegen im Reiter <em>Werkzeuge</em>, nach Kategorien: <strong>Eigenes Tier</strong> (Noclip, Gottmodus, Wegpunkt, Guarma), <strong>Karte &amp; Überblick</strong> (Live-Karte, Admin-Sicht, Karte aufdecken), <strong>Editoren</strong> (Quest-Editor, Übersetzungen, Animationen, Doku Trailer-Werkzeug) und <strong>Technik</strong> (Fehlerprotokoll, Web-Code). Eine Kategorie erscheint nur, wenn du einen ihrer Knöpfe nutzen darfst.</p>`,
            en: `<p>All tools are in the <em>Tools</em> tab, sorted into categories: <strong>Your animal</strong> (noclip, god mode, waypoint, Guarma), <strong>Map &amp; overview</strong> (live map, admin view, reveal map), <strong>Editors</strong> (quest editor, translations, animations, trailer tool docs) and <strong>Technical</strong> (error log, web code). A category only appears if you may use at least one of its buttons.</p>`,
        },
        {
            id: 'a-noclip',
            level: 2,
            rights: ['noclip'],
            title: { de: 'Noclip', en: 'Noclip' },
            tags: { de: 'noclip fliegen unsichtbar leertaste strg shift', en: 'noclip fly invisible space ctrl shift' },
            de: `<p>Über den Knopf im Reiter <em>Werkzeuge</em>: du fliegst frei durch die Welt. <kbd>Leertaste</kbd> hoch, <kbd>Strg</kbd> runter, <kbd>Shift</kbd> schnell. Beim Beenden landest du auf dem Boden bzw. der Wasseroberfläche darunter. Während Noclip pausieren deine Bedürfnisse und andere Tasten.</p>`,
            en: `<p>Via the button in the <em>Tools</em> tab: you fly freely through the world. <kbd>Space</kbd> up, <kbd>Ctrl</kbd> down, <kbd>Shift</kbd> fast. When you end it, you land on the ground or the water surface below you. During noclip your needs and other keys are paused.</p>`,
        },
        {
            id: 'a-waypoint',
            level: 2,
            rights: ['waypoint', 'revealMap'],
            anyRight: true,
            title: { de: 'Wegpunkt-Teleport und Karte aufdecken', en: 'Waypoint teleport and reveal the map' },
            tags: { de: 'wegpunkt teleport karte aufdecken', en: 'waypoint teleport reveal map' },
            de: `<ul>
<li><strong>Zum Wegpunkt</strong> (<code>waypoint</code>): setz auf der Karte einen Wegpunkt und drück den Knopf – du landest dort auf dem Boden, geschützt gegen Fallschaden.</li>
<li><strong>Karte aufdecken</strong> (<code>revealMap</code>): deckt die ganze Karte für dich auf (wird gespeichert).</li>
</ul>`,
            en: `<ul>
<li><strong>To waypoint</strong> (<code>waypoint</code>): set a waypoint on the map and press the button – you land there on the ground, protected from fall damage.</li>
<li><strong>Reveal map</strong> (<code>revealMap</code>): reveals the whole map for you (this is saved).</li>
</ul>`,
        },
        {
            id: 'a-adminview',
            level: 2,
            rights: ['adminView'],
            title: { de: 'Admin-Sicht', en: 'Admin view' },
            tags: { de: 'admin sicht marker spieler markieren farben', en: 'admin view marker players mark colors' },
            de: `<p>An/aus im Reiter <em>Werkzeuge</em>: Jeder Spieler wird markiert wie bei den Sinnen – „#ID Spielername · Tier (Art) · Leben · Rudel“, auch weit weg. Farben: <strong>rot</strong> verdächtig, <strong>blau</strong> Admin, <strong>grün</strong> Neuling, sonst gelb.</p>`,
            en: `<p>On/off in the <em>Tools</em> tab: every player is marked as with the senses – “#ID player name · animal (species) · health · pack”, even far away. Colors: <strong>red</strong> suspicious, <strong>blue</strong> admin, <strong>green</strong> newcomer, otherwise yellow.</p>`,
        },
        {
            id: 'a-chat',
            level: 2,
            rights: ['chat'],
            title: { de: 'Admin-Chat', en: 'Admin chat' },
            tags: { de: 'admin chat t team text befehle tab ergänzen', en: 'admin chat t team text commands tab complete' },
            de: `<p>Taste <kbd>T</kbd>: ein Text-Chat nur für das Team (das Spiel selbst hat keinen). <kbd>Enter</kbd> schickt, <kbd>Esc</kbd> schließt; neue Nachrichten stehen kurz links am Bildschirm.</p>
<p>Eine Zeile mit <code>/</code> am Anfang wird wie in der F8-Konsole ausgeführt; die Ausgabe erscheint grau nur bei dir. <kbd>Tab</kbd> ergänzt Befehle, Unterbefehle und Optionen, <kbd>↑</kbd>/<kbd>↓</kbd> blättert durch Vorschläge oder deine letzten Zeilen.</p>`,
            en: `<p>Key <kbd>T</kbd>: a text chat for the team only (the game itself has none). <kbd>Enter</kbd> sends, <kbd>Esc</kbd> closes; new messages appear briefly on the left of the screen.</p>
<p>A line starting with <code>/</code> is run as in the F8 console; the output appears in grey, only for you. <kbd>Tab</kbd> completes commands, subcommands and options, <kbd>↑</kbd>/<kbd>↓</kbd> scrolls through suggestions or your last lines.</p>`,
        },
        {
            id: 'a-livemap',
            level: 2,
            rights: ['livemap'],
            title: { de: 'Live-Karte', en: 'Live map' },
            tags: { de: 'live karte livemap spieler suchen spur meldungen ebene rechtsklick', en: 'live map livemap players search trail reports layer right click' },
            de: `<p>Werkzeuge → <em>Live-Karte</em> (im Spiel über dem Spiel, sonst in der Weboberfläche): alle Spielertiere und die NPC-Tiere um sie herum. Oben „Welt / Guarma“, <kbd>X</kbd> oder <kbd>Esc</kbd> schließt.</p>
<ul>
<li><strong>Suche und Filter:</strong> Spielername, Tiername, Art, Server-ID (<code>12</code> oder <code>#12</code>), Begleiter, Meldungen, Orte. Filter nach Art und Rudel. Admins mit Noclip, Gottmodus oder eingefroren tragen ein kleines Schild.</li>
<li><strong>Spieler anklicken:</strong> dieselben Aktionen wie im Admin-Menü (Hingehen, Herholen, Zuschauen, Heilen, Wiederbeleben, Einfrieren, Befreien, Nachricht – je mit Recht) und „Spielerakte öffnen“.</li>
<li><strong>Rechtsklick auf die Karte:</strong> „Hierher teleportieren“ (Recht <code>waypoint</code>), Wegpunkt setzen/entfernen, Koordinaten kopieren.</li>
<li><strong>Ebene „Meldungen“</strong> und <strong>Spur</strong> des gewählten Spielers (Recht <code>reports</code>).</li>
<li><strong>NPC-Tiere</strong> (Recht <code>picker</code>) und <strong>Reviere</strong> (Recht <code>territory</code>) haben eigene Knöpfe – siehe <a href="#a-picker">Auswahl-Werkzeug</a> und <a href="#a-territories">Reviere</a>.</li>
</ul>`,
            en: `<p>Tools → <em>Live map</em> (in game on top of the game, otherwise in the web interface): all player animals and the NPC animals around them. At the top “World / Guarma”; <kbd>X</kbd> or <kbd>Esc</kbd> closes it.</p>
<ul>
<li><strong>Search and filters:</strong> player name, animal name, species, server ID (<code>12</code> or <code>#12</code>), companions, reports, places. Filter by species and pack. Admins with noclip, god mode or frozen carry a small badge.</li>
<li><strong>Click a player:</strong> the same actions as in the admin menu (Go to, Bring here, Spectate, Heal, Revive, Freeze, Free, Message – each with its right) and “Open player file”.</li>
<li><strong>Right-click the map:</strong> “Teleport here” (right <code>waypoint</code>), set/remove a waypoint, copy coordinates.</li>
<li><strong>“Reports” layer</strong> and <strong>trail</strong> of the selected player (right <code>reports</code>).</li>
<li><strong>NPC animals</strong> (right <code>picker</code>) and <strong>territories</strong> (right <code>territory</code>) have their own buttons – see <a href="#a-picker">Selection tool</a> and <a href="#a-territories">Territories</a>.</li>
</ul>`,
        },
        {
            id: 'a-godmode',
            level: 3,
            rights: ['godmode'],
            title: { de: 'Gottmodus', en: 'God mode' },
            tags: { de: 'gottmodus godmode unverwundbar', en: 'god mode godmode invulnerable' },
            de: `<p>Dein eigenes Tier nimmt keinen Schaden, geht nie zu Boden, wilde Tiere greifen es nicht an, Hunger, Durst und Schlaf bleiben stehen. Das HUD zeigt das Abzeichen „Gottmodus“. Er endet von selbst beim Abmelden, Tierwechsel oder Tod. Für Events und Tests, nicht für normales Spielen.</p>`,
            en: `<p>Your own animal takes no damage, never goes down, wild animals do not attack it, and hunger, thirst and sleep stay where they are. The HUD shows the “God mode” badge. It ends by itself when you log out, switch animals or die. For events and tests, not for normal play.</p>`,
        },
        {
            id: 'a-guarma',
            level: 3,
            rights: ['guarma'],
            title: { de: 'Nach Guarma', en: 'To Guarma' },
            tags: { de: 'guarma insel admin zurück', en: 'guarma island admin back' },
            de: `<p>Bringt dich auf die Admin-Insel Guarma und merkt sich, wo du standest. Erneut klicken bringt dich zurück – auch nach einem Relog. Spieler ohne das Recht werden dort als Sperrgebiet gemeldet.</p>`,
            en: `<p>Takes you to the admin island Guarma and remembers where you were standing. Clicking again takes you back – even after a relog. Players without the right are reported there for being in a restricted area.</p>`,
        },
    ],
};
