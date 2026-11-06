window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'territory',
    order: 64,
    icon: 'territory',
    title: { de: 'Reviere', en: 'Territories' },
    sections: [
        {
            id: 'territory-overview',
            title: { de: 'Überblick', en: 'Overview' },
            tags: { de: 'revier gebiet land besitz einnehmen halten', en: 'territory land claim hold own' },
            de: `<p>Die Wildnis ist in feste <strong>Reviere</strong> aufgeteilt. Ein Revier gehört einem <a href="#pack">Rudel</a> oder einem einzelnen Tier ohne Rudel – oder niemandem. Im eigenen Revier fühlt sich dein Tier sicher und bekommt <a href="#territory-bonuses">Boni</a>; viele Reviere haben außerdem eine <a href="#territory-dens">Höhle</a>.</p>
<ul>
<li><strong>Ein Revier pro Gruppe:</strong> Ein Rudel (oder ein Tier ohne Rudel) hält immer nur ein Revier. Wer ein anderes beansprucht, gibt das alte dabei auf – das Spiel warnt dich vorher.</li>
<li><strong>Taste:</strong> <kbd>G</kbd> markiert und erhebt Anspruch (siehe <a href="#territory-claiming">Einnehmen</a>).</li>
<li><strong>Anzeige:</strong> Betrittst du ein Revier, erscheint oben eine Tafel mit Name, Besitzer und Zustand (im Tagebuch-Look als Revierzeile unter der Uhr). Die Grenzen leuchten kurz auf.</li>
</ul>
<p>Einnehmen und angreifen dürfen im Rudel nur Alpha und Betas (mit dem ganzen Rudel). Abgeben kann das Revier im Rudel nur der Alpha, als Einzeltier du selbst – im Rudelmenü (<kbd>L</kbd>), Abschnitt <em>Revier</em> → <em>Revier abgeben</em>. Danach ist es sofort frei.</p>`,
            en: `<p>The wild is divided into fixed <strong>territories</strong>. A territory belongs to a <a href="#pack">pack</a> or a single animal without a pack – or to nobody. In its own territory your animal feels safe and gets <a href="#territory-bonuses">bonuses</a>; many territories also have a <a href="#territory-dens">den</a>.</p>
<ul>
<li><strong>One territory per group:</strong> a pack (or an animal without a pack) only ever holds one territory. Claiming another gives up the old one – the game warns you first.</li>
<li><strong>Key:</strong> <kbd>G</kbd> marks and lays claim (see <a href="#territory-claiming">Taking a territory</a>).</li>
<li><strong>Display:</strong> when you enter a territory, a panel at the top shows its name, owner and hold (in the journal look as a territory line under the clock). The borders flash briefly.</li>
</ul>
<p>In a pack only the alpha and betas may claim and attack (with the whole pack). Only the alpha can give up a pack's territory; a single animal gives up its own – in the pack menu (<kbd>L</kbd>), section <em>Territory</em> → <em>Give up territory</em>. It is free right away.</p>`,
        },
        {
            id: 'territory-sizes',
            title: { de: 'Reviergrößen: wer was halten darf', en: 'Territory sizes: who may hold what' },
            tags: { de: 'größe klein mittel groß revierkunde einzelgänger jungtier alt', en: 'size small medium large territorial loner juvenile old' },
            de: `<p>Jedes Revier hat eine Größe: <strong>klein</strong> (bis etwa 8 ha), <strong>mittel</strong> (bis etwa 30 ha) oder <strong>groß</strong>.</p>
<table class="hb-table">
<thead><tr><th>Wer</th><th>höchstens</th></tr></thead>
<tbody>
<tr><td>Tier ohne Rudel</td><td>klein</td></tr>
<tr><td>Tier ohne Rudel mit Fähigkeit „Revierkunde“</td><td>mittel (große Reviere bleiben den Rudeln)</td></tr>
<tr><td>Rudel</td><td>mittel</td></tr>
<tr><td>Rudel mit einem Tier mit „Revierkunde“ vor Ort, oder mit dem Perk „Weites Land“</td><td>groß</td></tr>
</tbody>
</table>
<p>Ist ein Revier zu groß für dich, sagt dir das die Tafel („Zu groß für dich“).</p>
<p><strong>Alter:</strong> Jungtiere und alte Tiere können allein kein Revier einnehmen oder angreifen. Mit ihrem Rudel geht es, solange mindestens drei Viertel der anwesenden Rudeltiere erwachsen sind. Ihr eigenes Revier markieren und verteidigen dürfen sie immer (siehe <a href="#life">Lebenszyklus</a>).</p>
<p><strong>Neu im Rudel:</strong> Tiere, die erst seit weniger als 24 Stunden im Rudel sind, zählen beim Einnehmen und Angreifen noch nicht mit – im eigenen Revier aber schon.</p>`,
            en: `<p>Every territory has a size: <strong>small</strong> (up to about 8 ha), <strong>medium</strong> (up to about 30 ha) or <strong>large</strong>.</p>
<table class="hb-table">
<thead><tr><th>Who</th><th>at most</th></tr></thead>
<tbody>
<tr><td>animal without a pack</td><td>small</td></tr>
<tr><td>animal without a pack with the skill "Territorial"</td><td>medium (large territories are left to packs)</td></tr>
<tr><td>pack</td><td>medium</td></tr>
<tr><td>pack with an animal with "Territorial" present, or with the perk "Wide Lands"</td><td>large</td></tr>
</tbody>
</table>
<p>If a territory is too big for you, the panel tells you ("Too big for you").</p>
<p><strong>Age:</strong> juveniles and old animals cannot take or attack a territory on their own. With their pack it works as long as at least three quarters of the pack animals present are adults. They may always mark and defend their own territory (see <a href="#life">Life cycle</a>).</p>
<p><strong>New in the pack:</strong> animals that joined the pack less than 24 hours ago do not count yet when taking or attacking – in the own territory they do.</p>`,
        },
        {
            id: 'territory-claiming',
            title: { de: 'Ein freies Revier einnehmen', en: 'Taking a free territory' },
            tags: { de: 'einnehmen anspruch erheben zweimal g beanspruchen dauer', en: 'claim lay claim press g twice capture time' },
            de: `<p>Einfach hineinlaufen nimmt nichts ein. So geht es:</p>
<ol>
<li>Geh in das Revier. Die Tafel zeigt „Herrenlos“ und „Zweimal G drücken, um Anspruch zu erheben“.</li>
<li>Drück <kbd>G</kbd> und innerhalb von 5 Sekunden noch einmal <kbd>G</kbd>. Jetzt erhebt deine ganze Gruppe Anspruch.</li>
<li>Bleibt im Revier. Der Anspruch wächst, solange nur eure Gruppe darin ist. Markieren (<kbd>G</kbd>) beschleunigt es.</li>
<li>Bei 100 % gehört das Revier euch („Revier erobert“).</li>
</ol>
<p><strong>Dauer:</strong> Allein dauert es je nach Größe derzeit etwa 3 Minuten (kleinste Reviere) bis 40 Minuten (größte); ein Revier von 10 ha etwa 10 Minuten. Jedes weitere Tier der Gruppe beschleunigt um 50 % (gezählt bis 4 Tiere). Ausgewachsene <a href="#companion">Begleiter</a> zählen als halbes Tier, solange ein Spieler der Gruppe dabei ist.</p>
<ul>
<li>Verlasst ihr das Revier, läuft der Anspruch langsam zurück (von 100 auf 0 in etwa 20 Minuten). Seid ihr 10 Minuten gar nicht drin, erlischt der Anspruch.</li>
<li>Sind zwei Gruppen gleichzeitig im Revier, ist es <strong>umkämpft</strong> und nichts bewegt sich.</li>
<li>Während ihr einnehmt, seht ihr die Reviergrenzen als leuchtende Wände.</li>
</ul>`,
            en: `<p>Just walking in takes nothing. This is how it works:</p>
<ol>
<li>Walk into the territory. The panel shows "Unclaimed" and "Press G twice to lay claim".</li>
<li>Press <kbd>G</kbd> and within 5 seconds <kbd>G</kbd> again. Your whole group now lays claim.</li>
<li>Stay inside. The claim grows while only your group is in it. Marking (<kbd>G</kbd>) speeds it up.</li>
<li>At 100 % the territory is yours ("Territory taken").</li>
</ol>
<p><strong>Duration:</strong> alone it currently takes about 3 minutes (smallest territories) up to 40 minutes (largest), depending on size; a 10 ha territory about 10 minutes. Every further animal of the group speeds it up by 50 % (counted up to 4 animals). Grown <a href="#companion">companions</a> count as half an animal while a player of the group is there.</p>
<ul>
<li>If you leave, the claim slowly runs back (from 100 to 0 in about 20 minutes). If you are not inside at all for 10 minutes, the claim ends.</li>
<li>If two groups are in the territory at the same time, it is <strong>contested</strong> and nothing moves.</li>
<li>While you claim, you see the borders as glowing walls.</li>
</ul>`,
        },
        {
            id: 'territory-marking',
            title: { de: 'Markieren (Duftmarke)', en: 'Marking (scent mark)' },
            tags: { de: 'markieren duftmarke g geruch', en: 'mark scent mark g smell' },
            de: `<p>Mit <kbd>G</kbd> setzt dein Tier eine Duftmarke (manche Arten spielen dazu eine eigene Animation, etwa der Wolf oder der Hirsch beim Fegen am Baum).</p>
<ul>
<li><strong>Im eigenen Revier:</strong> Der Zustand steigt um 8 Punkte (von 100).</li>
<li><strong>Bei einem Anspruch oder Angriff:</strong> Euer Fortschritt wächst bzw. der Zustand der Besitzer sinkt um 8 Punkte.</li>
<li>Zwischen zwei Marken desselben Tiers liegen derzeit 90 Sekunden („Deine Duftmarke ist noch frisch“).</li>
</ul>
<p>Duftmarken zählen auch für viele <a href="#quests">Quests</a>, Rudelquests und Gemeinschaftsziele.</p>`,
            en: `<p>With <kbd>G</kbd> your animal leaves a scent mark (some species play their own animation, like the wolf or the deer rubbing a tree).</p>
<ul>
<li><strong>In your own territory:</strong> the hold rises by 8 points (of 100).</li>
<li><strong>During a claim or attack:</strong> your progress grows or the owners' hold drops by 8 points.</li>
<li>Currently 90 seconds lie between two marks of the same animal ("Your scent mark is still fresh").</li>
</ul>
<p>Scent marks also count for many <a href="#quests">quests</a>, pack quests and community goals.</p>`,
        },
        {
            id: 'territory-hold',
            title: { de: 'Zustand halten und Verfall', en: 'Keeping the hold and decay' },
            tags: { de: 'zustand pflege verfall besuchen frei', en: 'hold control care decay visit free' },
            de: `<p>Jedes gehaltene Revier hat einen <strong>Zustand</strong> von 0 bis 100. Nach der Übernahme steht er auf 100.</p>
<ul>
<li>Seid ihr im Revier, steigt der Zustand wieder (von 0 auf 100 in etwa 10 Minuten).</li>
<li>Ohne Besuch sinkt er langsam: von 100 auf 0 in etwa 72 Stunden. Bei 0 ist das Revier wieder frei.</li>
<li>Markieren (<kbd>G</kbd>) hebt den Zustand zusätzlich.</li>
</ul>
<div class="hb-warn">Offline bleiben schützt ein Revier nicht dauerhaft: Wer es lange nicht besucht, lässt es verfallen – und ein vernachlässigtes Revier kann jederzeit angegriffen werden (siehe <a href="#territory-defense">Angriff und Schutz</a>).</div>
<p>Stirbt ein Einzeltier, das ein Revier hält, oder zerfällt ein Rudel, wird sein Revier frei.</p>`,
            en: `<p>Every held territory has a <strong>hold</strong> from 0 to 100. After a takeover it is at 100.</p>
<ul>
<li>While you are inside, the hold goes back up (from 0 to 100 in about 10 minutes).</li>
<li>Without visits it slowly drops: from 100 to 0 in about 72 hours. At 0 the territory is free again.</li>
<li>Marking (<kbd>G</kbd>) raises the hold as well.</li>
</ul>
<div class="hb-warn">Staying offline does not protect a territory for good: if nobody visits it for a long time, it decays – and a neglected territory can be attacked at any time (see <a href="#territory-defense">Attack and protection</a>).</div>
<p>When a single animal holding a territory dies, or a pack falls apart, its territory becomes free.</p>`,
        },
        {
            id: 'territory-defense',
            title: { de: 'Angriff und Schutz', en: 'Attack and protection' },
            tags: { de: 'angriff verteidigen schutz angriffszeit alarm eindringlinge gepflegt vernachlässigt', en: 'attack defend protection attack hours alarm intruders cared for neglected' },
            de: `<p>Ein gehaltenes Revier kann man nicht einfach übernehmen, nur weil die Besitzer gerade nicht da sind:</p>
<ol>
<li><strong>Übernahmeschutz:</strong> Nach jeder Übernahme ist ein Revier <strong>48 Stunden</strong> (echte Zeit) geschützt („Frisch eingenommen – noch … geschützt“). Holt die vorige Gruppe es zurück, gilt nur der Rest des alten Schutzes.</li>
<li><strong>Gepflegt oder vernachlässigt:</strong> Ein <em>gepflegtes</em> Revier (Zustand mindestens 50 und ein Besitzer war in den letzten 24 Stunden drin) kann nur <strong>zwischen 12 und 24 Uhr</strong> (deutsche Zeit) herausgefordert werden – und nur, wenn mindestens ein Besitzer online ist. Ein <em>vernachlässigtes</em> Revier geht jederzeit, auch wenn niemand online ist.</li>
<li><strong>Alarm:</strong> Erhebt eine fremde Gruppe Anspruch (zweimal <kbd>G</kbd>) und ist allein im Revier, werden die Besitzer gewarnt („Eindringlinge“). Der Zustand sinkt erst nach <strong>5 Minuten</strong> (mit dem Perk „Wachsame Grenzen“ länger).</li>
<li><strong>Verteidigen:</strong> Kommen die Besitzer rechtzeitig zurück, ist das Revier umkämpft und nichts ändert sich. Sind die Fremden 2 Minuten fort, endet der Alarm.</li>
<li><strong>Verdrängen:</strong> Sonst drücken die Angreifer den Zustand nach unten (so schnell, wie sie ein freies Revier einnehmen würden). Bei 0 verlieren die Besitzer das Revier, und die Angreifer nehmen es gleich weiter ein.</li>
</ol>
<p>Warum du gerade nicht angreifen kannst, sagen dir die Tafel und die Meldung bei <kbd>G</kbd> (frisch eingenommen, nur 12–24 Uhr, Besitzer fort).</p>
<div class="hb-tip">Verbündete Rudel können eure Reviere weder angreifen noch beanspruchen (siehe <a href="#pack-alliances">Bündnisse</a>). Gegen Eindringlinge helfen die Perks „Grenzwacht“ und „Fährte des Eindringlings“ (siehe <a href="#pack-perks">Perks</a>).</div>`,
            en: `<p>A held territory cannot simply be taken just because its owners are away:</p>
<ol>
<li><strong>Takeover protection:</strong> after every takeover a territory is protected for <strong>48 hours</strong> (real time) ("Recently taken - protected for …"). If the previous group takes it back, only the rest of the old protection applies.</li>
<li><strong>Cared for or neglected:</strong> a <em>cared-for</em> territory (hold at least 50 and an owner was inside within the last 24 hours) can only be challenged <strong>between 12:00 and 24:00</strong> (German time) – and only while at least one owner is online. A <em>neglected</em> territory can be attacked at any time, even when nobody is online.</li>
<li><strong>Alarm:</strong> when a foreign group lays claim (<kbd>G</kbd> twice) and is alone in the territory, the owners are warned ("Intruders"). The hold only starts to drop after <strong>5 minutes</strong> (longer with the perk "Watchful Borders").</li>
<li><strong>Defending:</strong> if the owners come back in time, the territory is contested and nothing changes. Once the strangers are gone for 2 minutes, the alarm ends.</li>
<li><strong>Pushing out:</strong> otherwise the attackers push the hold down (as fast as they would take a free territory). At 0 the owners lose the territory, and the attackers carry on claiming it.</li>
</ol>
<p>The panel and the message on <kbd>G</kbd> tell you why you cannot attack right now (recently taken, only 12–24 o'clock, owners away).</p>
<div class="hb-tip">Allied packs can neither attack nor claim your territories (see <a href="#pack-alliances">Alliances</a>). Against intruders the perks "Border Watch" and "Intruder's Trail" help (see <a href="#pack-perks">Perks</a>).</div>`,
        },
        {
            id: 'territory-bonuses',
            title: { de: 'Boni im eigenen Revier', en: 'Bonuses in your own territory' },
            tags: { de: 'bonus vorteile erholung hunger durst beute ruhm pro stunde', en: 'bonus benefits recovery hunger thirst prey fame per hour' },
            de: `<p>Im eigenen Revier fühlt sich dein Tier sicher. Derzeit gilt dort:</p>
<ul>
<li>Regeneration der Gesundheit +25 %, Ausdauer-Erholung +15 %</li>
<li>Hunger, Durst und Müdigkeit sinken 20 % langsamer (siehe <a href="#needs">Bedürfnisse</a>)</li>
<li>Fressen und Trinken gehen 30 % schneller</li>
<li>Es gibt rund 30 % mehr Wildtiere um dich herum (siehe <a href="#food">Nahrung</a>)</li>
</ul>
<p>Dazu bekommt jedes Tier der Gruppe, das in der Wildnis ist, <strong>2 Ruhm pro Stunde</strong> – egal, wo es gerade ist. Rudel werten diese Boni mit <a href="#pack-perks">Perks</a> auf. Loggst du im eigenen Revier aus, erholt sich dein Tier offline schneller (siehe <a href="#life">Lebenszyklus</a>).</p>
<p>Auch die Paarung braucht ein eigenes Revier (siehe <a href="#family-mating">Paarung</a>).</p>`,
            en: `<p>In its own territory your animal feels safe. Currently it gets:</p>
<ul>
<li>health regeneration +25 %, stamina recovery +15 %</li>
<li>hunger, thirst and tiredness drop 20 % slower (see <a href="#needs">Needs</a>)</li>
<li>eating and drinking 30 % faster</li>
<li>around 30 % more wild animals around you (see <a href="#food">Food</a>)</li>
</ul>
<p>On top of that every animal of the group that is in the wild gets <strong>2 fame per hour</strong> – wherever it is. Packs boost these bonuses with <a href="#pack-perks">perks</a>. If you log out in your own territory, your animal recovers faster offline (see <a href="#life">Life cycle</a>).</p>
<p>Pairing also needs an own territory (see <a href="#family-mating">Pairing</a>).</p>`,
        },
        {
            id: 'territory-map',
            title: { de: 'Reviere auf der Karte', en: 'Territories on the map' },
            tags: { de: 'karte farben blau rot gelb grenzen tafel', en: 'map colours blue red yellow borders panel' },
            de: `<p>Auf der Pausenkarte sind Reviere farbige Flächen:</p>
<table class="hb-table">
<thead><tr><th>Farbe</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>Blau</td><td>dein eigenes Revier (deines Rudels)</td></tr>
<tr><td>Rot</td><td>fremdes Revier – auch das wilder Rivalenrudel</td></tr>
<tr><td>Gelb</td><td>freies Revier</td></tr>
</tbody>
</table>
<p>An jeder Höhle steht ein Höhlen-Marker. Du siehst nur Reviere, in denen deine Art lebt (Kleintiere sehen ihre Kleinstreviere, siehe <a href="#territory-tiny">Kleinstreviere</a>).</p>
<p>Unter <kbd>J</kbd> → <em>Einstellungen</em> → <em>Karte und Reviere</em> kannst du eigene, fremde und unbesetzte Reviere sowie die leuchtenden Reviergrenzen einzeln ausblenden.</p>`,
            en: `<p>On the pause map territories are coloured areas:</p>
<table class="hb-table">
<thead><tr><th>Colour</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Blue</td><td>your own territory (your pack's)</td></tr>
<tr><td>Red</td><td>a foreign territory – also one of wild rival packs</td></tr>
<tr><td>Yellow</td><td>a free territory</td></tr>
</tbody>
</table>
<p>Every den has a den marker. You only see territories your species lives in (small animals see their tiny territories, see <a href="#territory-tiny">Tiny territories</a>).</p>
<p>Under <kbd>J</kbd> → <em>Settings</em> → <em>Map and territories</em> you can hide own, foreign and unclaimed territories as well as the glowing borders one by one.</p>`,
        },
        {
            id: 'territory-dens',
            title: { de: 'Höhlen und Höhlen-Ruhm', en: 'Dens and den fame' },
            tags: { de: 'höhle bau unterschlupf ruhm stufe spawn starten', en: 'den burrow shelter fame tier spawn start' },
            de: `<p>Viele Reviere haben eine <strong>Höhle</strong> – einen festen Platz mit einem Marker auf der Karte. Wer das Revier hält, hält auch die Höhle. Betrittst du deine Höhle, meldet dein Instinkt „Du bist zurück in deiner Höhle“.</p>
<p><strong>Höhlen-Ruhm</strong> sammelt jede Gruppe für ihre Höhle:</p>
<ul>
<li>1 Punkt pro Stunde, solange ein Tier der Gruppe in der Wildnis ist</li>
<li>3 Punkte pro Stunde für jedes Tier, das in der Höhle ruht oder schläft</li>
<li>5 Punkte für jedes Jungtier, dessen Eltern sich in der Höhle gepaart haben</li>
</ul>
<p>Mit genug Ruhm steigt die Höhle in <strong>Ruhm-Stufen</strong> auf. In der Höhle bekommen die Tiere der Gruppe dann zusätzlich zum Revierbonus:</p>
<table class="hb-table">
<thead><tr><th>Stufe</th><th>ab Ruhm</th><th>in der Höhle</th></tr></thead>
<tbody>
<tr><td>1</td><td>10</td><td>Regeneration +10 %, Erholung im Schlaf +10 %, Schutz vor Wetter und Kälte</td></tr>
<tr><td>2</td><td>40</td><td>Regeneration +15 %, Ausdauer-Erholung +5 %, Schlaf +20 %; ausgeloggt erholst du dich hier schneller</td></tr>
<tr><td>3</td><td>100</td><td>Regeneration +20 %, Ausdauer +10 %, Schlaf +30 %, Hunger −5 %; +1 Ruhm pro Stunde</td></tr>
<tr><td>4</td><td>200</td><td>Regeneration +25 %, Ausdauer +10 %, Schlaf +40 %, Hunger und Durst −10 %; +1 Ruhm pro Stunde</td></tr>
<tr><td>5</td><td>400</td><td>Regeneration +30 %, Ausdauer +15 %, Schlaf +50 %, Hunger und Durst −10 %; +2 Ruhm pro Stunde</td></tr>
</tbody>
</table>
<p><strong>In der Höhle starten:</strong> Tiere der haltenden Gruppe können in der Charakterauswahl „In der Höhle“ wählen und dort in die Wildnis kommen.</p>
<p><strong>Verlust:</strong> Verliert ihr das Revier, bleibt euer Höhlen-Ruhm gespeichert, sinkt aber um 20 Punkte pro Tag. Erobert ihr es bald zurück, findet ihr die Höhle fast wie verlassen wieder. Zerfällt ein Rudel, ist sein Höhlen-Ruhm weg.</p>
<p>Stufe und Ruhm bis zur nächsten Stufe stehen im Rudelmenü (<kbd>L</kbd>) im Abschnitt <em>Revier</em>.</p>`,
            en: `<p>Many territories have a <strong>den</strong> – a fixed spot with a marker on the map. Whoever holds the territory holds the den. When you enter your den, your instinct tells you "You are back in your den".</p>
<p>Each group collects <strong>den fame</strong> for its den:</p>
<ul>
<li>1 point per hour while an animal of the group is in the wild</li>
<li>3 points per hour for every animal resting or sleeping in the den</li>
<li>5 points for every juvenile whose parents paired in the den</li>
</ul>
<p>With enough fame the den rises in <strong>fame tiers</strong>. Inside the den the group's animals then get, on top of the territory bonus:</p>
<table class="hb-table">
<thead><tr><th>Tier</th><th>from fame</th><th>inside the den</th></tr></thead>
<tbody>
<tr><td>1</td><td>10</td><td>regeneration +10 %, rest while sleeping +10 %, shelter from weather and cold</td></tr>
<tr><td>2</td><td>40</td><td>regeneration +15 %, stamina recovery +5 %, sleep +20 %; logged out here you recover faster</td></tr>
<tr><td>3</td><td>100</td><td>regeneration +20 %, stamina +10 %, sleep +30 %, hunger −5 %; +1 fame per hour</td></tr>
<tr><td>4</td><td>200</td><td>regeneration +25 %, stamina +10 %, sleep +40 %, hunger and thirst −10 %; +1 fame per hour</td></tr>
<tr><td>5</td><td>400</td><td>regeneration +30 %, stamina +15 %, sleep +50 %, hunger and thirst −10 %; +2 fame per hour</td></tr>
</tbody>
</table>
<p><strong>Starting at the den:</strong> animals of the holding group can pick "At the den" in the character selection and enter the wild there.</p>
<p><strong>Losing it:</strong> if you lose the territory, your den fame stays saved but drops by 20 points per day. If you win it back soon, you find the den almost as you left it. If a pack falls apart, its den fame is gone.</p>
<p>The tier and the fame needed for the next one are shown in the pack menu (<kbd>L</kbd>), section <em>Territory</em>.</p>`,
        },
        {
            id: 'territory-tiny',
            title: { de: 'Kleinstreviere für Kleintiere', en: 'Tiny territories for small animals' },
            tags: { de: 'kleinstrevier eichhörnchen streifenhörnchen ratte bisamratte kaninchen', en: 'tiny territory squirrel chipmunk rat muskrat rabbit' },
            de: `<p>Für <strong>Eichhörnchen, Streifenhörnchen, Ratte, Bisamratte und Kaninchen</strong> gibt es eigene <strong>Kleinstreviere</strong> (höchstens etwa 2 ha). Sie dürfen mitten in normalen Revieren liegen.</p>
<ul>
<li>Diese Arten zählen nur in Kleinstrevieren – und nur sie zählen dort.</li>
<li>Es gibt keine Größenklasse: Jede Gruppe dieser Arten darf jedes Kleinstrevier einnehmen.</li>
<li>Sonst gelten dieselben Regeln: zweimal <kbd>G</kbd>, Zustand, Schutz, Boni, Paarung im eigenen Revier.</li>
<li>Karte und Tafel zeigen dir nur die Reviere deiner Art.</li>
</ul>`,
            en: `<p><strong>Squirrel, chipmunk, rat, muskrat and rabbit</strong> have their own <strong>tiny territories</strong> (at most about 2 ha). They may lie right inside normal territories.</p>
<ul>
<li>These species only count in tiny territories – and only they count there.</li>
<li>There is no size class: every group of these species may take any tiny territory.</li>
<li>Otherwise the same rules apply: <kbd>G</kbd> twice, hold, protection, bonuses, pairing in your own territory.</li>
<li>The map and panel only show you the territories of your kind.</li>
</ul>`,
        },
        {
            id: 'territory-npc',
            title: { de: 'Wilde Rivalenrudel', en: 'Wild rival packs' },
            tags: { de: 'npc rudel wildes rudel einzelgänger rivalen vertreiben knurren', en: 'npc pack wild pack wild loner rivals drive off growl' },
            de: `<p>Damit die Wildnis auch mit wenigen Spielern Rivalen hat, halten <strong>wilde Rudel</strong> einige freie Reviere: Wolfsrudel (3–5 Tiere), Kojotenrudel (3–4) sowie einzelne Pumas, Panther, Schwarzbären und Grizzlys. Je mehr Spieler unterwegs sind und je mehr Reviere Spieler halten, desto weniger solcher Reviere gibt es.</p>
<p>Auf der Karte sind sie rot wie jedes fremde Revier; die Tafel zeigt „Wildes Rudel: …“ oder „Wilder Einzelgänger: …“.</p>
<ul>
<li>Die Tiere erscheinen erst, wenn du in die Nähe kommst, und streifen durch ihr Revier.</li>
<li>Betrittst du ihr Revier, <strong>knurren sie dich an</strong> („Verschwinde, oder es greift an“). Bleibst du, greifen sie nach wenigen Sekunden an. Greifst du eines an, wehrt sich das ganze Rudel.</li>
<li>Schwer verletzte Tiere fliehen und kommen später zurück. Ohne Kampf kehren verlorene Tiere nach und nach zurück und Verletzte heilen.</li>
</ul>
<p><strong>Revier erobern:</strong></p>
<ol>
<li>Zweimal <kbd>G</kbd> im Revier: Du forderst das wilde Rudel heraus.</li>
<li>Vertreibe mindestens die Hälfte der Tiere (töten oder in die Flucht schlagen). Bis dahin „behaupten sie sich“ und der Zustand sinkt nicht – die Tafel zeigt, wie viele noch fehlen.</li>
<li>Danach verdrängt ihr sie wie jeden Besitzer – ohne Alarm, ohne Schutzzeiten und Angriffszeiten.</li>
</ol>
<p><strong>Belohnung:</strong> Jeder, der in den letzten 10 Minuten ein Tier des Rudels getroffen hat oder am Ende im Revier stand, bekommt derzeit 400 EP und 4 Ruhm („Rivalen vertrieben“); jedes beteiligte Spieler-Rudel 2 Rudelpunkte. Ein ausgelöschtes Rudel gibt sein Revier ebenfalls frei.</p>
<div class="hb-warn">Bündnisse gelten für wilde Rudel nicht, und auch Pflanzenfresser werden angegriffen (nur Tiere unter Spawn- oder Neulingsschutz und niedergestreckte lassen sie in Ruhe). Geh nicht allein und verletzt hinein.</div>`,
            en: `<p>So the wild has rivals even with few players, <strong>wild packs</strong> hold some free territories: wolf packs (3–5 animals), coyote packs (3–4) and single cougars, panthers, black bears and grizzlies. The more players are out and the more territories players hold, the fewer such territories there are.</p>
<p>On the map they are red like any foreign territory; the panel shows "Wild pack: …" or "Wild loner: …".</p>
<ul>
<li>The animals only appear when you come near, and roam their territory.</li>
<li>When you enter their territory, they <strong>growl at you</strong> ("Leave, or it attacks"). If you stay, they attack after a few seconds. If you attack one, the whole pack fights back.</li>
<li>Badly hurt animals flee and return later. Without fighting, lost animals come back one by one and injured ones heal.</li>
</ul>
<p><strong>Taking their territory:</strong></p>
<ol>
<li><kbd>G</kbd> twice inside the territory: you challenge the wild pack.</li>
<li>Drive off at least half of the animals (kill them or put them to flight). Until then "they hold their ground" and the hold does not drop – the panel shows how many are left.</li>
<li>After that you push them out like any owner – without alarm, protection or attack hours.</li>
</ol>
<p><strong>Reward:</strong> everyone who hit an animal of the pack within the last 10 minutes or stood in the territory at the end currently gets 400 XP and 4 fame ("Rivals driven off"); every player pack taking part 2 pack points. A pack that is wiped out frees its territory as well.</p>
<div class="hb-warn">Alliances do not count for wild packs, and plant eaters are attacked too (only animals under spawn or newcomer protection and downed ones are left alone). Do not walk in alone and wounded.</div>`,
        },
    ],
});
