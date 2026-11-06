window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'world',
    order: 78,
    icon: 'world',
    title: { de: 'Die Welt', en: 'The world' },
    sections: [
        {
            id: 'world-overview',
            title: { de: 'Eine Welt ohne Menschen', en: 'A world without humans' },
            tags: { de: 'welt karte menschen städte wildtiere minimap', en: 'world map humans towns wildlife minimap' },
            de: `<p>Life in Wilderness spielt auf der Karte von Red Dead Redemption 2 – aber die Menschen sind fort.</p>
<ul>
<li><strong>Keine Menschen, keine Kutschen, keine Züge:</strong> Städte, Höfe und Straßen stehen leer. Du kannst sie durchstreifen, aber dort wartet niemand.</li>
<li><strong>Wildtiere</strong> leben überall: Beute, Raubtiere, Schlangen. Wie viele unterwegs sind, hängt auch von der <a href="#world-seasons">Jahreszeit</a> und deinem <a href="#territory-bonuses">Revier</a> ab (siehe <a href="#food">Nahrung</a> und <a href="#senses">Sinne</a>).</li>
<li><strong>Karte:</strong> Die Minimap des Spiels ist ausgeblendet, LiW hat ein eigenes HUD (siehe <a href="#hud">HUD und Menüs</a>). Die Pausenkarte bleibt. Andere Spieler siehst du dort nicht – nur deine Rudelmitglieder.</li>
<li>Die Insel Guarma ist für Spieler nicht erreichbar.</li>
</ul>`,
            en: `<p>Life in Wilderness is set on the map of Red Dead Redemption 2 – but the humans are gone.</p>
<ul>
<li><strong>No humans, no wagons, no trains:</strong> towns, farms and roads stand empty. You can roam them, but nobody is waiting there.</li>
<li><strong>Wild animals</strong> live everywhere: prey, predators, snakes. How many are about also depends on the <a href="#world-seasons">season</a> and your <a href="#territory-bonuses">territory</a> (see <a href="#food">Food</a> and <a href="#senses">Senses</a>).</li>
<li><strong>Map:</strong> the game's minimap is hidden, LiW has its own HUD (see <a href="#hud">HUD and menus</a>). The pause map stays. You do not see other players there – only your pack mates.</li>
<li>The island of Guarma is not reachable for players.</li>
</ul>`,
        },
        {
            id: 'world-time',
            title: { de: 'Uhrzeit und Echtzeit', en: 'Time of day and real time' },
            tags: { de: 'uhrzeit spielzeit echtzeit umrechnung tag nacht spieltag', en: 'time game time real time conversion day night game day' },
            de: `<p>Die Spieluhr ist für alle gleich und an die <strong>echte Uhrzeit</strong> gekoppelt: An einem echten Tag laufen <strong>zwei volle Spieltage</strong>.</p>
<table class="hb-table">
<thead><tr><th>Spielzeit</th><th>Echtzeit</th></tr></thead>
<tbody>
<tr><td>1 Spielminute</td><td>30 Sekunden</td></tr>
<tr><td>1 Spielstunde</td><td>30 Minuten</td></tr>
<tr><td>1 Spieltag</td><td>12 Stunden</td></tr>
</tbody>
</table>
<p>So findest du die Spielzeit: <strong>echte Stunde × 2</strong> (nachmittags vorher 12 abziehen).</p>
<table class="hb-table">
<thead><tr><th>Echte Uhrzeit (Serverzeit)</th><th>Im Spiel</th></tr></thead>
<tbody>
<tr><td>0:00 und 12:00</td><td>Mitternacht</td></tr>
<tr><td>3:00 und 15:00</td><td>6 Uhr morgens</td></tr>
<tr><td>6:00 und 18:00</td><td>Mittag</td></tr>
<tr><td>9:00 und 21:00</td><td>18 Uhr abends</td></tr>
<tr><td>10:30 bis 14:30 und 22:30 bis 2:30</td><td>Nacht (21 bis 5 Uhr)</td></tr>
</tbody>
</table>
<p>Die Uhr oben im HUD zeigt die Spielzeit. Wo Zeiten wichtig sind – Quests, Dauer von Effekten, Lebensalter – zeigt dir das Spiel in der Regel <strong>echte</strong> Minuten und Stunden („Überlebe 30 Minuten (Echtzeit)“). Ein „Spieltag überleben“ dauert 12 echte Stunden.</p>`,
            en: `<p>The game clock is the same for everyone and coupled to the <strong>real time</strong>: one real day runs <strong>two full game days</strong>.</p>
<table class="hb-table">
<thead><tr><th>Game time</th><th>Real time</th></tr></thead>
<tbody>
<tr><td>1 game minute</td><td>30 seconds</td></tr>
<tr><td>1 game hour</td><td>30 minutes</td></tr>
<tr><td>1 game day</td><td>12 hours</td></tr>
</tbody>
</table>
<p>To find the game time: <strong>real hour × 2</strong> (in the afternoon subtract 12 first).</p>
<table class="hb-table">
<thead><tr><th>Real time (server time)</th><th>In the game</th></tr></thead>
<tbody>
<tr><td>0:00 and 12:00</td><td>midnight</td></tr>
<tr><td>3:00 and 15:00</td><td>6 in the morning</td></tr>
<tr><td>6:00 and 18:00</td><td>noon</td></tr>
<tr><td>9:00 and 21:00</td><td>6 in the evening</td></tr>
<tr><td>10:30 to 14:30 and 22:30 to 2:30</td><td>night (21:00 to 5:00)</td></tr>
</tbody>
</table>
<p>The clock at the top of the HUD shows the game time. Where times matter – quests, effect durations, age – the game usually shows <strong>real</strong> minutes and hours ("Survive 30 minutes (real time)"). "Surviving a game day" takes 12 real hours.</p>`,
        },
        {
            id: 'world-night',
            title: { de: 'Tag und Nacht', en: 'Day and night' },
            tags: { de: 'nacht tag dämmerung dunkel raubtiere nachtsicht', en: 'night day dusk dark predators night vision' },
            de: `<p>Als <strong>Nacht</strong> gilt die Spielzeit von 21 bis 5 Uhr.</p>
<ul>
<li>Wilde Raubtiere werden im Dunkeln schneller angriffslustig, in der Dämmerung etwas – in <a href="#events-full-moon">Vollmondnächten</a> noch mehr.</li>
<li>Viele Arten sehen nachts mit ihren <a href="#senses">Sinnen</a> (<kbd>V</kbd>) besser (Nachtsicht).</li>
<li>Manche <a href="#quests">Quests</a> zählen nur nachts oder nur am Tag – die Marke an der Quest sagt dir, ab wann.</li>
</ul>`,
            en: `<p><strong>Night</strong> is the game time from 21:00 to 5:00.</p>
<ul>
<li>Wild predators get aggressive faster in the dark, a little at dusk – even more on <a href="#events-full-moon">full moon nights</a>.</li>
<li>Many species see better at night with their <a href="#senses">senses</a> (<kbd>V</kbd>) (night vision).</li>
<li>Some <a href="#quests">quests</a> only count at night or only by day – the chip on the quest tells you from when.</li>
</ul>`,
        },
        {
            id: 'world-weather',
            title: { de: 'Wetter', en: 'Weather' },
            tags: { de: 'wetter regen nebel schnee sturm gewitter', en: 'weather rain fog snow storm thunderstorm' },
            de: `<p>Das Wetter ist für alle gleich und wechselt von selbst, derzeit etwa alle 20 bis 45 Minuten. Die Uhr im HUD zeigt es an (z. B. Sonnig, Bewölkt, Dunstig, Nebel, Nieselregen, Regen, Gewitter, Leichter Schnee, Schnee).</p>
<ul>
<li><strong>Je Jahreszeit</strong> anders: im Sommer viel Sonne und gelegentlich Gewitter, im Herbst Nebel, Dunst und Regen, <strong>Schnee nur im Winter</strong>.</li>
<li><strong>Events</strong> bringen ihr eigenes Wetter: Nebel an Halloween, Schnee zum Winterzauber, klarer Himmel bei Vollmond und zur Sonnenwende (siehe <a href="#events">Events</a>).</li>
<li>Wetter verändert die gefühlte Temperatur deines Tiers. Unter einem Dach, in einer Höhle oder einem Gebäude spürst du es kaum (siehe <a href="#needs">Bedürfnisse</a>).</li>
<li>Manche Quests verlangen Regen, Sturm, Nebel oder Schnee.</li>
</ul>`,
            en: `<p>The weather is the same for everyone and changes on its own, currently about every 20 to 45 minutes. The clock in the HUD shows it (e.g. Sunny, Cloudy, Misty, Fog, Drizzle, Rain, Thunderstorm, Light snow, Snow).</p>
<ul>
<li><strong>Different per season:</strong> lots of sun and the odd thunderstorm in summer, fog, mist and rain in autumn, <strong>snow only in winter</strong>.</li>
<li><strong>Events</strong> bring their own weather: fog at Halloween, snow for Winter Magic, a clear sky at full moon and midsummer (see <a href="#events">Events</a>).</li>
<li>Weather changes how warm or cold your animal feels. Under a roof, in a cave or a building you hardly feel it (see <a href="#needs">Needs</a>).</li>
<li>Some quests ask for rain, storm, fog or snow.</li>
</ul>`,
        },
        {
            id: 'world-seasons',
            title: { de: 'Jahreszeiten', en: 'Seasons' },
            tags: { de: 'jahreszeit frühling sommer herbst winter brunft beeren kälte', en: 'season spring summer autumn winter rut berries cold' },
            de: `<p>Die Jahreszeiten folgen dem <strong>echten Kalender</strong>: Frühling ab 1. März, Sommer ab 1. Juni, Herbst ab 1. September, Winter ab 1. Dezember. Die Uhr im HUD zeigt Jahreszeit und Tag (z. B. „Herbst · Tag 44/91“); beim Wechsel erscheint ein Banner.</p>
<table class="hb-table">
<thead><tr><th>Jahreszeit</th><th>Wildtiere</th><th>Temperatur</th><th>Beeren wachsen nach</th><th>Besonderes</th></tr></thead>
<tbody>
<tr><td>Frühling</td><td>etwas mehr</td><td>normal</td><td>langsam</td><td>das Winterfell fällt aus</td></tr>
<tr><td>Sommer</td><td>normal</td><td>wärmer (+5 °C)</td><td>normal</td><td>heiße Tage</td></tr>
<tr><td>Herbst</td><td>am meisten</td><td>kühler (−2 °C)</td><td>schnell</td><td><strong>Brunftzeit</strong> – nur jetzt ist <a href="#family-mating">Paarung</a> möglich; das Winterfell wächst</td></tr>
<tr><td>Winter</td><td>deutlich weniger</td><td>kalt (−8 °C)</td><td>gar nicht</td><td>Schnee, Beute wird knapp</td></tr>
</tbody>
</table>
<p>Wie Kälte, Hitze und Winterfell auf dein Tier wirken, steht unter <a href="#needs">Bedürfnisse</a>, Beeren und Jagd unter <a href="#food">Nahrung</a>. Jede Jahreszeit ist auch eine <a href="#ranking-seasons">Saison der Ranglisten</a>.</p>`,
            en: `<p>The seasons follow the <strong>real calendar</strong>: spring from 1 March, summer from 1 June, autumn from 1 September, winter from 1 December. The clock in the HUD shows the season and day (e.g. "Autumn · day 44/91"); a banner appears when it changes.</p>
<table class="hb-table">
<thead><tr><th>Season</th><th>Wildlife</th><th>Temperature</th><th>Berries regrow</th><th>Special</th></tr></thead>
<tbody>
<tr><td>Spring</td><td>a bit more</td><td>normal</td><td>slowly</td><td>the winter coat sheds</td></tr>
<tr><td>Summer</td><td>normal</td><td>warmer (+5 °C)</td><td>normally</td><td>hot days</td></tr>
<tr><td>Autumn</td><td>the most</td><td>cooler (−2 °C)</td><td>fast</td><td><strong>rutting season</strong> – <a href="#family-mating">pairing</a> is only possible now; the winter coat grows</td></tr>
<tr><td>Winter</td><td>clearly fewer</td><td>cold (−8 °C)</td><td>not at all</td><td>snow, prey gets scarce</td></tr>
</tbody>
</table>
<p>How cold, heat and the winter coat affect your animal is under <a href="#needs">Needs</a>, berries and hunting under <a href="#food">Food</a>. Every season is also a <a href="#ranking-seasons">ranking season</a>.</p>`,
        },
        {
            id: 'world-regions',
            title: { de: 'Regionen erkunden', en: 'Exploring regions' },
            tags: { de: 'regionen erkunden entdecken gebiet karte', en: 'regions explore discover area map' },
            de: `<p>Die Karte ist in <strong>Regionen</strong> unterteilt – von den Sümpfen im Südosten über das Grasland bis zu den verschneiten Bergen im Norden und der Wüste im Westen. Betrittst du eine Region zum ersten Mal mit deinem Tier, meldet das Spiel „Neues Gebiet entdeckt“ und du bekommst 50 EP (siehe <a href="#progress-xp">Erfahrung sammeln</a>).</p>
<p>Wie viele Regionen dein Tier schon kennt, steht im Charaktermenü (<kbd>J</kbd>) unter <em>Erkundete Regionen</em>. Erkunden zählt für Errungenschaften wie „Entdecker“ und für Rudelquests.</p>
<div class="hb-tip">Jede Art hat ihre Lieblingsgegenden: Alligatoren im Sumpf, Dickhornschafe in den Bergen, Bisons in der Ebene. Bevor du weit wanderst, denk an Wasser, Futter und die Temperatur.</div>`,
            en: `<p>The map is divided into <strong>regions</strong> – from the swamps in the south-east across the grasslands to the snowy mountains in the north and the desert in the west. When you enter a region with your animal for the first time, the game says "New territory discovered" and you get 50 XP (see <a href="#progress-xp">Earning experience</a>).</p>
<p>The character menu (<kbd>J</kbd>) shows under <em>Explored regions</em> how many regions your animal knows. Exploring counts for achievements like "Explorer" and for pack quests.</p>
<div class="hb-tip">Every species has its favourite places: alligators in the swamp, bighorn sheep in the mountains, bison on the plains. Before you wander far, think of water, food and the temperature.</div>`,
        },
    ],
});
