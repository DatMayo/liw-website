window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'species',
    order: 54,
    icon: 'species',
    title: { de: 'Tierarten', en: 'Species' },
    sections: [
        {
            id: 'species-overview',
            title: { de: 'Alle Arten im Überblick', en: 'All species at a glance' },
            tags: { de: 'arten tiere liste übersicht tabelle wahl', en: 'species animals list overview table choice' },
            de: `<p>Derzeit gibt es <strong>27 spielbare Arten</strong>. Welche du wählst, bestimmt fast alles: was du frisst, wie du kämpfst, ob du im Rudel, in der Herde oder allein lebst und wo du dich wohlfühlst. Gewählt wird bei der Charaktererstellung (<a href="#start">Erste Schritte</a>); Kleintiere haben dort einen eigenen Reiter.</p>
<table class="hb-table">
<thead><tr><th>Art</th><th>Klasse</th><th>Lebensweise</th><th>Gruppe bis</th><th>Gesundheit</th><th>Stärken</th></tr></thead>
<tbody>
<tr><td><a href="#species-wolf">Wolf</a></td><td>Fleischfresser</td><td>Rudeltier</td><td>8</td><td>250</td><td>Sinne, Ausdauer, Rudel</td></tr>
<tr><td><a href="#species-coyote">Kojote</a></td><td>Fleischfresser</td><td>Rudeltier</td><td>6</td><td>190</td><td>Ausdauer, Tempo, Sinne</td></tr>
<tr><td><a href="#species-fox">Rotfuchs</a></td><td>Fleischfresser</td><td>Einzelgänger</td><td>2</td><td>140</td><td>Sinne, Tarnung</td></tr>
<tr><td><a href="#species-cougar">Puma</a></td><td>Fleischfresser</td><td>Einzelgänger</td><td>2</td><td>300</td><td>Tarnung, Tempo, Sprung</td></tr>
<tr><td><a href="#species-panther">Panther</a></td><td>Fleischfresser</td><td>Einzelgänger</td><td>2</td><td>280</td><td>beste Tarnung, Nachtsicht</td></tr>
<tr><td><a href="#species-alligator">Alligator</a></td><td>Fleischfresser</td><td>Einzelgänger</td><td>2</td><td>420</td><td>Stärke, Panzer; langsam</td></tr>
<tr><td><a href="#species-badger">Dachs</a></td><td>Fleischfresser</td><td>Einzelgänger</td><td>3</td><td>120</td><td>zäh, furchtlos</td></tr>
<tr><td><a href="#species-deer">Weißwedelhirsch</a></td><td>Pflanzenfresser</td><td>Herdentier</td><td>10</td><td>200</td><td>Tempo, Ausdauer, Sinne</td></tr>
<tr><td><a href="#species-elk">Wapiti</a></td><td>Pflanzenfresser</td><td>Herdentier</td><td>10</td><td>320</td><td>groß, ausdauernd, schnell</td></tr>
<tr><td><a href="#species-moose">Elch</a></td><td>Pflanzenfresser</td><td>Einzelgänger</td><td>2</td><td>380</td><td>Stärke, Kältefestigkeit</td></tr>
<tr><td><a href="#species-bison">Bison</a></td><td>Pflanzenfresser</td><td>Herdentier</td><td>12</td><td>500</td><td>Konstitution, Gesundheit</td></tr>
<tr><td><a href="#species-horse">Wildpferd</a></td><td>Pflanzenfresser</td><td>Herdentier</td><td>8</td><td>300</td><td>höchstes Tempo, Ausdauer</td></tr>
<tr><td><a href="#species-pronghorn">Gabelbock</a></td><td>Pflanzenfresser</td><td>Herdentier</td><td>10</td><td>170</td><td>höchstes Tempo, Sprint</td></tr>
<tr><td><a href="#species-bighorn">Dickhornschaf</a></td><td>Pflanzenfresser</td><td>Herdentier</td><td>8</td><td>240</td><td>Hörner, Kältefestigkeit</td></tr>
<tr><td><a href="#species-beaver">Biber</a></td><td>Pflanzenfresser</td><td>Herdentier</td><td>6</td><td>130</td><td>Schwimmer, kämpft im Wasser</td></tr>
<tr><td><a href="#species-rabbit">Kaninchen</a></td><td>Pflanzenfresser</td><td>Herdentier</td><td>8</td><td>60</td><td>höchstes Tempo, Sinne; sehr schwach</td></tr>
<tr><td><a href="#species-bear">Schwarzbär</a></td><td>Allesfresser</td><td>Einzelgänger</td><td>2</td><td>450</td><td>Stärke, Konstitution</td></tr>
<tr><td><a href="#species-grizzly">Grizzlybär</a></td><td>Allesfresser</td><td>Einzelgänger</td><td>2</td><td>600</td><td>stärkstes Tier</td></tr>
<tr><td><a href="#species-boar">Wildschwein</a></td><td>Allesfresser</td><td>Herdentier</td><td>8</td><td>260</td><td>zäh, Nase, Rotte</td></tr>
<tr><td><a href="#species-raccoon">Waschbär</a></td><td>Allesfresser</td><td>Einzelgänger</td><td>3</td><td>110</td><td>Tarnung, Nachtsicht</td></tr>
<tr><td><a href="#species-possum">Opossum</a></td><td>Allesfresser</td><td>Einzelgänger</td><td>2</td><td>90</td><td>Tarnung, Totstellen; sehr schwach</td></tr>
<tr><td><a href="#species-skunk">Stinktier</a></td><td>Allesfresser</td><td>Einzelgänger</td><td>2</td><td>100</td><td>Strahl, Abwehr</td></tr>
<tr><td><a href="#species-armadillo">Gürteltier</a></td><td>Allesfresser</td><td>Einzelgänger</td><td>2</td><td>120</td><td>Panzer, liebt Hitze</td></tr>
<tr><td><a href="#species-squirrel">Eichhörnchen</a></td><td>Pflanzenfresser</td><td>Einzelgänger</td><td>2</td><td>45</td><td>Sinne, flink; sehr schwach</td></tr>
<tr><td><a href="#species-chipmunk">Streifenhörnchen</a></td><td>Pflanzenfresser</td><td>Einzelgänger</td><td>2</td><td>35</td><td>Tarnung, kleinstes Tier</td></tr>
<tr><td><a href="#species-muskrat">Bisamratte</a></td><td>Pflanzenfresser</td><td>Herdentier</td><td>6</td><td>60</td><td>Schwimmer, kämpft im Wasser</td></tr>
<tr><td><a href="#species-rat">Ratte</a></td><td>Allesfresser</td><td>Rudeltier</td><td>10</td><td>50</td><td>Tarnung, Kolonie</td></tr>
</tbody>
</table>
<ul>
<li><strong>Klasse</strong> – was du frisst (<a href="#food-diet">Wer frisst was</a>) und ob du Spieler angreifen darfst: Pflanzenfresser wehren sich nur (<a href="#combat-pvp">Kampf zwischen Spielern</a>).</li>
<li><strong>Gruppe bis</strong> – Grundgröße eines Rudels bzw. einer Herde dieser Art; Rudel-Boni können sie erhöhen (<a href="#pack">Rudel</a>).</li>
<li><strong>Einzelgänger</strong> machen mehr Schaden, wenn kein Rudelmitglied in der Nähe ist (<a href="#combat-damage">Schaden</a>).</li>
</ul>`,
            en: `<p>There are currently <strong>27 playable species</strong>. Your choice decides almost everything: what you eat, how you fight, whether you live in a pack, a herd or alone, and where you feel at home. You choose it when creating your character (<a href="#start">First steps</a>); small animals have their own tab there.</p>
<table class="hb-table">
<thead><tr><th>Species</th><th>Class</th><th>Way of life</th><th>Group up to</th><th>Health</th><th>Strengths</th></tr></thead>
<tbody>
<tr><td><a href="#species-wolf">Wolf</a></td><td>Carnivore</td><td>Pack animal</td><td>8</td><td>250</td><td>senses, endurance, pack</td></tr>
<tr><td><a href="#species-coyote">Coyote</a></td><td>Carnivore</td><td>Pack animal</td><td>6</td><td>190</td><td>endurance, speed, senses</td></tr>
<tr><td><a href="#species-fox">Red fox</a></td><td>Carnivore</td><td>Loner</td><td>2</td><td>140</td><td>senses, stealth</td></tr>
<tr><td><a href="#species-cougar">Cougar</a></td><td>Carnivore</td><td>Loner</td><td>2</td><td>300</td><td>stealth, speed, pounce</td></tr>
<tr><td><a href="#species-panther">Panther</a></td><td>Carnivore</td><td>Loner</td><td>2</td><td>280</td><td>best stealth, night vision</td></tr>
<tr><td><a href="#species-alligator">Alligator</a></td><td>Carnivore</td><td>Loner</td><td>2</td><td>420</td><td>strength, armour; slow</td></tr>
<tr><td><a href="#species-badger">Badger</a></td><td>Carnivore</td><td>Loner</td><td>3</td><td>120</td><td>tough, fearless</td></tr>
<tr><td><a href="#species-deer">Whitetail deer</a></td><td>Herbivore</td><td>Herd animal</td><td>10</td><td>200</td><td>speed, endurance, senses</td></tr>
<tr><td><a href="#species-elk">Elk</a></td><td>Herbivore</td><td>Herd animal</td><td>10</td><td>320</td><td>big, enduring, fast</td></tr>
<tr><td><a href="#species-moose">Moose</a></td><td>Herbivore</td><td>Loner</td><td>2</td><td>380</td><td>strength, cold-hardiness</td></tr>
<tr><td><a href="#species-bison">Bison</a></td><td>Herbivore</td><td>Herd animal</td><td>12</td><td>500</td><td>constitution, health</td></tr>
<tr><td><a href="#species-horse">Wild horse</a></td><td>Herbivore</td><td>Herd animal</td><td>8</td><td>300</td><td>top speed, endurance</td></tr>
<tr><td><a href="#species-pronghorn">Pronghorn</a></td><td>Herbivore</td><td>Herd animal</td><td>10</td><td>170</td><td>top speed, burst</td></tr>
<tr><td><a href="#species-bighorn">Bighorn sheep</a></td><td>Herbivore</td><td>Herd animal</td><td>8</td><td>240</td><td>horns, cold-hardiness</td></tr>
<tr><td><a href="#species-beaver">Beaver</a></td><td>Herbivore</td><td>Herd animal</td><td>6</td><td>130</td><td>swimmer, fights in water</td></tr>
<tr><td><a href="#species-rabbit">Rabbit</a></td><td>Herbivore</td><td>Herd animal</td><td>8</td><td>60</td><td>top speed, senses; very weak</td></tr>
<tr><td><a href="#species-bear">Black bear</a></td><td>Omnivore</td><td>Loner</td><td>2</td><td>450</td><td>strength, constitution</td></tr>
<tr><td><a href="#species-grizzly">Grizzly bear</a></td><td>Omnivore</td><td>Loner</td><td>2</td><td>600</td><td>strongest animal</td></tr>
<tr><td><a href="#species-boar">Wild boar</a></td><td>Omnivore</td><td>Herd animal</td><td>8</td><td>260</td><td>tough, nose, group</td></tr>
<tr><td><a href="#species-raccoon">Raccoon</a></td><td>Omnivore</td><td>Loner</td><td>3</td><td>110</td><td>stealth, night vision</td></tr>
<tr><td><a href="#species-possum">Opossum</a></td><td>Omnivore</td><td>Loner</td><td>2</td><td>90</td><td>stealth, play dead; very weak</td></tr>
<tr><td><a href="#species-skunk">Skunk</a></td><td>Omnivore</td><td>Loner</td><td>2</td><td>100</td><td>spray, defence</td></tr>
<tr><td><a href="#species-armadillo">Armadillo</a></td><td>Omnivore</td><td>Loner</td><td>2</td><td>120</td><td>armour, loves heat</td></tr>
<tr><td><a href="#species-squirrel">Squirrel</a></td><td>Herbivore</td><td>Loner</td><td>2</td><td>45</td><td>senses, quick; very weak</td></tr>
<tr><td><a href="#species-chipmunk">Chipmunk</a></td><td>Herbivore</td><td>Loner</td><td>2</td><td>35</td><td>stealth, smallest animal</td></tr>
<tr><td><a href="#species-muskrat">Muskrat</a></td><td>Herbivore</td><td>Herd animal</td><td>6</td><td>60</td><td>swimmer, fights in water</td></tr>
<tr><td><a href="#species-rat">Rat</a></td><td>Omnivore</td><td>Pack animal</td><td>10</td><td>50</td><td>stealth, colony</td></tr>
</tbody>
</table>
<ul>
<li><strong>Class</strong> – what you eat (<a href="#food-diet">Who eats what</a>) and whether you may attack players: herbivores only fight back (<a href="#combat-pvp">Fights between players</a>).</li>
<li><strong>Group up to</strong> – base size of a pack or herd of this species; pack bonuses can raise it (<a href="#pack">Packs</a>).</li>
<li><strong>Loners</strong> deal more damage when no pack member is nearby (<a href="#combat-damage">Damage</a>).</li>
</ul>`,
        },
        {
            id: 'species-attributes',
            title: { de: 'Grundwerte der Arten', en: 'Base values of the species' },
            tags: { de: 'attribute stärke ausdauer geschwindigkeit sinne tarnung konstitution werte', en: 'attributes strength stamina speed senses stealth constitution values' },
            de: `<p>Jede Art bringt Grundwerte von 1 bis 10 mit. Deine eigenen Attributpunkte kommen im Lauf des Lebens dazu (<a href="#progress">Fortschritt</a>).</p>
<table class="hb-table">
<thead><tr><th>Art</th><th>Stärke</th><th>Ausdauer</th><th>Geschwindigkeit</th><th>Sinne</th><th>Tarnung</th><th>Konstitution</th></tr></thead>
<tbody>
<tr><td><a href="#species-wolf">Wolf</a></td><td>6</td><td>7</td><td>7</td><td>8</td><td>5</td><td>5</td></tr>
<tr><td><a href="#species-coyote">Kojote</a></td><td>4</td><td>8</td><td>8</td><td>8</td><td>6</td><td>4</td></tr>
<tr><td><a href="#species-fox">Rotfuchs</a></td><td>2</td><td>6</td><td>8</td><td>9</td><td>9</td><td>3</td></tr>
<tr><td><a href="#species-cougar">Puma</a></td><td>7</td><td>5</td><td>8</td><td>7</td><td>8</td><td>5</td></tr>
<tr><td><a href="#species-panther">Panther</a></td><td>7</td><td>5</td><td>8</td><td>7</td><td>10</td><td>4</td></tr>
<tr><td><a href="#species-alligator">Alligator</a></td><td>9</td><td>4</td><td>3</td><td>6</td><td>7</td><td>9</td></tr>
<tr><td><a href="#species-badger">Dachs</a></td><td>4</td><td>6</td><td>4</td><td>7</td><td>6</td><td>6</td></tr>
<tr><td><a href="#species-deer">Weißwedelhirsch</a></td><td>3</td><td>8</td><td>9</td><td>8</td><td>6</td><td>4</td></tr>
<tr><td><a href="#species-elk">Wapiti</a></td><td>6</td><td>8</td><td>8</td><td>7</td><td>4</td><td>6</td></tr>
<tr><td><a href="#species-moose">Elch</a></td><td>8</td><td>6</td><td>6</td><td>6</td><td>3</td><td>8</td></tr>
<tr><td><a href="#species-bison">Bison</a></td><td>8</td><td>6</td><td>5</td><td>6</td><td>2</td><td>10</td></tr>
<tr><td><a href="#species-horse">Wildpferd</a></td><td>5</td><td>9</td><td>10</td><td>6</td><td>2</td><td>6</td></tr>
<tr><td><a href="#species-pronghorn">Gabelbock</a></td><td>2</td><td>9</td><td>10</td><td>8</td><td>5</td><td>3</td></tr>
<tr><td><a href="#species-bighorn">Dickhornschaf</a></td><td>5</td><td>8</td><td>7</td><td>7</td><td>4</td><td>7</td></tr>
<tr><td><a href="#species-beaver">Biber</a></td><td>3</td><td>7</td><td>3</td><td>6</td><td>5</td><td>6</td></tr>
<tr><td><a href="#species-rabbit">Kaninchen</a></td><td>1</td><td>6</td><td>10</td><td>9</td><td>7</td><td>2</td></tr>
<tr><td><a href="#species-bear">Schwarzbär</a></td><td>9</td><td>5</td><td>5</td><td>6</td><td>3</td><td>9</td></tr>
<tr><td><a href="#species-grizzly">Grizzlybär</a></td><td>10</td><td>5</td><td>5</td><td>7</td><td>2</td><td>10</td></tr>
<tr><td><a href="#species-boar">Wildschwein</a></td><td>5</td><td>6</td><td>6</td><td>8</td><td>5</td><td>7</td></tr>
<tr><td><a href="#species-raccoon">Waschbär</a></td><td>2</td><td>6</td><td>5</td><td>7</td><td>8</td><td>3</td></tr>
<tr><td><a href="#species-possum">Opossum</a></td><td>1</td><td>5</td><td>4</td><td>7</td><td>9</td><td>3</td></tr>
<tr><td><a href="#species-skunk">Stinktier</a></td><td>2</td><td>5</td><td>4</td><td>7</td><td>6</td><td>4</td></tr>
<tr><td><a href="#species-armadillo">Gürteltier</a></td><td>2</td><td>5</td><td>3</td><td>5</td><td>5</td><td>8</td></tr>
<tr><td><a href="#species-squirrel">Eichhörnchen</a></td><td>1</td><td>6</td><td>8</td><td>9</td><td>7</td><td>1</td></tr>
<tr><td><a href="#species-chipmunk">Streifenhörnchen</a></td><td>1</td><td>6</td><td>7</td><td>8</td><td>9</td><td>1</td></tr>
<tr><td><a href="#species-muskrat">Bisamratte</a></td><td>2</td><td>7</td><td>4</td><td>6</td><td>6</td><td>3</td></tr>
<tr><td><a href="#species-rat">Ratte</a></td><td>2</td><td>7</td><td>6</td><td>8</td><td>8</td><td>3</td></tr>
</tbody>
</table>
<p>Der Sinne-Wert bestimmt die Reichweite deines <a href="#senses-species">Sinnesmodus</a>, die Tarnung, wie spät wilde Tiere dich bemerken (<a href="#combat-wild">Wilde Tiere</a>).</p>`,
            en: `<p>Every species comes with base values from 1 to 10. Your own attribute points are added over your life (<a href="#progress">Progress</a>).</p>
<table class="hb-table">
<thead><tr><th>Species</th><th>Strength</th><th>Stamina</th><th>Speed</th><th>Senses</th><th>Stealth</th><th>Constitution</th></tr></thead>
<tbody>
<tr><td><a href="#species-wolf">Wolf</a></td><td>6</td><td>7</td><td>7</td><td>8</td><td>5</td><td>5</td></tr>
<tr><td><a href="#species-coyote">Coyote</a></td><td>4</td><td>8</td><td>8</td><td>8</td><td>6</td><td>4</td></tr>
<tr><td><a href="#species-fox">Red fox</a></td><td>2</td><td>6</td><td>8</td><td>9</td><td>9</td><td>3</td></tr>
<tr><td><a href="#species-cougar">Cougar</a></td><td>7</td><td>5</td><td>8</td><td>7</td><td>8</td><td>5</td></tr>
<tr><td><a href="#species-panther">Panther</a></td><td>7</td><td>5</td><td>8</td><td>7</td><td>10</td><td>4</td></tr>
<tr><td><a href="#species-alligator">Alligator</a></td><td>9</td><td>4</td><td>3</td><td>6</td><td>7</td><td>9</td></tr>
<tr><td><a href="#species-badger">Badger</a></td><td>4</td><td>6</td><td>4</td><td>7</td><td>6</td><td>6</td></tr>
<tr><td><a href="#species-deer">Whitetail deer</a></td><td>3</td><td>8</td><td>9</td><td>8</td><td>6</td><td>4</td></tr>
<tr><td><a href="#species-elk">Elk</a></td><td>6</td><td>8</td><td>8</td><td>7</td><td>4</td><td>6</td></tr>
<tr><td><a href="#species-moose">Moose</a></td><td>8</td><td>6</td><td>6</td><td>6</td><td>3</td><td>8</td></tr>
<tr><td><a href="#species-bison">Bison</a></td><td>8</td><td>6</td><td>5</td><td>6</td><td>2</td><td>10</td></tr>
<tr><td><a href="#species-horse">Wild horse</a></td><td>5</td><td>9</td><td>10</td><td>6</td><td>2</td><td>6</td></tr>
<tr><td><a href="#species-pronghorn">Pronghorn</a></td><td>2</td><td>9</td><td>10</td><td>8</td><td>5</td><td>3</td></tr>
<tr><td><a href="#species-bighorn">Bighorn sheep</a></td><td>5</td><td>8</td><td>7</td><td>7</td><td>4</td><td>7</td></tr>
<tr><td><a href="#species-beaver">Beaver</a></td><td>3</td><td>7</td><td>3</td><td>6</td><td>5</td><td>6</td></tr>
<tr><td><a href="#species-rabbit">Rabbit</a></td><td>1</td><td>6</td><td>10</td><td>9</td><td>7</td><td>2</td></tr>
<tr><td><a href="#species-bear">Black bear</a></td><td>9</td><td>5</td><td>5</td><td>6</td><td>3</td><td>9</td></tr>
<tr><td><a href="#species-grizzly">Grizzly bear</a></td><td>10</td><td>5</td><td>5</td><td>7</td><td>2</td><td>10</td></tr>
<tr><td><a href="#species-boar">Wild boar</a></td><td>5</td><td>6</td><td>6</td><td>8</td><td>5</td><td>7</td></tr>
<tr><td><a href="#species-raccoon">Raccoon</a></td><td>2</td><td>6</td><td>5</td><td>7</td><td>8</td><td>3</td></tr>
<tr><td><a href="#species-possum">Opossum</a></td><td>1</td><td>5</td><td>4</td><td>7</td><td>9</td><td>3</td></tr>
<tr><td><a href="#species-skunk">Skunk</a></td><td>2</td><td>5</td><td>4</td><td>7</td><td>6</td><td>4</td></tr>
<tr><td><a href="#species-armadillo">Armadillo</a></td><td>2</td><td>5</td><td>3</td><td>5</td><td>5</td><td>8</td></tr>
<tr><td><a href="#species-squirrel">Squirrel</a></td><td>1</td><td>6</td><td>8</td><td>9</td><td>7</td><td>1</td></tr>
<tr><td><a href="#species-chipmunk">Chipmunk</a></td><td>1</td><td>6</td><td>7</td><td>8</td><td>9</td><td>1</td></tr>
<tr><td><a href="#species-muskrat">Muskrat</a></td><td>2</td><td>7</td><td>4</td><td>6</td><td>6</td><td>3</td></tr>
<tr><td><a href="#species-rat">Rat</a></td><td>2</td><td>7</td><td>6</td><td>8</td><td>8</td><td>3</td></tr>
</tbody>
</table>
<p>The senses value sets the range of your <a href="#senses-species">sense mode</a>, stealth how late wild animals notice you (<a href="#combat-wild">Wild animals</a>).</p>`,
        },
        {
            id: 'species-combat',
            title: { de: 'Kampfwerte', en: 'Combat values' },
            tags: { de: 'schaden gesundheit angriff werte tabelle', en: 'damage health attack values table' },
            de: `<p>Derzeitige Grundwerte ohne Attribute, Fähigkeiten und Effekte. Sie können sich mit dem Balancing ändern.</p>
<table class="hb-table">
<thead><tr><th>Art</th><th>Gesundheit</th><th>Leicht</th><th>Schwer</th><th>Sonderfähigkeit</th><th>Abklingzeit</th></tr></thead>
<tbody>
<tr><td>Wolf</td><td>250</td><td>15</td><td>35</td><td>+30 % Ausdauer</td><td>60 s</td></tr>
<tr><td>Kojote</td><td>190</td><td>12</td><td>28</td><td>+25 % Ausdauer</td><td>50 s</td></tr>
<tr><td>Rotfuchs</td><td>140</td><td>8</td><td>18</td><td>25</td><td>12 s</td></tr>
<tr><td>Puma</td><td>300</td><td>20</td><td>40</td><td>45</td><td>15 s</td></tr>
<tr><td>Panther</td><td>280</td><td>19</td><td>38</td><td>46</td><td>15 s</td></tr>
<tr><td>Alligator</td><td>420</td><td>24</td><td>48</td><td>70</td><td>20 s</td></tr>
<tr><td>Dachs</td><td>120</td><td>8</td><td>17</td><td>+20 % Tempo, 5 s</td><td>25 s</td></tr>
<tr><td>Weißwedelhirsch</td><td>200</td><td>8</td><td>18</td><td>+25 % Tempo, 6 s</td><td>30 s</td></tr>
<tr><td>Wapiti</td><td>320</td><td>14</td><td>32</td><td>+20 % Tempo, 6 s</td><td>35 s</td></tr>
<tr><td>Elch</td><td>380</td><td>16</td><td>38</td><td>65</td><td>22 s</td></tr>
<tr><td>Bison</td><td>500</td><td>16</td><td>40</td><td>60</td><td>22 s</td></tr>
<tr><td>Wildpferd</td><td>300</td><td>13</td><td>30</td><td>+30 % Tempo, 7 s</td><td>30 s</td></tr>
<tr><td>Gabelbock</td><td>170</td><td>7</td><td>16</td><td>+35 % Tempo, 7 s</td><td>30 s</td></tr>
<tr><td>Dickhornschaf</td><td>240</td><td>12</td><td>28</td><td>40</td><td>16 s</td></tr>
<tr><td>Biber</td><td>130</td><td>8</td><td>18</td><td>+30 % Tempo, 6 s</td><td>25 s</td></tr>
<tr><td>Kaninchen</td><td>60</td><td>3</td><td>7</td><td>+35 % Tempo, 6 s</td><td>20 s</td></tr>
<tr><td>Schwarzbär</td><td>450</td><td>22</td><td>45</td><td>60</td><td>20 s</td></tr>
<tr><td>Grizzlybär</td><td>600</td><td>28</td><td>55</td><td>75</td><td>22 s</td></tr>
<tr><td>Wildschwein</td><td>260</td><td>12</td><td>26</td><td>38</td><td>16 s</td></tr>
<tr><td>Waschbär</td><td>110</td><td>6</td><td>13</td><td>+25 % Tempo, 6 s</td><td>25 s</td></tr>
<tr><td>Opossum</td><td>90</td><td>5</td><td>11</td><td>+20 % Tempo, 5 s</td><td>25 s</td></tr>
<tr><td>Stinktier</td><td>100</td><td>6</td><td>12</td><td>4</td><td>18 s</td></tr>
<tr><td>Gürteltier</td><td>120</td><td>5</td><td>10</td><td>+25 % Tempo, 4 s</td><td>22 s</td></tr>
<tr><td>Eichhörnchen</td><td>45</td><td>3</td><td>6</td><td>+30 % Tempo, 5 s</td><td>20 s</td></tr>
<tr><td>Streifenhörnchen</td><td>35</td><td>2</td><td>5</td><td>+30 % Tempo, 5 s</td><td>20 s</td></tr>
<tr><td>Bisamratte</td><td>60</td><td>5</td><td>10</td><td>+30 % Tempo, 6 s</td><td>25 s</td></tr>
<tr><td>Ratte</td><td>50</td><td>5</td><td>10</td><td>+25 % Tempo, 5 s</td><td>22 s</td></tr>
</tbody>
</table>
<p>Bei Sprung- und Angriffsfähigkeiten steht der Schaden, beim Sprint der Tempo-Bonus und die Dauer, beim Heulen die sofort zurückgegebene Ausdauer. Jungtiere haben anfangs deutlich weniger Gesundheit und Schaden (<a href="#life">Lebenslauf</a>).</p>`,
            en: `<p>Current base values without attributes, skills and effects. They can change with balancing.</p>
<table class="hb-table">
<thead><tr><th>Species</th><th>Health</th><th>Light</th><th>Heavy</th><th>Special ability</th><th>Cooldown</th></tr></thead>
<tbody>
<tr><td>Wolf</td><td>250</td><td>15</td><td>35</td><td>+30 % stamina</td><td>60 s</td></tr>
<tr><td>Coyote</td><td>190</td><td>12</td><td>28</td><td>+25 % stamina</td><td>50 s</td></tr>
<tr><td>Red fox</td><td>140</td><td>8</td><td>18</td><td>25</td><td>12 s</td></tr>
<tr><td>Cougar</td><td>300</td><td>20</td><td>40</td><td>45</td><td>15 s</td></tr>
<tr><td>Panther</td><td>280</td><td>19</td><td>38</td><td>46</td><td>15 s</td></tr>
<tr><td>Alligator</td><td>420</td><td>24</td><td>48</td><td>70</td><td>20 s</td></tr>
<tr><td>Badger</td><td>120</td><td>8</td><td>17</td><td>+20 % speed, 5 s</td><td>25 s</td></tr>
<tr><td>Whitetail deer</td><td>200</td><td>8</td><td>18</td><td>+25 % speed, 6 s</td><td>30 s</td></tr>
<tr><td>Elk</td><td>320</td><td>14</td><td>32</td><td>+20 % speed, 6 s</td><td>35 s</td></tr>
<tr><td>Moose</td><td>380</td><td>16</td><td>38</td><td>65</td><td>22 s</td></tr>
<tr><td>Bison</td><td>500</td><td>16</td><td>40</td><td>60</td><td>22 s</td></tr>
<tr><td>Wild horse</td><td>300</td><td>13</td><td>30</td><td>+30 % speed, 7 s</td><td>30 s</td></tr>
<tr><td>Pronghorn</td><td>170</td><td>7</td><td>16</td><td>+35 % speed, 7 s</td><td>30 s</td></tr>
<tr><td>Bighorn sheep</td><td>240</td><td>12</td><td>28</td><td>40</td><td>16 s</td></tr>
<tr><td>Beaver</td><td>130</td><td>8</td><td>18</td><td>+30 % speed, 6 s</td><td>25 s</td></tr>
<tr><td>Rabbit</td><td>60</td><td>3</td><td>7</td><td>+35 % speed, 6 s</td><td>20 s</td></tr>
<tr><td>Black bear</td><td>450</td><td>22</td><td>45</td><td>60</td><td>20 s</td></tr>
<tr><td>Grizzly bear</td><td>600</td><td>28</td><td>55</td><td>75</td><td>22 s</td></tr>
<tr><td>Wild boar</td><td>260</td><td>12</td><td>26</td><td>38</td><td>16 s</td></tr>
<tr><td>Raccoon</td><td>110</td><td>6</td><td>13</td><td>+25 % speed, 6 s</td><td>25 s</td></tr>
<tr><td>Opossum</td><td>90</td><td>5</td><td>11</td><td>+20 % speed, 5 s</td><td>25 s</td></tr>
<tr><td>Skunk</td><td>100</td><td>6</td><td>12</td><td>4</td><td>18 s</td></tr>
<tr><td>Armadillo</td><td>120</td><td>5</td><td>10</td><td>+25 % speed, 4 s</td><td>22 s</td></tr>
<tr><td>Squirrel</td><td>45</td><td>3</td><td>6</td><td>+30 % speed, 5 s</td><td>20 s</td></tr>
<tr><td>Chipmunk</td><td>35</td><td>2</td><td>5</td><td>+30 % speed, 5 s</td><td>20 s</td></tr>
<tr><td>Muskrat</td><td>60</td><td>5</td><td>10</td><td>+30 % speed, 6 s</td><td>25 s</td></tr>
<tr><td>Rat</td><td>50</td><td>5</td><td>10</td><td>+25 % speed, 5 s</td><td>22 s</td></tr>
</tbody>
</table>
<p>For pounce and attack abilities the damage is shown, for bursts the speed bonus and duration, for the howl the stamina given back at once. Juveniles have clearly less health and damage at first (<a href="#life">Life cycle</a>).</p>`,
        },
        {
            id: 'species-wolf',
            title: { de: 'Wolf', en: 'Wolf' },
            tags: { de: 'canide rudel heulen', en: 'canine pack howl' },
            de: `<p><em>Ein Rudeljäger mit feinen Sinnen und großer Ausdauer. Gemeinsam am stärksten.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Fleischfresser (Fleisch, Aas)</td></tr>
<tr><th>Lebensweise</th><td>Rudeltier, Gruppe bis 8</td></tr>
<tr><th>Gesundheit</th><td>250</td></tr>
<tr><th>Stärken</th><td>Feine Sinne, Ausdauer, stark im Rudel</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Heulen</strong>: Du und dein Rudel im Umkreis von 50 m bekommt sofort Ausdauer zurück und 20 s lang schnellere Ausdauer-Erholung. Abklingzeit 60 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Rudelwut</strong> (durch „Wut des Rudels“): du und dein Rudel im Umkreis von 25 m macht 20 s lang etwa 20 % mehr Schaden. Abklingzeit 90 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Rudeljäger, Wut des Rudels, Langes Heulen</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 94 m; zeigt zusätzlich: Beute, Aas, Blut</td></tr>
</tbody>
</table>
<div class="hb-tip">Der Wolf ist für das Rudel gemacht: Heulen vor dem Angriff, Rudelwut im Kampf, und eure leichten Bisse können Beute bluten lassen. Allein ist er nur Mittelmaß.</div>`,
            en: `<p><em>A pack hunter with keen senses and great endurance. Strongest together.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Carnivore (meat, carrion)</td></tr>
<tr><th>Way of life</th><td>Pack animal, group up to 8</td></tr>
<tr><th>Health</th><td>250</td></tr>
<tr><th>Strengths</th><td>Keen senses, endurance, strong in a pack</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Howl</strong>: you and your pack within 50 m instantly get stamina back and faster stamina recovery for 20 s. Cooldown 60 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Pack Rage</strong> (via "Rage of the Pack"): you and your pack within 25 m deal about 20 % more damage for 20 s. Cooldown 90 s.</td></tr>
<tr><th>Own skills</th><td>Pack Hunter, Rage of the Pack, Long Howl</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 94 m; also shows: prey, carrion, blood</td></tr>
</tbody>
</table>
<div class="hb-tip">The wolf is made for the pack: howl before the attack, Pack Rage in the fight, and your light bites can make prey bleed. Alone it is only average.</div>`,
        },
        {
            id: 'species-coyote',
            title: { de: 'Kojote', en: 'Coyote' },
            tags: { de: 'canide präriewolf', en: 'canine' },
            de: `<p><em>Ein schlauer, ausdauernder Rudelläufer. Klein, aber nie allein und nie lange hungrig.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Fleischfresser (Fleisch, Aas)</td></tr>
<tr><th>Lebensweise</th><td>Rudeltier, Gruppe bis 6</td></tr>
<tr><th>Gesundheit</th><td>190</td></tr>
<tr><th>Stärken</th><td>Ausdauer, Tempo, Sinne, verträgt Aas</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Heulen</strong> (Kläffen): wie beim Wolf, etwas schwächer – Rudel im Umkreis von 40 m, 15 s Effekt. Abklingzeit 50 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Hetzjagd</strong> (durch „Hetzer“): du und dein Rudel im Umkreis von 25 m lauft 20 s lang schneller und erholt euch rascher. Abklingzeit 80 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Aasfressermagen, Hetzer, Trickser</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 94 m; zeigt zusätzlich: Beute, Aas, Blut</td></tr>
</tbody>
</table>
<div class="hb-tip">Der Kojote lebt von Ausdauer: Beute müde hetzen, statt sie frontal anzugehen. Gefundenes Aas ist für ihn weniger riskant als für andere (<a href="#disease-resistance">Widerstandskraft</a>).</div>`,
            en: `<p><em>A cunning, tireless pack runner. Small, but never alone and never hungry for long.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Carnivore (meat, carrion)</td></tr>
<tr><th>Way of life</th><td>Pack animal, group up to 6</td></tr>
<tr><th>Health</th><td>190</td></tr>
<tr><th>Strengths</th><td>Endurance, speed, senses, copes with carrion</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Howl</strong> (yipping): like the wolf's, a bit weaker – pack within 40 m, 15 s effect. Cooldown 50 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Harry</strong> (via "Harriers"): you and your pack within 25 m run faster and recover stamina quicker for 20 s. Cooldown 80 s.</td></tr>
<tr><th>Own skills</th><td>Scavenger's Gut, Harriers, Trickster</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 94 m; also shows: prey, carrion, blood</td></tr>
</tbody>
</table>
<div class="hb-tip">The coyote lives on endurance: run prey down instead of facing it head-on. Found carrion is less risky for it than for others (<a href="#disease-resistance">Resistance</a>).</div>`,
        },
        {
            id: 'species-fox',
            title: { de: 'Rotfuchs', en: 'Red fox' },
            tags: { de: 'fuchs canide', en: 'fox canine' },
            de: `<p><em>Klein, listig und kaum zu sehen. Lebt von seinen Sinnen und meidet jeden offenen Kampf.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Fleischfresser (Fleisch, Aas)</td></tr>
<tr><th>Lebensweise</th><td>Einzelgänger, Gruppe bis 2</td></tr>
<tr><th>Gesundheit</th><td>140</td></tr>
<tr><th>Stärken</th><td>Beste Sinne, sehr gute Tarnung, flink</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Mäusesprung</strong>: ein hoher Sprung auf kleine Beute mit einem harten Treffer. Abklingzeit nur 12 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Verschwinden</strong> (durch „Schlau“): 20 s lang kaum bemerkt und etwas schneller. Abklingzeit 60 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Feine Ohren, Schlau, Mäusejäger</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Nachtsicht, 102 m; zeigt zusätzlich: Beute, Aas</td></tr>
</tbody>
</table>
<div class="hb-tip">Der Fuchs jagt Kleinwild und meidet offene Kämpfe – mit 140 Gesundheit verliert er gegen fast jeden Großen. Nachtsicht und große Sinnesreichweite machen ihn zum besten Späher.</div>`,
            en: `<p><em>Small, sly and nearly invisible. Lives by its senses and avoids every fair fight.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Carnivore (meat, carrion)</td></tr>
<tr><th>Way of life</th><td>Loner, group up to 2</td></tr>
<tr><th>Health</th><td>140</td></tr>
<tr><th>Strengths</th><td>Best senses, very good stealth, quick</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Mouse leap</strong>: a high pounce onto small prey with a hard hit. Cooldown only 12 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Vanish</strong> (via "Sly"): barely noticed and a little faster for 20 s. Cooldown 60 s.</td></tr>
<tr><th>Own skills</th><td>Keen Ears, Sly, Mouser</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Night vision, 102 m; also shows: prey, carrion</td></tr>
</tbody>
</table>
<div class="hb-tip">The fox hunts small game and avoids open fights – with 140 health it loses against almost every big animal. Night vision and a long sense range make it the best scout.</div>`,
        },
        {
            id: 'species-cougar',
            title: { de: 'Puma', en: 'Cougar' },
            tags: { de: 'puma berglöwe großkatze', en: 'mountain lion big cat' },
            de: `<p><em>Ein lautloser Einzelgänger. Tödlich aus dem Hinterhalt, verwundbar im langen Kampf.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Fleischfresser (Fleisch, Aas)</td></tr>
<tr><th>Lebensweise</th><td>Einzelgänger, Gruppe bis 2</td></tr>
<tr><th>Gesundheit</th><td>300</td></tr>
<tr><th>Stärken</th><td>Tarnung, Tempo, harte Treffer aus dem Hinterhalt</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Sprung</strong>: ein Satz nach vorn in einen sehr harten Treffer; wilde Tiere werden dabei umgerissen. Abklingzeit 15 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Lauern</strong> (durch „Pirscher“): 25 s lang kaum bemerkt, und deine Angriffe treffen etwa 25 % härter. Abklingzeit 60 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Leise Pfoten, Pirscher, Nachtjäger</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Nachtsicht, 86 m; zeigt zusätzlich: Beute, Blut</td></tr>
</tbody>
</table>
<div class="hb-tip">Lauern, anschleichen, mit dem Sprung eröffnen – und den Kampf beenden, bevor er lang wird. Wenig Ausdauer verträgt keine langen Verfolgungen.</div>`,
            en: `<p><em>A silent solitary stalker. Deadly from ambush, vulnerable in a long fight.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Carnivore (meat, carrion)</td></tr>
<tr><th>Way of life</th><td>Loner, group up to 2</td></tr>
<tr><th>Health</th><td>300</td></tr>
<tr><th>Strengths</th><td>Stealth, speed, hard hits from ambush</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Pounce</strong>: a leap forward into a very hard hit; wild animals are knocked down by it. Cooldown 15 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Stalk</strong> (via "Stalker"): barely noticed for 25 s, and your attacks hit about 25 % harder. Cooldown 60 s.</td></tr>
<tr><th>Own skills</th><td>Silent Paws, Stalker, Night Hunter</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Night vision, 86 m; also shows: prey, blood</td></tr>
</tbody>
</table>
<div class="hb-tip">Stalk, creep up, open with the pounce – and finish the fight before it gets long. Little stamina does not suit long chases.</div>`,
        },
        {
            id: 'species-panther',
            title: { de: 'Panther', en: 'Panther' },
            tags: { de: 'großkatze schwarz', en: 'big cat black' },
            de: `<p><em>Ein schwarzer Schatten der Sümpfe und Wälder. Der leiseste Jäger – man sieht ihn erst, wenn es zu spät ist.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Fleischfresser (Fleisch, Aas)</td></tr>
<tr><th>Lebensweise</th><td>Einzelgänger, Gruppe bis 2</td></tr>
<tr><th>Gesundheit</th><td>280</td></tr>
<tr><th>Stärken</th><td>Beste Tarnung aller Arten, Tempo, Nachtsicht</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Sprung</strong> aus dem Schatten: wie beim Puma, minimal stärker. Abklingzeit 15 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Schatten</strong> (durch „Schattengänger“): 25 s lang fast unsichtbar und etwas schneller. Abklingzeit 60 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Samtpfoten, Schattengänger, Hinterhalt</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Nachtsicht, 86 m; zeigt zusätzlich: Beute, Blut</td></tr>
</tbody>
</table>
<div class="hb-tip">Ein Tier der warmen Sümpfe: fast kein Winterfell, friert früh. Bleib im Süden und jage nachts mit der Nachtsicht.</div>`,
            en: `<p><em>A black shadow of the swamps and forests. The most silent hunter - seen only when it is too late.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Carnivore (meat, carrion)</td></tr>
<tr><th>Way of life</th><td>Loner, group up to 2</td></tr>
<tr><th>Health</th><td>280</td></tr>
<tr><th>Strengths</th><td>Best stealth of all species, speed, night vision</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Pounce</strong> from the shadows: like the cougar's, a touch stronger. Cooldown 15 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Shadow</strong> (via "Shadow Walker"): almost invisible and a little faster for 25 s. Cooldown 60 s.</td></tr>
<tr><th>Own skills</th><td>Velvet Paws, Shadow Walker, Ambusher</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Night vision, 86 m; also shows: prey, blood</td></tr>
</tbody>
</table>
<div class="hb-tip">An animal of the warm swamps: hardly any winter coat, gets cold early. Stay in the south and hunt at night with night vision.</div>`,
        },
        {
            id: 'species-alligator',
            title: { de: 'Alligator', en: 'Alligator' },
            tags: { de: 'krokodil reptil sumpf bayou', en: 'crocodile reptile swamp bayou' },
            de: `<p><em>Ein gepanzerter Urzeitjäger des Bayous. Langsam an Land, tödlich am Wasser.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Fleischfresser (Fleisch, Aas)</td></tr>
<tr><th>Lebensweise</th><td>Einzelgänger, Gruppe bis 2</td></tr>
<tr><th>Gesundheit</th><td>420</td></tr>
<tr><th>Stärken</th><td>Stärke, Panzer, immun gegen Tollwut</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Schnappen</strong>: ein plötzlicher Biss nach vorn mit dem höchsten Schaden aller Fleischfresser; wilde Tiere werden umgerissen. Abklingzeit 20 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Todesrolle</strong> (durch „Todesrolle“): 15 s lang beißt du etwa 35 % härter. Abklingzeit 75 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Panzerhaut, Todesrolle, Urzeitwesen</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 78 m; zeigt zusätzlich: Beute, Blut</td></tr>
</tbody>
</table>
<div class="hb-tip">Langsam an Land (Tempo 3) – lass die Beute zu dir kommen und lauere am Ufer. Schwimmend kannst du nicht kämpfen. Kein Winterfell: Unter 8 °C frierst du, der Winter im Norden ist tödlich.</div>`,
            en: `<p><em>An armoured ancient of the bayou. Slow on land, deadly at the water's edge.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Carnivore (meat, carrion)</td></tr>
<tr><th>Way of life</th><td>Loner, group up to 2</td></tr>
<tr><th>Health</th><td>420</td></tr>
<tr><th>Strengths</th><td>Strength, armour, immune to rabies</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Lunge</strong>: a sudden snap forward with the highest damage of all carnivores; wild animals are knocked down. Cooldown 20 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Death Roll</strong> (via "Death Roll"): your bites hit about 35 % harder for 15 s. Cooldown 75 s.</td></tr>
<tr><th>Own skills</th><td>Armoured Hide, Death Roll, Ancient</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 78 m; also shows: prey, blood</td></tr>
</tbody>
</table>
<div class="hb-tip">Slow on land (speed 3) – let prey come to you and lurk at the shore. You cannot fight while swimming. No winter coat: below 8 °C you get cold, the northern winter is deadly.</div>`,
        },
        {
            id: 'species-badger',
            title: { de: 'Dachs', en: 'Badger' },
            tags: { de: 'dachs marder', en: 'badger' },
            de: `<p><em>Klein, gedrungen und furchtlos. Ein Dachs beißt weit über seiner Größe und weicht keinem Kampf aus.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Fleischfresser (Fleisch, Aas)</td></tr>
<tr><th>Lebensweise</th><td>Einzelgänger, Gruppe bis 3</td></tr>
<tr><th>Gesundheit</th><td>120</td></tr>
<tr><th>Stärken</th><td>Zäh für seine Größe, furchtlos, Nachtsicht</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Sprint</strong>: 5 s lang etwa 20 % schneller. Abklingzeit 25 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Wildheit</strong> (durch „Furchtlos“): 20 s lang etwa 25 % mehr Schaden und 20 % weniger erlittener Schaden. Abklingzeit 70 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Dicke Schwarte, Furchtlos, Gräber</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Nachtsicht, 86 m; zeigt zusätzlich: Beute, Aas</td></tr>
</tbody>
</table>
<div class="hb-tip">Klein, aber bissig: Kleinwild jagen und mit Wildheit auch einen größeren Gegner abschrecken. Aas verträgt er besser als die meisten.</div>`,
            en: `<p><em>Small, stocky and fearless. A badger bites far above its size and backs down from no fight.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Carnivore (meat, carrion)</td></tr>
<tr><th>Way of life</th><td>Loner, group up to 3</td></tr>
<tr><th>Health</th><td>120</td></tr>
<tr><th>Strengths</th><td>Tough for its size, fearless, night vision</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Burst</strong>: about 20 % faster for 5 s. Cooldown 25 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Ferocity</strong> (via "Fearless"): about 25 % more damage and 20 % less damage taken for 20 s. Cooldown 70 s.</td></tr>
<tr><th>Own skills</th><td>Tough Hide, Fearless, Digger</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Night vision, 86 m; also shows: prey, carrion</td></tr>
</tbody>
</table>
<div class="hb-tip">Small but fierce: hunt small game and use Ferocity to put off even a bigger opponent. It copes with carrion better than most.</div>`,
        },
        {
            id: 'species-deer',
            title: { de: 'Weißwedelhirsch', en: 'Whitetail deer' },
            tags: { de: 'hirsch reh bock ricke', en: 'deer buck doe' },
            de: `<p><em>Schnell und wachsam. Lebt in Herden und überlebt, weil er Gefahr zuerst sieht.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Pflanzenfresser (Grasen)</td></tr>
<tr><th>Lebensweise</th><td>Herdentier, Gruppe bis 10</td></tr>
<tr><th>Gesundheit</th><td>200</td></tr>
<tr><th>Stärken</th><td>Sehr schnell, Ausdauer, wachsame Sinne; wehrt sich nur gegen Spieler, die angreifen</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Sprint</strong>: 6 s lang etwa 25 % schneller. Abklingzeit 30 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Ausweichen</strong> (durch „Haken schlagen“): 15 s lang schneller und etwa 30 % schwerer zu verletzen. Abklingzeit 45 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Sprungkraft, Haken schlagen, Herdeninstinkt</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 94 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Flucht ist deine Waffe: Sinne an, Gefahr früh erkennen, Sprint und Ausweichen kombinieren. Böcke tragen ein Geweih, Ricken nicht.</div>`,
            en: `<p><em>Fast and alert. Lives in herds and survives by seeing danger first.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Herbivore (grazing)</td></tr>
<tr><th>Way of life</th><td>Herd animal, group up to 10</td></tr>
<tr><th>Health</th><td>200</td></tr>
<tr><th>Strengths</th><td>Very fast, endurance, alert senses; only fights back against players who attack</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Burst</strong>: about 25 % faster for 6 s. Cooldown 30 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Evade</strong> (via "Zigzag"): faster and about 30 % harder to hurt for 15 s. Cooldown 45 s.</td></tr>
<tr><th>Own skills</th><td>Leaping, Zigzag, Herd Instinct</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 94 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Flight is your weapon: senses on, spot danger early, combine burst and Evade. Bucks carry antlers, does do not.</div>`,
        },
        {
            id: 'species-elk',
            title: { de: 'Wapiti', en: 'Elk' },
            tags: { de: 'wapiti hirsch', en: 'wapiti deer' },
            de: `<p><em>Ein großer Herdenhirsch. Ausdauernd und stolz; Bullen verteidigen ihre Herde mit dem Geweih.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Pflanzenfresser (Grasen)</td></tr>
<tr><th>Lebensweise</th><td>Herdentier, Gruppe bis 10</td></tr>
<tr><th>Gesundheit</th><td>320</td></tr>
<tr><th>Stärken</th><td>Groß, ausdauernd, schnell, wehrhaft; wehrt sich nur gegen Spieler, die angreifen</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Sprint</strong>: 6 s lang etwa 20 % schneller. Abklingzeit 35 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Geweihwehr</strong> (durch „Brunft“): 20 s lang etwa 20 % mehr Schaden und 20 % weniger erlittener Schaden. Abklingzeit 75 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Lange Läufe, Brunft, Geweihkrone</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 86 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Mit Geweihwehr kann sich ein Wapiti einem einzelnen Wolf stellen – gegen ein Rudel hilft nur die Herde oder die Flucht. Viel Winterfell, gut für die Berge.</div>`,
            en: `<p><em>A large herd deer. Enduring and proud; bulls defend their herd with their antlers.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Herbivore (grazing)</td></tr>
<tr><th>Way of life</th><td>Herd animal, group up to 10</td></tr>
<tr><th>Health</th><td>320</td></tr>
<tr><th>Strengths</th><td>Big, enduring, fast, able to defend itself; only fights back against players who attack</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Burst</strong>: about 20 % faster for 6 s. Cooldown 35 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Antler Guard</strong> (via "Rut"): about 20 % more damage and 20 % less damage taken for 20 s. Cooldown 75 s.</td></tr>
<tr><th>Own skills</th><td>Long Legs, Rut, Crown of Antlers</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 86 m</td></tr>
</tbody>
</table>
<div class="hb-tip">With Antler Guard an elk can stand up to a single wolf – against a pack only the herd or flight helps. A thick winter coat, good for the mountains.</div>`,
        },
        {
            id: 'species-moose',
            title: { de: 'Elch', en: 'Moose' },
            tags: { de: 'elch', en: 'moose' },
            de: `<p><em>Der Riese der nördlichen Wälder. Ein Einzelgänger, der nichts fürchtet und niedertrampelt, was ihn bedroht.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Pflanzenfresser (Grasen)</td></tr>
<tr><th>Lebensweise</th><td>Einzelgänger, Gruppe bis 2</td></tr>
<tr><th>Gesundheit</th><td>380</td></tr>
<tr><th>Stärken</th><td>Stark, zäh, extrem kältefest; wehrt sich nur gegen Spieler, die angreifen</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Niedertrampeln</strong>: ein rammender Ansturm mit sehr hohem Schaden. Abklingzeit 22 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Niederwalzen</strong> (durch „Elchbulle“): 20 s lang etwa 25 % mehr Schaden und 15 % weniger erlittener Schaden. Abklingzeit 80 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Sumpfgänger, Elchbulle, Mächtige Schaufeln</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 78 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Ein Einzelgänger unter den Pflanzenfressern – mit Einzelgänger-Bonus und dem Trampeln wird jeder Angreifer bereut haben, dich gereizt zu haben. Angreifen darfst du Spieler aber nur zur Verteidigung. Im Sommer wird es dir schnell zu heiß.</div>`,
            en: `<p><em>The giant of the northern woods. A loner that fears nothing and tramples what threatens it.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Herbivore (grazing)</td></tr>
<tr><th>Way of life</th><td>Loner, group up to 2</td></tr>
<tr><th>Health</th><td>380</td></tr>
<tr><th>Strengths</th><td>Strong, tough, extremely cold-hardy; only fights back against players who attack</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Trample</strong>: a ramming charge with very high damage. Cooldown 22 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Bulldoze</strong> (via "Bull Moose"): about 25 % more damage and 15 % less damage taken for 20 s. Cooldown 80 s.</td></tr>
<tr><th>Own skills</th><td>Marsh Walker, Bull Moose, Great Rack</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 78 m</td></tr>
</tbody>
</table>
<div class="hb-tip">A loner among the herbivores – with the loner bonus and the trample every attacker will regret provoking you. You may only hurt players in self-defence, though. In summer you get too hot quickly.</div>`,
        },
        {
            id: 'species-bison',
            title: { de: 'Bison', en: 'Bison' },
            tags: { de: 'büffel', en: 'buffalo' },
            de: `<p><em>Ein Berg aus Muskeln in der Herde. Schwer zu Fall zu bringen und gefährlich, wenn er angreift.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Pflanzenfresser (Grasen)</td></tr>
<tr><th>Lebensweise</th><td>Herdentier, Gruppe bis 12</td></tr>
<tr><th>Gesundheit</th><td>500</td></tr>
<tr><th>Stärken</th><td>Höchste Konstitution, viel Gesundheit, große Herde; wehrt sich nur gegen Spieler, die angreifen</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Stampede</strong>: ein schwerer Ansturm mit hohem Schaden. Abklingzeit 22 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Herdenwall</strong> (durch „Dicker Schädel“): du und deine Herde im Umkreis von 20 m nehmt 20 s lang etwa 25 % weniger Schaden. Abklingzeit 90 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Dichte Mähne, Dicker Schädel, Leittier</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 78 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Mit 500 Gesundheit und der größten Herde (bis 12) ist eine Bisonherde mit Herdenwall kaum zu knacken. Kältefest und hitzefest zugleich – der Allrounder der Ebenen.</div>`,
            en: `<p><em>A mountain of muscle in a herd. Hard to bring down and dangerous when it charges.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Herbivore (grazing)</td></tr>
<tr><th>Way of life</th><td>Herd animal, group up to 12</td></tr>
<tr><th>Health</th><td>500</td></tr>
<tr><th>Strengths</th><td>Highest constitution, lots of health, big herd; only fights back against players who attack</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Stampede</strong>: a heavy charge with high damage. Cooldown 22 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Herd Wall</strong> (via "Thick Skull"): you and your herd within 20 m take about 25 % less damage for 20 s. Cooldown 90 s.</td></tr>
<tr><th>Own skills</th><td>Thick Mane, Thick Skull, Herd Leader</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 78 m</td></tr>
</tbody>
</table>
<div class="hb-tip">With 500 health and the biggest herd (up to 12) a bison herd with Herd Wall is almost impossible to crack. Both cold- and heat-hardy – the all-rounder of the plains.</div>`,
        },
        {
            id: 'species-horse',
            title: { de: 'Wildpferd', en: 'Wild horse' },
            tags: { de: 'pferd mustang', en: 'horse mustang' },
            de: `<p><em>Frei und ungezähmt. Der schnellste Läufer der Ebenen, stark in der Herde.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Pflanzenfresser (Grasen)</td></tr>
<tr><th>Lebensweise</th><td>Herdentier, Gruppe bis 8</td></tr>
<tr><th>Gesundheit</th><td>300</td></tr>
<tr><th>Stärken</th><td>Höchstes Tempo, große Ausdauer; wehrt sich nur gegen Spieler, die angreifen</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Galopp</strong>: 7 s lang etwa 30 % schneller. Abklingzeit 30 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Stampede</strong> (durch „Wilder Geist“): du und deine Herde im Umkreis von 25 m lauft 20 s lang schneller und erholt euch rascher. Abklingzeit 80 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Harte Hufe, Wilder Geist, Leitstute</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 78 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Kaum ein Jäger holt ein galoppierendes Pferd ein. Der schwere Angriff ist ein Huftritt mit etwas breiterem Bogen – gut, wenn dich mehrere bedrängen.</div>`,
            en: `<p><em>Free and untamed. The fastest runner of the plains, strong in the herd.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Herbivore (grazing)</td></tr>
<tr><th>Way of life</th><td>Herd animal, group up to 8</td></tr>
<tr><th>Health</th><td>300</td></tr>
<tr><th>Strengths</th><td>Top speed, great endurance; only fights back against players who attack</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Gallop</strong>: about 30 % faster for 7 s. Cooldown 30 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Stampede</strong> (via "Wild Spirit"): you and your herd within 25 m run faster and recover stamina quicker for 20 s. Cooldown 80 s.</td></tr>
<tr><th>Own skills</th><td>Hardy Hooves, Wild Spirit, Lead Mare</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 78 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Hardly any hunter catches a galloping horse. The heavy attack is a kick with a somewhat wider arc – good when several close in on you.</div>`,
        },
        {
            id: 'species-pronghorn',
            title: { de: 'Gabelbock', en: 'Pronghorn' },
            tags: { de: 'antilope', en: 'antelope' },
            de: `<p><em>Kein Tier der Ebenen ist schneller. Schwach im Kampf, aber kaum einzuholen – und die Herde warnt sich gegenseitig.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Pflanzenfresser (Grasen)</td></tr>
<tr><th>Lebensweise</th><td>Herdentier, Gruppe bis 10</td></tr>
<tr><th>Gesundheit</th><td>170</td></tr>
<tr><th>Stärken</th><td>Höchstes Tempo, schnellster Sprint, Ausdauer; wehrt sich nur gegen Spieler, die angreifen</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Sprint</strong>: 7 s lang etwa 35 % schneller – zusammen mit dem Kaninchen der stärkste Sprint im Spiel. Abklingzeit 30 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Weißer Spiegel</strong> (durch „Warnsignal“): du und deine Herde im Umkreis von 25 m lauft 20 s lang schneller und erholt euch rascher. Abklingzeit 70 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Windläufer, Warnsignal, Endloser Lauf</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 94 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Schwach im Kampf (170 Gesundheit), aber kaum einzuholen. Wer zuerst die Gefahr wittert, gibt der Herde mit dem Weißen Spiegel das Signal zur Flucht.</div>`,
            en: `<p><em>No animal of the plains is faster. Weak in a fight but hard to catch - and the herd warns each other.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Herbivore (grazing)</td></tr>
<tr><th>Way of life</th><td>Herd animal, group up to 10</td></tr>
<tr><th>Health</th><td>170</td></tr>
<tr><th>Strengths</th><td>Top speed, fastest burst, endurance; only fights back against players who attack</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Burst</strong>: about 35 % faster for 7 s – together with the rabbit's the strongest burst in the game. Cooldown 30 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>White Flash</strong> (via "Signal Flash"): you and your herd within 25 m run faster and recover stamina quicker for 20 s. Cooldown 70 s.</td></tr>
<tr><th>Own skills</th><td>Wind Runner, Signal Flash, Endless Run</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 94 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Weak in a fight (170 health) but almost impossible to catch. Whoever scents danger first gives the herd the signal to flee with White Flash.</div>`,
        },
        {
            id: 'species-bighorn',
            title: { de: 'Dickhornschaf', en: 'Bighorn sheep' },
            tags: { de: 'schaf widder bergschaf', en: 'sheep ram' },
            de: `<p><em>Ein trittsicherer Kletterer der Berge. Die Hörner sind eine Waffe, die selbst Wölfe fürchten.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Pflanzenfresser (Grasen)</td></tr>
<tr><th>Lebensweise</th><td>Herdentier, Gruppe bis 8</td></tr>
<tr><th>Gesundheit</th><td>240</td></tr>
<tr><th>Stärken</th><td>Kältefest, ausdauernd, gefährliche Hörner; wehrt sich nur gegen Spieler, die angreifen</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Rammstoß</strong>: ein Kopfstoß aus dem Lauf mit hohem Schaden. Abklingzeit 16 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Eiserne Hörner</strong> (durch „Dickschädel“): 20 s lang etwa 18 % mehr Schaden und 15 % weniger erlittener Schaden. Abklingzeit 75 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Trittsicher, Dickschädel, König der Klippen</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 86 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Zuhause in den Bergen: Viel Winterfell, aber im Flachland wird es im Sommer schnell zu heiß. Der Rammstoß hat eine kurze Abklingzeit – nutze ihn oft.</div>`,
            en: `<p><em>A sure-footed climber of the mountains. Its horns are a weapon even wolves fear.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Herbivore (grazing)</td></tr>
<tr><th>Way of life</th><td>Herd animal, group up to 8</td></tr>
<tr><th>Health</th><td>240</td></tr>
<tr><th>Strengths</th><td>Cold-hardy, enduring, dangerous horns; only fights back against players who attack</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Ram</strong>: a running headbutt with high damage. Cooldown 16 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Iron Horns</strong> (via "Headbanger"): about 18 % more damage and 15 % less damage taken for 20 s. Cooldown 75 s.</td></tr>
<tr><th>Own skills</th><td>Sure-Footed, Headbanger, Cliff King</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 86 m</td></tr>
</tbody>
</table>
<div class="hb-tip">At home in the mountains: a thick winter coat, but in the lowlands summer gets too hot quickly. The ram has a short cooldown – use it often.</div>`,
        },
        {
            id: 'species-beaver',
            title: { de: 'Biber', en: 'Beaver' },
            tags: { de: 'nager schwimmer', en: 'rodent swimmer' },
            de: `<p><em>Ein unermüdlicher Baumeister und starker Schwimmer, der in Familien lebt. Ein Schlag mit der Kelle warnt sie alle.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Pflanzenfresser (Grasen)</td></tr>
<tr><th>Lebensweise</th><td>Herdentier, Gruppe bis 6</td></tr>
<tr><th>Gesundheit</th><td>130</td></tr>
<tr><th>Stärken</th><td>Schwimmer, kämpft auch im Wasser, kältefest; wehrt sich nur gegen Spieler, die angreifen, kann auch schwimmend kämpfen</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Abtauchen</strong>: 6 s lang etwa 30 % schneller – an Land wie im Wasser. Abklingzeit 25 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Kellenschlag</strong> (durch „Dammwächter“): du und deine Familie im Umkreis von 30 m flieht 20 s lang schneller und fallt weniger auf. Abklingzeit 70 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Schwimmhäute, Dammwächter, Fleißiger Biber</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 78 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Bleib nah am Wasser: Dort kannst du kämpfen und fliehen, wo es die meisten Jäger nicht können. Langsam an Land (Tempo 3).</div>`,
            en: `<p><em>A tireless builder and strong swimmer that lives in families. A slap of its tail warns them all.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Herbivore (grazing)</td></tr>
<tr><th>Way of life</th><td>Herd animal, group up to 6</td></tr>
<tr><th>Health</th><td>130</td></tr>
<tr><th>Strengths</th><td>Swimmer, fights in the water too, cold-hardy; only fights back against players who attack, can fight while swimming</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Dive</strong>: about 30 % faster for 6 s – on land as in the water. Cooldown 25 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Tail Slap</strong> (via "Dam Warden"): you and your family within 30 m flee faster and are noticed less for 20 s. Cooldown 70 s.</td></tr>
<tr><th>Own skills</th><td>Webbed Feet, Dam Warden, Busy Beaver</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 78 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Stay close to the water: there you can fight and flee where most hunters cannot. Slow on land (speed 3).</div>`,
        },
        {
            id: 'species-rabbit',
            title: { de: 'Kaninchen', en: 'Rabbit' },
            tags: { de: 'hase kaninchen kleintier', en: 'hare bunny small' },
            de: `<p><em>Winzig, schwach und schneller als fast alles. Lebt in Gruppen, hat viele Junge und entkommt mit scharfen Haken.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Pflanzenfresser (Grasen)</td></tr>
<tr><th>Lebensweise</th><td>Herdentier, Gruppe bis 8, Kleintier</td></tr>
<tr><th>Gesundheit</th><td>60</td></tr>
<tr><th>Stärken</th><td>Höchstes Tempo, sehr feine Sinne, Kleintier; wehrt sich nur gegen Spieler, die angreifen</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Sprint</strong>: 6 s lang etwa 35 % schneller, Abklingzeit nur 20 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Haken schlagen</strong> (durch „Fluchtkünstler“): 15 s lang schneller, etwa 35 % schwerer zu verletzen und weniger auffällig. Abklingzeit 45 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Lange Löffel, Fluchtkünstler, Leben im Bau</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 102 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Mit 60 Gesundheit überlebst du kaum einen Biss – du kämpfst nicht, du rennst. Sinne oft benutzen, Sprint und Haken schlagen zusammen einsetzen.</div>`,
            en: `<p><em>Tiny, weak and faster than almost anything. Lives in groups, has many young and escapes with sharp hooks.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Herbivore (grazing)</td></tr>
<tr><th>Way of life</th><td>Herd animal, group up to 8, small animal</td></tr>
<tr><th>Health</th><td>60</td></tr>
<tr><th>Strengths</th><td>Top speed, very keen senses, small animal; only fights back against players who attack</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Burst</strong>: about 35 % faster for 6 s, cooldown only 20 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Jink</strong> (via "Escape Artist"): faster, about 35 % harder to hurt and less noticeable for 15 s. Cooldown 45 s.</td></tr>
<tr><th>Own skills</th><td>Long Ears, Escape Artist, Warren Life</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 102 m</td></tr>
</tbody>
</table>
<div class="hb-tip">With 60 health you barely survive one bite – you do not fight, you run. Use your senses often, combine burst and Jink.</div>`,
        },
        {
            id: 'species-bear',
            title: { de: 'Schwarzbär', en: 'Black bear' },
            tags: { de: 'bär schwarzbär', en: 'bear' },
            de: `<p><em>Kräftig und zäh. Frisst fast alles und fürchtet fast nichts.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Allesfresser (Fleisch, Aas, Futter suchen, Beeren)</td></tr>
<tr><th>Lebensweise</th><td>Einzelgänger, Gruppe bis 2</td></tr>
<tr><th>Gesundheit</th><td>450</td></tr>
<tr><th>Stärken</th><td>Stärke, Konstitution, frisst fast alles; kann nicht ausweichen</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Prankenhieb</strong>: ein langsamer, vernichtender Hieb aus dem Ansturm; wilde Tiere werden umgerissen. Abklingzeit 20 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Raserei</strong> (durch „Bärenwut“): 20 s lang etwa 15 % mehr Schaden und 30 % weniger erlittener Schaden. Abklingzeit 75 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Winterschlaf, Bärenwut, Eisenfell</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 78 m; zeigt zusätzlich: Beute, Aas, Blut, Beeren</td></tr>
</tbody>
</table>
<div class="hb-tip">Der Schwarzbär kann nicht ausweichen – er steckt ein. Raserei vor dem Kampf zünden. Als Allesfresser findet er immer etwas: Beute, Aas, Beeren oder Wurzeln.</div>`,
            en: `<p><em>Powerful and tough. Eats almost anything and fears almost nothing.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Omnivore (meat, carrion, foraging, berries)</td></tr>
<tr><th>Way of life</th><td>Loner, group up to 2</td></tr>
<tr><th>Health</th><td>450</td></tr>
<tr><th>Strengths</th><td>Strength, constitution, eats almost anything; cannot dodge</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Maul</strong>: a slow, crushing charge swipe; wild animals are knocked down. Cooldown 20 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Rage</strong> (via "Bear Rage"): about 15 % more damage and 30 % less damage taken for 20 s. Cooldown 75 s.</td></tr>
<tr><th>Own skills</th><td>Hibernation, Bear Rage, Iron Hide</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 78 m; also shows: prey, carrion, blood, berries</td></tr>
</tbody>
</table>
<div class="hb-tip">The black bear cannot dodge – it takes the blows. Trigger Rage before the fight. As an omnivore it always finds something: prey, carrion, berries or roots.</div>`,
        },
        {
            id: 'species-grizzly',
            title: { de: 'Grizzlybär', en: 'Grizzly bear' },
            tags: { de: 'bär grizzly', en: 'bear grizzly' },
            de: `<p><em>Das stärkste Tier der Wildnis. Schwer zu reizen – und dann nicht mehr aufzuhalten.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Allesfresser (Fleisch, Aas, Futter suchen, Beeren)</td></tr>
<tr><th>Lebensweise</th><td>Einzelgänger, Gruppe bis 2</td></tr>
<tr><th>Gesundheit</th><td>600</td></tr>
<tr><th>Stärken</th><td>Stärkstes Tier: höchste Stärke, Konstitution und Gesundheit</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Prankenhieb</strong>: ein vernichtender Hieb aus dem Ansturm mit dem höchsten Schaden im Spiel; wilde Tiere werden umgerissen. Abklingzeit 22 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Zorn</strong> (durch „Grizzlyzorn“): 20 s lang etwa 20 % mehr Schaden und 25 % weniger erlittener Schaden. Abklingzeit 90 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Fettreserven, Grizzlyzorn, Lebender Berg</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 86 m; zeigt zusätzlich: Beute, Aas, Blut, Beeren</td></tr>
</tbody>
</table>
<div class="hb-tip">600 Gesundheit und die härtesten Schläge – aber langsam und kaum zu übersehen (Tarnung 2). Gegner, die schneller sind, kannst du nicht einholen; lass sie kommen.</div>`,
            en: `<p><em>The strongest animal of the wilderness. Slow to anger, unstoppable once it is.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Omnivore (meat, carrion, foraging, berries)</td></tr>
<tr><th>Way of life</th><td>Loner, group up to 2</td></tr>
<tr><th>Health</th><td>600</td></tr>
<tr><th>Strengths</th><td>Strongest animal: top strength, constitution and health</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Maul</strong>: a crushing charge swipe with the highest damage in the game; wild animals are knocked down. Cooldown 22 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Fury</strong> (via "Grizzly Fury"): about 20 % more damage and 25 % less damage taken for 20 s. Cooldown 90 s.</td></tr>
<tr><th>Own skills</th><td>Fat Reserves, Grizzly Fury, Living Mountain</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 86 m; also shows: prey, carrion, blood, berries</td></tr>
</tbody>
</table>
<div class="hb-tip">600 health and the hardest blows – but slow and hard to miss (stealth 2). You cannot catch faster opponents; let them come to you.</div>`,
        },
        {
            id: 'species-boar',
            title: { de: 'Wildschwein', en: 'Wild boar' },
            tags: { de: 'wildschwein keiler sau rotte', en: 'boar pig hog' },
            de: `<p><em>Zäh, jähzornig und frisst alles. Eine Rotte Wildschweine fürchtet keinen Wolf.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Allesfresser (Fleisch, Aas, Futter suchen, Beeren)</td></tr>
<tr><th>Lebensweise</th><td>Herdentier, Gruppe bis 8</td></tr>
<tr><th>Gesundheit</th><td>260</td></tr>
<tr><th>Stärken</th><td>Zäh, gute Nase, lebt in der Rotte</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Hauerstoß</strong>: ein rammender Stoß mit den Hauern. Abklingzeit 16 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Rasen</strong> (durch „Hauer“): 20 s lang etwa 15 % mehr Schaden und etwas schneller. Abklingzeit 70 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Trüffelnase, Hauer, Borsten</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 94 m; zeigt zusätzlich: Aas, Beeren</td></tr>
</tbody>
</table>
<div class="hb-tip">Der einzige Allesfresser mit Herde: Eine Rotte kann gemeinsam jagen und sich gemeinsam verteidigen. Die Witterung zeigt dir Aas.</div>`,
            en: `<p><em>Tough, quick-tempered and eats everything. A group of boars fears no wolf.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Omnivore (meat, carrion, foraging, berries)</td></tr>
<tr><th>Way of life</th><td>Herd animal, group up to 8</td></tr>
<tr><th>Health</th><td>260</td></tr>
<tr><th>Strengths</th><td>Tough, good nose, lives in a group</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Tusk charge</strong>: a ramming hit with the tusks. Cooldown 16 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Frenzy</strong> (via "Tusker"): about 15 % more damage and a little faster for 20 s. Cooldown 70 s.</td></tr>
<tr><th>Own skills</th><td>Truffle Nose, Tusker, Bristles</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 94 m; also shows: carrion, berries</td></tr>
</tbody>
</table>
<div class="hb-tip">The only omnivore with a herd: a group can hunt and defend together. Your scent shows you carrion.</div>`,
        },
        {
            id: 'species-raccoon',
            title: { de: 'Waschbär', en: 'Raccoon' },
            tags: { de: 'waschbär', en: 'raccoon' },
            de: `<p><em>Klein, schlau und immer hungrig. Findet überall Futter und entwischt jeder Gefahr.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Allesfresser (Fleisch, Aas, Futter suchen, Beeren)</td></tr>
<tr><th>Lebensweise</th><td>Einzelgänger, Gruppe bis 3</td></tr>
<tr><th>Gesundheit</th><td>110</td></tr>
<tr><th>Stärken</th><td>Tarnung, Nachtsicht, verträgt Aas</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Sprint</strong>: 6 s lang etwa 25 % schneller. Abklingzeit 25 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Plündern</strong> (durch „Flinke Pfoten“): 30 s lang frisst du etwa 50 % schneller und fällst weniger auf. Abklingzeit 60 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Eiserner Magen, Flinke Pfoten, Maskierter Bandit</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Nachtsicht, 86 m; zeigt zusätzlich: Aas, Beeren</td></tr>
</tbody>
</table>
<div class="hb-tip">Schnell rein, Reste fressen, schnell raus: Mit Plündern frisst du dich an einem fremden Kadaver satt, bevor der Jäger zurück ist.</div>`,
            en: `<p><em>Small, clever and always hungry. Finds food everywhere and slips away from every danger.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Omnivore (meat, carrion, foraging, berries)</td></tr>
<tr><th>Way of life</th><td>Loner, group up to 3</td></tr>
<tr><th>Health</th><td>110</td></tr>
<tr><th>Strengths</th><td>Stealth, night vision, copes with carrion</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Burst</strong>: about 25 % faster for 6 s. Cooldown 25 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Scavenge</strong> (via "Nimble Paws"): you eat about 50 % faster and are noticed less for 30 s. Cooldown 60 s.</td></tr>
<tr><th>Own skills</th><td>Iron Belly, Nimble Paws, Masked Bandit</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Night vision, 86 m; also shows: carrion, berries</td></tr>
</tbody>
</table>
<div class="hb-tip">Quick in, eat the leftovers, quick out: with Scavenge you eat your fill at someone else's carcass before the hunter comes back.</div>`,
        },
        {
            id: 'species-possum',
            title: { de: 'Opossum', en: 'Opossum' },
            tags: { de: 'opossum beutelratte', en: 'possum' },
            de: `<p><em>Klein, schwach und leicht zu übersehen. Frisst, was es findet – und droht Gefahr, stellt es sich einfach tot.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Allesfresser (Fleisch, Aas, Futter suchen, Beeren)</td></tr>
<tr><th>Lebensweise</th><td>Einzelgänger, Gruppe bis 2</td></tr>
<tr><th>Gesundheit</th><td>90</td></tr>
<tr><th>Stärken</th><td>Sehr gute Tarnung, fast immun gegen Tollwut, verträgt Aas</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Sprint</strong>: 5 s lang etwa 20 % schneller. Abklingzeit 25 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Totstellen</strong> (durch „Scheintod“): Du fällst in die Totstarre – 20 s lang bemerken dich Tiere kaum und Treffer schaden etwa 40 % weniger. Abklingzeit 60 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Zäher Aasfresser, Scheintod, Meister der Täuschung</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Nachtsicht, 86 m; zeigt zusätzlich: Aas, Beeren</td></tr>
</tbody>
</table>
<div class="hb-tip">Eins der schwächsten Tiere im Kampf (Stärke 1). Wenn etwas Großes kommt: Totstellen und warten, bis es weiterzieht.</div>`,
            en: `<p><em>Small, weak and easily overlooked. Eats whatever it finds - and when danger comes, it simply plays dead.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Omnivore (meat, carrion, foraging, berries)</td></tr>
<tr><th>Way of life</th><td>Loner, group up to 2</td></tr>
<tr><th>Health</th><td>90</td></tr>
<tr><th>Strengths</th><td>Very good stealth, almost immune to rabies, copes with carrion</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Burst</strong>: about 20 % faster for 5 s. Cooldown 25 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Play Dead</strong> (via "Playing Possum"): you drop into the dead pose – for 20 s animals barely notice you and blows hurt about 40 % less. Cooldown 60 s.</td></tr>
<tr><th>Own skills</th><td>Hardy Scavenger, Playing Possum, Great Pretender</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Night vision, 86 m; also shows: carrion, berries</td></tr>
</tbody>
</table>
<div class="hb-tip">One of the weakest animals in a fight (strength 1). When something big comes: play dead and wait until it moves on.</div>`,
        },
        {
            id: 'species-skunk',
            title: { de: 'Stinktier', en: 'Skunk' },
            tags: { de: 'stinktier skunk', en: 'skunk' },
            de: `<p><em>Klein und langsam, aber niemand will sich mit ihm anlegen. Sein Strahl betäubt Angreifer, sein Gestank hält sie fern.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Allesfresser (Fleisch, Aas, Futter suchen, Beeren)</td></tr>
<tr><th>Lebensweise</th><td>Einzelgänger, Gruppe bis 2</td></tr>
<tr><th>Gesundheit</th><td>100</td></tr>
<tr><th>Stärken</th><td>Strahl, Abwehr, Nachtsicht</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Strahl</strong>: ein breiter Sprühkegel, der kaum Schaden macht, wilde Tiere aber umreißt und danach eine Weile taumeln (verlangsamt) lässt. Abklingzeit 18 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Stinkwolke</strong> (durch „Duftdrüsen“): 20 s lang schaden dir Treffer und Bisse etwa 35 % weniger, und du blutest weniger. Abklingzeit 70 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Warnstreifen, Duftdrüsen, Beißender Gestank</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Nachtsicht, 86 m; zeigt zusätzlich: Beute, Aas, Beeren</td></tr>
</tbody>
</table>
<div class="hb-tip">Gegen wilde Tiere ist der Strahl dein Fluchtweg: umreißen, taumeln lassen, weg. Gegen Spieler wirkt er nur als schwacher Treffer – dort hilft die Stinkwolke.</div>`,
            en: `<p><em>Small and slow, but nobody wants to fight it. Its spray stuns attackers, its stench keeps them at bay.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Omnivore (meat, carrion, foraging, berries)</td></tr>
<tr><th>Way of life</th><td>Loner, group up to 2</td></tr>
<tr><th>Health</th><td>100</td></tr>
<tr><th>Strengths</th><td>Spray, defence, night vision</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Spray</strong>: a wide cone that barely does damage but knocks wild animals over and leaves them staggering (slowed) for a while. Cooldown 18 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Stink Cloud</strong> (via "Musk Glands"): for 20 s blows and bites hurt you about 35 % less, and you bleed less. Cooldown 70 s.</td></tr>
<tr><th>Own skills</th><td>Bold Stripes, Musk Glands, Lingering Stench</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Night vision, 86 m; also shows: prey, carrion, berries</td></tr>
</tbody>
</table>
<div class="hb-tip">Against wild animals the spray is your way out: knock them over, let them stagger, run. Against players it is only a weak hit – Stink Cloud helps there.</div>`,
        },
        {
            id: 'species-armadillo',
            title: { de: 'Gürteltier', en: 'Armadillo' },
            tags: { de: 'gürteltier panzer', en: 'armadillo armour' },
            de: `<p><em>Klein, langsam und gepanzert. Gräbt im warmen Süden nach Maden – und droht Gefahr, rollt es sich zur Kugel ein.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Allesfresser (Fleisch, Aas, Futter suchen, Beeren)</td></tr>
<tr><th>Lebensweise</th><td>Einzelgänger, Gruppe bis 2</td></tr>
<tr><th>Gesundheit</th><td>120</td></tr>
<tr><th>Stärken</th><td>Panzer (hohe Konstitution), liebt Hitze, Bisse kommen schlecht durch</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Sprint</strong>: 4 s lang etwa 25 % schneller – ab in den Bau. Abklingzeit 22 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Einrollen</strong> (durch „Feste Kugel“): 15 s lang schaden dir Treffer etwa 55 % weniger und du blutest weniger – aber du kommst kaum vom Fleck. Abklingzeit 50 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Dicke Platten, Feste Kugel, Grabkrallen</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Nachtsicht, 70 m; zeigt zusätzlich: Aas, Beeren</td></tr>
</tbody>
</table>
<div class="hb-tip">Ein Tier für den heißen Süden (bis 42 °C wohl), friert aber schon unter etwa −2 °C. Einrollen ist die stärkste Abwehr im Spiel – nur weglaufen kannst du dabei nicht.</div>`,
            en: `<p><em>Small, slow and clad in armour. Digs for grubs in the warm south - and when danger comes, it curls up into a ball.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Omnivore (meat, carrion, foraging, berries)</td></tr>
<tr><th>Way of life</th><td>Loner, group up to 2</td></tr>
<tr><th>Health</th><td>120</td></tr>
<tr><th>Strengths</th><td>Armour (high constitution), loves heat, bites barely get through</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Bolt</strong>: about 25 % faster for 4 s – off to the burrow. Cooldown 22 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Curl Up</strong> (via "Tight Ball"): for 15 s blows hurt you about 55 % less and you bleed less – but you hardly move. Cooldown 50 s.</td></tr>
<tr><th>Own skills</th><td>Thick Plates, Tight Ball, Digging Claws</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Night vision, 70 m; also shows: carrion, berries</td></tr>
</tbody>
</table>
<div class="hb-tip">An animal for the hot south (comfortable up to 42 °C), but it gets cold below about −2 °C. Curl Up is the strongest defence in the game – you just cannot run away while using it.</div>`,
        },
        {
            id: 'species-squirrel',
            title: { de: 'Eichhörnchen', en: 'Squirrel' },
            tags: { de: 'eichhörnchen nager kleintier', en: 'squirrel rodent small' },
            de: `<p><em>Winzig, flink und wachsam. Lebt allein in seinem kleinen Reich – droht Gefahr, erstarrt es wie ein Astknoten in der Rinde.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Pflanzenfresser (Grasen)</td></tr>
<tr><th>Lebensweise</th><td>Einzelgänger, Gruppe bis 2, Kleintier</td></tr>
<tr><th>Gesundheit</th><td>45</td></tr>
<tr><th>Stärken</th><td>Sehr feine Sinne, flink, Kleintier; wehrt sich nur gegen Spieler, die angreifen</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Sprint</strong>: 5 s lang etwa 30 % schneller, Abklingzeit 20 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Erstarren</strong> (durch „Stille“): 20 s lang reglos wie ein Astknoten – kaum bemerkt, deine Sinne reichen weiter, aber du kommst kaum vom Fleck. Abklingzeit 45 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Buschiger Schwanz, Stille, Wächter</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 102 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Mit 45 Gesundheit ist jeder Kampf zu viel. Erstarren und beobachten – oder sprinten. Kältefest, gut für den Winter.</div>`,
            en: `<p><em>Tiny, quick and watchful. Lives alone in its small realm - when danger comes, it freezes like a knot in the bark.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Herbivore (grazing)</td></tr>
<tr><th>Way of life</th><td>Loner, group up to 2, small animal</td></tr>
<tr><th>Health</th><td>45</td></tr>
<tr><th>Strengths</th><td>Very keen senses, quick, small animal; only fights back against players who attack</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Scamper</strong>: about 30 % faster for 5 s, cooldown 20 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Freeze</strong> (via "Stillness"): motionless like a knot in the bark for 20 s – barely noticed, your senses reach further, but you hardly move. Cooldown 45 s.</td></tr>
<tr><th>Own skills</th><td>Bushy Tail, Stillness, Sentinel</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 102 m</td></tr>
</tbody>
</table>
<div class="hb-tip">With 45 health any fight is too much. Freeze and watch – or scamper. Cold-hardy, good for winter.</div>`,
        },
        {
            id: 'species-chipmunk',
            title: { de: 'Streifenhörnchen', en: 'Chipmunk' },
            tags: { de: 'streifenhörnchen nager kleintier', en: 'chipmunk rodent small' },
            de: `<p><em>Das kleinste von allen und kaum zu entdecken. Stopft sich die Backen voll und ist weg, bevor es jemand bemerkt.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Pflanzenfresser (Grasen)</td></tr>
<tr><th>Lebensweise</th><td>Einzelgänger, Gruppe bis 2, Kleintier</td></tr>
<tr><th>Gesundheit</th><td>35</td></tr>
<tr><th>Stärken</th><td>Kleinstes Tier, sehr gute Tarnung; wehrt sich nur gegen Spieler, die angreifen</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Sprint</strong>: 5 s lang etwa 30 % schneller, Abklingzeit 20 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Backentaschen</strong> (durch „Volle Backen“): 45 s lang frisst du etwa 60 % schneller und wirst etwa 40 % langsamer hungrig. Abklingzeit 60 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Streifenfell, Volle Backen, Wintervorrat</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 94 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Das zerbrechlichste Tier (35 Gesundheit) und am schwersten zu entdecken. Backentaschen vor dem Grasen zünden, satt fressen und wieder verschwinden.</div>`,
            en: `<p><em>The smallest of them all and hard to spot. Stuffs its cheeks full and is gone before anyone notices it.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Herbivore (grazing)</td></tr>
<tr><th>Way of life</th><td>Loner, group up to 2, small animal</td></tr>
<tr><th>Health</th><td>35</td></tr>
<tr><th>Strengths</th><td>Smallest animal, very good stealth; only fights back against players who attack</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Dash</strong>: about 30 % faster for 5 s, cooldown 20 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Cheek Pouches</strong> (via "Stuffed Cheeks"): for 45 s you eat about 60 % faster and get hungry about 40 % more slowly. Cooldown 60 s.</td></tr>
<tr><th>Own skills</th><td>Striped Coat, Stuffed Cheeks, Winter Larder</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 94 m</td></tr>
</tbody>
</table>
<div class="hb-tip">The most fragile animal (35 health) and the hardest to spot. Trigger Cheek Pouches before grazing, eat your fill and disappear again.</div>`,
        },
        {
            id: 'species-muskrat',
            title: { de: 'Bisamratte', en: 'Muskrat' },
            tags: { de: 'bisam nager kleintier', en: 'rodent small' },
            de: `<p><em>Ein kleiner Schwimmer der Sümpfe, der in Familien lebt. Taucht vor Gefahr ab und verschwindet im Schilf.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Pflanzenfresser (Grasen)</td></tr>
<tr><th>Lebensweise</th><td>Herdentier, Gruppe bis 6, Kleintier</td></tr>
<tr><th>Gesundheit</th><td>60</td></tr>
<tr><th>Stärken</th><td>Schwimmer, kämpft auch im Wasser, kältefest; wehrt sich nur gegen Spieler, die angreifen, kann auch schwimmend kämpfen</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Abtauchen</strong>: 6 s lang etwa 30 % schneller – an Land wie im Wasser. Abklingzeit 25 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Schilfdeckung</strong> (durch „Schilfbewohner“): 20 s lang viel weniger bemerkt, du heilst schneller und Treffer schaden etwas weniger. Abklingzeit 60 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Öliges Fell, Schilfbewohner, Sumpfburg</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Witterung, 78 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Sümpfe und Flussufer sind dein Zuhause. Bei Gefahr: abtauchen, ab ins Schilf, Schilfdeckung – und dort heilen.</div>`,
            en: `<p><em>A small swimmer of the marshes that lives in families. Dives away from danger and vanishes in the reeds.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Herbivore (grazing)</td></tr>
<tr><th>Way of life</th><td>Herd animal, group up to 6, small animal</td></tr>
<tr><th>Health</th><td>60</td></tr>
<tr><th>Strengths</th><td>Swimmer, fights in the water too, cold-hardy; only fights back against players who attack, can fight while swimming</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Dive</strong>: about 30 % faster for 6 s – on land as in the water. Cooldown 25 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Reed Cover</strong> (via "Reed Dweller"): noticed far less, you heal faster and blows hurt a little less for 20 s. Cooldown 60 s.</td></tr>
<tr><th>Own skills</th><td>Oily Fur, Reed Dweller, Marsh Lodge</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Scent, 78 m</td></tr>
</tbody>
</table>
<div class="hb-tip">Marshes and river banks are your home. When danger comes: dive, into the reeds, Reed Cover – and heal there.</div>`,
        },
        {
            id: 'species-rat',
            title: { de: 'Ratte', en: 'Rat' },
            tags: { de: 'ratte nager kleintier', en: 'rodent small' },
            de: `<p><em>Klein, zäh und schlau. Frisst alles, lebt in Kolonien – und eine Kolonie, die ausschwärmt, beißt härter als jede einzelne Ratte.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Klasse</th><td>Allesfresser (Fleisch, Aas, Futter suchen, Beeren)</td></tr>
<tr><th>Lebensweise</th><td>Rudeltier, Gruppe bis 10, Kleintier</td></tr>
<tr><th>Gesundheit</th><td>50</td></tr>
<tr><th>Stärken</th><td>Tarnung, Sinne, große Kolonie, verträgt Aas</td></tr>
<tr><th>Sonderfähigkeit (<kbd>Tab</kbd>)</th><td><strong>Sprint</strong>: 5 s lang etwa 25 % schneller. Abklingzeit 22 s.</td></tr>
<tr><th>Zweite Fähigkeit (<kbd>X</kbd>)</th><td><strong>Ausschwärmen</strong> (durch „Ruf der Kolonie“): du und deine Kolonie im Umkreis von 25 m beißt 20 s lang etwa 20 % härter und lauft etwas schneller. Abklingzeit 70 s.</td></tr>
<tr><th>Eigene Fähigkeiten</th><td>Abgehärtet, Ruf der Kolonie, Scharfe Nagezähne</td></tr>
<tr><th>Sinne (<kbd>V</kbd>)</th><td>Nachtsicht, 94 m; zeigt zusätzlich: Aas, Blut, Beeren</td></tr>
</tbody>
</table>
<div class="hb-tip">Eine einzelne Ratte ist schwach, eine Kolonie (bis 10) ist es nicht. Mit Nachtsicht siehst du Aas und Blut – die Reste der großen Jäger sind dein Futter.</div>`,
            en: `<p><em>Small, tough and clever. Eats anything, lives in colonies - and a colony that swarms out bites harder than any single rat.</em></p>
<table class="hb-table">
<tbody>
<tr><th>Class</th><td>Omnivore (meat, carrion, foraging, berries)</td></tr>
<tr><th>Way of life</th><td>Pack animal, group up to 10, small animal</td></tr>
<tr><th>Health</th><td>50</td></tr>
<tr><th>Strengths</th><td>Stealth, senses, big colony, copes with carrion</td></tr>
<tr><th>Special ability (<kbd>Tab</kbd>)</th><td><strong>Scurry</strong>: about 25 % faster for 5 s. Cooldown 22 s.</td></tr>
<tr><th>Second ability (<kbd>X</kbd>)</th><td><strong>Swarm</strong> (via "Colony Call"): you and your colony within 25 m bite about 20 % harder and run a little faster for 20 s. Cooldown 70 s.</td></tr>
<tr><th>Own skills</th><td>Plague-Hardened, Colony Call, Sharp Incisors</td></tr>
<tr><th>Senses (<kbd>V</kbd>)</th><td>Night vision, 94 m; also shows: carrion, blood, berries</td></tr>
</tbody>
</table>
<div class="hb-tip">A single rat is weak, a colony (up to 10) is not. With night vision you see carrion and blood – the big hunters' leftovers are your food.</div>`,
        },
    ],
});
