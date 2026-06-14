// ============================================
// TEORIE — Das mysteriöse Paket (refactor mai 2026)
// Claudia Toth · Annettes Deutschkurs · Material suplimentar narativ B2
// 6 capitole poveste + 1 sub vocabular sintetizat · personaje originale păstrate
// Sg + Pl la TOATE substantivele (regula 13) · audio Hedda WAV
// ============================================

const theoryHTML = `
    <!-- Sub 0: Intro + Kapitel 1 -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📦 1. Kapitel 1 — Es klingelt an der Tür</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-kapitel-1.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă Kapitel 1 (voce Claudia)</span>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">Citim împreună povestea lui <strong>Andrew</strong>, un băiat de zece ani din Berlin care primește într-o sâmbătă dimineața un pachet misterios. Toată lecția e construită pe această poveste — 6 capitole cu vocabular tematic (locuință, vecinătate, obiecte, sentimente). La final vei avea ~30 de cuvinte noi + 4 verbe-cheie conjugate complet. 🦋</div>
                </div>
            </div>

            <div class="theory-box">
                <h4>🎯 Ce înveți în această lecție</h4>
                <ul>
                    <li>✅ <strong>~25 substantive</strong> cu Singular + Plural (locuință, obiecte, persoane)</li>
                    <li>✅ <strong>9 verbe</strong> tematice (klingeln, öffnen, klopfen, tragen, gehören...) cu 4 conjugate complet</li>
                    <li>✅ <strong>7 adjective</strong> + <strong>5 expresii</strong> de conversație</li>
                    <li>✅ <strong>Salutări B2</strong> formal vs informal (Guten Morgen vs Hallo, Sie vs du)</li>
                    <li>✅ <strong>Strategii de comprehensiune narativă</strong> — text bilingv DE/RO</li>
                </ul>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🇩🇪 Deutsch</h4>
            <div class="theory-box" style="background:#FBF7EF;">
                <p>Es klingelt an der Tür. Andrew läuft zur Tür der Wohnung. Die Türklingel klingelt am Samstagmorgen nie. Andrew freut sich, zu sehen, wer an der Tür ist. Er öffnet die Tür.</p>
                <p>Vor ihm steht ein Lieferant mit einem großen Paket. <em>"Guten Morgen. Bitte, Frau Edwards, Hauptstraße 10"</em>, sagt der Lieferant.</p>
                <p><em>"Hallo, der Herr"</em>, sagt Andrew. <em>"Das ist die Hauptstraße 10. Aber wir heißen nicht Edwards. Hier wohnt Familie Müller."</em></p>
                <p>Der Lieferant schaut auf das Paket. <em>"Es steht hier nur Frau Edwards. Können Sie das Paket für sie nehmen? Ich muss heute noch viele Pakete liefern."</em></p>
                <p><em>"Ich kann es versuchen"</em>, sagt Andrew. Er ist erst zehn Jahre alt, aber er fühlt sich wichtig.</p>
                <p><em>"Vielen Dank"</em>, sagt der Lieferant. Er geht. Andrew bringt die Schachtel in sein Haus.</p>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🇷🇴 Română</h4>
            <div class="theory-box" style="background:#F5F0E8;">
                <p>Sună la ușă. Andrew aleargă la ușa apartamentului. Soneria nu sună niciodată sâmbăta dimineața. Andrew se bucură să vadă cine este la ușă. Deschide ușa.</p>
                <p>În fața lui stă un livrator cu un pachet mare. <em>„Bună dimineața. Vă rog, doamna Edwards, strada Principală 10"</em>, spune livratorul.</p>
                <p><em>„Bună ziua, domnule"</em>, spune Andrew. <em>„Aceasta este strada Principală 10. Dar noi nu ne numim Edwards. Aici locuiește familia Müller."</em></p>
                <p>Livratorul se uită la pachet. <em>„Aici scrie doar doamna Edwards. Puteți primi pachetul pentru ea? Mai am multe pachete de livrat azi."</em></p>
                <p><em>„Pot să încerc"</em>, spune Andrew. Are doar zece ani, dar se simte important.</p>
                <p><em>„Mulțumesc mult"</em>, spune livratorul. Pleacă. Andrew aduce cutia în casa lui.</p>
            </div>
        </div>
    </div>

    <!-- Sub 1: Kapitel 2 -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🎁 2. Kapitel 2 — Andrew öffnet das Paket</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-kapitel-2.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă Kapitel 2 (voce Claudia)</span>
            </div>

            <h4 style="color:#065f46; margin-top:8px; margin-bottom:8px;">🇩🇪 Deutsch</h4>
            <div class="theory-box" style="background:#FBF7EF;">
                <p>Andrew öffnet den Pappkarton. Er muss wissen, was drin ist, um den Besitzer zu finden. In dem Pappkarton befindet sich eine kleine Holzkiste.</p>
                <p>Andrew öffnet die Holzkiste. In der Kiste sind 10 verschiedene Brillen. Sie haben unterschiedliche Farben: rosa und rot, grüne Pünktchen, schwarz und weiß. Sie haben auch unterschiedliche Formen: rund, quadratisch und rechteckig.</p>
                <p>Andrew überlegt: <em>"Wer in unserem Gebäude trägt Brillen?"</em> Er denkt nach. Frau Smith trägt eine Brille. Vielleicht ist das Paket für sie.</p>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🇷🇴 Română</h4>
            <div class="theory-box" style="background:#F5F0E8;">
                <p>Andrew deschide cutia de carton. Trebuie să știe ce este înăuntru pentru a găsi proprietarul. În cutia de carton se află o cutie mică de lemn.</p>
                <p>Andrew deschide cutia de lemn. În cutie sunt 10 perechi diferite de ochelari. Au culori diferite: roz și roșu, buline verzi, alb și negru. Au și forme diferite: rotunde, pătrate și dreptunghiulare.</p>
                <p>Andrew se gândește: <em>„Cine din clădirea noastră poartă ochelari?"</em> Reflectează. Doamna Smith poartă ochelari. Poate că pachetul e pentru ea.</p>
            </div>

            <div class="theory-box" style="background:#dbeafe; margin-top:14px;">
                <h4>💡 Atenție: die Brille e SINGULAR în germană</h4>
                <p>În română „ochelarii" e mereu plural (o pereche = ochelarii). În germană <strong>die Brille</strong> e SINGULAR pentru o pereche. Pluralul <strong>die Brillen</strong> = mai multe perechi. <em>Andrew hat eine Brille</em> = Andrew are ochelari (o pereche).</p>
            </div>
        </div>
    </div>

    <!-- Sub 2: Kapitel 3 -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>👵 3. Kapitel 3 — Frau Smith (die Nachbarin)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-kapitel-3.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă Kapitel 3 (voce Claudia)</span>
            </div>

            <h4 style="color:#065f46; margin-top:8px; margin-bottom:8px;">🇩🇪 Deutsch</h4>
            <div class="theory-box" style="background:#FBF7EF;">
                <p>Andrew klopft an die Tür gegenüber von seiner Wohnung. Sie öffnet sich. Eine sehr alte Dame lächelt Andrew mit seiner Schachtel an.</p>
                <p><em>"Guten Morgen, Frau Smith!"</em> sagt Andrew.</p>
                <p><em>"Guten Morgen, Andrew. Wie geht es dir?"</em> fragt Frau Smith.</p>
                <p><em>"Gut, danke! Und Ihnen?"</em> fragt Andrew.</p>
                <p><em>"Auch gut, mein Lieber. Was hast du in der Hand?"</em> fragt Frau Smith.</p>
                <p><em>"Frau Smith, das ist ein Paket. Es gehört jemandem in diesem Gebäude, aber ich weiß nicht wem"</em>, sagt Andrew.</p>
                <p><em>"Oh, ich erwarte kein Paket"</em>, sagt Frau Smith. <em>"Tut mir leid, mein Lieber."</em></p>
                <p><em>"Oh, okay"</em> sagt Andrew, enttäuscht. Die alte Dame trägt eine Brille. Er denkt sich, dass die Brillen ihr gut stehen würden. Er dreht sich um, zu gehen.</p>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🇷🇴 Română</h4>
            <div class="theory-box" style="background:#F5F0E8;">
                <p>Andrew bate la ușa din fața apartamentului său. Se deschide. O doamnă foarte în vârstă îi zâmbește lui Andrew cu cutia lui.</p>
                <p><em>„Bună dimineața, doamna Smith!"</em> spune Andrew.</p>
                <p><em>„Bună dimineața, Andrew. Ce mai faci?"</em> întreabă doamna Smith.</p>
                <p><em>„Bine, mulțumesc! Dumneavoastră?"</em> întreabă Andrew.</p>
                <p><em>„Și eu bine, dragul meu. Ce ai în mână?"</em> întreabă doamna Smith.</p>
                <p><em>„Doamnă Smith, acesta este un pachet. Aparține cuiva din această clădire, dar nu știu cui"</em>, spune Andrew.</p>
                <p><em>„Oh, nu aștept niciun pachet"</em>, spune doamna Smith. <em>„Îmi pare rău, dragul meu."</em></p>
                <p><em>„Oh, bine"</em> spune Andrew, dezamăgit. Doamna în vârstă poartă ochelari. El gândește că ochelarii i-ar sta bine. Se întoarce să plece.</p>
            </div>
        </div>
    </div>

    <!-- Sub 3: Kapitel 4 -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>🏠 4. Kapitel 4 — Familie Jones (die neuen Nachbarn)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-kapitel-4.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă Kapitel 4 (voce Claudia)</span>
            </div>

            <h4 style="color:#065f46; margin-top:8px; margin-bottom:8px;">🇩🇪 Deutsch</h4>
            <div class="theory-box" style="background:#FBF7EF;">
                <p>Andrew geht die Treppe hoch. Sein Gebäude hat zwei Etagen. Er ist mit fast jedem im Gebäude befreundet. Allerdings hat die Wohnung im ersten Stock eine neue Familie. Andrew kennt sie nicht. Er ist schüchtern, aber er klingelt.</p>
                <p>Ein freundlicher Mann öffnet die Tür.</p>
                <p><em>"Hallo, ich wohne unten, mein Name ist Andrew."</em></p>
                <p><em>"Schön, dich kennenzulernen, Andrew. Wir sind neu im Haus, ich bin Herr Jones."</em></p>
                <p><em>"Familie Jones, gehört Ihnen vielleicht dieses Paket? Ein Lieferant hat es heute Morgen gebracht."</em></p>
                <p><em>"Nein, Andrew, wir erwarten kein Paket. Versuche es weiter."</em></p>
                <p><em>"Okay, vielen Dank!"</em> sagt Andrew.</p>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🇷🇴 Română</h4>
            <div class="theory-box" style="background:#F5F0E8;">
                <p>Andrew urcă scările. Clădirea lui are două etaje. Este prieten cu aproape toată lumea din clădire. Totuși, apartamentul de la primul etaj are o familie nouă. Andrew nu îi cunoaște. Este timid, dar sună la ușă.</p>
                <p>Un bărbat prietenos deschide ușa.</p>
                <p><em>„Bună, locuiesc jos, mă numesc Andrew."</em></p>
                <p><em>„Încântat să te cunosc, Andrew. Suntem noi în clădire, sunt domnul Jones."</em></p>
                <p><em>„Familie Jones, vă aparține poate acest pachet? Un livrator l-a adus azi-dimineață."</em></p>
                <p><em>„Nu, Andrew, nu așteptăm niciun pachet. Încearcă mai departe."</em></p>
                <p><em>„Bine, mulțumesc mult!"</em> spune Andrew.</p>
            </div>
        </div>
    </div>

    <!-- Sub 4: Kapitel 5 -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>👧 5. Kapitel 5 — Diana (die Klassenkameradin)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-kapitel-5.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă Kapitel 5 (voce Claudia)</span>
            </div>

            <h4 style="color:#065f46; margin-top:8px; margin-bottom:8px;">🇩🇪 Deutsch</h4>
            <div class="theory-box" style="background:#FBF7EF;">
                <p>In der nächsten Wohnung lebt eine Familie. Die Tochter geht auf dieselbe Schule wie Andrew. Sie ist ein Jahr älter als Andrew. Ihr Name ist Diana. Andrew findet sie sehr hübsch, er fühlt sich wieder schüchtern, aber er klopft an die Tür.</p>
                <p>Diana öffnet.</p>
                <p><em>"Hallo, Diana"</em>, Andrew lächelt.</p>
                <p><em>"Was ist los?"</em> fragt Diana. Ihr Pijama ist hellrosa und ihre Haare sind zerzaust.</p>
                <p><em>"Wie läuft es denn so?"</em> fragt Andrew.</p>
                <p><em>"Gut, Andrew. Was gibt es?"</em> fragt Diana.</p>
                <p><em>"Was ist drin?"</em> fragt Diana und zeigt auf die Schachtel.</p>
                <p><em>"Ein paar Brillen. Sie sind zum Lesen da"</em>, sagt Andrew.</p>
                <p><em>"Ich trage keine Brille, meine Mutter trägt auch keine, das Paket ist nicht für uns"</em>, sagt Diana.</p>
                <p><em>"Okay"</em>, sagt Andrew. Er winkt zum Abschied und geht die Treppe hoch.</p>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🇷🇴 Română</h4>
            <div class="theory-box" style="background:#F5F0E8;">
                <p>În apartamentul următor locuiește o familie. Fiica merge la aceeași școală ca Andrew. Este cu un an mai mare decât Andrew. Numele ei este Diana. Andrew o găsește foarte drăguță, se simte din nou timid, dar bate la ușă.</p>
                <p>Diana deschide.</p>
                <p><em>„Bună, Diana"</em>, Andrew zâmbește.</p>
                <p><em>„Ce s-a întâmplat?"</em> întreabă Diana. Pijamaua ei este roz deschis și părul ei este ciufulit.</p>
                <p><em>„Ce mai faci?"</em> întreabă Andrew.</p>
                <p><em>„Bine, Andrew. Ce e?"</em> întreabă Diana.</p>
                <p><em>„Ce este înăuntru?"</em> întreabă Diana și arată spre cutie.</p>
                <p><em>„Câteva perechi de ochelari. Sunt pentru citit"</em>, spune Andrew.</p>
                <p><em>„Nu port ochelari, nici mama mea nu poartă, pachetul nu este pentru noi"</em>, spune Diana.</p>
                <p><em>„Bine"</em>, spune Andrew. Face cu mâna la revedere și urcă scările.</p>
            </div>
        </div>
    </div>

    <!-- Sub 5: Kapitel 6 -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🦮 6. Kapitel 6 — Herr Edwards (die Überraschung!)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-kapitel-6.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă Kapitel 6 (voce Claudia)</span>
            </div>

            <h4 style="color:#065f46; margin-top:8px; margin-bottom:8px;">🇩🇪 Deutsch</h4>
            <div class="theory-box" style="background:#FBF7EF;">
                <p>Es gibt noch eine weitere Wohnung, die Wohnung im zweiten Stock. Herr Edwards lebt allein in dieser Wohnung. Er hat einen großen Papagei, der weiß, wie man redet. Er hat auch vier Katzen und einen Hund.</p>
                <p>Seine Wohnung ist alt und dunkel. Andrew hat Angst vor Herr Edwards. Er klingelt an der Tür. Er muss herausfinden, wem das Paket gehört.</p>
                <p><em>"Hallo,"</em> sagt Herr Edwards. Sein Hund kommt zur Tür. Der Hund hilft Herr Edwards, da er blind ist.</p>
                <p><em>"Guten Morgen, Herr Edwards. Mein Name ist Andrew. Haben Sie ein Paket erwartet?"</em></p>
                <p><em>"Ja! Ja, mein Junge! Ich habe ein Paket bestellt. Was ist drin?"</em></p>
                <p><em>"Brillen, Herr Edwards. Zehn verschiedene Brillen."</em></p>
                <p>Herr Edwards lacht laut. <em>"Mein lieber Junge, ich bin blind! Ich kann keine Brillen tragen. Aber meine Schwester, Frau Edwards, sammelt Brillen. Sie wohnt in der Hauptstraße 100, nicht 10. Der Lieferant hat sich geirrt."</em></p>
                <p>Andrew ist erleichtert. <em>"Vielen Dank, Herr Edwards!"</em></p>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🇷🇴 Română</h4>
            <div class="theory-box" style="background:#F5F0E8;">
                <p>Mai există încă un apartament, cel de la etajul al doilea. Domnul Edwards locuiește singur în acest apartament. Are un papagal mare, care știe să vorbească. Are și patru pisici și un câine.</p>
                <p>Apartamentul lui este vechi și întunecat. Andrew se teme de domnul Edwards. Sună la ușă. Trebuie să afle cui aparține pachetul.</p>
                <p><em>„Bună,"</em> spune domnul Edwards. Câinele lui vine la ușă. Câinele îl ajută pe domnul Edwards, fiindcă el este orb.</p>
                <p><em>„Bună dimineața, domnule Edwards. Mă numesc Andrew. Ați așteptat un pachet?"</em></p>
                <p><em>„Da! Da, băiete! Am comandat un pachet. Ce este înăuntru?"</em></p>
                <p><em>„Ochelari, domnule Edwards. Zece perechi diferite de ochelari."</em></p>
                <p>Domnul Edwards râde tare. <em>„Dragul meu băiat, eu sunt orb! Nu pot purta ochelari. Dar sora mea, doamna Edwards, colecționează ochelari. Locuiește pe strada Principală 100, nu 10. Livratorul s-a încurcat."</em></p>
                <p>Andrew este ușurat. <em>„Mulțumesc mult, domnule Edwards!"</em></p>
            </div>
        </div>
    </div>

    <!-- Sub 6: Vocabular tematic sintetizat -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>📚 7. Vocabular tematic — sinteza poveștii</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="theory-box" style="background:#ecfdf5; border-color:#10b981;">
                <h4>🔤 Atenție: substantivele în germană au MEREU articol + plural</h4>
                <p>În germană un substantiv se învață <strong>împreună cu articolul lui</strong> (der/die/das) și <strong>cu forma de plural</strong> — pentru că pluralul e <em>imprevizibil</em>. Învață mereu cele 3 informații împreună: articol · singular · plural.</p>
            </div>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🏠 Substantive — locuință și obiecte</h4>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO</th><th>Tipar</th></tr></thead>
                <tbody>
                    <tr><td><strong>die Tür</strong></td><td><strong>die Türen</strong></td><td>ușa · ușile</td><td>+en</td></tr>
                    <tr><td><strong>die Türklingel</strong></td><td><strong>die Türklingeln</strong></td><td>soneria · soneriile</td><td>+n</td></tr>
                    <tr><td><strong>die Treppe</strong></td><td><strong>die Treppen</strong></td><td>scara · scările</td><td>+n</td></tr>
                    <tr><td><strong>die Etage</strong></td><td><strong>die Etagen</strong></td><td>etajul · etajele</td><td>+n (împrumut francez)</td></tr>
                    <tr><td><strong>das Gebäude</strong></td><td><strong>die Gebäude</strong></td><td>clădirea · clădirile</td><td>invariabil</td></tr>
                    <tr><td><strong>die Wohnung</strong></td><td><strong>die Wohnungen</strong></td><td>apartamentul · apartamentele</td><td>+en (-ung)</td></tr>
                    <tr><td><strong>die Hauptstraße</strong></td><td><strong>die Hauptstraßen</strong></td><td>strada principală · străzile principale</td><td>+n</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">📦 Substantive — pachet și conținut</h4>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO</th><th>Tipar</th></tr></thead>
                <tbody>
                    <tr><td><strong>das Paket</strong></td><td><strong>die Pakete</strong></td><td>pachetul · pachetele</td><td>+e</td></tr>
                    <tr><td><strong>die Schachtel</strong></td><td><strong>die Schachteln</strong></td><td>cutia · cutiile (carton subțire)</td><td>+n</td></tr>
                    <tr><td><strong>die Holzkiste</strong></td><td><strong>die Holzkisten</strong></td><td>cutia de lemn · cutiile de lemn</td><td>+n</td></tr>
                    <tr><td><strong>der Pappkarton</strong></td><td><strong>die Pappkartons</strong></td><td>cutia de carton · cutiile de carton</td><td>+s (împrumut)</td></tr>
                    <tr><td><strong>die Brille</strong></td><td><strong>die Brillen</strong></td><td>ochelarii (o pereche) · perechile de ochelari</td><td>+n · 🚨 SG în DE!</td></tr>
                    <tr><td><strong>die Farbe</strong></td><td><strong>die Farben</strong></td><td>culoarea · culorile</td><td>+n</td></tr>
                    <tr><td><strong>die Form</strong></td><td><strong>die Formen</strong></td><td>forma · formele</td><td>+en</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">👥 Substantive — persoane și animale</h4>
            <table class="grammar-table">
                <thead><tr><th>Singular</th><th>Plural</th><th>Traducere RO</th><th>Tipar</th></tr></thead>
                <tbody>
                    <tr><td><strong>der Lieferant</strong></td><td><strong>die Lieferanten</strong></td><td>livratorul · livratorii</td><td>+en (n-Deklination)</td></tr>
                    <tr><td><strong>der Nachbar</strong></td><td><strong>die Nachbarn</strong></td><td>vecinul · vecinii</td><td>+n (n-Deklination)</td></tr>
                    <tr><td><strong>die Nachbarin</strong></td><td><strong>die Nachbarinnen</strong></td><td>vecina · vecinele</td><td>+nen</td></tr>
                    <tr><td><strong>die Dame</strong></td><td><strong>die Damen</strong></td><td>doamna · doamnele</td><td>+n</td></tr>
                    <tr><td><strong>der Besitzer</strong></td><td><strong>die Besitzer</strong></td><td>proprietarul · proprietarii</td><td>invariabil</td></tr>
                    <tr><td><strong>der Hund</strong></td><td><strong>die Hunde</strong></td><td>câinele · câinii</td><td>+e</td></tr>
                    <tr><td><strong>die Katze</strong></td><td><strong>die Katzen</strong></td><td>pisica · pisicile</td><td>+n</td></tr>
                    <tr><td><strong>der Papagei</strong></td><td><strong>die Papageien</strong></td><td>papagalul · papagalii</td><td>+en</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">💬 Salutări și formule de politețe (B2 formal vs informal)</h4>
            <table class="grammar-table">
                <thead><tr><th>Germană</th><th>Traducere RO</th><th>Registru</th></tr></thead>
                <tbody>
                    <tr><td><strong>Guten Morgen</strong></td><td>Bună dimineața</td><td>formal, până la prânz</td></tr>
                    <tr><td><strong>Hallo</strong></td><td>Bună / Salut</td><td>informal</td></tr>
                    <tr><td><strong>Wie geht es dir?</strong></td><td>Ce mai faci? (du)</td><td>informal</td></tr>
                    <tr><td><strong>Wie geht es Ihnen?</strong></td><td>Ce mai faceți? (Sie)</td><td>formal</td></tr>
                    <tr><td><strong>Und Ihnen?</strong></td><td>Și dumneavoastră?</td><td>formal</td></tr>
                    <tr><td><strong>Schön, dich kennenzulernen</strong></td><td>Încântat să te cunosc</td><td>informal</td></tr>
                    <tr><td><strong>Vielen Dank</strong></td><td>Mulțumesc mult</td><td>universal</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:18px; margin-bottom:8px;">🎨 Adjective + expresii utile</h4>
            <table class="grammar-table">
                <thead><tr><th>Germană</th><th>Traducere RO</th><th>Context</th></tr></thead>
                <tbody>
                    <tr><td><strong>seltsam</strong></td><td>ciudat</td><td>adjectiv — Wie seltsam!</td></tr>
                    <tr><td><strong>schüchtern</strong></td><td>timid</td><td>adjectiv — Er ist schüchtern</td></tr>
                    <tr><td><strong>enttäuscht</strong></td><td>dezamăgit</td><td>participiu (Partizip II)</td></tr>
                    <tr><td><strong>erleichtert</strong></td><td>ușurat</td><td>participiu (Partizip II)</td></tr>
                    <tr><td><strong>blind</strong></td><td>orb</td><td>adjectiv — Er ist blind</td></tr>
                    <tr><td><strong>hübsch</strong></td><td>drăguț, frumușel</td><td>adjectiv</td></tr>
                    <tr><td><strong>Es klingelt</strong></td><td>sună (la sonerie)</td><td>expresie impersonală</td></tr>
                    <tr><td><strong>Wie seltsam!</strong></td><td>Ce ciudat!</td><td>exclamație</td></tr>
                    <tr><td><strong>Es tut mir leid</strong></td><td>Îmi pare rău</td><td>scuză</td></tr>
                    <tr><td><strong>zum Abschied winken</strong></td><td>a face cu mâna la revedere</td><td>expresie cu Dativ fix</td></tr>
                </tbody>
            </table>

            <div class="theory-box" style="background:#ecfdf5; border-color:#10b981; margin-top:18px; text-align:center;">
                <h4>🦋 Felicitări — ai parcurs toată povestea!</h4>
                <p>Andrew a aflat că pachetul aparținea doamnei Edwards de pe strada Principală 100 (sora domnului Edwards). Acum cunoști ~30 de substantive cu Sg+Pl, 9 verbe tematice, 7 adjective și 5 expresii de conversație B2.</p>
            </div>
        </div>
    </div>
`;

function buildTheory() {
    const container = document.getElementById('theory-container');
    if (!container) return;
    container.innerHTML = theoryHTML;
}

function toggleSubSection(i) {
    const c = document.getElementById('sub-section-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#theory-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;
    if (audio.paused) {
        audio.play();
        btn.textContent = '⏸';
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
    audio.onended = function() { btn.textContent = '▶'; };
}

buildTheory();
