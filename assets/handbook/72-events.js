window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'events',
    order: 72,
    icon: 'event',
    title: { de: 'Events', en: 'Events' },
    sections: [
        {
            id: 'events-calendar',
            title: { de: 'Der Event-Kalender', en: 'The event calendar' },
            tags: { de: 'event kalender feiertag ankündigung discord', en: 'event calendar holiday announcement discord' },
            de: `<p>Über das Jahr verteilt gibt es <strong>Events</strong> – manche jeden Monat, manche einmal im Jahr. Sie richten sich nach dem echten Kalender (deutsche Zeit).</p>
<ul>
<li>Laufende und kommende Events stehen im Aufgabenmenü (<kbd>K</kbd>), Reiter <strong>Kalender</strong>, mit Restzeit bzw. Startdatum.</li>
<li>Beginnt ein Event, bekommen alle eine Notiz. Kommst du in die Wildnis, erfährst du, was gerade läuft und was in den nächsten Tagen beginnt.</li>
<li>Neben der Uhr im HUD steht ein kleines Schild mit dem laufenden Event.</li>
<li>Events werden auch auf unserem Discord angekündigt.</li>
</ul>
<p>Während eines Events gibt es eigene <strong>Event-Quests</strong>: höchstens eine Tagesquest und eine Wochenquest des Events (sie werden zuerst gezogen), dazu Event-Nebenquests und Errungenschaften, die nur dann zählen. Im Menü tragen sie den Namen des Events. Event-Nebenquests beginnen bei jedem neuen Event von vorn.</p>
<p><strong>Jahres-Titel:</strong> Schließt du während eines der großen Events (alle außer Vollmond) eine seiner Nebenquests ab, bekommt dein Account den Titel dieses Jahres, z. B. „Halloween 2026“ oder „Winterzauber 2026“ – später nie wieder (siehe <a href="#quests-titles">Titel</a>).</p>`,
            en: `<p>Throughout the year there are <strong>events</strong> – some every month, some once a year. They follow the real calendar (German time).</p>
<ul>
<li>Running and upcoming events are listed in the task menu (<kbd>K</kbd>), tab <strong>Calendar</strong>, with time left or start date.</li>
<li>When an event begins, everyone gets a note. When you enter the wild, you learn what is running and what starts in the next days.</li>
<li>Next to the clock in the HUD a small tag shows the running event.</li>
<li>Events are also announced on our Discord.</li>
</ul>
<p>During an event there are special <strong>event quests</strong>: at most one daily quest and one weekly quest of the event (they are drawn first), plus event side quests and achievements that only count then. In the menu they carry the event's name. Event side quests start over with every new occurrence.</p>
<p><strong>Year titles:</strong> if you finish one of its side quests during one of the big events (all except the full moon), your account gets that year's title, e.g. "Halloween 2026" or "Winter Magic 2026" – never again later (see <a href="#quests-titles">Titles</a>).</p>`,
        },
        {
            id: 'events-full-moon',
            title: { de: 'Vollmondnächte', en: 'Full moon nights' },
            tags: { de: 'vollmond mond nacht heulen raubtiere', en: 'full moon moon night howl predators' },
            de: `<p>Jeden Monat, am Tag des echten Vollmonds und am Tag danach, sind <strong>Vollmondnächte</strong>.</p>
<ul>
<li>Der Himmel ist meist klar, damit man den Mond sieht.</li>
<li>Wilde Raubtiere werden nachts schneller angriffslustig – Vorsicht für Beutetiere (siehe <a href="#combat">Kampf</a>).</li>
<li>Tagesquests im Mondlicht: heulen, jagen oder grasen.</li>
<li>Nebenquests „Mondaufgang“ (für alle) und danach „Chor des Vollmonds“ (Wolf, Kojote, Rotfuchs) – bei jedem Vollmond neu.</li>
</ul>
<p>Der Vollmond wird einen Tag vorher als „bald“ angezeigt.</p>`,
            en: `<p>Every month, on the day of the real full moon and the day after, there are <strong>full moon nights</strong>.</p>
<ul>
<li>The sky is mostly clear so the moon can be seen.</li>
<li>Wild predators get aggressive faster at night – careful, prey animals (see <a href="#combat">Combat</a>).</li>
<li>Daily quests in the moonlight: howl, hunt or graze.</li>
<li>Side quests "Moonrise" (for everyone) and then "Chorus of the Full Moon" (wolf, coyote, red fox) – new with every full moon.</li>
</ul>
<p>The full moon shows as "coming up" one day before.</p>`,
        },
        {
            id: 'events-holidays',
            title: { de: 'Feste im Jahr', en: 'Festivals of the year' },
            tags: { de: 'halloween winterzauber weihnachten jahreswechsel silvester ostern sommersonnenwende tagundnachtgleiche jahrestag', en: 'halloween winter magic christmas new year easter midsummer equinox anniversary' },
            de: `<table class="hb-table">
<thead><tr><th>Event</th><th>Wann</th><th>Was passiert</th></tr></thead>
<tbody>
<tr><td>Ostern</td><td>Karfreitag bis Ostermontag</td><td>Der Frühling erwacht; Event-Quests, für Kaninchen ein Event-Fell; wenn sie eingeschaltet ist, die <a href="#events-easter">Ostersuche</a></td></tr>
<tr><td>Sommersonnenwende</td><td>Tag vor bis Tag nach der echten Sonnenwende (um den 21. Juni)</td><td>Sonniges, klares Wetter; Quests tagsüber, Nebenquests „Der längste Tag“ → „Kind der Sonne“</td></tr>
<tr><td>Herbst-Tagundnachtgleiche</td><td>Tag der echten Tagundnachtgleiche (um den 22. September) und der folgende</td><td>Winterspeck anfressen, nachts heulen; Nebenquest „Tag und Nacht“</td></tr>
<tr><td>Jahrestag der Wildnis</td><td>rund um den Geburtstag des Servers, eine Woche vorher angekündigt</td><td>Gemeinsam überleben und heulen; Nebenquests „Ein wilder Geburtstag“ → „Das Geburtstagsmahl“</td></tr>
<tr><td>Halloween</td><td>24. Oktober bis 2. November</td><td>Viel Nebel und Dunst, nachts eine schaurige Stimmung; nachts heulen, im Nebel jagen oder grasen; Nebenquests „Flüstern im Nebel“ → „Die lange Nacht“ (mit Event-Fell)</td></tr>
<tr><td>Winterzauber</td><td>18. bis 27. Dezember</td><td>Schnee liegt überall, viel Schneefall; im Schnee überleben, Winterfest; Nebenquests „Erster Schnee“ → „Zusammenrücken“ (mit Event-Fell)</td></tr>
<tr><td>Jahreswechsel</td><td>31. Dezember bis 1. Januar</td><td>Schnee und <a href="#events-fireworks">Feuerwerk</a> über den Städten; Nebenquest „Countdown“ (mit Event-Fell)</td></tr>
</tbody>
</table>
<p>Die <strong>Event-Felle</strong> sind die legendären Optiken der eigenen Art (für viele, aber nicht alle Arten) und werden für deinen Account freigeschaltet – wählbar bei jedem neuen Tier dieser Art.</p>`,
            en: `<table class="hb-table">
<thead><tr><th>Event</th><th>When</th><th>What happens</th></tr></thead>
<tbody>
<tr><td>Easter</td><td>Good Friday to Easter Monday</td><td>Spring awakens; event quests, an event coat for rabbits; when it is switched on, the <a href="#events-easter">Easter egg hunt</a></td></tr>
<tr><td>Midsummer</td><td>day before to day after the real summer solstice (around 21 June)</td><td>Sunny, clear weather; quests by day, side quests "The Longest Day" → "Child of the Sun"</td></tr>
<tr><td>Autumn Equinox</td><td>day of the real equinox (around 22 September) and the next</td><td>Eat up your winter fat, howl at night; side quest "Day and Night"</td></tr>
<tr><td>Wilderness Anniversary</td><td>around the server's birthday, announced a week before</td><td>Survive and howl together; side quests "A Wild Birthday" → "The Birthday Feast"</td></tr>
<tr><td>Halloween</td><td>24 October to 2 November</td><td>Lots of fog and mist, an eerie mood at night; howl at night, hunt or graze in the fog; side quests "Whispers in the Fog" → "The Long Night" (with event coat)</td></tr>
<tr><td>Winter Magic</td><td>18 to 27 December</td><td>Snow lies everywhere, lots of snowfall; survive in the snow, winter feast; side quests "First Snow" → "Huddle Together" (with event coat)</td></tr>
<tr><td>New Year</td><td>31 December to 1 January</td><td>Snow and <a href="#events-fireworks">fireworks</a> over the towns; side quest "Countdown" (with event coat)</td></tr>
</tbody>
</table>
<p>The <strong>event coats</strong> are the legendary looks of your own species (for many, but not all species) and are unlocked for your account – selectable for every new animal of that species.</p>`,
        },
        {
            id: 'events-fireworks',
            title: { de: 'Feuerwerk zum Jahreswechsel', en: 'New Year fireworks' },
            tags: { de: 'feuerwerk silvester raketen mitternacht', en: 'fireworks new year rockets midnight' },
            de: `<p>Solange der Jahreswechsel läuft, steigen über den Städten Raketen auf – sobald ein Spieler in der Nähe ist. In der Spielnacht (etwa 20 bis 4 Uhr Spielzeit) gibt es immer wieder einzelne Raketen, um <strong>echte Mitternacht</strong> (deutsche Zeit, etwa 20 Minuten davor und danach) die große Show.</p>
<ul>
<li>Alle sehen dieselben Raketen. Das Feuerwerk ist harmlos.</li>
<li>Wildtiere in der Nähe einer Explosion fliehen.</li>
<li>Jede Rakete, die du aus der Nähe siehst (etwa 700 m), zählt für die Quest „Feuerwerk beobachten“ und eine Errungenschaft.</li>
</ul>`,
            en: `<p>While New Year runs, rockets rise over the towns – as soon as a player is nearby. During the game night (about 20:00 to 4:00 game time) single rockets go up now and then; around <strong>real midnight</strong> (German time, about 20 minutes before and after) there is the big show.</p>
<ul>
<li>Everyone sees the same rockets. The fireworks are harmless.</li>
<li>Wild animals near a burst run away.</li>
<li>Every rocket you see from nearby (about 700 m) counts for the quest "Watch fireworks" and an achievement.</li>
</ul>`,
        },
        {
            id: 'events-easter',
            title: { de: 'Ostersuche', en: 'Easter egg hunt' },
            tags: { de: 'ostereier eier suchen ostern', en: 'easter eggs egg hunt' },
            de: `<p>Ist die Ostersuche eingeschaltet, sind zu Ostern rund um mehrere Städte Ostereier und Nester versteckt.</p>
<ul>
<li>Aufheben mit <kbd>E</kbd>, wenn du direkt daneben stehst.</li>
<li>Deine <a href="#senses">Sinne</a> (<kbd>V</kbd>) markieren ungefundene Eier in der Nähe.</li>
<li>Jedes Tier findet jedes Ei nur einmal; nach einer Weile wandert ein Ei an eine neue Stelle. Pro Tag kannst du derzeit bis zu 10 Eier finden, jedes bringt EP.</li>
<li>Im HUD neben dem Event-Schild steht, wie viele du gefunden hast. Eier zählen für die Ostersuche-Quests.</li>
</ul>`,
            en: `<p>When the Easter egg hunt is switched on, Easter eggs and nests are hidden around several towns at Easter.</p>
<ul>
<li>Pick them up with <kbd>E</kbd> when you stand right next to them.</li>
<li>Your <a href="#senses">senses</a> (<kbd>V</kbd>) mark eggs you have not found yet nearby.</li>
<li>Every animal finds each egg only once; after a while an egg moves to a new spot. You can currently find up to 10 eggs per day, each gives XP.</li>
<li>Next to the event tag in the HUD you see how many you found. Eggs count for the Easter quests.</li>
</ul>`,
        },
        {
            id: 'events-legendary',
            title: { de: 'Legendäre Tiere', en: 'Legendary animals' },
            tags: { de: 'legendär legende seltenes tier suchgebiet rudel', en: 'legendary legend rare animal search area pack' },
            de: `<p>Ganz selten streift ein <strong>legendäres Tier</strong> durch das Gebiet eines Rudels – passend zur Art: Ein Wolfsrudel trifft auf einen legendären Wolf (den „Grauen Geist“), eine Hirschherde auf den „Zwölfender“ und so weiter. Für die meisten Arten gibt es eine Legende.</p>
<ul>
<li><strong>Wann:</strong> Nur für Rudel mit mindestens 2 Mitgliedern in der Wildnis. Alle 10 Minuten hat jedes solche Rudel eine kleine Chance; dasselbe Rudel trifft höchstens einmal am Tag auf eine Legende.</li>
<li><strong>Suchen:</strong> Alle Mitglieder bekommen eine Meldung und einen Suchkreis auf der Karte. Das Tier ist irgendwo darin, nicht unbedingt in der Mitte; der Kreis zieht ab und zu nach.</li>
<li><strong>Stark:</strong> Eine Legende ist größer, steckt viel mehr ein, beißt härter und greift Spielertiere in der Nähe von selbst an.</li>
<li><strong>Zeit:</strong> Wird sie nicht innerhalb von 30 Minuten erlegt oder ist kein Rudelmitglied mehr in der Wildnis, verschwindet sie („Spur verloren“).</li>
</ul>
<p><strong>Belohnung:</strong> Wer sie erlegt, bekommt derzeit 1500 EP und 15 Ruhm. Gehört er zum Rudel, bekommt das Rudel 10 Rudelpunkte und jedes Mitglied in der Nähe (etwa 100 m) 500 EP. Kills deiner <a href="#companion">Begleiter</a> zählen für dich.</p>
<div class="hb-tip">Geht gemeinsam auf die Jagd – allein ist eine Legende kaum zu schaffen.</div>`,
            en: `<p>Very rarely a <strong>legendary animal</strong> roams the area of a pack – matching its species: a wolf pack meets a legendary wolf ("The Grey Ghost"), a deer herd "The Twelve-Pointer" and so on. Most species have a legend.</p>
<ul>
<li><strong>When:</strong> only for packs with at least 2 members in the wild. Every 10 minutes each such pack has a small chance; the same pack meets a legend at most once a day.</li>
<li><strong>Searching:</strong> all members get a message and a search circle on the map. The animal is somewhere inside, not necessarily in the middle; the circle follows it now and then.</li>
<li><strong>Strong:</strong> a legend is bigger, takes far more punishment, bites harder and attacks player animals nearby on its own.</li>
<li><strong>Time:</strong> if it is not killed within 30 minutes, or no pack member is in the wild any more, it disappears ("Trail lost").</li>
</ul>
<p><strong>Reward:</strong> whoever kills it currently gets 1500 XP and 15 fame. If they belong to the pack, the pack gets 10 pack points and every member nearby (about 100 m) 500 XP. Kills by your <a href="#companion">companions</a> count for you.</p>
<div class="hb-tip">Hunt together – alone a legend is barely beatable.</div>`,
        },
        {
            id: 'events-community',
            title: { de: 'Gemeinschaftsziel der Woche', en: 'Community goal of the week' },
            tags: { de: 'gemeinschaftsziel woche bronze silber gold bonus alle server', en: 'community goal week bronze silver gold bonus everyone server' },
            de: `<p>Jede Woche (Wechsel am Montag wie bei den Wochenquests) arbeitet der <strong>ganze Server</strong> an einem gemeinsamen Ziel, z. B. „Erlegt gemeinsam … Tiere“, „Durchstreift gemeinsam … km“, „Setzt gemeinsam … Duftmarken“ oder „Begrüßt gemeinsam … Jungtiere“. Jedes passende Ereignis jedes Tiers zählt. Die Größe des Ziels richtet sich danach, wie viele Spieler in der Vorwoche aktiv waren.</p>
<p>Du findest es oben im Aufgabenmenü (<kbd>K</kbd>), Reiter <em>Quests</em>: mit Balken, Stufen, deinem eigenen Beitrag, den besten Beitragenden und der Restzeit.</p>
<table class="hb-table">
<thead><tr><th>Stufe</th><th>bei</th><th>für jeden Beteiligten</th><th>für alle bis Montag</th></tr></thead>
<tbody>
<tr><td>Bronze</td><td>50 %</td><td>300 EP, 2 Ruhm</td><td>–</td></tr>
<tr><td>Silber</td><td>100 %</td><td>800 EP, 5 Ruhm</td><td>+10 % EP</td></tr>
<tr><td>Gold</td><td>150 %</td><td>1500 EP, 10 Ruhm, Titel „Gemeinsam stark“</td><td>Hunger und Durst 10 % langsamer</td></tr>
</tbody>
</table>
<ul>
<li><strong>Beteiligt</strong> bist du, sobald dein Beitrag einen kleinen Mindestanteil erreicht (das Menü sagt dir, ab wann). Wer erst nach einer Stufe dazukommt, bekommt für schon erreichte Stufen die Hälfte.</li>
<li>Wer offline war, bekommt seine Belohnung beim nächsten Betreten der Wildnis.</li>
<li>Den Bonus einer Stufe bekommt <strong>jedes Tier auf dem Server</strong> bis zum Wochenwechsel – auch wer nicht mitgemacht hat.</li>
</ul>`,
            en: `<p>Every week (switching on Monday like the weekly quests) the <strong>whole server</strong> works on a shared goal, e.g. "Kill … animals together", "Roam … km together", "Leave … scent marks together" or "Welcome … juveniles together". Every matching event of every animal counts. The size of the goal depends on how many players were active the week before.</p>
<p>You find it at the top of the task menu (<kbd>K</kbd>), tab <em>Quests</em>: with a bar, stages, your own share, the top contributors and the time left.</p>
<table class="hb-table">
<thead><tr><th>Stage</th><th>at</th><th>for every contributor</th><th>for everyone until Monday</th></tr></thead>
<tbody>
<tr><td>Bronze</td><td>50 %</td><td>300 XP, 2 fame</td><td>–</td></tr>
<tr><td>Silver</td><td>100 %</td><td>800 XP, 5 fame</td><td>+10 % XP</td></tr>
<tr><td>Gold</td><td>150 %</td><td>1500 XP, 10 fame, title "Stronger Together"</td><td>hunger and thirst 10 % slower</td></tr>
</tbody>
</table>
<ul>
<li>You <strong>take part</strong> once your share reaches a small minimum (the menu tells you from when). Whoever joins in only after a stage gets half for stages already reached.</li>
<li>Players who were offline get their reward the next time they enter the wild.</li>
<li>The bonus of a stage goes to <strong>every animal on the server</strong> until the week ends – even those who did not take part.</li>
</ul>`,
        },
    ],
});
