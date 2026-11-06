window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'life',
    order: 30,
    icon: 'life',
    title: { de: 'Lebenslauf', en: 'Life cycle' },
    sections: [
        {
            id: 'life-overview',
            title: { de: 'Ein Leben in der Wildnis', en: 'A life in the wild' },
            tags: { de: 'leben alter permadeath einmal lebensphasen', en: 'life age permadeath once life phases' },
            de: `<p>Jedes Tier lebt <b>nur einmal</b>. Es wächst als Jungtier heran, wird erwachsen und irgendwann alt. Stirbt es, ist es endgültig fort (Permadeath). Was bleibt, sind sein Name bei den Gefallenen, seine Nachkommen und vielleicht ein Gedenkstein.</p>
<p>Das <b>Alter</b> eines Tieres ist die Zeit, die du es in der Wildnis gespielt hast. Zeit im Auswahlbildschirm, offline oder mit einem anderen Tier zählt nicht.</p>
<ul>
<li><a href="#life-phases">Lebensphasen</a>: was sich mit dem Alter ändert</li>
<li><a href="#life-age">Wie lange lebt ein Tier?</a></li>
<li><a href="#life-death">Was beim Tod passiert</a></li>
<li><a href="#life-memorials">Gedenksteine</a></li>
</ul>`,
            en: `<p>Every animal lives <b>only once</b>. It grows up as a juvenile, becomes an adult and one day grows old. When it dies, it is gone for good (permadeath). What remains is its name among the fallen, its offspring and perhaps a memorial stone.</p>
<p>An animal's <b>age</b> is the time you have played it in the wild. Time on the selection screen, offline or with another animal does not count.</p>
<ul>
<li><a href="#life-phases">Life phases</a>: what changes with age</li>
<li><a href="#life-age">How long does an animal live?</a></li>
<li><a href="#life-death">What happens on death</a></li>
<li><a href="#life-memorials">Memorial stones</a></li>
</ul>`,
        },
        {
            id: 'life-phases',
            title: { de: 'Lebensphasen', en: 'Life phases' },
            tags: { de: 'jungtier erwachsen alt altern wachsen größe phase jung', en: 'juvenile adult old aging grow size phase young' },
            de: `<table class="hb-table">
<thead><tr><th>Phase</th><th>Alter (derzeit)</th><th>Was das bedeutet</th></tr></thead>
<tbody>
<tr><td><b>Jungtier</b></td><td>unter 5 Stunden</td><td>Du startest mit 60 % der Größe und wächst bis zum Erwachsensein auf volle Größe. Am Anfang machst du 40 % weniger Schaden und hast 40 % weniger Gesundheit, dafür heilst du 50 % schneller, bekommst 50 % mehr Erfahrung und wirst von wilden Tieren später bemerkt. Diese Unterschiede werden mit jeder Stunde kleiner.</td></tr>
<tr><td><b>Erwachsen</b></td><td>5 bis 70 Stunden</td><td>Volle Größe und volle Kraft.</td></tr>
<tr><td><b>Alt</b></td><td>ab 70 Stunden</td><td>Die Kräfte lassen langsam nach. Über die nächsten 30 Stunden steigt das auf: etwa 5 % weniger Tempo, 20 % langsamere Ausdauer-Erholung, 10 % weniger Gesundheit und 20 % langsamere Heilung.</td></tr>
</tbody>
</table>
<p>Wechselt dein Tier die Phase, bekommst du eine Meldung. Phase, Alter und alle Auswirkungen siehst du im Charaktermenü (<kbd>J</kbd>) in der Übersicht unter „Boni und Mali“.</p>
<div class="hb-tip"><p>Als Jungtier lernst du schnell: Die zusätzliche Erfahrung ist ideal, um die ersten Stufen zu sammeln. Bleib aber in der Nähe deines Rudels, denn du hältst noch wenig aus.</p></div>`,
            en: `<table class="hb-table">
<thead><tr><th>Phase</th><th>Age (currently)</th><th>What it means</th></tr></thead>
<tbody>
<tr><td><b>Juvenile</b></td><td>under 5 hours</td><td>You start at 60 % size and grow to full size by adulthood. At first you deal 40 % less damage and have 40 % less health, but you heal 50 % faster, gain 50 % more experience and wild animals notice you later. These differences shrink with every hour.</td></tr>
<tr><td><b>Adult</b></td><td>5 to 70 hours</td><td>Full size and full strength.</td></tr>
<tr><td><b>Old</b></td><td>from 70 hours</td><td>Strength slowly fades. Over the next 30 hours it builds up to: about 5 % less speed, 20 % slower stamina recovery, 10 % less health and 20 % slower healing.</td></tr>
</tbody>
</table>
<p>When your animal changes phase, you get a message. Phase, age and all effects are shown in the character menu (<kbd>J</kbd>) in the overview under “Bonuses and penalties”.</p>
<div class="hb-tip"><p>As a juvenile you learn fast: the extra experience is ideal for gaining your first levels. Stay close to your pack, though, because you cannot take much yet.</p></div>`,
        },
        {
            id: 'life-age',
            title: { de: 'Wie lange lebt ein Tier?', en: 'How long does an animal live?' },
            tags: { de: 'lebensdauer lebenszeit altersschwäche alterstod stunden echtzeit spielzeit wie alt', en: 'lifespan life time old age death of old age hours real time play time how old' },
            de: `<p>Das Alter wird in <b>echten Stunden gezählt, die du das Tier spielst</b>. Eine Stunde Spielen ist eine Stunde Alter, egal wie spät es in der Spielwelt ist. Im Auswahlbildschirm steht es als „Std. gelebt“, im Charaktermenü als „Std. in der Wildnis“.</p>
<p><b>An Altersschwäche stirbt derzeit kein Tier.</b> Alte Tiere werden nur langsam schwächer (siehe <a href="#life-phases">Lebensphasen</a>). Wie lange dein Tier lebt, hängt also davon ab, wie gut du es durch Hunger, Kälte, Kämpfe und Krankheiten bringst.</p>
<p>Daneben hat jedes Tier ein <b>Geburtsdatum</b> im echten Kalender: der Tag des Wurfs bei Tieren aus einem Wurf, sonst der Tag, an dem du es erschaffen hast.</p>`,
            en: `<p>Age is counted in <b>real hours that you play the animal</b>. One hour of play is one hour of age, no matter what time it is in the game world. The selection screen shows it as “h lived”, the character menu as “h in the wild”.</p>
<p><b>Currently no animal dies of old age.</b> Old animals only grow slowly weaker (see <a href="#life-phases">Life phases</a>). How long your animal lives therefore depends on how well you get it through hunger, cold, fights and diseases.</p>
<p>Besides that every animal has a <b>birthday</b> in the real calendar: the day of the litter for animals from a litter, otherwise the day you created it.</p>`,
        },
        {
            id: 'life-causes',
            title: { de: 'Todesursachen', en: 'Causes of death' },
            tags: { de: 'tod sterben gestorben ursache verhungert verdurstet erfroren verblutet sturz getötet', en: 'death die died cause starved thirst froze bled out fall killed' },
            de: `<p>Bei den Gefallenen steht, woran ein Tier gestorben ist:</p>
<table class="hb-table">
<thead><tr><th>Ursache</th><th>Wie es dazu kommt</th><th>Mehr dazu</th></tr></thead>
<tbody>
<tr><td>von einem anderen Tier getötet</td><td>im Kampf gegen einen Spieler</td><td><a href="#combat">Kampf</a></td></tr>
<tr><td>von einem wilden Tier getötet</td><td>im Kampf gegen ein Wildtier</td><td><a href="#combat">Kampf</a></td></tr>
<tr><td>verhungert / verdurstet</td><td>Hunger oder Durst stehen auf null und kosten Gesundheit</td><td><a href="#needs">Bedürfnisse</a></td></tr>
<tr><td>erfroren / an Hitze gestorben</td><td>zu lange zu kalt oder zu heiß</td><td><a href="#needs">Bedürfnisse</a></td></tr>
<tr><td>verblutet</td><td>eine Blutung hat die letzten Lebenspunkte gekostet</td><td><a href="#health">Gesundheit</a></td></tr>
<tr><td>zu Tode gestürzt</td><td>ein Sturz aus großer Höhe</td><td><a href="#health">Gesundheit</a></td></tr>
<tr><td>seinen Verletzungen erlegen</td><td>andere Verletzungen</td><td><a href="#health">Gesundheit</a></td></tr>
<tr><td>in Abwesenheit getötet</td><td>in den 30 Sekunden nach einem Verbindungsabbruch getötet</td><td><a href="#start-logout">Ausloggen</a></td></tr>
<tr><td>niedergestreckt zurückgelassen</td><td>die Verbindung getrennt, während das Tier niedergestreckt war</td><td><a href="#start-logout">Ausloggen</a></td></tr>
</tbody>
</table>`,
            en: `<p>The fallen list shows what an animal died of:</p>
<table class="hb-table">
<thead><tr><th>Cause</th><th>How it happens</th><th>More</th></tr></thead>
<tbody>
<tr><td>killed by another animal</td><td>in a fight against a player</td><td><a href="#combat">Combat</a></td></tr>
<tr><td>killed by a wild animal</td><td>in a fight against a wild animal</td><td><a href="#combat">Combat</a></td></tr>
<tr><td>starved / died of thirst</td><td>hunger or thirst are at zero and cost health</td><td><a href="#needs">Needs</a></td></tr>
<tr><td>froze to death / died of heat</td><td>too cold or too hot for too long</td><td><a href="#needs">Needs</a></td></tr>
<tr><td>bled out</td><td>bleeding took the last health</td><td><a href="#health">Health</a></td></tr>
<tr><td>fell to its death</td><td>a fall from a great height</td><td><a href="#health">Health</a></td></tr>
<tr><td>succumbed to its injuries</td><td>other injuries</td><td><a href="#health">Health</a></td></tr>
<tr><td>killed while away</td><td>killed in the 30 seconds after losing the connection</td><td><a href="#start-logout">Logging out</a></td></tr>
<tr><td>abandoned while downed</td><td>disconnected while the animal was downed</td><td><a href="#start-logout">Logging out</a></td></tr>
</tbody>
</table>`,
        },
        {
            id: 'life-downed',
            title: { de: 'Niedergestreckt: die letzte Minute', en: 'Downed: the last minute' },
            tags: { de: 'niedergestreckt am boden aufhelfen wiederbeleben retten countdown down', en: 'downed on the ground help up revive rescue countdown' },
            de: `<p>Ein Tier stirbt nicht sofort. Fällt seine Gesundheit auf null, bricht es zusammen und liegt <b>eine Minute</b> lang niedergestreckt am Boden. Ein Countdown zeigt die verbleibende Zeit.</p>
<ul>
<li>In dieser Zeit kann dir ein <b>Rudelmitglied</b> aufhelfen: ganz nah herangehen und <kbd>E</kbd> etwa 5 Sekunden halten. Du stehst dann mit einem Teil deiner Gesundheit wieder auf.</li>
<li>Hilft dir niemand oder bekommst du noch einen Treffer ab, stirbt dein Tier endgültig.</li>
<li>Niedergestreckt kannst du dich nicht ausloggen und nicht das Tier wechseln. Trennst du die Verbindung, stirbt dein Tier.</li>
</ul>
<p>Die genauen Regeln stehen im Kapitel <a href="#health">Gesundheit</a>.</p>`,
            en: `<p>An animal does not die at once. When its health drops to zero, it collapses and lies downed on the ground for <b>one minute</b>. A countdown shows the time left.</p>
<ul>
<li>During that time a <b>pack mate</b> can help you up: come right up close and hold <kbd>E</kbd> for about 5 seconds. You get up again with part of your health.</li>
<li>If nobody helps you or you take another hit, your animal dies for good.</li>
<li>While downed you cannot log out or switch animals. If you disconnect, your animal dies.</li>
</ul>
<p>The exact rules are in the <a href="#health">Health</a> chapter.</p>`,
        },
        {
            id: 'life-death',
            title: { de: 'Was beim Tod passiert', en: 'What happens on death' },
            tags: { de: 'tod gestorben permadeath gefallene platz slot frei kadaver rudel revier begleiter verloren', en: 'death died permadeath fallen slot free carcass pack territory companions lost' },
            de: `<ol>
<li>Das Bild wird schwarz: <b>„Dein Tier ist gestorben“</b>.</li>
<li>Du landest im <a href="#start-selection">Auswahlbildschirm</a>. Dein Tier steht jetzt bei den <b>Gefallenen</b>, mit Todesursache und Datum.</li>
<li>Sein <b>Platz wird frei</b> für ein neues Tier.</li>
</ol>
<p><b>Was mit dem Tod verloren geht:</b></p>
<ul>
<li>Das Tier selbst mit Stufe, Attributen und Fähigkeiten. Es kommt nicht zurück.</li>
<li>Sein Platz im <b>Rudel</b>. Das Rudel behält sein Revier; war dein Tier das letzte Mitglied, endet das Rudel. Bei Bedarf rückt ein Nachfolger als Anführer nach.</li>
<li>Ein <b>Revier</b>, das du als Einzelgänger gehalten hast, wird frei.</li>
<li>Deine <b>Begleiter</b> gehen ihrer eigenen Wege.</li>
<li><b>Krankheiten</b> sterben mit dem Tier.</li>
</ul>
<p>In der Welt bleibt ein <b>Kadaver</b> deiner Art zurück, an dem andere Tiere fressen können.</p>
<p><b>Was bleibt:</b> der Eintrag im Stammbaum und deine Nachkommen (siehe <a href="#family">Familie</a>), freigeschaltete Belohnungs- und Event-Felle deines Accounts und die Erinnerung bei den Gefallenen.</p>`,
            en: `<ol>
<li>The screen goes black: <b>“Your animal has died”</b>.</li>
<li>You land on the <a href="#start-selection">selection screen</a>. Your animal is now among <b>the Fallen</b>, with cause and date of death.</li>
<li>Its <b>slot is free</b> for a new animal.</li>
</ol>
<p><b>What is lost with death:</b></p>
<ul>
<li>The animal itself with its level, attributes and skills. It does not come back.</li>
<li>Its place in the <b>pack</b>. The pack keeps its territory; if your animal was the last member, the pack ends. If needed, a successor moves up as leader.</li>
<li>A <b>territory</b> you held as a loner becomes free.</li>
<li>Your <b>companions</b> go their own way.</li>
<li><b>Diseases</b> die with the animal.</li>
</ul>
<p>A <b>carcass</b> of your species stays behind in the world, and other animals can feed on it.</p>
<p><b>What remains:</b> the entry in the family tree and your offspring (see <a href="#family">Family</a>), the reward and event furs unlocked on your account, and the memory among the fallen.</p>`,
        },
        {
            id: 'life-after',
            title: { de: 'Wie geht es weiter?', en: 'What next?' },
            tags: { de: 'nach dem tod neues tier jungtier übernehmen neu anfangen weiter', en: 'after death new animal take over juvenile start again continue' },
            de: `<p>Nach dem Tod hast du zwei Wege zurück in die Wildnis:</p>
<ul>
<li><b>Ein neues Tier erschaffen</b> im frei gewordenen Platz (siehe <a href="#start-create">Ein Tier erschaffen</a>).</li>
<li><b>Ein Jungtier übernehmen:</b> Warten Jungtiere aus einem Wurf, kannst du eines davon als neues Leben beginnen, vielleicht sogar aus deiner eigenen Blutlinie. Es gehört zur Familie seiner Eltern und erbt von ihnen (siehe <a href="#family">Familie</a>).</li>
</ul>
<div class="hb-warn"><p>Ist dein Tier durch einen <b>Fehler</b> gestorben (z. B. durch die Karte gefallen), öffne auf dem Discord ein Ticket mit Uhrzeit, Name des Tieres und einer kurzen Beschreibung (siehe <a href="#help-support">Hilfe bekommen</a>).</p></div>`,
            en: `<p>After a death you have two ways back into the wild:</p>
<ul>
<li><b>Create a new animal</b> in the freed slot (see <a href="#start-create">Creating an animal</a>).</li>
<li><b>Take over a juvenile:</b> if juveniles from a litter are waiting, you can begin a new life as one of them, perhaps even from your own bloodline. It belongs to its parents' family and inherits from them (see <a href="#family">Family</a>).</li>
</ul>
<div class="hb-warn"><p>If your animal died because of a <b>bug</b> (e.g. it fell through the map), open a ticket on the Discord with the time, the animal's name and a short description (see <a href="#help-support">Getting help</a>).</p></div>`,
        },
        {
            id: 'life-memorials',
            title: { de: 'Gedenksteine', en: 'Memorial stones' },
            tags: { de: 'gedenkstein grabstein grab denkmal erinnerung inschrift lesen gefallene ehre', en: 'memorial stone gravestone grave monument memory inscription read fallen honour' },
            de: `<p>In der Welt stehen <b>Gedenksteine</b>: Grabsteine für gefallene Tiere und Denkmäler zu Ehren besonderer Rudel. Das Team stellt sie auf.</p>
<ul>
<li>Geh nah an einen Stein heran. Unten erscheint „Gedenkstein: Name“.</li>
<li>Drück <kbd>E</kbd>, um die Inschrift zu lesen. <kbd>Esc</kbd>, das ✕ oder Weggehen schließt sie.</li>
</ul>
<p><b>Ein Stein für ein Tier</b> erzählt: Name, Art, Geschlecht, Stufe, wie lange es gelebt hat und in welcher Lebensphase es war, Geburt und Tod, die Todesursache, seine Blutlinie mit Generation, seinen Titel und sein Rudel mit Rang. Dazu kann eine eigene Inschrift kommen.</p>
<p><b>Ein Stein für ein Rudel</b> nennt Name, Art und Ruhm des Rudels und seine Mitglieder mit ihren Rängen.</p>
<p>Ein Stein hält fest, wie es zum Zeitpunkt des Aufstellens war. Er bleibt so, auch wenn sich ein Rudel später auflöst.</p>`,
            en: `<p>There are <b>memorial stones</b> in the world: gravestones for fallen animals and monuments honouring special packs. The team puts them up.</p>
<ul>
<li>Walk up close to a stone. “Memorial stone: name” appears at the bottom.</li>
<li>Press <kbd>E</kbd> to read the inscription. <kbd>Esc</kbd>, the ✕ or walking away closes it.</li>
</ul>
<p><b>A stone for an animal</b> tells: name, species, sex, level, how long it lived and in which life phase it was, birth and death, the cause of death, its bloodline with generation, its title and its pack with rank. An inscription of its own can be added.</p>
<p><b>A stone for a pack</b> names the pack's name, species and fame and its members with their ranks.</p>
<p>A stone keeps things as they were when it was put up. It stays that way even if a pack disbands later.</p>`,
        },
        {
            id: 'life-legacy',
            title: { de: 'Erbe und Blutlinie', en: 'Legacy and bloodline' },
            tags: { de: 'erbe vererbung blutlinie nachkommen stammbaum generation ahnen', en: 'legacy inheritance bloodline offspring family tree generation ancestors' },
            de: `<p>Ein einzelnes Leben endet, eine Familie nicht. Zwei Tiere derselben Art können Nachwuchs bekommen. Wer ein Jungtier übernimmt, setzt die <b>Blutlinie</b> fort: Das Jungtier trägt den Namen der Blutlinie, zählt die Generationen weiter und erbt kleine Vorteile von seinen Eltern. Im Familienbuch (<kbd>O</kbd>) siehst du den Stammbaum über Generationen.</p>
<p>Alles dazu, von der Paarung bis zur Vererbung: Kapitel <a href="#family">Familie</a>.</p>`,
            en: `<p>A single life ends, a family does not. Two animals of the same species can have offspring. Whoever takes over a juvenile continues the <b>bloodline</b>: the juvenile carries the bloodline's name, counts the generations on and inherits small advantages from its parents. The family book (<kbd>O</kbd>) shows the family tree across generations.</p>
<p>Everything about it, from mating to inheritance: <a href="#family">Family</a> chapter.</p>`,
        },
    ],
});
