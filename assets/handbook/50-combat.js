window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'combat',
    order: 50,
    icon: 'combat',
    title: { de: 'Kampf', en: 'Combat' },
    sections: [
        {
            id: 'combat-keys',
            title: { de: 'Kampftasten', en: 'Combat keys' },
            tags: { de: 'tasten angriff maus q r feststelltaste x', en: 'keys attack mouse q r caps lock x' },
            de: `<table class="hb-table">
<thead><tr><th>Taste</th><th>Aktion</th></tr></thead>
<tbody>
<tr><td><kbd>Linke Maustaste</kbd></td><td><a href="#combat-attacks">Leichter Angriff</a></td></tr>
<tr><td><kbd>Rechte Maustaste</kbd></td><td><a href="#combat-attacks">Schwerer Angriff</a></td></tr>
<tr><td><kbd>Q</kbd></td><td><a href="#combat-dodge">Ausweichen</a></td></tr>
<tr><td><kbd>R</kbd></td><td><a href="#combat-roar">Brüllen / Heulen</a></td></tr>
<tr><td><kbd>Feststelltaste</kbd></td><td><a href="#combat-special">Sonderfähigkeit</a> deiner Art</td></tr>
<tr><td><kbd>X</kbd></td><td><a href="#combat-ability">Zweite Fähigkeit</a> (erst nach dem Erlernen)</td></tr>
</tbody>
</table>
<p>Alle Tasten kannst du ändern: Einstellungen → Tastenbelegung → RedM (Einträge mit „LiW:“). Eine Übersicht aller Tasten gibt es auf der Seite <a href="tasten.html">Tastenbelegung</a>.</p>
<ul>
<li>Jede Aktion kostet <a href="#needs-stamina">Ausdauer</a> und hat eine Abklingzeit. Ist sie noch nicht bereit, kommt bei Fähigkeiten „Noch nicht bereit.“</li>
<li>Niedergestreckt kannst du nicht kämpfen.</li>
<li>Beim <strong>Schwimmen</strong> kannst du nicht kämpfen („Beim Schwimmen kannst du nicht kämpfen.“) – außer als <strong>Biber</strong> oder <strong>Bisamratte</strong>. Brüllen geht immer.</li>
</ul>`,
            en: `<table class="hb-table">
<thead><tr><th>Key</th><th>Action</th></tr></thead>
<tbody>
<tr><td><kbd>Left mouse button</kbd></td><td><a href="#combat-attacks">Light attack</a></td></tr>
<tr><td><kbd>Right mouse button</kbd></td><td><a href="#combat-attacks">Heavy attack</a></td></tr>
<tr><td><kbd>Q</kbd></td><td><a href="#combat-dodge">Dodge</a></td></tr>
<tr><td><kbd>R</kbd></td><td><a href="#combat-roar">Roar / howl</a></td></tr>
<tr><td><kbd>Caps Lock</kbd></td><td>Your species' <a href="#combat-special">special ability</a></td></tr>
<tr><td><kbd>X</kbd></td><td><a href="#combat-ability">Second ability</a> (only once learned)</td></tr>
</tbody>
</table>
<p>You can change every key: Settings → Key Bindings → RedM (entries starting with "LiW:"). An overview of all keys is on the <a href="tasten.html">key bindings</a> page.</p>
<ul>
<li>Every action costs <a href="#needs-stamina">stamina</a> and has a cooldown. If an ability is not ready yet, you get "Not ready yet."</li>
<li>You cannot fight while downed.</li>
<li>You cannot fight while <strong>swimming</strong> ("You cannot fight while swimming.") – except as a <strong>beaver</strong> or <strong>muskrat</strong>. Roaring always works.</li>
</ul>`,
        },
        {
            id: 'combat-attacks',
            title: { de: 'Leichter und schwerer Angriff', en: 'Light and heavy attack' },
            tags: { de: 'beißen biss angriff schlag treffen reichweite', en: 'bite attack strike hit range' },
            de: `<p>Jede Art hat einen <strong>leichten</strong> und einen <strong>schweren</strong> Angriff – Biss, Prankenhieb, Huftritt oder Hornstoß.</p>
<table class="hb-table">
<thead><tr><th></th><th>Leicht (<kbd>Linke Maustaste</kbd>)</th><th>Schwer (<kbd>Rechte Maustaste</kbd>)</th></tr></thead>
<tbody>
<tr><td>Schaden</td><td>niedrig</td><td>etwa doppelt so hoch</td></tr>
<tr><td>Abklingzeit</td><td>etwa ½–1½ Sekunden</td><td>etwa 2–4½ Sekunden</td></tr>
<tr><td>Reichweite</td><td>kurz, breiter Bogen</td><td>etwas weiter, schmaler</td></tr>
<tr><td>Ausdauer</td><td>wenig</td><td>deutlich mehr</td></tr>
</tbody>
</table>
<p>Die genauen Werte je Art stehen unter <a href="#species-combat">Kampfwerte</a>.</p>
<ul>
<li>Du triffst, was <strong>vor dir</strong> in Reichweite ist – richte dein Tier zum Ziel aus. Eine Treffhilfe gibt etwas Spielraum bei Reichweite und Winkel; lange Tiere wie Hirsche musst du nicht in der Mitte treffen, und auch winzige Ziele bleiben treffbar.</li>
<li>Der Treffer kommt nicht sofort, sondern im Moment des Zubeißens in der Animation.</li>
<li>Ein Treffer, der bei dir landet, rüttelt kurz die Kamera; triffst du selbst, wackelt sie leicht.</li>
</ul>
<div class="hb-tip">Leichte Angriffe für Dauerdruck, schwere für den Moment, in dem das Ziel nicht ausweichen kann. Behalte deine Ausdauer im Blick – ohne Puste kein Angriff und kein Ausweichen.</div>`,
            en: `<p>Every species has a <strong>light</strong> and a <strong>heavy</strong> attack – a bite, a paw swipe, a kick or a horn butt.</p>
<table class="hb-table">
<thead><tr><th></th><th>Light (<kbd>Left mouse button</kbd>)</th><th>Heavy (<kbd>Right mouse button</kbd>)</th></tr></thead>
<tbody>
<tr><td>Damage</td><td>low</td><td>about twice as high</td></tr>
<tr><td>Cooldown</td><td>about ½–1½ seconds</td><td>about 2–4½ seconds</td></tr>
<tr><td>Range</td><td>short, wide arc</td><td>a bit further, narrower</td></tr>
<tr><td>Stamina</td><td>little</td><td>clearly more</td></tr>
</tbody>
</table>
<p>The exact values per species are under <a href="#species-combat">Combat values</a>.</p>
<ul>
<li>You hit what is <strong>in front of you</strong> within range – face your target. A hit assist gives some leeway in range and angle; you do not have to hit long animals like deer in the middle, and even tiny targets stay hittable.</li>
<li>The hit does not land at once but at the moment of the bite in the animation.</li>
<li>When a hit lands on you, the camera shakes briefly; when you land one, it wobbles slightly.</li>
</ul>
<div class="hb-tip">Light attacks for steady pressure, heavy ones for the moment your target cannot dodge. Watch your stamina – out of breath means no attack and no dodge.</div>`,
        },
        {
            id: 'combat-special',
            title: { de: 'Sonderfähigkeit (Feststelltaste)', en: 'Special ability (Caps Lock)' },
            tags: { de: 'sonderfähigkeit spezial sprung sprint heulen feststelltaste', en: 'special ability pounce burst howl caps lock' },
            de: `<p>Jede Art hat von Anfang an eine <strong>Sonderfähigkeit</strong> auf der <kbd>Feststelltaste</kbd>. Der Ring „Sonderfähigkeit“ im HUD zeigt, wann sie wieder bereit ist. Es gibt vier Sorten:</p>
<table class="hb-table">
<thead><tr><th>Sorte</th><th>Was passiert</th><th>Arten</th></tr></thead>
<tbody>
<tr><td><strong>Sprung</strong></td><td>Du springst nach vorn und landest einen sehr harten Treffer.</td><td>Puma, Panther, Rotfuchs (Mäusesprung)</td></tr>
<tr><td><strong>Wuchtangriff</strong></td><td>Ein besonders schwerer Angriff (Prankenhieb, Ansturm, Hornstoß, Schnappen).</td><td>Schwarzbär, Grizzly, Alligator, Elch, Bison, Wildschwein, Dickhornschaf, Stinktier (Strahl)</td></tr>
<tr><td><strong>Sprint</strong></td><td>Ein paar Sekunden deutlich schneller (Effekt „Sprint“ im HUD).</td><td>Weißwedelhirsch, Wapiti, Wildpferd, Gabelbock, Biber, Bisamratte, Kaninchen, Eichhörnchen, Streifenhörnchen, Waschbär, Opossum, Gürteltier, Dachs, Ratte</td></tr>
<tr><td><strong>Heulen</strong></td><td>Du und dein Rudel in der Nähe bekommen sofort Ausdauer zurück und kurz den Effekt „Heulen“ (schnellere Ausdauer-Erholung, etwas schneller).</td><td>Wolf (bis 50 m), Kojote (bis 40 m)</td></tr>
</tbody>
</table>
<p>Abklingzeiten liegen derzeit zwischen etwa 12 Sekunden (Rotfuchs) und einer Minute (Wolfsgeheul). Der <strong>Strahl des Stinktiers</strong> macht kaum Schaden, reißt wilde Tiere aber um und lässt sie danach eine Weile taumeln.</p>
<p>Die Sonderfähigkeit jeder Art steht auch bei den <a href="#species">Tierarten</a>.</p>`,
            en: `<p>Every species has a <strong>special ability</strong> on <kbd>Caps Lock</kbd> from the start. The "Special ability" ring in the HUD shows when it is ready again. There are four kinds:</p>
<table class="hb-table">
<thead><tr><th>Kind</th><th>What happens</th><th>Species</th></tr></thead>
<tbody>
<tr><td><strong>Pounce</strong></td><td>You leap forward and land a very hard hit.</td><td>Cougar, panther, red fox (mouse leap)</td></tr>
<tr><td><strong>Power attack</strong></td><td>An extra heavy attack (swipe, charge, horn butt, snap).</td><td>Black bear, grizzly, alligator, moose, bison, wild boar, bighorn sheep, skunk (spray)</td></tr>
<tr><td><strong>Burst</strong></td><td>A few seconds clearly faster (effect "Sprint burst" in the HUD).</td><td>Whitetail deer, elk, wild horse, pronghorn, beaver, muskrat, rabbit, squirrel, chipmunk, raccoon, opossum, armadillo, badger, rat</td></tr>
<tr><td><strong>Howl</strong></td><td>You and your pack nearby instantly get stamina back and briefly the effect "Howl" (faster stamina recovery, a little faster).</td><td>Wolf (up to 50 m), coyote (up to 40 m)</td></tr>
</tbody>
</table>
<p>Cooldowns currently range from about 12 seconds (red fox) to one minute (wolf howl). The <strong>skunk's spray</strong> barely does damage but knocks wild animals over and makes them stagger for a while afterwards.</p>
<p>The special ability of each species is also listed under <a href="#species">Species</a>.</p>`,
        },
        {
            id: 'combat-ability',
            title: { de: 'Zweite Fähigkeit (X)', en: 'Second ability (X)' },
            tags: { de: 'zweite fähigkeit x skill freischalten buff', en: 'second ability x skill unlock buff' },
            de: `<p>Jede Art hat eine zweite, starke Fähigkeit auf <kbd>X</kbd>. Sie ist anfangs <strong>gesperrt</strong> („Lerne zuerst die Fähigkeit dafür (Charaktermenü, J).“).</p>
<ol>
<li>Öffne das Charaktermenü mit <kbd>J</kbd>, Reiter <strong>Fähigkeiten</strong>.</li>
<li>Lerne die Art-Fähigkeit der Stufe 2, bei der „Schaltet frei (X): …“ steht – z. B. „Wut des Rudels“ beim Wolf. Wie du Fähigkeitspunkte bekommst: <a href="#progress">Fortschritt</a>.</li>
<li>Ab jetzt löst <kbd>X</kbd> die Fähigkeit aus. Ein Ring „Zweite Fähigkeit“ im HUD zeigt die Abklingzeit.</li>
</ol>
<p>Die zweite Fähigkeit ist ein zeitlich begrenzter <strong>Effekt</strong> (derzeit meist 15–25 Sekunden, Abklingzeit etwa 45–90 Sekunden). Einige wirken auch auf dein Rudel bzw. deine Herde in der Nähe – die bekommen dann eine Meldung wie „Dein Rudel ist in Rage – deine Bisse treffen härter!“</p>
<table class="hb-table">
<thead><tr><th>Wirkt auf das Rudel / die Herde</th><th>Nur auf dich</th></tr></thead>
<tbody>
<tr><td>Rudelwut (Wolf), Hetzjagd (Kojote), Herdenwall (Bison), Stampede (Wildpferd), Weißer Spiegel (Gabelbock), Kellenschlag (Biber), Ausschwärmen (Ratte)</td><td>alle anderen, z. B. Lauern (Puma), Raserei (Schwarzbär), Totstellen (Opossum)</td></tr>
</tbody>
</table>
<p>Was jede Fähigkeit genau tut, steht bei der jeweiligen <a href="#species">Art</a>. Die Stufe-3-Fähigkeit derselben Art verbessert oft Dauer oder Abklingzeit.</p>`,
            en: `<p>Every species has a second, strong ability on <kbd>X</kbd>. It is <strong>locked</strong> at first ("Learn the skill for this ability first (character menu, J).").</p>
<ol>
<li>Open the character menu with <kbd>J</kbd>, tab <strong>Skills</strong>.</li>
<li>Learn the tier 2 species skill that says "Unlocks (X): …" – e.g. "Rage of the Pack" for the wolf. How to get skill points: <a href="#progress">Progress</a>.</li>
<li>From now on <kbd>X</kbd> triggers the ability. A "Second ability" ring in the HUD shows the cooldown.</li>
</ol>
<p>The second ability is a timed <strong>effect</strong> (currently mostly 15–25 seconds, cooldown about 45–90 seconds). Some also work on your pack or herd nearby – they then get a message like "Your pack is in a rage - your bites hit harder!"</p>
<table class="hb-table">
<thead><tr><th>Works on the pack / herd</th><th>Only on you</th></tr></thead>
<tbody>
<tr><td>Pack Rage (wolf), Harry (coyote), Herd Wall (bison), Stampede (wild horse), White Flash (pronghorn), Tail Slap (beaver), Swarm (rat)</td><td>all others, e.g. Stalk (cougar), Rage (black bear), Play Dead (opossum)</td></tr>
</tbody>
</table>
<p>What each ability does exactly is listed with each <a href="#species">species</a>. The tier 3 skill of the same species often improves duration or cooldown.</p>`,
        },
        {
            id: 'combat-dodge',
            title: { de: 'Ausweichen (Q)', en: 'Dodge (Q)' },
            tags: { de: 'ausweichen q unverwundbar', en: 'dodge q invulnerable' },
            de: `<p>Mit <kbd>Q</kbd> springst du zur Seite bzw. zurück. Für einen kurzen Moment (derzeit eine halbe Sekunde) <strong>gehen Angriffe anderer Spieler ins Leere</strong> – du siehst dann „Ausgewichen!“.</p>
<ul>
<li>Abklingzeit derzeit etwa 1–2 Sekunden, kostet Ausdauer.</li>
<li>Der <strong>Schwarzbär</strong> kann nicht ausweichen – er steckt ein.</li>
</ul>
<div class="hb-tip">Weiche aus, wenn du den schweren Angriff des Gegners kommen siehst – der hat eine lange Abklingzeit, und du hast danach ein Fenster zum Gegenangriff.</div>`,
            en: `<p>With <kbd>Q</kbd> you jump aside or back. For a short moment (currently half a second) <strong>attacks of other players miss</strong> – you see "Dodged!".</p>
<ul>
<li>Cooldown currently about 1–2 seconds, costs stamina.</li>
<li>The <strong>black bear</strong> cannot dodge – it takes the blows.</li>
</ul>
<div class="hb-tip">Dodge when you see your opponent's heavy attack coming – it has a long cooldown, and you get a window to strike back.</div>`,
        },
        {
            id: 'combat-roar',
            title: { de: 'Brüllen (R)', en: 'Roar (R)' },
            tags: { de: 'brüllen heulen knurren r laut drohen', en: 'roar howl growl r sound threaten' },
            de: `<p><kbd>R</kbd> lässt dein Tier brüllen, heulen, knurren, röhren oder fauchen – je nach Art. Alle Spieler in etwa 150 m Umkreis hören es (leiser, je weiter weg).</p>
<ul>
<li>Brüllen macht keinen Schaden – es ist zum Drohen, Warnen und Rufen da.</li>
<li>Abklingzeit derzeit 6–8 Sekunden. Geht auch beim Schwimmen.</li>
<li>Manche Aufgaben verlangen Brüllen oder Heulen (<a href="#quests">Aufgaben</a>).</li>
</ul>
<p>Weitere Laute und Gesten findest du im <a href="#voice-emotes">Emote-Rad</a> (<kbd>F</kbd>).</p>`,
            en: `<p><kbd>R</kbd> makes your animal roar, howl, growl, bugle or hiss – depending on the species. Every player within about 150 m hears it (quieter the further away).</p>
<ul>
<li>Roaring does no damage – it is for threatening, warning and calling.</li>
<li>Cooldown currently 6–8 seconds. Works while swimming too.</li>
<li>Some quests ask for roaring or howling (<a href="#quests">Quests</a>).</li>
</ul>
<p>More sounds and gestures are in the <a href="#voice-emotes">emote wheel</a> (<kbd>F</kbd>).</p>`,
        },
        {
            id: 'combat-damage',
            title: { de: 'Schaden: was zählt', en: 'Damage: what counts' },
            tags: { de: 'schaden berechnung einzelgänger bonus stärke jungtier', en: 'damage calculation loner bonus strength juvenile' },
            de: `<p>Wie hart dein Angriff trifft, hängt ab von:</p>
<ul>
<li>dem <strong>Grundschaden</strong> deiner Art und des Angriffs (<a href="#species-combat">Kampfwerte</a>),</li>
<li>deinem Attribut <strong>Stärke</strong> und Fähigkeiten mit „Schaden“ (<a href="#progress">Fortschritt</a>),</li>
<li>aktiven Effekten wie Rudelwut, Raserei oder Todesrolle (stärker) bzw. Überfressen (schwächer),</li>
<li>deinem <strong>Alter</strong>: Jungtiere beißen anfangs deutlich schwächer (<a href="#life">Lebenslauf</a>),</li>
<li>dem <strong>Einzelgänger-Bonus</strong>: Einzelgänger-Arten (z. B. Puma, Bär, Elch) machen derzeit 10 % mehr Schaden, solange kein Mitglied ihres Rudels im Umkreis von 100 m ist.</li>
</ul>
<p>Wie viel davon beim Ziel ankommt, hängt von dessen <strong>erlittenem Schaden</strong> ab – Abwehrfähigkeiten wie Herdenwall, Einrollen oder Stinkwolke senken ihn, Tollwut erhöht ihn.</p>
<p>Schwere Treffer verursachen beim Getroffenen <a href="#health-bleeding">Blutung</a> und <a href="#health-limping">Humpeln</a>.</p>`,
            en: `<p>How hard your attack hits depends on:</p>
<ul>
<li>the <strong>base damage</strong> of your species and attack (<a href="#species-combat">Combat values</a>),</li>
<li>your <strong>Strength</strong> attribute and skills with "Damage" (<a href="#progress">Progress</a>),</li>
<li>active effects such as Pack Rage, Rage or Death Roll (stronger) or Overfed (weaker),</li>
<li>your <strong>age</strong>: juveniles bite clearly weaker at first (<a href="#life">Life cycle</a>),</li>
<li>the <strong>loner bonus</strong>: loner species (e.g. cougar, bear, moose) currently deal 10 % more damage while no member of their pack is within 100 m.</li>
</ul>
<p>How much of it reaches the target depends on the target's <strong>damage taken</strong> – defensive abilities such as Herd Wall, Curl Up or Stink Cloud lower it, rabies raises it.</p>
<p>Heavy hits cause <a href="#health-bleeding">bleeding</a> and <a href="#health-limping">limping</a> on the target.</p>`,
        },
        {
            id: 'combat-pvp',
            title: { de: 'Kampf zwischen Spielern', en: 'Fights between players' },
            tags: { de: 'pvp spieler kampf regeln schutz pflanzenfresser verbündet', en: 'pvp player fight rules protection herbivore allied' },
            de: `<p>Spieler können einander angreifen. Folgende Regeln setzt das Spiel selbst durch:</p>
<ul>
<li><strong>Pflanzenfresser wehren sich nur.</strong> Ein Pflanzenfresser kann einen Spieler nur verletzen, wenn dieser ihn in den letzten 30 Sekunden angegriffen hat – sonst: „Deine Art wehrt sich nur – sie jagt keine anderen.“ Fleisch- und Allesfresser dürfen angreifen.</li>
<li><strong>Verbündete Rudel</strong> können sich nicht verletzen („Eure Rudel sind verbündet – ihr verletzt euch nicht.“). Mitglieder <em>desselben</em> Rudels können sich dagegen treffen – z. B. im Alpha-Duell (<a href="#pack">Rudel</a>).</li>
<li><strong>Neulingsschutz:</strong> Neue Tiere sind in ihrer ersten Stunde in der Wildnis vor anderen Spielern geschützt (HUD: „Geschützt“). Greift ein Neuling selbst an, wird er gewarnt; ein zweiter Angriff innerhalb von 10 Sekunden beendet seinen Schutz endgültig. Details unter <a href="#start">Erste Schritte</a>.</li>
<li><strong>Spawnschutz:</strong> Direkt nach dem Betreten der Wildnis bist du einige Sekunden unverwundbar.</li>
<li>Im <strong>Alpha-Duell</strong> dürfen beide angreifen, auch Pflanzenfresser, und niemand stirbt.</li>
</ul>
<div class="hb-warn">Ein getötetes Tier ist für immer tot. Überleg dir, mit wem du dich anlegst – und hab dein Rudel in der Nähe, das dir <a href="#health-help-up">aufhelfen</a> kann.</div>`,
            en: `<p>Players can attack each other. The game itself enforces these rules:</p>
<ul>
<li><strong>Herbivores only fight back.</strong> A herbivore can only hurt a player who attacked it within the last 30 seconds – otherwise: "Your kind only fights back - it does not hunt others." Carnivores and omnivores may attack.</li>
<li><strong>Allied packs</strong> cannot hurt each other ("Your packs are allies - you do not hurt each other."). Members of the <em>same</em> pack can hit each other, though – e.g. in an alpha duel (<a href="#pack">Packs</a>).</li>
<li><strong>Newcomer protection:</strong> new animals are protected from other players during their first hour in the wild (HUD: "Protected"). If a newcomer attacks, they are warned first; a second attack within 10 seconds ends their protection for good. Details under <a href="#start">First steps</a>.</li>
<li><strong>Spawn protection:</strong> right after entering the wild you are invulnerable for a few seconds.</li>
<li>In an <strong>alpha duel</strong> both may attack, herbivores too, and nobody dies.</li>
</ul>
<div class="hb-warn">An animal that is killed is dead for good. Think about who you pick a fight with – and keep your pack nearby to <a href="#health-help-up">help you up</a>.</div>`,
        },
        {
            id: 'combat-wild',
            title: { de: 'Wilde Tiere', en: 'Wild animals' },
            tags: { de: 'npc wildtiere aggression lebensbalken blutrausch verlangsamen umreißen', en: 'npc wild animals aggression health bar bloodlust slow stun' },
            de: `<h4>Wann dich wilde Tiere angreifen</h4>
<p>Jedes wilde Tier hat eine <strong>Aggression</strong>. Sie steigt, solange du in der Nähe bist – je näher, desto schneller:</p>
<ul>
<li><strong>Raubtiere</strong> bemerken dich derzeit bis etwa 80 m, wenn du für sie Beute bist. Wölfe und Kojoten teilen ihre Aggression und greifen gemeinsam an.</li>
<li><strong>Große Pflanzenfresser</strong> werden langsam unruhig, wenn du in ihrem Blickfeld bist – dann stürmen sie einmal an und fliehen.</li>
<li>Ist die Aggression voll, greift das Tier an. Entfernst du dich, sinkt sie wieder.</li>
<li>Mit guter <strong>Tarnung</strong> (Attribut, Fähigkeiten wie „Leise Pfoten“, Effekte wie „Lauern“ oder „Schatten“) bemerken dich Tiere erst viel später. Kleine Arten sind von Natur aus unauffälliger.</li>
</ul>
<p>Wilde Bisse verletzen dich wie Spielerangriffe und können <a href="#disease-rabies">Tollwut</a> übertragen.</p>
<h4>Lebensbalken</h4>
<ul>
<li>Über Tieren direkt neben dir (etwa 3 m) siehst du ihren Lebensbalken.</li>
<li>Tiere, deren Aggression steigt, zeigen ihren Balken bis etwa 80 m, mit einer zweiten Leiste für die Aggression darunter.</li>
<li><strong>Blutrausch:</strong> Nach 3 Treffern auf dasselbe Tier bleibt sein Balken 30 Sekunden lang sichtbar (bis 60 m) – so verlierst du verwundete Beute nicht aus den Augen.</li>
</ul>
<h4>Jagd-Effekte</h4>
<p>Treffer von Fleisch- und Allesfressern können wilde Tiere zusätzlich schwächen (Spieler sind davon nicht betroffen):</p>
<table class="hb-table">
<thead><tr><th>Effekt</th><th>Wer, womit</th></tr></thead>
<tbody>
<tr><td>Verlangsamt („Am Bein erwischt – es wird langsamer.“)</td><td>schwerer Angriff, mit einer gewissen Chance – fast alle Jäger</td></tr>
<tr><td>Blutet („Es blutet.“)</td><td>leichter Angriff von Wolf, Kojote und Rotfuchs, mit einer gewissen Chance</td></tr>
<tr><td>Umgerissen („Umgerissen!“)</td><td>Sonderfähigkeit von Puma, Panther, Schwarzbär, Grizzly und Alligator (immer); Strahl des Stinktiers</td></tr>
</tbody>
</table>
<p>Große Tiere sind kürzer betroffen, und ein umgerissenes Tier ist danach eine Weile nicht erneut umzureißen. Verlangsamt ein ganzes Rudel dasselbe Tier, wird es immer langsamer. Stirbt Beute an ihrer Blutung, zählt der Kill für dich.</p>`,
            en: `<h4>When wild animals attack you</h4>
<p>Every wild animal has an <strong>aggression</strong> level. It rises while you are nearby – the closer, the faster:</p>
<ul>
<li><strong>Predators</strong> currently notice you up to about 80 m if you are prey to them. Wolves and coyotes share their aggression and attack together.</li>
<li><strong>Large herbivores</strong> slowly get restless while you are in their field of view – then they charge once and flee.</li>
<li>When aggression is full, the animal attacks. If you move away, it drops again.</li>
<li>With good <strong>stealth</strong> (attribute, skills such as "Silent Paws", effects such as "Stalk" or "Shadow") animals notice you much later. Small species are less conspicuous by nature.</li>
</ul>
<p>Wild bites hurt you like player attacks and can carry <a href="#disease-rabies">rabies</a>.</p>
<h4>Health bars</h4>
<ul>
<li>Above animals right next to you (about 3 m) you see their health bar.</li>
<li>Animals whose aggression is rising show their bar up to about 80 m, with a second bar for the aggression below it.</li>
<li><strong>Bloodlust:</strong> after 3 hits on the same animal its bar stays visible for 30 seconds (up to 60 m) – so you do not lose sight of wounded prey.</li>
</ul>
<h4>Hunting effects</h4>
<p>Hits by carnivores and omnivores can weaken wild animals further (players are not affected):</p>
<table class="hb-table">
<thead><tr><th>Effect</th><th>Who, with what</th></tr></thead>
<tbody>
<tr><td>Slowed ("Caught its leg - it slows down.")</td><td>heavy attack, with a certain chance – almost every hunter</td></tr>
<tr><td>Bleeding ("It is bleeding.")</td><td>light attack of wolf, coyote and red fox, with a certain chance</td></tr>
<tr><td>Knocked down ("Knocked down!")</td><td>special ability of cougar, panther, black bear, grizzly and alligator (always); the skunk's spray</td></tr>
</tbody>
</table>
<p>Big animals are affected for a shorter time, and a knocked-down animal cannot be knocked down again for a while. If a whole pack slows the same animal, it gets slower and slower. If prey dies from its bleeding, the kill counts for you.</p>`,
        },
        {
            id: 'combat-kills',
            title: { de: 'Kills', en: 'Kills' },
            tags: { de: 'kill töten getötet erfahrung beute wer bekommt', en: 'kill killed experience prey credit' },
            de: `<ul>
<li><strong>Wilde Tiere:</strong> Den Kill bekommt, wer das Tier <strong>zuletzt</strong> getroffen hat – und nur, wenn dieser Treffer höchstens etwa 20 Sekunden her ist. Bisse deines Begleiters zählen wie deine eigenen (<a href="#companion">Begleiter</a>).</li>
<li><strong>Legendäre Tiere</strong> brauchen mehrere Treffer, bevor ihr Kill zählt (<a href="#events">Events</a>).</li>
<li>Ein Kill bringt Erfahrung (bei manchen Tieren auch Ruhm) und zählt für Aufgaben und Statistiken (<a href="#progress">Fortschritt</a>, <a href="#quests">Aufgaben</a>, <a href="#ranking">Ranglisten</a>).</li>
<li>Das getötete Tier ist 10 Minuten lang <a href="#food-hunting">frisches Fleisch</a>.</li>
<li><strong>Spieler:</strong> Ein Spieler, der auf null fällt, wird erst <a href="#health-downed">niedergestreckt</a>. Stirbt er, gilt als Täter, wer ihn in der letzten Minute zuletzt getroffen hat.</li>
</ul>`,
            en: `<ul>
<li><strong>Wild animals:</strong> the kill goes to whoever hit the animal <strong>last</strong> – and only if that hit was at most about 20 seconds ago. Bites of your companion count like your own (<a href="#companion">Companions</a>).</li>
<li><strong>Legendary animals</strong> need several hits before their kill counts (<a href="#events">Events</a>).</li>
<li>A kill gives experience (for some animals fame too) and counts for quests and statistics (<a href="#progress">Progress</a>, <a href="#quests">Quests</a>, <a href="#ranking">Rankings</a>).</li>
<li>The killed animal is <a href="#food-hunting">fresh meat</a> for 10 minutes.</li>
<li><strong>Players:</strong> a player who drops to zero is <a href="#health-downed">downed</a> first. If they die, the killer is whoever hit them last within the last minute.</li>
</ul>`,
        },
    ],
});
