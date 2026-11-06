window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'start',
    order: 10,
    icon: 'start',
    title: { de: 'Erste Schritte', en: 'Getting started' },
    sections: [
        {
            id: 'start-overview',
            title: { de: 'Was ist Life In Wilderness?', en: 'What is Life In Wilderness?' },
            tags: { de: 'server roleplay rp tier überblick einführung', en: 'server roleplay rp animal overview introduction' },
            de: `<p>Life In Wilderness ist ein Roleplay-Server für RedM, auf dem <b>jeder Spieler ein Tier</b> ist. Es gibt keine spielbaren Menschen, keine Städte voller Leute, kein Geld und kein Inventar. Du hast deinen Körper, deine Sinne, dein Rudel und dein Revier.</p>
<ul>
<li><b>Überleben:</b> Hunger, Durst, Ruhe und Temperatur wollen versorgt sein (<a href="#needs">Bedürfnisse</a>).</li>
<li><b>Jagen und Fressen:</b> Fleischfresser jagen und fressen Kadaver, Pflanzenfresser grasen, Allesfresser können beides (<a href="#food">Nahrung</a>).</li>
<li><b>Rudel und Reviere:</b> Schließ dich anderen deiner Art an und halte ein Revier (<a href="#pack">Rudel</a>, <a href="#territory">Reviere</a>).</li>
<li><b>Ein Leben:</b> Jedes Tier lebt nur einmal. Stirbt es, ist es fort; was bleibt, sind seine Nachkommen (<a href="#life">Lebenslauf</a>, <a href="#family">Familie</a>).</li>
</ul>
<p>Im Spiel gibt es keinen Text-Chat: Ihr verständigt euch über Proximity Voice, Tierlaute und das Emote-Rad (<a href="#voice">Stimme</a>).</p>`,
            en: `<p>Life In Wilderness is a roleplay server for RedM where <b>every player is an animal</b>. There are no playable humans, no towns full of people, no money and no inventory. You have your body, your senses, your pack and your territory.</p>
<ul>
<li><b>Survive:</b> hunger, thirst, rest and temperature need looking after (<a href="#needs">Needs</a>).</li>
<li><b>Hunt and eat:</b> carnivores hunt and eat carcasses, herbivores graze, omnivores can do both (<a href="#food">Food</a>).</li>
<li><b>Packs and territories:</b> join others of your species and hold a territory (<a href="#pack">Pack</a>, <a href="#territory">Territories</a>).</li>
<li><b>One life:</b> every animal lives only once. When it dies it is gone; what remains are its offspring (<a href="#life">Life cycle</a>, <a href="#family">Family</a>).</li>
</ul>
<p>There is no text chat in the game: you talk through proximity voice, animal sounds and the emote wheel (<a href="#voice">Voice</a>).</p>`,
        },
        {
            id: 'start-requirements',
            title: { de: 'Was du brauchst', en: 'What you need' },
            tags: { de: 'voraussetzungen rdr2 red dead redemption redm pc mikrofon kosten installieren', en: 'requirements rdr2 red dead redemption redm pc microphone cost install' },
            de: `<ul>
<li><b>Red Dead Redemption 2 für den PC</b> (Steam, Epic oder Rockstar Launcher).</li>
<li><b>RedM</b>, den kostenlosen Multiplayer-Client für RDR2. Du bekommst ihn auf redm.net.</li>
<li><b>Discord:</b> Ohne unseren Discord-Server kommst du nicht ins Spiel (siehe <a href="#start-discord">Discord</a>).</li>
<li><b>Ein Mikrofon</b> ist sehr zu empfehlen. Gesprochen wird im Spiel über Proximity Voice; einen Text-Chat gibt es nicht.</li>
</ul>
<p>Eine Bewerbung brauchst du nicht. Deutsch musst du auch nicht sprechen: Das Spiel gibt es auf Deutsch und Englisch.</p>`,
            en: `<ul>
<li><b>Red Dead Redemption 2 for PC</b> (Steam, Epic or Rockstar Launcher).</li>
<li><b>RedM</b>, the free multiplayer client for RDR2. You get it at redm.net.</li>
<li><b>Discord:</b> without our Discord server you cannot get into the game (see <a href="#start-discord">Discord</a>).</li>
<li><b>A microphone</b> is strongly recommended. In the game you talk through proximity voice; there is no text chat.</li>
</ul>
<p>You do not need to apply. You do not need to speak German either: the game is available in English and German.</p>`,
        },
        {
            id: 'start-discord',
            title: { de: 'Discord', en: 'Discord' },
            tags: { de: 'zugang whitelist regeln neuigkeiten community beitreten', en: 'access whitelist rules news community join' },
            de: `<p>Der Discord-Server ist das Zuhause der Community. Dort findest du:</p>
<ul>
<li>den <b>Zugang</b> zum Spiel: Wer auf dem Discord ist, kann direkt spielen,</li>
<li>die <b>vollständigen Regeln</b>,</li>
<li><b>Neuigkeiten</b>, Updates und Ankündigungen,</li>
<li><b>Hilfe:</b> Bei Problemen oder Fehlern öffnest du dort ein Ticket (siehe <a href="#help-support">Hilfe bekommen</a>).</li>
</ul>
<p>Den Einladungslink findest du auf der <a href="index.html">Startseite</a>.</p>`,
            en: `<p>The Discord server is the home of the community. There you find:</p>
<ul>
<li><b>access</b> to the game: if you are on the Discord, you can play right away,</li>
<li>the <b>full rules</b>,</li>
<li><b>news</b>, updates and announcements,</li>
<li><b>help:</b> for problems or bugs you open a ticket there (see <a href="#help-support">Getting help</a>).</li>
</ul>
<p>The invite link is on the <a href="index.html">homepage</a>.</p>`,
        },
        {
            id: 'start-connect',
            title: { de: 'Verbinden', en: 'Connecting' },
            tags: { de: 'server beitreten connect f8 konsole serverliste adresse ladebildschirm einloggen', en: 'join server connect f8 console server list address loading screen log in' },
            de: `<p>Es gibt drei Wege auf den Server:</p>
<ol>
<li>Klick auf der <a href="index.html">Startseite</a> auf <b>„Verbinden“</b>.</li>
<li>Such in der Serverliste von RedM nach <b>„Life In Wilderness“</b>.</li>
<li>Drück in RedM <kbd>F8</kbd> und gib <code>connect cfx.re/join/4ggl8rq</code> ein.</li>
</ol>
<p>Danach siehst du den Ladebildschirm mit wechselnden Spieltipps. Sobald alles geladen ist, öffnet sich der <a href="#start-selection">Auswahlbildschirm</a>.</p>
<div class="hb-tip"><p>Das erste Laden kann etwas dauern, weil RedM die Daten des Servers herunterlädt. Die nächsten Male geht es schneller.</p></div>`,
            en: `<p>There are three ways onto the server:</p>
<ol>
<li>Click <b>“Connect”</b> on the <a href="index.html">homepage</a>.</li>
<li>Search the RedM server list for <b>“Life In Wilderness”</b>.</li>
<li>Press <kbd>F8</kbd> in RedM and type <code>connect cfx.re/join/4ggl8rq</code>.</li>
</ol>
<p>Then you see the loading screen with changing game tips. As soon as everything is loaded, the <a href="#start-selection">selection screen</a> opens.</p>
<div class="hb-tip"><p>The first load can take a while because RedM downloads the server's data. It gets faster after that.</p></div>`,
        },
        {
            id: 'start-selection',
            title: { de: 'Der Auswahlbildschirm', en: 'The selection screen' },
            tags: { de: 'charakterauswahl charakter slot slots plätze bau baue gefallene kulisse tiere', en: 'character selection character slot slots den fallen scenery animals' },
            de: `<p>Hier verwaltest du deine Tiere. Jeder Account hat <b>drei Plätze</b> (im Spiel „Baue“) für lebende Tiere.</p>
<ul>
<li><b>Deine Tiere:</b> Jede Karte zeigt Art, Name, Stufe, wie viele Stunden das Tier schon gelebt hat und wann es geboren wurde. Klick ein Tier an, um seine Details zu sehen und es zu spielen.</li>
<li><b>Leerer Bau:</b> Ein freier Platz. Mit „Ein neues Leben beginnen“ <a href="#start-create">erschaffst du ein Tier</a>.</li>
<li><b>Jungtiere:</b> Wenn Würfe auf eine Übernahme warten, stehen sie hier. Du kannst ein Leben als Jungtier beginnen (siehe <a href="#family">Familie</a>).</li>
<li><b>Die Gefallenen:</b> Deine verstorbenen Tiere mit ihrer Todesursache. Sie bleiben in Erinnerung, auch wenn ihr Platz längst wieder frei ist.</li>
<li><b>Kulisse:</b> Mit den Pfeilen unten wechselst du den Hintergrund (Wald, Seeufer, Bergkamm, Hügelland, Hochland). Das ist nur Optik.</li>
</ul>
<p>Ein Platz wird frei, wenn ein Tier stirbt. Löschen kannst du ein lebendes Tier nicht.</p>`,
            en: `<p>This is where you manage your animals. Every account has <b>three slots</b> (called “dens” in the game) for living animals.</p>
<ul>
<li><b>Your animals:</b> each card shows species, name, level, how many hours the animal has lived and when it was born. Click an animal to see its details and to play it.</li>
<li><b>Empty den:</b> a free slot. “Begin a new life” lets you <a href="#start-create">create an animal</a>.</li>
<li><b>Juveniles:</b> when litters are waiting to be taken over, they are listed here. You can begin a life as a juvenile (see <a href="#family">Family</a>).</li>
<li><b>The Fallen:</b> your animals that have died, with their cause of death. They are remembered even when their slot is long free again.</li>
<li><b>Scenery:</b> the arrows at the bottom change the background (forest, lake shore, mountain ridge, hills, highland). This is just for looks.</li>
</ul>
<p>A slot frees up when an animal dies. You cannot delete a living animal.</p>`,
        },
        {
            id: 'start-create',
            title: { de: 'Ein Tier erschaffen', en: 'Creating an animal' },
            tags: { de: 'charakter erstellen erstellung neues tier art wählen erschaffen', en: 'create character creation new animal choose species' },
            de: `<ol>
<li>Klick auf einen <b>leeren Bau</b> und dann auf „Ein neues Leben beginnen“.</li>
<li><b>Art wählen:</b> Die Arten sind nach Ernährung sortiert: Fleischfresser, Pflanzenfresser, Allesfresser und ein eigener Reiter für <b>Kleintiere</b>. Zu jeder Art siehst du eine Beschreibung und ihre Grundwerte von 1 bis 10 (Stärke, Ausdauer, Geschwindigkeit, Sinne, Tarnung, Konstitution). Die Vorschau zeigt das Tier.</li>
<li><b>Geschlecht wählen:</b> Weibchen oder Männchen (siehe <a href="#start-gender-fur">Geschlecht und Fell</a>).</li>
<li><b>Fell wählen,</b> falls die Art mehrere Felle hat.</li>
<li><b>Namen eingeben</b> oder mit dem Würfel einen <a href="#start-name">Namen würfeln</a>.</li>
<li>Auf <b>„Erschaffen“</b> klicken. Dein Tier steht jetzt in deinem Bau und kann <a href="#start-enter">in die Wildnis</a>.</li>
</ol>
<div class="hb-tip"><p>Unsicher, welche Art? Lies <a href="#start-species-choice">Welche Art passt zu mir?</a> und das Kapitel <a href="#species">Arten</a>.</p></div>`,
            en: `<ol>
<li>Click an <b>empty den</b> and then “Begin a new life”.</li>
<li><b>Choose a species:</b> the species are sorted by diet: carnivores, herbivores, omnivores, plus a tab of its own for <b>small animals</b>. For each species you see a description and its base values from 1 to 10 (strength, stamina, speed, senses, stealth, constitution). The preview shows the animal.</li>
<li><b>Choose the sex:</b> female or male (see <a href="#start-gender-fur">Sex and fur</a>).</li>
<li><b>Choose a fur</b> if the species has several.</li>
<li><b>Enter a name</b> or use the dice to <a href="#start-name">roll a name</a>.</li>
<li>Click <b>“Create”</b>. Your animal now waits in your den and can <a href="#start-enter">enter the wild</a>.</li>
</ol>
<div class="hb-tip"><p>Not sure which species? Read <a href="#start-species-choice">Which species suits me?</a> and the <a href="#species">Species</a> chapter.</p></div>`,
        },
        {
            id: 'start-species-choice',
            title: { de: 'Welche Art passt zu mir?', en: 'Which species suits me?' },
            tags: { de: 'art auswahl anfänger empfehlung fleischfresser pflanzenfresser allesfresser kleintiere einzelgänger rudeltier', en: 'species choice beginner recommendation carnivore herbivore omnivore small animals loner pack animal' },
            de: `<p>Jede Art spielt sich anders. Ein paar Fragen helfen bei der Wahl:</p>
<table class="hb-table">
<thead><tr><th>Du möchtest …</th><th>Dann passt</th></tr></thead>
<tbody>
<tr><td>jagen und kämpfen</td><td>ein <b>Fleischfresser</b>. Er frisst Beute und Kadaver, muss sein Futter aber erst erlegen oder finden.</td></tr>
<tr><td>entspannt überleben, in der Herde leben</td><td>ein <b>Pflanzenfresser</b>. Er grast fast überall, jagt aber keine anderen Spieler, sondern wehrt sich nur.</td></tr>
<tr><td>flexibel bleiben</td><td>ein <b>Allesfresser</b>. Er kann Fleisch fressen, nach Wurzeln und Insekten suchen und Beerensträucher plündern.</td></tr>
<tr><td>klein und unauffällig sein</td><td>ein <b>Kleintier</b>. Schwer zu entdecken, aber zerbrechlich.</td></tr>
<tr><td>mit Freunden zusammen spielen</td><td>eine Art, die in <b>Rudeln oder Herden</b> lebt. Rudel sind immer artgleich: Wer zusammen spielen will, wählt dieselbe Art.</td></tr>
</tbody>
</table>
<p>Alle Arten mit ihren Stärken und Sonderfähigkeiten findest du im Kapitel <a href="#species">Arten</a>.</p>
<div class="hb-tip"><p>Ihr wollt als Gruppe starten? Sprecht euch vorher ab und wählt alle dieselbe Art, damit ihr ein <a href="#pack">Rudel</a> gründen könnt.</p></div>`,
            en: `<p>Every species plays differently. A few questions help you choose:</p>
<table class="hb-table">
<thead><tr><th>You want to …</th><th>Then pick</th></tr></thead>
<tbody>
<tr><td>hunt and fight</td><td>a <b>carnivore</b>. It eats prey and carcasses, but has to take down or find its food first.</td></tr>
<tr><td>survive in a relaxed way, live in a herd</td><td>a <b>herbivore</b>. It grazes almost anywhere, but does not hunt other players; it only defends itself.</td></tr>
<tr><td>stay flexible</td><td>an <b>omnivore</b>. It can eat meat, forage for roots and insects and raid berry bushes.</td></tr>
<tr><td>be small and inconspicuous</td><td>a <b>small animal</b>. Hard to spot, but fragile.</td></tr>
<tr><td>play together with friends</td><td>a species that lives in <b>packs or herds</b>. Packs are always one species: if you want to play together, choose the same species.</td></tr>
</tbody>
</table>
<p>All species with their strengths and special abilities are in the <a href="#species">Species</a> chapter.</p>
<div class="hb-tip"><p>Starting as a group? Agree beforehand and all pick the same species so you can found a <a href="#pack">pack</a>.</p></div>`,
        },
        {
            id: 'start-gender-fur',
            title: { de: 'Geschlecht und Fell', en: 'Sex and fur' },
            tags: { de: 'weibchen männchen geschlecht fell aussehen variante belohnungsfell eventfell bock ricke geweih', en: 'female male sex gender fur look variant reward fur event fur buck doe antlers' },
            de: `<p><b>Geschlecht:</b> Du wählst Weibchen oder Männchen. Das steht danach für das ganze Leben fest. Für Nachwuchs braucht es ein Weibchen und ein Männchen derselben Art (siehe <a href="#family">Familie</a>). Meist ist das Geschlecht nur eine Eigenschaft; beim Weißwedelhirsch sieht man es: Männchen sind Böcke mit Geweih.</p>
<p><b>Fell:</b> Viele Arten haben mehrere Felle, die du mit den Nummern auswählst. Bei manchen Arten legt das Geschlecht das Fell fest, dann gibt es keine Auswahl.</p>
<ul>
<li><b>★ Belohnungsfelle</b> sind zuerst mit einem Schloss gesperrt. Du schaltest sie über Quests frei (siehe <a href="#quests">Aufgaben</a>), und zwar für deinen ganzen Account.</li>
<li><b>✦ Event-Felle</b> sind besondere Optiken, die es nur als Belohnung von Event-Quests gibt (siehe <a href="#events">Events</a>). Freigeschaltet gelten sie für alle Tiere dieser Art in deinem Account.</li>
</ul>
<p>Ein freigeschaltetes Belohnungs- oder Event-Fell kannst du auch einem lebenden Tier später anlegen: Wähl das Tier im Auswahlbildschirm und such dir in den Details das Fell aus. Zurück zum eigenen Fell geht jederzeit.</p>`,
            en: `<p><b>Sex:</b> you choose female or male. It stays that way for life. Offspring need a female and a male of the same species (see <a href="#family">Family</a>). Mostly the sex is just a trait; with the whitetail deer you can see it: males are bucks with antlers.</p>
<p><b>Fur:</b> many species have several furs that you pick by number. For some species the sex decides the fur, so there is no choice.</p>
<ul>
<li><b>★ Reward furs</b> are locked at first. You unlock them through quests (see <a href="#quests">Quests</a>), for your whole account.</li>
<li><b>✦ Event furs</b> are special looks you only get as a reward of event quests (see <a href="#events">Events</a>). Once unlocked they count for every animal of that species on your account.</li>
</ul>
<p>You can also put an unlocked reward or event fur on a living animal later: select the animal on the selection screen and pick the fur in its details. Going back to its own fur is always possible.</p>`,
        },
        {
            id: 'start-name',
            title: { de: 'Der Name', en: 'The name' },
            tags: { de: 'name namen würfeln regeln zeichen umbenennen', en: 'name names roll dice rules characters rename' },
            de: `<ul>
<li>Der Name ist <b>2 bis 24 Zeichen</b> lang.</li>
<li>Erlaubt sind Buchstaben (auch Umlaute und einige Akzente), Leerzeichen, Apostroph und Bindestrich. Zahlen und Sonderzeichen gehen nicht.</li>
<li>Der <b>Würfel</b> neben dem Feld schlägt einen zufälligen Namen vor.</li>
</ul>
<div class="hb-tip"><p>Wähl einen Namen, der zu einem Tier in der Wildnis passt. Dein Name steht später im Stammbaum und vielleicht sogar auf einem Gedenkstein.</p></div>`,
            en: `<ul>
<li>The name is <b>2 to 24 characters</b> long.</li>
<li>Letters (including umlauts and some accents), spaces, apostrophes and hyphens are allowed. Numbers and other symbols are not.</li>
<li>The <b>dice</b> next to the field suggests a random name.</li>
</ul>
<div class="hb-tip"><p>Pick a name that suits an animal in the wild. Your name will stand in the family tree and maybe even on a memorial stone.</p></div>`,
        },
        {
            id: 'start-enter',
            title: { de: 'In die Wildnis', en: 'Entering the wild' },
            tags: { de: 'spielen starten spawn spawnpunkt höhle start einsteigen', en: 'play start spawn spawn point den enter' },
            de: `<ol>
<li>Wähl im Auswahlbildschirm dein Tier aus.</li>
<li>Wähl, falls angeboten, den <b>Start</b>:
<ul>
<li><b>„Wo du es verlassen hast“</b>: dort, wo du zuletzt mit diesem Tier warst.</li>
<li><b>„In der Höhle“</b>: Hält dein Rudel (oder du als Einzelgänger) ein Revier mit Höhle, kannst du direkt dort starten (siehe <a href="#territory">Reviere</a>).</li>
</ul></li>
<li>Klick auf <b>„In die Wildnis“</b>.</li>
</ol>
<p>Ein <b>neues Tier</b> startet an einem Startpunkt seiner Art, in einer Gegend, die zu ihm passt. Ein übernommenes <b>Jungtier</b> startet bei seiner Familie: dort, wo es gerade ist, sonst neben einem Elternteil.</p>
<p>Nach jedem Start bist du ein paar Sekunden geschützt (<a href="#start-protection">Spawnschutz</a>), ein neues Tier zusätzlich eine Stunde lang (<a href="#start-newcomer">Neulingsschutz</a>).</p>`,
            en: `<ol>
<li>Select your animal on the selection screen.</li>
<li>If offered, choose the <b>start</b>:
<ul>
<li><b>“Where you left it”</b>: the place where you last were with this animal.</li>
<li><b>“At the den”</b>: if your pack (or you as a loner) holds a territory with a den, you can start right there (see <a href="#territory">Territories</a>).</li>
</ul></li>
<li>Click <b>“Enter the wild”</b>.</li>
</ol>
<p>A <b>new animal</b> starts at a start point of its species, in an area that suits it. A <b>juvenile</b> you took over starts with its family: where it currently is, otherwise next to a parent.</p>
<p>After every start you are protected for a few seconds (<a href="#start-protection">spawn protection</a>), a new animal additionally for one hour (<a href="#start-newcomer">newcomer protection</a>).</p>`,
        },
        {
            id: 'start-protection',
            title: { de: 'Spawnschutz', en: 'Spawn protection' },
            tags: { de: 'schutz unverwundbar spawn geschützt', en: 'protection invulnerable spawn protected' },
            de: `<p>Nach jedem Betreten der Wildnis bist du <b>10 Sekunden</b> lang unverwundbar. So kann dich niemand direkt beim Ankommen erwischen. Solange der Schutz läuft, zeigt das HUD „Geschützt“.</p>`,
            en: `<p>Every time you enter the wild you are invulnerable for <b>10 seconds</b>, so nobody can catch you the moment you arrive. While it lasts, the HUD shows “Protected”.</p>`,
        },
        {
            id: 'start-newcomer',
            title: { de: 'Neulingsschutz', en: 'Newcomer protection' },
            tags: { de: 'neuling anfänger schutz erste stunde geschützt pvp', en: 'newcomer beginner protection first hour protected pvp' },
            de: `<p>Jedes <b>neue Tier</b> steht in seiner <b>ersten Stunde in der Wildnis</b> unter Neulingsschutz. Gezählt wird nur die Zeit, die du mit diesem Tier wirklich spielst, nicht die Zeit im Auswahlbildschirm oder offline.</p>
<ul>
<li>Andere Spieler können dich nicht verletzen. Wer es versucht, bekommt einen Hinweis.</li>
<li>Wilde Jäger lassen dich in Ruhe.</li>
<li>Das HUD zeigt „Geschützt“; eine Meldung sagt dir, wie lange der Schutz noch läuft und wann er endet.</li>
</ul>
<div class="hb-warn"><p>Greifst du selbst einen anderen Spieler an, bekommst du zuerst eine Warnung (der Treffer zählt nicht). Greifst du innerhalb von <b>10 Sekunden</b> erneut an, endet dein Neulingsschutz <b>endgültig</b>.</p></div>
<p>Nutz die Stunde, um dich mit Fressen, Trinken, Ruhen und deinen Sinnen vertraut zu machen (siehe <a href="#start-first-steps">Deine ersten Minuten</a>).</p>`,
            en: `<p>Every <b>new animal</b> is under newcomer protection for its <b>first hour in the wild</b>. Only the time you actually play this animal counts, not the time on the selection screen or offline.</p>
<ul>
<li>Other players cannot hurt you. Anyone who tries gets a hint.</li>
<li>Wild hunters leave you alone.</li>
<li>The HUD shows “Protected”; a message tells you how long the protection lasts and when it ends.</li>
</ul>
<div class="hb-warn"><p>If you attack another player yourself, you first get a warning (the hit does not count). Attack again within <b>10 seconds</b> and your newcomer protection ends <b>for good</b>.</p></div>
<p>Use the hour to get used to eating, drinking, resting and your senses (see <a href="#start-first-steps">Your first minutes</a>).</p>`,
        },
        {
            id: 'start-first-steps',
            title: { de: 'Deine ersten Minuten', en: 'Your first minutes' },
            tags: { de: 'anfang tutorial tipps einsteiger checkliste neu', en: 'beginning tutorial tips beginner checklist new' },
            de: `<p>Eine kleine Checkliste für den Anfang:</p>
<ol>
<li><b>Schau aufs HUD.</b> Unten links siehst du Ringe für Gesundheit, Ausdauer, Hunger, Durst, Ruhe und Temperatur. Halte <kbd>Alt</kbd>, um alle zu sehen (siehe <a href="#hud-rings">Ringe</a>).</li>
<li><b>Trink.</b> Lauf an ein Gewässer und halte <kbd>E</kbd>.</li>
<li><b>Friss.</b> Je nach Art: Beute jagen oder einen Kadaver finden, grasen oder Beeren fressen, jeweils mit <kbd>E</kbd> halten (siehe <a href="#food">Nahrung</a>).</li>
<li><b>Nutz deine Sinne.</b> <kbd>V</kbd> zeigt Beute, Gefahr und Spuren in der Nähe (siehe <a href="#senses">Sinne</a>).</li>
<li><b>Ruh dich aus.</b> <kbd>Strg</kbd> lässt dich ruhen oder schlafen; das füllt Ruhe und Ausdauer auf.</li>
<li><b>Öffne dein Charaktermenü</b> mit <kbd>J</kbd>: Dort verteilst du Punkte, lernst Fähigkeiten und findest die Einstellungen (siehe <a href="#hud-character-menu">Charaktermenü</a>).</li>
<li><b>Such Anschluss.</b> Mit <kbd>L</kbd> öffnest du das Rudelmenü (siehe <a href="#pack">Rudel</a>). Erfahrene Spieler können dich auch als Mentor begleiten (siehe <a href="#mentor">Mentor</a>).</li>
<li><b>Schau in deine Aufgaben</b> mit <kbd>K</kbd>: Tägliche Quests bringen Erfahrung (siehe <a href="#quests">Aufgaben</a>).</li>
</ol>
<p>Alle Tasten auf einen Blick: <a href="tasten.html">Tastenbelegung</a>.</p>`,
            en: `<p>A small checklist for the start:</p>
<ol>
<li><b>Look at the HUD.</b> At the bottom left you see rings for health, stamina, hunger, thirst, rest and temperature. Hold <kbd>Alt</kbd> to see all of them (see <a href="#hud-rings">Rings</a>).</li>
<li><b>Drink.</b> Walk to some water and hold <kbd>E</kbd>.</li>
<li><b>Eat.</b> Depending on your species: hunt prey or find a carcass, graze or eat berries, each by holding <kbd>E</kbd> (see <a href="#food">Food</a>).</li>
<li><b>Use your senses.</b> <kbd>V</kbd> shows prey, danger and trails nearby (see <a href="#senses">Senses</a>).</li>
<li><b>Rest.</b> <kbd>Ctrl</kbd> makes you rest or sleep; that refills rest and stamina.</li>
<li><b>Open your character menu</b> with <kbd>J</kbd>: there you spend points, learn skills and find the settings (see <a href="#hud-character-menu">Character menu</a>).</li>
<li><b>Find company.</b> <kbd>L</kbd> opens the pack menu (see <a href="#pack">Pack</a>). Experienced players can also guide you as a mentor (see <a href="#mentor">Mentor</a>).</li>
<li><b>Check your tasks</b> with <kbd>K</kbd>: daily quests give experience (see <a href="#quests">Quests</a>).</li>
</ol>
<p>Every key at a glance: <a href="tasten.html">Key bindings</a>.</p>`,
        },
        {
            id: 'start-switch',
            title: { de: 'Tier wechseln', en: 'Switching animals' },
            tags: { de: 'wechseln anderes tier charakter wechsel', en: 'switch other animal character change' },
            de: `<p>Du musst nicht zurück in die Auswahl, um ein anderes deiner Tiere zu spielen: Im Charaktermenü (<kbd>J</kbd>) unter <b>„Tier wechseln“</b> wählst du ein anderes Tier und klickst zweimal auf „Wechseln“. Das Bild wird kurz schwarz, und du bist das andere Tier, dort, wo du es verlassen hast. Das bisherige Tier bleibt, wo es ist.</p>
<ul>
<li>Nicht möglich, solange du <b>niedergestreckt</b> bist.</li>
<li>Nicht möglich <b>mitten im Kampf</b>, also bis 30 Sekunden nach dem letzten Treffer.</li>
<li>Ein Tier ohne gewähltes Geschlecht muss das zuerst im Auswahlbildschirm festlegen.</li>
</ul>`,
            en: `<p>You do not have to go back to the selection to play another of your animals: in the character menu (<kbd>J</kbd>) under <b>“Switch animal”</b> pick another animal and click “Switch” twice. The screen goes black for a moment and you are the other animal, where you left it. The previous animal stays where it is.</p>
<ul>
<li>Not possible while you are <b>downed</b>.</li>
<li>Not possible <b>in the middle of a fight</b>, i.e. until 30 seconds after the last hit.</li>
<li>An animal without a chosen sex has to choose it on the selection screen first.</li>
</ul>`,
        },
        {
            id: 'start-logout',
            title: { de: 'Ausloggen und Pausen', en: 'Logging out and breaks' },
            tags: { de: 'ausloggen abmelden verlassen beenden disconnect verbindung combat log kampf offline erholung pause', en: 'log out logout leave quit disconnect connection combat log fight offline rest break' },
            de: `<p><b>Richtig ausloggen:</b> Öffne das Charaktermenü (<kbd>J</kbd>) und klick zweimal auf <b>„Die Wildnis verlassen (ausloggen)“</b>. Du kommst zurück in den Auswahlbildschirm, dein Tier wird gespeichert und bleibt, wie es ist.</p>
<ul>
<li>Niedergestreckt kannst du nicht gehen.</li>
<li>Mitten im Kampf auch nicht: Nach dem letzten Treffer durch einen Spieler oder ein wildes Tier musst du <b>30 Sekunden</b> warten.</li>
</ul>
<div class="hb-warn"><p><b>Einfach das Spiel schließen oder die Verbindung verlieren:</b> Dein Tier bleibt dann noch <b>30 Sekunden</b> in der Welt stehen und kann angegriffen werden. Stirbt es in dieser Zeit, ist es tot. Wer <b>niedergestreckt</b> die Verbindung trennt, stirbt sofort. In diesen 30 Sekunden kannst du das Tier auch nicht wieder auswählen („Dieses Tier ist noch draußen in der Wildnis“).</p></div>
<p><b>Erholung, während du weg bist:</b> Ein Tier, das nicht gespielt wird, erholt sich. Ab 5 Minuten Abwesenheit bekommt es beim nächsten Start etwas zurück:</p>
<ul>
<li><b>Gesundheit:</b> derzeit etwa 20 % je Stunde, gezählt werden höchstens 24 Stunden. Im <b>eigenen Revier</b> doppelt so viel, in der <b>Höhle</b> dieses Reviers noch mehr (sobald ihre Ruhm-Stufe das erlaubt).</li>
<li><b>Ruhe</b> füllt sich ebenfalls auf.</li>
<li><b>Hunger und Durst</b> sinken in der Zeit nur halb so schnell und nie unter die Hälfte.</li>
<li>Warst du mindestens eine Stunde weg, startest du <b>„Ausgeruht“</b>: 20 Minuten lang erholt sich deine Ausdauer schneller, du verbrauchst weniger davon und wirst langsamer müde.</li>
</ul>
<div class="hb-tip"><p>Logg dich an einem ruhigen Ort aus, am besten im eigenen Revier oder in der Höhle. Dort ist es sicher und du erholst dich am schnellsten.</p></div>`,
            en: `<p><b>Logging out properly:</b> open the character menu (<kbd>J</kbd>) and click <b>“Leave the wild (log out)”</b> twice. You go back to the selection screen; your animal is saved and stays as it is.</p>
<ul>
<li>You cannot leave while downed.</li>
<li>Nor in the middle of a fight: after the last hit from a player or a wild animal you have to wait <b>30 seconds</b>.</li>
</ul>
<div class="hb-warn"><p><b>Just closing the game or losing the connection:</b> your animal then stays in the world for <b>30 seconds</b> and can be attacked. If it dies in that time, it is dead. Disconnecting while <b>downed</b> means instant death. During those 30 seconds you cannot select the animal again either (“This animal is still out in the wild”).</p></div>
<p><b>Recovery while you are away:</b> an animal nobody plays recovers. After at least 5 minutes away it gets something back on its next start:</p>
<ul>
<li><b>Health:</b> currently about 20 % per hour, at most 24 hours are counted. In your <b>own territory</b> twice as much, in that territory's <b>den</b> even more (once its fame tier allows it).</li>
<li><b>Rest</b> refills as well.</li>
<li><b>Hunger and thirst</b> drop only half as fast in that time and never below half.</li>
<li>If you were away for at least an hour, you start <b>“Refreshed”</b>: for 20 minutes your stamina recovers faster, you use less of it and you tire more slowly.</li>
</ul>
<div class="hb-tip"><p>Log out in a quiet place, ideally in your own territory or den. It is safe there and you recover fastest.</p></div>`,
        },
    ],
});
