export default {
    id: 'voice',
    order: 52,
    icon: 'voice',
    title: { de: 'Stimme und Laute', en: 'Voice and sounds' },
    sections: [
        {
            id: 'voice-setup',
            title: { de: 'Mumble einrichten', en: 'Setting up Mumble' },
            tags: { de: 'mumble plugin voice sprachchat einrichten download installieren liw proximity', en: 'mumble plugin voice chat set up download install liw proximity' },
            de: `<p>Gesprochen wird über die kostenlose <strong>Mumble-App</strong> mit unserem Plugin <strong>„LiW Proximity“</strong>. Der eingebaute Sprachchat von RedM ist aus – <strong>ohne Plugin hörst du niemanden und niemand hört dich</strong>.</p>
<ol>
<li><a href="https://www.mumble.info/downloads/" target="_blank" rel="noopener">Mumble</a> (ab Version 1.4) installieren.</li>
<li>Das Plugin laden: <a href="https://www.playliw.com/voice"><strong>playliw.com/voice</strong></a> – führt immer zur neuesten Version. Datei doppelklicken oder in Mumble: Einstellungen → Plugins → „Plugin installieren“.</li>
<li>In Mumble: Einstellungen → Plugins → „LiW Proximity“ anhaken; Audioausgabe → positionsabhängiges Audio einschalten.</li>
<li>In Mumble mit unserem Server verbinden: Server → Verbinden → Server hinzufügen, Adresse <code>talk.playliw.com</code> (Port 64738), Benutzername frei wählbar.</li>
<li>Spiel starten – das Plugin verbindet sich selbst und schiebt dich in den Spielkanal.</li>
</ol>
<p>Ob alles klappt, zeigt das Spiel im Charaktermenü (<kbd>J</kbd>) unter Einstellungen → <strong>Voice</strong>: ein Häkchen je Schritt. Push-to-Talk oder Sprachaktivierung, Lautstärke und Mikrofon stellst du in Mumble ein.</p>
<p>Das Plugin gibt kurze Töne: zwei steigende = mit dem Spiel verbunden, zwei fallende = Verbindung weg, drei leise = im Spielkanal, zwei tiefe = Kanal fehlt oder Passwort falsch, ein kurzer Ruf = ein Rudelruf erreicht dich.</p>`,
            en: `<p>Talking works through the free <strong>Mumble app</strong> with our plugin <strong>"LiW Proximity"</strong>. RedM's built-in voice chat is off – <strong>without the plugin you hear nobody and nobody hears you</strong>.</p>
<ol>
<li>Install <a href="https://www.mumble.info/downloads/" target="_blank" rel="noopener">Mumble</a> (version 1.4 or newer).</li>
<li>Get the plugin: <a href="https://www.playliw.com/voice"><strong>playliw.com/voice</strong></a> – always the latest version. Double-click the file, or in Mumble: Settings → Plugins → "Install plugin".</li>
<li>In Mumble: Settings → Plugins → tick "LiW Proximity"; Audio output → switch on positional audio.</li>
<li>Connect Mumble to our server: Server → Connect → Add New, address <code>talk.playliw.com</code> (port 64738), any user name.</li>
<li>Start the game – the plugin links up by itself and moves you into the game channel.</li>
</ol>
<p>The game shows whether everything works in the character menu (<kbd>J</kbd>) under Settings → <strong>Voice</strong>: one tick per step. Push-to-talk or voice activation, volume and microphone are set in Mumble.</p>
<p>The plugin plays short tones: two rising = linked to the game, two falling = link lost, three soft = in the game channel, two low = channel missing or wrong password, a short call = a pack call reaches you.</p>`,
        },
        {
            id: 'voice-proximity',
            title: { de: 'Sprechen in der Nähe', en: 'Proximity voice' },
            tags: { de: 'sprechen voice mikrofon push to talk n sprachchat', en: 'talk voice microphone push to talk n voice chat' },
            de: `<p>Dich hören nur Spieler, die <strong>in deiner Nähe</strong> sind – wie bei echten Tieren. Je weiter weg, desto leiser; die Stimme kommt aus der Richtung des Tieres und klingt in Höhlen, Gebäuden und unter Wasser dumpf.</p>
<ul>
<li>Sprechen: über Mumble (Push-to-Talk-Taste oder Sprachaktivierung, wie du es dort eingestellt hast; <a href="#voice-setup">Mumble einrichten</a>).</li>
<li>Du startest mit der Reichweite <strong>normal</strong> (10 m). Ändern: <a href="#voice-range">Sprachreichweite</a>.</li>
<li>Auch niedergestreckt kannst du noch sprechen.</li>
</ul>
<h4>Anzeige im HUD</h4>
<p>Unten links neben den Ringen zeigt ein Mikrofon deine Reichweite, z. B. „normal · 10 m“:</p>
<table class="hb-table">
<thead><tr><th>Anzeige</th><th>Bedeutung</th></tr></thead>
<tbody>
<tr><td>Grau</td><td>Du sprichst gerade nicht.</td></tr>
<tr><td>Grün</td><td>Du sprichst.</td></tr>
<tr><td>Gelb, „Mikrofon aus (Mumble)“</td><td>Du hörst die anderen, dein Mikrofon ist in Mumble stumm.</td></tr>
<tr><td>Roter Lautsprecher, „kein Voice (Mumble)“</td><td>Mumble mit dem Plugin läuft nicht, ist nicht verbunden oder taub geschaltet.</td></tr>
</tbody>
</table>
<p>Ob ein Rudelmitglied kein Voice hat, siehst du im Rudelmenü (<kbd>L</kbd>, <a href="#pack">Rudel</a>). Probleme mit dem Ton: <a href="#help">Hilfe</a>.</p>`,
            en: `<p>Only players <strong>near you</strong> hear you – like real animals. The further away, the quieter; voices come from the animal's direction and sound muffled in caves, buildings and under water.</p>
<ul>
<li>Talk: through Mumble (push-to-talk key or voice activation, as set there; <a href="#voice-setup">Setting up Mumble</a>).</li>
<li>You start with the range <strong>normal</strong> (10 m). To change it: <a href="#voice-range">Voice range</a>.</li>
<li>You can still talk while downed.</li>
</ul>
<h4>HUD display</h4>
<p>At the bottom left next to the rings a microphone shows your range, e.g. "normal · 10 m":</p>
<table class="hb-table">
<thead><tr><th>Display</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td>Grey</td><td>You are not talking.</td></tr>
<tr><td>Green</td><td>You are talking.</td></tr>
<tr><td>Yellow, "microphone off (Mumble)"</td><td>You hear the others, your microphone is muted in Mumble.</td></tr>
<tr><td>Red speaker, "no voice (Mumble)"</td><td>Mumble with the plugin is not running, not connected or deafened.</td></tr>
</tbody>
</table>
<p>Whether a pack member has no voice is shown in the pack menu (<kbd>L</kbd>, <a href="#pack">Packs</a>). Sound problems: <a href="#help">Help</a>.</p>`,
        },
        {
            id: 'voice-range',
            title: { de: 'Sprachreichweite (Z)', en: 'Voice range (Z)' },
            tags: { de: 'reichweite leise normal laut flüstern rufen z mausrad', en: 'range quiet normal loud whisper shout z mouse wheel' },
            de: `<p>Wie weit man dich hört, stellst du mit <kbd>Z</kbd> ein:</p>
<table class="hb-table">
<thead><tr><th>Bedienung</th><th>Wirkung</th></tr></thead>
<tbody>
<tr><td><kbd>Z</kbd> tippen</td><td>Wechselt der Reihe nach: <strong>leise</strong> (3 m) → <strong>normal</strong> (10 m) → <strong>laut</strong> (25 m). Meldung „Stimme: …“.</td></tr>
<tr><td><kbd>Z</kbd> halten + <kbd>Mausrad</kbd></td><td>Reichweite meterweise von 1 bis 25 m einstellen (Mausrad hoch = weiter). Im HUD steht dann „eigene · … m“.</td></tr>
</tbody>
</table>
<p>Solange du <kbd>Z</kbd> hältst, zeigt ein durchscheinender <strong>Kreis am Boden</strong>, wie weit deine Stimme reicht; nach einer Änderung bleibt er noch kurz sichtbar. Tippst du danach wieder, springt die Reichweite zur nächsten Stufe über deinem eingestellten Wert.</p>
<div class="hb-tip">Leise für Gespräche mit dem Tier direkt neben dir, laut, wenn du über eine Lichtung rufen willst. Für dein Rudel auf größere Entfernung gibt es den <a href="#voice-pack-call">Rudelruf</a>.</div>`,
            en: `<p>Set how far you can be heard with <kbd>Z</kbd>:</p>
<table class="hb-table">
<thead><tr><th>Input</th><th>Effect</th></tr></thead>
<tbody>
<tr><td>Tap <kbd>Z</kbd></td><td>Cycles: <strong>quiet</strong> (3 m) → <strong>normal</strong> (10 m) → <strong>loud</strong> (25 m). Message "Voice: …".</td></tr>
<tr><td>Hold <kbd>Z</kbd> + <kbd>mouse wheel</kbd></td><td>Set the range metre by metre from 1 to 25 m (wheel up = further). The HUD then shows "custom · … m".</td></tr>
</tbody>
</table>
<p>While you hold <kbd>Z</kbd>, a see-through <strong>ring on the ground</strong> shows how far your voice reaches; after a change it stays visible for a moment. Tapping again afterwards jumps to the next step above your setting.</p>
<div class="hb-tip">Quiet for talking to the animal right next to you, loud when you want to call across a clearing. For your pack at a greater distance there is the <a href="#voice-pack-call">pack call</a>.</div>`,
        },
        {
            id: 'voice-pack-call',
            title: { de: 'Rudelruf (B)', en: 'Pack call (B)' },
            tags: { de: 'rudelruf rudel funk b halten weit', en: 'pack call radio b hold far' },
            de: `<p>Halte <kbd>B</kbd>, damit dich <strong>dein Rudel</strong> hört – viel weiter als jeder Ruf:</p>
<ul>
<li>Es hören dich alle Rudelmitglieder im Umkreis von derzeit <strong>150 m</strong> in voller Lautstärke; wer während des Rufs in Reichweite kommt, hört dich nach spätestens einer Sekunde.</li>
<li>Alle anderen in der Nähe hören dich wie sonst nach deiner Reichweite (<kbd>Z</kbd>) – pass also auf, wie laut du redest.</li>
<li>Im HUD steht „Rudelruf · 150 m“.</li>
<li>Ohne Rudel: „Du gehörst keinem Rudel an.“</li>
</ul>
<div class="hb-tip">Ideal für die Jagd: Mit leiser Reichweite sprichst du dich mit dem Rudel ab, ohne dass ein fremder Spieler in der Nähe etwas mitbekommt. Und wenn du niedergestreckt bist, holst du so Hilfe (<a href="#health-help-up">Aufhelfen</a>).</div>`,
            en: `<p>Hold <kbd>B</kbd> so that <strong>your pack</strong> hears you – much further than any shout:</p>
<ul>
<li>Every pack member within currently <strong>150 m</strong> hears you at full volume; whoever comes into range during the call hears you within a second.</li>
<li>Everybody else nearby hears you as usual, by your range (<kbd>Z</kbd>) – so mind how loud you talk.</li>
<li>The HUD shows "pack call · 150 m".</li>
<li>Without a pack: "You do not belong to a pack."</li>
</ul>
<div class="hb-tip">Ideal for hunting: with a quiet range you plan your moves with the pack without a stranger nearby noticing. And when you are downed, this is how you call for help (<a href="#health-help-up">Helping up</a>).</div>`,
        },
        {
            id: 'voice-sounds',
            title: { de: 'Tierlaute', en: 'Animal sounds' },
            tags: { de: 'laute heulen brüllen knurren tierlaut', en: 'sounds howl roar growl animal sound' },
            de: `<p>Dein Tier kann echte Tierlaute von sich geben – Heulen, Brüllen, Knurren, Röhren, Fauchen, Wiehern und mehr, je nach Art:</p>
<ul>
<li>mit <kbd>R</kbd> (<a href="#combat-roar">Brüllen / Heulen</a>),</li>
<li>über das <a href="#voice-emotes">Emote-Rad</a> (<kbd>F</kbd>),</li>
<li>bei manchen Fähigkeiten (z. B. Heulen des Wolfs, Rudelwut, Herdenwall).</li>
</ul>
<p>Tierlaute hören alle Spieler im Umkreis von derzeit etwa <strong>150 m</strong>, leiser, je weiter weg – auch ohne Mumble. Zwischen zwei Lauten liegen mindestens 1,5 Sekunden.</p>
<p>Niedergestreckt kannst du keine Laute machen.</p>`,
            en: `<p>Your animal can make real animal sounds – howling, roaring, growling, bugling, hissing, neighing and more, depending on the species:</p>
<ul>
<li>with <kbd>R</kbd> (<a href="#combat-roar">Roar / howl</a>),</li>
<li>through the <a href="#voice-emotes">emote wheel</a> (<kbd>F</kbd>),</li>
<li>with some abilities (e.g. the wolf's howl, Pack Rage, Herd Wall).</li>
</ul>
<p>Every player within currently about <strong>150 m</strong> hears animal sounds, quieter the further away – even without Mumble. There are at least 1.5 seconds between two sounds.</p>
<p>You cannot make sounds while downed.</p>`,
        },
        {
            id: 'voice-emotes',
            title: { de: 'Emote-Rad (F)', en: 'Emote wheel (F)' },
            tags: { de: 'emote rad gesten sitzen hinlegen animation f', en: 'emote wheel gestures sit lie down animation f' },
            de: `<p>Mit <kbd>F</kbd> öffnest du das <strong>Emote-Rad</strong>. Klick auf ein Symbol, um es abzuspielen; <kbd>F</kbd>, Rechtsklick oder <kbd>Esc</kbd> schließt es.</p>
<ul>
<li>Haltungen wie Sitzen, Hinlegen oder Ducken bleiben, bis du dich bewegst.</li>
<li>Laute im Rad hören alle in der Nähe (<a href="#voice-sounds">Tierlaute</a>).</li>
<li>„Hinlegen“ im Rad ist nur eine Pose – ausruhen mit Wirkung geht mit <kbd>Strg</kbd> (<a href="#needs-rest">Ruhe und Schlaf</a>). „Markieren“ im Rad ist ebenfalls nur eine Geste; ein Revier markierst du mit <kbd>G</kbd> (<a href="#territory">Reviere</a>).</li>
<li>Niedergestreckt geht das Rad nicht.</li>
</ul>
<table class="hb-table">
<thead><tr><th>Art</th><th>Im Emote-Rad</th></tr></thead>
<tbody>
<tr><td>Wolf</td><td>Sitzen, Hinlegen, Heulen, Knurren, Markieren, Schnüffeln, Schütteln</td></tr>
<tr><td>Kojote</td><td>Sitzen, Hinlegen, Heulen, Bellen, Knurren, Schnüffeln, Schütteln</td></tr>
<tr><td>Rotfuchs</td><td>Sitzen, Hinlegen, Graben, Umsehen, Bellen, Knurren</td></tr>
<tr><td>Puma</td><td>Knurren, Umsehen, Brüllen, Hinlegen</td></tr>
<tr><td>Panther</td><td>Hinlegen, Ducken, Umsehen, Knurren, Brüllen</td></tr>
<tr><td>Alligator</td><td>Hinlegen, Kopf heben, Fauchen, Röhren</td></tr>
<tr><td>Dachs</td><td>Umsehen, Kratzen, Schnüffeln, Fauchen, Knurren</td></tr>
<tr><td>Weißwedelhirsch</td><td>Hinlegen, Grasen, Geweih reiben, Schütteln, Rufen</td></tr>
<tr><td>Wapiti</td><td>Hinlegen, Grasen, Blätter fressen, Röhren, Schnauben</td></tr>
<tr><td>Elch</td><td>Hinlegen, Grasen, Blätter fressen, Schnüffeln, Schütteln, Stampfen, Röhren</td></tr>
<tr><td>Bison</td><td>Hinlegen, Grasen, Suhlen, Schütteln, Kopf schütteln, Grunzen</td></tr>
<tr><td>Wildpferd</td><td>Hinlegen, Grasen, Aufbäumen, Schütteln, Wiehern, Schnauben</td></tr>
<tr><td>Gabelbock</td><td>Hinlegen, Grasen, Schütteln, Schnauben, Rufen</td></tr>
<tr><td>Dickhornschaf</td><td>Hinlegen, Grasen, Kopfstoß, Blöken, Schnauben</td></tr>
<tr><td>Biber</td><td>Umsehen, Kratzen, Putzen, Baum benagen, Verstecken, Keckern</td></tr>
<tr><td>Kaninchen</td><td>Umsehen, Schnüffeln, Putzen, Grasen, Klopfen, Verstecken, Quieken</td></tr>
<tr><td>Schwarzbär</td><td>Sitzen, Hinlegen, Futter suchen, Strecken, Brüllen</td></tr>
<tr><td>Grizzlybär</td><td>Sitzen, Hinlegen, Futter suchen, Schnüffeln, Gähnen, Brüllen</td></tr>
<tr><td>Wildschwein</td><td>Sitzen, Hinlegen, Wühlen, Grunzen, Quieken</td></tr>
<tr><td>Waschbär</td><td>Umsehen, Kratzen, Verstecken, Fauchen, Keckern</td></tr>
<tr><td>Opossum</td><td>Umsehen, Schnüffeln, Kratzen, Tot stellen, Fauchen, Knurren</td></tr>
<tr><td>Stinktier</td><td>Umsehen, Kratzen, Schnüffeln, Graben, Verstecken, Fauchen</td></tr>
<tr><td>Gürteltier</td><td>Umsehen, Schnüffeln, Kratzen, Einrollen, Schnauben, Fauchen</td></tr>
<tr><td>Eichhörnchen</td><td>Umsehen, Schnüffeln, Putzen, Kratzen, Sitzen, Grasen, Verstecken, Keckern</td></tr>
<tr><td>Streifenhörnchen</td><td>Umsehen, Schnüffeln, Putzen, Sitzen, Grasen, Verstecken, Keckern</td></tr>
<tr><td>Bisamratte</td><td>Umsehen, Putzen, Kratzen, Grasen, Keckern, Fauchen</td></tr>
<tr><td>Ratte</td><td>Umsehen, Schnüffeln, Putzen, Grasen, Verstecken, Quieken, Fauchen</td></tr>
</tbody>
</table>
<p>„Grasen“, „Futter suchen“ oder „Tot stellen“ im Rad sind nur Gesten: Satt wirst du davon nicht, und das echte Totstellen des Opossums ist seine <a href="#species-possum">zweite Fähigkeit</a>.</p>`,
            en: `<p>Press <kbd>F</kbd> to open the <strong>emote wheel</strong>. Click a symbol to play it; <kbd>F</kbd>, right-click or <kbd>Esc</kbd> closes it.</p>
<ul>
<li>Poses such as sit, lie down or crouch last until you move.</li>
<li>Everyone nearby hears the sounds in the wheel (<a href="#voice-sounds">Animal sounds</a>).</li>
<li>"Lie down" in the wheel is just a pose – resting with an effect works with <kbd>Ctrl</kbd> (<a href="#needs-rest">Rest and sleep</a>). "Mark" in the wheel is also just a gesture; you mark a territory with <kbd>G</kbd> (<a href="#territory">Territories</a>).</li>
<li>The wheel does not work while downed.</li>
</ul>
<table class="hb-table">
<thead><tr><th>Species</th><th>In the emote wheel</th></tr></thead>
<tbody>
<tr><td>Wolf</td><td>Sit, Lie down, Howl, Growl, Mark, Sniff, Shake</td></tr>
<tr><td>Coyote</td><td>Sit, Lie down, Howl, Bark, Growl, Sniff, Shake</td></tr>
<tr><td>Red fox</td><td>Sit, Lie down, Dig, Look around, Bark, Growl</td></tr>
<tr><td>Cougar</td><td>Growl, Look around, Roar, Lie down</td></tr>
<tr><td>Panther</td><td>Lie down, Crouch, Look around, Growl, Roar</td></tr>
<tr><td>Alligator</td><td>Lie down, Raise head, Hiss, Bellow</td></tr>
<tr><td>Badger</td><td>Look around, Scratch, Sniff, Hiss, Growl</td></tr>
<tr><td>Whitetail deer</td><td>Lie down, Graze, Rub antlers, Shake, Call</td></tr>
<tr><td>Elk</td><td>Lie down, Graze, Browse leaves, Bugle, Snort</td></tr>
<tr><td>Moose</td><td>Lie down, Graze, Browse leaves, Sniff, Shake, Stomp, Bellow</td></tr>
<tr><td>Bison</td><td>Lie down, Graze, Wallow, Shake, Shake head, Grunt</td></tr>
<tr><td>Wild horse</td><td>Lie down, Graze, Rear up, Shake, Neigh, Snort</td></tr>
<tr><td>Pronghorn</td><td>Lie down, Graze, Shake, Snort, Call</td></tr>
<tr><td>Bighorn sheep</td><td>Lie down, Graze, Headbutt, Bleat, Snort</td></tr>
<tr><td>Beaver</td><td>Look around, Scratch, Groom, Gnaw a tree, Hide, Chitter</td></tr>
<tr><td>Rabbit</td><td>Look around, Sniff, Groom, Graze, Thump, Hide, Squeal</td></tr>
<tr><td>Black bear</td><td>Sit, Lie down, Forage, Stretch, Roar</td></tr>
<tr><td>Grizzly bear</td><td>Sit, Lie down, Forage, Sniff, Yawn, Roar</td></tr>
<tr><td>Wild boar</td><td>Sit, Lie down, Root, Grunt, Squeal</td></tr>
<tr><td>Raccoon</td><td>Look around, Scratch, Hide, Hiss, Chitter</td></tr>
<tr><td>Opossum</td><td>Look around, Sniff, Scratch, Play dead, Hiss, Growl</td></tr>
<tr><td>Skunk</td><td>Look around, Scratch, Sniff, Dig, Hide, Hiss</td></tr>
<tr><td>Armadillo</td><td>Look around, Sniff, Scratch, Curl up, Snort, Hiss</td></tr>
<tr><td>Squirrel</td><td>Look around, Sniff, Groom, Scratch, Sit, Graze, Hide, Chitter</td></tr>
<tr><td>Chipmunk</td><td>Look around, Sniff, Groom, Sit, Graze, Hide, Chitter</td></tr>
<tr><td>Muskrat</td><td>Look around, Groom, Scratch, Graze, Chitter, Hiss</td></tr>
<tr><td>Rat</td><td>Look around, Sniff, Groom, Graze, Hide, Squeal, Hiss</td></tr>
</tbody>
</table>
<p>"Graze", "Forage" or "Play dead" in the wheel are only gestures: they do not fill you up, and the opossum's real play dead is its <a href="#species-possum">second ability</a>.</p>`,
        },
    ],
};
