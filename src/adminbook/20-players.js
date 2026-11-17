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
            tags: { de: 'spielerliste suche offline detail übersicht tier account moderation neu verdächtig' },
            de: `<p>Reiter <em>Spieler</em>: Name, Charakter, Art, Level, Gesundheit und ob das Tier am Boden liegt. Rot mit ⚑ = Verdachts-Flag, Chip „neu“ = Neuling. Ab zwei Buchstaben in der Suche erscheinen darunter auch passende <strong>Offline-Konten</strong>.</p>
<p>Ein Klick öffnet das <strong>Spieler-Detail</strong> mit inneren Reitern:</p>
<dl>
<dt>Übersicht</dt><dd>Rolle, Spielzeit, Mentorschaft, Server-ID, Verdachts-Flag und die Spielerakte in Kurzform.</dd>
<dt>Tier</dt><dd>Charakter, Art, Stufe, Leben; Bedürfnis setzen, XP geben, Art wechseln (nur online, je mit Recht).</dd>
<dt>Account</dt><dd>Charakterplätze, Umbenennungen und Fellwechsel, Sondertitel, Notizen, Account übertragen.</dd>
<dt>Moderation</dt><dd>Oben „Bisher“ (Kurz-Akte), darunter <em>Zum Spieler</em>, <em>Hilfe</em>, <em>Kontakt &amp; Akte</em> und <em>Maßnahme</em>; bei einem gebannten Konto „Entbannen“.</dd>
</dl>
<p>Ein Reiter ohne nutzbaren Inhalt wird ausgeblendet.</p>`,
        },
        {
            id: 'a-goto',
            level: 2,
            rights: ['gotoPlayer', 'bring', 'spectate'],
            anyRight: true,
            title: { de: 'Hingehen, Herholen, Zuschauen', en: 'Go to, bring, spectate' },
            tags: { de: 'hingehen teleport herholen bring zuschauen spectate beobachten' },
            de: `<ul>
<li><strong>Hingehen</strong> (<code>gotoPlayer</code>): du landest neben dem Tier des Spielers.</li>
<li><strong>Herholen</strong> (<code>bring</code>): das Tier des Spielers landet vor dir.</li>
<li><strong>Zuschauen</strong> (<code>spectate</code>): die Kamera folgt dem Spieler. Dein eigenes Tier ist dabei versteckt und folgt unsichtbar unter dem Boden; deine Bedürfnisse pausieren. Oben rechts zeigt eine Leiste Spieler, Tier, Leben, Bedürfnisse, Zustand, Tempo, Rudel, Revier, Uhrzeit und Wetter – plus die Kurz-Akte. Beenden über die Leiste im Admin-Menü.</li>
</ul>
<p>Nach jedem Teleport bist du kurz unverwundbar; die Bewegungsprüfung meldet ihn nicht.</p>
<div class="hb-tip"><p>Im Web gibt es diese drei Aktionen nicht – sie brauchen dich in der Spielwelt.</p></div>`,
        },
        {
            id: 'a-help',
            level: 2,
            rights: ['heal', 'revive', 'unstuck', 'resetCooldowns'],
            anyRight: true,
            title: { de: 'Heilen, Wiederbeleben, Befreien, Wartezeiten', en: 'Heal, revive, unstuck, waiting times' },
            tags: { de: 'heilen wiederbeleben revive befreien unstuck feststecken wartezeiten sperren zurücksetzen cooldown' },
            de: `<dl>
<dt>Heilen (<code>heal</code>)</dt><dd>Volles Leben, Blutung gestoppt, Bedürfnisse voll. Auch txAdmins „Heal“ heilt so.</dd>
<dt>Wiederbeleben (<code>revive</code>)</dt><dd>Nur bei einem Tier am Boden: es steht wieder auf.</dd>
<dt>Befreien (<code>unstuck</code>)</dt><dd>Ein feststeckendes Tier kommt an die nächste sichere Stelle.</dd>
<dt>Sperren zurücksetzen (<code>resetCooldowns</code>, ab Admin)</dt><dd>Hebt alle Wartezeiten des Tiers und seines Rudels auf: Paarung, Anwerben, Duell, Markieren, Angriffe und Fähigkeiten, legendäres Tier.</dd>
</dl>`,
        },
        {
            id: 'a-contact',
            level: 2,
            rights: ['message', 'freeze', 'toSelection'],
            anyRight: true,
            title: { de: 'Nachricht, Einfrieren, Zur Auswahl', en: 'Message, freeze, to selection' },
            tags: { de: 'nachricht privat einfrieren freeze freigeben zur auswahl charakterauswahl' },
            de: `<ul>
<li><strong>Nachricht</strong> (<code>message</code>): ein Hinweis nur beim Spieler auf dem Bildschirm. Steht im Aktionsprotokoll, nicht im Verlauf des Spielers.</li>
<li><strong>Einfrieren</strong> (<code>freeze</code>): das Tier steht still, bis du „Freigeben“ drückst – auch nach Teleport oder Tierwechsel.</li>
<li><strong>Zur Auswahl</strong> (<code>toSelection</code>): speichert das Tier, legt es ab und öffnet die Charakterauswahl. Zweimal drücken.</li>
</ul>
<p>Einfrieren und Zur Auswahl nur bei Spielern unter deiner Stufe.</p>`,
        },
        {
            id: 'a-notes',
            level: 2,
            rights: ['notes'],
            title: { de: 'Notizen zum Spieler', en: 'Notes on a player' },
            tags: { de: 'notizen notiz team account vermerk' },
            de: `<p>Im Spieler-Detail (Reiter <em>Account</em>) und in der Spielerakte: kurze Notizen für das Team, je Account, mit Datum und Verfasser – auch bei Offline-Spielern und im Web. Der Spieler sieht sie nie. Löschen fragt nach. Anlegen und Löschen stehen im Protokoll.</p>
<div class="hb-tip"><p>Gute Notizen sind kurz und nachvollziehbar: was war, wann, wer hat es gesehen, was wurde abgesprochen.</p></div>`,
        },
        {
            id: 'a-animal-values',
            level: 3,
            rights: ['setNeed', 'giveXp', 'setSpecies'],
            anyRight: true,
            title: { de: 'Bedürfnis, XP, Art wechseln', en: 'Need, XP, change species' },
            tags: { de: 'bedürfnis hunger durst xp erfahrung art wechseln species' },
            de: `<p>Spieler-Detail → <em>Tier</em> (nur online):</p>
<ul>
<li><strong>Bedürfnis setzen</strong> (<code>setNeed</code>): Hunger, Durst, Ruhe usw. auf einen Wert.</li>
<li><strong>XP geben</strong> (<code>giveXp</code>): höchstens 100 000 je Aktion.</li>
<li><strong>Art wechseln</strong> (<code>setSpecies</code>): das Tier wird zu einer anderen Art. Nur für Korrekturen und Tests.</li>
</ul>`,
        },
        {
            id: 'a-account',
            level: 3,
            rights: ['slots', 'tokens', 'titles'],
            anyRight: true,
            title: { de: 'Plätze, Umbenennungen, Fellwechsel, Sondertitel', en: 'Slots, renames, fur changes, special titles' },
            tags: { de: 'charakterplätze slots token umbenennen fellwechsel sondertitel titel' },
            de: `<p>Spieler-Detail → <em>Account</em>:</p>
<ul>
<li><strong>Charakterplätze</strong> (<code>slots</code>): mehr oder weniger Plätze für diesen Spieler – nie unter den höchsten belegten Platz.</li>
<li><strong>Umbenennungen und Fellwechsel</strong> (<code>tokens</code>): gibt dem Account Gutscheine dafür.</li>
<li><strong>Sondertitel</strong> (<code>titles</code>): Titel, die man im Spiel nicht erspielen kann (z. B. Unterstützer, Tester der ersten Stunde, Helfer der Wildnis, Gründer, Kind aller Monde). Alle Tiere des Accounts dürfen sie tragen.</li>
</ul>`,
        },
    ],
};
