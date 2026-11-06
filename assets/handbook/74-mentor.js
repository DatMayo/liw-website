window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'mentor',
    order: 74,
    icon: 'mentor',
    title: { de: 'Mentoren', en: 'Mentors' },
    sections: [
        {
            id: 'mentor-overview',
            title: { de: 'Was ist ein Mentor?', en: 'What is a mentor?' },
            tags: { de: 'mentor neuling schützling erfahren hilfe', en: 'mentor newcomer mentee veteran help' },
            de: `<p>Erfahrene Spieler führen <strong>Neulinge</strong> durch die Wildnis – und beide haben etwas davon.</p>
<table class="hb-table">
<thead><tr><th>Rolle</th><th>Wer</th></tr></thead>
<tbody>
<tr><td>Neuling</td><td>dein Account hat weniger als derzeit <strong>20 Stunden</strong> Spielzeit (alle Tiere zusammen)</td></tr>
<tr><td>Mentor</td><td>dein Account hat mindestens <strong>50 Stunden</strong> Spielzeit, und du spielst ein lebendes Tier</td></tr>
</tbody>
</table>
<p>Die Art ist egal: Ein Wolf kann einen Hirsch führen – es geht ums Zeigen und Begleiten. Ein Neuling hat höchstens einen Mentor, ein Mentor führt höchstens 2 Neulinge gleichzeitig.</p>
<p><strong>Mentor-Menü öffnen:</strong> im Charaktermenü (<kbd>J</kbd>), Übersicht, Abschnitt <em>Mentor</em> → <em>Mentor-Menü öffnen</em>, oder mit dem Befehl <kbd>/liw_mentor</kbd>. Eine eigene Taste kannst du unter <em>Einstellungen → Tastenbelegung → RedM</em> vergeben.</p>`,
            en: `<p>Experienced players guide <strong>newcomers</strong> through the wild – and both get something out of it.</p>
<table class="hb-table">
<thead><tr><th>Role</th><th>Who</th></tr></thead>
<tbody>
<tr><td>Newcomer</td><td>your account has less than currently <strong>20 hours</strong> of playtime (all animals together)</td></tr>
<tr><td>Mentor</td><td>your account has at least <strong>50 hours</strong> of playtime, and you play a living animal</td></tr>
</tbody>
</table>
<p>The species does not matter: a wolf can guide a deer – it is about showing and accompanying. A newcomer has at most one mentor, a mentor guides at most 2 newcomers at a time.</p>
<p><strong>Opening the mentor menu:</strong> in the character menu (<kbd>J</kbd>), Overview, section <em>Mentor</em> → <em>Open the mentor menu</em>, or with the command <kbd>/liw_mentor</kbd>. You can set your own key under <em>Settings → Key Bindings → RedM</em>.</p>`,
        },
        {
            id: 'mentor-finding',
            title: { de: 'Einen Mentor finden', en: 'Finding a mentor' },
            tags: { de: 'mentor finden fragen anbieten rufen verfügbar', en: 'find mentor ask offer call available' },
            de: `<p><strong>Als Neuling:</strong></p>
<ul>
<li>Das Mentor-Menü zeigt dir die verfügbaren Mentoren, die gerade online sind – mit Art, Abschlüssen, Punkten und ungefährer Entfernung.</li>
<li>Mit <em>Nach einem Mentor rufen</em> bekommen alle verfügbaren Mentoren mit freiem Platz eine Meldung, dass du einen suchst (derzeit höchstens alle 15 Minuten).</li>
<li>Kurz nachdem du neu in die Wildnis kommst, erinnert dich ein Tagebuchzettel einmal an die Mentoren.</li>
</ul>
<p><strong>Als erfahrener Spieler:</strong> Schalte im Mentor-Menü <em>Als Mentor verfügbar</em> ein – dann sehen Neulinge dich und können dich rufen.</p>
<p><strong>Binden:</strong></p>
<ol>
<li>Trefft euch – höchstens etwa 15 m voneinander entfernt.</li>
<li>Einer von euch klickt im Mentor-Menü unter <em>In der Nähe</em> auf <em>Fragen</em> (Neuling) bzw. <em>Anbieten</em> (Mentor).</li>
<li>Der andere nimmt innerhalb von 60 Sekunden an.</li>
</ol>
<p>Zwei Accounts derselben Person (oder vom selben Internetanschluss) können sich nicht binden.</p>`,
            en: `<p><strong>As a newcomer:</strong></p>
<ul>
<li>The mentor menu shows you the available mentors who are online right now – with species, graduates, points and rough distance.</li>
<li><em>Call for a mentor</em> tells every available mentor with a free place that you are looking for one (currently at most every 15 minutes).</li>
<li>Shortly after you first enter the wild, a journal note reminds you once about mentors.</li>
</ul>
<p><strong>As an experienced player:</strong> switch on <em>Available as mentor</em> in the mentor menu – then newcomers see you and can call you.</p>
<p><strong>Bonding:</strong></p>
<ol>
<li>Meet up – at most about 15 m apart.</li>
<li>One of you clicks <em>Ask</em> (newcomer) or <em>Offer</em> (mentor) under <em>Nearby</em> in the mentor menu.</li>
<li>The other accepts within 60 seconds.</li>
</ol>
<p>Two accounts of the same person (or from the same internet connection) cannot bond.</p>`,
        },
        {
            id: 'mentor-together',
            title: { de: 'Zusammen unterwegs', en: 'Out together' },
            tags: { de: 'bonus erfahrung zusammen namensschild meilensteine mentorpunkte', en: 'bonus experience together name tag milestones mentor points' },
            de: `<p>Solange ihr beide lebt, nicht niedergestreckt seid und höchstens etwa <strong>50 m</strong> auseinander, bekommt ihr <strong>beide 10 % mehr Erfahrung</strong>. Das HUD zeigt dann den Effekt „Mentorschaft“, und über dem anderen steht ein Namensschild mit „Mentor“ bzw. „Schützling“ (abschaltbar unter <kbd>J</kbd> → <em>Einstellungen</em>).</p>
<p><strong>Meilensteine des Neulings</strong> bringen dem Mentor Ruhm und Mentorpunkte (derzeit je 3 Ruhm und 1 Punkt) – aber nur, wenn ihr dabei zusammen seid:</p>
<ul>
<li>Stufe 5, 10 und 15 erreicht</li>
<li>zum ersten Mal ein Revier markiert (<kbd>G</kbd>)</li>
<li>einem Rudel beigetreten oder eines gegründet</li>
</ul>
<p>Das Mentor-Menü zeigt, wie es um eure Mentorschaft steht („Zusammen – Bonus aktiv“, „Zu weit auseinander“, „Nicht online“), die erreichten Meilensteine und die Zeit zusammen.</p>`,
            en: `<p>As long as you are both alive, not downed and at most about <strong>50 m</strong> apart, you <strong>both get 10 % more experience</strong>. The HUD then shows the effect "Mentorship", and a name tag with "Mentor" or "Mentee" stands above the other (can be switched off under <kbd>J</kbd> → <em>Settings</em>).</p>
<p><strong>The newcomer's milestones</strong> give the mentor fame and mentor points (currently 3 fame and 1 point each) – but only if you are together at the time:</p>
<ul>
<li>reaching level 5, 10 and 15</li>
<li>marking a territory for the first time (<kbd>G</kbd>)</li>
<li>joining or founding a pack</li>
</ul>
<p>The mentor menu shows how your mentorship stands ("Together - bonus active", "Too far apart", "Not online"), the milestones reached and your time together.</p>`,
        },
        {
            id: 'mentor-graduation',
            title: { de: 'Abschluss und Belohnungen', en: 'Graduation and rewards' },
            tags: { de: 'abschluss belohnung lehrmeister ziehkind titel ende', en: 'graduation reward teacher protege title end' },
            de: `<p>Erreicht der Neuling 20 Stunden Spielzeit, ist er nicht mehr neu – die Mentorschaft endet mit einem <strong>Abschluss</strong>. Wart ihr insgesamt mindestens <strong>60 Minuten</strong> zusammen, gibt es Belohnungen:</p>
<ul>
<li><strong>Mentor:</strong> derzeit 15 Ruhm und 5 Mentorpunkte; die Errungenschaften „Lehrmeister“ (1 Abschluss, Titel „Mentor“), „Erfahrener Lehrmeister“ (3) und „Großer Lehrmeister“ (10, Titel „Meister der Wildniskunde“).</li>
<li><strong>Neuling:</strong> derzeit 10 Ruhm und die Errungenschaft „Ziehkind“ mit dem gleichnamigen Titel.</li>
</ul>
<p>Waren es weniger als 60 Minuten zusammen, endet die Mentorschaft ohne Abschlussbelohnung. Ruhm für einen Mentor, der gerade nicht spielt, wird aufgehoben und beim nächsten Mal ausgezahlt.</p>
<p><strong>Vorzeitig beenden:</strong> Beide können die Mentorschaft im Mentor-Menü mit <em>Beenden</em> (zweimal klicken) lösen. Danach wartet der Neuling 60 Minuten, bevor er sich neu binden kann, und dasselbe Paar 24 Stunden.</p>`,
            en: `<p>When the newcomer reaches 20 hours of playtime, they are no longer new – the mentorship ends with a <strong>graduation</strong>. If you were together for at least <strong>60 minutes</strong> in total, there are rewards:</p>
<ul>
<li><strong>Mentor:</strong> currently 15 fame and 5 mentor points; the achievements "Teacher" (1 graduate, title "Mentor"), "Seasoned Teacher" (3) and "Master Teacher" (10, title "Master of the Wild Lore").</li>
<li><strong>Newcomer:</strong> currently 10 fame and the achievement "Protégé" with the title of the same name.</li>
</ul>
<p>With less than 60 minutes together the mentorship ends without a graduation reward. Fame for a mentor who is not playing at the moment is kept and paid out next time.</p>
<p><strong>Ending early:</strong> either of you can end the mentorship in the mentor menu with <em>End</em> (click twice). Afterwards the newcomer waits 60 minutes before bonding again, and the same pair 24 hours.</p>`,
        },
    ],
});
