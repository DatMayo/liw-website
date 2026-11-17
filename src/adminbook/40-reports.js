export default {
    id: 'a-reports',
    order: 40,
    icon: 'flag',
    title: { de: 'Meldungen, Akte, Verdacht', en: 'Reports, records, suspicion' },
    sections: [
        {
            id: 'a-report-flow',
            level: 2,
            rights: ['reports'],
            title: { de: 'Meldungen bearbeiten', en: 'Handling reports' },
            tags: { de: 'meldung report f10 nummer ticket übernehmen schließen notiz' },
            de: `<p>Jeder Spieler kann mit <kbd>F10</kbd> eine Meldung abschicken – ohne Fenster. Er bekommt eine <strong>sechsstellige Nummer</strong>, die er im Discord-Ticket angibt. Der Server speichert dazu jeden Spieler und jedes Tier im Umkreis (Name, Tier, Leben, am Boden, Rudel, Abstand) und die Wege der beteiligten Spieler der letzten Minuten.</p>
<p>Admins online mit dem Recht bekommen eine Meldung. Im Reiter <em>Meldungen</em>:</p>
<ol>
<li>Filter <em>offen / geschlossen / alle</em>, Suche nach Nummer, Name oder License – die Nummer aus dem Ticket führt direkt hin.</li>
<li><strong>Übernehmen</strong>, damit das Team sieht, wer dran ist (Zurückgeben geht jederzeit).</li>
<li>Ansehen: Übersicht, Spieler, Tiere (nach Art zusammengefasst mit nächstem Abstand).</li>
<li><strong>Notiz</strong> schreiben, was du herausgefunden hast.</li>
<li><strong>Schließen</strong> (oder später wieder öffnen).</li>
</ol>
<p>Geschlossene Meldungen werden nach einiger Zeit gelöscht. Auf der Live-Karte gibt es eine Ebene „Meldungen“ mit allen offenen als Raute an ihrem Ort.</p>`,
        },
        {
            id: 'a-report-goto',
            level: 2,
            rights: ['reports'],
            title: { de: 'Zu einer Meldung hingehen', en: 'Going to a report' },
            tags: { de: 'hingehen meldung unsichtbar zurück besuch' },
            de: `<p>„Hingehen“ bei der Meldung (nur im Spiel) bringt dich an den Ort. Vorher wird dein Tier <strong>unsichtbar und unverwundbar</strong>, deine Begleiter bleiben am Ausgangspunkt. Oben im Admin-Menü steht „Du bist unsichtbar …“ mit <strong>Zurück</strong>: du kommst an den Ausgangspunkt (auch nach mehreren Meldungen an den ersten), wirst wieder sichtbar und die Begleiter folgen wieder.</p>`,
        },
        {
            id: 'a-dossier',
            level: 2,
            rights: ['history'],
            title: { de: 'Spielerakte', en: 'Player record' },
            tags: { de: 'spielerakte akte dossier verlauf zusammenfassung kämpfe tiere' },
            de: `<p>Reiter <em>Spielerakte</em> oder Knopf „Spielerakte“ beim Spieler: Suche nach Name oder License, dann alles zum Account auf einer Seite:</p>
<ul>
<li><strong>Account:</strong> License, Spielzeit, zuerst und zuletzt gesehen, Bann, Verdachts-Flag.</li>
<li><strong>Zusammenfassung:</strong> wie oft verwarnt, Auszeit, gekickt, gebannt (jeweils zuletzt), in wie vielen Meldungen beteiligt oder selbst gemeldet, begonnene Kämpfe und Tötungen der letzten 30 Tage.</li>
<li><strong>Verlauf, Verdacht, Notizen, Meldungen, Kämpfe, Tiere</strong> – Notizen, Meldungen, Kämpfe und Tiere nur mit den jeweiligen Rechten.</li>
</ul>
<p>Jedes Öffnen steht im Protokoll. Beim Zuschauen zeigt die Info-Leiste die Zusammenfassung in Kurzform.</p>`,
        },
        {
            id: 'a-combat',
            level: 2,
            rights: ['combatLog'],
            title: { de: 'Kämpfe und Tode', en: 'Fights and deaths' },
            tags: { de: 'kämpfe tode kampfprotokoll angreifer opfer niedergestreckt' },
            de: `<p><em>Kicks &amp; Banns</em> → <em>Kämpfe</em>: Ein Kampf zwischen zwei Spielern ist eine Zeile – Angreifer und Opfer mit Name, ID, Tier, Rudel und Rang, Treffer, Schaden, Dauer, wer zuerst angegriffen hat, Ort und Revier. Jedes Niederstrecken und jeder Tod ist eine eigene Zeile. Mit einem gewählten Spieler siehst du seine, sonst die neuesten.</p>
<div class="hb-tip"><p>Bei Beschwerden über „Griefing“: erst hier schauen, wer angefangen hat und in wessen Revier es war.</p></div>`,
        },
        {
            id: 'a-suspicion',
            level: 2,
            rights: ['history', 'clearFlag'],
            title: { de: 'Verdachts-Flag und System-Bann', en: 'Suspicion flag and system ban' },
            tags: { de: 'verdacht flag cheat system bann punkte automatisch zurücksetzen' },
            de: `<p>Das Spiel prüft vieles auf Plausibilität (Tempo, Teleport, Noclip, Gottmodus, Sperrgebiet, Explosionen …). Jeder Befund bringt dem Account <strong>Punkte</strong>; nach mehreren Befunden bekommt er die <strong>Verdachts-Flag</strong> (rot ⚑ in der Spielerliste). Gesperrt wird dadurch nichts.</p>
<p>Erreicht ein Account innerhalb von 24 Stunden <strong>100 Punkte</strong>, bannt ihn das <strong>System</strong> automatisch (Grund „Automatisches System: Cheat-Erkennung …“). Eindeutige Befunde wie Noclip oder Gottmodus bringen viel, unsichere (z. B. Tempo durch Lag) nur wenig und bannen nie allein.</p>
<p>Spielerakte → <em>Verdacht</em>: aktueller Stand („75 / 100 Punkte …“) und die letzten Befunde mit Art, Details und Punkten.</p>
<p><strong>Flag entfernen</strong> (<code>clearFlag</code>, ab Admin) setzt die Punkte zurück – die Befunde bleiben sichtbar. Admins werden nie gezählt.</p>`,
        },
    ],
};
