export default {
    id: 'a-reports',
    order: 40,
    icon: 'flag',
    title: { de: 'Meldungen, Akte, Verdacht', en: 'Reports, files, suspicion' },
    sections: [
        {
            id: 'a-report-flow',
            level: 2,
            rights: ['reports'],
            title: { de: 'Meldungen bearbeiten', en: 'Handling reports' },
            tags: { de: 'meldung report f10 nummer ticket übernehmen schließen notiz', en: 'report f10 number ticket take over close note' },
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
            en: `<p>Every player can send a report with <kbd>F10</kbd> – no window opens. They get a <strong>six-digit number</strong> to give in their Discord ticket. The server also stores every player and every animal nearby (name, animal, health, downed, pack, distance) and the paths of the players involved over the last few minutes.</p>
<p>Admins who are online and have the right get a notification. In the <em>Reports</em> tab:</p>
<ol>
<li>Filter <em>Open / Closed / All</em>, search by number, name or license – the number from the ticket takes you straight there.</li>
<li><strong>Take over</strong>, so the team sees who is on it (you can give it back at any time).</li>
<li>Look at it: overview, players, animals (grouped by species with the closest distance).</li>
<li>Write a <strong>note</strong> about what you found out.</li>
<li><strong>Close</strong> it (or open it again later).</li>
</ol>
<p>Closed reports are deleted after some time. The live map has a “Reports” layer that shows all open ones as a diamond at their location.</p>`,
        },
        {
            id: 'a-report-goto',
            level: 2,
            rights: ['reports'],
            title: { de: 'Zu einer Meldung hingehen', en: 'Going to a report' },
            tags: { de: 'hingehen meldung unsichtbar zurück besuch', en: 'go there report invisible back visit' },
            de: `<p>„Hingehen“ bei der Meldung (nur im Spiel) bringt dich an den Ort. Vorher wird dein Tier <strong>unsichtbar und unverwundbar</strong>, deine Begleiter bleiben am Ausgangspunkt. Oben im Admin-Menü steht „Du bist unsichtbar …“ mit <strong>Zurück</strong>: du kommst an den Ausgangspunkt (auch nach mehreren Meldungen an den ersten), wirst wieder sichtbar und die Begleiter folgen wieder.</p>`,
            en: `<p>“Go there” on the report (in game only) takes you to the location. First your animal becomes <strong>invisible and invulnerable</strong>, and your companions stay at your starting point. At the top of the admin menu you see “You are invisible …” with <strong>Back</strong>: you return to your starting point (after several reports, to the first one), become visible again and your companions follow you again.</p>`,
        },
        {
            id: 'a-dossier',
            level: 2,
            rights: ['history'],
            title: { de: 'Spielerakte', en: 'Player file' },
            tags: { de: 'spielerakte akte dossier verlauf zusammenfassung kämpfe tiere tierverlauf zeitleiste', en: 'player file player file dossier history summary fights animals animal history timeline' },
            de: `<p>Reiter <em>Spielerakte</em> oder Knopf „Spielerakte“ beim Spieler: Suche nach Name oder License, dann alles zum Account auf einer Seite:</p>
<ul>
<li><strong>Account:</strong> License, Spielzeit, zuerst und zuletzt gesehen, Bann, Verdachts-Flag.</li>
<li><strong>Zusammenfassung:</strong> wie oft verwarnt, Auszeit, gekickt, gebannt (jeweils zuletzt), in wie vielen Meldungen beteiligt oder selbst gemeldet, begonnene Kämpfe und Tötungen der letzten 30 Tage.</li>
<li><strong>Verlauf, Verdacht, Notizen, Meldungen, Kämpfe, Tiere</strong> – Notizen, Meldungen, Kämpfe und Tiere nur mit den jeweiligen Rechten.</li>
</ul>
<p><strong>Tierverlauf</strong> (mit dem Recht <code>characters</code>): was wann mit den Tieren des Accounts passiert ist – erstellt, Fell, umbenannt, Rudel beigetreten, Rang, verlassen oder geworfen, Stufe, Altersphase, gestorben und jeder Admin-Eingriff mit Namen (EP, Art, Alter, neuer Name verlangt, herausgenommen, Schnappschuss, wiederbelebt). Oben alle Tiere oder eines auswählen; ein Klick auf ein Tier unter <em>Charaktere</em> springt direkt dorthin. „Ältere laden“ holt weitere Einträge.</p>
<p><strong>Zeitleiste:</strong> alles zum Account aus allen Protokollen in einer Liste, neueste zuerst – Moderation, Notizen, Meldungen, Kämpfe, Verdacht, Tierverlauf, Anmeldungen (Land und Anbieter, nur mit <code>transferAccount</code>) und wann der Account angelegt wurde. Jede Art erscheint nur mit ihrem Recht; ein Klick auf einen Chip oben blendet die Art aus oder wieder ein.</p>
<p>Die Reiter stehen in einer Zeile: Passen sie nicht hinein, ziehst du sie mit gedrückter Maustaste (oder dem Mausrad) zur Seite.</p>
<p>Jedes Öffnen steht im Protokoll. Beim Zuschauen zeigt die Info-Leiste die Zusammenfassung in Kurzform.</p>`,
            en: `<p>The <em>Player file</em> tab or the “Player file” button on a player: search by name or license, then everything about the account on one page:</p>
<ul>
<li><strong>Account:</strong> license, playtime, first and last seen, ban, suspicion flag.</li>
<li><strong>Summary:</strong> how often warned, given a time-out, kicked, banned (each with the latest), how many reports they were involved in or filed themselves, fights started and kills in the last 30 days.</li>
<li><strong>History, suspicion, notes, reports, fights, animals</strong> – notes, reports, fights and animals only with the matching rights.</li>
</ul>
<p><strong>Animal history</strong> (with the right <code>characters</code>): what happened to the account's animals and when – created, fur, renamed, joined a pack, rank, left or kicked, level, age phase, died, and every admin change with the admin's name (XP, species, age, new name demanded, taken out, snapshot, revived). At the top, pick all animals or one; a click on an animal under <em>Characters</em> jumps straight there. “Load older” fetches more entries.</p>
<p><strong>Timeline:</strong> everything about the account from all logs in one list, newest first – moderation, notes, reports, fights, suspicion, animal history, logins (country and provider, only with <code>transferAccount</code>) and when the account was created. Each kind only appears with its right; a click on a chip at the top hides or shows that kind.</p>
<p>The tabs are in one line: if they do not fit, drag them sideways with the mouse button held (or the mouse wheel).</p>
<p>Every time you open it, this is logged. While you spectate, the info bar shows the summary in short form.</p>`,
        },
        {
            id: 'a-combat',
            level: 2,
            rights: ['combatLog'],
            title: { de: 'Kämpfe und Tode', en: 'Fights and deaths' },
            tags: { de: 'kämpfe tode kampfprotokoll angreifer opfer niedergestreckt', en: 'fights deaths combat log attacker victim downed' },
            de: `<p><em>Kicks &amp; Banns</em> → <em>Kämpfe</em>: Ein Kampf zwischen zwei Spielern ist eine Zeile – Angreifer und Opfer mit Name, ID, Tier, Rudel und Rang, Treffer, Schaden, Dauer, wer zuerst angegriffen hat, Ort und Revier. Jedes Niederstrecken und jeder Tod ist eine eigene Zeile. Mit einem gewählten Spieler siehst du seine, sonst die neuesten.</p>
<div class="hb-tip"><p>Bei Beschwerden über „Griefing“: erst hier schauen, wer angefangen hat und in wessen Revier es war.</p></div>`,
            en: `<p><em>Kicks &amp; bans</em> → <em>Fights</em>: a fight between two players is one row – attacker and victim with name, ID, animal, pack and rank, hits, damage, duration, who attacked first, location and territory. Every downing and every death is a row of its own. With a player selected you see theirs, otherwise the newest.</p>
<div class="hb-tip"><p>For complaints about “griefing”: look here first to see who started it and whose territory it was in.</p></div>`,
        },
        {
            id: 'a-suspicion',
            level: 2,
            rights: ['history', 'clearFlag'],
            title: { de: 'Verdachts-Flag und System-Bann', en: 'Suspicion flag and system ban' },
            tags: { de: 'verdacht flag cheat system bann punkte automatisch zurücksetzen ban-umgehung umgehung gerät', en: 'suspicion flag cheat system ban points automatic reset ban evasion device' },
            de: `<p>Das Spiel prüft vieles auf Plausibilität (Tempo, Teleport, Noclip, Gottmodus, Sperrgebiet, Explosionen …). Jeder Befund bringt dem Account <strong>Punkte</strong>; nach mehreren Befunden bekommt er die <strong>Verdachts-Flag</strong> (rot ⚑ in der Spielerliste). Gesperrt wird dadurch nichts.</p>
<p>Erreicht ein Account innerhalb von 24 Stunden <strong>100 Punkte</strong>, bannt ihn das <strong>System</strong> automatisch (Grund „Automatisches System: Cheat-Erkennung …“). Eindeutige Befunde wie Noclip oder Gottmodus bringen viel, unsichere (z. B. Tempo durch Lag) nur wenig und bannen nie allein.</p>
<p>Spielerakte → <em>Verdacht</em>: aktueller Stand („75 / 100 Punkte …“) und die letzten Befunde mit Art, Details und Punkten.</p>
<p><strong>Ban-Umgehung:</strong> Wer sich mit dem Gerät oder dem Discord-, Steam-, Xbox- oder Microsoft-Konto eines gerade gebannten Accounts verbindet, wird abgewiesen (oder – je nach Einstellung – eingelassen und das Team gewarnt). Es steht im Verlauf des neuen Accounts („Ban-Umgehung (abgewiesen)“ mit dem gebannten Account und worüber es passte), Admins online mit dem Recht <code>history</code> bekommen eine Meldung. Teilen sich z. B. Geschwister einen PC, trägt ein Owner die License in den Einstellungen unter <code>BanEvasion.exempt</code> ein.</p>
<p><strong>Flag entfernen</strong> (<code>clearFlag</code>, ab Admin) setzt die Punkte zurück – die Befunde bleiben sichtbar. Admins werden nie gezählt.</p>`,
            en: `<p>The game checks many things for plausibility (speed, teleport, noclip, god mode, restricted area, explosions …). Every finding gives the account <strong>points</strong>; after several findings it gets the <strong>suspicion flag</strong> (red ⚑ in the player list). This does not block anything.</p>
<p>If an account reaches <strong>100 points</strong> within 24 hours, the <strong>system</strong> bans it automatically (reason “Automatisches System: Cheat-Erkennung …”, automatic system: cheat detection). Clear findings such as noclip or god mode give a lot, uncertain ones (e.g. speed caused by lag) only a little and never ban on their own.</p>
<p>Player file → <em>Suspicion</em>: the current state (“75 / 100 points …”) and the latest findings with type, details and points.</p>
<p><strong>Ban evasion:</strong> whoever connects with the device or the Discord, Steam, Xbox or Microsoft account of an account banned right now is refused (or – depending on the setting – let in with the team warned). It is in the history of the new account (“Ban evasion (refused)” with the banned account and how it matched), and admins online with the right <code>history</code> get a notice. If e.g. siblings share a PC, an owner adds the license in the settings under <code>BanEvasion.exempt</code>.</p>
<p><strong>Remove flag</strong> (<code>clearFlag</code>, Admin and up) resets the points – the findings stay visible. Admins are never counted.</p>`,
        },
    ],
};
