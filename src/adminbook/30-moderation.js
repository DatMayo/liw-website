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
            tags: { de: 'maßnahme stufe verwarnen auszeit kick bann reihenfolge' },
            de: `<p>Im Spieler-Detail → <em>Moderation</em> → <em>Maßnahme</em> wählst du die Stufe, schreibst einen Grund und – bei Auszeit und Bann – die Dauer. Als Faustregel, von mild nach streng:</p>
<ol>
<li><strong>Nachricht</strong> – ein freundlicher Hinweis, steht nicht im Verlauf.</li>
<li><strong>Verwarnung</strong> – steht im Verlauf, der Spieler muss sie bestätigen.</li>
<li><strong>Auszeit</strong> – das Tier muss einige Minuten an einen abgelegenen Ort.</li>
<li><strong>Kick</strong> – der Spieler fliegt vom Server, kann sofort wieder rein.</li>
<li><strong>Bann</strong> – befristet oder dauerhaft.</li>
</ol>
<p>Alle Maßnahmen gehen nur gegen Spieler unter deiner Stufe.</p>`,
        },
        {
            id: 'a-warn',
            level: 2,
            rights: ['warn'],
            title: { de: 'Verwarnen', en: 'Warning' },
            tags: { de: 'verwarnen verwarnung warn verstanden bestätigen' },
            de: `<p>Die Verwarnung steht mit Grund im Verlauf. Der Spieler sieht sie mittig auf dem Bildschirm und muss <em>Verstanden</em> drücken – auch das steht im Verlauf. Mehrere Verwarnungen erscheinen nacheinander.</p>`,
        },
        {
            id: 'a-timeout',
            level: 2,
            rights: ['timeout'],
            title: { de: 'Auszeit', en: 'Time-out' },
            tags: { de: 'auszeit timeout minuten zaun grenze verlängern beenden' },
            de: `<p>Die Auszeit schickt das Tier für 10, 30 oder 60 Minuten an einen festen, abgelegenen Ort:</p>
<ul>
<li>Es darf sich im Umkreis von 300 m frei bewegen, ist unverwundbar, hat keine Bedürfnisse und keine Aktionen.</li>
<li>Unten stehen Countdown und Abstand zur Grenze, auf der Karte ein Kreis. Nahe der Grenze erscheint ein Zaun und „Kehr um“.</li>
<li>Wer die Grenze überschreitet, bekommt 5 Minuten dazu und kommt zurück in die Mitte.</li>
<li>Ein Relog setzt die Auszeit fort (bis zum Serverneustart).</li>
<li>Danach steht das Tier wieder dort, wo es vorher war.</li>
</ul>
<p><strong>Auszeit beenden</strong> (Minuten 0) holt es sofort zurück. Im Lagebild siehst du alle laufenden Auszeiten mit Rest und Grund.</p>`,
        },
        {
            id: 'a-kick',
            level: 2,
            rights: ['kick'],
            title: { de: 'Kicken', en: 'Kick' },
            tags: { de: 'kick kicken rauswerfen grund' },
            de: `<p>Wirft den Spieler mit Grund vom Server; er kann sofort wieder beitreten. Der Kick steht im Verlauf. Im Auswahl-Werkzeug fragt der Knopf vor dem Ausführen nach („Wirklich … kicken?“ – zweiter Klick führt aus).</p>`,
        },
        {
            id: 'a-ban',
            level: 3,
            rights: ['ban', 'unban'],
            anyRight: true,
            title: { de: 'Bannen und Entbannen', en: 'Ban and unban' },
            tags: { de: 'bann bannen dauerhaft befristet entbannen unban grund' },
            de: `<p>Bann mit Grund und Dauer: <strong>1 Stunde, 1 Tag, 7 Tage oder dauerhaft</strong>. Den Bann-Knopf musst du zweimal drücken. Der Spieler fliegt sofort und sieht beim nächsten Verbindungsversuch Grund und Ende.</p>
<p><strong>Entbannen</strong> (<code>unban</code>): bei einem gebannten Konto (offline, Chip „gebannt“) im Spieler-Detail → Moderation → <em>Gebannt</em> → „Entbannen“, oder im Reiter <em>Kicks &amp; Banns</em>. Ohne jemanden im Spiel geht es über die Serverkonsole: <code>liw_unban &lt;license&gt;</code>.</p>
<div class="hb-warn"><p>Ein Entbannen erlaubt dem automatischen System, den Account bei neuen Befunden erneut zu bannen.</p></div>`,
        },
        {
            id: 'a-ban-offline',
            level: 3,
            rights: ['banOffline'],
            title: { de: 'Offline bannen', en: 'Ban offline' },
            tags: { de: 'offline bannen license suchen' },
            de: `<p><em>Kicks &amp; Banns</em> → <em>Offline bannen</em>: Account per Name oder License suchen, Grund und Dauer wählen. Ist der Spieler doch online, fliegt er sofort. Nie dich selbst oder Admins deiner Stufe und darüber.</p>`,
        },
        {
            id: 'a-history',
            level: 2,
            rights: ['history'],
            title: { de: 'Kicks & Banns und Verlauf', en: 'Kicks & bans and history' },
            tags: { de: 'verlauf historie kicks banns txadmin suche' },
            de: `<p>Reiter <em>Kicks &amp; Banns</em>: alle Kicks, Banns, Entbannungen und Verwarnungen mit Grund, Dauer, Ziel und Admin – durchsuchbar nach Name oder License. Auch Maßnahmen aus <strong>txAdmin</strong> landen hier (Admin „Name (txAdmin)“); der Bann selbst bleibt dann bei txAdmin.</p>`,
        },
    ],
};
