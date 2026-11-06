window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'senses',
    order: 48,
    icon: 'senses',
    title: { de: 'Sinne', en: 'Senses' },
    sections: [
        {
            id: 'senses-mode',
            title: { de: 'Sinnesmodus (V)', en: 'Sense mode (V)' },
            tags: { de: 'sinne witterung riechen nachtsicht v energie', en: 'senses scent smell night vision v energy' },
            de: `<p>Mit <kbd>V</kbd> schärfst du deine Sinne: „Deine Sinne schärfen sich.“ Je nach Art <strong>witterst</strong> du (das Bild wird zur Geruchsansicht) oder siehst im Dunkeln (<strong>Nachtsicht</strong>). Alle Tiere in Reichweite werden auf dem Bildschirm markiert (<a href="#senses-markers">Markierungen</a>).</p>
<ul>
<li>Der Sinn verbraucht <strong>Energie</strong> – der Ring „Sinne“ im HUD zeigt sie. Voll reicht sie derzeit für etwa 12 Sekunden.</li>
<li>Nochmal <kbd>V</kbd> schaltet ab; was übrig ist, bleibt erhalten.</li>
<li>Nach dem Abschalten kurz Pause (etwa 2 Sekunden), dann lädt sie wieder auf – von leer bis voll derzeit etwa 25 Sekunden.</li>
<li>Zum Einschalten brauchst du mindestens 15 % Energie, sonst: „Deine Sinne brauchen einen Moment Ruhe.“</li>
<li>Niedergestreckt geht es nicht.</li>
</ul>
<p>Wie lange und wie weit deine Sinne reichen, verbessern das Attribut <strong>Sinne</strong> und passende Fähigkeiten (<a href="#progress">Fortschritt</a>). Tollwut schwächt sie (<a href="#disease-rabies">Tollwut</a>).</p>
<div class="hb-tip">Kurz antippen statt dauerhaft anlassen: Ein schneller Rundumblick kostet wenig Energie, und du hast noch etwas übrig, wenn es ernst wird.</div>`,
            en: `<p>Press <kbd>V</kbd> to sharpen your senses: "Your senses sharpen." Depending on your species you <strong>scent</strong> (the view turns into a scent view) or see in the dark (<strong>night vision</strong>). All animals in range are marked on screen (<a href="#senses-markers">Markers</a>).</p>
<ul>
<li>The sense uses <strong>energy</strong> – the "Senses" ring in the HUD shows it. Full, it currently lasts about 12 seconds.</li>
<li>Press <kbd>V</kbd> again to switch off; whatever is left is kept.</li>
<li>After switching off there is a short pause (about 2 seconds), then it recharges – from empty to full currently about 25 seconds.</li>
<li>You need at least 15 % energy to switch it on, otherwise: "Your senses need a moment to recover."</li>
<li>It does not work while downed.</li>
</ul>
<p>The <strong>Senses</strong> attribute and fitting skills improve how long and how far your senses reach (<a href="#progress">Progress</a>). Rabies weakens them (<a href="#disease-rabies">Rabies</a>).</p>
<div class="hb-tip">Tap it briefly rather than leaving it on: a quick look around costs little energy, and you still have some left when things get serious.</div>`,
        },
        {
            id: 'senses-markers',
            title: { de: 'Markierungen und Farben', en: 'Markers and colours' },
            tags: { de: 'farben markierung rot blau grün gefahr beute rudel', en: 'colours markers red blue green danger prey pack' },
            de: `<p>Im Sinnesmodus bekommt jedes lebende Tier in Reichweite eine Markierung mit Entfernung. Die Farbe sagt, was es für dich ist:</p>
<table class="hb-table">
<thead><tr><th>Farbe</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>Blau</td><td><strong>Rudel</strong>: deine Rudelmitglieder (mit Namen) und Tiere verbündeter Rudel</td></tr>
<tr><td>Grün</td><td><strong>Artgenossen</strong>: Tiere deiner eigenen Art, Spieler wie wilde Tiere</td></tr>
<tr><td>Gelb (blass)</td><td><strong>Tiere</strong>: harmlose oder neutrale Tiere, z. B. Vögel</td></tr>
<tr><td>Rot</td><td><strong>Gefahr</strong>: Raubtiere, die dir gefährlich werden können (Hundeartige, Großkatzen, Bären, Wildschweine, Alligatoren)</td></tr>
<tr><td>Orange</td><td><strong>Beute</strong>: Tiere, die du jagst (nur bei Jägern)</td></tr>
<tr><td>Braun</td><td><strong>Aas</strong>: tote Tiere, Kadaver (nur bei manchen Arten)</td></tr>
<tr><td>Dunkelrot</td><td><strong>Blut</strong>: blutende Spieler und schwer verletzte Tiere (nur bei manchen Arten)</td></tr>
<tr><td>Lila</td><td><strong>Beeren</strong>: Beerenbüsche (nur Allesfresser)</td></tr>
</tbody>
</table>
<ul>
<li>Mehrere gleiche Tiere weiter weg (ab etwa 20 m) werden zu einem größeren Kreis mit Anzahl zusammengefasst, z. B. eine Wapiti-Herde.</li>
<li>Höchstens 40 Tiere gleichzeitig – Gefahren zuerst, dann die nächsten.</li>
<li>Tierarten, die du noch nicht kennst, heißen „Unbekannte Fährte“ (<a href="#senses-discovery">Neue Witterung</a>).</li>
</ul>
<p>Was deine Art zusätzlich sieht, steht unter <a href="#senses-species">Sinne je Art</a>.</p>`,
            en: `<p>In sense mode every living animal in range gets a marker with its distance. The colour tells you what it is to you:</p>
<table class="hb-table">
<thead><tr><th>Colour</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Blue</td><td><strong>Pack</strong>: your pack members (with names) and animals of allied packs</td></tr>
<tr><td>Green</td><td><strong>Own kind</strong>: animals of your own species, players and wild animals alike</td></tr>
<tr><td>Yellow (faint)</td><td><strong>Animals</strong>: harmless or neutral animals, e.g. birds</td></tr>
<tr><td>Red</td><td><strong>Danger</strong>: predators that can harm you (canines, big cats, bears, wild boars, alligators)</td></tr>
<tr><td>Orange</td><td><strong>Prey</strong>: animals you hunt (hunters only)</td></tr>
<tr><td>Brown</td><td><strong>Carrion</strong>: dead animals, carcasses (some species only)</td></tr>
<tr><td>Dark red</td><td><strong>Blood</strong>: bleeding players and badly wounded animals (some species only)</td></tr>
<tr><td>Purple</td><td><strong>Berries</strong>: berry bushes (omnivores only)</td></tr>
</tbody>
</table>
<ul>
<li>Several animals of the same kind further away (from about 20 m) are grouped into one bigger circle with a count, e.g. a herd of elk.</li>
<li>At most 40 animals at once – dangers first, then the nearest.</li>
<li>Kinds of animals you do not know yet are shown as "Unknown scent" (<a href="#senses-discovery">New scent</a>).</li>
</ul>
<p>What your species sees on top is listed under <a href="#senses-species">Senses per species</a>.</p>`,
        },
        {
            id: 'senses-strip',
            title: { de: 'Fährtenleiste und Wind', en: 'Scent strip and wind' },
            tags: { de: 'kompass leiste wind richtung', en: 'compass strip wind direction' },
            de: `<p>Oben am Bildschirm erscheint im Sinnesmodus eine <strong>Fährtenleiste</strong> wie ein Kompass:</p>
<ul>
<li>Jede Witterung in Reichweite in ihrer Richtung – auch was <strong>hinter dir</strong> ist.</li>
<li>Wie viele Tiere jeder Art in der Nähe sind.</li>
<li>Woher der <strong>Wind</strong> kommt.</li>
</ul>
<div class="hb-tip">Dreh die Kamera, um die Richtungen abzugleichen. So merkst du, ob sich dir etwas von hinten nähert, ohne dich umzudrehen.</div>`,
            en: `<p>In sense mode a <strong>scent strip</strong> appears at the top of the screen, like a compass:</p>
<ul>
<li>Every scent in range in its direction – including what is <strong>behind you</strong>.</li>
<li>How many animals of each kind are nearby.</li>
<li>Where the <strong>wind</strong> comes from.</li>
</ul>
<div class="hb-tip">Turn the camera to match the directions. That way you notice something approaching from behind without turning around.</div>`,
        },
        {
            id: 'senses-species',
            title: { de: 'Sinne je Art', en: 'Senses per species' },
            tags: { de: 'reichweite witterung nachtsicht art', en: 'range scent night vision species' },
            de: `<p>Jede Art hat ihren eigenen Sinn. <strong>Witterung</strong> färbt die Welt in eine Geruchsansicht, <strong>Nachtsicht</strong> hellt die Dunkelheit auf – ideal für nächtliche Jäger. Die Reichweite hängt vom Sinnes-Grundwert der Art ab (derzeit 30 m plus 8 m je Punkt) und wächst mit deinem Attribut Sinne und Fähigkeiten.</p>
<table class="hb-table">
<thead><tr><th>Art</th><th>Sinn</th><th>Reichweite (Grundwert)</th><th>Zeigt zusätzlich</th></tr></thead>
<tbody>
<tr><td>Wolf</td><td>Witterung</td><td>94 m</td><td>Beute, Aas, Blut</td></tr>
<tr><td>Kojote</td><td>Witterung</td><td>94 m</td><td>Beute, Aas, Blut</td></tr>
<tr><td>Rotfuchs</td><td>Nachtsicht</td><td>102 m</td><td>Beute, Aas</td></tr>
<tr><td>Puma</td><td>Nachtsicht</td><td>86 m</td><td>Beute, Blut</td></tr>
<tr><td>Panther</td><td>Nachtsicht</td><td>86 m</td><td>Beute, Blut</td></tr>
<tr><td>Alligator</td><td>Witterung</td><td>78 m</td><td>Beute, Blut</td></tr>
<tr><td>Dachs</td><td>Nachtsicht</td><td>86 m</td><td>Beute, Aas</td></tr>
<tr><td>Weißwedelhirsch</td><td>Witterung</td><td>94 m</td><td>–</td></tr>
<tr><td>Wapiti</td><td>Witterung</td><td>86 m</td><td>–</td></tr>
<tr><td>Elch</td><td>Witterung</td><td>78 m</td><td>–</td></tr>
<tr><td>Bison</td><td>Witterung</td><td>78 m</td><td>–</td></tr>
<tr><td>Wildpferd</td><td>Witterung</td><td>78 m</td><td>–</td></tr>
<tr><td>Gabelbock</td><td>Witterung</td><td>94 m</td><td>–</td></tr>
<tr><td>Dickhornschaf</td><td>Witterung</td><td>86 m</td><td>–</td></tr>
<tr><td>Biber</td><td>Witterung</td><td>78 m</td><td>–</td></tr>
<tr><td>Kaninchen</td><td>Witterung</td><td>102 m</td><td>–</td></tr>
<tr><td>Schwarzbär</td><td>Witterung</td><td>78 m</td><td>Beute, Aas, Blut, Beeren</td></tr>
<tr><td>Grizzlybär</td><td>Witterung</td><td>86 m</td><td>Beute, Aas, Blut, Beeren</td></tr>
<tr><td>Wildschwein</td><td>Witterung</td><td>94 m</td><td>Aas, Beeren</td></tr>
<tr><td>Waschbär</td><td>Nachtsicht</td><td>86 m</td><td>Aas, Beeren</td></tr>
<tr><td>Opossum</td><td>Nachtsicht</td><td>86 m</td><td>Aas, Beeren</td></tr>
<tr><td>Stinktier</td><td>Nachtsicht</td><td>86 m</td><td>Beute, Aas, Beeren</td></tr>
<tr><td>Gürteltier</td><td>Nachtsicht</td><td>70 m</td><td>Aas, Beeren</td></tr>
<tr><td>Eichhörnchen</td><td>Witterung</td><td>102 m</td><td>–</td></tr>
<tr><td>Streifenhörnchen</td><td>Witterung</td><td>94 m</td><td>–</td></tr>
<tr><td>Bisamratte</td><td>Witterung</td><td>78 m</td><td>–</td></tr>
<tr><td>Ratte</td><td>Nachtsicht</td><td>94 m</td><td>Aas, Blut, Beeren</td></tr>
</tbody>
</table>
<p>Rudel, Artgenossen, neutrale Tiere und Gefahren sieht jede Art.</p>`,
            en: `<p>Every species has its own sense. <strong>Scent</strong> turns the world into a scent view, <strong>night vision</strong> brightens the dark – ideal for night hunters. The range depends on the species' base senses value (currently 30 m plus 8 m per point) and grows with your Senses attribute and skills.</p>
<table class="hb-table">
<thead><tr><th>Species</th><th>Sense</th><th>Range (base)</th><th>Also shows</th></tr></thead>
<tbody>
<tr><td>Wolf</td><td>Scent</td><td>94 m</td><td>prey, carrion, blood</td></tr>
<tr><td>Coyote</td><td>Scent</td><td>94 m</td><td>prey, carrion, blood</td></tr>
<tr><td>Red fox</td><td>Night vision</td><td>102 m</td><td>prey, carrion</td></tr>
<tr><td>Cougar</td><td>Night vision</td><td>86 m</td><td>prey, blood</td></tr>
<tr><td>Panther</td><td>Night vision</td><td>86 m</td><td>prey, blood</td></tr>
<tr><td>Alligator</td><td>Scent</td><td>78 m</td><td>prey, blood</td></tr>
<tr><td>Badger</td><td>Night vision</td><td>86 m</td><td>prey, carrion</td></tr>
<tr><td>Whitetail deer</td><td>Scent</td><td>94 m</td><td>–</td></tr>
<tr><td>Elk</td><td>Scent</td><td>86 m</td><td>–</td></tr>
<tr><td>Moose</td><td>Scent</td><td>78 m</td><td>–</td></tr>
<tr><td>Bison</td><td>Scent</td><td>78 m</td><td>–</td></tr>
<tr><td>Wild horse</td><td>Scent</td><td>78 m</td><td>–</td></tr>
<tr><td>Pronghorn</td><td>Scent</td><td>94 m</td><td>–</td></tr>
<tr><td>Bighorn sheep</td><td>Scent</td><td>86 m</td><td>–</td></tr>
<tr><td>Beaver</td><td>Scent</td><td>78 m</td><td>–</td></tr>
<tr><td>Rabbit</td><td>Scent</td><td>102 m</td><td>–</td></tr>
<tr><td>Black bear</td><td>Scent</td><td>78 m</td><td>prey, carrion, blood, berries</td></tr>
<tr><td>Grizzly bear</td><td>Scent</td><td>86 m</td><td>prey, carrion, blood, berries</td></tr>
<tr><td>Wild boar</td><td>Scent</td><td>94 m</td><td>carrion, berries</td></tr>
<tr><td>Raccoon</td><td>Night vision</td><td>86 m</td><td>carrion, berries</td></tr>
<tr><td>Opossum</td><td>Night vision</td><td>86 m</td><td>carrion, berries</td></tr>
<tr><td>Skunk</td><td>Night vision</td><td>86 m</td><td>prey, carrion, berries</td></tr>
<tr><td>Armadillo</td><td>Night vision</td><td>70 m</td><td>carrion, berries</td></tr>
<tr><td>Squirrel</td><td>Scent</td><td>102 m</td><td>–</td></tr>
<tr><td>Chipmunk</td><td>Scent</td><td>94 m</td><td>–</td></tr>
<tr><td>Muskrat</td><td>Scent</td><td>78 m</td><td>–</td></tr>
<tr><td>Rat</td><td>Night vision</td><td>94 m</td><td>carrion, blood, berries</td></tr>
</tbody>
</table>
<p>Every species sees pack, own kind, neutral animals and dangers.</p>`,
        },
        {
            id: 'senses-discovery',
            title: { de: 'Neue Witterung und Tierkunde', en: 'New scent and animal lore' },
            tags: { de: 'entdecken unbekannte fährte tierkunde tierbuch arten lernen', en: 'discover unknown scent animal lore book kinds learn' },
            de: `<p>Am Anfang kennt dein Tier nur seine eigene Art. Alle anderen Tierarten zeigt der Sinnesmodus als <strong>„Unbekannte Fährte“</strong>; Kadaver und Blut unbekannter Arten bleiben ohne Namen.</p>
<h4>So lernst du eine Art kennen</h4>
<ol>
<li>Schalte die Sinne ein (<kbd>V</kbd>).</li>
<li>Bleib etwa <strong>3 Sekunden</strong> lang näher als <strong>15 m</strong> an einem Tier dieser Art.</li>
<li>„Neue Witterung – … diesen Geruch vergisst du nicht mehr.“ Ab jetzt steht der Name an der Markierung, auch nach dem nächsten Einloggen.</li>
</ol>
<p>Alle Arten, die du schon gewittert hast, findest du im Charaktermenü (<kbd>J</kbd>) im Reiter <strong>Tierkunde</strong>: „… von … Arten gewittert“, sortiert nach Gruppen (Kleinwild, Großwild, Hundeartige, Großkatzen, Bären, Wildschweine, Alligatoren, Schlangen, Weitere). Dort steht auch, was jede Art für dich ist: Beute, Gefahr, deine Art oder harmlos.</p>
<ul>
<li>Was ein Tier kennt, gilt nur für dieses Tier – ein neuer Charakter fängt von vorn an.</li>
<li>Spielertiere zählen genauso wie wilde Tiere.</li>
</ul>
<div class="hb-tip">Gefährliche Arten wie Bären aus der Nähe zu wittern ist riskant. Gute Gelegenheiten sind Begegnungen mit befreundeten Spielern anderer Arten.</div>`,
            en: `<p>At first your animal only knows its own species. Every other kind of animal is shown in sense mode as <strong>"Unknown scent"</strong>; carcasses and blood of unknown kinds stay nameless.</p>
<h4>How to learn a kind</h4>
<ol>
<li>Switch on your senses (<kbd>V</kbd>).</li>
<li>Stay closer than <strong>15 m</strong> to an animal of that kind for about <strong>3 seconds</strong>.</li>
<li>"New scent – … a scent you will not forget." From now on its name shows on the marker, also after logging in again.</li>
</ol>
<p>All kinds you have scented are in the character menu (<kbd>J</kbd>) on the <strong>Animal lore</strong> tab: "… of … kinds scented", sorted by group (small game, big game, canines, big cats, bears, wild boars, alligators, snakes, others). It also says what each kind is to you: prey, danger, your kind or harmless.</p>
<ul>
<li>What an animal knows applies to that animal only – a new character starts from scratch.</li>
<li>Player animals count just like wild animals.</li>
</ul>
<div class="hb-tip">Scenting dangerous kinds like bears up close is risky. Good chances are meetings with friendly players of other species.</div>`,
        },
    ],
});
