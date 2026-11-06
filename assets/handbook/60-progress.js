window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'progress',
    order: 60,
    icon: 'progress',
    title: { de: 'Fortschritt', en: 'Progress' },
    sections: [
        {
            id: 'progress-overview',
            title: { de: 'Überblick: Erfahrung, Stufen, Ruhm', en: 'Overview: experience, levels, fame' },
            tags: { de: 'ep erfahrung level stufe aufstieg charaktermenü', en: 'xp experience level up character menu' },
            de: `<p>Jedes deiner Tiere sammelt eigenen Fortschritt. Alles findest du im <strong>Charaktermenü</strong> (<kbd>J</kbd>) mit den Reitern <em>Übersicht</em>, <em>Attribute</em>, <em>Fähigkeiten</em>, <em>Tierkunde</em> und <em>Einstellungen</em>.</p>
<ul>
<li><strong>Erfahrung (EP)</strong> bringt dich Stufe um Stufe weiter – höchstens bis <strong>Stufe 30</strong>.</li>
<li>Jeder Aufstieg gibt dir <strong>1 Attributpunkt</strong>, jede gerade Stufe (2, 4, 6 …) zusätzlich <strong>1 Fähigkeitspunkt</strong>.</li>
<li><strong>Ruhm</strong> zeigt, wie bekannt dein Tier in der Wildnis ist, und bringt dir einen Ruf (Titel).</li>
</ul>
<p>Fortschritt gehört immer zu <em>einem</em> Tier. Stirbt es, ist auch sein Fortschritt fort (siehe <a href="#life">Lebenszyklus</a>). Was ein Jungtier von seinen Eltern erbt, steht unter <a href="#family-inheritance">Erbe</a>.</p>
<div class="hb-tip">Ein Stufenaufstieg erscheint als großes Banner in der Bildschirmmitte. Danach gleich <kbd>J</kbd> öffnen und die neuen Punkte verteilen.</div>`,
            en: `<p>Each of your animals collects its own progress. You find everything in the <strong>character menu</strong> (<kbd>J</kbd>) with the tabs <em>Overview</em>, <em>Attributes</em>, <em>Skills</em>, <em>Animal lore</em> and <em>Settings</em>.</p>
<ul>
<li><strong>Experience (XP)</strong> takes you up level by level – up to <strong>level 30</strong>.</li>
<li>Every level-up gives you <strong>1 attribute point</strong>, every even level (2, 4, 6 …) also <strong>1 skill point</strong>.</li>
<li><strong>Fame</strong> shows how well known your animal is in the wild and earns it a reputation (title).</li>
</ul>
<p>Progress always belongs to <em>one</em> animal. When it dies, its progress is gone as well (see <a href="#life">Life cycle</a>). What a juvenile inherits from its parents is explained under <a href="#family-inheritance">Inheritance</a>.</p>
<div class="hb-tip">A level-up shows as a large banner in the middle of the screen. Open <kbd>J</kbd> right away and spend your new points.</div>`,
        },
        {
            id: 'progress-xp',
            title: { de: 'Erfahrung sammeln', en: 'Earning experience' },
            tags: { de: 'ep quellen jagen fressen trinken überleben entdecken aufhelfen', en: 'xp sources hunting eating drinking survival explore help up' },
            de: `<p>Erfahrung bekommst du fürs ganz normale Leben in der Wildnis. Derzeit etwa:</p>
<table class="hb-table">
<thead><tr><th>Was</th><th>EP</th></tr></thead>
<tbody>
<tr><td>Kleinwild erlegen (Hasen, Nager …)</td><td>5</td></tr>
<tr><td>Wildschwein erlegen</td><td>15</td></tr>
<tr><td>Großwild erlegen (Hirsch, Wapiti, Bison …)</td><td>20</td></tr>
<tr><td>Hundeartige erlegen (Wolf, Kojote, Fuchs)</td><td>30</td></tr>
<tr><td>Großkatze erlegen</td><td>35</td></tr>
<tr><td>Bär oder Alligator erlegen</td><td>40</td></tr>
<tr><td>Fressen</td><td>je Bissen ein wenig (Fleisch am meisten, Aas am wenigsten)</td></tr>
<tr><td>Trinken</td><td>1 je Schluck</td></tr>
<tr><td>Am Leben bleiben</td><td>10 alle 5 Minuten in der Wildnis</td></tr>
<tr><td>Eine Region zum ersten Mal betreten</td><td>50</td></tr>
<tr><td>Einem niedergestreckten Tier aufhelfen</td><td>15 (dasselbe Tier erst wieder nach 10 Minuten)</td></tr>
<tr><td>Alpha-Duell gewinnen</td><td>50</td></tr>
</tbody>
</table>
<p>Dazu kommen größere Brocken aus <a href="#quests">Quests</a>, einer erfolgreichen <a href="#family-mating">Paarung</a> (300 EP für jedes Elternteil), vertriebenen <a href="#territory-npc">wilden Rivalenrudeln</a>, <a href="#events-legendary">legendären Tieren</a> und <a href="#events-community">Gemeinschaftszielen</a>.</p>
<p><strong>Mehr EP:</strong> Jungtiere lernen schneller (anfangs +50 %, bis zum Erwachsenwerden abnehmend), mit einem <a href="#mentor">Mentor</a> in der Nähe gibt es +10 %, und das Gemeinschaftsziel kann allen eine Woche lang +10 % bringen.</p>
<div class="hb-tip">Eine neue Region zählt nur, wenn seit der letzten Entdeckung etwa eine Minute vergangen ist und du ein gutes Stück (rund 150 m) weitergezogen bist. Wie viele Regionen du schon kennst, zeigt die Übersicht in <kbd>J</kbd>.</div>`,
            en: `<p>You earn experience simply by living in the wild. Currently about:</p>
<table class="hb-table">
<thead><tr><th>What</th><th>XP</th></tr></thead>
<tbody>
<tr><td>Killing small game (rabbits, rodents …)</td><td>5</td></tr>
<tr><td>Killing a boar</td><td>15</td></tr>
<tr><td>Killing big game (deer, elk, bison …)</td><td>20</td></tr>
<tr><td>Killing a canine (wolf, coyote, fox)</td><td>30</td></tr>
<tr><td>Killing a big cat</td><td>35</td></tr>
<tr><td>Killing a bear or alligator</td><td>40</td></tr>
<tr><td>Eating</td><td>a little per bite (meat most, carrion least)</td></tr>
<tr><td>Drinking</td><td>1 per sip</td></tr>
<tr><td>Staying alive</td><td>10 every 5 minutes in the wild</td></tr>
<tr><td>Entering a region for the first time</td><td>50</td></tr>
<tr><td>Helping a downed animal up</td><td>15 (the same animal again only after 10 minutes)</td></tr>
<tr><td>Winning an alpha duel</td><td>50</td></tr>
</tbody>
</table>
<p>Bigger chunks come from <a href="#quests">quests</a>, a successful <a href="#family-mating">pairing</a> (300 XP for each parent), driving off <a href="#territory-npc">wild rival packs</a>, <a href="#events-legendary">legendary animals</a> and <a href="#events-community">community goals</a>.</p>
<p><strong>More XP:</strong> juveniles learn faster (+50 % at first, fading until they are grown), a <a href="#mentor">mentor</a> nearby gives +10 %, and the community goal can give everyone +10 % for a week.</p>
<div class="hb-tip">A new region only counts if about a minute has passed since your last discovery and you have moved on a good bit (around 150 m). The overview in <kbd>J</kbd> shows how many regions you know.</div>`,
        },
        {
            id: 'progress-levels',
            title: { de: 'Stufen', en: 'Levels' },
            tags: { de: 'level stufe ep kurve höchststufe', en: 'level curve max level' },
            de: `<p>Jede Stufe kostet etwas mehr Erfahrung als die vorige. Ungefähr brauchst du insgesamt:</p>
<table class="hb-table">
<thead><tr><th>Stufe</th><th>EP insgesamt</th></tr></thead>
<tbody>
<tr><td>2</td><td>ca. 280</td></tr>
<tr><td>5</td><td>ca. 2.700</td></tr>
<tr><td>10</td><td>ca. 14.000</td></tr>
<tr><td>15</td><td>ca. 37.700</td></tr>
<tr><td>20</td><td>ca. 76.000</td></tr>
<tr><td>25</td><td>ca. 131.000</td></tr>
<tr><td>30 (Höchststufe)</td><td>ca. 205.000</td></tr>
</tbody>
</table>
<p>Auf Stufe 30 steht „Höchste Stufe erreicht“; weitere EP bringen keinen Aufstieg mehr. Deine Stufe bestimmt auch, welche <a href="#quests-daily">Tages- und Wochenquests</a> du bekommst und wann neue <a href="#quests-side">Nebenquests</a> frei werden.</p>`,
            en: `<p>Each level costs a little more experience than the one before. In total you need roughly:</p>
<table class="hb-table">
<thead><tr><th>Level</th><th>Total XP</th></tr></thead>
<tbody>
<tr><td>2</td><td>about 280</td></tr>
<tr><td>5</td><td>about 2,700</td></tr>
<tr><td>10</td><td>about 14,000</td></tr>
<tr><td>15</td><td>about 37,700</td></tr>
<tr><td>20</td><td>about 76,000</td></tr>
<tr><td>25</td><td>about 131,000</td></tr>
<tr><td>30 (max level)</td><td>about 205,000</td></tr>
</tbody>
</table>
<p>At level 30 the menu says "Maximum level reached"; more XP gives no further level-ups. Your level also decides which <a href="#quests-daily">daily and weekly quests</a> you get and when new <a href="#quests-side">side quests</a> unlock.</p>`,
        },
        {
            id: 'progress-attributes',
            title: { de: 'Attribute', en: 'Attributes' },
            tags: { de: 'attributpunkte stärke ausdauer geschwindigkeit sinne tarnung konstitution verteilen', en: 'attribute points strength stamina speed senses stealth constitution' },
            de: `<p>Im Reiter <em>Attribute</em> (<kbd>J</kbd>) verteilst du deine freien Punkte. Jedes Attribut kann höchstens <strong>10 eigene Punkte</strong> bekommen; dazu kommen bis zu 3 <a href="#family-inheritance">geerbte</a> Punkte (grün markiert). Die beigen Grundwerte beschreiben nur deine Art.</p>
<table class="hb-table">
<thead><tr><th>Attribut</th><th>Wirkung je Punkt</th><th>bei 10 Punkten</th></tr></thead>
<tbody>
<tr><td>Stärke</td><td>Schaden +3 % (gegen Spieler und Wildtiere)</td><td>+30 %</td></tr>
<tr><td>Ausdauer</td><td>Ausdauer-Erholung +3 %, Verbrauch beim Sprinten und Angreifen −2,5 %</td><td>+30 % / −25 %</td></tr>
<tr><td>Geschwindigkeit</td><td>Lauftempo +1,5 %</td><td>+15 %</td></tr>
<tr><td>Sinne</td><td>Sinnesreichweite +3 %, Sinnesdauer +2 %</td><td>+30 % / +20 %</td></tr>
<tr><td>Tarnung</td><td>Wildtiere bemerken dich 3,5 % später</td><td>−35 %</td></tr>
<tr><td>Konstitution</td><td>Max. Gesundheit +3 %, Blutungsschaden −3 %</td><td>+30 % / −30 %</td></tr>
</tbody>
</table>
<p>Kleine Tiere werden ohnehin später bemerkt: Nager und Kaninchen deutlich, fuchsgroße Tiere (Fuchs, Kojote, Waschbär, Dachs …) etwas.</p>
<p>Unter <em>Boni und Mali</em> in der Übersicht siehst du, was am Ende zusammenkommt – aus Attributen, Fähigkeiten, Alter, Revier, Krankheiten und kurzen Effekten. Jeder Wert hat feste Ober- und Untergrenzen, damit niemand übermächtig wird.</p>
<div class="hb-warn">Verteilte Punkte lassen sich nicht zurücknehmen. Überleg dir vorher, was zu deiner Art und deinem Spielstil passt (siehe <a href="#species">Arten</a>).</div>`,
            en: `<p>In the <em>Attributes</em> tab (<kbd>J</kbd>) you spend your free points. Each attribute can take at most <strong>10 points of your own</strong>; up to 3 <a href="#family-inheritance">inherited</a> points come on top (marked green). The beige base values only describe your species.</p>
<table class="hb-table">
<thead><tr><th>Attribute</th><th>Effect per point</th><th>at 10 points</th></tr></thead>
<tbody>
<tr><td>Strength</td><td>damage +3 % (against players and wildlife)</td><td>+30 %</td></tr>
<tr><td>Stamina</td><td>stamina recovery +3 %, stamina used by sprints and attacks −2.5 %</td><td>+30 % / −25 %</td></tr>
<tr><td>Speed</td><td>movement speed +1.5 %</td><td>+15 %</td></tr>
<tr><td>Senses</td><td>sense range +3 %, sense duration +2 %</td><td>+30 % / +20 %</td></tr>
<tr><td>Stealth</td><td>wild animals notice you 3.5 % later</td><td>−35 %</td></tr>
<tr><td>Constitution</td><td>max. health +3 %, bleeding damage −3 %</td><td>+30 % / −30 %</td></tr>
</tbody>
</table>
<p>Small animals are noticed later anyway: rodents and rabbits clearly, fox-sized animals (fox, coyote, raccoon, badger …) a little.</p>
<p>Under <em>Bonuses and penalties</em> in the overview you see what adds up in the end – from attributes, skills, age, territory, diseases and short effects. Every value has fixed upper and lower limits so nobody becomes overpowered.</p>
<div class="hb-warn">Points you spend cannot be taken back. Think first about what suits your species and play style (see <a href="#species">Species</a>).</div>`,
        },
        {
            id: 'progress-skills',
            title: { de: 'Fähigkeiten (Skillbaum)', en: 'Skills (skill tree)' },
            tags: { de: 'skills fähigkeitspunkte skillbaum zweite fähigkeit x revierkunde', en: 'skill points skill tree second ability x territorial' },
            de: `<p>Im Reiter <em>Fähigkeiten</em> (<kbd>J</kbd>) lernst du mit Fähigkeitspunkten dauerhafte Verbesserungen. Eine Fähigkeit kostet 1 bis 3 Punkte; manche verlangen zuerst eine andere („Benötigt: …“). Bis Stufe 30 bekommst du 15 Punkte – das reicht nicht für alles, du musst also wählen.</p>
<p><strong>Klassenbaum</strong> – je nachdem, ob deine Art Fleischfresser, Pflanzenfresser oder Allesfresser ist:</p>
<table class="hb-table">
<thead><tr><th>Klasse</th><th>Fähigkeiten (Kosten)</th></tr></thead>
<tbody>
<tr><td>Fleischfresser</td><td>Scharfer Biss (1, Schaden +5 %), Ausdauerläufer (1, Ausdauer-Erholung +10 %), Hinterhalt (2, Schaden +8 %), Unermüdlich (2, Hunger −10 %), Spitzenräuber (3, Gesundheit +10 %, Schaden +5 %)</td></tr>
<tr><td>Pflanzenfresser</td><td>Flink (1, Tempo +3 %), Wachsam (1, Sinnesreichweite +15 %), Dicke Haut (2, Blutung −20 %), Marathon (2, Ausdauer-Erholung +15 %), Überlebender (3, Gesundheit +12 %, Regeneration +20 %)</td></tr>
<tr><td>Allesfresser</td><td>Sammler (1, Hunger −10 %), Schwere Pranken (1, Schaden +6 %), Tiefer Trinker (2, Durst −10 %), Koloss (2, Gesundheit +8 %), Unaufhaltsam (3, Blutung −25 %, Schaden +5 %)</td></tr>
</tbody>
</table>
<p><strong>Extras deiner Art:</strong> Jede Art hat eine eigene Fähigkeit (z. B. Rudeljäger beim Wolf, Trüffelnase beim Wildschwein) und eine Fähigkeit, die deine <strong>zweite aktive Fähigkeit</strong> auf <kbd>X</kbd> freischaltet (z. B. Wut des Rudels → Rudelwut beim Wolf). Darauf baut eine starke Stufe-3-Fähigkeit auf. Welche zweite Fähigkeit deine Art hat, steht unter <a href="#combat">Kampf</a> und <a href="#species">Arten</a>.</p>
<p><strong>Für alle Arten:</strong> <em>Revierkunde</em> (2 Punkte) – du darfst eine Reviergröße größer einnehmen (siehe <a href="#territory-sizes">Reviergrößen</a>).</p>
<div class="hb-tip">Gehen deine Pläne in Richtung Reviere und Rudelkämpfe, lohnt sich Revierkunde früh. Für Jäger ist die zweite Fähigkeit auf <kbd>X</kbd> oft der größte Sprung.</div>`,
            en: `<p>In the <em>Skills</em> tab (<kbd>J</kbd>) you learn lasting improvements with skill points. A skill costs 1 to 3 points; some need another one first ("Requires: …"). By level 30 you get 15 points – not enough for everything, so you have to choose.</p>
<p><strong>Class tree</strong> – depending on whether your species is a carnivore, herbivore or omnivore:</p>
<table class="hb-table">
<thead><tr><th>Class</th><th>Skills (cost)</th></tr></thead>
<tbody>
<tr><td>Carnivore</td><td>Keen Bite (1, damage +5 %), Endurance Runner (1, stamina recovery +10 %), Ambush (2, damage +8 %), Tireless (2, hunger −10 %), Apex Predator (3, health +10 %, damage +5 %)</td></tr>
<tr><td>Herbivore</td><td>Swift (1, speed +3 %), Alert (1, sense range +15 %), Thick Hide (2, bleeding −20 %), Marathon (2, stamina recovery +15 %), Survivor (3, health +12 %, regeneration +20 %)</td></tr>
<tr><td>Omnivore</td><td>Forager (1, hunger −10 %), Heavy Paws (1, damage +6 %), Deep Drinker (2, thirst −10 %), Brute (2, health +8 %), Unstoppable (3, bleeding −25 %, damage +5 %)</td></tr>
</tbody>
</table>
<p><strong>Extras of your species:</strong> every species has a skill of its own (e.g. Pack Hunter for the wolf, Truffle Nose for the boar) and a skill that unlocks your <strong>second active ability</strong> on <kbd>X</kbd> (e.g. Rage of the Pack → Pack Rage for the wolf). A strong tier 3 skill builds on it. Which second ability your species has is listed under <a href="#combat">Combat</a> and <a href="#species">Species</a>.</p>
<p><strong>For every species:</strong> <em>Territorial</em> (2 points) – you may take a territory one size larger (see <a href="#territory-sizes">Territory sizes</a>).</p>
<div class="hb-tip">If you are heading for territories and pack fights, Territorial pays off early. For hunters the second ability on <kbd>X</kbd> is often the biggest step.</div>`,
        },
        {
            id: 'progress-fame',
            title: { de: 'Ruhm und Ruf', en: 'Fame and reputation' },
            tags: { de: 'ruhm ruf titel wanderer bekannt geachtet gefürchtet legende', en: 'fame reputation title wanderer known respected feared legend' },
            de: `<p>Ruhm sammelst du für Taten, über die man in der Wildnis spricht:</p>
<ul>
<li>Raubtiere erlegen: Hundeartige 2, Großkatzen 3, Bären und Alligatoren 4; Großwild 1</li>
<li>einem Tier aufhelfen: 1 · ein Alpha-Duell gewinnen: 5</li>
<li>Quests, Errungenschaften und Gemeinschaftsziele</li>
<li>ein gehaltenes <a href="#territory-bonuses">Revier</a> (Ruhm pro Stunde) und eure <a href="#territory-dens">Höhle</a></li>
<li>als <a href="#mentor">Mentor</a>, für <a href="#territory-npc">vertriebene Rivalen</a> und <a href="#events-legendary">Legenden</a></li>
</ul>
<p>Mit genug Ruhm steigt dein <strong>Ruf</strong>, der unter deinem Namen im Charaktermenü steht:</p>
<table class="hb-table">
<thead><tr><th>Ruhm</th><th>Ruf</th></tr></thead>
<tbody>
<tr><td>0</td><td>Wanderer</td></tr>
<tr><td>50</td><td>Bekannt</td></tr>
<tr><td>150</td><td>Geachtet</td></tr>
<tr><td>400</td><td>Gefürchtet</td></tr>
<tr><td>1000</td><td>Legende</td></tr>
</tbody>
</table>
<p>Dein Ruhm zählt auch für dein <a href="#pack-fame">Rudel</a>, für deine <a href="#family-lineage">Blutlinie</a> und für die <a href="#ranking">Ranglisten</a>. Daneben gibt es Titel aus Quests, die du selbst auswählst (siehe <a href="#quests-titles">Titel</a>).</p>`,
            en: `<p>You collect fame for deeds the wild talks about:</p>
<ul>
<li>killing predators: canines 2, big cats 3, bears and alligators 4; big game 1</li>
<li>helping an animal up: 1 · winning an alpha duel: 5</li>
<li>quests, achievements and community goals</li>
<li>a held <a href="#territory-bonuses">territory</a> (fame per hour) and your <a href="#territory-dens">den</a></li>
<li>as a <a href="#mentor">mentor</a>, for <a href="#territory-npc">rivals driven off</a> and <a href="#events-legendary">legends</a></li>
</ul>
<p>With enough fame your <strong>reputation</strong> rises; it shows under your name in the character menu:</p>
<table class="hb-table">
<thead><tr><th>Fame</th><th>Reputation</th></tr></thead>
<tbody>
<tr><td>0</td><td>Wanderer</td></tr>
<tr><td>50</td><td>Known</td></tr>
<tr><td>150</td><td>Respected</td></tr>
<tr><td>400</td><td>Feared</td></tr>
<tr><td>1000</td><td>Legend</td></tr>
</tbody>
</table>
<p>Your fame also counts for your <a href="#pack-fame">pack</a>, your <a href="#family-lineage">bloodline</a> and the <a href="#ranking">rankings</a>. Besides that there are titles from quests that you pick yourself (see <a href="#quests-titles">Titles</a>).</p>`,
        },
        {
            id: 'progress-menu',
            title: { de: 'Das Charaktermenü (J)', en: 'The character menu (J)' },
            tags: { de: 'charaktermenü übersicht aktive effekte tier wechseln ausloggen', en: 'character menu overview active effects switch animal log out' },
            de: `<p>Die <strong>Übersicht</strong> im Charaktermenü (<kbd>J</kbd>) zeigt auf einen Blick:</p>
<ul>
<li>Name, Geschlecht, Alter und Lebensphase, getragenen Titel und Ruf</li>
<li>Stufe, Erfahrung, Ruhm und erkundete Regionen</li>
<li><em>Aktive Effekte</em> mit Restzeit (z. B. Fähigkeiten, Überfressen, Ausgeruht)</li>
<li><em>Boni und Mali</em> – alle Werte, die gerade auf dein Tier wirken</li>
<li>gegebenenfalls Winterfell und ein Inzucht-Abzeichen (siehe <a href="#family-inbreeding">Inzucht</a>)</li>
<li>den Abschnitt <em>Mentor</em> mit dem Knopf zum <a href="#mentor">Mentor-Menü</a></li>
<li><em>Tier wechseln</em> zu einem deiner anderen lebenden Tiere und <em>Die Wildnis verlassen</em> (ausloggen)</li>
</ul>
<p>Der Reiter <em>Tierkunde</em> gehört zu den <a href="#senses">Sinnen</a>, die <em>Einstellungen</em> sind im Kapitel <a href="#hud">HUD und Menüs</a> erklärt.</p>`,
            en: `<p>The <strong>Overview</strong> in the character menu (<kbd>J</kbd>) shows at a glance:</p>
<ul>
<li>name, sex, age and life phase, worn title and reputation</li>
<li>level, experience, fame and explored regions</li>
<li><em>Active effects</em> with time left (e.g. abilities, Overfed, Refreshed)</li>
<li><em>Bonuses and penalties</em> – every value that currently affects your animal</li>
<li>a winter coat and an inbreeding badge where they apply (see <a href="#family-inbreeding">Inbreeding</a>)</li>
<li>the <em>Mentor</em> section with the button to the <a href="#mentor">mentor menu</a></li>
<li><em>Switch animal</em> to another of your living animals and <em>Leave the wild</em> (log out)</li>
</ul>
<p>The <em>Animal lore</em> tab belongs to the <a href="#senses">senses</a>; the <em>Settings</em> are explained in the chapter <a href="#hud">HUD and menus</a>.</p>`,
        },
    ],
});
