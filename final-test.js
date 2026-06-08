// ============================================
// TEST FINAL — Das mysteriöse Paket (refactor mai 2026)
// Claudia Toth · 20 întrebări mixte (Leseverstehen + Wortschatz + Grammatik)
// Afișează greșelile cu răspuns corect + explicații (regula post-Ostern)
// ============================================

function normalizeTestAnswer(s) {
    return (s || '')
        .toLowerCase()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim()
        .trim();
}

const finalTestData = [
    // ===== 7 LESEVERSTEHEN (comprehensiune din poveste) =====
    { type: 'multiple', category: '📖 Leseverstehen', question: 'Wie alt ist Andrew?', options: ['8 Jahre', '10 Jahre', '12 Jahre', '15 Jahre'], correct: '10 Jahre', explanation: 'Andrew are 10 ani — „Er ist erst zehn Jahre alt" (Kapitel 1).' },
    { type: 'multiple', category: '📖 Leseverstehen', question: 'Was ist in der Holzkiste?', options: ['Bücher', 'Brillen', 'Schlüssel', 'Geld'], correct: 'Brillen', explanation: 'Sunt 10 perechi de ochelari („10 verschiedene Brillen" — Kapitel 2).' },
    { type: 'multiple', category: '📖 Leseverstehen', question: 'Wer wohnt im zweiten Stock?', options: ['Frau Smith', 'Familie Jones', 'Diana', 'Herr Edwards'], correct: 'Herr Edwards', explanation: 'Herr Edwards locuiește singur la etajul 2 cu papagal + 4 pisici + câine.' },
    { type: 'multiple', category: '📖 Leseverstehen', question: 'Wie viele Etagen hat das Gebäude?', options: ['Eine Etage', 'Zwei Etagen', 'Drei Etagen', 'Vier Etagen'], correct: 'Zwei Etagen', explanation: 'Clădirea are 2 etaje („Sein Gebäude hat zwei Etagen" — Kapitel 4).' },
    { type: 'multiple', category: '📖 Leseverstehen', question: 'Warum kann Herr Edwards keine Brillen tragen?', options: ['Er hat zu viele', 'Er ist blind', 'Er ist alt', 'Er trägt Kontaktlinsen'], correct: 'Er ist blind', explanation: 'Domnul Edwards e orb — câinele lui îl ajută („da er blind ist" — Kapitel 6).' },
    { type: 'multiple', category: '📖 Leseverstehen', question: 'Wem gehört das Paket letztendlich?', options: ['Frau Smith', 'Frau Jones', 'Frau Edwards (Hauptstraße 100)', 'Diana'], correct: 'Frau Edwards (Hauptstraße 100)', explanation: 'Pachetul aparține surorii domnului Edwards (Hauptstraße 100, nu 10) — Surpriza finală!' },
    { type: 'luckentext', category: '📖 Leseverstehen', question: 'Completează:', sentence: 'Diana ist ____ Jahr älter als Andrew.', translation: 'Diana e cu un an mai mare decât Andrew.', accept: ['ein', 'eines', '1'], correct: 'ein', explanation: 'Diana e cu UN an mai mare („Sie ist ein Jahr älter als Andrew" — Kapitel 5).' },

    // ===== 7 WORTSCHATZ (vocabular substantive + verbe) =====
    { type: 'multiple', category: '📚 Wortschatz', question: 'Care e articolul corect pentru Brille?', options: ['der', 'die', 'das'], correct: 'die', explanation: 'die Brille (feminin) — și SINGULAR în germană pentru o pereche de ochelari!' },
    { type: 'multiple', category: '📚 Wortschatz', question: 'Care e articolul corect pentru Paket?', options: ['der', 'die', 'das'], correct: 'das', explanation: 'das Paket (neutru), pluralul: die Pakete.' },
    { type: 'multiple', category: '📚 Wortschatz', question: 'Care e articolul corect pentru Lieferant?', options: ['der', 'die', 'das'], correct: 'der', explanation: 'der Lieferant (masculin, n-Deklination, pl: die Lieferanten).' },
    { type: 'translate', category: '📚 Wortschatz', question: 'Care e pluralul lui die Tür?', ro: 'die Tür → ?', accept: ['die tueren', 'die türen', 'tueren', 'türen'], correct: 'die Türen', explanation: 'Feminin +en — die Tür → die Türen.' },
    { type: 'translate', category: '📚 Wortschatz', question: 'Care e pluralul lui der Hund?', ro: 'der Hund → ?', accept: ['die hunde', 'hunde'], correct: 'die Hunde', explanation: 'Masculin +e — der Hund → die Hunde.' },
    { type: 'translate', category: '📚 Wortschatz', question: 'Cum se spune „a aparține" (+ Dativ) în germană?', ro: 'a aparține → ?', accept: ['gehoeren', 'gehören'], correct: 'gehören', explanation: 'gehören + DATIV: <em>Das Paket gehört IHM</em> (nu ihn!).' },
    { type: 'translate', category: '📚 Wortschatz', question: 'Cum se spune „a căuta proprietarul" în germană?', ro: 'a căuta proprietarul → ?', accept: ['den besitzer finden', 'den besitzer suchen'], correct: 'den Besitzer finden', explanation: 'finden = a găsi (acțiunea Andrew). suchen = a căuta. Akkusativ: DEN Besitzer (masculin).' },

    // ===== 6 GRAMMATIK =====
    { type: 'luckentext', category: '✏️ Grammatik', question: 'Forma corectă (Präsens, er-Form):', sentence: 'Frau Smith ____ eine Brille. (tragen)', translation: 'Doamna Smith poartă ochelari.', accept: ['traegt', 'trägt'], correct: 'trägt', explanation: 'tragen e TARE: a → ä la du/er-Form. Du trägst, er trägt.' },
    { type: 'luckentext', category: '✏️ Grammatik', question: 'Forma corectă (Präsens, er-Form):', sentence: 'Andrew ____ zur Tür. (laufen)', translation: 'Andrew aleargă la ușă.', accept: ['laeuft', 'läuft'], correct: 'läuft', explanation: 'laufen e TARE: au → äu la du/er-Form. Du läufst, er läuft.' },
    { type: 'luckentext', category: '✏️ Grammatik', question: 'Perfekt corect:', sentence: 'Andrew ____ den Besitzer ____ . (finden)', translation: 'Andrew a găsit proprietarul.', accept: ['hat gefunden'], correct: 'hat gefunden', explanation: 'finden e TARE: Partizip = gefunden (i→a→u). Auxiliar haben (acțiune cu obiect direct).' },
    { type: 'multiple', category: '✏️ Grammatik', question: 'Care e cazul corect după „gehören"?', options: ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'], correct: 'Dativ', explanation: 'gehören cere DATIV: Das Paket gehört MIR/DIR/IHM/IHR/UNS/EUCH/IHNEN.' },
    { type: 'multiple', category: '✏️ Grammatik', question: 'Cum se traduce „Wem gehört das?"?', options: ['Cine este acolo?', 'Cui aparține asta?', 'Ce e asta?', 'De unde e asta?'], correct: 'Cui aparține asta?', explanation: 'Wem = Cui? (Dativ Frage), gehört = aparține. Antwort: Das gehört [Person im Dativ].' },
    { type: 'translate', category: '✏️ Grammatik', question: 'Traduceți în germană:', ro: 'Sună la ușă.', accept: ['es klingelt an der tuer', 'es klingelt an der tür', 'es klingelt an der tuer.', 'es klingelt an der tür.'], correct: 'Es klingelt an der Tür.', explanation: 'Construcție impersonală cu „es klingelt". „an der Tür" = Dativ feminin (an + die → an der).' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const c = document.getElementById('final-test-container');
    if (!c) return;
    c.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Test final cu <strong>20 întrebări mixte</strong>: 7 Leseverstehen + 7 Wortschatz + 6 Grammatik.</p>
            <ul class="test-info-list">
                <li>📋 <strong>Format:</strong> o întrebare pe pagină</li>
                <li>✅ <strong>Verificare:</strong> feedback instant + recapitulare greșeli la final</li>
                <li>🎓 <strong>Prag promovare:</strong> 70%</li>
                <li>⏱️ <strong>Timp estimat:</strong> 12-18 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar"><div class="test-progress-fill" id="progress-fill"></div></div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    currentQuestionIndex = 0;
    userAnswers = {};
    showQuestion(0);
}

function showQuestion(idx) {
    const q = finalTestData[idx];
    if (!q) return;
    const container = document.getElementById('question-container');
    const progressText = document.getElementById('progress-text');
    const progressCategory = document.getElementById('progress-category');
    const progressFill = document.getElementById('progress-fill');
    if (progressText) progressText.textContent = `Întrebarea ${idx + 1} / ${finalTestData.length}`;
    if (progressCategory) progressCategory.textContent = q.category;
    if (progressFill) progressFill.style.width = `${((idx + 1) / finalTestData.length) * 100}%`;
    let inputHTML = '';
    if (q.type === 'multiple') {
        inputHTML = '<div class="test-options">';
        q.options.forEach((opt) => {
            const checked = userAnswers[idx] === opt ? 'checked' : '';
            inputHTML += `<label class="test-option"><input type="radio" name="test-q${idx}" value="${opt}" ${checked}><span>${opt}</span></label>`;
        });
        inputHTML += '</div>';
    } else if (q.type === 'luckentext') {
        const sentence = q.sentence.replace('____', `<input type="text" id="test-input" value="${userAnswers[idx] || ''}" placeholder="completează" style="width:160px; margin:0 6px;">`);
        inputHTML = `<p style="font-size:1.1rem; margin-bottom:8px;">${sentence}</p><p style="color:#6b7280; font-style:italic;">🇷🇴 ${q.translation || ''}</p>`;
    } else {
        const ro = q.ro ? `<p style="margin-bottom:8px;">🇷🇴 ${q.ro}</p>` : '';
        inputHTML = `${ro}<input type="text" id="test-input" value="${userAnswers[idx] || ''}" placeholder="răspunsul tău..." style="width:100%; padding:10px; font-size:1rem;">`;
    }
    container.innerHTML = `<div class="test-question"><h4>${q.question}</h4>${inputHTML}</div>`;
    const fb = document.getElementById('test-feedback');
    if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    const prevBtn = document.getElementById('test-prev-btn');
    const nextBtn = document.getElementById('test-next-btn');
    if (prevBtn) prevBtn.style.display = idx === 0 ? 'none' : 'inline-block';
    if (nextBtn) nextBtn.textContent = idx === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const radio = document.querySelector(`input[name="test-q${currentQuestionIndex}"]:checked`);
        userAnswer = radio ? radio.value : '';
    } else {
        const inp = document.getElementById('test-input');
        userAnswer = inp ? inp.value : '';
    }
    userAnswers[currentQuestionIndex] = userAnswer;
    const fb = document.getElementById('test-feedback');
    if (!userAnswer) {
        fb.className = 'feedback incorrect';
        fb.innerHTML = '⚠️ Te rog să dai un răspuns.';
        return;
    }
    let ok = false;
    if (q.type === 'multiple') {
        ok = userAnswer === q.correct;
    } else {
        const u = normalizeTestAnswer(userAnswer);
        ok = q.accept.some(a => normalizeTestAnswer(a) === u);
    }
    fb.className = ok ? 'feedback correct' : 'feedback incorrect';
    fb.innerHTML = ok
        ? `✓ Corect! <em>${q.explanation}</em>`
        : `✗ Greșit. Răspuns corect: <strong>${q.correct}</strong>. <em>${q.explanation}</em>`;
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
        return;
    }
    saveCurrentAnswer();
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
}

function prevQuestion() {
    if (currentQuestionIndex === 0) return;
    saveCurrentAnswer();
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
}

function saveCurrentAnswer() {
    const q = finalTestData[currentQuestionIndex];
    if (q.type === 'multiple') {
        const radio = document.querySelector(`input[name="test-q${currentQuestionIndex}"]:checked`);
        if (radio) userAnswers[currentQuestionIndex] = radio.value;
    } else {
        const inp = document.getElementById('test-input');
        if (inp) userAnswers[currentQuestionIndex] = inp.value;
    }
}

function finishTest() {
    saveCurrentAnswer();
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => {
        const userAnswer = userAnswers[i] || '';
        let isCorrect = false;
        if (q.type === 'multiple') isCorrect = userAnswer === q.correct;
        else {
            const u = normalizeTestAnswer(userAnswer);
            isCorrect = q.accept.some(a => normalizeTestAnswer(a) === u);
        }
        if (isCorrect) correct++;
    });
    const total = finalTestData.length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;
    document.getElementById('test-wizard').style.display = 'none';
    const r = document.getElementById('test-results');
    r.style.display = 'block';

    // Lista greșelilor cu răspuns corect + explicație (post-Ostern feedback)
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => {
        const userAnswer = userAnswers[i] || '';
        let isCorrect = false;
        if (q.type === 'multiple') isCorrect = userAnswer === q.correct;
        else {
            const u = normalizeTestAnswer(userAnswer);
            isCorrect = q.accept.some(a => normalizeTestAnswer(a) === u);
        }
        if (!isCorrect) mistakes.push({ idx: i + 1, q, userAnswer });
    });

    if (mistakes.length > 0) {
        mistakesHTML = '<div style="margin-top:30px; padding:20px; background:#fef2f2; border:2px solid #fca5a5; border-radius:12px;">' +
            '<h4 style="color:#991b1b; margin-bottom:12px;">📝 Greșelile tale — recapitulare cu răspunsuri corecte</h4>';
        mistakes.forEach(m => {
            const userShow = m.userAnswer ? `<em>„${m.userAnswer}"</em>` : '<em>(fără răspuns)</em>';
            mistakesHTML += '<div style="background:#fff; padding:12px 14px; margin-bottom:10px; border-left:4px solid #dc2626; border-radius:6px;">' +
                `<div style="font-weight:bold; color:#065f46; margin-bottom:6px;">Întrebarea ${m.idx} <span style="color:#6b7280; font-weight:normal; font-size:0.85rem;">· ${m.q.category}</span></div>` +
                `<div style="margin-bottom:6px; color:#374151;">${m.q.question}` +
                (m.q.sentence ? ` <em style="color:#6b7280;">${m.q.sentence}</em>` : '') +
                (m.q.ro && !m.q.sentence ? ` <em style="color:#6b7280;">🇷🇴 ${m.q.ro}</em>` : '') +
                '</div>' +
                `<div style="color:#dc2626; font-size:0.92rem;">❌ Răspunsul tău: ${userShow}</div>` +
                `<div style="color:#047857; font-size:0.92rem; margin-top:4px;">✓ Răspuns corect: <strong>${m.q.correct}</strong></div>` +
                `<div style="color:#6b7280; font-size:0.88rem; font-style:italic; margin-top:6px; padding-top:6px; border-top:1px dashed #e5e7eb;">💡 ${m.q.explanation}</div>` +
                '</div>';
        });
        mistakesHTML += '</div>';
    } else {
        mistakesHTML = '<div style="margin-top:24px; padding:16px; background:#ecfdf5; border:2px solid #10B981; border-radius:12px; text-align:center;">' +
            '<p style="color:#065f46; font-weight:bold;">🏆 Toate răspunsurile corecte — fără greșeli!</p></div>';
    }

    r.innerHTML = `
        <h3 style="color:#065f46; text-align:center;">${passed ? '🏆 Felicitări — Test trecut!' : '📖 Mai exersează puțin'}</h3>
        <div style="text-align:center; font-size:2rem; font-weight:bold; color:${passed ? '#047857' : '#dc2626'}; margin:20px 0;">${correct} / ${total} <span style="font-size:1.2rem;">(${pct}%)</span></div>
        <p style="text-align:center; color:#6b7280;">${passed ? 'Cunoști bine povestea Andrew și vocabularul!' : 'Recitește capitolele și încearcă din nou.'}</p>
        ${mistakesHTML}
        <div style="text-align:center; margin-top:20px;">
            <button class="btn btn-check" onclick="resetTest()">↻ Reia testul</button>
        </div>
    `;
}

function resetTest() {
    currentQuestionIndex = 0;
    userAnswers = {};
    testCompleted = false;
    document.getElementById('test-results').style.display = 'none';
    document.getElementById('test-intro').style.display = 'block';
}

buildFinalTest();
