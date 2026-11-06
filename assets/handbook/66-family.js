window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'family',
    order: 66,
    icon: 'family',
    title: { de: 'Familie und Nachwuchs', en: 'Family and offspring' },
    sections: [
        {
            id: 'family-overview',
            title: { de: 'Überblick: das Familienbuch (O)', en: 'Overview: the family book (O)' },
            tags: { de: 'familienbuch familie nachwuchs geschlecht weibchen männchen brunft', en: 'family book offspring sex female male rut' },
            de: `<p>In der Wildnis geht das Leben weiter: Zwei Tiere derselben Art – ein <strong>Weibchen</strong> und ein <strong>Männchen</strong> – können sich paaren und bekommen einen Wurf. Die Jungtiere können andere Spieler (oder du selbst) als neue Tiere übernehmen. So entstehen Blutlinien über viele Generationen.</p>
<p>Alles dazu findest du im <strong>Familienbuch</strong> (<kbd>O</kbd>) mit den Reitern:</p>
<ul>
<li><strong>Paarung</strong> – Voraussetzungen mit ✔ und ✘, Partner in der Nähe, Anfragen</li>
<li><strong>Würfe</strong> – deine Würfe und ihre Jungtiere</li>
<li><strong>Begleiter</strong> – deine <a href="#companion">Begleiter</a> und das Anwerben</li>
<li><strong>Stammbaum</strong> – deine <a href="#family-lineage">Blutlinie</a></li>
</ul>
<p>Das <strong>Geschlecht</strong> wählst du beim Erstellen deines Tiers (siehe <a href="#start">Erste Schritte</a>). Ohne gewähltes Geschlecht kann ein Tier sich nicht paaren.</p>`,
            en: `<p>Life goes on in the wild: two animals of the same species – a <strong>female</strong> and a <strong>male</strong> – can pair and have a litter. Other players (or you yourself) can take over the juveniles as new animals. This is how bloodlines grow over many generations.</p>
<p>You find everything in the <strong>family book</strong> (<kbd>O</kbd>) with the tabs:</p>
<ul>
<li><strong>Pairing</strong> – conditions with ✔ and ✘, partners nearby, requests</li>
<li><strong>Litters</strong> – your litters and their juveniles</li>
<li><strong>Companions</strong> – your <a href="#companion">companions</a> and recruiting</li>
<li><strong>Family tree</strong> – your <a href="#family-lineage">bloodline</a></li>
</ul>
<p>You choose the <strong>sex</strong> when you create your animal (see <a href="#start">First steps</a>). Without a chosen sex an animal cannot pair.</p>`,
        },
        {
            id: 'family-mating',
            title: { de: 'Paarung', en: 'Pairing' },
            tags: { de: 'paaren paarung anfragen brunftzeit herbst revier abklingzeit', en: 'pair mating request rutting season autumn territory cooldown' },
            de: `<p><strong>Voraussetzungen</strong> (das Familienbuch hakt sie ab):</p>
<ul>
<li>ein Weibchen und ein Männchen derselben Art, beide mit gewähltem Geschlecht</li>
<li>beide <strong>erwachsen</strong> – keine Jungtiere, keine alten Tiere (siehe <a href="#life">Lebenszyklus</a>)</li>
<li><strong>Brunftzeit:</strong> nur im <strong>Herbst</strong> (1. September bis 30. November, siehe <a href="#world-seasons">Jahreszeiten</a>)</li>
<li>im <strong>Revier</strong> der Gruppe von einem der beiden (siehe <a href="#territory">Reviere</a>)</li>
<li>erholt seit dem letzten Wurf: Weibchen 72 Stunden, Männchen 24 Stunden (echte Zeit)</li>
<li>Seite an Seite stehen (etwa 2,5 m)</li>
</ul>
<p><strong>So geht es:</strong></p>
<ol>
<li>Einer öffnet das Familienbuch (<kbd>O</kbd>), Reiter <em>Paarung</em>, und klickt beim Partner unter <em>Partner in der Nähe</em> auf <em>Anfragen</em>.</li>
<li>Der andere bekommt eine Meldung und klickt in seinem Familienbuch innerhalb von 60 Sekunden auf <em>Annehmen</em>.</li>
<li>Beide legen sich nieder, der Bildschirm wird dunkler: „Die Natur nimmt ihren Lauf …“ – derzeit 20 Sekunden.</li>
<li>Geht der Moment ungestört zu Ende, ist die Paarung erfolgreich: Beide bekommen 300 EP, und der Wurf ist unterwegs.</li>
</ol>
<div class="hb-warn">Während der Paarung seid ihr angreifbar. Ein Treffer, Niedergestreckt-werden, Aufstehen oder Weggehen bricht sie ab – dann gibt es keinen Wurf, keine EP und keine Wartezeit. Sucht euch einen ruhigen Platz, am besten eure <a href="#territory-dens">Höhle</a> (das bringt Höhlen-Ruhm).</div>
<p>Eine Paarung ist anstrengend: Danach sinken Hunger, Durst und Energie beider Tiere spürbar, beim Weibchen stärker (siehe <a href="#needs">Bedürfnisse</a>).</p>`,
            en: `<p><strong>Conditions</strong> (the family book ticks them off):</p>
<ul>
<li>a female and a male of the same species, both with a chosen sex</li>
<li>both <strong>adult</strong> – no juveniles, no old animals (see <a href="#life">Life cycle</a>)</li>
<li><strong>rutting season:</strong> only in <strong>autumn</strong> (1 September to 30 November, see <a href="#world-seasons">Seasons</a>)</li>
<li>inside the <strong>territory</strong> of the group of either of the two (see <a href="#territory">Territories</a>)</li>
<li>rested since the last litter: female 72 hours, male 24 hours (real time)</li>
<li>standing side by side (about 2.5 m)</li>
</ul>
<p><strong>How it works:</strong></p>
<ol>
<li>One of you opens the family book (<kbd>O</kbd>), tab <em>Pairing</em>, and clicks <em>Ask</em> next to the partner under <em>Partners nearby</em>.</li>
<li>The other gets a message and clicks <em>Accept</em> in their family book within 60 seconds.</li>
<li>Both lie down and the screen dims: "Nature takes its course …" – currently 20 seconds.</li>
<li>If the moment ends undisturbed, the pairing succeeds: both get 300 XP and the litter is on its way.</li>
</ol>
<div class="hb-warn">During the pairing you can be attacked. A hit, going down, getting up or walking away breaks it off – then there is no litter, no XP and no waiting time. Find a quiet spot, ideally your <a href="#territory-dens">den</a> (that brings den fame).</div>
<p>Pairing is hard work: afterwards hunger, thirst and energy of both animals drop noticeably, the female's more (see <a href="#needs">Needs</a>).</p>`,
        },
        {
            id: 'family-wild-partners',
            title: { de: 'Wilde Partner und Begleiter', en: 'Wild partners and companions' },
            tags: { de: 'wildtier paaren wild begleiter partner', en: 'wild animal pair wild companion partner' },
            de: `<p>Du brauchst nicht unbedingt einen zweiten Spieler:</p>
<ul>
<li><strong>Wilde Tiere deiner Art</strong> im Umkreis von etwa 30 m erscheinen im Familienbuch als „… (wild)“. Mit <em>Paaren</em> geht es sofort, ohne Anfrage – aber <strong>nur im eigenen Revier</strong>. Die übrigen Regeln gelten für dich.</li>
<li><strong>Eigene Begleiter</strong> kommen infrage, sobald sie ausgewachsen sind („… (Begleiter)“). Begleiter anderer Spieler und legendäre Tiere nie.</li>
</ul>
<p>Ein wildes Elternteil hat keine Werte, die es vererben könnte: Das Jungtier bekommt ein zufälliges Fell, aber keinen Attribut-Bonus von ihm. Die Blutlinie ist deine.</p>`,
            en: `<p>You do not necessarily need a second player:</p>
<ul>
<li><strong>Wild animals of your species</strong> within about 30 m show in the family book as "… (wild)". <em>Pair</em> works right away, without a request – but <strong>only inside your own territory</strong>. The other rules apply to you.</li>
<li><strong>Your own companions</strong> qualify once they are grown ("… (companion)"). Other players' companions and legendary animals never do.</li>
</ul>
<p>A wild parent has nothing it could pass on: the juvenile gets a random coat but no attribute bonus from it. The bloodline is yours.</p>`,
        },
        {
            id: 'family-litter',
            title: { de: 'Der Wurf', en: 'The litter' },
            tags: { de: 'wurf jungtiere anzahl wurfgröße geburt', en: 'litter juveniles number litter size birth' },
            de: `<p>Nach der Paarung bleibt der Wurf erst einmal verdeckt: Derzeit nach etwa <strong>60 Minuten</strong> zeigt sich, wie viele Jungtiere es werden, welches Geschlecht und welches Erbe sie haben. Eltern, die online sind, bekommen dann eine Meldung. Bis dahin lassen sich die Jungtiere weder übernehmen noch reservieren.</p>
<table class="hb-table">
<thead><tr><th>Jungtiere je Wurf</th><th>Arten</th></tr></thead>
<tbody>
<tr><td>1</td><td>Wapiti, Bison, Wildpferd, Dickhornschaf</td></tr>
<tr><td>1–2</td><td>Weißwedelhirsch, Grizzlybär, Elch, Gabelbock</td></tr>
<tr><td>1–3</td><td>Puma, Schwarzbär, Panther</td></tr>
<tr><td>1–4</td><td>Dachs</td></tr>
<tr><td>2–4</td><td>Rotfuchs, Biber</td></tr>
<tr><td>2–5</td><td>Wolf, Kojote, Wildschwein, Waschbär, Eichhörnchen</td></tr>
<tr><td>3–6</td><td>Alligator, Stinktier, Streifenhörnchen</td></tr>
<tr><td>4</td><td>Gürteltier (immer Vierlinge)</td></tr>
<tr><td>4–7</td><td>Bisamratte</td></tr>
<tr><td>4–8</td><td>Opossum, Kaninchen</td></tr>
<tr><td>5–10</td><td>Ratte</td></tr>
</tbody>
</table>
<p>Im Reiter <em>Würfe</em> siehst du jeden Wurf mit Geburtsdatum, je Jungtier Geschlecht, Alter, Erbe und Status („wartet auf einen Spieler“, „lebt als … weiter“ …).</p>`,
            en: `<p>After the pairing the litter stays hidden at first: currently after about <strong>60 minutes</strong> it shows how many juveniles there are, their sex and what they inherit. Parents who are online get a message then. Until that moment the juveniles can neither be taken over nor reserved.</p>
<table class="hb-table">
<thead><tr><th>Juveniles per litter</th><th>Species</th></tr></thead>
<tbody>
<tr><td>1</td><td>elk, bison, wild horse, bighorn sheep</td></tr>
<tr><td>1–2</td><td>whitetail deer, grizzly bear, moose, pronghorn</td></tr>
<tr><td>1–3</td><td>cougar, black bear, panther</td></tr>
<tr><td>1–4</td><td>badger</td></tr>
<tr><td>2–4</td><td>red fox, beaver</td></tr>
<tr><td>2–5</td><td>wolf, coyote, wild boar, raccoon, squirrel</td></tr>
<tr><td>3–6</td><td>alligator, skunk, chipmunk</td></tr>
<tr><td>4</td><td>armadillo (always quadruplets)</td></tr>
<tr><td>4–7</td><td>muskrat</td></tr>
<tr><td>4–8</td><td>opossum, rabbit</td></tr>
<tr><td>5–10</td><td>rat</td></tr>
</tbody>
</table>
<p>The <em>Litters</em> tab shows every litter with its birth date and, per juvenile, sex, age, inheritance and status ("waiting for a player", "lives on as …" …).</p>`,
        },
        {
            id: 'family-cubs',
            title: { de: 'Jungtiere übernehmen', en: 'Taking over juveniles' },
            tags: { de: 'jungtier übernehmen reservieren selbst spielen an spieler geben charakterauswahl', en: 'juvenile take over reserve play it myself give to player character selection' },
            de: `<p>Jedes Jungtier wartet darauf, dass ein Spieler es als <strong>neues Tier</strong> übernimmt – in der Charakterauswahl im Bereich <strong>„Jungtiere“</strong> (<em>Jungtier übernehmen</em>, auf einem freien Platz).</p>
<p><strong>Wer darf übernehmen?</strong></p>
<ol>
<li>Zuerst nur die Accounts der Eltern – und wem ein Elternteil das Jungtier reserviert hat.</li>
<li>Nach 24 Stunden auch alle, die ein Tier im Rudel eines Elternteils haben.</li>
<li>Nach weiteren 24 Stunden alle.</li>
</ol>
<p>Nimmt es nach 7 Tagen niemand, geht das Jungtier eigene Wege.</p>
<p><strong>Reservieren</strong> (Familienbuch → <em>Würfe</em>): <em>Selbst spielen</em> legt es für deinen Account zurück, <em>An Spieler geben</em> für einen anderen Spieler, <em>Reservierung aufheben</em> gibt es wieder frei. Mit <em>Als Begleiter aufziehen</em> nimmt ein Elternteil es als <a href="#companion">Begleiter</a> mit – übernehmbar bleibt es trotzdem.</p>
<p><strong>Das neue Tier</strong> startet als Jungtier mit Art und Geschlecht aus dem Wurf, gehört zur Blutlinie der Eltern und bringt sein <a href="#family-inheritance">Erbe</a> mit. Es beginnt dort, wo es gerade ist: bei einem Begleiter-Jungtier an dessen Platz, sonst neben einem Elternteil. Wurde der Wurf in einem Rudel gezeugt, tritt es diesem sofort bei (siehe <a href="#pack-born">Im Rudel geboren</a>).</p>
<p><strong>Aufwachsen:</strong> Ein Jungtier ist anfangs kleiner und schwächer, heilt und lernt aber schneller. Nach derzeit etwa 5 Stunden Spielzeit ist es erwachsen. Bis dahin kann es sich nicht paaren und allein kein Revier einnehmen. Mehr dazu unter <a href="#life">Lebenszyklus</a>.</p>`,
            en: `<p>Every juvenile waits for a player to take it over as a <strong>new animal</strong> – in the character selection under <strong>"Juveniles"</strong> (<em>Take over a juvenile</em>, on a free slot).</p>
<p><strong>Who may take it over?</strong></p>
<ol>
<li>At first only the parents' accounts – and whoever a parent reserved the juvenile for.</li>
<li>After 24 hours also everyone with an animal in a parent's pack.</li>
<li>After another 24 hours everyone.</li>
</ol>
<p>If nobody takes it within 7 days, the juvenile goes its own way.</p>
<p><strong>Reserving</strong> (family book → <em>Litters</em>): <em>Play it myself</em> keeps it for your account, <em>Give to player</em> for another player, <em>Cancel reservation</em> frees it again. With <em>Raise as companion</em> a parent takes it along as a <a href="#companion">companion</a> – it can still be taken over.</p>
<p><strong>The new animal</strong> starts as a juvenile with the species and sex from the litter, belongs to the parents' bloodline and brings its <a href="#family-inheritance">inheritance</a>. It starts where it is: a companion juvenile at its spot, otherwise next to a parent. If the litter was conceived in a pack, it joins that pack right away (see <a href="#pack-born">Born into the pack</a>).</p>
<p><strong>Growing up:</strong> a juvenile is smaller and weaker at first, but heals and learns faster. After currently about 5 hours of play it is an adult. Until then it cannot pair and cannot take a territory on its own. More under <a href="#life">Life cycle</a>.</p>`,
        },
        {
            id: 'family-inheritance',
            title: { de: 'Erbe: Fell und Attribute', en: 'Inheritance: coat and attributes' },
            tags: { de: 'erbe vererbung fell attribut bonus geerbt', en: 'inheritance coat fur attribute bonus inherited' },
            de: `<p>Ein übernommenes Jungtier erbt von seinen Eltern:</p>
<ul>
<li><strong>Fell:</strong> das Fell eines der beiden Eltern (beim Hirsch zählt nur das gleichgeschlechtliche Elternteil). Ein wildes Elternteil bringt ein zufälliges Fell mit.</li>
<li><strong>Attribut-Bonus:</strong> 1 Punkt in dem Attribut, in das ein zufällig gewähltes Elternteil die meisten Punkte gesteckt hat.</li>
<li><strong>Stärkere Blutlinien:</strong> Mit 50 % Chance gibt jedes Elternteil zusätzlich seinen eigenen geerbten Bonus weiter – höchstens 3 geerbte Punkte insgesamt.</li>
</ul>
<p>Geerbte Punkte kommen zu deinen eigenen 10 möglichen Punkten je Attribut dazu und stehen grün im Charaktermenü (siehe <a href="#progress-attributes">Attribute</a>). Stufe, Fähigkeiten und Ruhm erbt ein Jungtier nicht.</p>`,
            en: `<p>A juvenile that is taken over inherits from its parents:</p>
<ul>
<li><strong>Coat:</strong> the coat of one of the two parents (for deer only the parent of the same sex counts). A wild parent brings a random coat.</li>
<li><strong>Attribute bonus:</strong> 1 point in the attribute a randomly chosen parent put the most points into.</li>
<li><strong>Stronger bloodlines:</strong> with a 50 % chance each parent also passes on its own inherited bonus – at most 3 inherited points in total.</li>
</ul>
<p>Inherited points come on top of your own 10 possible points per attribute and show green in the character menu (see <a href="#progress-attributes">Attributes</a>). A juvenile does not inherit level, skills or fame.</p>`,
        },
        {
            id: 'family-lineage',
            title: { de: 'Blutlinie und Stammbaum', en: 'Bloodline and family tree' },
            tags: { de: 'blutlinie stammbaum generation gründerin umbenennen ruhm', en: 'bloodline family tree generation founder rename fame' },
            de: `<p>Jeder Wurf gehört zur Blutlinie der Mutter – hat sie keine, zu der des Vaters. Haben beide keine, gründet der Wurf eine neue Blutlinie, benannt nach der Mutter (sie ist die Gründerin, die Eltern sind die erste Generation). Jedes übernommene Jungtier steht eine Generation unter seinen Eltern.</p>
<p>Der Reiter <em>Stammbaum</em> im Familienbuch zeigt die Blutlinie mit Generationen, lebenden und gefallenen Mitgliedern und dem <strong>Ruhm der Blutlinie</strong> – der Summe des Ruhms aller Mitglieder, auch der gefallenen. Der Spieler der Gründerin kann die Blutlinie umbenennen (3 bis 32 Zeichen).</p>`,
            en: `<p>Every litter belongs to the mother's bloodline – if she has none, to the father's. If neither has one, the litter founds a new bloodline named after the mother (she is the founder, the parents are the first generation). Every juvenile taken over stands one generation below its parents.</p>
<p>The <em>Family tree</em> tab of the family book shows the bloodline with its generations, living and fallen members and the <strong>fame of the bloodline</strong> – the sum of the fame of all members, the fallen included. The founder's player can rename the bloodline (3 to 32 characters).</p>`,
        },
        {
            id: 'family-inbreeding',
            title: { de: 'Inzucht', en: 'Inbreeding' },
            tags: { de: 'inzucht verwandt geschwister eltern schwächer', en: 'inbreeding related siblings parents weaker' },
            de: `<p>Eng verwandte Tiere dürfen sich paaren, werden aber vorher deutlich gewarnt („Enge Verwandte!“). Der ganze Wurf trägt dann ein dauerhaftes <strong>Inzucht-Zeichen</strong>: Jedes übernommene Jungtier bleibt sein Leben lang schwächer.</p>
<table class="hb-table">
<thead><tr><th>Verwandtschaft</th><th>Zeichen</th><th>Wirkung (derzeit)</th></tr></thead>
<tbody>
<tr><td>Elternteil und Kind, Vollgeschwister</td><td>Inzucht</td><td>max. Gesundheit und Ausdauer-Erholung −15 %, Schaden −10 %</td></tr>
<tr><td>Halbgeschwister, Tante/Onkel und Nichte/Neffe</td><td>Leichte Inzucht</td><td>max. Gesundheit und Ausdauer-Erholung −8 %, Schaden −5 %</td></tr>
</tbody>
</table>
<p>Großeltern und Cousins zählen nicht. Wildtiere und angeworbene Begleiter sind nie verwandt; ein aus einem eigenen Wurf aufgezogener Begleiter zählt mit den Eltern seines Wurfs. Ein Tier mit Inzucht-Zeichen trägt ein rotes Abzeichen im Charaktermenü.</p>`,
            en: `<p>Closely related animals may pair, but they get a clear warning first ("Close relatives!"). The whole litter then carries a lasting <strong>inbreeding mark</strong>: every juvenile taken over stays weaker for life.</p>
<table class="hb-table">
<thead><tr><th>Relation</th><th>Mark</th><th>Effect (currently)</th></tr></thead>
<tbody>
<tr><td>parent and child, full siblings</td><td>Inbred</td><td>max. health and stamina recovery −15 %, damage −10 %</td></tr>
<tr><td>half siblings, aunt/uncle and niece/nephew</td><td>Slightly inbred</td><td>max. health and stamina recovery −8 %, damage −5 %</td></tr>
</tbody>
</table>
<p>Grandparents and cousins do not count. Wild animals and recruited companions are never related; a companion raised from an own litter counts with the parents of its litter. An animal with an inbreeding mark carries a red badge in the character menu.</p>`,
        },
    ],
});
