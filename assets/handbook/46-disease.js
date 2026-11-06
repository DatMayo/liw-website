window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'disease',
    order: 46,
    icon: 'disease',
    title: { de: 'Krankheiten', en: 'Diseases' },
    sections: [
        {
            id: 'disease-overview',
            title: { de: 'So verlaufen Krankheiten', en: 'How diseases work' },
            tags: { de: 'krank krankheit inkubation immun ansteckung verlauf', en: 'sick illness incubation immune infection course' },
            de: `<p>Derzeit gibt es zwei Krankheiten: das <a href="#disease-carrion-fever">Aasfieber</a> und die <a href="#disease-rabies">Tollwut</a>. Beide laufen gleich ab:</p>
<ol>
<li><strong>Ansteckung</strong> – du merkst davon nichts.</li>
<li><strong>Inkubation</strong> – die Krankheit schlummert eine Weile unbemerkt. Du hast keine Nachteile und steckst niemanden an.</li>
<li><strong>Krank</strong> – eine Meldung sagt es dir, im HUD steht „Aasfieber“ bzw. „Tollwut“ als Status. Du hast Nachteile (siehe die einzelne Krankheit), und ab und zu kommt ein Anfall mit verschwommenem Bild und einer Meldung wie „Dir wird übel.“</li>
<li><strong>Genesen</strong> – „… ist überstanden. Eine Weile kann es dir nichts mehr anhaben.“ Danach bist du eine Zeit lang <strong>immun</strong>.</li>
</ol>
<ul>
<li>Die Zeit läuft nur, solange du in der Wildnis bist und nicht niedergestreckt. Ausloggen hält die Krankheit an – sie wartet auf dich.</li>
<li>Stirbt dein Tier, sterben seine Krankheiten mit ihm. Ein neues Tier ist gesund.</li>
<li>Andere Spieler sehen nicht direkt, dass du krank bist – bei Tollwut verrät dich aber dein unkontrolliertes Brüllen.</li>
</ul>
<p>Wie du schneller gesund wirst: <a href="#disease-healing">Krankheiten heilen</a>.</p>`,
            en: `<p>There are currently two diseases: <a href="#disease-carrion-fever">carrion fever</a> and <a href="#disease-rabies">rabies</a>. Both run the same way:</p>
<ol>
<li><strong>Infection</strong> – you do not notice it.</li>
<li><strong>Incubation</strong> – the disease lies dormant unnoticed for a while. You have no drawbacks and infect nobody.</li>
<li><strong>Sick</strong> – a message tells you, and the HUD shows "Carrion fever" or "Rabies" as your status. You have drawbacks (see the disease), and now and then a bout comes with a blurred view and a message like "You feel sick."</li>
<li><strong>Recovered</strong> – "… is over. For a while it cannot touch you." Afterwards you are <strong>immune</strong> for a while.</li>
</ol>
<ul>
<li>The time only runs while you are in the wild and not downed. Logging out pauses the disease – it waits for you.</li>
<li>When your animal dies, its diseases die with it. A new animal is healthy.</li>
<li>Other players cannot see directly that you are sick – but with rabies your uncontrolled roaring gives you away.</li>
</ul>
<p>How to get well sooner: <a href="#disease-healing">Healing diseases</a>.</p>`,
        },
        {
            id: 'disease-carrion-fever',
            title: { de: 'Aasfieber', en: 'Carrion fever' },
            tags: { de: 'aasfieber aas verdorben fieber übel', en: 'carrion fever rotten fever sick' },
            de: `<p><strong>Ansteckung:</strong> durch das Fressen von <a href="#food-carrion">Aas</a>. Jeder Biss Aas hat derzeit eine Chance von rund 8 % (Aasfresser deutlich weniger, siehe <a href="#disease-resistance">Widerstandskraft</a>). Frisches Fleisch ist ungefährlich.</p>
<table class="hb-table">
<tbody>
<tr><th>Inkubation</th><td>derzeit etwa 5 Minuten</td></tr>
<tr><th>Krank</th><td>derzeit etwa 30 Minuten (schneller mit Ruhe, Revier und Beeren)</td></tr>
<tr><th>Danach immun</th><td>derzeit 12 Stunden</td></tr>
</tbody>
</table>
<p>„Dir ist elend zumute – das verdorbene Aas war keine gute Idee. Ruhe und Beeren helfen.“ Solange du krank bist:</p>
<ul>
<li>Regeneration nur noch halb so stark,</li>
<li>Ausdauer lädt etwa 30 % langsamer,</li>
<li>Hunger sinkt etwa 25 % schneller,</li>
<li>du bist etwas langsamer.</li>
</ul>
<p>Aasfieber ist <strong>nicht ansteckend</strong>.</p>
<div class="hb-tip">Allesfresser haben ein Hausmittel: <a href="#food-berries">Beeren</a>. Jeder Biss Beeren verkürzt das Fieber derzeit um etwa 2½ Minuten – ein voller Busch heilt es fast ganz.</div>`,
            en: `<p><strong>Infection:</strong> by eating <a href="#food-carrion">carrion</a>. Every bite of carrion currently has a chance of around 8 % (scavengers much less, see <a href="#disease-resistance">Resistance</a>). Fresh meat is safe.</p>
<table class="hb-table">
<tbody>
<tr><th>Incubation</th><td>currently about 5 minutes</td></tr>
<tr><th>Sick</th><td>currently about 30 minutes (faster with rest, territory and berries)</td></tr>
<tr><th>Immune afterwards</th><td>currently 12 hours</td></tr>
</tbody>
</table>
<p>"You feel wretched - the rotten carrion was not a good idea. Rest and eat berries to get over it faster." While you are sick:</p>
<ul>
<li>regeneration only half as strong,</li>
<li>stamina recharges about 30 % slower,</li>
<li>hunger drops about 25 % faster,</li>
<li>you are a little slower.</li>
</ul>
<p>Carrion fever is <strong>not contagious</strong>.</p>
<div class="hb-tip">Omnivores have a home remedy: <a href="#food-berries">berries</a>. Every bite of berries currently shortens the fever by about 2½ minutes – a full bush cures it almost completely.</div>`,
        },
        {
            id: 'disease-rabies',
            title: { de: 'Tollwut', en: 'Rabies' },
            tags: { de: 'tollwut biss ansteckend wut brüllen', en: 'rabies bite contagious rage roar' },
            de: `<p><strong>Ansteckung:</strong></p>
<ul>
<li>durch den <strong>Biss eines wilden Tieres</strong>: Hundeartige (Wölfe, Kojoten, Füchse) mit derzeit etwa 1 % je Biss, kleine Tiere wie Waschbär, Dachs oder Stinktier mit etwa 2 % je Biss,</li>
<li>durch den <strong>Biss eines tollwütigen Spielers</strong>: Jeder Treffer (leichter, schwerer oder Spezialangriff) steckt derzeit mit etwa 15 % an.</li>
</ul>
<table class="hb-table">
<tbody>
<tr><th>Inkubation</th><td>derzeit etwa 15 Minuten</td></tr>
<tr><th>Krank</th><td>derzeit etwa 45 Minuten (schneller mit Ruhe und im eigenen Revier)</td></tr>
<tr><th>Danach immun</th><td>derzeit 24 Stunden</td></tr>
</tbody>
</table>
<p>„Etwas in dir wird wild und unruhig. Dein Biss ist jetzt gefährlich für andere …“ Solange du krank bist:</p>
<ul>
<li>du teilst etwa 15 % mehr Schaden aus – nimmst aber auch etwa 10 % mehr,</li>
<li>Durst sinkt etwa 30 % schneller,</li>
<li>Regeneration deutlich schwächer,</li>
<li>deine Sinne reichen weniger weit,</li>
<li>ab und zu brüllst bzw. heulst du ungewollt los („Ein Laut bricht aus dir heraus.“) – jeder in der Nähe hört es.</li>
</ul>
<div class="hb-warn">Tollwut ist <strong>ansteckend</strong>: Jeder Spieler, den du in der kranken Phase beißt, kann sie bekommen – auch dein eigenes Rudel, z. B. im Alpha-Duell. Halte dich zurück, bis du gesund bist.</div>
<p>Der <strong>Alligator</strong> ist immun, das <strong>Opossum</strong> fast, und durch den Panzer des <strong>Gürteltiers</strong> kommt nur jeder zweite Biss durch.</p>`,
            en: `<p><strong>Infection:</strong></p>
<ul>
<li>by the <strong>bite of a wild animal</strong>: canines (wolves, coyotes, foxes) currently about 1 % per bite, small animals such as raccoon, badger or skunk about 2 % per bite,</li>
<li>by the <strong>bite of a rabid player</strong>: every hit (light, heavy or special attack) currently infects with about 15 %.</li>
</ul>
<table class="hb-table">
<tbody>
<tr><th>Incubation</th><td>currently about 15 minutes</td></tr>
<tr><th>Sick</th><td>currently about 45 minutes (faster with rest and in your own territory)</td></tr>
<tr><th>Immune afterwards</th><td>currently 24 hours</td></tr>
</tbody>
</table>
<p>"Something in you turns wild and restless. Your bite is dangerous to others now …" While you are sick:</p>
<ul>
<li>you deal about 15 % more damage – but also take about 10 % more,</li>
<li>thirst drops about 30 % faster,</li>
<li>regeneration is clearly weaker,</li>
<li>your senses reach less far,</li>
<li>now and then you roar or howl without wanting to ("A sound bursts out of you.") – everyone nearby hears it.</li>
</ul>
<div class="hb-warn">Rabies is <strong>contagious</strong>: every player you bite while sick can catch it – your own pack too, e.g. in an alpha duel. Hold back until you are well.</div>
<p>The <strong>alligator</strong> is immune, the <strong>opossum</strong> almost, and only every second bite gets through the <strong>armadillo's</strong> armour.</p>`,
        },
        {
            id: 'disease-healing',
            title: { de: 'Krankheiten heilen', en: 'Healing diseases' },
            tags: { de: 'heilen gesund werden ruhe revier beeren', en: 'heal get well rest territory berries' },
            de: `<p>Es gibt keine Medizin – aber du kannst die kranke Phase deutlich verkürzen:</p>
<table class="hb-table">
<thead><tr><th>Was hilft</th><th>Aasfieber</th><th>Tollwut</th></tr></thead>
<tbody>
<tr><td>Ruhen (<kbd>Strg</kbd>)</td><td>vergeht doppelt so schnell</td><td>1,5-mal so schnell</td></tr>
<tr><td>Im eigenen Revier sein</td><td>1,5-mal so schnell</td><td>1,5-mal so schnell</td></tr>
<tr><td>Beide zusammen</td><td>dreimal so schnell</td><td>gut doppelt so schnell</td></tr>
<tr><td>Beeren fressen</td><td>je Biss etwa 2½ Minuten kürzer</td><td>–</td></tr>
</tbody>
</table>
<p>Die Inkubation lässt sich nicht verkürzen – sie zählt einfach ab.</p>
<div class="hb-tip">Bester Plan bei Krankheit: ins eigene Revier, satt und getränkt hinlegen und warten. Ein Aasfieber ist so nach etwa 10 Minuten vorbei. Wie du ein Revier bekommst: <a href="#territory">Reviere</a>.</div>`,
            en: `<p>There is no medicine – but you can make the sick stage much shorter:</p>
<table class="hb-table">
<thead><tr><th>What helps</th><th>Carrion fever</th><th>Rabies</th></tr></thead>
<tbody>
<tr><td>Resting (<kbd>Ctrl</kbd>)</td><td>passes twice as fast</td><td>1.5 times as fast</td></tr>
<tr><td>Being in your own territory</td><td>1.5 times as fast</td><td>1.5 times as fast</td></tr>
<tr><td>Both together</td><td>three times as fast</td><td>over twice as fast</td></tr>
<tr><td>Eating berries</td><td>about 2½ minutes shorter per bite</td><td>–</td></tr>
</tbody>
</table>
<p>The incubation cannot be shortened – it simply counts down.</p>
<div class="hb-tip">Best plan when sick: go to your own territory, lie down well fed and watered and wait. Carrion fever is over in about 10 minutes that way. How to get a territory: <a href="#territory">Territories</a>.</div>`,
        },
        {
            id: 'disease-resistance',
            title: { de: 'Widerstandskraft der Arten', en: 'Resistance of the species' },
            tags: { de: 'resistenz immun aasfresser widerstand', en: 'resistance immune scavenger' },
            de: `<p>Manche Arten stecken sich seltener an. Die Zahl ist die derzeitige Ansteckungschance im Vergleich zu einer normalen Art (100 %).</p>
<table class="hb-table">
<thead><tr><th>Art</th><th>Aasfieber</th><th>Tollwut</th></tr></thead>
<tbody>
<tr><td>Alligator</td><td>30 %</td><td>immun</td></tr>
<tr><td>Opossum</td><td>30 %</td><td>20 %</td></tr>
<tr><td>Ratte</td><td>30 %</td><td>100 %</td></tr>
<tr><td>Kojote, Waschbär</td><td>40 %</td><td>100 %</td></tr>
<tr><td>Dachs, Stinktier, Wildschwein</td><td>50 %</td><td>100 %</td></tr>
<tr><td>Schwarzbär, Grizzlybär</td><td>60 %</td><td>100 %</td></tr>
<tr><td>Gürteltier</td><td>100 %</td><td>50 %</td></tr>
<tr><td>alle anderen</td><td>100 %</td><td>100 %</td></tr>
</tbody>
</table>
<p>Pflanzenfresser fressen kein Aas und bekommen deshalb auch kein Aasfieber.</p>`,
            en: `<p>Some species catch diseases less often. The number is the current infection chance compared with a normal species (100 %).</p>
<table class="hb-table">
<thead><tr><th>Species</th><th>Carrion fever</th><th>Rabies</th></tr></thead>
<tbody>
<tr><td>Alligator</td><td>30 %</td><td>immune</td></tr>
<tr><td>Opossum</td><td>30 %</td><td>20 %</td></tr>
<tr><td>Rat</td><td>30 %</td><td>100 %</td></tr>
<tr><td>Coyote, raccoon</td><td>40 %</td><td>100 %</td></tr>
<tr><td>Badger, skunk, wild boar</td><td>50 %</td><td>100 %</td></tr>
<tr><td>Black bear, grizzly bear</td><td>60 %</td><td>100 %</td></tr>
<tr><td>Armadillo</td><td>100 %</td><td>50 %</td></tr>
<tr><td>all others</td><td>100 %</td><td>100 %</td></tr>
</tbody>
</table>
<p>Herbivores do not eat carrion, so they never get carrion fever.</p>`,
        },
    ],
});
