window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'pack',
    order: 62,
    icon: 'pack',
    title: { de: 'Rudel', en: 'Packs' },
    sections: [
        {
            id: 'pack-overview',
            title: { de: 'Was ein Rudel bringt', en: 'What a pack gives you' },
            tags: { de: 'rudel herde gruppe gemeinsam rudelmenü', en: 'pack herd group together pack menu' },
            de: `<p>Ein Rudel (bei Pflanzenfressern ist es eine Herde, das Prinzip ist dasselbe) ist eine feste Gruppe von Tieren <strong>derselben Art</strong>. Zusammen könnt ihr:</p>
<ul>
<li>größere <a href="#territory">Reviere</a> halten und verteidigen,</li>
<li><a href="#quests-pack">Rudelquests</a> lösen und mit Rudelpunkten <a href="#pack-perks">Perks</a> kaufen,</li>
<li>Rudel-Ruhm sammeln und in der <a href="#pack-fame">Rudel-Rangliste</a> aufsteigen,</li>
<li>euch gegenseitig nicht verletzen – außer im <a href="#pack-duel">Alpha-Duell</a>,</li>
<li>euch auf der Karte und über Namensschilder finden und den Rudelruf nutzen (siehe <a href="#voice">Stimme</a>),</li>
<li>Nachwuchs direkt ins Rudel hineinbekommen (siehe <a href="#pack-born">Im Rudel geboren</a>).</li>
</ul>
<p>Alles rund ums Rudel steuerst du im <strong>Rudelmenü</strong> (<kbd>L</kbd>) mit den Reitern <em>Mitglieder</em>, <em>Rudelquests</em>, <em>Perks</em>, <em>Rangliste</em> und <em>Bündnisse</em>.</p>`,
            en: `<p>A pack (for plant eaters it is a herd – it works the same way) is a fixed group of animals of the <strong>same species</strong>. Together you can:</p>
<ul>
<li>hold and defend larger <a href="#territory">territories</a>,</li>
<li>complete <a href="#quests-pack">pack quests</a> and buy <a href="#pack-perks">perks</a> with pack points,</li>
<li>collect pack fame and climb the <a href="#pack-fame">pack ranking</a>,</li>
<li>not hurt each other – except in an <a href="#pack-duel">alpha duel</a>,</li>
<li>find each other on the map and by name tags and use the pack call (see <a href="#voice">Voice</a>),</li>
<li>have offspring born straight into the pack (see <a href="#pack-born">Born into the pack</a>).</li>
</ul>
<p>You run everything about your pack in the <strong>pack menu</strong> (<kbd>L</kbd>) with the tabs <em>Members</em>, <em>Pack quests</em>, <em>Perks</em>, <em>Ranking</em> and <em>Allies</em>.</p>`,
        },
        {
            id: 'pack-founding',
            title: { de: 'Gründen, einladen, beitreten', en: 'Founding, inviting, joining' },
            tags: { de: 'gründen einladung beitreten name rudelgröße plätze verlassen auflösen', en: 'found invite join name pack size places leave disband' },
            de: `<p><strong>Gründen:</strong> Ohne Rudel zeigt dir das Rudelmenü (<kbd>L</kbd>) das Feld <em>Name des Rudels</em>. Der Name muss 3 bis 24 Zeichen lang und einmalig sein (Buchstaben inkl. Umlaute, Leerzeichen, Apostroph, Bindestrich). Mit <em>Gründen</em> wirst du Alpha. Ein eigenes Revier bringst du ins neue Rudel mit.</p>
<p><strong>Einladen</strong> können Alpha und Betas:</p>
<ol>
<li>Stell dich neben das Tier, das du einladen willst (höchstens etwa 15 m entfernt, gleiche Art, noch in keinem Rudel).</li>
<li>Im Rudelmenü unter <em>In der Nähe einladen</em> auf <em>Einladen</em> klicken.</li>
<li>Der andere antwortet innerhalb von 60 Sekunden in seinem Rudelmenü mit <em>Annehmen</em> oder <em>Ablehnen</em>.</li>
</ol>
<div class="hb-warn">Wer noch ein eigenes Revier hält, kann keine Einladung annehmen. Gib es zuerst im Rudelmenü (Abschnitt <em>Revier</em>) ab. Eine Einladung gilt außerdem nur für das Tier, an das sie ging – Ausloggen oder Tierwechsel verwirft sie.</div>
<p><strong>Rudelgröße:</strong> Wie viele Tiere hineinpassen, hängt von der Art ab. Gesellige Arten haben große Rudel und Herden, Einzelgänger nur Platz für zwei bis drei:</p>
<table class="hb-table">
<thead><tr><th>Plätze</th><th>Arten</th></tr></thead>
<tbody>
<tr><td>12</td><td>Bison</td></tr>
<tr><td>10</td><td>Weißwedelhirsch, Wapiti, Gabelbock, Ratte</td></tr>
<tr><td>8</td><td>Wolf, Wildschwein, Wildpferd, Dickhornschaf, Kaninchen</td></tr>
<tr><td>6</td><td>Kojote, Biber, Bisamratte</td></tr>
<tr><td>3</td><td>Waschbär, Dachs</td></tr>
<tr><td>2</td><td>alle übrigen Einzelgänger (z. B. Puma, Schwarzbär, Rotfuchs, Elch, Alligator)</td></tr>
</tbody>
</table>
<p><a href="#companion">Begleiter</a> zählen mit. Mit dem Perk <em>Großes Rudel</em> bekommt ihr bis zu zwei Plätze mehr.</p>
<p><strong>Verlassen und Auflösen:</strong> Jedes Mitglied kann unter <em>Verlassen / Auflösen</em> gehen (Ausnahme: im Rudel geborene Jungtiere). Nur der Alpha kann das ganze Rudel auflösen. Verlässt das letzte Tier das Rudel oder stirbt es, zerfällt das Rudel und sein Revier wird frei.</p>`,
            en: `<p><strong>Founding:</strong> without a pack, the pack menu (<kbd>L</kbd>) shows the field <em>Pack name</em>. The name must be 3 to 24 characters long and unique (letters, spaces, apostrophe, hyphen). <em>Found</em> makes you the alpha. A territory you hold comes along into the new pack.</p>
<p>The alpha and betas can <strong>invite</strong>:</p>
<ol>
<li>Stand next to the animal you want to invite (at most about 15 m away, same species, not in a pack yet).</li>
<li>In the pack menu under <em>Invite nearby</em> click <em>Invite</em>.</li>
<li>The other player answers within 60 seconds in their pack menu with <em>Accept</em> or <em>Decline</em>.</li>
</ol>
<div class="hb-warn">Anyone who still holds a territory of their own cannot accept an invitation. Give it up first in the pack menu (section <em>Territory</em>). An invitation is also only valid for the animal it went to – logging out or switching animals discards it.</div>
<p><strong>Pack size:</strong> how many animals fit depends on the species. Social species have large packs and herds, loners only room for two or three:</p>
<table class="hb-table">
<thead><tr><th>Places</th><th>Species</th></tr></thead>
<tbody>
<tr><td>12</td><td>bison</td></tr>
<tr><td>10</td><td>whitetail deer, elk, pronghorn, rat</td></tr>
<tr><td>8</td><td>wolf, boar, wild horse, bighorn sheep, rabbit</td></tr>
<tr><td>6</td><td>coyote, beaver, muskrat</td></tr>
<tr><td>3</td><td>raccoon, badger</td></tr>
<tr><td>2</td><td>all other loners (e.g. cougar, black bear, red fox, moose, alligator)</td></tr>
</tbody>
</table>
<p><a href="#companion">Companions</a> count too. The perk <em>Bigger Pack</em> gives you up to two more places.</p>
<p><strong>Leaving and disbanding:</strong> every member can go under <em>Leave / disband</em> (exception: juveniles born into the pack). Only the alpha can disband the whole pack. If the last animal leaves or dies, the pack falls apart and its territory becomes free.</p>`,
        },
        {
            id: 'pack-ranks',
            title: { de: 'Ränge und Rechte', en: 'Ranks and rights' },
            tags: { de: 'rang alpha beta mitglied omega befördern herabstufen verstoßen', en: 'rank alpha beta member omega promote demote cast out kick' },
            de: `<p>Jedes Rudel hat vier Ränge, von unten nach oben: <strong>Omega</strong> → <strong>Mitglied</strong> → <strong>Beta</strong> → <strong>Alpha</strong>. Neue Tiere beginnen als Omega. Ein Rudel hat genau einen Alpha und höchstens zwei Betas.</p>
<table class="hb-table">
<thead><tr><th>Rang</th><th>darf</th></tr></thead>
<tbody>
<tr><td>Omega, Mitglied</td><td>den Alpha herausfordern, das Rudel verlassen</td></tr>
<tr><td>Beta</td><td>zusätzlich: einladen, niedrigere Ränge befördern, herabstufen und verstoßen, Rudelpunkte für Perks ausgeben, ein anderes Revier beanspruchen</td></tr>
<tr><td>Alpha</td><td>alles, dazu: bis zum Beta befördern, umbenennen, Rudelfarbe wählen, Bündnisse schließen und beenden, das Revier abgeben, die Führung übergeben (<em>Zum Alpha machen</em>), das Rudel auflösen</td></tr>
</tbody>
</table>
<p>Befördern, Herabstufen und Verstoßen geht immer nur bei Tieren mit niedrigerem Rang als deinem eigenen. Alpha wird man nur durch Übergabe oder ein gewonnenes <a href="#pack-duel">Alpha-Duell</a>.</p>
<p>Stirbt der Alpha oder verlässt er das Rudel, rückt automatisch das ranghöchste Tier nach, bei Gleichstand das, das am längsten dabei ist.</p>`,
            en: `<p>Every pack has four ranks, from bottom to top: <strong>Omega</strong> → <strong>Member</strong> → <strong>Beta</strong> → <strong>Alpha</strong>. New animals start as omega. A pack has exactly one alpha and at most two betas.</p>
<table class="hb-table">
<thead><tr><th>Rank</th><th>may</th></tr></thead>
<tbody>
<tr><td>Omega, Member</td><td>challenge the alpha, leave the pack</td></tr>
<tr><td>Beta</td><td>also: invite, promote, demote and cast out lower ranks, spend pack points on perks, claim another territory</td></tr>
<tr><td>Alpha</td><td>everything, plus: promote up to beta, rename, pick the pack colour, make and end alliances, give up the territory, hand over the lead (<em>Make alpha</em>), disband the pack</td></tr>
</tbody>
</table>
<p>Promoting, demoting and casting out only work on animals of a lower rank than your own. You only become alpha by a hand-over or by winning an <a href="#pack-duel">alpha duel</a>.</p>
<p>When the alpha dies or leaves, the highest-ranking animal takes over automatically; on a tie, the one that has been in the pack longest.</p>`,
        },
        {
            id: 'pack-duel',
            title: { de: 'Alpha-Duell', en: 'Alpha duel' },
            tags: { de: 'duell herausfordern alpha kampf führung', en: 'duel challenge alpha fight lead' },
            de: `<p>Jedes Mitglied kann den Alpha um die Führung herausfordern. Das Duell ist <strong>nicht tödlich</strong>.</p>
<ol>
<li>Stell dich in die Nähe des Alphas (höchstens etwa 30 m) und klicke im Rudelmenü auf <em>Den Alpha herausfordern</em>.</li>
<li>Der Alpha hat 60 Sekunden, um im Rudelmenü anzunehmen oder abzulehnen.</li>
<li>Nimmt er an, beginnt der Kampf. Auch Pflanzenfresser dürfen im Duell angreifen.</li>
<li>Wer zuerst auf etwa 15 % seiner Gesundheit fällt, verliert.</li>
</ol>
<ul>
<li>Der Sieger braucht mindestens 2 eigene Treffer und muss den Großteil (75 %) des Schadens selbst gemacht haben – fremde Hilfe macht das Duell ungültig (unentschieden).</li>
<li>Nach 3 Minuten ohne Entscheidung endet es unentschieden, der Alpha bleibt.</li>
<li>Gewinnt der Herausforderer, wird er Alpha. Der Sieger bekommt 50 EP und 5 Ruhm.</li>
<li>Nach einer Herausforderung musst du 30 Minuten warten, bevor du erneut herausfordern kannst.</li>
<li>Ausloggen oder Niedergestreckt-werden zählt als Aufgabe.</li>
</ul>`,
            en: `<p>Every member can challenge the alpha for the lead. The duel is <strong>not deadly</strong>.</p>
<ol>
<li>Get close to the alpha (at most about 30 m) and click <em>Challenge the alpha</em> in the pack menu.</li>
<li>The alpha has 60 seconds to accept or decline in the pack menu.</li>
<li>If they accept, the fight begins. Plant eaters may attack in a duel too.</li>
<li>Whoever first drops to about 15 % of their health loses.</li>
</ol>
<ul>
<li>The winner needs at least 2 hits of their own and must have dealt most of the damage (75 %) – outside help makes the duel void (draw).</li>
<li>After 3 minutes without a result it ends in a draw and the alpha stays.</li>
<li>If the challenger wins, they become alpha. The winner gets 50 XP and 5 fame.</li>
<li>After a challenge you have to wait 30 minutes before you can challenge again.</li>
<li>Logging out or going down counts as giving up.</li>
</ul>`,
        },
        {
            id: 'pack-perks',
            title: { de: 'Rudelpunkte und Perks', en: 'Pack points and perks' },
            tags: { de: 'rudelpunkte perks aufwerten revier boni augen des landes grenzwacht', en: 'pack points perks upgrade territory bonus eyes of the land border watch' },
            de: `<p><strong>Rudelpunkte</strong> verdient ihr mit <a href="#quests-pack">Rudelquests</a>, beim Erlegen eines <a href="#events-legendary">legendären Tiers</a> (10 Punkte) und beim Vertreiben <a href="#territory-npc">wilder Rivalenrudel</a> (2 Punkte). Betas und der Alpha geben sie im Reiter <em>Perks</em> aus. Die meisten Perks werten die Boni eures <a href="#territory-bonuses">Reviers</a> auf und wirken nur dort.</p>
<table class="hb-table">
<thead><tr><th>Perk</th><th>Kosten je Stufe</th><th>Wirkung</th></tr></thead>
<tbody>
<tr><td>Ruhiger Bau</td><td>2 / 3 / 4</td><td>je Stufe im Revier +10 % Regeneration, +5 % Ausdauer-Erholung</td></tr>
<tr><td>Vertrautes Land</td><td>2 / 3 / 4</td><td>je Stufe im Revier Hunger, Durst und Müdigkeit 5 % langsamer</td></tr>
<tr><td>Sichere Tränken</td><td>2 / 3 / 4</td><td>je Stufe im Revier 10 % schneller fressen und trinken</td></tr>
<tr><td>Reiches Jagdgebiet</td><td>2 / 3 / 4</td><td>je Stufe 10 % mehr Wildtiere im Revier</td></tr>
<tr><td>Landnahme</td><td>3 / 4</td><td>je Stufe Reviere 15 % schneller einnehmen und Besitzer schneller verdrängen</td></tr>
<tr><td>Wachsame Grenzen</td><td>2 / 3</td><td>je Stufe 2 Minuten mehr Alarm, bevor Fremde euch verdrängen</td></tr>
<tr><td>Ruhmreiches Land</td><td>3 / 5</td><td>je Stufe +1 Ruhm je gehaltenem Revier und Stunde</td></tr>
<tr><td>Weites Land</td><td>6</td><td>große Reviere auch ohne die Fähigkeit „Revierkunde“</td></tr>
<tr><td>Grenzwacht</td><td>5</td><td>jedes Mitglied erfährt, wenn ein Fremder euer Revier betritt – auch wilde Raubtiere, die eure Art jagen</td></tr>
<tr><td>Fährte des Eindringlings</td><td>8</td><td>Fremde im Revier erscheinen live auf der Karte, bis sie sterben oder gehen</td></tr>
<tr><td>Augen des Landes</td><td>12</td><td>jedes Tier im Revier – Spieler und Wildtiere – erscheint für jedes Mitglied auf der Karte</td></tr>
<tr><td>Großes Rudel</td><td>4 / 6</td><td>je Stufe ein Platz mehr im Rudel</td></tr>
</tbody>
</table>
<div class="hb-tip">Rudelpunkte gehören dem Rudel, nicht einem Tier. Sprecht euch ab, bevor ihr sie ausgebt – Perks lassen sich nicht zurückgeben.</div>`,
            en: `<p>You earn <strong>pack points</strong> with <a href="#quests-pack">pack quests</a>, by killing a <a href="#events-legendary">legendary animal</a> (10 points) and by driving off <a href="#territory-npc">wild rival packs</a> (2 points). Betas and the alpha spend them in the <em>Perks</em> tab. Most perks boost the bonuses of your <a href="#territory-bonuses">territory</a> and only work there.</p>
<table class="hb-table">
<thead><tr><th>Perk</th><th>Cost per level</th><th>Effect</th></tr></thead>
<tbody>
<tr><td>Quiet Den</td><td>2 / 3 / 4</td><td>per level in your territory +10 % regeneration, +5 % stamina recovery</td></tr>
<tr><td>Home Ground</td><td>2 / 3 / 4</td><td>per level in your territory hunger, thirst and tiredness 5 % slower</td></tr>
<tr><td>Safe Waters</td><td>2 / 3 / 4</td><td>per level in your territory eat and drink 10 % faster</td></tr>
<tr><td>Rich Hunting Grounds</td><td>2 / 3 / 4</td><td>per level 10 % more wild animals in your territory</td></tr>
<tr><td>Land Grab</td><td>3 / 4</td><td>per level take territories and push out owners 15 % faster</td></tr>
<tr><td>Watchful Borders</td><td>2 / 3</td><td>per level 2 more minutes of alarm before strangers push you out</td></tr>
<tr><td>Famed Land</td><td>3 / 5</td><td>per level +1 fame per held territory and hour</td></tr>
<tr><td>Wide Lands</td><td>6</td><td>large territories even without the skill "Territorial"</td></tr>
<tr><td>Border Watch</td><td>5</td><td>every member is told when a stranger enters your territory – also wild predators that hunt your kind</td></tr>
<tr><td>Intruder's Trail</td><td>8</td><td>strangers in your territory show live on the map until they die or leave</td></tr>
<tr><td>Eyes of the Land</td><td>12</td><td>every animal in your territory – players and wildlife – shows on the map for every member</td></tr>
<tr><td>Bigger Pack</td><td>4 / 6</td><td>per level one more place in the pack</td></tr>
</tbody>
</table>
<div class="hb-tip">Pack points belong to the pack, not to one animal. Agree before you spend them – perks cannot be returned.</div>`,
        },
        {
            id: 'pack-fame',
            title: { de: 'Rudel-Ruhm und Rangliste', en: 'Pack fame and ranking' },
            tags: { de: 'rudelruhm rangliste woche bestenliste', en: 'pack fame ranking week leaderboard' },
            de: `<p>Jeder Ruhm, den ein Mitglied bekommt – Jagd, Quests, Duelle, Reviere –, zählt auch für das Rudel. Im Reiter <em>Rangliste</em> des Rudelmenüs stehen die 10 berühmtesten Rudel <em>Diese Woche</em> und <em>Gesamt</em>. Euer Rudel ist markiert; steht es nicht in der Liste, siehst du seinen Platz darunter. Die Woche beginnt am Montag.</p>
<p>Ohne Rudel siehst du die Rangliste unter dem Feld zum Gründen. Die großen saisonalen Ranglisten findest du im Menü <kbd>U</kbd> (siehe <a href="#ranking">Ranglisten</a>).</p>`,
            en: `<p>All fame a member gains – hunting, quests, duels, territories – also counts for the pack. The <em>Ranking</em> tab of the pack menu lists the 10 most famous packs <em>This week</em> and <em>All time</em>. Your pack is marked; if it is not in the list, you see its place below. The week starts on Monday.</p>
<p>Without a pack you see the ranking below the founding field. The big seasonal rankings are in the <kbd>U</kbd> menu (see <a href="#ranking">Rankings</a>).</p>`,
        },
        {
            id: 'pack-alliances',
            title: { de: 'Bündnisse', en: 'Alliances' },
            tags: { de: 'bündnis verbündete allianz anbieten beenden', en: 'alliance allies offer end' },
            de: `<p>Rudel <strong>jeder Art</strong> können sich verbünden – ein Wolfsrudel also auch mit einer Bisonherde. Bündnisse schließt und beendet nur der Alpha, im Reiter <em>Bündnisse</em> des Rudelmenüs.</p>
<ol>
<li>Unter <em>Bündnis anbieten</em> ein Rudel wählen und <em>Anbieten</em> klicken.</li>
<li>Der Alpha des anderen Rudels nimmt unter <em>Angebote an dein Rudel</em> an oder lehnt ab. Ein Angebot gilt 24 Stunden und kann zurückgezogen werden. Bieten sich zwei Rudel gegenseitig an, gilt das als Zusage.</li>
</ol>
<p><strong>Was ein Bündnis bewirkt:</strong></p>
<ul>
<li>Verbündete können sich nicht verletzen.</li>
<li>Sie sind in den Revieren der anderen willkommen: kein Alarm, kein Angriff, kein Beanspruchen, keine Grenzwacht-Meldung. Ihre Anwesenheit hält euer Revier aber nicht.</li>
<li>Im Sinnesmodus erscheinen sie wie euer eigenes Rudel.</li>
</ul>
<p><strong>Grenzen:</strong> höchstens 2 Verbündete und 3 offene Angebote je Rudel. Wird ein Bündnis beendet, hält es noch 10 Minuten (kein Überraschungsangriff); danach können dieselben zwei Rudel sich erst nach 60 Minuten wieder verbünden. Zerfällt ein Rudel, endet sein Bündnis sofort.</p>`,
            en: `<p>Packs of <strong>any species</strong> can ally – so a wolf pack can ally with a bison herd. Only the alpha makes and ends alliances, in the <em>Allies</em> tab of the pack menu.</p>
<ol>
<li>Under <em>Offer an alliance</em> choose a pack and click <em>Offer</em>.</li>
<li>The other pack's alpha accepts or declines under <em>Offers to your pack</em>. An offer lasts 24 hours and can be withdrawn. If two packs offer to each other, that counts as a yes.</li>
</ol>
<p><strong>What an alliance does:</strong></p>
<ul>
<li>Allies cannot hurt each other.</li>
<li>They are welcome in each other's territories: no alarm, no attack, no claim, no Border Watch message. Their presence does not hold your territory, though.</li>
<li>In sense mode they show like your own pack.</li>
</ul>
<p><strong>Limits:</strong> at most 2 allies and 3 open offers per pack. When an alliance is ended it still holds for 10 minutes (no surprise attack); after that the same two packs can only ally again after 60 minutes. If a pack falls apart, its alliance ends at once.</p>`,
        },
        {
            id: 'pack-markers',
            title: { de: 'Namensschilder, Marker, Folgen', en: 'Name tags, markers, following' },
            tags: { de: 'namensschild marker karte farbe hud rudelzeile markierung ping zeigen folgen hinterherlaufen', en: 'name tag marker map colour hud pack line ping mark follow' },
            de: `<ul>
<li><strong>Namensschilder</strong> stehen über deinen Rudelmitgliedern, solange sie in etwa 25 m Nähe und auf dem Bildschirm sind.</li>
<li><strong>Kartenmarker</strong> zeigen dir auf der Pausenkarte, wo deine Rudelmitglieder sind. Andere Spieler siehst du nicht auf der Karte.</li>
<li>Die <strong>Rudelzeile</strong> im HUD zeigt Rudelname, deinen Rang und wer online ist.</li>
<li>Die <strong>Rudelfarbe</strong> färbt Namensschilder und Kartenmarker. Ist sie für euer Rudel freigeschaltet, wählt der Alpha sie im Rudelmenü unter <em>Rudelfarbe</em>.</li>
</ul>
<p>Namensschilder, Marker und die Rudelzeile kannst du unter <kbd>J</kbd> → <em>Einstellungen</em> ein- und ausschalten (siehe <a href="#hud">HUD und Menüs</a>).</p>
<h4>Markierungen setzen</h4>
<p>Mit <kbd>T</kbd> markierst du die Stelle in der Bildmitte für dein Rudel (bis etwa 150 m weit). Schaust du dabei auf ein Tier, wird daraus <b>Beute</b> oder <b>Gefahr</b> (Raubtiere, Bären, Keiler, Alligatoren, Schlangen), sonst ein <b>Ort</b>. Die Markierung erscheint 30 Sekunden lang auf dem Bildschirm und auf der Karte bei allen Rudelmitgliedern in der Nähe. Pro Tier sind höchstens zwei gleichzeitig aktiv.</p>
<h4>Einem Rudelmitglied folgen</h4>
<p>Über das Emote-Rad (<kbd>F</kbd>) → <em>Rudelmitglied folgen</em> oder <code>/liw_follow</code> läuft dein Tier von selbst hinter einem Rudelmitglied her – dem, auf das du schaust, sonst dem nächsten. Es geht, rennt oder sprintet so, wie es der Abstand verlangt. Jede Bewegungstaste beendet das Folgen, ebenso wenn das Mitglied zu weit weg, niedergestreckt oder offline ist.</p>`,
            en: `<ul>
<li><strong>Name tags</strong> show above your pack mates while they are within about 25 m and on screen.</li>
<li><strong>Map markers</strong> show you on the pause map where your pack mates are. You do not see other players on the map.</li>
<li>The <strong>pack line</strong> in the HUD shows the pack name, your rank and who is online.</li>
<li>The <strong>pack colour</strong> tints name tags and map markers. If it is unlocked for your pack, the alpha picks it in the pack menu under <em>Pack colour</em>.</li>
</ul>
<p>You can switch name tags, markers and the pack line on and off under <kbd>J</kbd> → <em>Settings</em> (see <a href="#hud">HUD and menus</a>).</p>
<h4>Pinging a spot</h4>
<p><kbd>T</kbd> marks the spot at the centre of the screen for your pack (up to about 150 m away). If you look at an animal, it becomes <b>prey</b> or <b>danger</b> (predators, bears, boars, alligators, snakes), otherwise a <b>place</b>. The ping shows for 30 seconds on screen and on the map for every pack mate nearby. Each animal can have at most two active at once.</p>
<h4>Following a pack mate</h4>
<p>Via the emote wheel (<kbd>F</kbd>) → <em>Follow pack member</em> or <code>/liw_follow</code> your animal runs after a pack mate on its own – the one you look at, otherwise the nearest. It walks, runs or sprints as the gap demands. Any movement key ends following, and so does the mate getting too far away, going down or logging out.</p>`,
        },
        {
            id: 'pack-loner',
            title: { de: 'Einzelgänger', en: 'Loners' },
            tags: { de: 'einzelgänger allein bonus schaden', en: 'loner alone bonus damage solitary' },
            de: `<p>Arten, die von Natur aus allein leben (z. B. Puma, Schwarzbär, Rotfuchs, Elch), sind als <strong>Einzelgänger</strong> stärker: Solange kein Rudelmitglied im Umkreis von etwa 100 m ist, machen sie derzeit etwa <strong>10 % mehr Schaden</strong>.</p>
<p>Einzelgänger dürfen auch ohne Rudel ein Revier halten – allerdings nur kleine und mit der Fähigkeit „Revierkunde“ mittlere (siehe <a href="#territory-sizes">Reviergrößen</a>). Ohne Rudel darfst du außerdem ein Wildtier deiner Art als <a href="#companion">Begleiter</a> anwerben.</p>`,
            en: `<p>Species that live alone by nature (e.g. cougar, black bear, red fox, moose) are stronger as <strong>loners</strong>: while no pack mate is within about 100 m, they currently deal about <strong>10 % more damage</strong>.</p>
<p>Loners may also hold a territory without a pack – but only small ones, and medium ones with the skill "Territorial" (see <a href="#territory-sizes">Territory sizes</a>). Without a pack you may also win over a wild animal of your species as a <a href="#companion">companion</a>.</p>`,
        },
        {
            id: 'pack-born',
            title: { de: 'Im Rudel geboren', en: 'Born into the pack' },
            tags: { de: 'jungtier geboren rudel omega nachwuchs', en: 'juvenile born pack omega offspring' },
            de: `<p>Ein Wurf merkt sich das Rudel der Mutter (oder sonst des Vaters). Wer ein Jungtier daraus <a href="#family-cubs">übernimmt</a>, tritt diesem Rudel sofort als Omega bei – auch wenn das Rudel eigentlich voll ist, denn es ist hineingeboren und nicht eingeladen.</p>
<p>Solange es ein Jungtier ist, kann es das Rudel nicht verlassen und nicht verstoßen werden. Erwachsen gelten die normalen Regeln.</p>`,
            en: `<p>A litter remembers the mother's pack (otherwise the father's). Whoever <a href="#family-cubs">takes over</a> a juvenile from it joins that pack right away as omega – even when the pack is actually full, because it was born into it and not invited.</p>
<p>As long as it is a juvenile it cannot leave the pack and cannot be cast out. Once grown, the normal rules apply.</p>`,
        },
    ],
});
