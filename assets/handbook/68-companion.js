window.LIW_HANDBOOK = window.LIW_HANDBOOK || [];
window.LIW_HANDBOOK.push({
    id: 'companion',
    order: 68,
    icon: 'companion',
    title: { de: 'Begleiter', en: 'Companions' },
    sections: [
        {
            id: 'companion-overview',
            title: { de: 'Was Begleiter sind', en: 'What companions are' },
            tags: { de: 'begleiter npc tier gefährte rudel allein', en: 'companion npc animal mate pack alone' },
            de: `<p>Begleiter sind Tiere, die das Spiel für dich steuert – damit du auch dann nicht allein bist, wenn wenige Spieler online sind. Es gibt zwei Wege zu einem Begleiter:</p>
<ul>
<li>ein <strong>Wildtier deiner Art anwerben</strong> (siehe <a href="#companion-recruit">Anwerben</a>),</li>
<li>ein <strong>eigenes Jungtier</strong> aus deinem Wurf mitnehmen (siehe <a href="#companion-cubs">Jungtiere als Begleiter</a>).</li>
</ul>
<p>Begleiter folgen dir, jagen und kämpfen mit dir, fressen mit dir und tragen einen Namen, den andere Spieler über ihnen sehen. Sie zählen als Rudelmitglieder in der Nähe für <a href="#quests">Quests</a> und helfen beim Halten von <a href="#territory">Revieren</a>. Im Rudelmenü stehen sie als „NPC“ unter den Mitgliedern; im Familienbuch (<kbd>O</kbd>) haben sie einen eigenen Reiter <em>Begleiter</em>.</p>
<p>Beim Ausloggen verschwinden deine Begleiter und kommen beim nächsten Betreten der Wildnis wieder mit.</p>`,
            en: `<p>Companions are animals the game controls for you – so you are not alone even when few players are online. There are two ways to get one:</p>
<ul>
<li><strong>win over a wild animal of your species</strong> (see <a href="#companion-recruit">Recruiting</a>),</li>
<li>take along an <strong>own juvenile</strong> from your litter (see <a href="#companion-cubs">Juveniles as companions</a>).</li>
</ul>
<p>Companions follow you, hunt and fight with you, eat with you and carry a name other players see above them. They count as pack mates nearby for <a href="#quests">quests</a> and help to hold <a href="#territory">territories</a>. The pack menu lists them as "NPC" among the members; the family book (<kbd>O</kbd>) has its own <em>Companions</em> tab.</p>
<p>When you log out your companions disappear, and they come along again the next time you enter the wild.</p>`,
        },
        {
            id: 'companion-recruit',
            title: { de: 'Wildtiere anwerben', en: 'Recruiting wild animals' },
            tags: { de: 'anwerben vertrauen vertrauensleiste wildtier ruhig', en: 'recruit win over trust bar wild animal calm' },
            de: `<ol>
<li>Such ein <strong>Wildtier deiner eigenen Art</strong> (keine legendären Tiere, keine Begleiter anderer).</li>
<li>Bleib ruhig in seiner Nähe (etwa 12 m): stehen oder langsam gehen. Unter seinem Lebensbalken füllt sich eine blaugrüne <strong>Vertrauensleiste</strong>.</li>
<li>Stillstehen füllt sie derzeit in etwa 45 Sekunden, langsames Gehen halb so schnell.</li>
<li>Ist sie voll, schließt sich das Tier dir an und bekommt einen Namen („… schließt sich dir an“).</li>
</ol>
<div class="hb-warn">Rennen verscheucht das Tier, und das Vertrauen ist weg. Gehst du weg oder wirst zu schnell, sinkt die Leiste wieder. Kämpft oder flieht das Tier gerade, lässt es sich nicht anwerben.</div>
<p>Zwischen zwei angeworbenen Tieren musst du derzeit 10 Minuten warten. Ob du gerade anwerben kannst und wie weit das nächste passende Tier ist, zeigt dir das Familienbuch (<kbd>O</kbd>) im Reiter <em>Begleiter</em>.</p>`,
            en: `<ol>
<li>Find a <strong>wild animal of your own species</strong> (no legendary animals, no companions of others).</li>
<li>Stay calm near it (about 12 m): stand still or walk slowly. A blue-green <strong>trust bar</strong> fills under its health bar.</li>
<li>Standing still currently fills it in about 45 seconds, walking slowly half as fast.</li>
<li>Once it is full, the animal joins you and gets a name ("… joins you").</li>
</ol>
<div class="hb-warn">Running scares the animal away and the trust is gone. If you walk off or move too fast, the bar drops again. An animal that is fighting or fleeing cannot be won over.</div>
<p>Between two recruited animals you currently have to wait 10 minutes. The family book (<kbd>O</kbd>), tab <em>Companions</em>, shows whether you can recruit right now and how far the nearest suitable animal is.</p>`,
        },
        {
            id: 'companion-limits',
            title: { de: 'Wie viele Begleiter?', en: 'How many companions?' },
            tags: { de: 'grenze anzahl alpha einzelgänger rudel voll', en: 'limit number alpha loner pack full' },
            de: `<table class="hb-table">
<thead><tr><th>Du bist …</th><th>Begleiter</th></tr></thead>
<tbody>
<tr><td>ohne Rudel</td><td>1 – angeworben oder eigenes Jungtier</td></tr>
<tr><td>im Rudel (unter dem Alpha)</td><td>1 eigenes Jungtier; anwerben darfst du nicht</td></tr>
<tr><td>Alpha</td><td>bis zu 4; der Alpha wirbt Tiere für das ganze Rudel an</td></tr>
</tbody>
</table>
<p>Im Rudel gilt außerdem: Spieler und Begleiter zusammen nie mehr als die <a href="#pack-founding">Rudelgröße</a>. Tritt ein Spieler einem vollen Rudel bei, geht der Begleiter, der am längsten dabei ist („… geht – das Rudel ist voll“).</p>`,
            en: `<table class="hb-table">
<thead><tr><th>You are …</th><th>Companions</th></tr></thead>
<tbody>
<tr><td>without a pack</td><td>1 – recruited or an own juvenile</td></tr>
<tr><td>in a pack (below the alpha)</td><td>1 own juvenile; you may not recruit</td></tr>
<tr><td>alpha</td><td>up to 4; the alpha recruits animals for the whole pack</td></tr>
</tbody>
</table>
<p>In a pack, players and companions together never exceed the <a href="#pack-founding">pack size</a>. When a player joins a full pack, the companion that has been there longest leaves ("… leaves - the pack is full").</p>`,
        },
        {
            id: 'companion-orders',
            title: { de: 'Befehle: H, I, C, Y', en: 'Orders: H, I, C, Y' },
            tags: { de: 'befehl folgen bleiben zurückrufen stopp angreifen tasten', en: 'order follow stay recall stop attack keys' },
            de: `<table class="hb-table">
<thead><tr><th>Taste</th><th>Befehl</th></tr></thead>
<tbody>
<tr><td><kbd>H</kbd></td><td><strong>Folgen / Bleiben</strong> umschalten. Bleibende Begleiter warten, bis du sehr weit weg bist (rund 250 m) – dann folgen sie wieder.</td></tr>
<tr><td><kbd>I</kbd></td><td><strong>Zurückrufen:</strong> Alle rennen sofort zu dir, auch aus „bleiben“. Sind sie sehr weit weg oder stecken fest, werden sie hinter dich gesetzt.</td></tr>
<tr><td><kbd>C</kbd></td><td><strong>Stopp:</strong> Kampf, Verfolgung und Fressen abbrechen und wieder folgen.</td></tr>
<tr><td><kbd>Y</kbd></td><td><strong>Angreifen:</strong> Alle Begleiter greifen das Tier an, das du ansiehst (Bildschirmmitte, bis etwa 40 m, in Sicht) – sonst das nächste Tier vor dir, das dich angreift.</td></tr>
</tbody>
</table>
<p>Nach <kbd>I</kbd> oder <kbd>C</kbd> suchen sie derzeit 20 Sekunden lang weder Futter noch Kämpfe von sich aus.</p>
<p>Beim Angriff auf Spielertiere gelten dieselben Regeln wie für deinen eigenen Angriff: keine Rudelmitglieder oder Verbündeten, niemand unter Spawn- oder Neulingsschutz, und Begleiter von Pflanzenfressern greifen keine Spieler an (siehe <a href="#combat">Kampf</a>). Begleiter kämpfen nicht gegeneinander.</p>
<p>Alle Tasten lassen sich unter <em>Einstellungen → Tastenbelegung → RedM</em> ändern.</p>`,
            en: `<table class="hb-table">
<thead><tr><th>Key</th><th>Order</th></tr></thead>
<tbody>
<tr><td><kbd>H</kbd></td><td>Toggle <strong>follow / stay</strong>. Staying companions wait until you are very far away (around 250 m) – then they follow again.</td></tr>
<tr><td><kbd>I</kbd></td><td><strong>Recall:</strong> all run to you at once, also from "stay". If they are very far away or stuck, they are placed behind you.</td></tr>
<tr><td><kbd>C</kbd></td><td><strong>Stop:</strong> break off fighting, chasing and eating and follow again.</td></tr>
<tr><td><kbd>Y</kbd></td><td><strong>Attack:</strong> all companions attack the animal you look at (centre of the screen, up to about 40 m, in sight) – otherwise the nearest animal in front of you that attacks you.</td></tr>
</tbody>
</table>
<p>After <kbd>I</kbd> or <kbd>C</kbd> they currently neither look for food nor join fights on their own for 20 seconds.</p>
<p>Attacks on player animals follow the same rules as your own attack: no pack mates or allies, nobody under spawn or newcomer protection, and companions of plant eaters do not attack players (see <a href="#combat">Combat</a>). Companions do not fight each other.</p>
<p>All keys can be changed under <em>Settings → Key Bindings → RedM</em>.</p>`,
        },
        {
            id: 'companion-hunting',
            title: { de: 'Jagen und Kämpfen', en: 'Hunting and fighting' },
            tags: { de: 'jagen kämpfen beißen verteidigen beute kill', en: 'hunt fight bite defend prey kill' },
            de: `<ul>
<li>Begleiter greifen an, was du triffst, und verteidigen dich gegen Tiere, die mit dir kämpfen (im Umkreis von etwa 20 m).</li>
<li>Ihre Bisse richten je nach Art unterschiedlich viel Schaden an – Bären und Alligatoren am meisten, Kleintiere am wenigsten. Jungtiere beißen nur halb so stark.</li>
<li>Erlegt ein Begleiter ein Tier, zählt das wie <strong>dein eigener Kill</strong>: Beute-EP, Statistik, Quests.</li>
<li>Begleiter heilen mit der Zeit von selbst – nur nicht im Kampf, kurz nach einem Treffer und wenn sie hungern.</li>
</ul>
<div class="hb-warn">Stirbt ein Begleiter, ist er fort („… ist gestorben“). Stirbt dein Tier, verlassen dich auch deine Begleiter.</div>`,
            en: `<ul>
<li>Companions attack what you hit and defend you against animals that fight you (within about 20 m).</li>
<li>Their bites deal different damage depending on the species – bears and alligators the most, small animals the least. Juveniles bite only half as hard.</li>
<li>When a companion kills an animal, it counts like <strong>your own kill</strong>: prey XP, statistics, quests.</li>
<li>Companions heal over time on their own – except while fighting, shortly after a hit and while starving.</li>
</ul>
<div class="hb-warn">When a companion dies, it is gone ("… has died"). When your animal dies, your companions leave you too.</div>`,
        },
        {
            id: 'companion-care',
            title: { de: 'Hunger und Pflege', en: 'Hunger and care' },
            tags: { de: 'hunger füttern fressen pflege davonziehen', en: 'hunger feed eat care leave' },
            de: `<p>Begleiter werden hungrig, solange du online bist (derzeit von satt bis leer in etwa 3 Stunden).</p>
<ul>
<li><strong>Sie fressen mit, wenn du frisst</strong> – jeder Bissen von dir füttert alle deine Begleiter mit.</li>
<li>Ist ihr Hunger unter 60 %, suchen sie selbst Futter: Raubtiere fressen an einem Kadaver in der Nähe oder jagen kleine Beute, Pflanzenfresser grasen.</li>
<li>Wird der Hunger knapp, warnt dich das Spiel („… hat Hunger – friss etwas, es frisst mit“).</li>
</ul>
<div class="hb-warn">Bei leerem Hunger zieht ein Begleiter davon und ist weg. Halte also selbst regelmäßig Mahlzeiten (siehe <a href="#food">Nahrung</a>).</div>
<p>Im Reiter <em>Begleiter</em> des Familienbuchs siehst du jeden Begleiter mit Herkunft und Hunger. Mit <em>Entlassen</em> schickst du einen Begleiter eigene Wege.</p>`,
            en: `<p>Companions get hungry while you are online (currently from full to empty in about 3 hours).</p>
<ul>
<li><strong>They eat with you when you eat</strong> – every bite you take feeds all your companions too.</li>
<li>When their hunger is below 60 %, they look for food themselves: predators eat from a carcass nearby or hunt small prey, plant eaters graze.</li>
<li>When hunger gets low, the game warns you ("… is hungry - eat something, it eats with you").</li>
</ul>
<div class="hb-warn">With an empty belly a companion wanders off and is gone. So eat regular meals yourself (see <a href="#food">Food</a>).</div>
<p>The <em>Companions</em> tab of the family book lists every companion with its origin and hunger. <em>Release</em> sends a companion its own way.</p>`,
        },
        {
            id: 'companion-cubs',
            title: { de: 'Jungtiere als Begleiter', en: 'Juveniles as companions' },
            tags: { de: 'jungtier aufziehen mitnehmen wachsen', en: 'juvenile raise take along grow' },
            de: `<p>Eltern können ein wartendes Jungtier ihres Wurfs im Familienbuch (<kbd>O</kbd>, Reiter <em>Würfe</em>) mit <em>Als Begleiter aufziehen</em> mitnehmen.</p>
<ul>
<li>Es wächst in derzeit <strong>3 echten Tagen</strong> auf volle Größe heran. Erst dann beißt es voll zu, zählt in Revieren und kommt als Paarungspartner infrage.</li>
<li>Es bleibt <strong>übernehmbar</strong>: Übernimmt es ein Spieler, verlässt es dich, und der neue Charakter beginnt genau dort, wo dein Begleiter stand.</li>
<li>Stirbt es als Begleiter, ist es tot – auch für den Wurf.</li>
</ul>`,
            en: `<p>Parents can take a waiting juvenile of their litter along with <em>Raise as companion</em> in the family book (<kbd>O</kbd>, tab <em>Litters</em>).</p>
<ul>
<li>It grows to full size in currently <strong>3 real days</strong>. Only then does it bite at full strength, count in territories and qualify as a pairing partner.</li>
<li>It stays <strong>open to be taken over</strong>: if a player takes it over, it leaves you, and the new character starts exactly where your companion stood.</li>
<li>If it dies as a companion, it is dead – for the litter too.</li>
</ul>`,
        },
        {
            id: 'companion-territory',
            title: { de: 'Begleiter im Revier', en: 'Companions in the territory' },
            tags: { de: 'revier streifen halten anwesenheit', en: 'territory roam hold presence' },
            de: `<ul>
<li>Stehst du im eigenen Revier, streifen Begleiter im Modus „folgen“ durch das Revier und fressen dort. Verlässt du es, folgen sie dir wieder.</li>
<li>Ein ausgewachsener Begleiter zählt beim Einnehmen und Halten eines Reviers als <strong>halbes Tier</strong> – aber nur, solange ein Spieler deiner Gruppe im Revier ist. Begleiter allein nehmen und halten nichts.</li>
</ul>
<p>Mehr unter <a href="#territory-claiming">Ein freies Revier einnehmen</a>.</p>`,
            en: `<ul>
<li>When you stand in your own territory, companions in "follow" mode roam the territory and feed there. When you leave it, they follow you again.</li>
<li>A grown companion counts as <strong>half an animal</strong> when taking and holding a territory – but only while a player of your group is in the territory. Companions alone take and hold nothing.</li>
</ul>
<p>More under <a href="#territory-claiming">Taking a free territory</a>.</p>`,
        },
    ],
});
