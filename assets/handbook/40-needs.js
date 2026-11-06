window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'needs',
    order: 40,
    icon: 'needs',
    title: { de: 'Bedürfnisse', en: 'Needs' },
    sections: [
        {
            id: 'needs-overview',
            title: { de: 'Überblick', en: 'Overview' },
            tags: { de: 'ringe hud werte hunger durst ruhe ausdauer temperatur', en: 'rings hud values hunger thirst rest stamina temperature' },
            de: `<p>Dein Tier muss fressen, trinken, ruhen und auf die Temperatur achten. Die Werte siehst du als Ringe unten links im HUD: <strong>Gesundheit</strong>, <strong>Ausdauer</strong>, <strong>Hunger</strong>, <strong>Durst</strong>, <strong>Ruhe</strong> und <strong>Temperatur</strong>. <kbd>Alt</kbd> halten zeigt alle Ringe auf einmal (mehr dazu unter <a href="#hud">HUD und Menüs</a>).</p>
<p>Hunger, Durst und Ruhe gehen von 100 (voll) bis 0 (leer). Sie sinken in <strong>Echtzeit</strong>, solange du in der Wildnis bist – auch wenn du nur herumstehst.</p>
<table class="hb-table">
<thead><tr><th>Wert</th><th>Von voll bis leer (normales Laufen)</th><th>Auffüllen</th></tr></thead>
<tbody>
<tr><td>Hunger</td><td>derzeit etwa 2½ Stunden</td><td><a href="#food-eating">Fressen</a></td></tr>
<tr><td>Durst</td><td>derzeit etwa 2 Stunden</td><td><a href="#food-drinking">Trinken</a></td></tr>
<tr><td>Ruhe</td><td>derzeit etwa 3 Stunden wach</td><td><a href="#needs-rest">Ruhen / Schlafen</a> mit <kbd>Strg</kbd></td></tr>
</tbody>
</table>
<p>Was den Verbrauch beschleunigt:</p>
<ul>
<li><strong>Bewegung:</strong> Rennen verbraucht etwa 30 % mehr, Sprinten etwa 80 % mehr.</li>
<li><strong>Kälte</strong> macht schneller hungrig, <strong>Hitze</strong> schneller durstig (je etwa 50 % mehr) – siehe <a href="#needs-temperature">Temperatur</a>.</li>
<li>Krankheiten wie das <a href="#disease-carrion-fever">Aasfieber</a> oder die <a href="#disease-rabies">Tollwut</a>.</li>
</ul>
<p>Langsamer wird es beim Ruhen, mit passenden Fähigkeiten (<a href="#progress">Fortschritt</a>) und im eigenen Revier (<a href="#territory">Reviere</a>).</p>
<p>Ein neues Tier startet mit 80 Hunger, 80 Durst und 90 Ruhe.</p>
<div class="hb-warn">Bei 25 bekommst du eine Warnung („Du bekommst Hunger.“), bei 0 eine ernste („Du verhungerst!“). Ab 0 Hunger oder Durst verlierst du laufend Gesundheit – siehe <a href="#health-damage">Schaden durch Bedürfnisse</a>.</div>`,
            en: `<p>Your animal has to eat, drink, rest and mind the temperature. You see the values as rings at the bottom left of the HUD: <strong>Health</strong>, <strong>Stamina</strong>, <strong>Hunger</strong>, <strong>Thirst</strong>, <strong>Rest</strong> and <strong>Temperature</strong>. Hold <kbd>Alt</kbd> to see all rings at once (more under <a href="#hud">HUD and menus</a>).</p>
<p>Hunger, thirst and rest go from 100 (full) to 0 (empty). They drop in <strong>real time</strong> while you are in the wild – even when you are just standing around.</p>
<table class="hb-table">
<thead><tr><th>Value</th><th>From full to empty (normal walking)</th><th>Refill</th></tr></thead>
<tbody>
<tr><td>Hunger</td><td>currently about 2½ hours</td><td><a href="#food-eating">Eating</a></td></tr>
<tr><td>Thirst</td><td>currently about 2 hours</td><td><a href="#food-drinking">Drinking</a></td></tr>
<tr><td>Rest</td><td>currently about 3 hours awake</td><td><a href="#needs-rest">Resting / sleeping</a> with <kbd>Ctrl</kbd></td></tr>
</tbody>
</table>
<p>What makes them drop faster:</p>
<ul>
<li><strong>Moving:</strong> running uses about 30 % more, sprinting about 80 % more.</li>
<li><strong>Cold</strong> makes you hungry faster, <strong>heat</strong> thirsty faster (about 50 % more each) – see <a href="#needs-temperature">Temperature</a>.</li>
<li>Diseases such as <a href="#disease-carrion-fever">carrion fever</a> or <a href="#disease-rabies">rabies</a>.</li>
</ul>
<p>They drop slower while resting, with fitting skills (<a href="#progress">Progress</a>) and in your own territory (<a href="#territory">Territories</a>).</p>
<p>A new animal starts with 80 hunger, 80 thirst and 90 rest.</p>
<div class="hb-warn">At 25 you get a warning ("You are getting hungry."), at 0 a serious one ("You are starving!"). From 0 hunger or thirst you keep losing health – see <a href="#health-damage">Damage from needs</a>.</div>`,
        },
        {
            id: 'needs-hunger',
            title: { de: 'Hunger', en: 'Hunger' },
            tags: { de: 'essen fressen nahrung verhungern satt', en: 'food eat starving full' },
            de: `<p>Der Hunger-Ring zeigt, wie satt du bist. Was dein Tier fressen kann, hängt von seiner Klasse ab (Fleisch-, Pflanzen- oder Allesfresser) – alles dazu im Kapitel <a href="#food">Nahrung</a>.</p>
<ul>
<li>Ab <strong>25</strong> oder weniger: Warnung „Du bekommst Hunger.“, und deine <a href="#needs-stamina">Ausdauer</a> lädt nur noch halb so schnell.</li>
<li>Bei <strong>50</strong> oder weniger heilst du nicht mehr von selbst (siehe <a href="#health-regeneration">Regeneration</a>).</li>
<li>Bei <strong>0</strong>: „Du verhungerst!“ – du verlierst derzeit etwa alle 10 Sekunden 1,5 % deiner maximalen Gesundheit, bis du zusammenbrichst.</li>
</ul>
<p>Satt bist du bei 100. Du kannst aber weiterfressen bis 120 – dann hast du dich <a href="#needs-overfeeding">überfressen</a>.</p>
<div class="hb-tip">Kälte macht hungrig. Im Winter oder im Gebirge lohnt es sich, mit vollem Magen loszuziehen.</div>`,
            en: `<p>The hunger ring shows how full you are. What your animal can eat depends on its class (carnivore, herbivore or omnivore) – everything about it in the <a href="#food">Food</a> chapter.</p>
<ul>
<li>At <strong>25</strong> or below: warning "You are getting hungry.", and your <a href="#needs-stamina">stamina</a> recharges only half as fast.</li>
<li>At <strong>50</strong> or below you no longer heal on your own (see <a href="#health-regeneration">Regeneration</a>).</li>
<li>At <strong>0</strong>: "You are starving!" – you currently lose 1.5 % of your maximum health about every 10 seconds until you collapse.</li>
</ul>
<p>You are full at 100. You can still eat on up to 120 – then you have <a href="#needs-overfeeding">overeaten</a>.</p>
<div class="hb-tip">Cold makes you hungry. In winter or in the mountains it pays to set out with a full stomach.</div>`,
        },
        {
            id: 'needs-thirst',
            title: { de: 'Durst', en: 'Thirst' },
            tags: { de: 'trinken wasser verdursten', en: 'drink water dehydrated' },
            de: `<p>Durst sinkt schneller als Hunger und ist damit meist das dringendere Bedürfnis. Trinken kannst du an jedem Gewässer (<a href="#food-drinking">Trinken</a>).</p>
<ul>
<li>Ab <strong>25</strong> oder weniger: „Du bekommst Durst.“ und halbe Ausdauer-Erholung.</li>
<li>Bei <strong>50</strong> oder weniger keine natürliche Heilung.</li>
<li>Bei <strong>0</strong>: „Du verdurstest!“ – du verlierst derzeit etwa alle 10 Sekunden 2 % deiner maximalen Gesundheit. Verdursten geht schneller als Verhungern.</li>
</ul>
<p>Bei 100 hast du keinen Durst mehr und hörst von selbst auf zu trinken.</p>
<div class="hb-tip">Hitze macht durstig. In der Wüste von New Austin oder an heißen Sommertagen nie weit vom Wasser weg wandern.</div>`,
            en: `<p>Thirst drops faster than hunger, so it is usually the more urgent need. You can drink at any body of water (<a href="#food-drinking">Drinking</a>).</p>
<ul>
<li>At <strong>25</strong> or below: "You are getting thirsty." and half stamina recharge.</li>
<li>At <strong>50</strong> or below no natural healing.</li>
<li>At <strong>0</strong>: "You are dying of thirst!" – you currently lose 2 % of your maximum health about every 10 seconds. Dying of thirst is faster than starving.</li>
</ul>
<p>At 100 you are no longer thirsty and stop drinking on your own.</p>
<div class="hb-tip">Heat makes you thirsty. In the New Austin desert or on hot summer days never wander far from water.</div>`,
        },
        {
            id: 'needs-rest',
            title: { de: 'Ruhe und Schlaf', en: 'Rest and sleep' },
            tags: { de: 'müde müdigkeit erschöpft schlafen hinlegen ausruhen strg', en: 'tired fatigue exhausted sleep lie down ctrl' },
            de: `<p>Der Ring <strong>Ruhe</strong> zeigt, wie ausgeruht du bist. Er sinkt, solange du wach bist (derzeit etwa 3 Stunden von voll bis leer), und füllt sich nur, wenn du dich hinlegst.</p>
<h4>So ruhst du</h4>
<ol>
<li>Bleib stehen – im Laufen kannst du dich nicht hinlegen.</li>
<li>Drück <kbd>Strg</kbd> („Ruhen / Schlafen“). Dein Tier legt sich hin; ist deine Ruhe bei 60 oder weniger, schläft es.</li>
<li>Zum Aufstehen einfach losgehen (oder noch einmal <kbd>Strg</kbd>).</li>
</ol>
<p>Beim Ruhen …</p>
<ul>
<li>füllt sich Ruhe von 0 auf 100 in derzeit etwa 20 Minuten,</li>
<li>lädt deine Ausdauer dreimal so schnell,</li>
<li>heilst du dreimal so schnell (<a href="#health-regeneration">Regeneration</a>) und eine <a href="#health-bleeding">Blutung</a> hört schneller auf,</li>
<li>vergehen Krankheiten schneller (<a href="#disease-healing">Krankheiten heilen</a>),</li>
<li>sinken Hunger und Durst nur halb so schnell. Ausnahme: Solange sich nach dem Hinlegen deine Ausdauer noch auflädt (höchstens 2 Minuten), verbrauchst du etwas mehr als im Stehen.</li>
</ul>
<div class="hb-warn">Bei <strong>10</strong> Ruhe oder weniger bist du erschöpft: „Du bist erschöpft und kannst kaum noch rennen.“ – Sprinten geht dann nicht mehr. Schaden nimmst du durch Müdigkeit nicht.</div>
<p>Ruhen geht nicht, solange du niedergestreckt bist, und nicht bei offener Karte oder offenem Pausenmenü.</p>
<div class="hb-tip">In deiner eigenen Höhle erholst du dich je nach Ruhm der Höhle schneller (<a href="#territory">Reviere</a>). Und Zeit offline zählt auch als Ruhe – siehe <a href="#needs-offline">Zeit offline</a>.</div>`,
            en: `<p>The <strong>Rest</strong> ring shows how rested you are. It drops while you are awake (currently about 3 hours from full to empty) and only fills when you lie down.</p>
<h4>How to rest</h4>
<ol>
<li>Stand still – you cannot lie down while moving.</li>
<li>Press <kbd>Ctrl</kbd> ("Rest / sleep"). Your animal lies down; with rest at 60 or below it falls asleep.</li>
<li>To get up, just walk off (or press <kbd>Ctrl</kbd> again).</li>
</ol>
<p>While resting …</p>
<ul>
<li>rest fills from 0 to 100 in currently about 20 minutes,</li>
<li>your stamina recharges three times as fast,</li>
<li>you heal three times as fast (<a href="#health-regeneration">Regeneration</a>) and <a href="#health-bleeding">bleeding</a> stops sooner,</li>
<li>diseases pass faster (<a href="#disease-healing">Healing diseases</a>),</li>
<li>hunger and thirst drop only half as fast. Exception: while your stamina is still recharging after lying down (at most 2 minutes), you use a little more than standing.</li>
</ul>
<div class="hb-warn">At <strong>10</strong> rest or below you are exhausted: "You are exhausted and can barely run." – you cannot sprint any more. Tiredness itself does not hurt you.</div>
<p>You cannot rest while downed, or with the map or pause menu open.</p>
<div class="hb-tip">In your own den you recover faster, depending on the den's fame (<a href="#territory">Territories</a>). And time offline counts as rest too – see <a href="#needs-offline">Time offline</a>.</div>`,
        },
        {
            id: 'needs-stamina',
            title: { de: 'Ausdauer', en: 'Stamina' },
            tags: { de: 'sprinten rennen puste erschöpft', en: 'sprint run breath exhausted' },
            de: `<p>Ausdauer brauchst du zum Sprinten und für jede <a href="#combat-attacks">Kampfaktion</a> (Angriffe, Ausweichen, Fähigkeiten). Ist sie zu niedrig, kommt „Dir fehlt die Puste.“ und die Aktion klappt nicht.</p>
<ul>
<li>Sie lädt von selbst wieder auf – im Liegen (<kbd>Strg</kbd>) dreimal so schnell.</li>
<li>Bei Hunger oder Durst von 25 oder weniger lädt sie nur halb so schnell.</li>
<li>Bei Ruhe von 10 oder weniger kannst du gar nicht mehr sprinten.</li>
<li>Überfressen, Krankheiten und hohes Alter bremsen die Erholung; das Attribut <strong>Ausdauer</strong>, Fähigkeiten und manche Rudel- und Herdenfähigkeiten beschleunigen sie (<a href="#progress">Fortschritt</a>).</li>
</ul>
<div class="hb-tip">Wolf und Kojote haben das Heulen auf der <kbd>Feststelltaste</kbd>: Es füllt dir und deinem Rudel in der Nähe sofort einen Teil der Ausdauer auf (<a href="#combat-special">Sonderfähigkeit</a>).</div>`,
            en: `<p>You need stamina to sprint and for every <a href="#combat-attacks">combat action</a> (attacks, dodging, abilities). If it is too low you get "You are out of breath." and the action fails.</p>
<ul>
<li>It recharges on its own – three times as fast lying down (<kbd>Ctrl</kbd>).</li>
<li>With hunger or thirst at 25 or below it recharges only half as fast.</li>
<li>With rest at 10 or below you cannot sprint at all.</li>
<li>Overeating, diseases and old age slow the recovery; the <strong>Stamina</strong> attribute, skills and some pack and herd abilities speed it up (<a href="#progress">Progress</a>).</li>
</ul>
<div class="hb-tip">Wolf and coyote have the howl on <kbd>Caps Lock</kbd>: it instantly refills part of the stamina of you and your pack nearby (<a href="#combat-special">Special ability</a>).</div>`,
        },
        {
            id: 'needs-temperature',
            title: { de: 'Temperatur', en: 'Temperature' },
            tags: { de: 'kalt kälte heiß hitze frieren erfrieren überhitzen wetter unterschlupf nass', en: 'cold heat hot freezing overheating weather shelter wet' },
            de: `<p>Jede Art hat einen <strong>Wohlfühlbereich</strong>. Entscheidend ist die <em>gefühlte</em> Temperatur an deinem Standort. Sie setzt sich zusammen aus:</p>
<ul>
<li>der Temperatur im Spiel an deinem Ort (Höhe und Tageszeit sind schon drin – nachts und in den Bergen ist es kälter),</li>
<li>dem <strong>Wetter</strong> (Schneesturm bis etwa −12 °C, Schnee −6, Regen −3; Sonne +2, Sandsturm +3),</li>
<li>der <strong>Jahreszeit</strong> (derzeit Sommer +5 °C, Herbst −2, Winter −8),</li>
<li><strong>nassem Fell</strong>: nach dem Schwimmen etwa 3 Minuten lang −5 °C.</li>
</ul>
<p><strong>Unterschlupf</strong> hilft: Unter einem Dach oder Felsvorsprung direkt über dir, in einer Höhle oder einem Gebäude zählen Wetter und Jahreszeit nur noch zu einem Fünftel, und wenn es zu kalt ist, wird es dort um bis zu 4 °C wärmer. Deine eigene Höhle zählt ab einer bestimmten Ruhm-Stufe ebenfalls als Unterschlupf (<a href="#territory">Reviere</a>).</p>
<table class="hb-table">
<thead><tr><th>Zustand</th><th>Wann</th><th>Folge</th></tr></thead>
<tbody>
<tr><td>Kühl / Warm</td><td>bis 4 °C vor der Grenze</td><td>Der Temperatur-Ring erscheint als Vorwarnung, noch ohne Wirkung.</td></tr>
<tr><td>Kalt („Dir ist kalt.“)</td><td>unter dem Bereich</td><td>Hunger sinkt etwa 50 % schneller.</td></tr>
<tr><td>Erfrieren („Du erfrierst!“)</td><td>mehr als 10 °C darunter</td><td>Dazu Schaden: derzeit etwa alle 10 s 1 % der maximalen Gesundheit.</td></tr>
<tr><td>Heiß („Dir ist zu heiß.“)</td><td>über dem Bereich</td><td>Durst sinkt etwa 50 % schneller.</td></tr>
<tr><td>Überhitzen („Du überhitzt!“)</td><td>mehr als 10 °C darüber</td><td>Dazu Schaden wie beim Erfrieren.</td></tr>
</tbody>
</table>
<h4>Wohlfühlbereich je Art</h4>
<p>Derzeitige Werte. „Mit Winterfell“ gilt, wenn das <a href="#needs-winter-coat">Winterfell</a> voll ausgewachsen ist.</p>
<table class="hb-table">
<thead><tr><th>Art</th><th>Ohne Winterfell</th><th>Mit vollem Winterfell</th></tr></thead>
<tbody>
<tr><td>Wolf</td><td>-15 bis 28 °C</td><td>-27 bis 22 °C</td></tr>
<tr><td>Kojote</td><td>-12 bis 36 °C</td><td>-20 bis 32 °C</td></tr>
<tr><td>Rotfuchs</td><td>-18 bis 30 °C</td><td>-28 bis 25 °C</td></tr>
<tr><td>Puma</td><td>-8 bis 32 °C</td><td>-14 bis 29 °C</td></tr>
<tr><td>Panther</td><td>-2 bis 38 °C</td><td>-5 bis 36,5 °C</td></tr>
<tr><td>Alligator</td><td>8 bis 40 °C</td><td>8 bis 40 °C</td></tr>
<tr><td>Dachs</td><td>-18 bis 34 °C</td><td>-27 bis 29,5 °C</td></tr>
<tr><td>Weißwedelhirsch</td><td>-12 bis 30 °C</td><td>-20 bis 26 °C</td></tr>
<tr><td>Wapiti</td><td>-22 bis 28 °C</td><td>-34 bis 22 °C</td></tr>
<tr><td>Elch</td><td>-30 bis 24 °C</td><td>-44 bis 17 °C</td></tr>
<tr><td>Bison</td><td>-28 bis 34 °C</td><td>-44 bis 26 °C</td></tr>
<tr><td>Wildpferd</td><td>-20 bis 34 °C</td><td>-30 bis 29 °C</td></tr>
<tr><td>Gabelbock</td><td>-15 bis 36 °C</td><td>-23 bis 32 °C</td></tr>
<tr><td>Dickhornschaf</td><td>-28 bis 26 °C</td><td>-42 bis 19 °C</td></tr>
<tr><td>Biber</td><td>-25 bis 30 °C</td><td>-37 bis 24 °C</td></tr>
<tr><td>Kaninchen</td><td>-20 bis 34 °C</td><td>-28 bis 30 °C</td></tr>
<tr><td>Schwarzbär</td><td>-20 bis 26 °C</td><td>-34 bis 19 °C</td></tr>
<tr><td>Grizzlybär</td><td>-25 bis 24 °C</td><td>-40 bis 16,5 °C</td></tr>
<tr><td>Wildschwein</td><td>-10 bis 34 °C</td><td>-16 bis 31 °C</td></tr>
<tr><td>Waschbär</td><td>-15 bis 34 °C</td><td>-23 bis 30 °C</td></tr>
<tr><td>Opossum</td><td>-10 bis 36 °C</td><td>-15 bis 33,5 °C</td></tr>
<tr><td>Stinktier</td><td>-15 bis 34 °C</td><td>-23 bis 30 °C</td></tr>
<tr><td>Gürteltier</td><td>-2 bis 42 °C</td><td>-4 bis 41 °C</td></tr>
<tr><td>Eichhörnchen</td><td>-22 bis 32 °C</td><td>-30 bis 28 °C</td></tr>
<tr><td>Streifenhörnchen</td><td>-18 bis 34 °C</td><td>-24 bis 31 °C</td></tr>
<tr><td>Bisamratte</td><td>-25 bis 30 °C</td><td>-35 bis 25 °C</td></tr>
<tr><td>Ratte</td><td>-15 bis 38 °C</td><td>-19 bis 36 °C</td></tr>
</tbody>
</table>
<div class="hb-tip">Wird dir kalt, such Schutz unter Felsvorsprüngen oder in Höhlen – und meide Flüsse, nasses Fell kühlt. Bei Hitze mildert ein Unterschlupf immerhin den Sommer- und Wetterzuschlag; noch mehr bringen höhere Lagen oder die kühlere Nacht.</div>`,
            en: `<p>Every species has a <strong>comfortable range</strong>. What counts is the <em>felt</em> temperature where you stand. It is made of:</p>
<ul>
<li>the in-game temperature at your spot (height and time of day are already included – it is colder at night and in the mountains),</li>
<li>the <strong>weather</strong> (blizzard down to about −12 °C, snow −6, rain −3; sun +2, sandstorm +3),</li>
<li>the <strong>season</strong> (currently summer +5 °C, autumn −2, winter −8),</li>
<li><strong>wet fur</strong>: −5 °C for about 3 minutes after swimming.</li>
</ul>
<p><strong>Shelter</strong> helps: under a roof or rock overhang right above you, in a cave or a building, weather and season count only one fifth, and when it is too cold it is up to 4 °C warmer there. Your own den also counts as shelter from a certain fame tier on (<a href="#territory">Territories</a>).</p>
<table class="hb-table">
<thead><tr><th>State</th><th>When</th><th>Effect</th></tr></thead>
<tbody>
<tr><td>Chilly / Warm</td><td>within 4 °C of the limit</td><td>The temperature ring appears as an early warning, no effect yet.</td></tr>
<tr><td>Cold ("You are cold.")</td><td>below the range</td><td>Hunger drops about 50 % faster.</td></tr>
<tr><td>Freezing ("You are freezing!")</td><td>more than 10 °C below</td><td>Plus damage: currently about 1 % of max health every 10 s.</td></tr>
<tr><td>Hot ("You are too hot.")</td><td>above the range</td><td>Thirst drops about 50 % faster.</td></tr>
<tr><td>Overheating ("You are overheating!")</td><td>more than 10 °C above</td><td>Plus damage like freezing.</td></tr>
</tbody>
</table>
<h4>Comfortable range per species</h4>
<p>Current values. "With winter coat" applies when the <a href="#needs-winter-coat">winter coat</a> is fully grown.</p>
<table class="hb-table">
<thead><tr><th>Species</th><th>Without winter coat</th><th>With full winter coat</th></tr></thead>
<tbody>
<tr><td>Wolf</td><td>-15 to 28 °C</td><td>-27 to 22 °C</td></tr>
<tr><td>Coyote</td><td>-12 to 36 °C</td><td>-20 to 32 °C</td></tr>
<tr><td>Red Fox</td><td>-18 to 30 °C</td><td>-28 to 25 °C</td></tr>
<tr><td>Cougar</td><td>-8 to 32 °C</td><td>-14 to 29 °C</td></tr>
<tr><td>Panther</td><td>-2 to 38 °C</td><td>-5 to 36.5 °C</td></tr>
<tr><td>Alligator</td><td>8 to 40 °C</td><td>8 to 40 °C</td></tr>
<tr><td>Badger</td><td>-18 to 34 °C</td><td>-27 to 29.5 °C</td></tr>
<tr><td>Whitetail Deer</td><td>-12 to 30 °C</td><td>-20 to 26 °C</td></tr>
<tr><td>Elk</td><td>-22 to 28 °C</td><td>-34 to 22 °C</td></tr>
<tr><td>Moose</td><td>-30 to 24 °C</td><td>-44 to 17 °C</td></tr>
<tr><td>Bison</td><td>-28 to 34 °C</td><td>-44 to 26 °C</td></tr>
<tr><td>Wild Horse</td><td>-20 to 34 °C</td><td>-30 to 29 °C</td></tr>
<tr><td>Pronghorn</td><td>-15 to 36 °C</td><td>-23 to 32 °C</td></tr>
<tr><td>Bighorn Sheep</td><td>-28 to 26 °C</td><td>-42 to 19 °C</td></tr>
<tr><td>Beaver</td><td>-25 to 30 °C</td><td>-37 to 24 °C</td></tr>
<tr><td>Rabbit</td><td>-20 to 34 °C</td><td>-28 to 30 °C</td></tr>
<tr><td>Black Bear</td><td>-20 to 26 °C</td><td>-34 to 19 °C</td></tr>
<tr><td>Grizzly Bear</td><td>-25 to 24 °C</td><td>-40 to 16.5 °C</td></tr>
<tr><td>Wild Boar</td><td>-10 to 34 °C</td><td>-16 to 31 °C</td></tr>
<tr><td>Raccoon</td><td>-15 to 34 °C</td><td>-23 to 30 °C</td></tr>
<tr><td>Opossum</td><td>-10 to 36 °C</td><td>-15 to 33.5 °C</td></tr>
<tr><td>Skunk</td><td>-15 to 34 °C</td><td>-23 to 30 °C</td></tr>
<tr><td>Armadillo</td><td>-2 to 42 °C</td><td>-4 to 41 °C</td></tr>
<tr><td>Squirrel</td><td>-22 to 32 °C</td><td>-30 to 28 °C</td></tr>
<tr><td>Chipmunk</td><td>-18 to 34 °C</td><td>-24 to 31 °C</td></tr>
<tr><td>Muskrat</td><td>-25 to 30 °C</td><td>-35 to 25 °C</td></tr>
<tr><td>Rat</td><td>-15 to 38 °C</td><td>-19 to 36 °C</td></tr>
</tbody>
</table>
<div class="hb-tip">If you get cold, look for cover under rock overhangs or in caves – and keep out of rivers, wet fur chills. In heat a shelter at least softens the summer and weather bonus; higher ground or the cooler night help even more.</div>`,
        },
        {
            id: 'needs-winter-coat',
            title: { de: 'Winterfell', en: 'Winter coat' },
            tags: { de: 'fell jahreszeit winter herbst frühling', en: 'fur season winter autumn spring' },
            de: `<p>Dein Tier bekommt mit den Jahreszeiten ein <strong>Winterfell</strong> (nur eine Eigenschaft, das Aussehen ändert sich nicht):</p>
<ul>
<li><strong>Herbst:</strong> wächst nach und nach,</li>
<li><strong>Winter:</strong> voll ausgewachsen,</li>
<li><strong>Frühling:</strong> fällt nach und nach aus,</li>
<li><strong>Sommer:</strong> keins.</li>
</ul>
<p>Volles Winterfell verschiebt deinen <a href="#needs-temperature">Wohlfühlbereich</a> nach unten: Die Kältegrenze sinkt um den ganzen Wert deiner Art (beim Bison zum Beispiel 16 °C), die Hitzegrenze um die Hälfte davon. Im Winter frierst du also später – an einem warmen Herbsttag wird es dir dafür schneller zu heiß.</p>
<ul>
<li><strong>Nasses Fell</strong> wärmt nur halb so gut.</li>
<li><strong>Jungtiere</strong> bekommen nur etwa 60 % des Winterfells.</li>
<li>Der Alligator hat kein Winterfell, Gürteltier und Panther fast keins.</li>
</ul>
<p>Wie weit dein Winterfell gerade ist, steht im Charaktermenü (<kbd>J</kbd>) als „Winterfell … %“.</p>`,
            en: `<p>Your animal grows a <strong>winter coat</strong> with the seasons (only a property, its look does not change):</p>
<ul>
<li><strong>Autumn:</strong> grows bit by bit,</li>
<li><strong>Winter:</strong> fully grown,</li>
<li><strong>Spring:</strong> sheds bit by bit,</li>
<li><strong>Summer:</strong> none.</li>
</ul>
<p>A full winter coat shifts your <a href="#needs-temperature">comfortable range</a> down: the cold limit drops by the full value of your species (the bison, for example, 16 °C), the heat limit by half of it. So in winter you freeze later – but on a warm autumn day you get too hot sooner.</p>
<ul>
<li><strong>Wet fur</strong> keeps only half as warm.</li>
<li><strong>Juveniles</strong> grow only about 60 % of the coat.</li>
<li>The alligator has no winter coat, armadillo and panther hardly any.</li>
</ul>
<p>How far your winter coat has grown is shown in the character menu (<kbd>J</kbd>) as "Winter coat … %".</p>`,
        },
        {
            id: 'needs-overfeeding',
            title: { de: 'Überfressen', en: 'Overeating' },
            tags: { de: 'überfressen satt träge voll', en: 'overfed full sluggish' },
            de: `<p>Bei 100 Hunger meldet sich „Du bist satt. Frisst du weiter, überfrisst du dich.“ Du kannst trotzdem weiterfressen, bis der Hunger-Ring 120 erreicht. Dann kommt „Du hast dich überfressen …“ und du bist eine Weile <strong>träge</strong> (Effekt „Überfressen“):</p>
<ul>
<li>derzeit etwa 2½ Minuten lang (das HUD zählt die echte Zeit herunter),</li>
<li>etwa 20 % langsamer,</li>
<li>Ausdauer lädt etwa 30 % langsamer,</li>
<li>etwa 15 % weniger Schaden.</li>
</ul>
<p>Mehr als 120 geht nicht („Du bist zu voll, um noch mehr zu fressen.“).</p>
<div class="hb-tip">Ein Polster über 100 ist praktisch vor einer langen Wanderung – hör nur knapp vor 120 auf, besonders wenn Kämpfe drohen.</div>`,
            en: `<p>At 100 hunger you get "You are full. Eat on and you will overeat." You can still keep eating until the hunger ring reaches 120. Then you get "You have overeaten …" and you are <strong>sluggish</strong> for a while (effect "Overfed"):</p>
<ul>
<li>currently for about 2½ minutes (the HUD counts down the real time),</li>
<li>about 20 % slower,</li>
<li>stamina recharges about 30 % slower,</li>
<li>about 15 % less damage.</li>
</ul>
<p>Beyond 120 is not possible ("You are too full to eat any more.").</p>
<div class="hb-tip">A buffer above 100 is handy before a long journey – just stop shortly before 120, especially when a fight may be coming.</div>`,
        },
        {
            id: 'needs-offline',
            title: { de: 'Zeit offline', en: 'Time offline' },
            tags: { de: 'ausloggen offline ausgeruht pause', en: 'log out offline refreshed break' },
            de: `<p>Während du nicht spielst, bleibt dein Tier nicht stehen – aber es wird geschont:</p>
<ul>
<li><strong>Ruhe</strong> füllt sich: derzeit etwa 40 Punkte je Stunde offline.</li>
<li><strong>Gesundheit</strong> heilt: derzeit etwa 20 % je Stunde offline.</li>
<li>Hast du dein Tier im eigenen Revier zurückgelassen, erholt es sich doppelt so schnell, in der eigenen Höhle (ab einer bestimmten Ruhm-Stufe) noch einmal schneller.</li>
<li>Gezählt werden Pausen ab etwa 5 Minuten und höchstens 24 Stunden.</li>
<li><strong>Hunger und Durst</strong> sinken nur halb so schnell wie im Spiel und nie unter 50. Was schon darunter war, bleibt, wie es war.</li>
<li>Warst du mindestens <strong>1 Stunde</strong> weg, bekommst du beim Betreten der Wildnis den Effekt <strong>„Ausgeruht“</strong> für 20 Minuten: Ausdauer lädt schneller, Sprints kosten weniger und du wirst langsamer müde.</li>
</ul>
<div class="hb-tip">Ausloggen mit vollem Magen und vollem Wasser lohnt sich – nach einer Nacht Pause startest du ausgeschlafen und mit mindestens halbvollen Ringen. Wie das Ausloggen selbst funktioniert, steht unter <a href="#start">Erste Schritte</a>.</div>`,
            en: `<p>While you are not playing, your animal is not frozen in time – but it is spared:</p>
<ul>
<li><strong>Rest</strong> fills up: currently about 40 points per hour offline.</li>
<li><strong>Health</strong> heals: currently about 20 % per hour offline.</li>
<li>If you left your animal in your own territory, it recovers twice as fast, in your own den (from a certain fame tier on) faster still.</li>
<li>Breaks count from about 5 minutes and up to 24 hours.</li>
<li><strong>Hunger and thirst</strong> drop only half as fast as in game and never below 50. Whatever was already lower stays as it was.</li>
<li>If you were away for at least <strong>1 hour</strong>, you get the effect <strong>"Refreshed"</strong> for 20 minutes when you enter the wild: stamina recharges faster, sprints cost less and you tire more slowly.</li>
</ul>
<div class="hb-tip">Logging out with a full stomach and full water pays off – after a night's break you start well rested and with rings at least half full. How logging out itself works is explained under <a href="#start">First steps</a>.</div>`,
        },
    ],
});
