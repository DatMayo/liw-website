export default {
    id: 'a-players',
    order: 20,
    icon: 'person',
    title: { de: 'Spieler betreuen', en: 'Looking after players' },
    sections: [
        {
            id: 'a-player-list',
            level: 2,
            rights: ['menu'],
            title: { de: 'Spielerliste und Spieler-Detail', en: 'Player list and player detail' },
            tags: { de: 'spielerliste suche offline detail übersicht tier account moderation neu verdächtig', en: 'player list search offline detail overview animal account moderation new suspicious' },
            de: `<p>Reiter <em>Spieler</em>: Name, Charakter, Art, Level, Gesundheit und ob das Tier am Boden liegt. Rot mit ⚑ = Verdachts-Flag, Chip „neu“ = Neuling. Ab zwei Buchstaben in der Suche erscheinen darunter auch passende <strong>Offline-Konten</strong>.</p>
<p>Ein Klick öffnet das <strong>Spieler-Detail</strong> mit inneren Reitern:</p>
<dl>
<dt>Übersicht</dt><dd>Rolle, Spielzeit, Mentorschaft, Server-ID, Verdachts-Flag und die Spielerakte in Kurzform.</dd>
<dt>Tier</dt><dd>Charakter, Art, Stufe, Leben; Bedürfnis setzen, XP geben, Art wechseln (nur online, je mit Recht).</dd>
<dt>Account</dt><dd>Charakterplätze, Umbenennungen und Fellwechsel, Sondertitel, Notizen, Account übertragen.</dd>
<dt>Moderation</dt><dd>Oben „Bisher“ (Kurz-Akte), darunter <em>Zum Spieler</em>, <em>Hilfe</em>, <em>Kontakt &amp; Akte</em> und <em>Maßnahme</em>; bei einem gebannten Konto „Entbannen“.</dd>
</dl>
<p>Ein Reiter ohne nutzbaren Inhalt wird ausgeblendet.</p>`,
            en: `<p><em>Players</em> tab: name, character, species, level, health and whether the animal is downed. Red with ⚑ = suspicion flag, chip “new” = newcomer. From two letters in the search, matching <strong>offline accounts</strong> also appear below.</p>
<p>A click opens the <strong>player detail</strong> with inner tabs:</p>
<dl>
<dt>Overview</dt><dd>Role, playtime, mentorship, server ID, suspicion flag and the player file in short form.</dd>
<dt>Animal</dt><dd>Character, species, level, health; set need, give XP, change species (online only, each with its right).</dd>
<dt>Account</dt><dd>Character slots, renames and fur changes, special titles, notes, transfer account.</dd>
<dt>Moderation</dt><dd>At the top “So far” (short record), below it <em>To the player</em>, <em>Help</em>, <em>Contact &amp; file</em> and <em>Measure</em>; for a banned account “Unban”.</dd>
</dl>
<p>A tab without usable content is hidden.</p>`,
        },
        {
            id: 'a-goto',
            level: 2,
            rights: ['gotoPlayer', 'bring', 'spectate'],
            anyRight: true,
            title: { de: 'Hingehen, Herholen, Zuschauen', en: 'Go to, bring, spectate' },
            tags: { de: 'hingehen teleport herholen bring zuschauen spectate beobachten', en: 'go to teleport bring spectate watch observe' },
            de: `<ul>
<li><strong>Hingehen</strong> (<code>gotoPlayer</code>): du landest neben dem Tier des Spielers.</li>
<li><strong>Herholen</strong> (<code>bring</code>): das Tier des Spielers landet vor dir.</li>
<li><strong>Zuschauen</strong> (<code>spectate</code>): die Kamera folgt dem Spieler. Dein eigenes Tier ist dabei versteckt und folgt unsichtbar unter dem Boden; deine Bedürfnisse pausieren. Oben rechts zeigt eine Leiste Spieler, Tier, Leben, Bedürfnisse, Zustand, Tempo, Rudel, Revier, Uhrzeit und Wetter – plus die Kurz-Akte. Beenden über die Leiste im Admin-Menü.</li>
</ul>
<p>Nach jedem Teleport bist du kurz unverwundbar; die Bewegungsprüfung meldet ihn nicht.</p>
<div class="hb-tip"><p>Im Web gibt es diese drei Aktionen nicht – sie brauchen dich in der Spielwelt.</p></div>`,
            en: `<ul>
<li><strong>Go to</strong> (<code>gotoPlayer</code>): you land next to the player's animal.</li>
<li><strong>Bring</strong> (<code>bring</code>): the player's animal lands in front of you.</li>
<li><strong>Spectate</strong> (<code>spectate</code>): the camera follows the player. Your own animal is hidden meanwhile and follows invisibly under the ground; your needs are paused. At the top right, a bar shows player, animal, health, needs, condition, speed, pack, territory, time of day and weather – plus the short record. End it with the bar in the admin menu.</li>
</ul>
<p>After each teleport you are invulnerable for a short time; the movement check does not report it.</p>
<div class="hb-tip"><p>These three actions are not available on the web – they need you in the game world.</p></div>`,
        },
        {
            id: 'a-help',
            level: 2,
            rights: ['heal', 'revive', 'unstuck', 'resetCooldowns'],
            anyRight: true,
            title: { de: 'Heilen, Wiederbeleben, Befreien, Wartezeiten', en: 'Heal, revive, unstuck, waiting times' },
            tags: { de: 'heilen wiederbeleben revive befreien unstuck feststecken wartezeiten sperren zurücksetzen cooldown', en: 'heal revive unstuck stuck waiting times reset cooldown' },
            de: `<dl>
<dt>Heilen (<code>heal</code>)</dt><dd>Volles Leben, Blutung gestoppt, Bedürfnisse voll. Auch txAdmins „Heal“ heilt so.</dd>
<dt>Wiederbeleben (<code>revive</code>)</dt><dd>Nur bei einem Tier am Boden: es steht wieder auf.</dd>
<dt>Befreien (<code>unstuck</code>)</dt><dd>Ein feststeckendes Tier kommt an die nächste sichere Stelle.</dd>
<dt>Sperren zurücksetzen (<code>resetCooldowns</code>, ab Admin)</dt><dd>Hebt alle Wartezeiten des Tiers und seines Rudels auf: Paarung, Anwerben, Duell, Markieren, Angriffe und Fähigkeiten, legendäres Tier.</dd>
</dl>`,
            en: `<dl>
<dt>Heal (<code>heal</code>)</dt><dd>Full health, bleeding stopped, needs full. txAdmin's “Heal” heals the same way.</dd>
<dt>Revive (<code>revive</code>)</dt><dd>Only for a downed animal: it gets back up.</dd>
<dt>Unstuck (<code>unstuck</code>)</dt><dd>A stuck animal is moved to the nearest safe spot.</dd>
<dt>Reset waiting times (<code>resetCooldowns</code>, from Admin)</dt><dd>Removes all waiting times of the animal and its pack: mating, recruiting, duel, marking, attacks and abilities, legendary animal.</dd>
</dl>`,
        },
        {
            id: 'a-contact',
            level: 2,
            rights: ['message', 'freeze', 'toSelection'],
            anyRight: true,
            title: { de: 'Nachricht, Einfrieren, Zur Auswahl', en: 'Message, freeze, to selection' },
            tags: { de: 'nachricht privat einfrieren freeze freigeben zur auswahl charakterauswahl', en: 'message private freeze release to selection character selection' },
            de: `<ul>
<li><strong>Nachricht</strong> (<code>message</code>): ein Hinweis nur beim Spieler auf dem Bildschirm. Steht im Aktionsprotokoll, nicht im Verlauf des Spielers.</li>
<li><strong>Einfrieren</strong> (<code>freeze</code>): das Tier steht still, bis du „Freigeben“ drückst – auch nach Teleport oder Tierwechsel.</li>
<li><strong>Zur Auswahl</strong> (<code>toSelection</code>): speichert das Tier, legt es ab und öffnet die Charakterauswahl. Zweimal drücken.</li>
</ul>
<p>Einfrieren und Zur Auswahl nur bei Spielern unter deiner Stufe.</p>`,
            en: `<ul>
<li><strong>Message</strong> (<code>message</code>): a notice shown only on the player's screen. It is in the action log, not in the player's history.</li>
<li><strong>Freeze</strong> (<code>freeze</code>): the animal stands still until you press “Release” – even after a teleport or a change of animal.</li>
<li><strong>To selection</strong> (<code>toSelection</code>): saves the animal, puts it away and opens the character selection. Press twice.</li>
</ul>
<p>Freeze and to selection only for players below your level.</p>`,
        },
        {
            id: 'a-notes',
            level: 2,
            rights: ['notes'],
            title: { de: 'Notizen zum Spieler', en: 'Notes on a player' },
            tags: { de: 'notizen notiz team account vermerk', en: 'notes note team account remark' },
            de: `<p>Im Spieler-Detail (Reiter <em>Account</em>) und in der Spielerakte: kurze Notizen für das Team, je Account, mit Datum und Verfasser – auch bei Offline-Spielern und im Web. Der Spieler sieht sie nie. Löschen fragt nach. Anlegen und Löschen stehen im Protokoll.</p>
<div class="hb-tip"><p>Gute Notizen sind kurz und nachvollziehbar: was war, wann, wer hat es gesehen, was wurde abgesprochen.</p></div>`,
            en: `<p>In the player detail (<em>Account</em> tab) and in the player file: short notes for the team, per account, with date and author – also for offline players and on the web. The player never sees them. Deleting asks for confirmation. Adding and deleting are in the log.</p>
<div class="hb-tip"><p>Good notes are short and easy to follow: what happened, when, who saw it, what was agreed.</p></div>`,
        },
        {
            id: 'a-animal-values',
            level: 3,
            rights: ['setNeed', 'giveXp', 'setSpecies'],
            anyRight: true,
            title: { de: 'Bedürfnis, XP, Art wechseln', en: 'Need, XP, change species' },
            tags: { de: 'bedürfnis hunger durst xp erfahrung art wechseln species', en: 'need hunger thirst xp experience change species' },
            de: `<p>Spieler-Detail → <em>Tier</em> (nur online):</p>
<ul>
<li><strong>Bedürfnis setzen</strong> (<code>setNeed</code>): Hunger, Durst, Ruhe usw. auf einen Wert.</li>
<li><strong>XP geben</strong> (<code>giveXp</code>): höchstens 100 000 je Aktion.</li>
<li><strong>Art wechseln</strong> (<code>setSpecies</code>): das Tier wird zu einer anderen Art. Nur für Korrekturen und Tests.</li>
</ul>`,
            en: `<p>Player detail → <em>Animal</em> (online only):</p>
<ul>
<li><strong>Set need</strong> (<code>setNeed</code>): hunger, thirst, rest etc. to a value.</li>
<li><strong>Give XP</strong> (<code>giveXp</code>): at most 100 000 per action.</li>
<li><strong>Change species</strong> (<code>setSpecies</code>): the animal becomes a different species. Only for corrections and tests.</li>
</ul>`,
        },
        {
            id: 'a-account',
            level: 3,
            rights: ['slots', 'tokens', 'titles'],
            anyRight: true,
            title: { de: 'Plätze, Umbenennungen, Fellwechsel, Sondertitel', en: 'Slots, renames, fur changes, special titles' },
            tags: { de: 'charakterplätze slots token umbenennen fellwechsel sondertitel titel', en: 'character slots token rename fur change special title titles' },
            de: `<p>Spieler-Detail → <em>Account</em>:</p>
<ul>
<li><strong>Charakterplätze</strong> (<code>slots</code>): mehr oder weniger Plätze für diesen Spieler – nie unter den höchsten belegten Platz.</li>
<li><strong>Umbenennungen und Fellwechsel</strong> (<code>tokens</code>): gibt dem Account Gutscheine dafür.</li>
<li><strong>Sondertitel</strong> (<code>titles</code>): Titel, die man im Spiel nicht erspielen kann (z. B. Unterstützer, Tester der ersten Stunde, Helfer der Wildnis, Gründer, Kind aller Monde). Alle Tiere des Accounts dürfen sie tragen.</li>
</ul>`,
            en: `<p>Player detail → <em>Account</em>:</p>
<ul>
<li><strong>Character slots</strong> (<code>slots</code>): more or fewer slots for this player – never below the highest slot in use.</li>
<li><strong>Renames and fur changes</strong> (<code>tokens</code>): gives the account vouchers for them.</li>
<li><strong>Special titles</strong> (<code>titles</code>): titles you cannot earn in the game (e.g. Supporter, Tester of the first hour, Helper of the wild, Founder, Child of All Moons). All animals of the account may wear them.</li>
</ul>`,
        },
    ],
};
