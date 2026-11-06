window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'health',
    order: 44,
    icon: 'health',
    title: { de: 'Gesundheit', en: 'Health' },
    sections: [
        {
            id: 'health-overview',
            title: { de: 'Gesundheit', en: 'Health' },
            tags: { de: 'leben lebenspunkte schaden ring', en: 'life hit points damage ring' },
            de: `<p>Der Ring <strong>Gesundheit</strong> zeigt deine Lebenspunkte. Wie viele du höchstens hast, hängt ab von:</p>
<ul>
<li>deiner <strong>Art</strong> – vom Streifenhörnchen (35) bis zum Grizzly (600), siehe <a href="#species-combat">Kampfwerte</a>,</li>
<li>deinem <strong>Alter</strong> – Jungtiere haben anfangs deutlich weniger, alte Tiere etwas weniger (<a href="#life">Lebenslauf</a>),</li>
<li>Attributen und Fähigkeiten wie <strong>Konstitution</strong> (<a href="#progress">Fortschritt</a>).</li>
</ul>
<p>Schaden bekommst du durch Angriffe anderer Spieler und wilder Tiere, Stürze, <a href="#health-bleeding">Blutungen</a>, <a href="#health-damage">Hunger, Durst, Kälte und Hitze</a>. Fällt deine Gesundheit auf null, stirbst du nicht sofort – du wirst <a href="#health-downed">niedergestreckt</a>.</p>
<p>Im HUD siehst du außerdem deinen <strong>Status</strong>: Blutung, Humpeln, Aasfieber, Tollwut, Geschützt oder Niedergestreckt.</p>
<div class="hb-warn">Der Tod in Life in Wilderness ist endgültig. Was dann passiert, steht unter <a href="#life">Lebenslauf</a>.</div>`,
            en: `<p>The <strong>Health</strong> ring shows your hit points. How many you have at most depends on:</p>
<ul>
<li>your <strong>species</strong> – from the chipmunk (35) up to the grizzly (600), see <a href="#species-combat">Combat values</a>,</li>
<li>your <strong>age</strong> – juveniles start with clearly less, old animals have a bit less (<a href="#life">Life cycle</a>),</li>
<li>attributes and skills such as <strong>Constitution</strong> (<a href="#progress">Progress</a>).</li>
</ul>
<p>You take damage from attacks of other players and wild animals, falls, <a href="#health-bleeding">bleeding</a>, <a href="#health-damage">hunger, thirst, cold and heat</a>. When your health drops to zero you do not die at once – you are <a href="#health-downed">downed</a>.</p>
<p>The HUD also shows your <strong>status</strong>: Bleeding, Limping, Carrion fever, Rabies, Protected or Downed.</p>
<div class="hb-warn">Death in Life in Wilderness is final. What happens then is described under <a href="#life">Life cycle</a>.</div>`,
        },
        {
            id: 'health-regeneration',
            title: { de: 'Regeneration', en: 'Regeneration' },
            tags: { de: 'heilen heilung erholen wunden', en: 'heal healing recover wounds' },
            de: `<p>Dein Tier heilt von selbst – aber nur, wenn:</p>
<ul>
<li><strong>Hunger und Durst beide über 50</strong> liegen und</li>
<li>du <strong>nicht blutest</strong>.</li>
</ul>
<p>Dann bekommst du derzeit etwa 6 % deiner maximalen Gesundheit pro Minute zurück (von leer auf voll gut eine Viertelstunde). <strong>Liegend</strong> (<kbd>Strg</kbd>) heilst du dreimal so schnell.</p>
<p>Schneller heilen außerdem Jungtiere, dein eigenes Revier (<a href="#territory">Reviere</a>) und Fähigkeiten mit „Regeneration“ (<a href="#progress">Fortschritt</a>). Langsamer heilst du im Alter und mit einer Krankheit (<a href="#disease">Krankheiten</a>).</p>
<p>Auch offline heilt dein Tier – siehe <a href="#needs-offline">Zeit offline</a>.</p>
<div class="hb-tip">Nach einem Kampf: erst fressen und trinken, bis beide Ringe über der Hälfte sind, dann hinlegen. So bist du am schnellsten wieder fit.</div>`,
            en: `<p>Your animal heals on its own – but only when:</p>
<ul>
<li><strong>hunger and thirst are both above 50</strong> and</li>
<li>you are <strong>not bleeding</strong>.</li>
</ul>
<p>Then you currently get back about 6 % of your max health per minute (from empty to full a little over a quarter of an hour). <strong>Lying down</strong> (<kbd>Ctrl</kbd>) you heal three times as fast.</p>
<p>Juveniles, your own territory (<a href="#territory">Territories</a>) and skills with "Regeneration" (<a href="#progress">Progress</a>) heal faster too. Old age and diseases slow it down (<a href="#disease">Diseases</a>).</p>
<p>Your animal heals offline as well – see <a href="#needs-offline">Time offline</a>.</p>
<div class="hb-tip">After a fight: first eat and drink until both rings are above half, then lie down. That gets you back on your feet fastest.</div>`,
        },
        {
            id: 'health-bleeding',
            title: { de: 'Blutung', en: 'Bleeding' },
            tags: { de: 'bluten blut wunde blutspur', en: 'bleed blood wound blood trail' },
            de: `<p>Ein einzelner heftiger Treffer (derzeit ab etwa 15 % deiner maximalen Gesundheit, Stürze ausgenommen) lässt dich <strong>bluten</strong>: „Du blutest! Ruh dich aus, damit sich die Wunden schließen.“</p>
<ul>
<li>Du verlierst derzeit alle 2 Sekunden 1 % deiner maximalen Gesundheit, eine Minute lang.</li>
<li>Jeder neue schwere Treffer startet die Minute neu (mehrere Blutungen addieren sich nicht).</li>
<li>Solange du blutest, heilst du nicht.</li>
<li><strong>Ruhen</strong> (<kbd>Strg</kbd>) lässt die Blutung dreimal so schnell aufhören.</li>
<li>Du hinterlässt eine <strong>Blutspur</strong> – und Jäger mit feinen Sinnen sehen dich im Sinnesmodus als „Blut“ markiert (<a href="#senses-markers">Markierungen</a>).</li>
</ul>
<p>Fähigkeiten wie „Dicke Haut“ und die Abwehrfähigkeiten mancher Arten senken den Blutverlust (<a href="#progress">Fortschritt</a>).</p>
<div class="hb-tip">Nach einem schweren Biss: weg aus dem Kampf, hinlegen. Eine volle Minute Bluten kostet fast ein Drittel deiner Gesundheit, liegend nur etwa ein Zehntel.</div>`,
            en: `<p>A single heavy hit (currently from about 15 % of your max health, falls excluded) makes you <strong>bleed</strong>: "You are bleeding! Rest to close your wounds."</p>
<ul>
<li>You currently lose 1 % of your max health every 2 seconds, for one minute.</li>
<li>Every new heavy hit restarts the minute (several bleedings do not add up).</li>
<li>While you bleed you do not heal.</li>
<li><strong>Resting</strong> (<kbd>Ctrl</kbd>) makes the bleeding stop three times as fast.</li>
<li>You leave a <strong>blood trail</strong> – and hunters with keen senses see you marked as "Blood" in their sense mode (<a href="#senses-markers">Markers</a>).</li>
</ul>
<p>Skills such as "Thick Hide" and the defensive abilities of some species reduce blood loss (<a href="#progress">Progress</a>).</p>
<div class="hb-tip">After a heavy bite: get out of the fight and lie down. A full minute of bleeding costs almost a third of your health, lying down only about a tenth.</div>`,
        },
        {
            id: 'health-limping',
            title: { de: 'Humpeln', en: 'Limping' },
            tags: { de: 'humpeln verletzt bein sturz fallen', en: 'limp hurt leg fall' },
            de: `<p>Ein sehr schwerer Treffer oder ein böser <strong>Sturz</strong> (derzeit ab etwa 25 % deiner maximalen Gesundheit auf einmal) lässt dich <strong>humpeln</strong>: „Du bist verletzt und humpelst.“</p>
<ul>
<li>Etwa 45 Sekunden lang kannst du nur gehen – kein Rennen, kein Sprinten – und bist langsamer.</li>
<li>Ein neuer schwerer Treffer startet die Zeit neu.</li>
<li>Wer dir nach dem <a href="#health-downed">Niedergestreckt-Sein</a> wieder aufgeholfen wird, humpelt ebenfalls erst einmal.</li>
</ul>
<div class="hb-warn">Achte auf Klippen: Ein tiefer Sturz kann dich nicht nur humpeln lassen, sondern auch niederstrecken.</div>`,
            en: `<p>A very heavy hit or a bad <strong>fall</strong> (currently from about 25 % of your max health at once) makes you <strong>limp</strong>: "You are hurt and limping."</p>
<ul>
<li>For about 45 seconds you can only walk – no running, no sprinting – and you are slower.</li>
<li>A new heavy hit restarts the time.</li>
<li>When you are helped up after being <a href="#health-downed">downed</a>, you limp at first as well.</li>
</ul>
<div class="hb-warn">Mind the cliffs: a deep fall can not only make you limp but also bring you down.</div>`,
        },
        {
            id: 'health-damage',
            title: { de: 'Schaden durch Bedürfnisse', en: 'Damage from needs' },
            tags: { de: 'verhungern verdursten erfrieren überhitzen schaden', en: 'starving dehydrated freezing overheating damage' },
            de: `<p>Auch ohne Feind kann dein Tier sterben. Etwa alle 10 Sekunden verlierst du derzeit:</p>
<table class="hb-table">
<thead><tr><th>Ursache</th><th>Schaden</th><th>Von voll bis niedergestreckt</th></tr></thead>
<tbody>
<tr><td>Hunger bei 0 (Verhungern)</td><td>1,5 % der max. Gesundheit</td><td>etwa 11 Minuten</td></tr>
<tr><td>Durst bei 0 (Verdursten)</td><td>2 %</td><td>etwa 8 Minuten</td></tr>
<tr><td>Erfrieren</td><td>1 %</td><td>etwa 17 Minuten</td></tr>
<tr><td>Überhitzen</td><td>1 %</td><td>etwa 17 Minuten</td></tr>
</tbody>
</table>
<p>Mehreres gleichzeitig addiert sich. Und weil du bei Hunger oder Durst unter 50 nicht mehr heilst, holst du nichts davon zurück, bevor du gefressen und getrunken hast.</p>
<p>Müdigkeit schadet nicht direkt – erschöpft kannst du nur nicht mehr sprinten (<a href="#needs-rest">Ruhe</a>).</p>
<div class="hb-warn">Ein Tier, das am Verhungern oder Erfrieren zusammenbricht, stirbt nach Ablauf der Zeit endgültig, wenn ihm niemand aufhilft.</div>`,
            en: `<p>Your animal can die even without an enemy. About every 10 seconds you currently lose:</p>
<table class="hb-table">
<thead><tr><th>Cause</th><th>Damage</th><th>From full to downed</th></tr></thead>
<tbody>
<tr><td>Hunger at 0 (starving)</td><td>1.5 % of max health</td><td>about 11 minutes</td></tr>
<tr><td>Thirst at 0 (dehydrated)</td><td>2 %</td><td>about 8 minutes</td></tr>
<tr><td>Freezing</td><td>1 %</td><td>about 17 minutes</td></tr>
<tr><td>Overheating</td><td>1 %</td><td>about 17 minutes</td></tr>
</tbody>
</table>
<p>Several at once add up. And since you do not heal with hunger or thirst below 50, you get none of it back before you have eaten and drunk.</p>
<p>Tiredness does no direct damage – exhausted you just cannot sprint (<a href="#needs-rest">Rest</a>).</p>
<div class="hb-warn">An animal that collapses from starving or freezing dies for good when the time runs out and nobody helps it up.</div>`,
        },
        {
            id: 'health-downed',
            title: { de: 'Niedergestreckt', en: 'Downed' },
            tags: { de: 'niedergestreckt zusammenbrechen sterben tod countdown', en: 'downed collapse dying death countdown' },
            de: `<p>Fällt deine Gesundheit auf null, <strong>brichst du zusammen</strong>: „Du brichst zusammen. Ein Artgenosse könnte dir noch aufhelfen …“</p>
<ul>
<li>Unten läuft ein Countdown „Niedergestreckt – noch … s“: derzeit <strong>60 Sekunden</strong>.</li>
<li>Du liegst mit sehr wenig Gesundheit am Boden und kannst nichts tun außer dich umsehen und sprechen (Push-to-Talk).</li>
<li>Hilft dir in der Zeit jemand auf (<a href="#health-help-up">Aufhelfen</a>), lebst du weiter.</li>
<li>Läuft die Zeit ab, stirbt dein Tier <strong>endgültig</strong>.</li>
<li>Wirst du im Liegen noch einmal verletzt, ist es sofort vorbei.</li>
</ul>
<div class="hb-warn">Wer niedergestreckt das Spiel verlässt, stirbt. Mehr zum Tod unter <a href="#life">Lebenslauf</a>.</div>
<p><strong>Ausnahme Alpha-Duell:</strong> Im Duell um die Führung eines Rudels stirbt niemand – der Verlierer geht mit etwa 10 % Gesundheit k. o. (<a href="#pack">Rudel</a>).</p>
<div class="hb-tip">Sag deinem Rudel per Sprache Bescheid, wo du liegst – sprechen geht auch niedergestreckt. Mit dem <a href="#voice-pack-call">Rudelruf</a> (<kbd>B</kbd> halten) erreichst du dein Rudel bis 150 m weit.</div>`,
            en: `<p>When your health drops to zero you <strong>collapse</strong>: "You collapse. Someone of your kind could still help you up..."</p>
<ul>
<li>A countdown "Downed - … s left" runs at the bottom: currently <strong>60 seconds</strong>.</li>
<li>You lie on the ground with very little health and can do nothing but look around and talk (push-to-talk).</li>
<li>If someone helps you up in time (<a href="#health-help-up">Helping up</a>), you live on.</li>
<li>When the time runs out, your animal dies <strong>for good</strong>.</li>
<li>If you are hurt again while lying there, it is over at once.</li>
</ul>
<div class="hb-warn">Leaving the game while downed means death. More about death under <a href="#life">Life cycle</a>.</div>
<p><strong>Exception, alpha duel:</strong> nobody dies in a duel for the lead of a pack – the loser is knocked out with about 10 % health (<a href="#pack">Packs</a>).</p>
<div class="hb-tip">Tell your pack by voice where you are lying – talking works while downed too. With the <a href="#voice-pack-call">pack call</a> (hold <kbd>B</kbd>) you reach your pack up to 150 m away.</div>`,
        },
        {
            id: 'health-help-up',
            title: { de: 'Aufhelfen', en: 'Helping up' },
            tags: { de: 'aufhelfen wiederbeleben retten e halten rudel', en: 'help up revive rescue hold e pack' },
            de: `<p>Ein niedergestrecktes Tier kann von einem <strong>Mitglied seines Rudels</strong> wieder auf die Beine gebracht werden.</p>
<ol>
<li>Geh ganz nah an das liegende Tier (etwa 2,5 m).</li>
<li>Es erscheint „Hilfe-Taste halten zum Helfen“.</li>
<li>Halte <kbd>E</kbd> etwa <strong>5 Sekunden</strong> lang („Hilfe …“) und bleib dabei in der Nähe.</li>
</ol>
<p>Das Tier steht mit derzeit etwa 20 % Gesundheit wieder auf („Dir wurde wieder auf die Beine geholfen.“) und <a href="#health-limping">humpelt</a> eine Weile.</p>
<ul>
<li>Fremden Tieren und Tieren anderer Rudel kannst du nicht aufhelfen.</li>
<li>Wer selbst niedergestreckt ist, kann nicht helfen.</li>
</ul>
<div class="hb-tip">Bleibt zusammen! Einzelgänger ohne Rudel haben niemanden, der ihnen aufhilft. Wer ein Rudel gründen oder einem beitreten will: <a href="#pack">Rudel</a>.</div>`,
            en: `<p>A downed animal can be brought back on its feet by a <strong>member of its pack</strong>.</p>
<ol>
<li>Go right up to the animal on the ground (about 2.5 m).</li>
<li>"Hold the help key to help" appears.</li>
<li>Hold <kbd>E</kbd> for about <strong>5 seconds</strong> ("Helping...") and stay close.</li>
</ol>
<p>The animal gets up with currently about 20 % health ("You were helped back on your feet.") and <a href="#health-limping">limps</a> for a while.</p>
<ul>
<li>You cannot help up strangers or animals of other packs.</li>
<li>If you are downed yourself, you cannot help.</li>
</ul>
<div class="hb-tip">Stay together! Loners without a pack have nobody to help them up. To found or join a pack, see <a href="#pack">Packs</a>.</div>`,
        },
        {
            id: 'health-give-up',
            title: { de: 'Aufgeben', en: 'Giving up' },
            tags: { de: 'aufgeben sterben liw_giveup konsole', en: 'give up die liw_giveup console' },
            de: `<p>Wenn klar ist, dass dir niemand mehr helfen kann, musst du die 60 Sekunden nicht abwarten. Öffne die Konsole mit <kbd>F8</kbd> und gib <kbd>liw_giveup</kbd> ein – dein Tier stirbt sofort.</p>
<p>Das geht nur, solange du niedergestreckt bist. Eine feste Taste dafür gibt es nicht, damit niemand aus Versehen aufgibt.</p>
<div class="hb-warn">Aufgeben ist endgültig, genau wie jeder andere Tod.</div>`,
            en: `<p>When it is clear that nobody can help you any more, you do not have to wait out the 60 seconds. Open the console with <kbd>F8</kbd> and type <kbd>liw_giveup</kbd> – your animal dies at once.</p>
<p>This only works while you are downed. There is no fixed key for it, so nobody gives up by accident.</p>
<div class="hb-warn">Giving up is final, just like any other death.</div>`,
        },
        {
            id: 'health-disconnect',
            title: { de: 'Verbindung verloren im Kampf', en: 'Disconnecting in a fight' },
            tags: { de: 'disconnect absturz verbindung combat log flucht', en: 'disconnect crash connection combat log escape' },
            de: `<p>Damit sich niemand durch Ausloggen aus einem Kampf rettet, gilt:</p>
<ul>
<li>Verlässt du das Spiel (oder verlierst die Verbindung), bleibt dein Tier noch etwa <strong>30 Sekunden</strong> in der Welt stehen. Wird es in der Zeit getötet, ist dein Charakter tot.</li>
<li>Solange es noch steht, kannst du dieses Tier nicht wieder auswählen.</li>
<li>Niedergestreckt das Spiel verlassen bedeutet immer den Tod.</li>
</ul>
<p>Wie du sicher ausloggst und wann das gesperrt ist, steht unter <a href="#start">Erste Schritte</a>.</p>`,
            en: `<p>So that nobody escapes a fight by logging out:</p>
<ul>
<li>If you leave the game (or lose the connection), your animal stays in the world for about <strong>30 seconds</strong>. If it is killed in that time, your character is dead.</li>
<li>While it is still standing there, you cannot pick this animal again.</li>
<li>Leaving the game while downed always means death.</li>
</ul>
<p>How to log out safely and when it is blocked is explained under <a href="#start">First steps</a>.</p>`,
        },
    ],
});
