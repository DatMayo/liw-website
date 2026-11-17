export default {
    id: 'a-moderation',
    order: 30,
    icon: 'gavel',
    title: { de: 'Moderation', en: 'Moderation' },
    sections: [
        {
            id: 'a-measures',
            level: 2,
            title: { de: 'Welche Maßnahme wann?', en: 'Which measure when?' },
            tags: { de: 'maßnahme stufe verwarnen auszeit kick bann reihenfolge strafkatalog vorlage wiederholung', en: 'measure level warn time-out timeout kick ban order sanction catalog template repeated' },
            de: `<p>Im Spieler-Detail → <em>Moderation</em> → <em>Maßnahme</em> wählst du die Stufe, schreibst einen Grund und – bei Auszeit und Bann – die Dauer. Als Faustregel, von mild nach streng:</p>
<ol>
<li><strong>Nachricht</strong> – ein freundlicher Hinweis, steht nicht im Verlauf.</li>
<li><strong>Verwarnung</strong> – steht im Verlauf, der Spieler muss sie bestätigen.</li>
<li><strong>Auszeit</strong> – das Tier muss einige Minuten an einen abgelegenen Ort.</li>
<li><strong>Kick</strong> – der Spieler fliegt vom Server, kann sofort wieder rein.</li>
<li><strong>Bann</strong> – befristet oder dauerhaft.</li>
</ol>
<p><strong>Strafkatalog:</strong> Über „Vorlage aus dem Strafkatalog“ wählst du einen üblichen Grund (z. B. „Spawnkill“) – Stufe, Dauer und Grund werden ausgefüllt, du kannst sie vor dem Knopfdruck noch ändern. So bekommt jeder für dasselbe dieselbe Strafe, egal wer moderiert. Darunter steht, was der Spieler in den letzten 30 Tagen schon bekommen hat, und rot eine Empfehlung („empfohlen jetzt: Auszeit“), wenn er wiederholt auffällt. Die Vorlagen ändert ein Owner in den Einstellungen.</p>
<p>Alle Maßnahmen gehen nur gegen Spieler unter deiner Stufe.</p>`,
            en: `<p>In the player detail → <em>Moderation</em> → <em>Measure</em> you pick the level, write a reason and – for time-out and ban – the duration. As a rule of thumb, from mild to strict:</p>
<ol>
<li><strong>Message</strong> – a friendly notice, not in the history.</li>
<li><strong>Warning</strong> – in the history, the player has to confirm it.</li>
<li><strong>Time-out</strong> – the animal has to go to a remote place for a few minutes.</li>
<li><strong>Kick</strong> – the player is thrown off the server and can rejoin right away.</li>
<li><strong>Ban</strong> – temporary or permanent.</li>
</ol>
<p><strong>Sanction catalog:</strong> with “Template from the sanction catalog” you pick a usual reason (e.g. “Spawn killing”) – level, duration and reason are filled in, and you can still change them before pressing the button. That way everyone gets the same measure for the same thing, whoever moderates. Below it you see what the player already got in the last 30 days, and in red a recommendation (“recommended now: time-out”) when they keep causing trouble. An owner changes the templates in the settings.</p>
<p>All measures only work against players below your level.</p>`,
        },
        {
            id: 'a-warn',
            level: 2,
            rights: ['warn'],
            title: { de: 'Verwarnen', en: 'Warning' },
            tags: { de: 'verwarnen verwarnung warn verstanden bestätigen', en: 'warn warning understood confirm' },
            de: `<p>Die Verwarnung steht mit Grund im Verlauf. Der Spieler sieht sie mittig auf dem Bildschirm und muss <em>Verstanden</em> drücken – auch das steht im Verlauf. Mehrere Verwarnungen erscheinen nacheinander.</p>`,
            en: `<p>The warning is in the history with its reason. The player sees it in the middle of the screen and has to press <em>Understood</em> – that is also in the history. Several warnings appear one after another.</p>`,
        },
        {
            id: 'a-timeout',
            level: 2,
            rights: ['timeout'],
            title: { de: 'Auszeit', en: 'Time-out' },
            tags: { de: 'auszeit timeout minuten zaun grenze verlängern beenden', en: 'time-out timeout minutes fence border extend end' },
            de: `<p>Die Auszeit schickt das Tier für 10, 30 oder 60 Minuten an einen festen, abgelegenen Ort:</p>
<ul>
<li>Es darf sich im Umkreis von 300 m frei bewegen, ist unverwundbar, hat keine Bedürfnisse und keine Aktionen.</li>
<li>Unten stehen Countdown und Abstand zur Grenze, auf der Karte ein Kreis. Nahe der Grenze erscheint ein Zaun und „Kehr um“.</li>
<li>Wer die Grenze überschreitet, bekommt 5 Minuten dazu und kommt zurück in die Mitte.</li>
<li>Ein Relog setzt die Auszeit fort (bis zum Serverneustart).</li>
<li>Danach steht das Tier wieder dort, wo es vorher war.</li>
</ul>
<p><strong>Auszeit beenden</strong> (Minuten 0) holt es sofort zurück. Im Lagebild siehst du alle laufenden Auszeiten mit Rest und Grund.</p>`,
            en: `<p>The time-out sends the animal to a fixed, remote place for 10, 30 or 60 minutes:</p>
<ul>
<li>It may move freely within 300 m, is invulnerable, has no needs and no actions.</li>
<li>At the bottom there is a countdown and the distance to the border, on the map a circle. Near the border a fence appears and “Turn back”.</li>
<li>Whoever crosses the border gets 5 more minutes and is put back in the middle.</li>
<li>A relog continues the time-out (until the server restarts).</li>
<li>Afterwards the animal is back where it was before.</li>
</ul>
<p><strong>End time-out</strong> (0 minutes) brings it back right away. On the situation page you see all running time-outs with time left and reason.</p>`,
        },
        {
            id: 'a-kick',
            level: 2,
            rights: ['kick'],
            title: { de: 'Kicken', en: 'Kick' },
            tags: { de: 'kick kicken rauswerfen grund', en: 'kick throw out reason' },
            de: `<p>Wirft den Spieler mit Grund vom Server; er kann sofort wieder beitreten. Der Kick steht im Verlauf. Im Auswahl-Werkzeug fragt der Knopf vor dem Ausführen nach („Wirklich … kicken?“ – zweiter Klick führt aus).</p>`,
            en: `<p>Throws the player off the server with a reason; they can rejoin right away. The kick is in the history. In the selection tool, the button asks before it runs (“Really kick …?” – the second click runs it).</p>`,
        },
        {
            id: 'a-ban',
            level: 3,
            rights: ['ban', 'unban'],
            anyRight: true,
            title: { de: 'Bannen und Entbannen', en: 'Ban and unban' },
            tags: { de: 'bann bannen dauerhaft befristet entbannen unban grund', en: 'ban permanent temporary unban reason' },
            de: `<p>Bann mit Grund und Dauer: <strong>1 Stunde, 1 Tag, 7 Tage oder dauerhaft</strong>. Den Bann-Knopf musst du zweimal drücken. Der Spieler fliegt sofort und sieht beim nächsten Verbindungsversuch Grund und Ende.</p>
<p><strong>Entbannen</strong> (<code>unban</code>): bei einem gebannten Konto (offline, Chip „gebannt“) im Spieler-Detail → Moderation → <em>Gebannt</em> → „Entbannen“, oder im Reiter <em>Kicks &amp; Banns</em>. Ohne jemanden im Spiel geht es über die Serverkonsole: <code>liw_unban &lt;license&gt;</code>.</p>
<div class="hb-warn"><p>Ein Entbannen erlaubt dem automatischen System, den Account bei neuen Befunden erneut zu bannen.</p></div>`,
            en: `<p>Ban with reason and duration: <strong>1 hour, 1 day, 7 days or permanent</strong>. You have to press the ban button twice. The player is thrown off right away and sees the reason and end on the next connection attempt.</p>
<p><strong>Unban</strong> (<code>unban</code>): for a banned account (offline, chip “banned”) in the player detail → Moderation → <em>Banned</em> → “Unban”, or in the <em>Kicks &amp; bans</em> tab. Without anyone in the game, use the server console: <code>liw_unban &lt;license&gt;</code>.</p>
<div class="hb-warn"><p>An unban allows the automatic system to ban the account again if there are new findings.</p></div>`,
        },
        {
            id: 'a-ban-offline',
            level: 3,
            rights: ['banOffline'],
            title: { de: 'Offline bannen', en: 'Ban offline' },
            tags: { de: 'offline bannen license suchen', en: 'offline ban license search' },
            de: `<p><em>Kicks &amp; Banns</em> → <em>Offline bannen</em>: Account per Name oder License suchen, Grund und Dauer wählen. Ist der Spieler doch online, fliegt er sofort. Nie dich selbst oder Admins deiner Stufe und darüber.</p>`,
            en: `<p><em>Kicks &amp; bans</em> → <em>Ban offline</em>: search for the account by name or license, choose reason and duration. If the player is online after all, they are thrown off right away. Never yourself or admins of your level and above.</p>`,
        },
        {
            id: 'a-history',
            level: 2,
            rights: ['history'],
            title: { de: 'Kicks & Banns und Verlauf', en: 'Kicks & bans and history' },
            tags: { de: 'verlauf historie kicks banns txadmin suche', en: 'history kicks bans txadmin search' },
            de: `<p>Reiter <em>Kicks &amp; Banns</em>: alle Kicks, Banns, Entbannungen und Verwarnungen mit Grund, Dauer, Ziel und Admin – durchsuchbar nach Name oder License. Auch Maßnahmen aus <strong>txAdmin</strong> landen hier (Admin „Name (txAdmin)“); der Bann selbst bleibt dann bei txAdmin.</p>`,
            en: `<p><em>Kicks &amp; bans</em> tab: all kicks, bans, unbans and warnings with reason, duration, target and admin – searchable by name or license. Measures from <strong>txAdmin</strong> also end up here (admin “Name (txAdmin)”); the ban itself then stays with txAdmin.</p>`,
        },
    ],
};
