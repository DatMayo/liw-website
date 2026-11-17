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
            tags: { de: 'tester testmodus testkatalog liwdev dev panel befehle' },
            de: `<p>Tester arbeiten mit dem <strong>Testkatalog</strong> (Befehl <code>/liw_test</code>): Aufgaben je Bereich mit Ergebnis (geht / geht nicht / teilweise) und Kommentar. Admins sehen die Auswertung, starten neue Runden und exportieren einen Bericht.</p>
<p>Die Befehle unter <code>/liwdev</code> helfen beim Testen (Werte setzen, Tiere spawnen, Zustände auslösen); das Dev-Panel listet sie mit Beschreibung, der Admin-Chat ergänzt sie mit <kbd>Tab</kbd>.</p>`,
        },
        {
            id: 'a-quests',
            level: 3,
            rights: ['quests', 'questsReview', 'questsTrusted'],
            anyRight: true,
            title: { de: 'Quest-Editor', en: 'Quest editor' },
            tags: { de: 'quest editor freigabe entwurf vertrauter ersteller export import titel errungenschaft' },
            de: `<p>Werkzeuge → <em>Quest-Editor</em> (auch im Web): Neben-, Tages-, Wochen- und Rudelquests, Errungenschaften und Titel anlegen und ändern – Texte auf Deutsch und Englisch, Ziele, Bedingungen (Art/Gruppe, Level, Rudel, Rang, Alter, Geschlecht), Voraussetzungen, Belohnungen (XP, Ruhm, Titel, Belohnungsfell).</p>
<ul>
<li><strong><code>quests</code></strong> (ab Admin): anlegen und ändern. Entwürfe und Änderungen an aktiven Quests sind <em>Vorschläge</em>; im Spiel bleibt bis zur Freigabe die bisherige Version.</li>
<li><strong><code>questsReview</code></strong> (Owner): Quests anderer freigeben oder ablehnen – nie die eigenen.</li>
<li><strong><code>questsTrusted</code></strong> (Owner oder einzeln): eigene Änderungen gehen ohne Freigabe live.</li>
</ul>
<p>Deaktivieren wirkt sofort; löschen lassen sich nur Entwürfe, die nie im Spiel waren. Mit Hinweisen (fehlende Texte, Ziele …) lässt sich nichts freigeben. Export/Import als JSON.</p>`,
        },
        {
            id: 'a-translations',
            level: 3,
            rights: ['translations'],
            title: { de: 'Übersetzungen', en: 'Translations' },
            tags: { de: 'übersetzung sprache editor text englisch deutsch neue sprache' },
            de: `<p>Werkzeuge → <em>Übersetzungen</em> (auch im Web): Sprachen anlegen, Texte übersetzen und korrigieren – gilt sofort im Spiel. Fehlende Texte erscheinen auf Englisch; im Feld steht der englische Text als Vorlage. „Zurück zum Code-Text“ stellt den Originaltext wieder her. Quest-Texte auf Deutsch und Englisch ändert man im Quest-Editor, weitere Sprachen hier.</p>`,
        },
        {
            id: 'a-errors',
            level: 3,
            rights: ['errors'],
            title: { de: 'Fehlerprotokoll', en: 'Error log' },
            tags: { de: 'fehler fehlerprotokoll script fehler gelöst spieler' },
            de: `<p>Werkzeuge → <em>Fehlerprotokoll</em> oder <code>/liw_errors</code>: Script-Fehler aller Resources, gruppiert nach Fehler und nach Spieler, mit Häufigkeit und Details. Als gelöst markieren oder wieder öffnen; ein Klick auf einen Spielernamen zeigt dessen Fehler. Aktualisiert sich alle 5 Sekunden.</p>`,
        },
        {
            id: 'a-actionlog',
            level: 3,
            rights: ['actionLog'],
            title: { de: 'Aktionsprotokoll', en: 'Action log' },
            tags: { de: 'protokoll aktionsprotokoll suche admin befehl ziel' },
            de: `<p>Reiter <em>Protokoll</em>: jede Admin-Aktion mit Zeit, Admin, Befehl, Ziel und Details – durchsuchbar nach allem davon. Aktionen aus dem Web tragen „(web)“ hinter dem Namen.</p>`,
        },
        {
            id: 'a-settings',
            level: 4,
            rights: ['settings'],
            title: { de: 'Einstellungen', en: 'Settings' },
            tags: { de: 'einstellungen config werte live balancing' },
            de: `<p>Reiter <em>Einstellungen</em>: alle Config-Werte aller Resources, mit Beschreibung, gespeichert und meist sofort angewendet. Werte mit „[restart]“ greifen erst nach einem Neustart. Jede Änderung steht im Protokoll mit alt → neu.</p>
<div class="hb-warn"><p>Einstellungen wirken für alle Spieler. Im Zweifel erst auf dem Testserver ausprobieren.</p></div>`,
        },
        {
            id: 'a-permissions',
            level: 4,
            rights: ['permissions'],
            title: { de: 'Berechtigungen vergeben', en: 'Giving permissions' },
            tags: { de: 'berechtigungen rechte vergeben rolle gruppe einzelrecht entziehen' },
            de: `<p>Reiter <em>Berechtigungen</em>: Spieler suchen, dann</p>
<ul>
<li>eine <strong>Rolle</strong> (Stufe) oder <strong>Aufgabengruppe</strong> wählen – ihre Rechte stehen angehakt und gesperrt da;</li>
<li>darüber hinaus <strong>Einzelrechte</strong> anhaken (je Gruppe ein Unterreiter, „angehakt / alle“).</li>
</ul>
<p>Du vergibst nur Rollen unter deiner Stufe und Rechte, die du selbst hast – nie an dich selbst und nicht an Admins deiner Stufe oder darüber. „Gruppe entziehen“ lässt die Einzelrechte bestehen. In der Serverkonsole zeigt <code>liw_rights &lt;Server-ID|license:…|discord:…&gt;</code>, woher jemand welche Rechte hat.</p>`,
        },
        {
            id: 'a-console',
            level: 4,
            title: { de: 'Befehle der Serverkonsole', en: 'Server console commands' },
            tags: { de: 'konsole liw_unban liw_crashes liw_rights txadmin absturz' },
            de: `<dl>
<dt><code>liw_unban &lt;license&gt;</code></dt><dd>Entbannt eine License, auch wenn kein Admin im Spiel ist (z. B. ein vom System gebannter Tester).</dd>
<dt><code>liw_rights &lt;…&gt;</code></dt><dd>Zeigt Stufe, Rollen und jedes Recht mit Herkunft.</dd>
<dt><code>liw_crashes [n | suspects | drops]</code></dt><dd>Absturzprotokoll: Vorfälle, bei denen mehrere Spieler nahe beieinander abstürzen, mit Kandidaten und Punkten; Verdächtige je License; letzte Verbindungsabbrüche.</dd>
</dl>
<p>Neue oder geänderte Resources spielt das Deploy automatisch ein, sobald niemand online ist.</p>`,
        },
    ],
};
