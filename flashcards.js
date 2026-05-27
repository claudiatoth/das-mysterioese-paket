// ============================================
// FLASHCARDS — Das mysteriöse Paket (refactor mai 2026)
// Claudia Toth · Annettes Deutschkurs · B2 · 32 carduri
// Substantive cu Sg + Pl (regula 13) · Audio Hedda pre-generat
// ⚠️ ZERO ghilimele interne — CAPS pentru emfază
// ============================================

const flashcardsData = [
    // ===== 16 SUBSTANTIVE cu Sg + Pl =====
    { de: "die Tür · die Türen", ro: "ușa · ușile (feminin +en)", audio: "audio/cards/01-tuer.wav" },
    { de: "die Türklingel · die Türklingeln", ro: "soneria · soneriile (feminin +n)", audio: "audio/cards/02-tuerklingel.wav" },
    { de: "die Treppe · die Treppen", ro: "scara · scările (feminin +n)", audio: "audio/cards/03-treppe.wav" },
    { de: "die Etage · die Etagen", ro: "etajul · etajele (împrumut francez, +n)", audio: "audio/cards/04-etage.wav" },
    { de: "das Gebäude · die Gebäude", ro: "clădirea · clădirile (neutru invariabil)", audio: "audio/cards/05-gebaeude.wav" },
    { de: "die Wohnung · die Wohnungen", ro: "apartamentul · apartamentele (-ung feminin +en)", audio: "audio/cards/06-wohnung.wav" },
    { de: "das Paket · die Pakete", ro: "pachetul · pachetele (neutru +e)", audio: "audio/cards/07-paket.wav" },
    { de: "die Schachtel · die Schachteln", ro: "cutia · cutiile (feminin +n)", audio: "audio/cards/08-schachtel.wav" },
    { de: "die Holzkiste · die Holzkisten", ro: "cutia de lemn · cutiile de lemn (feminin +n)", audio: "audio/cards/09-holzkiste.wav" },
    { de: "die Brille · die Brillen", ro: "ochelarii O PERECHE · perechi de ochelari · ATENȚIE singular în DE", audio: "audio/cards/10-brille.wav" },
    { de: "der Lieferant · die Lieferanten", ro: "livratorul · livratorii (masculin +en n-Deklination)", audio: "audio/cards/11-lieferant.wav" },
    { de: "der Nachbar · die Nachbarn", ro: "vecinul · vecinii (masculin +n n-Deklination)", audio: "audio/cards/12-nachbar.wav" },
    { de: "die Dame · die Damen", ro: "doamna · doamnele (feminin +n)", audio: "audio/cards/13-dame.wav" },
    { de: "der Hund · die Hunde", ro: "câinele · câinii (masculin +e)", audio: "audio/cards/14-hund.wav" },
    { de: "die Katze · die Katzen", ro: "pisica · pisicile (feminin +n)", audio: "audio/cards/15-katze.wav" },
    { de: "der Papagei · die Papageien", ro: "papagalul · papagalii (masculin +en)", audio: "audio/cards/16-papagei.wav" },

    // ===== 9 VERBE =====
    { de: "klingeln", ro: "a suna la sonerie · regulat · haben (hat geklingelt)", audio: "audio/cards/17-klingeln.wav" },
    { de: "öffnen", ro: "a deschide · regulat T-stem · haben (hat geöffnet)", audio: "audio/cards/18-oeffnen.wav" },
    { de: "klopfen", ro: "a bate la ușă · regulat · haben (hat geklopft)", audio: "audio/cards/19-klopfen.wav" },
    { de: "gehören (+ Dativ)", ro: "a aparține · regulat · haben (hat gehört) · Wem gehört das?", audio: "audio/cards/20-gehoeren.wav" },
    { de: "tragen (trägt)", ro: "a purta / a duce · TARE · haben (hat getragen) · du trägst, er trägt", audio: "audio/cards/21-tragen.wav" },
    { de: "finden (fand, gefunden)", ro: "a găsi · TARE · haben · ich fand (imperfect), ich habe gefunden", audio: "audio/cards/22-finden.wav" },
    { de: "laufen (läuft)", ro: "a alerga · TARE · sein (ist gelaufen) · du läufst, er läuft", audio: "audio/cards/23-laufen.wav" },
    { de: "sich freuen", ro: "a se bucura · reflexiv regulat · haben (hat sich gefreut)", audio: "audio/cards/24-sich-freuen.wav" },
    { de: "sich fühlen", ro: "a se simți · reflexiv regulat · haben (hat sich gefühlt)", audio: "audio/cards/25-sich-fuehlen.wav" },

    // ===== 5 ADJECTIVE / PARTICIPII =====
    { de: "seltsam", ro: "ciudat · Wie seltsam!", audio: "audio/cards/26-seltsam.wav" },
    { de: "schüchtern", ro: "timid · Er ist schüchtern", audio: "audio/cards/27-schuechtern.wav" },
    { de: "enttäuscht", ro: "dezamăgit · participiu (Partizip II)", audio: "audio/cards/28-enttaeuscht.wav" },

    // ===== 4 EXPRESII / SALUTĂRI =====
    { de: "Wie geht es Ihnen?", ro: "Ce mai faceți? · formal cu Sie", audio: "audio/cards/29-wie-geht-ihnen.wav" },
    { de: "Schön, dich kennenzulernen", ro: "Încântat să te cunosc · informal", audio: "audio/cards/30-kennenzulernen.wav" },
    { de: "Es tut mir leid", ro: "Îmi pare rău · scuză", audio: "audio/cards/31-tut-mir-leid.wav" },
    { de: "Wem gehört das?", ro: "Cui aparține asta? · Dativ-Frage", audio: "audio/cards/32-wem-gehoert.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const c = document.getElementById('flashcards-container');
    if (!c) return;
    c.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 32 carduri Das mysteriöse Paket</strong> — 16 substantive (Sg + Pl), 9 verbe, 3 adjective, 4 expresii / salutări.<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție Hedda. Folosește săgețile pentru navigare.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = flashcardsData[currentCardIndex];
    const deEl = document.getElementById('flashcard-de');
    const roEl = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const fc = document.getElementById('flashcard');
    if (deEl) deEl.textContent = card.de;
    if (roEl) roEl.textContent = card.ro;
    if (counter) counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (fc) fc.classList.remove('flipped');
}

function flipCard() {
    const fc = document.getElementById('flashcard');
    if (fc) fc.classList.toggle('flipped');
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
    updateFlashcard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
    updateFlashcard();
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    if (card.audio) {
        currentAudio = new Audio(card.audio);
        currentAudio.play().catch(() => playWithTTS(card.de));
    } else {
        playWithTTS(card.de);
    }
}

function playWithTTS(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'de-DE';
        u.rate = 0.82;
        window.speechSynthesis.speak(u);
    }
}

buildFlashcards();
