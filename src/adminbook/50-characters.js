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
            title: { de: 'Reiter „Charaktere“', en: 'Tab "Characters"' },
            tags: { de: 'charaktere tiere suchen lebend tot alle accounts' },
            de: `<p>Alle Tiere aller Accounts, lebend und gestorben – Suche nach Tiername, Spielername oder License. Beim Spieler führt der Knopf „Charaktere“ direkt zu seinen Tieren.</p>`,
        },
        {
            id: 'a-force-rename',
            level: 2,
            rights: ['forceRename'],
            title: { de: 'Neuen Namen verlangen', en: 'Demand a new name' },
            tags: { de: 'neuer name umbenennen verlangen unpassend name' },
            de: `<p>Bei einem lebenden Tier mit unpassendem Namen: Grund angeben. Das Tier lässt sich erst wieder spielen, wenn der Spieler es umbenannt hat (kostenlos, im Auswahlbildschirm, mit deinem Grund als Hinweis). Wird es gerade gespielt, bekommt der Spieler eine Nachricht und kommt nach 10 Sekunden zur Auswahl. Der neue Name läuft durch die normale Namensprüfung.</p>`,
        },
        {
            id: 'a-snapshots',
            level: 3,
            rights: ['snapshots'],
            title: { de: 'Schnappschüsse', en: 'Snapshots' },
            tags: { de: 'schnappschuss backup zurücksetzen sichern' },
            de: `<p>Beim lebenden Tier die automatischen Sicherungen (alle 5 Minuten beim Spielen, die letzten 24) mit Zeit, Stufe und Alter. <strong>Jetzt sichern</strong> legt einen an, <strong>Zurücksetzen</strong> (zweimal drücken) setzt das Tier auf diesen Stand zurück – etwa nach einem Bug, der Fortschritt gekostet hat.</p>`,
        },
        {
            id: 'a-retire',
            level: 3,
            rights: ['retireCharacter'],
            title: { de: 'Tier herausnehmen', en: 'Retire an animal' },
            tags: { de: 'herausnehmen eigene wege land verlassen platz frei' },
            de: `<p>Beim lebenden Tier mit Ursache „ist seiner eigenen Wege gegangen“ oder „hat das Land verlassen“: es zählt wie ein Tod (Platz frei, Rudel, Revier, Begleiter, Gedenkstein wie nach einem Tod). Nur, solange das Tier nicht gespielt wird. Wiederbeleben holt es zurück.</p>`,
        },
        {
            id: 'a-revive-dead',
            level: 3,
            rights: ['reviveDead'],
            title: { de: 'Totes Tier zurückholen', en: 'Bring a dead animal back' },
            tags: { de: 'tot wiederbeleben bug cheater zurückholen platz über limit' },
            de: `<p>Für Tode durch Bugs oder Cheater: Das Tier bekommt seinen Platz (oder den ersten freien), volle Gesundheit, frische Bedürfnisse, sein Rudel samt Rang, Revier und Begleiter zurück – sofern sie inzwischen niemand anderes hat. Das Menü zeigt, was zurückkam.</p>
<p>Sind alle Plätze belegt, fragt das Menü nach; mit Bestätigung kommt das Tier auf einen Platz über dem Limit (der Spieler hat dann mehr Tiere als Plätze, bis eines stirbt).</p>`,
        },
        {
            id: 'a-transfer',
            level: 5,
            rights: ['transferAccount'],
            title: { de: 'Account übertragen', en: 'Transfer an account' },
            tags: { de: 'account übertragen transfer neuer account license ampel risiko' },
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
        },
    ],
};
