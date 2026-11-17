export default {
    id: 'a-characters',
    order: 50,
    icon: 'species',
    title: { de: 'Charaktere', en: 'Characters' },
    sections: [
        {
            id: 'a-char-tab',
            level: 2,
            rights: ['characters'],
            title: { de: 'Reiter „Charaktere“', en: 'The “Characters” tab' },
            tags: { de: 'charaktere tiere suchen lebend tot alle accounts', en: 'characters animals search alive dead all accounts' },
            de: `<p>Alle Tiere aller Accounts, lebend und gestorben – Suche nach Tiername, Spielername oder License. Beim Spieler führt der Knopf „Charaktere“ direkt zu seinen Tieren.</p>`,
            en: `<p>All animals of all accounts, alive and dead – search by animal name, player name or license. On a player, the “Characters” button takes you straight to their animals.</p>`,
        },
        {
            id: 'a-force-rename',
            level: 2,
            rights: ['forceRename'],
            title: { de: 'Neuen Namen verlangen', en: 'Demand a new name' },
            tags: { de: 'neuer name umbenennen verlangen unpassend name', en: 'new name rename demand inappropriate name' },
            de: `<p>Bei einem lebenden Tier mit unpassendem Namen: Grund angeben. Das Tier lässt sich erst wieder spielen, wenn der Spieler es umbenannt hat (kostenlos, im Auswahlbildschirm, mit deinem Grund als Hinweis). Wird es gerade gespielt, bekommt der Spieler eine Nachricht und kommt nach 10 Sekunden zur Auswahl. Der neue Name läuft durch die normale Namensprüfung.</p>`,
            en: `<p>For a living animal with an inappropriate name: enter a reason. The animal can only be played again once the player has renamed it (free of charge, on the selection screen, with your reason shown as a hint). If it is being played right now, the player gets a message and is sent to the selection after 10 seconds. The new name goes through the normal name check.</p>`,
        },
        {
            id: 'a-snapshots',
            level: 3,
            rights: ['snapshots'],
            title: { de: 'Schnappschüsse', en: 'Snapshots' },
            tags: { de: 'schnappschuss backup zurücksetzen sichern', en: 'snapshot backup restore set back save' },
            de: `<p>Beim lebenden Tier die automatischen Sicherungen (alle 5 Minuten beim Spielen, die letzten 24) mit Zeit, Stufe und Alter. <strong>Jetzt sichern</strong> legt einen an, <strong>Zurücksetzen</strong> (zweimal drücken) setzt das Tier auf diesen Stand zurück – etwa nach einem Bug, der Fortschritt gekostet hat.</p>`,
            en: `<p>On a living animal: the automatic backups (every 5 minutes while playing, the last 24) with time, level and age. <strong>Save now</strong> creates one, <strong>Set back</strong> (press twice) sets the animal back to that state – for example after a bug that cost progress.</p>`,
        },
        {
            id: 'a-retire',
            level: 3,
            rights: ['retireCharacter'],
            title: { de: 'Tier herausnehmen', en: 'Retire an animal' },
            tags: { de: 'herausnehmen eigene wege land verlassen platz frei', en: 'take out retire own way left the land free slot' },
            de: `<p>Beim lebenden Tier mit Ursache „ist seiner eigenen Wege gegangen“ oder „hat das Land verlassen“: es zählt wie ein Tod (Platz frei, Rudel, Revier, Begleiter, Gedenkstein wie nach einem Tod). Nur, solange das Tier nicht gespielt wird. Wiederbeleben holt es zurück.</p>`,
            en: `<p>On a living animal, with the cause “went its own way” or “left the land”: it counts as a death (slot freed; pack, territory, companions and memorial stone as after a death). Only while the animal is not being played. Reviving brings it back.</p>`,
        },
        {
            id: 'a-revive-dead',
            level: 3,
            rights: ['reviveDead'],
            title: { de: 'Totes Tier zurückholen', en: 'Bring a dead animal back' },
            tags: { de: 'tot wiederbeleben bug cheater zurückholen platz über limit', en: 'dead revive bug cheater bring back slot over limit' },
            de: `<p>Für Tode durch Bugs oder Cheater: Das Tier bekommt seinen Platz (oder den ersten freien), volle Gesundheit, frische Bedürfnisse, sein Rudel samt Rang, Revier und Begleiter zurück – sofern sie inzwischen niemand anderes hat. Das Menü zeigt, was zurückkam.</p>
<p>Sind alle Plätze belegt, fragt das Menü nach; mit Bestätigung kommt das Tier auf einen Platz über dem Limit (der Spieler hat dann mehr Tiere als Plätze, bis eines stirbt).</p>`,
            en: `<p>For deaths caused by bugs or cheaters: the animal gets back its slot (or the first free one), full health, fresh needs, its pack including rank, its territory and companions – as long as nobody else has them by now. The menu shows what came back.</p>
<p>If all slots are taken, the menu asks first; once you confirm, the animal goes into a slot above the limit (the player then has more animals than slots until one dies).</p>`,
        },
        {
            id: 'a-transfer',
            level: 5,
            rights: ['transferAccount'],
            title: { de: 'Account übertragen', en: 'Transfer an account' },
            tags: { de: 'account übertragen transfer neuer account license ampel risiko', en: 'account transfer new account license traffic light risk' },
            de: `<p>Wenn ein Spieler einen neuen Account nutzt (z. B. neuer PC oder neues Konto), zieht diese Funktion alles mit: Tiere, Gutscheine, Plätze, Felle, Titel, Errungenschaften, Statistik, Notizen, Verlauf. Admin-Rechte gehen nicht mit. Das Recht hat keine Rolle – nur als Einzelrecht.</p>
<ol>
<li>Offline-Spieler öffnen → <em>Account</em> → „Account übertragen …“.</li>
<li>Rechts die License des neuen Accounts eingeben, <strong>Prüfen</strong>.</li>
<li>Vergleich lesen: je Bereich „Alter Account“, „Neuer Account jetzt“, „Neuer Account danach“.</li>
<li>Die <strong>Ampel</strong> bewerten: gemeinsame Geräte, gleicher Discord, gleicher Anbieter/Land sprechen für dieselbe Person; andere Länder, gleichzeitig im Spiel oder frühere Übertragungen dagegen. Rot braucht einen zusätzlichen Haken.</li>
<li>Haken „gleiche Person“, neue License noch einmal eintippen, <strong>Übertragen</strong> zweimal drücken.</li>
</ol>
<p>Voraussetzungen: beide offline, der neue Account war einmal im Spiel und hat kein lebendes Tier. Hat er schon über 30 Minuten gespielt, ist es „nicht möglich“ – außer mit „Trotzdem übertragen“. Danach ist der alte Account dauerhaft gebannt („Account übertragen auf …“).</p>
<div class="hb-warn"><p>Die Ampel zeigt personenbezogene Daten (IP-Bereich, Anbieter, Land, Geräte-Kennungen). Nur für diesen Zweck nutzen und nicht weitergeben.</p></div>`,
            en: `<p>When a player uses a new account (e.g. a new PC or a new login), this function moves everything over: animals, vouchers, slots, furs, titles, achievements, statistics, notes, history. Admin rights do not move. No role has this right – it is only available as a single right.</p>
<ol>
<li>Open the offline player → <em>Account</em> → “Transfer account …”.</li>
<li>On the right, enter the license of the new account and press <strong>Check</strong>.</li>
<li>Read the comparison: for each area “Old account”, “New account now”, “New account afterwards”.</li>
<li>Assess the <strong>traffic light</strong>: shared devices, the same Discord, the same provider/country suggest the same person; different countries, being in game at the same time or earlier transfers suggest otherwise. Red needs an extra tick.</li>
<li>Tick “same person”, type the new license again, press <strong>Transfer</strong> twice.</li>
</ol>
<p>Requirements: both are offline, the new account has been in game once and has no living animal. If it has already played for more than 30 minutes, the transfer is “not possible” – unless you use “Transfer anyway”. Afterwards the old account is banned permanently (“Account transferred to …”).</p>
<div class="hb-warn"><p>The traffic light shows personal data (IP range, provider, country, device IDs). Only use it for this purpose and do not pass it on.</p></div>`,
        },
    ],
};
