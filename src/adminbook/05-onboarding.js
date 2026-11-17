export default {
    id: 'a-onboarding',
    order: 5,
    icon: 'shield',
    title: { de: 'Einarbeitung', en: 'Getting started' },
    sections: [
        {
            id: 'a-welcome',
            level: 1,
            title: { de: 'Willkommen im Team', en: 'Welcome to the team' },
            tags: { de: 'willkommen einarbeitung neu team probezeit start', en: 'welcome onboarding new team trial start' },
            de: `<p>Schön, dass du dabei bist. Als Teammitglied sorgst du dafür, dass auf Life In Wilderness alle gern spielen: Du hilfst, wenn jemand feststeckt, schaust hin, wenn etwas gemeldet wird, und greifst ein, wenn jemand anderen das Spiel verdirbt.</p>
<p>Dieses Handbuch erklärt alle Werkzeuge. Oben wählst du deine Rolle – dann siehst du nur, was du auch benutzen kannst. Über jedem Abschnitt steht, welche Rolle oder welches Recht er braucht.</p>
<p>Viele starten in der Gruppe <strong>Probezeit</strong>: Du kannst Meldungen, Spielerakten und Kämpfe ansehen, zuschauen, die Live-Karte und die Admin-Sicht nutzen und im Admin-Chat mitreden – aber noch nicht eingreifen. Nimm dir die Zeit, schau erfahrenen Teammitgliedern über die Schulter und frag nach, warum sie wie entschieden haben.</p>`,
            en: `<p>Great to have you on board. As a team member you make sure everybody enjoys playing on Life In Wilderness: you help when someone is stuck, take a look when something is reported, and step in when someone spoils the game for others.</p>
<p>This handbook explains every tool. At the top you pick your role – then you only see what you can use. Above each section it says which role or right it needs.</p>
<p>Many start in the <strong>Trial</strong> group: you can look at reports, player files and fights, spectate, use the live map and the admin view and talk in the admin chat – but not step in yet. Take your time, look over the shoulders of experienced team members and ask why they decided the way they did.</p>`,
        },
        {
            id: 'a-your-rights',
            level: 1,
            title: { de: 'Deine Rechte verstehen', en: 'Understanding your rights' },
            tags: { de: 'rechte stufe aufgabengruppe menü grau fehlt freigabe', en: 'rights level task group menu grey missing grant' },
            de: `<p>Was du im Admin-Menü (<kbd>Bild↑</kbd>) siehst, hängt von deinen Rechten ab: einer <strong>Stufe</strong> (Moderator, Admin, Owner) und beliebig vielen <strong>Aufgabengruppen</strong> (z. B. Support, Event-Team, Übersetzer). Reiter und Knöpfe, für die dir das Recht fehlt, erscheinen gar nicht. Was du siehst, darfst du technisch benutzen – der Server prüft trotzdem jede Aktion noch einmal.</p>
<ul>
<li>Fehlt dir ein Recht für deine Aufgabe, sag es einem Owner – nicht „mal kurz“ mit fremdem Zugang arbeiten.</li>
<li>Rechte sind an dich gebunden. Gib nie deinen Web-Code oder deinen Zugang weiter.</li>
<li>Wer welche Gruppe hat, steht im Reiter <em>Berechtigungen</em> (nur für Owner).</li>
</ul>`,
            en: `<p>What you see in the admin menu (<kbd>Page Up</kbd>) depends on your rights: a <strong>level</strong> (moderator, admin, owner) and any number of <strong>task groups</strong> (e.g. support, event team, translator). Tabs and buttons you lack the right for do not appear at all. What you see you can technically use – the server still checks every action once more.</p>
<ul>
<li>If you lack a right for your task, tell an owner – never work "just quickly" with someone else's access.</li>
<li>Rights belong to you. Never pass on your web code or your access.</li>
<li>Who has which group is in the <em>Permissions</em> tab (owners only).</li>
</ul>`,
        },
        {
            id: 'a-can-may',
            level: 1,
            title: { de: 'Können heißt nicht dürfen', en: 'Being able to is not being allowed to' },
            tags: { de: 'regeln grundsätze verhalten befangen eigenes rudel datenschutz neutral fair', en: 'rules principles conduct biased own pack privacy neutral fair' },
            de: `<p>Die Werkzeuge können viel. Dafür gelten ein paar Grundsätze – ohne Ausnahme:</p>
<ol>
<li><strong>Nur für den Dienst.</strong> Keine Werkzeuge für dein eigenes Tier, dein Rudel, dein Revier oder deine Freunde: kein Heilen nach einem verlorenen Kampf, kein Revier „zurückgeben“, keine Tiere spawnen, keine Auskünfte für einen Vorteil im Spiel.</li>
<li><strong>Nicht in eigener Sache.</strong> Bist du selbst oder dein Rudel an einem Fall beteiligt, übernimmt jemand anderes. Das gilt auch, wenn du dir sicher bist.</li>
<li><strong>Erst schauen, dann handeln.</strong> Meldung, Spielerakte, Kampfprotokoll und Verläufe ansehen, mit den Beteiligten reden. Oft reicht eine Nachricht vor einer Verwarnung.</li>
<li><strong>Fair und nachvollziehbar.</strong> Nutze den Strafkatalog, damit alle für dasselbe dasselbe bekommen. Schreib Gründe so, dass der Spieler sie versteht – er sieht sie.</li>
<li><strong>Unsichtbar heißt nicht unbeobachtet.</strong> Zuschauen, Noclip und Hingehen nur mit Anlass – nicht aus Neugier, nicht um private Gespräche mitzuhören.</li>
<li><strong>Daten bleiben im Team.</strong> Lizenzen, Anmeldungen, Länder, verknüpfte Accounts, Notizen und Meldungen gibst du nie weiter – auch nicht an die betroffenen Spieler oder in öffentliche Kanäle.</li>
<li><strong>Das Spiel der anderen respektieren.</strong> Greif nur ins Rollenspiel ein, wenn es nötig ist. Events (Welt, Wetter, Ankündigungen) sprichst du vorher im Team ab.</li>
<li><strong>Unsicher? Frag.</strong> Fehler passieren. Sag sie offen im Team – wir räumen sie gemeinsam auf (Schnappschüsse, Wiederbeleben, Revier zurück). Vertuschen ist das einzige, was wirklich Ärger macht.</li>
</ol>`,
            en: `<p>The tools can do a lot. So a few principles apply – without exception:</p>
<ol>
<li><strong>Only on duty.</strong> No tools for your own animal, your pack, your territory or your friends: no healing after a lost fight, no "giving back" a territory, no spawning animals, no information that gives an advantage in the game.</li>
<li><strong>Not in your own cause.</strong> If you or your pack are part of a case, someone else takes it. That holds even when you are sure.</li>
<li><strong>Look first, then act.</strong> Read the report, the player file, the fight log and the histories, and talk to those involved. Often a message is enough before a warning.</li>
<li><strong>Fair and understandable.</strong> Use the sanction catalog so everybody gets the same for the same thing. Write reasons the player understands – they see them.</li>
<li><strong>Invisible is not unobserved.</strong> Spectating, noclip and going to someone only with a reason – not out of curiosity, not to listen in on private conversations.</li>
<li><strong>Data stays in the team.</strong> Licenses, logins, countries, linked accounts, notes and reports are never passed on – not to the players concerned and not in public channels.</li>
<li><strong>Respect the others' game.</strong> Only step into roleplay when it is needed. Agree events (world, weather, announcements) with the team beforehand.</li>
<li><strong>Not sure? Ask.</strong> Mistakes happen. Say so openly in the team – we fix them together (snapshots, revive, territory back). Hiding them is the only thing that really causes trouble.</li>
</ol>`,
        },
        {
            id: 'a-logged',
            level: 1,
            title: { de: 'Große Macht, großes Protokoll', en: 'Great power, great log' },
            tags: { de: 'protokoll log verantwortung missbrauch nachvollziehbar überwachung aktionen', en: 'log action log responsibility abuse traceable monitoring actions' },
            de: `<p>Mit großer Macht kommt große Verantwortung – und ein Protokoll, das nichts vergisst. 😉 Im Ernst: Fast alles, was du als Teammitglied tust, wird mit deinem Namen, der Uhrzeit, dem Ziel und den Details gespeichert:</p>
<ul>
<li>jede Aktion an Spielern (Hingehen, Herholen, Heilen, Einfrieren, Verwarnen, Auszeit, Kicken, Bannen, Entbannen …),</li>
<li>jedes Öffnen einer Spielerakte, Notizen, Meldungen (Übernehmen, Hingehen, Schließen),</li>
<li>Noclip an und aus, Live-Karte, Auswahl-Werkzeug, Welt, Reviere, Rudel, Gedenksteine, Ankündigungen,</li>
<li>Eingriffe an Charakteren (Art, Alter, Namen, Herausnehmen, Wiederbeleben, Schnappschüsse) – zusätzlich im Tierverlauf,</li>
<li>Änderungen an Revieren – zusätzlich im Revierverlauf,</li>
<li>Rechte, Einstellungen (mit altem und neuem Wert), Account-Übertragungen,</li>
<li>Aktionen aus der Weboberfläche (mit „(web)“) und Befehle der txAdmin-Konsole.</li>
</ul>
<p>Das Protokoll ist im Reiter <em>Protokoll</em> durchsuchbar (Recht <code>actionLog</code>) und geht je nach Einstellung auch an Discord.</p>
<div class="hb-tip"><p>Das Protokoll ist nicht da, um dich zu überwachen, sondern um Entscheidungen nachvollziehbar zu machen – auch zu deinem Schutz: Beschwert sich ein Spieler, zeigt es genau, was passiert ist und warum.</p></div>
<div class="hb-warn"><p>Missbrauch der Werkzeuge kostet die Rechte, in schweren Fällen auch den Spielzugang. Wer sich an die Grundsätze oben hält, muss sich darüber keine Gedanken machen.</p></div>`,
            en: `<p>With great power comes great responsibility – and a log that forgets nothing. 😉 Seriously: almost everything you do as a team member is stored with your name, the time, the target and the details:</p>
<ul>
<li>every action on players (go to, bring, heal, freeze, warn, time-out, kick, ban, unban …),</li>
<li>every time a player file is opened, notes, reports (take over, go there, close),</li>
<li>noclip on and off, live map, selection tool, world, territories, packs, memorial stones, announcements,</li>
<li>changes to characters (species, age, names, taking out, reviving, snapshots) – also in the animal history,</li>
<li>changes to territories – also in the territory history,</li>
<li>rights, settings (with old and new value), account transfers,</li>
<li>actions from the web interface (marked "(web)") and commands of the txAdmin console.</li>
</ul>
<p>The log can be searched in the <em>Log</em> tab (right <code>actionLog</code>) and, depending on the settings, also goes to Discord.</p>
<div class="hb-tip"><p>The log is not there to watch you but to make decisions traceable – which also protects you: if a player complains, it shows exactly what happened and why.</p></div>
<div class="hb-warn"><p>Abusing the tools costs you your rights, in serious cases also your access to the game. If you stick to the principles above, there is nothing to worry about.</p></div>`,
        },
        {
            id: 'a-first-steps',
            level: 1,
            title: { de: 'Deine ersten Schritte', en: 'Your first steps' },
            tags: { de: 'erste schritte checkliste anfang üben admin chat meldung', en: 'first steps checklist start practice admin chat report' },
            de: `<p>Eine kleine Liste für den Anfang:</p>
<ol>
<li>Oben auf dieser Seite deine Rolle wählen und das Kapitel <a href="#a-basics">Grundlagen</a> lesen.</li>
<li>Im Spiel <kbd>Bild↑</kbd> öffnen und schauen, welche Reiter du hast. Nichts ausprobieren an echten Spielern – frag nach einem Test mit einem Teammitglied.</li>
<li>Im Admin-Chat (<kbd>T</kbd>) Hallo sagen. Dort sprecht ihr euch ab, bevor jemand eingreift.</li>
<li>Eine Meldung gemeinsam mit jemand Erfahrenem durchgehen: <a href="#a-report-flow">Meldungen bearbeiten</a>.</li>
<li>Den Strafkatalog ansehen (Spieler-Detail → <em>Maßnahme</em> → Vorlage), damit du die üblichen Maße kennst.</li>
<li>Dir merken, wo du nachfragst: im Admin-Chat oder bei den Owners im Team-Discord.</li>
</ol>`,
            en: `<p>A small list for the start:</p>
<ol>
<li>Pick your role at the top of this page and read the chapter <a href="#a-basics">Basics</a>.</li>
<li>Open <kbd>Page Up</kbd> in game and see which tabs you have. Do not try things on real players – ask a team member for a test.</li>
<li>Say hello in the admin chat (<kbd>T</kbd>). That is where you agree on things before someone steps in.</li>
<li>Go through a report together with someone experienced: <a href="#a-report-flow">Handling reports</a>.</li>
<li>Look at the sanction catalog (player detail → <em>Measure</em> → template) so you know the usual measures.</li>
<li>Remember where to ask: in the admin chat or with the owners in the team Discord.</li>
</ol>`,
        },
    ],
};
