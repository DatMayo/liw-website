window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'hud',
    order: 20,
    icon: 'hud',
    title: { de: 'HUD und Menüs', en: 'HUD and menus' },
    sections: [
        {
            id: 'hud-overview',
            title: { de: 'Das HUD auf einen Blick', en: 'The HUD at a glance' },
            tags: { de: 'anzeige bildschirm oberfläche ringe uhr ui', en: 'display screen interface rings clock ui' },
            de: `<p>Das HUD ist bewusst schlicht und zeigt nur, was gerade wichtig ist. Es ist nur sichtbar, solange du ein Tier spielst.</p>
<table class="hb-table">
<thead><tr><th>Wo</th><th>Was</th></tr></thead>
<tbody>
<tr><td>Unten links</td><td><a href="#hud-rings">Ringe</a> für Gesundheit, Ausdauer und Bedürfnisse, darüber <a href="#hud-status">Zustände und Effekte</a>, dazu die <a href="#hud-voice">Sprachanzeige</a></td></tr>
<tr><td>Unten rechts</td><td><a href="#hud-abilities">Fähigkeiten</a>: Sinne, Sonderfähigkeit, zweite Fähigkeit</td></tr>
<tr><td>Oben rechts</td><td><a href="#hud-clock">Uhr</a> mit Wetter, Jahreszeit und laufenden Events, darunter dein Rudel und das Revier, in dem du stehst</td></tr>
<tr><td>Unten in der Mitte</td><td><a href="#hud-messages">Hinweise</a>, was du gerade tun kannst (z. B. „Fressen“ mit Taste)</td></tr>
<tr><td>Am Rand</td><td><a href="#hud-messages">Meldungen</a>; große Momente wie ein Stufenaufstieg erscheinen als Banner oben in der Mitte</td></tr>
</tbody>
</table>
<p>Was du davon sehen willst, stellst du im Charaktermenü unter <a href="#hud-settings">Einstellungen</a> ein.</p>`,
            en: `<p>The HUD is deliberately simple and shows only what matters right now. It is only visible while you play an animal.</p>
<table class="hb-table">
<thead><tr><th>Where</th><th>What</th></tr></thead>
<tbody>
<tr><td>Bottom left</td><td><a href="#hud-rings">Rings</a> for health, stamina and needs, above them <a href="#hud-status">states and effects</a>, plus the <a href="#hud-voice">voice display</a></td></tr>
<tr><td>Bottom right</td><td><a href="#hud-abilities">Abilities</a>: senses, special, second ability</td></tr>
<tr><td>Top right</td><td>The <a href="#hud-clock">clock</a> with weather, season and running events, below it your pack and the territory you are standing in</td></tr>
<tr><td>Bottom centre</td><td><a href="#hud-messages">Hints</a> about what you can do right now (e.g. “Eat” with its key)</td></tr>
<tr><td>At the edges</td><td><a href="#hud-messages">Messages</a>; big moments such as a level-up appear as a banner at the top centre</td></tr>
</tbody>
</table>
<p>You choose what you want to see in the character menu under <a href="#hud-settings">Settings</a>.</p>`,
        },
        {
            id: 'hud-rings',
            title: { de: 'Die Ringe', en: 'The rings' },
            tags: { de: 'gesundheit ausdauer hunger durst ruhe schlaf temperatur leben balken anzeige alt', en: 'health stamina hunger thirst rest sleep temperature life bar display alt' },
            de: `<p>Unten links stehen beschriftete Ringe. Ein voller Ring heißt: alles gut.</p>
<table class="hb-table">
<thead><tr><th>Ring</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>Gesundheit</td><td>Deine Lebenspunkte (etwas größer). Leer heißt niedergestreckt (siehe <a href="#health">Gesundheit</a>).</td></tr>
<tr><td>Ausdauer</td><td>Für Rennen und Angriffe (etwas größer).</td></tr>
<tr><td>Hunger</td><td>Wie satt du bist.</td></tr>
<tr><td>Durst</td><td>Wie viel du getrunken hast.</td></tr>
<tr><td>Ruhe</td><td>Wie ausgeschlafen du bist.</td></tr>
<tr><td>Temperatur</td><td>Erscheint nur, wenn dir zu kalt (blau) oder zu warm (orange) ist.</td></tr>
</tbody>
</table>
<ul>
<li>Ein Ring wird nur eingeblendet, wenn sein Wert <b>unter etwa 70 %</b> liegt oder sich gerade verändert hat (dann für ein paar Sekunden).</li>
<li>Ab <b>25 %</b> pulsiert der Ring und seine Beschriftung wird rot.</li>
<li><kbd>Alt</kbd> halten zeigt <b>alle Ringe</b> auf einmal.</li>
</ul>
<p>Was die Bedürfnisse genau bewirken, steht im Kapitel <a href="#needs">Bedürfnisse</a>.</p>`,
            en: `<p>At the bottom left there are labelled rings. A full ring means: all good.</p>
<table class="hb-table">
<thead><tr><th>Ring</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Health</td><td>Your health (a bit larger). Empty means downed (see <a href="#health">Health</a>).</td></tr>
<tr><td>Stamina</td><td>For running and attacks (a bit larger).</td></tr>
<tr><td>Hunger</td><td>How full you are.</td></tr>
<tr><td>Thirst</td><td>How much you have drunk.</td></tr>
<tr><td>Rest</td><td>How well rested you are.</td></tr>
<tr><td>Temperature</td><td>Only appears when you are too cold (blue) or too warm (orange).</td></tr>
</tbody>
</table>
<ul>
<li>A ring only shows when its value is <b>below about 70 %</b> or has just changed (then for a few seconds).</li>
<li>At <b>25 %</b> and below the ring pulses and its label turns red.</li>
<li>Hold <kbd>Alt</kbd> to show <b>all rings</b> at once.</li>
</ul>
<p>What the needs actually do is explained in the <a href="#needs">Needs</a> chapter.</p>`,
        },
        {
            id: 'hud-abilities',
            title: { de: 'Fähigkeiten-Kacheln', en: 'Ability tiles' },
            tags: { de: 'sinne sonderfähigkeit zweite fähigkeit abklingzeit cooldown kachel caps v x', en: 'senses special second ability cooldown tile caps v x' },
            de: `<p>Unten rechts stehen bis zu drei Kacheln, jeweils mit ihrer Taste darunter:</p>
<ul>
<li><b>Sinne</b> · <kbd>V</kbd> (siehe <a href="#senses">Sinne</a>)</li>
<li><b>Sonderfähigkeit</b> · <kbd>Tab</kbd>, die besondere Attacke deiner Art (siehe <a href="#combat">Kampf</a>)</li>
<li><b>Zweite Fähigkeit</b> · <kbd>X</kbd>, erscheint erst, wenn du den passenden Art-Skill gelernt hast (siehe <a href="#progress">Fortschritt</a>)</li>
</ul>
<table class="hb-table">
<thead><tr><th>Kachel</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>grüner Rand</td><td>bereit</td></tr>
<tr><td>goldener Rand, füllt sich</td><td>läuft gerade</td></tr>
<tr><td>dunkel mit Sekunden</td><td>lädt noch auf; die Zahl zeigt die verbleibenden Sekunden</td></tr>
</tbody>
</table>
<p>Die Tasten unter den Kacheln sind die Standardtasten. Hast du sie umgelegt, gilt deine eigene Belegung.</p>`,
            en: `<p>At the bottom right there are up to three tiles, each with its key below:</p>
<ul>
<li><b>Senses</b> · <kbd>V</kbd> (see <a href="#senses">Senses</a>)</li>
<li><b>Special</b> · <kbd>Tab</kbd>, the special attack of your species (see <a href="#combat">Combat</a>)</li>
<li><b>Second ability</b> · <kbd>X</kbd>, only appears once you have learned the matching species skill (see <a href="#progress">Progress</a>)</li>
</ul>
<table class="hb-table">
<thead><tr><th>Tile</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>green border</td><td>ready</td></tr>
<tr><td>gold border, filling</td><td>running right now</td></tr>
<tr><td>dark with seconds</td><td>still recharging; the number shows the seconds left</td></tr>
</tbody>
</table>
<p>The keys under the tiles are the default keys. If you rebound them, your own bindings apply.</p>`,
        },
        {
            id: 'hud-status',
            title: { de: 'Zustände und Effekte', en: 'States and effects' },
            tags: { de: 'status blutung humpeln aasfieber tollwut geschützt niedergestreckt buff debuff überfressen ausgeruht effekt', en: 'status bleeding limping carrion fever rabies protected downed buff debuff overfed refreshed effect' },
            de: `<p>Über den Ringen stehen kleine Schilder für deinen Zustand:</p>
<table class="hb-table">
<thead><tr><th>Zustand</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>Blutung</td><td>Du verlierst Lebenspunkte; ausruhen hilft (siehe <a href="#health">Gesundheit</a>).</td></tr>
<tr><td>Humpeln</td><td>Nach einem schweren Treffer oder Sturz: kein Sprinten, langsamer.</td></tr>
<tr><td>Aasfieber, Tollwut</td><td>Krankheiten (siehe <a href="#disease">Krankheiten</a>).</td></tr>
<tr><td>Geschützt</td><td><a href="#start-protection">Spawnschutz</a> oder <a href="#start-newcomer">Neulingsschutz</a>.</td></tr>
<tr><td>Niedergestreckt</td><td>Du liegst am Boden und brauchst Hilfe (siehe <a href="#life-downed">Niedergestreckt</a>).</td></tr>
</tbody>
</table>
<p>Darüber stehen <b>aktive Effekte</b> mit Namen, Wirkung (z. B. „Schaden +20 %“) und herunterzählenden Sekunden: Vorteile in Grün, Nachteile in Rot. Beispiele sind Sprint, die zweite Fähigkeit deiner Art, „Überfressen“, „Ausgeruht“ nach einer Pause oder „Mentorschaft“ (ohne Countdown, solange sie gilt).</p>`,
            en: `<p>Above the rings small tags show your condition:</p>
<table class="hb-table">
<thead><tr><th>State</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Bleeding</td><td>You are losing health; resting helps (see <a href="#health">Health</a>).</td></tr>
<tr><td>Limping</td><td>After a heavy hit or a fall: no sprinting, slower.</td></tr>
<tr><td>Carrion fever, rabies</td><td>Diseases (see <a href="#disease">Diseases</a>).</td></tr>
<tr><td>Protected</td><td><a href="#start-protection">Spawn protection</a> or <a href="#start-newcomer">newcomer protection</a>.</td></tr>
<tr><td>Downed</td><td>You are on the ground and need help (see <a href="#life-downed">Downed</a>).</td></tr>
</tbody>
</table>
<p>Above them are <b>active effects</b> with name, effect (e.g. “Damage +20 %”) and seconds counting down: advantages in green, drawbacks in red. Examples are sprint burst, your species' second ability, “Overfed”, “Refreshed” after a break, or “Mentorship” (no countdown while it lasts).</p>`,
        },
        {
            id: 'hud-clock',
            title: { de: 'Uhr, Wetter, Rudel und Revier', en: 'Clock, weather, pack and territory' },
            tags: { de: 'uhrzeit zeit wetter jahreszeit tag event rudelzeile revierzeile oben rechts', en: 'time clock weather season day event pack line territory line top right' },
            de: `<p>Oben rechts zeigt das HUD:</p>
<ul>
<li><b>Uhrzeit</b> der Spielwelt. Ein Spieltag dauert 12 echte Stunden (siehe <a href="#help-faq-realtime">Was bedeutet Echtzeit?</a>).</li>
<li><b>Wetter</b> und <b>Jahreszeit</b> mit dem Tag der Jahreszeit (z. B. „Herbst · Tag 12/91“). Die Jahreszeiten folgen dem echten Kalender (siehe <a href="#world">Welt</a>).</li>
<li><b>Laufende Events</b> als kleine Schilder, z. B. Vollmond oder Ostern mit deiner Zahl gefundener Eier (siehe <a href="#events">Events</a>).</li>
<li><b>Dein Rudel:</b> Name in der Rudelfarbe, dein Rang und wie viele Mitglieder online sind (siehe <a href="#pack">Rudel</a>).</li>
<li><b>Das Revier, in dem du stehst:</b> Name, Besitzer und Zustand. Bei einem Angriff, einer Herausforderung oder einer Einnahme kommt eine farbige Zeile dazu (siehe <a href="#territory">Reviere</a>).</li>
</ul>`,
            en: `<p>At the top right the HUD shows:</p>
<ul>
<li>The <b>time</b> of the game world. A game day lasts 12 real hours (see <a href="#help-faq-realtime">What does “real time” mean?</a>).</li>
<li><b>Weather</b> and <b>season</b> with the day of the season (e.g. “Autumn · day 12/91”). The seasons follow the real calendar (see <a href="#world">World</a>).</li>
<li><b>Running events</b> as small tags, e.g. full moon or Easter with the number of eggs you found (see <a href="#events">Events</a>).</li>
<li><b>Your pack:</b> name in the pack colour, your rank and how many members are online (see <a href="#pack">Pack</a>).</li>
<li><b>The territory you are standing in:</b> name, owner and state. During an attack, a challenge or a claim a coloured line is added (see <a href="#territory">Territories</a>).</li>
</ul>`,
        },
        {
            id: 'hud-voice',
            title: { de: 'Sprachanzeige', en: 'Voice display' },
            tags: { de: 'mikrofon sprechen reichweite meter leise normal laut rudelruf voice hört niemand stumm', en: 'microphone talk range metres quiet normal loud pack call voice nobody hears muted' },
            de: `<p>Unten links zeigt ein Mikrofon, wie weit man dich gerade hört: „leise“, „normal“, „laut“, „eigene“ (frei eingestellt) oder „Rudelruf“, jeweils mit Metern.</p>
<table class="hb-table">
<thead><tr><th>Anzeige</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>Mikrofon leuchtet grün</td><td>Du sprichst und jemand hört dich.</td></tr>
<tr><td>„niemand in Hörweite“</td><td>Du sprichst, aber niemand ist nah genug.</td></tr>
<tr><td>„Mikrofon aus“</td><td>Du hörst andere, dein Mikrofon ist in den Spieleinstellungen aus.</td></tr>
<tr><td>„Sprachchat aus“ (rot)</td><td>Der Sprachchat ist in den Spieleinstellungen abgeschaltet oder nicht verbunden.</td></tr>
</tbody>
</table>
<p>Reichweite einstellen, Rudelruf und Emotes: Kapitel <a href="#voice">Stimme</a>.</p>`,
            en: `<p>At the bottom left a microphone shows how far you can be heard right now: “quiet”, “normal”, “loud”, “custom” (set freely) or “pack call”, each with metres.</p>
<table class="hb-table">
<thead><tr><th>Display</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Microphone glows green</td><td>You are talking and someone hears you.</td></tr>
<tr><td>“nobody in range”</td><td>You are talking, but nobody is close enough.</td></tr>
<tr><td>“microphone off”</td><td>You hear others, but your microphone is off in the game settings.</td></tr>
<tr><td>“voice chat off” (red)</td><td>Voice chat is switched off in the game settings or not connected.</td></tr>
</tbody>
</table>
<p>Setting the range, pack call and emotes: <a href="#voice">Voice</a> chapter.</p>`,
        },
        {
            id: 'hud-messages',
            title: { de: 'Hinweise und Meldungen', en: 'Hints and messages' },
            tags: { de: 'meldung nachricht benachrichtigung hinweis banner tagebuch fährte instinkt toast verlauf verpasst ton töne sound f6', en: 'message notification hint banner journal trail instinct toast history missed tone sound f6' },
            de: `<p><b>Hinweise unten in der Mitte</b> zeigen, was du gerade tun kannst, mit der passenden Taste, z. B. „Fressen“ an einem Kadaver, „Aufhelfen“ bei einem niedergestreckten Tier oder „Gedenkstein lesen“. Dauert eine Aktion, füllt sich darunter ein Balken.</p>
<p><b>Meldungen</b> gibt es in mehreren Arten:</p>
<table class="hb-table">
<thead><tr><th>Art</th><th>Wofür</th></tr></thead>
<tbody>
<tr><td>Hinweis-Tafel</td><td>System, Hilfe und Gründe, warum etwas gerade nicht geht („Nicht möglich“)</td></tr>
<tr><td>Instinkt</td><td>dein Körper: Hunger, Durst, Temperatur, Blutung, Sinne</td></tr>
<tr><td>Fährte</td><td>was um dich herum passiert: Rudel, Paarung, Begleiter, Alter, Kampf</td></tr>
<tr><td>Tagebuch</td><td>Fortschritt: Quests, Errungenschaften, Titel, Felle, mit Stempel „Erledigt“ oder „Neu“</td></tr>
<tr><td>Banner</td><td>große Momente: neue Stufe, Reviere, Jahreszeitenwechsel</td></tr>
</tbody>
</table>
<p><b>Meldung verpasst?</b> Mit <kbd>F6</kbd> öffnest du den <b>Meldungsverlauf</b> mit den letzten 30 Meldungen. Wichtige Meldungen (Einladungen, Herausforderungen, Warnungen, Admin-Nachrichten) spielen außerdem einen kurzen Ton.</p>
<p>Die Hinweise unten, den Hinweis zum Fressen und Trinken und die Töne kannst du in den <a href="#hud-settings">Einstellungen</a> abschalten.</p>`,
            en: `<p><b>Hints at the bottom centre</b> show what you can do right now, with the matching key, e.g. “Eat” at a carcass, “Help up” next to a downed animal or “Read memorial stone”. If an action takes time, a bar fills up below.</p>
<p>There are several kinds of <b>messages</b>:</p>
<table class="hb-table">
<thead><tr><th>Kind</th><th>For</th></tr></thead>
<tbody>
<tr><td>Note</td><td>system, help and reasons why something does not work right now (“Not possible”)</td></tr>
<tr><td>Instinct</td><td>your body: hunger, thirst, temperature, bleeding, senses</td></tr>
<tr><td>Tracks</td><td>what happens around you: pack, mating, companions, age, combat</td></tr>
<tr><td>Journal</td><td>progress: quests, achievements, titles, furs, stamped “Done” or “New”</td></tr>
<tr><td>Banner</td><td>big moments: new level, territories, change of season</td></tr>
</tbody>
</table>
<p><b>Missed a message?</b> <kbd>F6</kbd> opens the <b>notification history</b> with the last 30 messages. Important messages (invitations, challenges, warnings, admin messages) also play a short tone.</p>
<p>You can switch off the hints at the bottom, the eat/drink hint and the tones in the <a href="#hud-settings">settings</a>.</p>`,
        },
        {
            id: 'hud-menus',
            title: { de: 'Alle Menüs und ihre Tasten', en: 'All menus and their keys' },
            tags: { de: 'menü tasten tierbuch journal übersicht esc schließen karte emote', en: 'menu keys animal book journal overview esc close map emote' },
            de: `<table class="hb-table">
<thead><tr><th>Taste</th><th>Menü</th><th>Inhalt</th></tr></thead>
<tbody>
<tr><td><kbd>J</kbd></td><td>Charaktermenü („Mein Tier“)</td><td>Übersicht, Attribute, Fähigkeiten, Tierkunde, Einstellungen, Tier wechseln, Ausloggen (siehe <a href="#hud-character-menu">Charaktermenü</a>)</td></tr>
<tr><td><kbd>K</kbd></td><td>Aufgaben</td><td>Tages-, Wochen- und Nebenquests, Errungenschaften, Titel, Event-Kalender (siehe <a href="#quests">Aufgaben</a>)</td></tr>
<tr><td><kbd>L</kbd></td><td>Rudel</td><td>Mitglieder, Ränge, Rudelquests, Perks, Revier und Höhle, Bündnisse, Rangliste (siehe <a href="#pack">Rudel</a>)</td></tr>
<tr><td><kbd>O</kbd></td><td>Familie</td><td>Partner, Würfe, Nachwuchs, Begleiter, Stammbaum (siehe <a href="#family">Familie</a>)</td></tr>
<tr><td><kbd>U</kbd></td><td>Ranglisten</td><td>Tier und Rudel der Saison, Ruhmeshalle, deine Statistik (siehe <a href="#ranking">Ranglisten</a>)</td></tr>
<tr><td><kbd>M</kbd></td><td>Karte</td><td>siehe <a href="#hud-map">Karte</a></td></tr>
<tr><td><kbd>F</kbd></td><td>Emote-Rad</td><td>Gesten und Tierlaute (siehe <a href="#voice">Stimme</a>)</td></tr>
<tr><td>keine Taste</td><td>Mentor-Menü</td><td>über das Charaktermenü (<kbd>J</kbd>) oder eine selbst belegte Taste (siehe <a href="#mentor">Mentor</a>)</td></tr>
<tr><td><kbd>F4</kbd></td><td>Testaufgaben</td><td>Aufgaben und Feedback während der Testphase</td></tr>
</tbody>
</table>
<p><b>Das Tierbuch:</b> Die Menüs <kbd>J</kbd>, <kbd>K</kbd>, <kbd>L</kbd>, <kbd>O</kbd> und <kbd>U</kbd> öffnen sich als ein gemeinsames Buch. Links stehen die Kapitel (Mein Tier, Aufgaben, Kalender, Rudel, Familie, Ranglisten, Tierkunde, Einstellungen); ein Klick blättert direkt dorthin. <kbd>Esc</kbd> schließt das Buch.</p>`,
            en: `<table class="hb-table">
<thead><tr><th>Key</th><th>Menu</th><th>Contents</th></tr></thead>
<tbody>
<tr><td><kbd>J</kbd></td><td>Character menu (“My animal”)</td><td>Overview, attributes, skills, animal lore, settings, switch animal, log out (see <a href="#hud-character-menu">Character menu</a>)</td></tr>
<tr><td><kbd>K</kbd></td><td>Tasks</td><td>Daily, weekly and side quests, achievements, titles, event calendar (see <a href="#quests">Quests</a>)</td></tr>
<tr><td><kbd>L</kbd></td><td>Pack</td><td>Members, ranks, pack quests, perks, territory and den, alliances, ranking (see <a href="#pack">Pack</a>)</td></tr>
<tr><td><kbd>O</kbd></td><td>Family</td><td>Mates, litters, offspring, companions, family tree (see <a href="#family">Family</a>)</td></tr>
<tr><td><kbd>U</kbd></td><td>Rankings</td><td>Animal and pack of the season, hall of fame, your statistics (see <a href="#ranking">Rankings</a>)</td></tr>
<tr><td><kbd>M</kbd></td><td>Map</td><td>see <a href="#hud-map">Map</a></td></tr>
<tr><td><kbd>F</kbd></td><td>Emote wheel</td><td>Gestures and animal sounds (see <a href="#voice">Voice</a>)</td></tr>
<tr><td>no key</td><td>Mentor menu</td><td>through the character menu (<kbd>J</kbd>) or a key you bind yourself (see <a href="#mentor">Mentor</a>)</td></tr>
<tr><td><kbd>F4</kbd></td><td>Test tasks</td><td>Tasks and feedback during the test phase</td></tr>
</tbody>
</table>
<p><b>The animal book:</b> the menus <kbd>J</kbd>, <kbd>K</kbd>, <kbd>L</kbd>, <kbd>O</kbd> and <kbd>U</kbd> open as one shared book. On the left are the chapters (My animal, Tasks, Calendar, Pack, Family, Rankings, Animal lore, Settings); one click turns straight to them. <kbd>Esc</kbd> closes the book.</p>`,
        },
        {
            id: 'hud-character-menu',
            title: { de: 'Das Charaktermenü (J)', en: 'The character menu (J)' },
            tags: { de: 'charakter mein tier übersicht attribute fähigkeiten tierkunde stufe ruhm erfahrung ep alter winterfell boni mali', en: 'character my animal overview attributes skills animal lore level fame experience xp age winter coat bonuses penalties' },
            de: `<p>Mit <kbd>J</kbd> öffnest du alles über dein Tier. Die Reiter:</p>
<ul>
<li><b>Übersicht:</b> Stufe und Erfahrung, Ruhm und Titel, erkundete Regionen, Lebensphase und Stunden in der Wildnis, Geburtstag, dein <b>Winterfell</b> in Prozent, alle <b>Boni und Mali</b> (von Attributen, Fähigkeiten, Alter, Erbe, Revier …) und die gerade <b>aktiven Effekte</b>. Dazu Mentor, <a href="#start-switch">Tier wechseln</a> und <a href="#start-logout">Ausloggen</a>.</li>
<li><b>Attribute:</b> Freie Punkte auf Stärke, Ausdauer, Geschwindigkeit, Sinne, Tarnung und Konstitution verteilen (siehe <a href="#progress">Fortschritt</a>).</li>
<li><b>Fähigkeiten:</b> Der Fähigkeitsbaum deiner Art; mit Fähigkeitspunkten lernst du neue Fähigkeiten.</li>
<li><b>Tierkunde:</b> Welche Tierarten du schon gewittert hast und ob sie Beute, Gefahr, harmlos oder deine eigene Art sind (siehe <a href="#senses">Sinne</a>).</li>
<li><b>Einstellungen:</b> Sprache und was du sehen willst (siehe <a href="#hud-settings">Einstellungen</a>).</li>
</ul>
<p>Stammt dein Tier aus einer engen Verwandtschaft, zeigt die Übersicht auch, was die Inzucht bewirkt (siehe <a href="#family">Familie</a>).</p>`,
            en: `<p><kbd>J</kbd> opens everything about your animal. The tabs:</p>
<ul>
<li><b>Overview:</b> level and experience, fame and title, explored regions, life phase and hours in the wild, birthday, your <b>winter coat</b> in percent, all <b>bonuses and penalties</b> (from attributes, skills, age, inheritance, territory …) and the <b>active effects</b>. Plus mentor, <a href="#start-switch">switch animal</a> and <a href="#start-logout">log out</a>.</li>
<li><b>Attributes:</b> spend free points on strength, stamina, speed, senses, stealth and constitution (see <a href="#progress">Progress</a>).</li>
<li><b>Skills:</b> the skill tree of your species; skill points let you learn new skills.</li>
<li><b>Animal lore:</b> which kinds of animals you have already scented and whether they are prey, danger, harmless or your own species (see <a href="#senses">Senses</a>).</li>
<li><b>Settings:</b> language and what you want to see (see <a href="#hud-settings">Settings</a>).</li>
</ul>
<p>If your animal comes from close relatives, the overview also shows what the inbreeding does (see <a href="#family">Family</a>).</p>`,
        },
        {
            id: 'hud-settings',
            title: { de: 'Einstellungen', en: 'Settings' },
            tags: { de: 'einstellungen optionen anzeigen ausblenden hud ringe namensschilder karte reviere reviergrenzen hinweise präferenzen', en: 'settings options show hide hud rings name tags map territories territory borders hints preferences' },
            de: `<p>Im Charaktermenü (<kbd>J</kbd>) unter <b>„Einstellungen“</b> legst du fest, was du sehen willst. Jede Änderung gilt sofort und wird auf deinem PC gespeichert.</p>
<table class="hb-table">
<thead><tr><th>Gruppe</th><th>Einstellungen</th></tr></thead>
<tbody>
<tr><td>Sprache</td><td>Automatisch (Spielsprache) oder eine feste Sprache (siehe <a href="#hud-language">Sprache</a>)</td></tr>
<tr><td>Anzeige</td><td>HUD ganz an oder aus · Ringe · Status · Uhr und Wetter · Rudelzeile · Revierzeile · Sprachreichweite · Hinweise unten · Hinweis Fressen/Trinken · Benachrichtigungstöne · „Seit deinem letzten Besuch“</td></tr>
<tr><td>Karte und Reviere</td><td>eigene, fremde und unbesetzte Reviere auf der Karte · Reviergrenzen (die Wände beim Einnehmen oder Verteidigen und das kurze Aufleuchten beim Betreten und Verlassen)</td></tr>
<tr><td>Rudel</td><td>Namensschilder über Rudelmitgliedern · Mentor-Namensschilder · Rudel auf der Karte</td></tr>
</tbody>
</table>
<div class="hb-tip"><p>Für Screenshots kannst du das HUD auch per Taste aus- und einblenden. Diese Taste ist frei: Leg sie selbst unter „LiW: HUD aus-/einblenden“ fest (siehe <a href="#hud-keybinds">Tasten ändern</a>). Meldungen bleiben dabei sichtbar.</p></div>`,
            en: `<p>In the character menu (<kbd>J</kbd>) under <b>“Settings”</b> you decide what you want to see. Every change applies right away and is stored on your PC.</p>
<table class="hb-table">
<thead><tr><th>Group</th><th>Settings</th></tr></thead>
<tbody>
<tr><td>Language</td><td>Automatic (game language) or a fixed language (see <a href="#hud-language">Language</a>)</td></tr>
<tr><td>Display</td><td>HUD fully on or off · rings · status · clock and weather · pack line · territory line · voice range · hints at the bottom · eat/drink hint · notification sounds · “Since your last visit”</td></tr>
<tr><td>Map and territories</td><td>own, foreign and unclaimed territories on the map · territory borders (the walls while claiming or defending and the short flash when you enter or leave)</td></tr>
<tr><td>Pack</td><td>name tags above pack mates · mentor name tags · pack mates on the map</td></tr>
</tbody>
</table>
<div class="hb-tip"><p>For screenshots you can also hide and show the HUD with a key. That key is unbound: set it yourself under “LiW: Hide / show HUD” (see <a href="#hud-keybinds">Changing keys</a>). Messages stay visible.</p></div>`,
        },
        {
            id: 'hud-language',
            title: { de: 'Sprache', en: 'Language' },
            tags: { de: 'sprache deutsch englisch language umstellen wechseln übersetzung', en: 'language german english switch change translation' },
            de: `<ul>
<li><b>Im Spiel</b> wird die Sprache automatisch nach der Spielsprache von RDR2 gewählt. Ändern kannst du sie im Charaktermenü (<kbd>J</kbd>) unter <b>Einstellungen → Sprache</b>. Die Wahl gilt sofort und wird auf deinem PC gespeichert. „Automatisch“ folgt wieder der Spielsprache.</li>
<li>Steht dort, dass der Server gerade eine Sprache für alle nutzt, lässt sie sich vorübergehend nicht ändern.</li>
<li><b>Der Ladebildschirm</b> richtet sich nach der Sprache deines Systems, weil er vor allem anderen lädt.</li>
<li><b>Diese Website</b> stellst du oben rechts mit <b>DE / EN</b> um; die Wahl gilt für alle Seiten.</li>
</ul>`,
            en: `<ul>
<li><b>In the game</b> the language is picked automatically from the RDR2 game language. You can change it in the character menu (<kbd>J</kbd>) under <b>Settings → Language</b>. The choice applies right away and is stored on your PC. “Automatic” follows the game language again.</li>
<li>If it says the server uses one language for everyone at the moment, it cannot be changed for now.</li>
<li><b>The loading screen</b> follows your system language because it loads before everything else.</li>
<li><b>This website</b> switches with <b>DE / EN</b> at the top right; the choice counts for every page.</li>
</ul>`,
        },
        {
            id: 'hud-keybinds',
            title: { de: 'Tasten ändern', en: 'Changing keys' },
            tags: { de: 'tastenbelegung tasten ändern belegen umlegen keybind steuerung', en: 'key bindings keys change bind rebind keybind controls' },
            de: `<p>Alle Tasten von Life In Wilderness lassen sich im Spiel ändern:</p>
<ol>
<li>Pausenmenü öffnen → <b>Einstellungen</b> → <b>Tastenbelegung</b> → <b>RedM</b>.</li>
<li>Die Einträge von Life In Wilderness beginnen mit <b>„LiW:“</b>.</li>
<li>Eintrag wählen und die neue Taste drücken.</li>
</ol>
<p>Ein paar Funktionen haben von Haus aus keine Taste, z. B. „HUD aus-/einblenden“ und das Mentor-Menü. Die kannst du dort selbst belegen.</p>
<p>Alle Standardtasten mit Tastaturbild: <a href="tasten.html">Tastenbelegung</a>.</p>`,
            en: `<p>Every Life In Wilderness key can be changed in the game:</p>
<ol>
<li>Open the pause menu → <b>Settings</b> → <b>Key Bindings</b> → <b>RedM</b>.</li>
<li>The Life In Wilderness entries start with <b>“LiW:”</b>.</li>
<li>Pick an entry and press the new key.</li>
</ol>
<p>A few functions have no key by default, e.g. “Hide / show HUD” and the mentor menu. You can bind them there yourself.</p>
<p>All default keys with a keyboard picture: <a href="tasten.html">Key bindings</a>.</p>`,
        },
        {
            id: 'hud-map',
            title: { de: 'Karte', en: 'Map' },
            tags: { de: 'karte map minimap reviere höhlen marker spieler m', en: 'map minimap territories dens markers players m' },
            de: `<p>Eine Minimap gibt es nicht. Mit <kbd>M</kbd> öffnest du die große Karte. Sie zeigt:</p>
<ul>
<li><b>Reviere:</b> deine eigenen, fremde und unbesetzte, jeweils einzeln abschaltbar (siehe <a href="#hud-settings">Einstellungen</a> und <a href="#territory">Reviere</a>).</li>
<li><b>Höhlen</b> deiner Art.</li>
<li><b>Deine Rudelmitglieder</b>, wenn du in einem Rudel bist.</li>
</ul>
<p>Andere Spieler siehst du auf der Karte nicht, nur dein eigenes Rudel.</p>`,
            en: `<p>There is no minimap. <kbd>M</kbd> opens the big map. It shows:</p>
<ul>
<li><b>Territories:</b> your own, foreign and unclaimed ones, each can be switched off (see <a href="#hud-settings">Settings</a> and <a href="#territory">Territories</a>).</li>
<li><b>Dens</b> of your species.</li>
<li><b>Your pack mates</b>, if you are in a pack.</li>
</ul>
<p>You do not see other players on the map, only your own pack.</p>`,
        },
        {
            id: 'hud-camera',
            title: { de: 'Kamera und Auto-Lauf', en: 'Camera and auto-run' },
            tags: { de: 'kamera abstand zoom ego perspektive first person third person mausrad alt automatisch laufen autorun auto-lauf', en: 'camera distance zoom first person third person mouse wheel alt auto-run autorun auto run' },
            de: `<ul>
<li>Du siehst dein Tier immer von hinten (Third Person). Die Ego-Perspektive ist gesperrt.</li>
<li><b>Kameraabstand:</b> <kbd>Alt</kbd> halten und am <kbd>Mausrad</kbd> drehen. Hoch = weiter weg, runter = näher, bis zum doppelten Abstand deiner Art. Deine Wahl bleibt gespeichert.</li>
<li>Willst du wieder den Standardabstand, gib in der <kbd>F8</kbd>-Konsole <code>liw_camera_reset</code> ein.</li>
<li>Als Jungtier rückt die Kamera näher, weil du kleiner bist.</li>
<li><b>Automatisch laufen:</b> <kbd>.</kbd> drücken – dein Tier läuft von selbst weiter, die Kamera lenkt, <kbd>Shift</kbd> rennt. <kbd>W</kbd>, <kbd>S</kbd> oder <kbd>.</kbd> beenden es. Einem Rudelmitglied hinterherlaufen kannst du über das Emote-Rad (siehe <a href="#pack-markers">Folgen</a>).</li>
</ul>`,
            en: `<ul>
<li>You always see your animal from behind (third person). First person is locked.</li>
<li><b>Camera distance:</b> hold <kbd>Alt</kbd> and turn the <kbd>mouse wheel</kbd>. Up = farther, down = closer, up to twice the distance of your species. Your choice is kept.</li>
<li>To get the default distance back, type <code>liw_camera_reset</code> in the <kbd>F8</kbd> console.</li>
<li>As a juvenile the camera moves closer because you are smaller.</li>
<li><b>Auto-run:</b> press <kbd>.</kbd> – your animal keeps going on its own, the camera steers, <kbd>Shift</kbd> sprints. <kbd>W</kbd>, <kbd>S</kbd> or <kbd>.</kbd> stop it. To run after a pack mate, use the emote wheel (see <a href="#pack-markers">Following</a>).</li>
</ul>`,
        },
    ],
});
