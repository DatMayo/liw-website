export default {
    id: 'a-content',
    order: 90,
    icon: 'gear',
    title: { de: 'Inhalte, Technik, Verwaltung', en: 'Content, tech, administration' },
    sections: [
        {
            id: 'a-devtools',
            level: 1,
            rights: ['devtools'],
            title: { de: 'Testmodus und Entwickler-Befehle', en: 'Test mode and developer commands' },
            tags: {
                de: 'tester testmodus testkatalog liwdev dev panel befehle',
                en: 'tester test mode test catalog test tasks liwdev dev panel commands',
            },
            de: `<p>Tester arbeiten mit dem <strong>Testkatalog</strong> (Befehl <code>/liw_test</code>): Aufgaben je Bereich mit Ergebnis (geht / geht nicht / teilweise) und Kommentar. Admins sehen die Auswertung, starten neue Runden und exportieren einen Bericht.</p>
<p>Die Befehle unter <code>/liwdev</code> helfen beim Testen (Werte setzen, Tiere spawnen, Zustände auslösen); das Dev-Panel listet sie mit Beschreibung, der Admin-Chat ergänzt sie mit <kbd>Tab</kbd>.</p>`,
            en: `<p>Testers work with the <strong>test catalog</strong> (command <code>/liw_test</code>): tasks per area with a result (works / broken / partly) and a comment. Admins see the evaluation, start new rounds and export a report.</p>
<p>The commands under <code>/liwdev</code> help with testing (set values, spawn animals, trigger states); the dev panel lists them with a description, and the admin chat completes them with <kbd>Tab</kbd>.</p>`,
        },
        {
            id: 'a-quests',
            level: 3,
            rights: ['quests', 'questsReview', 'questsTrusted'],
            anyRight: true,
            title: { de: 'Quest-Editor', en: 'Quest editor' },
            tags: {
                de: 'quest editor freigabe entwurf vertrauter ersteller export import titel errungenschaft',
                en: 'quest editor approval review draft trusted creator export import title achievement',
            },
            de: `<p>Werkzeuge → <em>Quest-Editor</em> (auch im Web): Neben-, Tages-, Wochen- und Rudelquests, Errungenschaften und Titel anlegen und ändern – Texte auf Deutsch und Englisch, Ziele, Bedingungen (Art/Gruppe, Level, Rudel, Rang, Alter, Geschlecht), Voraussetzungen, Belohnungen (XP, Ruhm, Titel, Belohnungsfell).</p>
<ul>
<li><strong><code>quests</code></strong> (ab Admin): anlegen und ändern. Entwürfe und Änderungen an aktiven Quests sind <em>Vorschläge</em>; im Spiel bleibt bis zur Freigabe die bisherige Version.</li>
<li><strong><code>questsReview</code></strong> (Owner): Quests anderer freigeben oder ablehnen – nie die eigenen.</li>
<li><strong><code>questsTrusted</code></strong> (Owner oder einzeln): eigene Änderungen gehen ohne Freigabe live.</li>
</ul>
<p>Deaktivieren wirkt sofort; löschen lassen sich nur Entwürfe, die nie im Spiel waren. Mit Hinweisen (fehlende Texte, Ziele …) lässt sich nichts freigeben. Export/Import als JSON.</p>`,
            en: `<p>Tools → <em>Quest editor</em> (also on the web): create and change side, daily, weekly and pack quests, achievements and titles – texts in German and English, goals, conditions (species/group, level, pack, rank, age, sex), prerequisites, rewards (XP, fame, title, reward fur).</p>
<ul>
<li><strong><code>quests</code></strong> (Admin and up): create and change. Drafts and changes to active quests are <em>proposals</em>; the game keeps the previous version until they are approved.</li>
<li><strong><code>questsReview</code></strong> (Owner): approve or reject other people's quests – never your own.</li>
<li><strong><code>questsTrusted</code></strong> (Owner or given individually): your own changes go live without approval.</li>
</ul>
<p>Deactivating takes effect right away; you can only delete drafts that were never in the game. Nothing with open notes (missing texts, goals …) can be approved. Export/import as JSON.</p>`,
        },
        {
            id: 'a-translations',
            level: 3,
            rights: ['translations'],
            title: { de: 'Übersetzungen', en: 'Translations' },
            tags: {
                de: 'übersetzung sprache editor text englisch deutsch neue sprache',
                en: 'translation translations language editor text english german new language',
            },
            de: `<p>Werkzeuge → <em>Übersetzungen</em> (auch im Web): Sprachen anlegen, Texte übersetzen und korrigieren – gilt sofort im Spiel. Fehlende Texte erscheinen auf Englisch; im Feld steht der englische Text als Vorlage. „Zurück zum Code-Text“ stellt den Originaltext wieder her. Quest-Texte auf Deutsch und Englisch ändert man im Quest-Editor, weitere Sprachen hier.</p>`,
            en: `<p>Tools → <em>Translations</em> (also on the web): create languages, translate and correct texts – this applies in the game right away. Missing texts appear in English; the field shows the English text as a template. “Back to the code text” restores the original text. You change quest texts in German and English in the quest editor, other languages here.</p>`,
        },
        {
            id: 'a-errors',
            level: 3,
            rights: ['errors'],
            title: { de: 'Fehlerprotokoll', en: 'Error log' },
            tags: {
                de: 'fehler fehlerprotokoll script fehler gelöst spieler',
                en: 'error errors error log script errors solved resolved players',
            },
            de: `<p>Werkzeuge → <em>Fehlerprotokoll</em> oder <code>/liw_errors</code>: Script-Fehler aller Resources, gruppiert nach Fehler und nach Spieler, mit Häufigkeit und Details. Als gelöst markieren oder wieder öffnen; ein Klick auf einen Spielernamen zeigt dessen Fehler. Aktualisiert sich alle 5 Sekunden.</p>`,
            en: `<p>Tools → <em>Error log</em> or <code>/liw_errors</code>: script errors of all resources, grouped by error and by player, with frequency and details. Mark them as solved or reopen them; a click on a player name shows that player's errors. Refreshes every 5 seconds.</p>`,
        },
        {
            id: 'a-actionlog',
            level: 3,
            rights: ['actionLog'],
            title: { de: 'Aktionsprotokoll', en: 'Action log' },
            tags: {
                de: 'protokoll aktionsprotokoll suche admin befehl ziel',
                en: 'log action log search admin command target',
            },
            de: `<p>Reiter <em>Protokoll</em>: jede Admin-Aktion mit Zeit, Admin, Befehl, Ziel und Details – durchsuchbar nach allem davon. Aktionen aus dem Web tragen „(web)“ hinter dem Namen.</p>`,
            en: `<p>Tab <em>Log</em>: every admin action with time, admin, command, target and details – you can search by any of them. Actions from the web have “(web)” after the name.</p>`,
        },
        {
            id: 'a-settings',
            level: 4,
            rights: ['settings'],
            title: { de: 'Einstellungen', en: 'Settings' },
            tags: {
                de: 'einstellungen config werte live balancing',
                en: 'settings config values live balancing',
            },
            de: `<p>Reiter <em>Einstellungen</em>: alle Config-Werte aller Resources, mit Beschreibung, gespeichert und meist sofort angewendet. Werte mit „[restart]“ greifen erst nach einem Neustart. Jede Änderung steht im Protokoll mit alt → neu.</p>
<div class="hb-warn"><p>Einstellungen wirken für alle Spieler. Im Zweifel erst auf dem Testserver ausprobieren.</p></div>`,
            en: `<p>Tab <em>Settings</em>: all config values of all resources, with a description; they are saved and mostly applied right away. Values marked “[restart]” only take effect after a restart. Every change is in the log with old → new.</p>
<div class="hb-warn"><p>Settings affect all players. If in doubt, try them on the test server first.</p></div>`,
        },
        {
            id: 'a-permissions',
            level: 4,
            rights: ['permissions'],
            title: { de: 'Berechtigungen vergeben', en: 'Giving permissions' },
            tags: {
                de: 'berechtigungen rechte vergeben rolle stufe gruppe aufgabengruppe mehrere einzelrecht entziehen',
                en: 'permissions rights give role level group task group several multiple single right individual right take revoke',
            },
            de: `<p>Reiter <em>Berechtigungen</em>: Spieler suchen, dann</p>
<ul>
<li>höchstens eine <strong>Stufe</strong> wählen und beliebig viele <strong>Aufgabengruppen</strong> anhaken (z. B. „Moderator + Event-Team + Übersetzer“) – ihre Rechte stehen angehakt und gesperrt da;</li>
<li>darüber hinaus <strong>Einzelrechte</strong> anhaken (je Gruppe ein Unterreiter, „angehakt / alle“).</li>
</ul>
<p>Du vergibst nur Rollen unter deiner Stufe und Rechte, die du selbst hast – nie an dich selbst und nicht an Admins deiner Stufe oder darüber. In der Liste stehen Stufe, Aufgabengruppen (gestrichelt) und Einzelrechte. „Alle Gruppen entziehen“ nimmt Stufe und Aufgabengruppen und lässt die Einzelrechte bestehen; eine einzelne Gruppe nimmst du über „Bearbeiten“ weg. In der Serverkonsole zeigt <code>liw_rights &lt;Server-ID|license:…|discord:…&gt;</code>, woher jemand welche Rechte hat.</p>`,
            en: `<p>Tab <em>Permissions</em>: search for a player, then</p>
<ul>
<li>pick at most one <strong>level</strong> and tick any number of <strong>task groups</strong> (e.g. “Moderator + event team + translator”) – their rights are shown ticked and locked;</li>
<li>tick extra <strong>single rights</strong> on top (one sub-tab per group, “ticked / all”).</li>
</ul>
<p>You can only give roles below your own level and rights you have yourself – never to yourself and not to admins of your level or above. The list shows the level, task groups (dashed) and single rights. “Take all groups” removes the level and the task groups and keeps the single rights; to remove a single group, use “Edit”. In the server console, <code>liw_rights &lt;Server-ID|license:…|discord:…&gt;</code> shows where someone's rights come from.</p>`,
        },
        {
            id: 'a-console',
            level: 4,
            title: { de: 'Befehle der Serverkonsole', en: 'Server console commands' },
            tags: {
                de: 'konsole liw_unban liw_crashes liw_rights txadmin absturz',
                en: 'console liw_unban liw_crashes liw_rights txadmin crash crashes',
            },
            de: `<dl>
<dt><code>liw_unban &lt;license&gt;</code></dt><dd>Entbannt eine Lizenz, auch wenn kein Admin im Spiel ist (z. B. ein vom System gebannter Tester).</dd>
<dt><code>liw_rights &lt;…&gt;</code></dt><dd>Zeigt Stufe, Rollen und jedes Recht mit Herkunft.</dd>
<dt><code>liw_crashes [n | suspects | drops]</code></dt><dd>Absturzprotokoll: Vorfälle, bei denen mehrere Spieler nahe beieinander abstürzen, mit Kandidaten und Punkten; Verdächtige je Lizenz; letzte Verbindungsabbrüche.</dd>
</dl>
<p>Neue oder geänderte Resources spielt das Deploy automatisch ein, sobald niemand online ist.</p>`,
            en: `<dl>
<dt><code>liw_unban &lt;license&gt;</code></dt><dd>Unbans a license, even when no admin is in the game (e.g. a tester banned by the system).</dd>
<dt><code>liw_rights &lt;…&gt;</code></dt><dd>Shows level, roles and every right with its source.</dd>
<dt><code>liw_crashes [n | suspects | drops]</code></dt><dd>Crash log: incidents where several players crash close to each other, with candidates and points; suspects per license; recent disconnects.</dd>
</dl>
<p>The deploy installs new or changed resources automatically as soon as nobody is online.</p>`,
        },
    ],
};
