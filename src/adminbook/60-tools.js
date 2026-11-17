export default {
    id: 'a-tools',
    order: 60,
    icon: 'tools',
    title: { de: 'Werkzeuge', en: 'Tools' },
    sections: [
        {
            id: 'a-tools-tab',
            level: 2,
            title: { de: 'Reiter „Werkzeuge“', en: 'Tab "Tools"' },
            tags: { de: 'werkzeuge reiter kategorien eigenes tier karte editoren technik' },
            de: `<p>Alle Werkzeuge liegen im Reiter <em>Werkzeuge</em>, nach Kategorien: <strong>Eigenes Tier</strong> (Noclip, Gottmodus, Wegpunkt, Guarma), <strong>Karte &amp; Überblick</strong> (Live-Karte, Admin-Sicht, Karte aufdecken), <strong>Editoren</strong> (Quest-Editor, Übersetzungen, Animationen, Doku Trailer-Werkzeug) und <strong>Technik</strong> (Fehlerprotokoll, Web-Code). Eine Kategorie erscheint nur, wenn du einen ihrer Knöpfe nutzen darfst.</p>`,
        },
        {
            id: 'a-noclip',
            level: 2,
            rights: ['noclip'],
            title: { de: 'Noclip', en: 'Noclip' },
            tags: { de: 'noclip fliegen unsichtbar leertaste strg shift' },
            de: `<p>Über den Knopf im Reiter <em>Werkzeuge</em>: du fliegst frei durch die Welt. <kbd>Leertaste</kbd> hoch, <kbd>Strg</kbd> runter, <kbd>Shift</kbd> schnell. Beim Beenden landest du auf dem Boden bzw. der Wasseroberfläche darunter. Während Noclip pausieren deine Bedürfnisse und andere Tasten.</p>`,
        },
        {
            id: 'a-waypoint',
            level: 2,
            rights: ['waypoint', 'revealMap'],
            anyRight: true,
            title: { de: 'Wegpunkt-Teleport und Karte aufdecken', en: 'Waypoint teleport and reveal the map' },
            tags: { de: 'wegpunkt teleport karte aufdecken' },
            de: `<ul>
<li><strong>Zum Wegpunkt</strong> (<code>waypoint</code>): setz auf der Karte einen Wegpunkt und drück den Knopf – du landest dort auf dem Boden, geschützt gegen Fallschaden.</li>
<li><strong>Karte aufdecken</strong> (<code>revealMap</code>): deckt die ganze Karte für dich auf (wird gespeichert).</li>
</ul>`,
        },
        {
            id: 'a-adminview',
            level: 2,
            rights: ['adminView'],
            title: { de: 'Admin-Sicht', en: 'Admin view' },
            tags: { de: 'admin sicht marker spieler markieren farben' },
            de: `<p>An/aus im Reiter <em>Werkzeuge</em>: Jeder Spieler wird markiert wie bei den Sinnen – „#ID Spielername · Tier (Art) · Leben · Rudel“, auch weit weg. Farben: <strong>rot</strong> verdächtig, <strong>blau</strong> Admin, <strong>grün</strong> Neuling, sonst gelb.</p>`,
        },
        {
            id: 'a-chat',
            level: 2,
            rights: ['chat'],
            title: { de: 'Admin-Chat', en: 'Admin chat' },
            tags: { de: 'admin chat t team text befehle tab ergänzen' },
            de: `<p>Taste <kbd>T</kbd>: ein Text-Chat nur für das Team (das Spiel selbst hat keinen). <kbd>Enter</kbd> schickt, <kbd>Esc</kbd> schließt; neue Nachrichten stehen kurz links am Bildschirm.</p>
<p>Eine Zeile mit <code>/</code> am Anfang wird wie in der F8-Konsole ausgeführt; die Ausgabe erscheint grau nur bei dir. <kbd>Tab</kbd> ergänzt Befehle, Unterbefehle und Optionen, <kbd>↑</kbd>/<kbd>↓</kbd> blättert durch Vorschläge oder deine letzten Zeilen.</p>`,
        },
        {
            id: 'a-livemap',
            level: 2,
            rights: ['livemap'],
            title: { de: 'Live-Karte', en: 'Live map' },
            tags: { de: 'live karte livemap spieler suchen spur meldungen ebene rechtsklick' },
            de: `<p>Werkzeuge → <em>Live-Karte</em> (im Spiel über dem Spiel, sonst in der Weboberfläche): alle Spielertiere und die NPC-Tiere um sie herum. Oben „Welt / Guarma“, <kbd>X</kbd> oder <kbd>Esc</kbd> schließt.</p>
<ul>
<li><strong>Suche und Filter:</strong> Spielername, Tiername, Art, Server-ID (<code>12</code> oder <code>#12</code>), Begleiter, Meldungen, Orte. Filter nach Art und Rudel. Admins mit Noclip, Gottmodus oder eingefroren tragen ein kleines Schild.</li>
<li><strong>Spieler anklicken:</strong> dieselben Aktionen wie im Admin-Menü (Hingehen, Herholen, Zuschauen, Heilen, Wiederbeleben, Einfrieren, Befreien, Nachricht – je mit Recht) und „Spielerakte öffnen“.</li>
<li><strong>Rechtsklick auf die Karte:</strong> „Hierher teleportieren“ (Recht <code>waypoint</code>), Wegpunkt setzen/entfernen, Koordinaten kopieren.</li>
<li><strong>Ebene „Meldungen“</strong> und <strong>Spur</strong> des gewählten Spielers (Recht <code>reports</code>).</li>
<li><strong>NPC-Tiere</strong> (Recht <code>picker</code>) und <strong>Reviere</strong> (Recht <code>territory</code>) haben eigene Knöpfe – siehe <a href="#a-picker">Auswahl-Werkzeug</a> und <a href="#a-territories">Reviere</a>.</li>
</ul>`,
        },
        {
            id: 'a-godmode',
            level: 3,
            rights: ['godmode'],
            title: { de: 'Gottmodus', en: 'God mode' },
            tags: { de: 'gottmodus godmode unverwundbar' },
            de: `<p>Dein eigenes Tier nimmt keinen Schaden, geht nie zu Boden, wilde Tiere greifen es nicht an, Hunger, Durst und Schlaf bleiben stehen. Das HUD zeigt das Abzeichen „Gottmodus“. Er endet von selbst beim Abmelden, Tierwechsel oder Tod. Für Events und Tests, nicht für normales Spielen.</p>`,
        },
        {
            id: 'a-guarma',
            level: 3,
            rights: ['guarma'],
            title: { de: 'Nach Guarma', en: 'To Guarma' },
            tags: { de: 'guarma insel admin zurück' },
            de: `<p>Bringt dich auf die Admin-Insel Guarma und merkt sich, wo du standest. Erneut klicken bringt dich zurück – auch nach einem Relog. Spieler ohne das Recht werden dort als Sperrgebiet gemeldet.</p>`,
        },
    ],
};
