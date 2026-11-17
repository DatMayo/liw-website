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
            tags: { de: 'rolle stufe tester moderator admin owner gruppe ace server.cfg', en: 'role level tester moderator admin owner group ace server.cfg' },
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
            en: `<p>Every team member has a <strong>level</strong>. It comes from the highest role you have – given in the <code>server.cfg</code> or in the admin menu:</p>
<table class="hb-table">
<thead><tr><th>Level</th><th>Role</th><th>Meant for</th></tr></thead>
<tbody>
<tr><td>1</td><td>Tester</td><td>Test mode and developer commands (<code>/liwdev</code>), no admin menu</td></tr>
<tr><td>2</td><td>Moderator</td><td>Looking after players: go to them, help, warn, time-out, kick, handle reports</td></tr>
<tr><td>3</td><td>Admin</td><td>Also ban, world, territories, packs, characters, selection tool, editors</td></tr>
<tr><td>4</td><td>Owner</td><td>Everything, including settings, permissions and special things (mysterious items, spawn points)</td></tr>
</tbody>
</table>
<p>A higher role always has all the rights of the lower ones. At the top of this page you pick your role – then you only see the sections you can use. Above each section it says from which role it applies and which right is behind it.</p>
<div class="hb-tip"><p>If you only have single rights (without a role), pick the next lower role and also look at the sections for your rights. The name of the right is shown above each section.</p></div>`,
        },
        {
            id: 'a-single-rights',
            level: 1,
            title: { de: 'Einzelrechte und Aufgabengruppen', en: 'Single rights and task groups' },
            tags: { de: 'einzelrecht aufgabengruppe support eventteam weltenbauer questautor übersetzer technik helfer meldungen strafen anticheat charakterpflege wildhüter reviere rudel probezeit trial', en: 'single right task group support event team world builder quest author translator tech helper reports sanctions anti-cheat character care warden territories packs trial' },
            de: `<p>Jeder Teil des Admin-Menüs ist ein <strong>eigenes Recht</strong>. Neben der Stufe kann man jemandem einzelne Rechte geben – etwa nur „Meldungen“ oder nur „Übersetzungen“. Rechte aus Stufe, Aufgabengruppen und Einzelrechten zählen zusammen.</p>
<p><strong>Aufgabengruppen</strong> bündeln die Rechte für eine Aufgabe, ohne eine Stufe zu geben. Ein Teammitglied kann neben seiner Stufe in beliebig vielen sein:</p>
<dl>
<dt>Support</dt><dd>Hingehen, Herholen, Zuschauen, Heilen, Wiederbeleben, Wartezeiten, Charaktere, Spielerakte, Fehlerprotokoll, Meldungen, Kämpfe, Notizen, Verwarnen, Auszeit, neuen Namen verlangen, Nachricht, Einfrieren, Befreien, Zur Auswahl.</dd>
<dt>Event-Team</dt><dd>Hingehen, Herholen, Zuschauen, Heilen, Wiederbeleben, Uhrzeit, Wetter, Jahreszeit, Beerengebiete, Guarma, Noclip, Wegpunkt, Gottmodus, Gedenksteine, Live-Karte, Admin-Sicht.</dd>
<dt>Weltenbauer</dt><dd>Reviere, Uhrzeit, Wetter, Jahreszeit, Beerengebiete, Gedenksteine, Noclip, Wegpunkt, Karte aufdecken, Guarma.</dd>
<dt>Quest-Autor / Quest-Leitung</dt><dd>Quest-Editor (die Leitung zusätzlich Freigeben und „vertrauter Ersteller“), Noclip, Wegpunkt.</dd>
<dt>Übersetzer</dt><dd>Übersetzungs-Editor.</dd>
<dt>Technik</dt><dd>Fehlerprotokoll, Live-Karte, Aktionsprotokoll, Entwickler-Befehle.</dd>
<dt>Helfer</dt><dd>Nachricht, Admin-Chat, Hingehen, Befreien, Heilen, Wartezeiten.</dd>
<dt>Meldungen</dt><dd>Meldungen, Spielerakte, Kämpfe, Notizen, Zuschauen, Hingehen, Live-Karte – sichten, ohne zu strafen.</dd>
<dt>Strafen</dt><dd>Verwarnen, Auszeit, Kicken, Bannen, Offline-Bann, Entbannen, Spielerakte, Notizen, Kämpfe.</dd>
<dt>Anti-Cheat</dt><dd>Spielerakte, Verdachts-Flag entfernen, Kämpfe, Zuschauen, Admin-Sicht, Live-Karte, Aktionsprotokoll.</dd>
<dt>Charakterpflege</dt><dd>Charaktere, Art ändern, neuen Namen verlangen, Schnappschüsse, Tiere herausnehmen, Tote wiederbeleben, Alter, Plätze, Umbenennungen/Fellwechsel, Titel.</dd>
<dt>Wildhüter</dt><dd>Auswahl-Werkzeug mit Hinteleportieren, Steuern, Töten, Rudel bilden und Tiere spawnen; Noclip, Wegpunkt, Live-Karte.</dd>
<dt>Reviere &amp; Rudel</dt><dd>Reviere, Rudel, Gedenksteine, Live-Karte, Wegpunkt.</dd>
<dt>Probezeit</dt><dd>Für Neue im Team, nur zuschauen: Meldungen, Spielerakte, Kämpfe, Zuschauen, Live-Karte, Admin-Sicht, Admin-Chat.</dd>
</dl>
<p>Vergeben werden Rollen, Gruppen und Einzelrechte im Reiter <em>Berechtigungen</em> (siehe <a href="#a-permissions">Berechtigungen vergeben</a>).</p>`,
            en: `<p>Every part of the admin menu is a <strong>right of its own</strong>. Besides the level, you can give someone single rights – for example only “Reports” or only “Translations”. Rights from the level, task groups and single rights add up.</p>
<p><strong>Task groups</strong> bundle the rights for one task without giving a level. A team member can be in any number of them besides their level:</p>
<dl>
<dt>Support</dt><dd>Go to, bring, spectate, heal, revive, waiting times, characters, player file, error log, reports, fights, notes, warn, time-out, demand a new name, message, freeze, unstuck, to selection.</dd>
<dt>Event team</dt><dd>Go to, bring, spectate, heal, revive, time, weather, season, berry areas, Guarma, noclip, waypoint, god mode, memorial stones, live map, admin view.</dd>
<dt>World builder</dt><dd>Territories, time, weather, season, berry areas, memorial stones, noclip, waypoint, reveal map, Guarma.</dd>
<dt>Quest author / quest lead</dt><dd>Quest editor (the lead can also release quests and is a “trusted author”), noclip, waypoint.</dd>
<dt>Translator</dt><dd>Translation editor.</dd>
<dt>Tech</dt><dd>Error log, live map, action log, developer commands.</dd>
<dt>Helper</dt><dd>Message, admin chat, go to, unstuck, heal, waiting times.</dd>
<dt>Reports</dt><dd>Reports, player file, fights, notes, spectate, go to, live map – look into things without punishing.</dd>
<dt>Sanctions</dt><dd>Warn, time-out, kick, ban, offline ban, unban, player file, notes, fights.</dd>
<dt>Anti-cheat</dt><dd>Player file, remove the suspicion flag, fights, spectate, admin view, live map, action log.</dd>
<dt>Character care</dt><dd>Characters, change species, demand a new name, snapshots, take out animals, revive dead characters, age, slots, renames/coat changes, titles.</dd>
<dt>Warden</dt><dd>Selection tool with teleport to, control, kill, form packs and spawn animals; noclip, waypoint, live map.</dd>
<dt>Territories &amp; packs</dt><dd>Territories, packs, memorial stones, live map, waypoint.</dd>
<dt>Trial</dt><dd>For new team members, watching only: reports, player file, fights, spectate, live map, admin view, admin chat.</dd>
</dl>
<p>Roles, groups and single rights are given in the <em>Permissions</em> tab (see <a href="#a-permissions">Giving permissions</a>).</p>`,
        },
        {
            id: 'a-menu',
            level: 2,
            rights: ['menu'],
            title: { de: 'Das Admin-Menü', en: 'The admin menu' },
            tags: { de: 'admin-menü bild hoch pageup öffnen reiter deckkraft live aktualisierung', en: 'admin menu page up pageup open tab opacity live refresh' },
            de: `<p>Öffnen und schließen mit <kbd>Bild↑</kbd> (Befehl <code>liw_admin</code>, frei belegbar unter Einstellungen → Tastenbelegung → RedM). Du siehst nur die Reiter, für die du ein Recht hast.</p>
<ul>
<li><strong>Lagebild</strong> – was gerade los ist: Spieler online, Neulinge, Verdächtige, offene Meldungen, Auszeiten, letzte Moderation, letzte Tode, Uhrzeit und Wetter. Ein Klick auf eine Karte springt zum Spieler bzw. zur Meldung.</li>
<li><strong>Spieler</strong> – Liste aller Spieler online; ab zwei Buchstaben in der Suche auch passende Offline-Konten (markiert „offline“).</li>
<li><strong>Charaktere, Meldungen, Spielerakte, Kicks &amp; Banns, Reviere, Rudel, Beeren, Gedenksteine, Welt, Werkzeuge, Protokoll, Berechtigungen, Einstellungen</strong> – je nach Recht.</li>
</ul>
<p>Oben im Menü regelt ein <strong>Deckkraft-Regler</strong> (30–100 %), wie durchsichtig der Hintergrund ist; das wird pro Admin gespeichert. Spielerliste und offener Spieler aktualisieren sich alle 2 Sekunden, Lagebild und Meldungen alle 10 Sekunden – nicht während du in ein Feld tippst.</p>
<div class="hb-tip"><p>Lange Listen zeigen erst die ersten Einträge und darunter „… weitere anzeigen“.</p></div>`,
            en: `<p>Open and close it with <kbd>Page Up</kbd> (command <code>liw_admin</code>, can be rebound under Settings → Key Bindings → RedM). You only see the tabs you have a right for.</p>
<ul>
<li><strong>Situation</strong> – what is going on right now: players online, newcomers, suspicious players, open reports, time-outs, recent moderation, recent deaths, time of day and weather. A click on a card jumps to the player or the report.</li>
<li><strong>Players</strong> – list of all players online; from two letters in the search it also shows matching offline accounts (marked “offline”).</li>
<li><strong>Characters, Reports, Player file, Kicks &amp; bans, Territories, Packs, Berries, Memorials, World, Tools, Log, Permissions, Settings</strong> – depending on your rights.</li>
</ul>
<p>At the top of the menu, an <strong>opacity slider</strong> (30–100 %) sets how see-through the background is; it is saved per admin. The player list and the open player refresh every 2 seconds, the situation page and reports every 10 seconds – but not while you are typing in a field.</p>
<div class="hb-tip"><p>Long lists show the first entries only, with “Show … more” below.</p></div>`,
        },
        {
            id: 'a-web',
            level: 2,
            rights: ['menu'],
            title: { de: 'Weboberfläche und Web-Code', en: 'Web interface and web code' },
            tags: { de: 'web browser panel discord login code liwweb weboberfläche', en: 'web browser panel discord login code liwweb web interface' },
            de: `<p>Admin-Menü, Quest-Editor, Übersetzungen, Fehlerprotokoll und Live-Karte gibt es auch im <strong>Browser</strong> – ohne im Spiel zu sein.</p>
<ol>
<li>Anmelden mit <strong>Discord</strong> oder mit einem <strong>Login-Code</strong>: im Spiel Admin-Menü → Werkzeuge → Technik → <em>Web-Code</em> (oder <code>/liwweb</code>). Der Code hat 6 Ziffern, gilt 5 Minuten und nur einmal.</li>
<li>Die Anmeldung hält 7 Tage, auch über Serverneustarts.</li>
<li>Du siehst dieselben Rechte wie im Spiel; der Server prüft sie bei jeder Anfrage neu.</li>
</ol>
<p>Was die Spielwelt braucht – Hingehen, Herholen, Zuschauen, Noclip, Wegpunkt, Revier- und Beeren-Editor, Grenzen anzeigen, „Mir geben“ – fehlt im Web. Alles, was du dort tust, steht im Protokoll mit „(web)“ hinter deinem Namen.</p>`,
            en: `<p>The admin menu, quest editor, translations, error log and live map are also available in the <strong>browser</strong> – without being in the game.</p>
<ol>
<li>Log in with <strong>Discord</strong> or with a <strong>login code</strong>: in the game, admin menu → Tools → Technical → <em>Web code</em> (or <code>/liwweb</code>). The code has 6 digits, is valid for 5 minutes and works only once.</li>
<li>The login lasts 7 days, even across server restarts.</li>
<li>You have the same rights as in the game; the server checks them again on every request.</li>
</ol>
<p>Whatever needs the game world – go to, bring, spectate, noclip, waypoint, territory and berry editor, show borders, “Give to me” – is missing on the web. Everything you do there is in the log with “(web)” after your name.</p>`,
        },
        {
            id: 'a-rules',
            level: 2,
            title: { de: 'Grundsätze: Protokoll und Grenzen', en: 'Principles: log and limits' },
            tags: { de: 'protokoll grenzen stufe selbst höher webhook regeln', en: 'log limits level self higher webhook rules' },
            de: `<ul>
<li><strong>Alles wird protokolliert:</strong> Jede Aktion steht mit Admin, Ziel und Details im Aktionsprotokoll (und optional im Discord-Webhook). Moderationen (Verwarnung, Auszeit, Kick, Bann) zusätzlich im Verlauf des Spielers.</li>
<li><strong>Nicht nach oben:</strong> Bannen, Kicken, Einfrieren, Zur Auswahl, Auszeit und Verwarnung gehen nur gegen Spieler <em>unter</em> deiner Stufe. Wer nur Einzelrechte hat, zählt als ohne Stufe.</li>
<li><strong>Nicht an dich selbst:</strong> Rechte und Rollen vergibst du nie an dich selbst.</li>
<li><strong>Admins werden nicht verdächtigt:</strong> Noclip, Teleports und Tests des Teams erzeugen keine Verdachtsmeldungen.</li>
</ul>
<div class="hb-warn"><p>Bevor du jemanden bannst oder kickst: Grund klar und sachlich formulieren – der Spieler sieht ihn, und er steht dauerhaft im Verlauf.</p></div>`,
            en: `<ul>
<li><strong>Everything is logged:</strong> Every action is in the action log with admin, target and details (and optionally in the Discord webhook). Moderation (warning, time-out, kick, ban) is also in the player's history.</li>
<li><strong>Not upwards:</strong> Ban, kick, freeze, to selection, time-out and warning only work against players <em>below</em> your level. If you only have single rights, you count as having no level.</li>
<li><strong>Not to yourself:</strong> You never give rights and roles to yourself.</li>
<li><strong>Admins are not suspected:</strong> Noclip, teleports and tests by the team do not create suspicion reports.</li>
</ul>
<div class="hb-warn"><p>Before you ban or kick someone: write the reason clearly and objectively – the player sees it, and it stays in the history for good.</p></div>`,
        },
    ],
};
