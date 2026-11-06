window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'help',
    order: 90,
    icon: 'help',
    title: { de: 'Hilfe und Glossar', en: 'Help and glossary' },
    sections: [
        {
            id: 'help-faq-join',
            title: { de: 'Wie komme ich auf den Server?', en: 'How do I get onto the server?' },
            tags: { de: 'faq server beitreten verbinden spielen anfangen einstieg', en: 'faq server join connect play start' },
            de: `<ol>
<li>Du brauchst Red Dead Redemption 2 für den PC und den kostenlosen Client RedM (redm.net).</li>
<li>Tritt unserem Discord bei; ohne Discord kein Zugang. Eine Bewerbung gibt es nicht.</li>
<li>Verbinde dich: auf der <a href="index.html">Startseite</a> auf „Verbinden“ klicken, in der RedM-Serverliste nach „Life In Wilderness“ suchen oder in RedM <kbd>F8</kbd> drücken und <code>connect cfx.re/join/4ggl8rq</code> eingeben.</li>
<li>Erschaffe im Auswahlbildschirm dein erstes Tier.</li>
</ol>
<p>Ausführlich: <a href="#start-requirements">Was du brauchst</a>, <a href="#start-connect">Verbinden</a>, <a href="#start-create">Ein Tier erschaffen</a>.</p>`,
            en: `<ol>
<li>You need Red Dead Redemption 2 for PC and the free RedM client (redm.net).</li>
<li>Join our Discord; no Discord, no access. There is no application.</li>
<li>Connect: click “Connect” on the <a href="index.html">homepage</a>, search the RedM server list for “Life In Wilderness” or press <kbd>F8</kbd> in RedM and type <code>connect cfx.re/join/4ggl8rq</code>.</li>
<li>Create your first animal on the selection screen.</li>
</ol>
<p>In detail: <a href="#start-requirements">What you need</a>, <a href="#start-connect">Connecting</a>, <a href="#start-create">Creating an animal</a>.</p>`,
        },
        {
            id: 'help-faq-hud',
            title: { de: 'Ich sehe kein HUD', en: 'I cannot see the HUD' },
            tags: { de: 'faq hud weg unsichtbar ringe fehlen anzeige verschwunden', en: 'faq hud gone invisible rings missing display disappeared' },
            de: `<p>Geh diese Punkte durch:</p>
<ul>
<li><b>Ringe erscheinen nur bei Bedarf.</b> Sind alle Werte gut, ist unten links fast nichts zu sehen. Halte <kbd>Alt</kbd>, dann siehst du alle Ringe.</li>
<li><b>Einstellungen prüfen:</b> Charaktermenü (<kbd>J</kbd>) → Einstellungen → Anzeige. Ist „HUD“ oder ein Teil davon ausgeschaltet?</li>
<li><b>HUD-Taste:</b> Hast du dir eine Taste für „HUD aus-/einblenden“ gelegt, hast du es vielleicht damit ausgeblendet. Drück sie noch einmal.</li>
<li><b>Kein Tier aktiv:</b> Im Auswahlbildschirm gibt es kein HUD.</li>
<li><b>Pausenmenü:</b> Solange das Pausenmenü oder die Karte offen ist, ist das HUD ausgeblendet.</li>
</ul>
<p>Willst du alle Ringe dauerhaft sehen, gib in der <kbd>F8</kbd>-Konsole <code>liw_hud</code> ein; noch einmal eingeben schaltet zurück auf „nur bei Bedarf“.</p>`,
            en: `<p>Go through these points:</p>
<ul>
<li><b>Rings only appear when needed.</b> If all values are fine, there is almost nothing at the bottom left. Hold <kbd>Alt</kbd> to see all rings.</li>
<li><b>Check the settings:</b> character menu (<kbd>J</kbd>) → Settings → Display. Is “HUD” or a part of it switched off?</li>
<li><b>HUD key:</b> if you bound a key to “Hide / show HUD”, you may have hidden it with that. Press it again.</li>
<li><b>No animal active:</b> there is no HUD on the selection screen.</li>
<li><b>Pause menu:</b> while the pause menu or the map is open, the HUD is hidden.</li>
</ul>
<p>To see all rings all the time, type <code>liw_hud</code> in the <kbd>F8</kbd> console; typing it again switches back to “only when needed”.</p>`,
        },
        {
            id: 'help-faq-death',
            title: { de: 'Mein Tier ist gestorben – was nun?', en: 'My animal died – what now?' },
            tags: { de: 'faq tod gestorben tot permadeath neu anfangen wiederbeleben', en: 'faq death died dead permadeath start again revive' },
            de: `<p>Der Tod ist endgültig; das gehört zum Spiel. Dein Tier steht jetzt bei den Gefallenen und sein Platz ist frei. Du kannst:</p>
<ul>
<li>ein <b>neues Tier</b> erschaffen, gern eine andere Art, oder</li>
<li>ein <b>Jungtier</b> aus einem Wurf übernehmen, wenn eines auf dich wartet, vielleicht aus deiner eigenen Familie.</li>
</ul>
<p>Was verloren geht und was bleibt: <a href="#life-death">Was beim Tod passiert</a>. Ist dein Tier durch einen <b>Fehler</b> gestorben, öffne ein Ticket auf dem Discord (siehe <a href="#help-support">Hilfe bekommen</a>).</p>`,
            en: `<p>Death is final; that is part of the game. Your animal is now among the fallen and its slot is free. You can:</p>
<ul>
<li>create a <b>new animal</b>, maybe a different species, or</li>
<li>take over a <b>juvenile</b> from a litter if one is waiting for you, perhaps from your own family.</li>
</ul>
<p>What is lost and what remains: <a href="#life-death">What happens on death</a>. If your animal died because of a <b>bug</b>, open a ticket on the Discord (see <a href="#help-support">Getting help</a>).</p>`,
        },
        {
            id: 'help-faq-language',
            title: { de: 'Wie wechsle ich die Sprache?', en: 'How do I change the language?' },
            tags: { de: 'faq sprache deutsch englisch umstellen language', en: 'faq language german english switch' },
            de: `<ul>
<li><b>Im Spiel:</b> Charaktermenü (<kbd>J</kbd>) → Einstellungen → Sprache. „Automatisch“ nimmt die Spielsprache von RDR2.</li>
<li><b>Auf dieser Website:</b> oben rechts <b>DE / EN</b>.</li>
</ul>
<p>Mehr dazu: <a href="#hud-language">Sprache</a>.</p>`,
            en: `<ul>
<li><b>In the game:</b> character menu (<kbd>J</kbd>) → Settings → Language. “Automatic” uses the RDR2 game language.</li>
<li><b>On this website:</b> <b>DE / EN</b> at the top right.</li>
</ul>
<p>More: <a href="#hud-language">Language</a>.</p>`,
        },
        {
            id: 'help-faq-realtime',
            title: { de: 'Was bedeutet „Echtzeit“?', en: 'What does “real time” mean?' },
            tags: { de: 'faq echtzeit spielzeit spieltag uhrzeit stunden minuten umrechnung zeit kalender', en: 'faq real time game time game day clock hours minutes conversion time calendar' },
            de: `<p>Die Spielwelt hat ihre eigene Uhr, die schneller läuft als die echte:</p>
<table class="hb-table">
<thead><tr><th>In der Spielwelt</th><th>In Echtzeit</th></tr></thead>
<tbody>
<tr><td>1 Spielminute</td><td>30 Sekunden</td></tr>
<tr><td>1 Spielstunde</td><td>30 Minuten</td></tr>
<tr><td>1 Spieltag (Tag und Nacht)</td><td>12 Stunden</td></tr>
</tbody>
</table>
<p>Pro echtem Tag gibt es also zwei volle Tag-Nacht-Wechsel: einen von Mitternacht bis Mittag und einen von Mittag bis Mitternacht.</p>
<p><b>„Echtzeit“</b> heißt: so lange, wie es auf deiner Uhr im echten Leben dauert. Wenn im Handbuch nichts anderes steht, sind alle Zeiten Echtzeit. Echtzeit gilt zum Beispiel für:</p>
<ul>
<li>das <b>Alter</b> deines Tieres: eine Stunde Spielen ist eine Stunde Alter (siehe <a href="#life-age">Wie lange lebt ein Tier?</a>),</li>
<li>Abklingzeiten, Schutzzeiten und Effekte in Sekunden und Minuten,</li>
<li>die <b>Jahreszeiten</b>: Sie folgen dem echten Kalender, der Frühling beginnt am 1. März, der Sommer am 1. Juni, der Herbst am 1. September und der Winter am 1. Dezember (siehe <a href="#world">Welt</a>).</li>
</ul>`,
            en: `<p>The game world has its own clock that runs faster than the real one:</p>
<table class="hb-table">
<thead><tr><th>In the game world</th><th>In real time</th></tr></thead>
<tbody>
<tr><td>1 game minute</td><td>30 seconds</td></tr>
<tr><td>1 game hour</td><td>30 minutes</td></tr>
<tr><td>1 game day (day and night)</td><td>12 hours</td></tr>
</tbody>
</table>
<p>So every real day has two full day-night cycles: one from midnight to noon and one from noon to midnight.</p>
<p><b>“Real time”</b> means: as long as it takes on your clock in real life. Unless the handbook says otherwise, all times are real time. Real time applies for example to:</p>
<ul>
<li>your animal's <b>age</b>: one hour of play is one hour of age (see <a href="#life-age">How long does an animal live?</a>),</li>
<li>cooldowns, protection times and effects in seconds and minutes,</li>
<li>the <b>seasons</b>: they follow the real calendar, spring starts on 1 March, summer on 1 June, autumn on 1 September and winter on 1 December (see <a href="#world">World</a>).</li>
</ul>`,
        },
        {
            id: 'help-faq-general',
            title: { de: 'Weitere häufige Fragen', en: 'More frequent questions' },
            tags: { de: 'faq mensch text chat tiere plätze slots kosten geld inventar', en: 'faq human text chat animals slots cost money inventory' },
            de: `<table class="hb-table">
<tbody>
<tr><td><b>Kann ich einen Menschen spielen?</b></td><td>Nein. Auf Life In Wilderness ist jeder Spieler ein Tier, und auch sonst gibt es keine Menschen in der Welt.</td></tr>
<tr><td><b>Gibt es einen Text-Chat?</b></td><td>Im Spiel nicht. Ihr verständigt euch über Proximity Voice, Tierlaute und das Emote-Rad (siehe <a href="#voice">Stimme</a>).</td></tr>
<tr><td><b>Wie viele Tiere kann ich haben?</b></td><td>Drei gleichzeitig. Ein Platz wird frei, wenn ein Tier stirbt (siehe <a href="#start-selection">Auswahlbildschirm</a>).</td></tr>
<tr><td><b>Gibt es Geld oder ein Inventar?</b></td><td>Nein. Du kommst über deinen Körper, deine Fähigkeiten, dein Rudel und dein Revier voran (siehe <a href="#progress">Fortschritt</a>).</td></tr>
<tr><td><b>Kann ich mit Freunden spielen?</b></td><td>Ja. Wählt dieselbe Art und gründet ein Rudel (siehe <a href="#pack">Rudel</a>).</td></tr>
<tr><td><b>Darf ich als Pflanzenfresser Spieler angreifen?</b></td><td>Pflanzenfresser verteidigen sich nur: Einem Spieler schaden sie nur, wenn er sie in den letzten 30 Sekunden angegriffen hat (Ausnahme: das Alpha-Duell; siehe <a href="#combat">Kampf</a>).</td></tr>
<tr><td><b>Wo sehe ich alle Tasten?</b></td><td>Auf der Seite <a href="tasten.html">Tastenbelegung</a>.</td></tr>
</tbody>
</table>`,
            en: `<table class="hb-table">
<tbody>
<tr><td><b>Can I play a human?</b></td><td>No. On Life In Wilderness every player is an animal, and there are no other humans in the world either.</td></tr>
<tr><td><b>Is there a text chat?</b></td><td>Not in the game. You talk through proximity voice, animal sounds and the emote wheel (see <a href="#voice">Voice</a>).</td></tr>
<tr><td><b>How many animals can I have?</b></td><td>Three at a time. A slot frees up when an animal dies (see <a href="#start-selection">Selection screen</a>).</td></tr>
<tr><td><b>Is there money or an inventory?</b></td><td>No. You progress through your body, your skills, your pack and your territory (see <a href="#progress">Progress</a>).</td></tr>
<tr><td><b>Can I play with friends?</b></td><td>Yes. Choose the same species and found a pack (see <a href="#pack">Pack</a>).</td></tr>
<tr><td><b>May I attack players as a herbivore?</b></td><td>Herbivores only defend themselves: they can only hurt a player who attacked them within the last 30 seconds (except in an alpha duel; see <a href="#combat">Combat</a>).</td></tr>
<tr><td><b>Where do I see all the keys?</b></td><td>On the <a href="tasten.html">Key bindings</a> page.</td></tr>
</tbody>
</table>`,
        },
        {
            id: 'help-trouble',
            title: { de: 'Probleme lösen', en: 'Troubleshooting' },
            tags: { de: 'problem fehler bug geht nicht funktioniert nicht taste ausloggen fressen trinken mikrofon stimme gesperrt hängt', en: 'problem error bug does not work key log out eat drink microphone voice locked stuck' },
            de: `<table class="hb-table">
<thead><tr><th>Problem</th><th>Lösung</th></tr></thead>
<tbody>
<tr><td>„Dieses Tier ist noch draußen in der Wildnis“</td><td>Nach einem Verbindungsabbruch bleibt dein Tier noch 30 Sekunden in der Welt. Warte kurz und versuch es noch einmal (siehe <a href="#start-logout">Ausloggen</a>).</td></tr>
<tr><td>„Mitten im Kampf kannst du nicht gehen / wechseln“</td><td>Nach dem letzten Treffer 30 Sekunden warten. Am besten erst in Sicherheit bringen.</td></tr>
<tr><td>„Niedergestreckt kannst du nicht gehen“</td><td>Warte auf Hilfe aus deinem Rudel (siehe <a href="#life-downed">Niedergestreckt</a>).</td></tr>
<tr><td>Ich kann nicht fressen oder trinken</td><td>Bist du schon satt oder nicht durstig, geht es nicht. Prüf auch, ob deine Art das fressen kann (siehe <a href="#food">Nahrung</a>). Der Hinweis „Fressen“ erscheint nur in der Nähe von Futter.</td></tr>
<tr><td>Eine Taste tut nichts</td><td>Prüf unter Einstellungen → Tastenbelegung → RedM die Einträge mit „LiW:“, ob die Taste doppelt belegt oder geändert ist (siehe <a href="#hud-keybinds">Tasten ändern</a>). Manche Fähigkeiten brauchen erst einen Skill oder laden noch auf.</td></tr>
<tr><td>Mich hört niemand</td><td>Schau auf die <a href="#hud-voice">Sprachanzeige</a>: „Sprachchat aus“ oder „Mikrofon aus“ heißt, dass der Sprachchat in den Spieleinstellungen abgeschaltet ist. Sprechen geht über die Push-to-Talk-Taste (Standard <kbd>N</kbd>); die Reichweite stellst du mit <kbd>Z</kbd> ein.</td></tr>
<tr><td>Ich sehe kein HUD</td><td>Siehe <a href="#help-faq-hud">Ich sehe kein HUD</a>.</td></tr>
<tr><td>Ich hänge fest oder bin durch die Karte gefallen</td><td>Aus- und wieder einloggen (Charaktermenü <kbd>J</kbd>) kann helfen. Hilft das nicht, öffne ein Ticket.</td></tr>
<tr><td>Das Spiel lädt nicht oder stürzt ab</td><td>RedM ganz schließen und neu starten; prüfen, ob RDR2 und RedM aktuell sind. Hilft das nicht, öffne ein Ticket mit einer Beschreibung, wann es passiert.</td></tr>
</tbody>
</table>`,
            en: `<table class="hb-table">
<thead><tr><th>Problem</th><th>Solution</th></tr></thead>
<tbody>
<tr><td>“This animal is still out in the wild”</td><td>After losing the connection your animal stays in the world for 30 seconds. Wait a moment and try again (see <a href="#start-logout">Logging out</a>).</td></tr>
<tr><td>“You cannot leave / switch in the middle of a fight”</td><td>Wait 30 seconds after the last hit. Ideally get to safety first.</td></tr>
<tr><td>“You cannot leave while downed”</td><td>Wait for help from your pack (see <a href="#life-downed">Downed</a>).</td></tr>
<tr><td>I cannot eat or drink</td><td>If you are already full or not thirsty, it does not work. Also check whether your species can eat that (see <a href="#food">Food</a>). The “Eat” hint only appears near food.</td></tr>
<tr><td>A key does nothing</td><td>Check the “LiW:” entries under Settings → Key Bindings → RedM to see whether the key is bound twice or was changed (see <a href="#hud-keybinds">Changing keys</a>). Some abilities need a skill first or are still recharging.</td></tr>
<tr><td>Nobody hears me</td><td>Look at the <a href="#hud-voice">voice display</a>: “voice chat off” or “microphone off” means voice chat is switched off in the game settings. Talking uses the push-to-talk key (default <kbd>N</kbd>); you set the range with <kbd>Z</kbd>.</td></tr>
<tr><td>I cannot see the HUD</td><td>See <a href="#help-faq-hud">I cannot see the HUD</a>.</td></tr>
<tr><td>I am stuck or fell through the map</td><td>Logging out and back in (character menu <kbd>J</kbd>) can help. If it does not, open a ticket.</td></tr>
<tr><td>The game does not load or crashes</td><td>Close RedM completely and start it again; check that RDR2 and RedM are up to date. If that does not help, open a ticket describing when it happens.</td></tr>
</tbody>
</table>`,
        },
        {
            id: 'help-support',
            title: { de: 'Hilfe bekommen', en: 'Getting help' },
            tags: { de: 'support ticket discord hilfe melden fehler bug team regeln frage', en: 'support ticket discord help report bug error team rules question' },
            de: `<p>Wenn du nicht weiterkommst:</p>
<ol>
<li><b>Such hier im Handbuch.</b> Die Suche oben findet auch Begriffe im Text (Taste <kbd>/</kbd>).</li>
<li><b>Frag die Community</b> auf dem Discord. Viele Fragen sind dort schon beantwortet.</li>
<li><b>Öffne ein Ticket</b> auf dem Discord bei Fehlern, Problemen mit anderen Spielern oder wenn dein Tier durch einen Fehler gestorben ist. Streit gehört nicht ins Spiel, sondern ins Ticket.</li>
</ol>
<p><b>Was in ein gutes Ticket gehört:</b></p>
<ul>
<li>Datum und ungefähre Uhrzeit,</li>
<li>der Name deines Tieres und, falls beteiligt, die Namen der anderen,</li>
<li>was du gemacht hast und was passiert ist,</li>
<li>wenn möglich ein Screenshot oder Clip.</li>
</ul>
<div class="hb-tip"><p>Neu in der Wildnis? Such dir einen <a href="#mentor">Mentor</a>: Erfahrene Spieler begleiten Neulinge, und beide bekommen dafür mehr Erfahrung.</p></div>`,
            en: `<p>When you are stuck:</p>
<ol>
<li><b>Search this handbook.</b> The search at the top also finds words in the text (key <kbd>/</kbd>).</li>
<li><b>Ask the community</b> on the Discord. Many questions have been answered there already.</li>
<li><b>Open a ticket</b> on the Discord for bugs, problems with other players or when your animal died because of a bug. Arguments do not belong in the game but in a ticket.</li>
</ol>
<p><b>What goes into a good ticket:</b></p>
<ul>
<li>date and rough time,</li>
<li>your animal's name and, if involved, the names of the others,</li>
<li>what you did and what happened,</li>
<li>a screenshot or clip if possible.</li>
</ul>
<div class="hb-tip"><p>New to the wild? Find a <a href="#mentor">mentor</a>: experienced players guide newcomers, and both gain more experience for it.</p></div>`,
        },
        {
            id: 'help-glossary',
            title: { de: 'Glossar: Spiel und Fortschritt', en: 'Glossary: game and progress' },
            tags: { de: 'glossar begriffe lexikon erklärung wörterbuch bedeutung', en: 'glossary terms lexicon explanation dictionary meaning' },
            de: `<dl>
<dt>Art</dt><dd>Die Tierart, die du spielst, z. B. Wolf, Puma oder Bison. Bestimmt Ernährung, Werte und Fähigkeiten (<a href="#species">Arten</a>).</dd>
<dt>Attribute</dt><dd>Stärke, Ausdauer, Geschwindigkeit, Sinne, Tarnung und Konstitution. Mit jeder Stufe verteilst du Punkte darauf (<a href="#progress">Fortschritt</a>).</dd>
<dt>Bau</dt><dd>Ein Platz für ein Tier in deinem Account. Du hast drei (<a href="#start-selection">Auswahlbildschirm</a>).</dd>
<dt>Belohnungsfell</dt><dd>Ein Fell mit ★, das du über eine Quest für deinen Account freischaltest (<a href="#start-gender-fur">Geschlecht und Fell</a>).</dd>
<dt>EP / Erfahrung</dt><dd>Bekommst du für Jagen, Überleben, Quests, Erkunden und mehr. Genug EP bringen eine neue Stufe (<a href="#progress">Fortschritt</a>).</dd>
<dt>Echtzeit</dt><dd>Zeit, wie sie auf deiner echten Uhr vergeht. Ein Spieltag dauert 12 echte Stunden (<a href="#help-faq-realtime">Was bedeutet Echtzeit?</a>).</dd>
<dt>Event</dt><dd>Besondere Zeiten wie Vollmond oder Feiertage mit eigenen Quests und Belohnungen (<a href="#events">Events</a>).</dd>
<dt>Event-Fell</dt><dd>Eine besondere Optik mit ✦, die es nur als Belohnung von Event-Quests gibt (<a href="#events">Events</a>).</dd>
<dt>Fähigkeiten / Skills</dt><dd>Der Fähigkeitsbaum deiner Art. Mit Fähigkeitspunkten lernst du Fähigkeiten, die dich stärker machen oder die zweite Fähigkeit (<kbd>X</kbd>) freischalten (<a href="#progress">Fortschritt</a>).</dd>
<dt>Gefallene</dt><dd>Deine gestorbenen Tiere, im Auswahlbildschirm mit Todesursache aufgeführt (<a href="#life-death">Was beim Tod passiert</a>).</dd>
<dt>Gedenkstein</dt><dd>Ein Stein in der Welt für ein gefallenes Tier oder ein besonderes Rudel; mit <kbd>E</kbd> liest du die Inschrift (<a href="#life-memorials">Gedenksteine</a>).</dd>
<dt>Legendäres Tier</dt><dd>Ein seltenes, besonders starkes Wildtier, auf das ein Rudel treffen kann (<a href="#events">Events</a>).</dd>
<dt>Mentor</dt><dd>Ein erfahrener Spieler, der einen Neuling begleitet; beide bekommen mehr Erfahrung (<a href="#mentor">Mentor</a>).</dd>
<dt>Neulingsschutz</dt><dd>Die erste Stunde eines neuen Tieres: Andere Spieler können ihm nicht schaden (<a href="#start-newcomer">Neulingsschutz</a>).</dd>
<dt>Permadeath</dt><dd>Der endgültige Tod: Ein gestorbenes Tier kommt nicht zurück (<a href="#life-death">Was beim Tod passiert</a>).</dd>
<dt>Ruhm</dt><dd>Dein Ansehen in der Wildnis, z. B. durch Jagd, Quests, Duelle und Reviere. Ab bestimmten Werten bekommst du Titel; Ruhm deiner Mitglieder zählt auch für das Rudel (<a href="#progress">Fortschritt</a>).</dd>
<dt>Saison</dt><dd>Der Zeitraum einer Jahreszeit, nach dem die Ranglisten „Tier der Saison“ und „Rudel der Saison“ gezählt werden (<a href="#ranking">Ranglisten</a>).</dd>
<dt>Sonderfähigkeit</dt><dd>Die besondere Attacke deiner Art auf der <kbd>Feststelltaste</kbd>, z. B. Sprung, Prankenhieb oder Heulen (<a href="#combat">Kampf</a>).</dd>
<dt>Spawnschutz</dt><dd>10 Sekunden Unverwundbarkeit nach jedem Betreten der Wildnis (<a href="#start-protection">Spawnschutz</a>).</dd>
<dt>Stufe</dt><dd>Dein Level. Jede neue Stufe bringt Punkte für Attribute und Fähigkeiten (<a href="#progress">Fortschritt</a>).</dd>
<dt>Tierbuch</dt><dd>Das gemeinsame Buch der Menüs <kbd>J</kbd>, <kbd>K</kbd>, <kbd>L</kbd>, <kbd>O</kbd> und <kbd>U</kbd> (<a href="#hud-menus">Menüs</a>).</dd>
<dt>Titel</dt><dd>Ein Beiname, den du dir durch Ruhm, Errungenschaften oder Quests verdienst und tragen kannst (<a href="#quests">Aufgaben</a>).</dd>
</dl>`,
            en: `<dl>
<dt>Species</dt><dd>The kind of animal you play, e.g. wolf, cougar or bison. It sets diet, values and abilities (<a href="#species">Species</a>).</dd>
<dt>Attributes</dt><dd>Strength, stamina, speed, senses, stealth and constitution. With every level you spend points on them (<a href="#progress">Progress</a>).</dd>
<dt>Den (slot)</dt><dd>A slot for an animal on your account. You have three (<a href="#start-selection">Selection screen</a>).</dd>
<dt>Reward fur</dt><dd>A fur marked ★ that you unlock for your account through a quest (<a href="#start-gender-fur">Sex and fur</a>).</dd>
<dt>XP / experience</dt><dd>You get it for hunting, surviving, quests, exploring and more. Enough XP gives a new level (<a href="#progress">Progress</a>).</dd>
<dt>Real time</dt><dd>Time as it passes on your real clock. A game day lasts 12 real hours (<a href="#help-faq-realtime">What does “real time” mean?</a>).</dd>
<dt>Event</dt><dd>Special times such as a full moon or holidays with their own quests and rewards (<a href="#events">Events</a>).</dd>
<dt>Event fur</dt><dd>A special look marked ✦ that you only get as a reward of event quests (<a href="#events">Events</a>).</dd>
<dt>Skills</dt><dd>The skill tree of your species. Skill points let you learn skills that make you stronger or unlock the second ability (<kbd>X</kbd>) (<a href="#progress">Progress</a>).</dd>
<dt>The Fallen</dt><dd>Your animals that have died, listed on the selection screen with their cause of death (<a href="#life-death">What happens on death</a>).</dd>
<dt>Memorial stone</dt><dd>A stone in the world for a fallen animal or a special pack; <kbd>E</kbd> reads the inscription (<a href="#life-memorials">Memorial stones</a>).</dd>
<dt>Legendary animal</dt><dd>A rare, especially strong wild animal a pack can come across (<a href="#events">Events</a>).</dd>
<dt>Mentor</dt><dd>An experienced player who guides a newcomer; both gain more experience (<a href="#mentor">Mentor</a>).</dd>
<dt>Newcomer protection</dt><dd>A new animal's first hour: other players cannot hurt it (<a href="#start-newcomer">Newcomer protection</a>).</dd>
<dt>Permadeath</dt><dd>Final death: an animal that died does not come back (<a href="#life-death">What happens on death</a>).</dd>
<dt>Fame</dt><dd>Your standing in the wild, e.g. from hunting, quests, duels and territories. At certain values you earn titles; your members' fame also counts for the pack (<a href="#progress">Progress</a>).</dd>
<dt>Season (rankings)</dt><dd>The span of one season of the year, by which the rankings “animal of the season” and “pack of the season” are counted (<a href="#ranking">Rankings</a>).</dd>
<dt>Special</dt><dd>The special attack of your species on <kbd>Caps Lock</kbd>, e.g. pounce, maul or howl (<a href="#combat">Combat</a>).</dd>
<dt>Spawn protection</dt><dd>10 seconds of invulnerability every time you enter the wild (<a href="#start-protection">Spawn protection</a>).</dd>
<dt>Level</dt><dd>Every new level gives points for attributes and skills (<a href="#progress">Progress</a>).</dd>
<dt>Animal book</dt><dd>The shared book of the menus <kbd>J</kbd>, <kbd>K</kbd>, <kbd>L</kbd>, <kbd>O</kbd> and <kbd>U</kbd> (<a href="#hud-menus">Menus</a>).</dd>
<dt>Title</dt><dd>An epithet you earn through fame, achievements or quests and can wear (<a href="#quests">Quests</a>).</dd>
</dl>`,
        },
        {
            id: 'help-glossary-survival',
            title: { de: 'Glossar: Körper und Überleben', en: 'Glossary: body and survival' },
            tags: { de: 'glossar begriffe aas kadaver witterung blutung humpeln niedergestreckt aasfieber tollwut überfressen winterfell', en: 'glossary terms carrion carcass scent bleeding limping downed carrion fever rabies overfed winter coat' },
            de: `<dl>
<dt>Aas</dt><dd>Ein Kadaver, der nicht mehr frisch ist: Fleisch, das ein Spieler vor einer Weile gerissen hat, oder ein Tier, das niemand gerissen hat (gefunden oder von Wildtieren getötet). Macht weniger satt und kann Aasfieber auslösen (<a href="#food">Nahrung</a>).</dd>
<dt>Aasfieber</dt><dd>Eine Krankheit durch das Fressen von Aas. Aasfresser-Arten sind widerstandsfähiger (<a href="#disease">Krankheiten</a>).</dd>
<dt>Ausgeruht</dt><dd>Ein Vorteil nach mindestens einer Stunde Pause: für eine Weile bessere Ausdauer (<a href="#start-logout">Ausloggen und Pausen</a>).</dd>
<dt>Blutung</dt><dd>Nach einem schweren Treffer verlierst du eine Weile Lebenspunkte; Ruhen stoppt sie schneller (<a href="#health">Gesundheit</a>).</dd>
<dt>Humpeln</dt><dd>Nach einem sehr schweren Treffer oder Sturz: kein Sprinten, langsamer (<a href="#health">Gesundheit</a>).</dd>
<dt>Kadaver</dt><dd>Ein totes Tier, an dem Fleischfresser und Allesfresser mit <kbd>E</kbd> fressen können (<a href="#food">Nahrung</a>).</dd>
<dt>Nachtsicht</dt><dd>Der Sinnesmodus mancher Arten: Sie sehen im Dunkeln besser (<a href="#senses">Sinne</a>).</dd>
<dt>Niedergestreckt</dt><dd>Der Zustand vor dem Tod: Eine Minute am Boden, in der dir dein Rudel aufhelfen kann (<a href="#life-downed">Niedergestreckt</a>).</dd>
<dt>Ruhe</dt><dd>Das Bedürfnis nach Schlaf. Mit <kbd>Strg</kbd> ruhst du dich aus (<a href="#needs">Bedürfnisse</a>).</dd>
<dt>Tierkunde</dt><dd>Die Liste der Tierarten, die du schon gewittert hast, im Charaktermenü (<a href="#senses">Sinne</a>).</dd>
<dt>Tollwut</dt><dd>Eine ansteckende Krankheit, die durch Bisse übertragen wird (<a href="#disease">Krankheiten</a>).</dd>
<dt>Überfressen</dt><dd>Wer weiterfrisst, obwohl er satt ist, wird für eine Weile träge (<a href="#needs">Bedürfnisse</a>).</dd>
<dt>Winterfell</dt><dd>Wächst im Herbst und fällt im Frühling aus. Hält in der Kälte warm, an heißen Tagen wird dir schneller zu warm (<a href="#needs">Bedürfnisse</a>).</dd>
<dt>Witterung</dt><dd>Der Geruchssinn vieler Arten (<kbd>V</kbd>): zeigt Beute, Gefahr, Kadaver und Spuren in der Nähe (<a href="#senses">Sinne</a>).</dd>
</dl>`,
            en: `<dl>
<dt>Carrion</dt><dd>A carcass that is no longer fresh: meat a player killed a while ago, or an animal nobody killed (found dead or killed by wild animals). Less filling and can cause carrion fever (<a href="#food">Food</a>).</dd>
<dt>Carrion fever</dt><dd>A disease from eating carrion. Scavenger species are more resistant (<a href="#disease">Diseases</a>).</dd>
<dt>Refreshed</dt><dd>A bonus after a break of at least an hour: better stamina for a while (<a href="#start-logout">Logging out and breaks</a>).</dd>
<dt>Bleeding</dt><dd>After a heavy hit you lose health for a while; resting stops it sooner (<a href="#health">Health</a>).</dd>
<dt>Limping</dt><dd>After a very heavy hit or a fall: no sprinting, slower (<a href="#health">Health</a>).</dd>
<dt>Carcass</dt><dd>A dead animal that carnivores and omnivores can eat from with <kbd>E</kbd> (<a href="#food">Food</a>).</dd>
<dt>Night vision</dt><dd>The sense mode of some species: they see better in the dark (<a href="#senses">Senses</a>).</dd>
<dt>Downed</dt><dd>The state before death: one minute on the ground in which your pack can help you up (<a href="#life-downed">Downed</a>).</dd>
<dt>Rest</dt><dd>The need for sleep. <kbd>Ctrl</kbd> makes you rest (<a href="#needs">Needs</a>).</dd>
<dt>Animal lore</dt><dd>The list of animal kinds you have already scented, in the character menu (<a href="#senses">Senses</a>).</dd>
<dt>Rabies</dt><dd>A contagious disease passed on by bites (<a href="#disease">Diseases</a>).</dd>
<dt>Overfed</dt><dd>Keep eating when you are full and you become sluggish for a while (<a href="#needs">Needs</a>).</dd>
<dt>Winter coat</dt><dd>Grows in autumn and sheds in spring. Keeps you warm in the cold, but on hot days you get too warm sooner (<a href="#needs">Needs</a>).</dd>
<dt>Scent</dt><dd>The sense of smell of many species (<kbd>V</kbd>): shows prey, danger, carcasses and trails nearby (<a href="#senses">Senses</a>).</dd>
</dl>`,
        },
        {
            id: 'help-glossary-pack',
            title: { de: 'Glossar: Rudel, Revier und Familie', en: 'Glossary: pack, territory and family' },
            tags: { de: 'glossar begriffe alpha beta omega rudel revier duftmarke höhle rudelpunkte perks brunft wurf jungtier blutlinie begleiter einzelgänger duell', en: 'glossary terms alpha beta omega pack territory scent mark den pack points perks rut litter juvenile bloodline companion loner duel' },
            de: `<dl>
<dt>Alpha</dt><dd>Der Anführer eines Rudels, der höchste Rang. Er kann zum Duell herausgefordert werden (<a href="#pack">Rudel</a>).</dd>
<dt>Alpha-Duell</dt><dd>Ein nicht tödlicher Zweikampf um die Führung: Gewinnt der Herausforderer, wird er Alpha (<a href="#pack">Rudel</a>).</dd>
<dt>Beta</dt><dd>Der Rang unter dem Alpha. Betas helfen beim Führen und können Rudelpunkte ausgeben (<a href="#pack">Rudel</a>).</dd>
<dt>Begleiter</dt><dd>Ein Tier, das dir folgt, z. B. ein eigenes Jungtier. Du gibst ihm Befehle mit <kbd>H</kbd>, <kbd>I</kbd>, <kbd>C</kbd> und <kbd>Y</kbd> (<a href="#companion">Begleiter</a>).</dd>
<dt>Blutlinie</dt><dd>Die Familie über Generationen. Jungtiere tragen den Namen ihrer Blutlinie und erben von den Eltern (<a href="#family">Familie</a>).</dd>
<dt>Brunft</dt><dd>Die Paarungszeit im Herbst (<a href="#family">Familie</a>).</dd>
<dt>Duftmarke</dt><dd>Mit <kbd>G</kbd> markierst du ein Revier, um es einzunehmen oder zu halten (<a href="#territory">Reviere</a>).</dd>
<dt>Einzelgänger</dt><dd>Ein Tier ohne Rudel. Arten, die von Natur aus allein leben, haben allein Vorteile (<a href="#species">Arten</a>).</dd>
<dt>Höhle</dt><dd>Ein fester Ort in einem Revier. Wer das Revier hält, kann dort starten und sich erholen; Höhlen steigen in Ruhm-Stufen auf (<a href="#territory">Reviere</a>).</dd>
<dt>Inzucht</dt><dd>Nachwuchs von eng verwandten Eltern trägt ein Leben lang Nachteile (<a href="#family">Familie</a>).</dd>
<dt>Jungtier</dt><dd>Ein junges Tier unter 5 Stunden Alter, kleiner und schwächer, aber lernfähig; oder ein Tier aus einem Wurf, das auf eine Übernahme wartet (<a href="#life-phases">Lebensphasen</a>, <a href="#family">Familie</a>).</dd>
<dt>Mitglied</dt><dd>Der normale Rang im Rudel zwischen Omega und Beta (<a href="#pack">Rudel</a>).</dd>
<dt>Omega</dt><dd>Der niedrigste Rang im Rudel, z. B. für Neue (<a href="#pack">Rudel</a>).</dd>
<dt>Perks</dt><dd>Verbesserungen für das Rudel und sein Revier, die mit Rudelpunkten gekauft werden (<a href="#pack">Rudel</a>).</dd>
<dt>Revier</dt><dd>Ein festes Gebiet, das ein Rudel oder ein Einzelgänger durch Anwesenheit und Duftmarken einnimmt. Bringt Vorteile wie Beute und Erholung (<a href="#territory">Reviere</a>).</dd>
<dt>Rudel</dt><dd>Eine Gruppe von Spielern derselben Art mit Rängen, Quests und gemeinsamem Ruhm (<a href="#pack">Rudel</a>).</dd>
<dt>Rudelpunkte</dt><dd>Punkte aus Rudelquests, die Alpha und Betas für Perks ausgeben (<a href="#pack">Rudel</a>).</dd>
<dt>Rudelruf</dt><dd><kbd>B</kbd> halten: Nur dein Rudel im Umkreis von 150 m hört dich (<a href="#voice">Stimme</a>).</dd>
<dt>Wurf</dt><dd>Die Jungtiere aus einer Paarung. Spieler können sie als neue Tiere übernehmen (<a href="#family">Familie</a>).</dd>
</dl>`,
            en: `<dl>
<dt>Alpha</dt><dd>The leader of a pack, the highest rank. It can be challenged to a duel (<a href="#pack">Pack</a>).</dd>
<dt>Alpha duel</dt><dd>A non-lethal fight for the lead: if the challenger wins, they become alpha (<a href="#pack">Pack</a>).</dd>
<dt>Beta</dt><dd>The rank below the alpha. Betas help to lead and can spend pack points (<a href="#pack">Pack</a>).</dd>
<dt>Companion</dt><dd>An animal that follows you, e.g. your own juvenile. You give it orders with <kbd>H</kbd>, <kbd>I</kbd>, <kbd>C</kbd> and <kbd>Y</kbd> (<a href="#companion">Companions</a>).</dd>
<dt>Bloodline</dt><dd>The family across generations. Juveniles carry their bloodline's name and inherit from their parents (<a href="#family">Family</a>).</dd>
<dt>Rut</dt><dd>The mating season in autumn (<a href="#family">Family</a>).</dd>
<dt>Scent mark</dt><dd><kbd>G</kbd> marks a territory to claim or hold it (<a href="#territory">Territories</a>).</dd>
<dt>Loner</dt><dd>An animal without a pack. Species that naturally live alone have advantages when alone (<a href="#species">Species</a>).</dd>
<dt>Den</dt><dd>A fixed place in a territory. Whoever holds the territory can start there and recover; dens rise in fame tiers (<a href="#territory">Territories</a>).</dd>
<dt>Inbreeding</dt><dd>Offspring of closely related parents carry drawbacks for life (<a href="#family">Family</a>).</dd>
<dt>Juvenile</dt><dd>A young animal under 5 hours of age, smaller and weaker but quick to learn; or an animal from a litter waiting to be taken over (<a href="#life-phases">Life phases</a>, <a href="#family">Family</a>).</dd>
<dt>Member</dt><dd>The normal rank in a pack, between omega and beta (<a href="#pack">Pack</a>).</dd>
<dt>Omega</dt><dd>The lowest rank in a pack, e.g. for newcomers (<a href="#pack">Pack</a>).</dd>
<dt>Perks</dt><dd>Upgrades for the pack and its territory, bought with pack points (<a href="#pack">Pack</a>).</dd>
<dt>Territory</dt><dd>A fixed area a pack or a loner claims through presence and scent marks. Brings advantages such as prey and recovery (<a href="#territory">Territories</a>).</dd>
<dt>Pack</dt><dd>A group of players of the same species with ranks, quests and shared fame (<a href="#pack">Pack</a>).</dd>
<dt>Pack points</dt><dd>Points from pack quests that the alpha and betas spend on perks (<a href="#pack">Pack</a>).</dd>
<dt>Pack call</dt><dd>Hold <kbd>B</kbd>: only your pack within 150 m hears you (<a href="#voice">Voice</a>).</dd>
<dt>Litter</dt><dd>The juveniles from a mating. Players can take them over as new animals (<a href="#family">Family</a>).</dd>
</dl>`,
        },
    ],
});
