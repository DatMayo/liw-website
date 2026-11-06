window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'food',
    order: 42,
    icon: 'food',
    title: { de: 'Nahrung', en: 'Food' },
    sections: [
        {
            id: 'food-diet',
            title: { de: 'Wer frisst was', en: 'Who eats what' },
            tags: { de: 'ernährung fleischfresser pflanzenfresser allesfresser klasse diät', en: 'diet carnivore herbivore omnivore class' },
            de: `<p>Was dein Tier fressen kann, hängt von seiner <strong>Klasse</strong> ab. Trinken können alle.</p>
<table class="hb-table">
<thead><tr><th></th><th>Fleischfresser</th><th>Pflanzenfresser</th><th>Allesfresser</th></tr></thead>
<tbody>
<tr><td>Frisches Fleisch</td><td>ja</td><td>nein</td><td>ja</td></tr>
<tr><td>Aas</td><td>ja</td><td>nein</td><td>ja</td></tr>
<tr><td>Grasen</td><td>nein</td><td>ja</td><td>nein</td></tr>
<tr><td>Futter suchen (Wurzeln, Insekten)</td><td>nein</td><td>nein</td><td>ja</td></tr>
<tr><td>Beeren</td><td>nein</td><td>nein</td><td>ja</td></tr>
</tbody>
</table>
<ul>
<li><strong>Fleischfresser:</strong> Wolf, Kojote, Rotfuchs, Puma, Panther, Alligator, Dachs.</li>
<li><strong>Pflanzenfresser:</strong> Weißwedelhirsch, Wapiti, Elch, Bison, Wildpferd, Gabelbock, Dickhornschaf, Biber, Kaninchen, Eichhörnchen, Streifenhörnchen, Bisamratte.</li>
<li><strong>Allesfresser:</strong> Schwarzbär, Grizzlybär, Wildschwein, Waschbär, Opossum, Stinktier, Gürteltier, Ratte.</li>
</ul>
<p>Versuchst du etwas, das deine Art nicht frisst, kommt „Deine Art frisst so etwas nicht.“ bzw. „Deine Art grast nicht.“</p>
<p>Je Biss bzw. Schluck (bei gehaltener Taste etwa alle 2 Sekunden) bekommst du derzeit ungefähr:</p>
<table class="hb-table">
<thead><tr><th>Nahrung</th><th>Pro Biss</th></tr></thead>
<tbody>
<tr><td>Frisches Fleisch</td><td>+4 Hunger</td></tr>
<tr><td>Aas</td><td>knapp +3 Hunger</td></tr>
<tr><td>Grasen</td><td>+4 Hunger</td></tr>
<tr><td>Futter suchen</td><td>knapp +2,5 Hunger</td></tr>
<tr><td>Beeren</td><td>+7 Hunger</td></tr>
<tr><td>Trinken</td><td>+6 Durst</td></tr>
</tbody>
</table>`,
            en: `<p>What your animal can eat depends on its <strong>class</strong>. Everyone can drink.</p>
<table class="hb-table">
<thead><tr><th></th><th>Carnivore</th><th>Herbivore</th><th>Omnivore</th></tr></thead>
<tbody>
<tr><td>Fresh meat</td><td>yes</td><td>no</td><td>yes</td></tr>
<tr><td>Carrion</td><td>yes</td><td>no</td><td>yes</td></tr>
<tr><td>Grazing</td><td>no</td><td>yes</td><td>no</td></tr>
<tr><td>Foraging (roots, insects)</td><td>no</td><td>no</td><td>yes</td></tr>
<tr><td>Berries</td><td>no</td><td>no</td><td>yes</td></tr>
</tbody>
</table>
<ul>
<li><strong>Carnivores:</strong> wolf, coyote, red fox, cougar, panther, alligator, badger.</li>
<li><strong>Herbivores:</strong> whitetail deer, elk, moose, bison, wild horse, pronghorn, bighorn sheep, beaver, rabbit, squirrel, chipmunk, muskrat.</li>
<li><strong>Omnivores:</strong> black bear, grizzly bear, wild boar, raccoon, opossum, skunk, armadillo, rat.</li>
</ul>
<p>If you try something your kind does not eat, you get "Your kind does not eat this." or "Your kind does not graze."</p>
<p>Per bite or sip (about every 2 seconds while you hold the key) you currently get roughly:</p>
<table class="hb-table">
<thead><tr><th>Food</th><th>Per bite</th></tr></thead>
<tbody>
<tr><td>Fresh meat</td><td>+4 hunger</td></tr>
<tr><td>Carrion</td><td>almost +3 hunger</td></tr>
<tr><td>Grazing</td><td>+4 hunger</td></tr>
<tr><td>Foraging</td><td>almost +2.5 hunger</td></tr>
<tr><td>Berries</td><td>+7 hunger</td></tr>
<tr><td>Drinking</td><td>+6 thirst</td></tr>
</tbody>
</table>`,
        },
        {
            id: 'food-eating',
            title: { de: 'So frisst du', en: 'How to eat' },
            tags: { de: 'fressen taste e halten hinweis interaktion', en: 'eat key e hold hint interact' },
            de: `<ol>
<li>Geh nah an das Futter: an einen Kadaver (etwa 2,5 m), ans Wasser, an einen Beerenbusch oder auf geeigneten Boden.</li>
<li>Unten erscheint ein Hinweis, z. B. „Interaktionstaste halten zum Fressen“.</li>
<li>Halte <kbd>E</kbd>. Alle 2 Sekunden nimmst du einen Biss bzw. Schluck, solange du die Taste hältst und stehen bleibst.</li>
</ol>
<ul>
<li>Der Hinweis erscheint erst ab 75 % Hunger bzw. Durst abwärts – fressen und trinken kannst du aber jederzeit. Abschalten lässt er sich im Charaktermenü (<kbd>J</kbd> → Einstellungen, „Hinweis Fressen / Trinken“).</li>
<li>Niedergestreckt kannst du nicht fressen („Du bist zu schwach.“).</li>
<li>Manche Fähigkeiten und dein eigenes Revier machen dich schneller (z. B. „Plündern“ des Waschbären, „Backentaschen“ des Streifenhörnchens; <a href="#territory">Reviere</a>).</li>
</ul>
<div class="hb-tip">Ein voller Magen von 0 auf 100 dauert mit frischem Fleisch nur etwa 50 Sekunden – fressen geht schnell, das Finden ist die Kunst.</div>`,
            en: `<ol>
<li>Get close to the food: a carcass (about 2.5 m), water, a berry bush or suitable ground.</li>
<li>A hint appears at the bottom, e.g. "Hold the interact key to eat".</li>
<li>Hold <kbd>E</kbd>. Every 2 seconds you take a bite or sip, as long as you hold the key and stand still.</li>
</ol>
<ul>
<li>The hint only shows from 75 % hunger or thirst down – but you can eat and drink at any time. You can switch it off in the character menu (<kbd>J</kbd> → Settings, "Eating / drinking hint").</li>
<li>While downed you cannot eat ("You are too weak.").</li>
<li>Some abilities and your own territory make you faster (e.g. the raccoon's "Scavenge", the chipmunk's "Cheek Pouches"; <a href="#territory">Territories</a>).</li>
</ul>
<div class="hb-tip">A full stomach from 0 to 100 takes only about 50 seconds with fresh meat – eating is quick, finding food is the art.</div>`,
        },
        {
            id: 'food-hunting',
            title: { de: 'Jagen', en: 'Hunting' },
            tags: { de: 'jagd beute reißen töten', en: 'hunt prey kill' },
            de: `<p>Fleisch- und Allesfresser jagen wilde Tiere mit ihren <a href="#combat-attacks">Angriffen</a>. Ein Tier, das ein Spieler getötet hat – du, dein Rudel oder jemand anderes –, ist für <strong>10 Minuten frisches Fleisch</strong>, danach wird es zu <a href="#food-carrion">Aas</a>.</p>
<ul>
<li>Beim Jagen können deine Treffer das Beutetier verlangsamen (am Bein erwischt), umreißen oder bluten lassen – je nach Art. Mehr unter <a href="#combat-wild">Wilde Tiere</a>.</li>
<li>Der Kill zählt für den, der das Tier zuletzt getroffen hat (innerhalb von etwa 20 Sekunden). Er bringt Erfahrung und zählt für Aufgaben (<a href="#progress">Fortschritt</a>, <a href="#quests">Aufgaben</a>).</li>
<li>Mit deinen <a href="#senses-mode">Sinnen</a> (<kbd>V</kbd>) siehst du – je nach Art – Beute (orange), Kadaver und verletzte Tiere.</li>
</ul>
<div class="hb-warn">Begleiter, legendäre Tiere und geschützte Tiere kannst du nicht anfressen, solange sie nicht wirklich tot sind.</div>
<div class="hb-tip">Pflanzenfresser können sich zwar gegen wilde Tiere wehren, fressen aber kein Fleisch. Kleine Arten wie Fuchs oder Dachs jagen am besten Kleinwild – ein Kaninchen gibt wenig, ist aber leicht zu kriegen.</div>`,
            en: `<p>Carnivores and omnivores hunt wild animals with their <a href="#combat-attacks">attacks</a>. An animal killed by a player – you, your pack or anyone else – is <strong>fresh meat for 10 minutes</strong>, after that it turns into <a href="#food-carrion">carrion</a>.</p>
<ul>
<li>While hunting, your hits can slow the prey (caught its leg), knock it down or make it bleed – depending on your species. More under <a href="#combat-wild">Wild animals</a>.</li>
<li>The kill counts for whoever hit the animal last (within about 20 seconds). It gives experience and counts for quests (<a href="#progress">Progress</a>, <a href="#quests">Quests</a>).</li>
<li>With your <a href="#senses-mode">senses</a> (<kbd>V</kbd>) you see – depending on your species – prey (orange), carcasses and wounded animals.</li>
</ul>
<div class="hb-warn">Companions, legendary animals and protected animals cannot be fed on unless they are really dead.</div>
<div class="hb-tip">Herbivores can defend themselves against wild animals, but they do not eat meat. Small species such as the fox or badger do best hunting small game – a rabbit gives little but is easy to catch.</div>`,
        },
        {
            id: 'food-carcasses',
            title: { de: 'Kadaver', en: 'Carcasses' },
            tags: { de: 'kadaver fleisch menge verrotten leiche', en: 'carcass meat amount rot corpse' },
            de: `<p>Jeder Kadaver hat einen <strong>Fleischvorrat</strong>, der mit jedem Biss kleiner wird. Ist er aufgebraucht, kommt „Hier ist nichts Essbares mehr übrig.“ und der Kadaver verschwindet. Ein Biss frisst 4 Einheiten.</p>
<table class="hb-table">
<thead><tr><th>Tier (Beispiele)</th><th>Fleisch</th><th>Hunger frisch</th></tr></thead>
<tbody>
<tr><td>Bison</td><td>120</td><td>bis 120</td></tr>
<tr><td>Grizzlybär</td><td>110</td><td>bis 110</td></tr>
<tr><td>Elch, Rind</td><td>100</td><td>bis 100</td></tr>
<tr><td>Wapiti, Schwarzbär</td><td>80</td><td>bis 80</td></tr>
<tr><td>Hirschbock, Puma, Panther</td><td>50</td><td>bis 50</td></tr>
<tr><td>Hirschkuh, Wolf, Dickhornschaf</td><td>40</td><td>bis 40</td></tr>
<tr><td>Wildschwein, Gabelbock</td><td>35</td><td>bis 35</td></tr>
<tr><td>Kojote</td><td>25</td><td>bis 25</td></tr>
<tr><td>Rotfuchs</td><td>15</td><td>bis 15</td></tr>
<tr><td>Biber, Dachs</td><td>10–12</td><td>10–12</td></tr>
<tr><td>Kaninchen, Waschbär</td><td>8</td><td>8</td></tr>
<tr><td>Eichhörnchen, Streifenhörnchen, Ratte</td><td>2–3</td><td>2–3</td></tr>
<tr><td>andere Tiere</td><td>meist 20</td><td>20</td></tr>
</tbody>
</table>
<ul>
<li>Ein großer Kadaver reicht für ein ganzes Rudel – fresst zusammen, bevor er zu Aas wird.</li>
<li>Ein angefressener Kadaver verrottet: derzeit etwa <strong>40 Minuten</strong> nach dem Riss ist er weg, ein gefundener schon etwas früher.</li>
<li>Stirbt ein Spielertier endgültig, bleibt ein Kadaver seiner Art liegen, der ebenfalls gefressen werden kann.</li>
</ul>`,
            en: `<p>Every carcass holds a <strong>stock of meat</strong> that gets smaller with every bite. When it is used up you get "Nothing edible is left." and the carcass disappears. One bite eats 4 units.</p>
<table class="hb-table">
<thead><tr><th>Animal (examples)</th><th>Meat</th><th>Hunger when fresh</th></tr></thead>
<tbody>
<tr><td>Bison</td><td>120</td><td>up to 120</td></tr>
<tr><td>Grizzly bear</td><td>110</td><td>up to 110</td></tr>
<tr><td>Moose, cow</td><td>100</td><td>up to 100</td></tr>
<tr><td>Elk, black bear</td><td>80</td><td>up to 80</td></tr>
<tr><td>Buck, cougar, panther</td><td>50</td><td>up to 50</td></tr>
<tr><td>Doe, wolf, bighorn sheep</td><td>40</td><td>up to 40</td></tr>
<tr><td>Wild boar, pronghorn</td><td>35</td><td>up to 35</td></tr>
<tr><td>Coyote</td><td>25</td><td>up to 25</td></tr>
<tr><td>Red fox</td><td>15</td><td>up to 15</td></tr>
<tr><td>Beaver, badger</td><td>10–12</td><td>10–12</td></tr>
<tr><td>Rabbit, raccoon</td><td>8</td><td>8</td></tr>
<tr><td>Squirrel, chipmunk, rat</td><td>2–3</td><td>2–3</td></tr>
<tr><td>other animals</td><td>mostly 20</td><td>20</td></tr>
</tbody>
</table>
<ul>
<li>A big carcass feeds a whole pack – eat together before it turns into carrion.</li>
<li>A carcass that was fed on rots: currently about <strong>40 minutes</strong> after the kill it is gone, a found one a little sooner.</li>
<li>When a player animal dies for good, a carcass of its species stays behind, which can be eaten too.</li>
</ul>`,
        },
        {
            id: 'food-carrion',
            title: { de: 'Aas und die Aas-Regel', en: 'Carrion and the carrion rule' },
            tags: { de: 'aas verdorben gefunden kadaver aasfresser regel', en: 'carrion rotten found carcass scavenger rule' },
            de: `<p><strong>Die Regel:</strong> Frisch ist nur, was ein Spieler selbst gerissen hat – und das nur 10 Minuten lang. Alles andere ist <strong>Aas</strong>:</p>
<ul>
<li>ein Kadaver, den du <strong>gefunden</strong> hast (von wilden Tieren gerissen oder einfach tot) – vom ersten Biss an,</li>
<li>ein gerissenes Tier, das <strong>älter als 10 Minuten</strong> ist.</li>
</ul>
<p>Aas fressen nur Fleisch- und Allesfresser. Es sättigt etwa 30 % weniger als frisches Fleisch und kann krank machen: Jeder Biss Aas hat derzeit eine kleine Chance (rund 8 %), dich mit dem <a href="#disease-carrion-fever">Aasfieber</a> anzustecken.</p>
<p>Aasfresser stecken sich seltener an: Kojote, Waschbär, Dachs, Opossum, Stinktier, Schwarz- und Grizzlybär, Wildschwein, Alligator und Ratte (siehe <a href="#disease-resistance">Widerstandskraft</a>).</p>
<div class="hb-tip">Hast du die Wahl, friss frisch. Musst du Aas fressen, iss danach als Allesfresser ein paar Beeren – die helfen gegen das Fieber.</div>`,
            en: `<p><strong>The rule:</strong> only what a player killed is fresh – and only for 10 minutes. Everything else is <strong>carrion</strong>:</p>
<ul>
<li>a carcass you <strong>found</strong> (killed by wild animals or just dead) – from the first bite on,</li>
<li>a kill that is <strong>older than 10 minutes</strong>.</li>
</ul>
<p>Only carnivores and omnivores eat carrion. It feeds about 30 % less than fresh meat and can make you sick: every bite of carrion currently has a small chance (around 8 %) to give you <a href="#disease-carrion-fever">carrion fever</a>.</p>
<p>Scavengers catch it less often: coyote, raccoon, badger, opossum, skunk, black and grizzly bear, wild boar, alligator and rat (see <a href="#disease-resistance">Resistance</a>).</p>
<div class="hb-tip">If you have the choice, eat fresh. If you must eat carrion, an omnivore should eat a few berries afterwards – they help against the fever.</div>`,
        },
        {
            id: 'food-grazing',
            title: { de: 'Grasen', en: 'Grazing' },
            tags: { de: 'gras weide pflanzenfresser abgegrast boden', en: 'grass pasture herbivore grazed out ground' },
            de: `<p>Pflanzenfresser grasen: Stell dich auf Wiese, Waldboden, Erde oder Ähnliches und halte <kbd>E</kbd>.</p>
<ul>
<li><strong>Nicht</strong> auf Fels, Stein, Sand, Kies, Schnee, Eis, Holz, Straßen oder an Hängen steiler als etwa 35° – „Hier wächst nichts zum Grasen.“</li>
<li>Die Welt ist in Felder von etwa 25 × 25 m aufgeteilt. Jedes hat einen Futtervorrat für ungefähr 12 Bissen (rund 48 Hunger). Ist er leer: „Hier ist alles abgegrast. Zieh weiter.“</li>
<li>Ein abgegrastes Feld wächst in derzeit etwa 30 Minuten wieder ganz nach.</li>
</ul>
<div class="hb-tip">Wandere beim Grasen ein Stück weiter, statt auf der Stelle zu stehen. Eine Herde sollte sich verteilen, damit nicht alle dasselbe Feld leer fressen.</div>`,
            en: `<p>Herbivores graze: stand on meadow, forest floor, soil or the like and hold <kbd>E</kbd>.</p>
<ul>
<li><strong>Not</strong> on rock, stone, sand, gravel, snow, ice, wood, roads or slopes steeper than about 35° – "Nothing grows here to graze."</li>
<li>The world is split into patches of about 25 × 25 m. Each holds food for roughly 12 bites (around 48 hunger). When it is empty: "Nothing left to graze here. Move on."</li>
<li>A grazed-out patch grows back fully in currently about 30 minutes.</li>
</ul>
<div class="hb-tip">Keep moving a little while grazing instead of standing in one spot. A herd should spread out so that not everyone empties the same patch.</div>`,
        },
        {
            id: 'food-foraging',
            title: { de: 'Futter suchen', en: 'Foraging' },
            tags: { de: 'wühlen wurzeln insekten allesfresser', en: 'root dig insects omnivore' },
            de: `<p>Allesfresser grasen nicht, sie <strong>suchen Futter</strong>: Wurzeln, Insekten und Maden im Boden. Es geht auf demselben Boden wie Grasen, mit <kbd>E</kbd> halten („Interaktionstaste halten zum Futtersuchen“).</p>
<ul>
<li>Es sättigt weniger als Grasen (knapp 2,5 Hunger pro Biss).</li>
<li>Jedes Feld von etwa 25 × 25 m gibt nur rund 7 Bissen her: „Hier ist nichts mehr zu finden. Zieh weiter.“ Es wächst in derzeit etwa 40 Minuten nach.</li>
<li>Der Vorrat ist getrennt vom Gras der Pflanzenfresser – ihr nehmt euch nichts weg.</li>
</ul>
<div class="hb-tip">Futtersuche ist die Notlösung. Satt wirst du als Allesfresser am besten mit Fleisch und <a href="#food-berries">Beeren</a>.</div>`,
            en: `<p>Omnivores do not graze, they <strong>forage</strong>: roots, insects and grubs in the ground. It works on the same ground as grazing, by holding <kbd>E</kbd> ("Hold the interact key to forage").</p>
<ul>
<li>It feeds less than grazing (almost 2.5 hunger per bite).</li>
<li>Each patch of about 25 × 25 m gives only around 7 bites: "Nothing left to find here. Move on." It grows back in currently about 40 minutes.</li>
<li>The stock is separate from the herbivores' grass – you take nothing from each other.</li>
</ul>
<div class="hb-tip">Foraging is the fallback. As an omnivore you fill up best on meat and <a href="#food-berries">berries</a>.</div>`,
        },
        {
            id: 'food-berries',
            title: { de: 'Beeren', en: 'Berries' },
            tags: { de: 'beerenbusch büsche allesfresser jahreszeit', en: 'berry bush bushes omnivore season' },
            de: `<p>In bestimmten <strong>Beerengebieten</strong> wachsen Beerenbüsche. Nur Allesfresser fressen dort (<kbd>E</kbd> halten, bis etwa 3 m Abstand). Beeren sind das nahrhafteste Futter: derzeit +7 Hunger pro Biss.</p>
<ul>
<li>Ein voller Busch reicht für etwa 12 Bissen. Leer gefressen („Du hast diesen Busch leer gefressen.“) verschwindet er und wächst nach einer Weile <strong>an anderer Stelle</strong> im Gebiet nach.</li>
<li>Ein angefressener Busch füllt sich mit der Zeit wieder auf.</li>
<li><strong>Jahreszeit:</strong> Im Herbst gibt es die meisten Büsche und sie wachsen am schnellsten nach, im Frühling weniger, im <strong>Winter</strong> kaum Büsche und nichts wächst nach (<a href="#world">Welt</a>).</li>
<li>Mit deinen <a href="#senses-mode">Sinnen</a> (<kbd>V</kbd>) siehst du Beerenbüsche in Reichweite als lila Markierung.</li>
<li>Beeren verkürzen das <a href="#disease-carrion-fever">Aasfieber</a>.</li>
</ul>`,
            en: `<p>Berry bushes grow in certain <strong>berry areas</strong>. Only omnivores eat there (hold <kbd>E</kbd>, within about 3 m). Berries are the most nourishing food: currently +7 hunger per bite.</p>
<ul>
<li>A full bush lasts about 12 bites. Eaten bare ("You have eaten this bush bare.") it disappears and after a while grows again <strong>somewhere else</strong> in the area.</li>
<li>A partly eaten bush fills up again over time.</li>
<li><strong>Season:</strong> autumn has the most bushes and they regrow fastest, spring fewer, <strong>winter</strong> hardly any bushes and nothing regrows (<a href="#world">World</a>).</li>
<li>With your <a href="#senses-mode">senses</a> (<kbd>V</kbd>) you see berry bushes in range as purple markers.</li>
<li>Berries shorten <a href="#disease-carrion-fever">carrion fever</a>.</li>
</ul>`,
        },
        {
            id: 'food-drinking',
            title: { de: 'Trinken', en: 'Drinking' },
            tags: { de: 'wasser trinken fluss see durst', en: 'water drink river lake thirst' },
            de: `<p>Trinken kannst du an jedem Gewässer – Fluss, See, Teich oder Sumpf.</p>
<ol>
<li>Stell dich ans Ufer, mit dem Kopf zum Wasser (oder ins flache Wasser).</li>
<li>„Interaktionstaste halten zum Trinken“ erscheint.</li>
<li><kbd>E</kbd> halten: derzeit +6 Durst pro Schluck, alle 2 Sekunden.</li>
</ol>
<p>Von 0 auf 100 dauert das gut eine halbe Minute. Bei 100 hörst du von selbst auf („Du hast keinen Durst mehr.“).</p>
<div class="hb-tip">Nach dem Schwimmen ist dein Fell eine Weile nass und du frierst schneller (<a href="#needs-temperature">Temperatur</a>). Im Winter lieber vom Ufer aus trinken.</div>`,
            en: `<p>You can drink at any body of water – river, lake, pond or swamp.</p>
<ol>
<li>Stand at the shore facing the water (or in shallow water).</li>
<li>"Hold the interact key to drink" appears.</li>
<li>Hold <kbd>E</kbd>: currently +6 thirst per sip, every 2 seconds.</li>
</ol>
<p>From 0 to 100 takes a bit over half a minute. At 100 you stop on your own ("You are no longer thirsty.").</p>
<div class="hb-tip">After swimming your fur stays wet for a while and you get cold faster (<a href="#needs-temperature">Temperature</a>). In winter better drink from the shore.</div>`,
        },
        {
            id: 'food-species',
            title: { de: 'Nahrung je Art', en: 'Food per species' },
            tags: { de: 'arten futter liste tabelle', en: 'species food list table' },
            de: `<table class="hb-table">
<thead><tr><th>Art</th><th>Frisst</th><th>Tipp</th></tr></thead>
<tbody>
<tr><td>Wolf, Kojote</td><td>Fleisch, Aas</td><td>Im Rudel große Beute reißen; der Kojote verträgt Aas besser.</td></tr>
<tr><td>Rotfuchs, Dachs</td><td>Fleisch, Aas</td><td>Kleinwild jagen; der Dachs verträgt Aas besser.</td></tr>
<tr><td>Puma, Panther</td><td>Fleisch, Aas</td><td>Aus dem Hinterhalt große Beute reißen.</td></tr>
<tr><td>Alligator</td><td>Fleisch, Aas</td><td>Am Wasser lauern; verträgt Aas gut.</td></tr>
<tr><td>Weißwedelhirsch, Wapiti, Elch, Bison, Wildpferd, Gabelbock, Dickhornschaf</td><td>Grasen</td><td>Wiesen und Täler suchen, weiterziehen.</td></tr>
<tr><td>Biber, Bisamratte</td><td>Grasen</td><td>Ufer und Sumpfwiesen.</td></tr>
<tr><td>Kaninchen, Eichhörnchen, Streifenhörnchen</td><td>Grasen</td><td>Beim Grasen nah an Deckung bleiben.</td></tr>
<tr><td>Schwarzbär, Grizzlybär, Wildschwein</td><td>Fleisch, Aas, Futter suchen, Beeren</td><td>Fast alles; Beerengebiete im Herbst nutzen.</td></tr>
<tr><td>Waschbär, Opossum, Stinktier, Ratte</td><td>Fleisch, Aas, Futter suchen, Beeren</td><td>Reste anderer Jäger fressen – sie vertragen Aas gut.</td></tr>
<tr><td>Gürteltier</td><td>Fleisch, Aas, Futter suchen, Beeren</td><td>Im Boden nach Maden suchen.</td></tr>
</tbody>
</table>
<p>Die Klassen und Stärken aller Arten stehen im Kapitel <a href="#species">Tierarten</a>.</p>`,
            en: `<table class="hb-table">
<thead><tr><th>Species</th><th>Eats</th><th>Tip</th></tr></thead>
<tbody>
<tr><td>Wolf, coyote</td><td>Meat, carrion</td><td>Take big prey as a pack; the coyote copes better with carrion.</td></tr>
<tr><td>Red fox, badger</td><td>Meat, carrion</td><td>Hunt small game; the badger copes better with carrion.</td></tr>
<tr><td>Cougar, panther</td><td>Meat, carrion</td><td>Take big prey from ambush.</td></tr>
<tr><td>Alligator</td><td>Meat, carrion</td><td>Lurk by the water; copes well with carrion.</td></tr>
<tr><td>Whitetail deer, elk, moose, bison, wild horse, pronghorn, bighorn sheep</td><td>Grazing</td><td>Look for meadows and valleys, keep moving.</td></tr>
<tr><td>Beaver, muskrat</td><td>Grazing</td><td>Shores and marsh meadows.</td></tr>
<tr><td>Rabbit, squirrel, chipmunk</td><td>Grazing</td><td>Stay close to cover while grazing.</td></tr>
<tr><td>Black bear, grizzly bear, wild boar</td><td>Meat, carrion, foraging, berries</td><td>Almost anything; use berry areas in autumn.</td></tr>
<tr><td>Raccoon, opossum, skunk, rat</td><td>Meat, carrion, foraging, berries</td><td>Eat other hunters' leftovers – they cope well with carrion.</td></tr>
<tr><td>Armadillo</td><td>Meat, carrion, foraging, berries</td><td>Dig for grubs in the ground.</td></tr>
</tbody>
</table>
<p>Classes and strengths of every species are in the <a href="#species">Species</a> chapter.</p>`,
        },
    ],
});
