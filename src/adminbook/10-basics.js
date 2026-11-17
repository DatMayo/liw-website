export default {
    id: 'a-basics',
    order: 10,
    icon: 'start',
    title: { de: 'Grundlagen', en: 'Basics' },
    sections: [
        {
            id: 'a-roles',
            level: 1,
            title: { de: 'Rollen und Stufen', en: 'Roles and levels' },
            tags: { de: 'rolle stufe tester moderator admin owner gruppe ace server.cfg' },
            de: `<p>Jedes Teammitglied hat eine <strong>Stufe</strong>. Sie ergibt sich aus der höchsten Rolle, die man hat – aus der <code>server.cfg</code> oder im Admin-Menü vergeben:</p>
<table class="hb-table">
<thead><tr><th>Stufe</th><th>Rolle</th><th>Gedacht für</th></tr></thead>
<tbody>
<tr><td>1</td><td>Tester</td><td>Testmodus und Entwickler-Befehle (<code>/liwdev</code>), kein Admin-Menü</td></tr>
<tr><td>2</td><td>Moderator</td><td>Spieler betreuen: hingehen, helfen, verwarnen, Auszeit, kicken, Meldungen bearbeiten</td></tr>
<tr><td>3</td><td>Admin</td><td>Zusätzlich bannen, Welt, Reviere, Rudel, Charaktere, Auswahl-Werkzeug, Editoren</td></tr>
<tr><td>4</td><td>Owner</td><td>Alles, auch Einstellungen, Berechtigungen und Sonderdinge (Mysteriöses, Spawnpunkte)</td></tr>
</tbody>
</table>
<p>Eine höhere Rolle hat immer alle Rechte der niedrigeren. Oben auf dieser Seite wählst du deine Rolle – dann siehst du nur die Abschnitte, die du nutzen kannst. Über jedem Abschnitt steht, ab welcher Rolle er gilt und welches Recht dahintersteht.</p>
<div class="hb-tip"><p>Wer nur einzelne Rechte hat (ohne Rolle), wählt die nächstniedrige Rolle und schaut zusätzlich in die Abschnitte seiner Rechte. Der Rechtename steht jeweils über dem Abschnitt.</p></div>`,
        },
        {
            id: 'a-single-rights',
            level: 1,
            title: { de: 'Einzelrechte und Aufgabengruppen', en: 'Single rights and task groups' },
            tags: { de: 'einzelrecht aufgabengruppe support eventteam weltenbauer questautor übersetzer technik' },
            de: `<p>Jeder Teil des Admin-Menüs ist ein <strong>eigenes Recht</strong>. Neben der Stufe kann man jemandem einzelne Rechte geben – etwa nur „Meldungen“ oder nur „Übersetzungen“. Rechte aus Stufe, Aufgabengruppen und Einzelrechten zählen zusammen.</p>
<p><strong>Aufgabengruppen</strong> bündeln die Rechte für eine Aufgabe, ohne eine Stufe zu geben:</p>
<dl>
<dt>Support</dt><dd>Hingehen, Herholen, Zuschauen, Heilen, Wiederbeleben, Wartezeiten, Charaktere, Spielerakte, Fehlerprotokoll, Meldungen, Kämpfe, Notizen, Verwarnen, Auszeit, neuen Namen verlangen, Nachricht, Einfrieren, Befreien, Zur Auswahl.</dd>
<dt>Event-Team</dt><dd>Hingehen, Herholen, Zuschauen, Heilen, Wiederbeleben, Welt, Guarma, Noclip, Wegpunkt, Gottmodus, Gedenksteine, Live-Karte, Admin-Sicht.</dd>
<dt>Weltenbauer</dt><dd>Reviere, Welt, Gedenksteine, Noclip, Wegpunkt, Karte aufdecken, Guarma.</dd>
<dt>Quest-Autor / Quest-Leitung</dt><dd>Quest-Editor (die Leitung zusätzlich Freigeben und „vertrauter Ersteller“), Noclip, Wegpunkt.</dd>
<dt>Übersetzer</dt><dd>Übersetzungs-Editor.</dd>
<dt>Technik</dt><dd>Fehlerprotokoll, Live-Karte, Aktionsprotokoll, Entwickler-Befehle.</dd>
</dl>
<p>Vergeben werden Rollen, Gruppen und Einzelrechte im Reiter <em>Berechtigungen</em> (siehe <a href="#a-permissions">Berechtigungen vergeben</a>).</p>`,
        },
        {
            id: 'a-menu',
            level: 2,
            rights: ['menu'],
            title: { de: 'Das Admin-Menü', en: 'The admin menu' },
            tags: { de: 'admin-menü bild hoch pageup öffnen reiter deckkraft live aktualisierung' },
            de: `<p>Öffnen und schließen mit <kbd>Bild↑</kbd> (Befehl <code>liw_admin</code>, frei belegbar unter Einstellungen → Tastenbelegung → RedM). Du siehst nur die Reiter, für die du ein Recht hast.</p>
<ul>
<li><strong>Lagebild</strong> – was gerade los ist: Spieler online, Neulinge, Verdächtige, offene Meldungen, Auszeiten, letzte Moderation, letzte Tode, Uhrzeit und Wetter. Ein Klick auf eine Karte springt zum Spieler bzw. zur Meldung.</li>
<li><strong>Spieler</strong> – Liste aller Spieler online; ab zwei Buchstaben in der Suche auch passende Offline-Konten (markiert „offline“).</li>
<li><strong>Charaktere, Meldungen, Spielerakte, Kicks &amp; Banns, Reviere, Rudel, Beeren, Gedenksteine, Welt, Werkzeuge, Protokoll, Berechtigungen, Einstellungen</strong> – je nach Recht.</li>
</ul>
<p>Oben im Menü regelt ein <strong>Deckkraft-Regler</strong> (30–100 %), wie durchsichtig der Hintergrund ist; das wird pro Admin gespeichert. Spielerliste und offener Spieler aktualisieren sich alle 2 Sekunden, Lagebild und Meldungen alle 10 Sekunden – nicht während du in ein Feld tippst.</p>
<div class="hb-tip"><p>Lange Listen zeigen erst die ersten Einträge und darunter „… weitere anzeigen“.</p></div>`,
        },
        {
            id: 'a-web',
            level: 2,
            rights: ['menu'],
            title: { de: 'Weboberfläche und Web-Code', en: 'Web interface and web code' },
            tags: { de: 'web browser panel discord login code liwweb weboberfläche' },
            de: `<p>Admin-Menü, Quest-Editor, Übersetzungen, Fehlerprotokoll und Live-Karte gibt es auch im <strong>Browser</strong> – ohne im Spiel zu sein.</p>
<ol>
<li>Anmelden mit <strong>Discord</strong> oder mit einem <strong>Login-Code</strong>: im Spiel Admin-Menü → Werkzeuge → Technik → <em>Web-Code</em> (oder <code>/liwweb</code>). Der Code hat 6 Ziffern, gilt 5 Minuten und nur einmal.</li>
<li>Die Anmeldung hält 7 Tage, auch über Serverneustarts.</li>
<li>Du siehst dieselben Rechte wie im Spiel; der Server prüft sie bei jeder Anfrage neu.</li>
</ol>
<p>Was die Spielwelt braucht – Hingehen, Herholen, Zuschauen, Noclip, Wegpunkt, Revier- und Beeren-Editor, Grenzen anzeigen, „Mir geben“ – fehlt im Web. Alles, was du dort tust, steht im Protokoll mit „(web)“ hinter deinem Namen.</p>`,
        },
        {
            id: 'a-rules',
            level: 2,
            title: { de: 'Grundsätze: Protokoll und Grenzen', en: 'Principles: log and limits' },
            tags: { de: 'protokoll grenzen stufe selbst höher webhook regeln' },
            de: `<ul>
<li><strong>Alles wird protokolliert:</strong> Jede Aktion steht mit Admin, Ziel und Details im Aktionsprotokoll (und optional im Discord-Webhook). Moderationen (Verwarnung, Auszeit, Kick, Bann) zusätzlich im Verlauf des Spielers.</li>
<li><strong>Nicht nach oben:</strong> Bannen, Kicken, Einfrieren, Zur Auswahl, Auszeit und Verwarnung gehen nur gegen Spieler <em>unter</em> deiner Stufe. Wer nur Einzelrechte hat, zählt als ohne Stufe.</li>
<li><strong>Nicht an dich selbst:</strong> Rechte und Rollen vergibst du nie an dich selbst.</li>
<li><strong>Admins werden nicht verdächtigt:</strong> Noclip, Teleports und Tests des Teams erzeugen keine Verdachtsmeldungen.</li>
</ul>
<div class="hb-warn"><p>Bevor du jemanden bannst oder kickst: Grund klar und sachlich formulieren – der Spieler sieht ihn, und er steht dauerhaft im Verlauf.</p></div>`,
        },
    ],
};
