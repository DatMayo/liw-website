window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'quests',
    order: 70,
    icon: 'quest',
    title: { de: 'Quests und Errungenschaften', en: 'Quests and achievements' },
    sections: [
        {
            id: 'quests-overview',
            title: { de: 'Das Aufgabenmenü (K) und der Tracker', en: 'The task menu (K) and the tracker' },
            tags: { de: 'aufgaben quests menü k tracker anpinnen', en: 'tasks quests menu k tracker pin' },
            de: `<p>Das <strong>Aufgabenmenü</strong> öffnest du mit <kbd>K</kbd>. Es hat die Reiter:</p>
<ul>
<li><strong>Quests</strong> – deine Tages- und Wochenquests, deine Serie und oben das <a href="#events-community">Gemeinschaftsziel</a> der Woche</li>
<li><strong>Nebenquests</strong> – einmalige Aufgaben deiner Art und für alle Tiere</li>
<li><strong>Errungenschaften</strong> – für dieses Tier und für alle deine Tiere</li>
<li><strong>Titel</strong> – verdiente Titel zum Tragen</li>
<li><strong>Kalender</strong> – laufende und kommende Events (siehe <a href="#events">Events</a>)</li>
</ul>
<p><strong>Tracker:</strong> Rechts unter der Uhr stehen deine aktiven Quests mit Fortschritt. Mit <em>Im Tracker anzeigen</em> pinnst du bis zu 5 Quests an; ohne Pins zeigt er die ersten offenen. Er zeigt nur Quests, die gerade zählen können.</p>
<p>Erledigte Quests, neue Nebenquests, Errungenschaften und Titel erscheinen als Tagebuchzettel am Bildschirmrand.</p>`,
            en: `<p>You open the <strong>task menu</strong> with <kbd>K</kbd>. It has the tabs:</p>
<ul>
<li><strong>Quests</strong> – your daily and weekly quests, your streak and, at the top, the week's <a href="#events-community">community goal</a></li>
<li><strong>Side quests</strong> – one-time tasks for your species and for every animal</li>
<li><strong>Achievements</strong> – for this animal and for all your animals</li>
<li><strong>Titles</strong> – earned titles to wear</li>
<li><strong>Calendar</strong> – running and upcoming events (see <a href="#events">Events</a>)</li>
</ul>
<p><strong>Tracker:</strong> on the right under the clock you see your active quests with their progress. <em>Show in the tracker</em> pins up to 5 quests; without pins it shows the first open ones. It only shows quests that can count right now.</p>
<p>Finished quests, new side quests, achievements and titles appear as journal notes at the edge of the screen.</p>`,
        },
        {
            id: 'quests-daily',
            title: { de: 'Tages- und Wochenquests', en: 'Daily and weekly quests' },
            tags: { de: 'tagesquest wochenquest täglich wöchentlich zurücksetzen reset bedingungen', en: 'daily quest weekly quest reset conditions' },
            de: `<p>Jedes Tier bekommt derzeit <strong>3 Tagesquests</strong> und <strong>2 Wochenquests</strong>, passend zu seiner Art, Ernährung und Stufe.</p>
<ul>
<li><strong>Neue Tagesquests</strong> gibt es jeden Tag um 4 Uhr deutscher Sommerzeit (3 Uhr im Winter), <strong>neue Wochenquests</strong> montags zur selben Zeit. Im Menü steht „neu in …“.</li>
<li><strong>Nach Stufe:</strong> Anfänger (bis Stufe 5), Erfahrene (Stufe 6–14) und Veteranen (ab Stufe 15) bekommen unterschiedlich große Ziele und Belohnungen. Ein Aufstieg wirkt ab den nächsten Quests.</li>
<li><strong>Für deine Art:</strong> Dazu kommen Quests für deine Lebensweise (Rudeljäger, Einzelgänger, Herdentier, Aasfresser, Nachttier …), eine tägliche Quest für deine zweite Fähigkeit (ab Stufe 4) und eine Wochenquest deiner Art.</li>
<li><strong>Belohnung:</strong> EP und Ruhm, angezeigt an jeder Quest.</li>
</ul>
<p><strong>Bedingungen:</strong> Manche Quests zählen nur nachts (ab 21 Uhr Spielzeit), am Tag, bei bestimmtem Wetter, in einer Jahreszeit, mit Rudelmitgliedern in der Nähe, allein oder während einer aktiven Fähigkeit. Die Bedingungen stehen als kleine Marken an der Quest: erfüllt mit Haken, „gerade nicht“ gestrichelt, dauerhaft unmöglich rot. Quests, die gerade nicht zählen können, sind abgedunkelt.</p>
<div class="hb-tip">„Rudelmitglieder in der Nähe“ heißt: innerhalb von etwa 40 m. Deine eigenen <a href="#companion">Begleiter</a> zählen dabei mit.</div>`,
            en: `<p>Every animal currently gets <strong>3 daily quests</strong> and <strong>2 weekly quests</strong> that fit its species, diet and level.</p>
<ul>
<li><strong>New daily quests</strong> come every day at 4:00 German summer time (3:00 in winter), <strong>new weekly quests</strong> on Mondays at the same time. The menu shows "new in …".</li>
<li><strong>By level:</strong> novices (up to level 5), experienced animals (levels 6–14) and veterans (level 15 and up) get different goal sizes and rewards. A level-up applies from the next quests on.</li>
<li><strong>For your species:</strong> on top come quests for your way of life (pack hunter, loner, herd animal, scavenger, night animal …), a daily quest for your second ability (from level 4) and a weekly quest of your species.</li>
<li><strong>Reward:</strong> XP and fame, shown on every quest.</li>
</ul>
<p><strong>Conditions:</strong> some quests only count at night (from 21:00 game time), by day, in certain weather, in a season, with pack mates nearby, alone or while an ability is active. The conditions show as small chips on the quest: met with a tick, "not right now" dashed, permanently impossible in red. Quests that cannot count right now are dimmed.</p>
<div class="hb-tip">"Pack mates nearby" means within about 40 m. Your own <a href="#companion">companions</a> count too.</div>`,
        },
        {
            id: 'quests-streaks',
            title: { de: 'Serien', en: 'Streaks' },
            tags: { de: 'serie streak in folge bonus', en: 'streak in a row bonus' },
            de: `<p>Erledigst du an einem Tag <strong>alle</strong> Tagesquests, zählt der Tag für deine <strong>Serie</strong>. Ab dem zweiten Tag in Folge gibt es einen Bonus: derzeit 40 EP je Tag in Folge, höchstens 240 EP (ab dem 7. Tag). Ein ausgelassener Tag beginnt die Serie neu.</p>
<p>Mit den Wochenquests geht es genauso je Woche: derzeit 150 EP und 1 Ruhm je Woche in Folge, höchstens viermal so viel.</p>
<p>Das Menü zeigt über den Quests „Serie: Tag …“ und ob du heute (diese Woche) noch etwas tun musst, um sie zu halten. Lange Serien zählen auch für Errungenschaften.</p>`,
            en: `<p>If you finish <strong>all</strong> daily quests on a day, the day counts for your <strong>streak</strong>. From the second day in a row there is a bonus: currently 40 XP per day in a row, at most 240 XP (from the 7th day). A missed day starts the streak over.</p>
<p>Weekly quests work the same way per week: currently 150 XP and 1 fame per week in a row, at most four times that.</p>
<p>Above the quests the menu shows "Streak: day …" and whether you still have to do something today (this week) to keep it. Long streaks also count for achievements.</p>`,
        },
        {
            id: 'quests-side',
            title: { de: 'Nebenquests', en: 'Side quests' },
            tags: { de: 'nebenquest questkette einmalig freischalten legende art', en: 'side quest quest chain one-time unlock legend species' },
            de: `<p>Nebenquests sind <strong>einmalige</strong> Aufgaben, die alle gleichzeitig laufen. Jede Art hat ihre eigenen (mindestens 14), dazu gibt es Nebenquests <em>Für alle Tiere</em> und zu <a href="#events">Events</a>.</p>
<ul>
<li><strong>Freischalten:</strong> Viele bilden Ketten – die nächste erscheint erst, wenn die vorige erledigt ist („Neue Nebenquest“). Andere werden erst ab einer Stufe frei (5, 10, 15, 20, 25). Unter der Liste steht, wie viele noch gesperrt sind.</li>
<li><strong>Mehrere Ziele:</strong> Eine Nebenquest kann mehrere Ziele haben, die parallel zählen (z. B. jagen <em>und</em> überleben).</li>
<li><strong>Belohnung:</strong> mehr EP und Ruhm als Tagesquests; viele geben einen <a href="#quests-titles">Titel</a>. Die Kette deiner Art endet ab Stufe 25 mit einer großen Aufgabe und einem Legenden-Titel deiner Art.</li>
<li><strong>Typische Ziele:</strong> bestimmte Beute reißen, fressen und trinken, Strecke zurücklegen, Orte besuchen, Spieltage überleben, Fähigkeiten einsetzen, heulen, aufhelfen, Reviere einnehmen und halten, Nachwuchs, Alpha-Duelle, <a href="#territory-npc">wilde Rivalenrudel</a> vertreiben.</li>
</ul>
<p>Nebenquests, die nur an Rudel, Rang oder Rudelgröße scheitern, stehen mit Grund in der Liste – so weißt du, was dir fehlt.</p>`,
            en: `<p>Side quests are <strong>one-time</strong> tasks that all run at the same time. Every species has its own (at least 14), plus side quests for <em>Every animal</em> and for <a href="#events">events</a>.</p>
<ul>
<li><strong>Unlocking:</strong> many form chains – the next one only appears once the previous one is done ("New side quest"). Others unlock from a level (5, 10, 15, 20, 25). Below the list it says how many are still locked.</li>
<li><strong>Several goals:</strong> a side quest can have several goals that count in parallel (e.g. hunt <em>and</em> survive).</li>
<li><strong>Reward:</strong> more XP and fame than daily quests; many give a <a href="#quests-titles">title</a>. Your species' chain ends from level 25 with a big task and a legend title of your species.</li>
<li><strong>Typical goals:</strong> kill certain prey, eat and drink, travel a distance, visit places, survive game days, use abilities, howl, help others up, take and hold territories, offspring, alpha duels, drive off <a href="#territory-npc">wild rival packs</a>.</li>
</ul>
<p>Side quests that only fail because of pack, rank or pack size stay in the list with the reason – so you know what you are missing.</p>`,
        },
        {
            id: 'quests-pack',
            title: { de: 'Rudelquests', en: 'Pack quests' },
            tags: { de: 'rudelquest rudelpunkte meilenstein gemeinsam', en: 'pack quest pack points milestone together' },
            de: `<p>Rudelquests zählen für das <strong>ganze Rudel</strong>: Was jedes Mitglied tut, wird zusammengezählt. Du findest sie im Rudelmenü (<kbd>L</kbd>), Reiter <em>Rudelquests</em>.</p>
<ul>
<li><strong>Diese Woche:</strong> Jedes Rudel bekommt derzeit 3 wöchentliche Rudelquests (neu am Montag), etwa Grenzgänge mit Duftmarken, gemeinsame Nächte, Jagen oder Grasen.</li>
<li><strong>Rudel-Meilensteine:</strong> einmalige, größere Aufgaben, teils als Kette – zum Beispiel ein Revier einnehmen und dann mehrmals verteidigen, gemeinsam Großwild jagen oder als Herde zusammenstehen.</li>
<li><strong>Belohnung:</strong> Rudelpunkte für <a href="#pack-perks">Perks</a> und Ruhm für alle Mitglieder, die online sind.</li>
</ul>`,
            en: `<p>Pack quests count for the <strong>whole pack</strong>: what every member does adds up. You find them in the pack menu (<kbd>L</kbd>), tab <em>Pack quests</em>.</p>
<ul>
<li><strong>This week:</strong> every pack currently gets 3 weekly pack quests (new on Monday), such as border walks with scent marks, nights together, hunting or grazing.</li>
<li><strong>Pack milestones:</strong> one-time, bigger tasks, partly in chains – for example take a territory and then defend it several times, hunt big game together or stand together as a herd.</li>
<li><strong>Reward:</strong> pack points for <a href="#pack-perks">perks</a> and fame for every member who is online.</li>
</ul>`,
        },
        {
            id: 'quests-achievements',
            title: { de: 'Errungenschaften', en: 'Achievements' },
            tags: { de: 'errungenschaften erfolge geheim account tier', en: 'achievements secret account animal' },
            de: `<p>Errungenschaften sind langfristige Ziele. Es gibt zwei Arten:</p>
<ul>
<li><strong>Dieses Tier:</strong> gehören zu deinem aktuellen Tier und bringen Ruhm – stirbt es, beginnt das nächste von vorn. Beispiele: Erstes Blut, Jäger, Großwild, Entdecker, Helfende Pfote, Rudelgründer, Erfahren (Stufe 10), Landbesitzer, Hüter, Erster Wurf, Verlässlich (7 Tage Serie), Feine Nase.</li>
<li><strong>Alle deine Tiere:</strong> gehören deinem Account und bleiben für immer. Beispiele: Erste Schritte, Viele Leben (4 verschiedene Arten gespielt), Alte Seele, Alle Jahreszeiten, Lehrmeister.</li>
</ul>
<p>Manche Errungenschaften zählen nur während eines <a href="#events">Events</a>.</p>
<p><strong>Geheime Errungenschaften:</strong> Einige sind geheim. Bis du sie freischaltest, siehst du weder Namen noch Beschreibung noch Fortschritt – nur „+ … geheime Errungenschaften“. Was dahintersteckt, findest du selbst heraus.</p>`,
            en: `<p>Achievements are long-term goals. There are two kinds:</p>
<ul>
<li><strong>This animal:</strong> belong to your current animal and give fame – if it dies, the next one starts over. Examples: First Blood, Hunter, Big Game, Explorer, Helping Paw, Pack Founder, Seasoned (level 10), Landholder, Warden, First Litter, Reliable (7-day streak), Keen Nose.</li>
<li><strong>All your animals:</strong> belong to your account and stay forever. Examples: First Steps, Many Lives (4 different species played), Old Soul, Every Season, Teacher.</li>
</ul>
<p>Some achievements only count during an <a href="#events">event</a>.</p>
<p><strong>Secret achievements:</strong> some are secret. Until you unlock them you see neither name, description nor progress – only "+ … secret achievements". What is behind them is for you to find out.</p>`,
        },
        {
            id: 'quests-titles',
            title: { de: 'Titel und Belohnungsfelle', en: 'Titles and reward coats' },
            tags: { de: 'titel tragen ablegen fell belohnungsfell event-fell jahrestitel', en: 'title wear take off coat fur reward coat event coat year title' },
            de: `<p><strong>Titel</strong> verdienst du mit Nebenquests und Errungenschaften. Im Reiter <em>Titel</em> (<kbd>K</kbd>) wählst du einen mit <em>Tragen</em> aus; er steht dann unter deinem Namen im Charaktermenü, in der Mitgliederliste deines Rudels und später auf deinem Gedenkstein. <em>Ablegen</em> nimmt ihn wieder ab.</p>
<ul>
<li>Titel aus Errungenschaften „aller deiner Tiere“ dürfen alle deine Tiere tragen.</li>
<li><strong>Jahres-Titel:</strong> Wer während eines Events eine seiner Nebenquests abschließt, bekommt für seinen Account den Titel dieses Jahres (z. B. „Halloween 2026“). Danach ist er nicht mehr zu bekommen.</li>
<li>Das <a href="#events-community">Gemeinschaftsziel</a> kann den Titel „Gemeinsam stark“ bringen.</li>
</ul>
<p>Titel sind etwas anderes als dein <a href="#progress-fame">Ruf</a> (Wanderer bis Legende), der automatisch mit dem Ruhm steigt.</p>
<p><strong>Belohnungsfelle:</strong> Manche Quests schalten ein besonderes Fell für deinen Account frei – vor allem die Abschluss-Nebenquests von Events (legendäre Event-Felle für viele, aber nicht alle Arten). Ein freigeschaltetes Fell kannst du danach beim Erstellen eines neuen Tiers deiner Art wählen.</p>`,
            en: `<p>You earn <strong>titles</strong> with side quests and achievements. In the <em>Titles</em> tab (<kbd>K</kbd>) you pick one with <em>Wear</em>; it then shows under your name in the character menu, in your pack's member list and later on your memorial stone. <em>Take off</em> removes it.</p>
<ul>
<li>Titles from achievements of "all your animals" can be worn by all your animals.</li>
<li><strong>Year titles:</strong> whoever finishes one of an event's side quests during the event gets that year's title for their account (e.g. "Halloween 2026"). Afterwards it can no longer be earned.</li>
<li>The <a href="#events-community">community goal</a> can bring the title "Stronger Together".</li>
</ul>
<p>Titles are not the same as your <a href="#progress-fame">reputation</a> (Wanderer to Legend), which rises with fame on its own.</p>
<p><strong>Reward coats:</strong> some quests unlock a special coat for your account – above all the final side quests of events (legendary event coats for many, but not all species). Afterwards you can pick an unlocked coat when you create a new animal of that species.</p>`,
        },
    ],
});
