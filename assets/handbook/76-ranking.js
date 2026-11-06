window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'ranking',
    order: 76,
    icon: 'ranking',
    title: { de: 'Ranglisten und Statistik', en: 'Rankings and statistics' },
    sections: [
        {
            id: 'ranking-menu',
            title: { de: 'Das Ranglisten-Menü (U)', en: 'The rankings menu (U)' },
            tags: { de: 'rangliste bestenliste statistik u menü', en: 'ranking leaderboard statistics u menu' },
            de: `<p>Mit <kbd>U</kbd> öffnest du die <strong>Ranglisten</strong>. Die Reiter:</p>
<ul>
<li><strong>Diese Saison</strong> – Tier der Saison und Rudel der Saison</li>
<li><strong>Ewige Bestenliste</strong> – alles seit dem ersten Tag in der Wildnis, gefallene Tiere und aufgelöste Rudel eingeschlossen</li>
<li><strong>Ruhmeshalle</strong> – die Besten jeder abgeschlossenen Saison</li>
<li><strong>Meine Statistik</strong> – dein Tier, sein Rudel und alle deine Tiere</li>
</ul>
<p>In den Ranglisten wählst du <em>Tiere</em> oder <em>Rudel</em> und die <em>Wertung</em>: die Gesamtpunkte oder eine einzelne Kategorie (z. B. Ruhm, Erlegte Wildtiere, Lebenszeit, Zurückgelegte Strecke, Revier gehalten, Nachkommen geboren, Quests erledigt). Dein Tier bzw. Rudel ist markiert; steht es nicht in der Liste, siehst du seinen Platz darunter. Gleich viele Punkte teilen sich einen Platz. Die Listen werden etwa jede Minute aktualisiert.</p>
<p>Die wöchentliche Rudel-Rangliste nach Ruhm steht außerdem im Rudelmenü (siehe <a href="#pack-fame">Rudel-Ruhm</a>).</p>`,
            en: `<p>Press <kbd>U</kbd> to open the <strong>rankings</strong>. The tabs:</p>
<ul>
<li><strong>This season</strong> – animal of the season and pack of the season</li>
<li><strong>All time</strong> – everything since the first day in the wild, fallen animals and disbanded packs included</li>
<li><strong>Hall of fame</strong> – the best of every season that has ended</li>
<li><strong>My statistics</strong> – your animal, its pack and all your animals</li>
</ul>
<p>In the rankings you choose <em>Animals</em> or <em>Packs</em> and what it is <em>Ranked by</em>: the total score or a single category (e.g. Fame, Wild animals killed, Time alive, Distance travelled, Territory held, Offspring born, Quests done). Your animal or pack is marked; if it is not in the list, you see its place below. Equal scores share a place. The lists update about every minute.</p>
<p>The weekly pack ranking by fame is also in the pack menu (see <a href="#pack-fame">Pack fame</a>).</p>`,
        },
        {
            id: 'ranking-seasons',
            title: { de: 'Saisons und Punkte', en: 'Seasons and score' },
            tags: { de: 'saison punkte wertung tier der saison rudel der saison', en: 'season score points animal of the season pack of the season' },
            de: `<p>Eine <strong>Saison</strong> ist eine Jahreszeit des echten Kalenders, z. B. „Herbst 2026“ oder „Winter 2026/27“ (siehe <a href="#world-seasons">Jahreszeiten</a>). Das Menü zeigt, welcher Tag der Saison gerade ist und wie viele Tage bleiben. Es gibt <strong>keine Wipes</strong>: Endet eine Saison, ziehen die Besten in die Ruhmeshalle ein, gelöscht wird nichts.</p>
<p><strong>Tier der Saison</strong> – Punkte derzeit je:</p>
<table class="hb-table">
<thead><tr><th>Was</th><th>Punkte</th></tr></thead>
<tbody>
<tr><td>Ruhm</td><td>1 je Ruhm</td></tr>
<tr><td>Getötetes Spielertier</td><td>10</td></tr>
<tr><td>Erlegtes Wildtier</td><td>1</td></tr>
<tr><td>Stunde am Leben in der Wildnis</td><td>2</td></tr>
<tr><td>Revier eingenommen / verteidigt</td><td>15 / 10</td></tr>
<tr><td>Stunde mit eigenem Revier (Einzeltier)</td><td>1</td></tr>
<tr><td>Jungtier geboren / übernommen</td><td>5 / 5</td></tr>
<tr><td>Quest erledigt</td><td>3</td></tr>
</tbody>
</table>
<p><strong>Rudel der Saison</strong> – Punkte derzeit je:</p>
<table class="hb-table">
<thead><tr><th>Was</th><th>Punkte</th></tr></thead>
<tbody>
<tr><td>Ruhm der Mitglieder</td><td>1 je Ruhm</td></tr>
<tr><td>Stunde mit Revier</td><td>5</td></tr>
<tr><td>Revier eingenommen / verteidigt</td><td>25 / 15</td></tr>
<tr><td>Jungtier geboren / übernommen</td><td>10 / 10</td></tr>
<tr><td>Rudelquest erledigt</td><td>20</td></tr>
<tr><td>Spielertier getötet</td><td>5</td></tr>
</tbody>
</table>
<p>Die aktuellen Gewichte stehen auch im Menü unter jeder Rangliste.</p>`,
            en: `<p>A <strong>season</strong> is a season of the real calendar, e.g. "Autumn 2026" or "Winter 2026/27" (see <a href="#world-seasons">Seasons</a>). The menu shows which day of the season it is and how many are left. There are <strong>no wipes</strong>: when a season ends, the best enter the hall of fame, and nothing is deleted.</p>
<p><strong>Animal of the season</strong> – points currently per:</p>
<table class="hb-table">
<thead><tr><th>What</th><th>Points</th></tr></thead>
<tbody>
<tr><td>fame</td><td>1 per fame</td></tr>
<tr><td>player animal killed</td><td>10</td></tr>
<tr><td>wild animal killed</td><td>1</td></tr>
<tr><td>hour alive in the wild</td><td>2</td></tr>
<tr><td>territory taken / defended</td><td>15 / 10</td></tr>
<tr><td>hour holding a territory (single animal)</td><td>1</td></tr>
<tr><td>juvenile born / taken over</td><td>5 / 5</td></tr>
<tr><td>quest done</td><td>3</td></tr>
</tbody>
</table>
<p><strong>Pack of the season</strong> – points currently per:</p>
<table class="hb-table">
<thead><tr><th>What</th><th>Points</th></tr></thead>
<tbody>
<tr><td>fame of the members</td><td>1 per fame</td></tr>
<tr><td>hour holding a territory</td><td>5</td></tr>
<tr><td>territory taken / defended</td><td>25 / 15</td></tr>
<tr><td>juvenile born / taken over</td><td>10 / 10</td></tr>
<tr><td>pack quest done</td><td>20</td></tr>
<tr><td>player animal killed</td><td>5</td></tr>
</tbody>
</table>
<p>The current weights are also shown in the menu below each ranking.</p>`,
        },
        {
            id: 'ranking-hall',
            title: { de: 'Ruhmeshalle', en: 'Hall of fame' },
            tags: { de: 'ruhmeshalle sieger saisonende rekorde', en: 'hall of fame winners season end records' },
            de: `<p>Endet eine Saison, kommen in die <strong>Ruhmeshalle</strong>:</p>
<ul>
<li>Rudel der Saison und Tier der Saison mit den Plätzen dahinter (die besten 5 nach Punkten),</li>
<li>die Sieger einzelner Kategorien als Rekorde – z. B. „Berühmtestes Tier“, „Bester Jäger“, „Am längsten in der Wildnis“, „Längstes Revier“, „Meiste Nachkommen“, „Größte Familie“.</li>
</ul>
<p>Die Sieger werden im Spiel mit einem Banner und auf Discord verkündet. Die Ruhmeshalle zeigt die letzten Saisons, die neueste zuerst.</p>`,
            en: `<p>When a season ends, the <strong>hall of fame</strong> receives:</p>
<ul>
<li>pack of the season and animal of the season with the places behind them (the best 5 by score),</li>
<li>the winners of single categories as records – e.g. "Most fame", "Best hunter", "Longest in the wild", "Longest territory", "Most offspring", "Largest family".</li>
</ul>
<p>The winners are announced in the game with a banner and on Discord. The hall of fame shows the last seasons, newest first.</p>`,
        },
        {
            id: 'ranking-stats',
            title: { de: 'Meine Statistik', en: 'My statistics' },
            tags: { de: 'statistik todesursachen beute zähler', en: 'statistics causes of death prey counters' },
            de: `<p>Der Reiter <strong>Meine Statistik</strong> zeigt für dein aktuelles Tier und sein Rudel – je Saison und insgesamt – unter anderem: erlegte Wildtiere und getötete Spielertiere, Lebenszeit, zurückgelegte Strecke, Reviere eingenommen, verteidigt und gehalten, Nachkommen, Quests, Errungenschaften, Ruhm, Aufgeholfen und gewonnene Alpha-Duelle. Dazu die <em>Beute dieses Tiers</em> nach Art.</p>
<p>Unter <em>Alle deine Tiere</em> stehen die Werte über alle Charaktere deines Accounts, dein längstes Leben, die Beute aller Tiere und <em>Woran deine Tiere starben</em> (z. B. verhungert, verdurstet, erfroren, verblutet, gestürzt, von einem wilden Tier oder einem anderen Tier getötet).</p>
<p>Strecke zählt nur, was du selbst läufst – Sprünge durch einen Respawn oder Tierwechsel zählen nicht.</p>`,
            en: `<p>The <strong>My statistics</strong> tab shows for your current animal and its pack – per season and all time – among other things: wild animals and player animals killed, time alive, distance travelled, territories taken, defended and held, offspring, quests, achievements, fame, animals helped up and alpha duels won. Plus the <em>Prey of this animal</em> by species.</p>
<p>Under <em>All your animals</em> you find the values across all characters of your account, your longest life, the prey of all your animals and <em>How your animals died</em> (e.g. starved, died of thirst, froze, bled out, fell, killed by a wild animal or by another animal).</p>
<p>Distance only counts what you walk yourself – jumps from a respawn or switching animals do not count.</p>`,
        },
    ],
});
