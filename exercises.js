// ============================================
// EXERCIȚII — Das mysteriöse Paket (refactor mai 2026)
// Claudia Toth · Annettes Deutschkurs · B2 · 5 patterns
// normalizeAnswer robust (fold diacritice RO + separator flex)
// ============================================

function normalizeAnswer(s) {
    return (s || '')
        .toLowerCase()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '')
        .trim();
}

// ============================================
// EX 1: Vocabular fill-in (7 itemi — propoziții din poveste)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Es ____ an der Tür.', accept: ['klingelt'], correct: 'klingelt', hint: 'sună la sonerie' },
    { id: 'b', sentence: 'Andrew ____ den Pappkarton.', accept: ['oeffnet', 'öffnet'], correct: 'öffnet', hint: 'deschide' },
    { id: 'c', sentence: 'In der Kiste sind 10 verschiedene ____ .', accept: ['brillen'], correct: 'Brillen', hint: 'perechi de ochelari' },
    { id: 'd', sentence: 'Wem ____ das Paket?', accept: ['gehoert', 'gehört'], correct: 'gehört', hint: 'aparține (+ Dativ)' },
    { id: 'e', sentence: 'Andrew ____ an die Tür.', accept: ['klopft'], correct: 'klopft', hint: 'bate (la ușă)' },
    { id: 'f', sentence: 'Andrew ist erst zehn Jahre alt, aber er ____ sich wichtig.', accept: ['fuehlt', 'fühlt'], correct: 'fühlt', hint: 'se simte (reflexiv)' },
    { id: 'g', sentence: 'Herr Edwards ist ____ , deshalb hilft ihm sein Hund.', accept: ['blind'], correct: 'blind', hint: 'orb (adjectiv)' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Completează propozițiile din poveste.</strong><br>Folosește verbele/adjectivele potrivite din vocabular. Hint-ul îți dă traducerea RO.</div>';
    ex1Data.forEach((item, i) => {
        const parts = item.sentence.split('____');
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${parts[0]}<input type="text" id="ex1-${item.id}" placeholder="${item.hint}" style="width:200px; margin:0 4px;">${parts[1]}</label></div><div class="feedback" id="ex1-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex1-${item.id}`).value);
        const f = document.getElementById(`ex1-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.textContent = ok ? `✓ ${item.correct}` : `Corect: ${item.correct} (${item.hint})`;
        if (ok) correct++;
    });
    return { correct, total: ex1Data.length };
}

// ============================================
// EX 2: Sortare substantive după gen (der/die/das) cu Sg+Pl — 12 itemi
// ============================================
const ex2Words = [
    { de: 'Tür', pl: 'Türen', ro: 'ușa' },
    { de: 'Paket', pl: 'Pakete', ro: 'pachetul' },
    { de: 'Schachtel', pl: 'Schachteln', ro: 'cutia' },
    { de: 'Lieferant', pl: 'Lieferanten', ro: 'livratorul' },
    { de: 'Wohnung', pl: 'Wohnungen', ro: 'apartamentul' },
    { de: 'Gebäude', pl: 'Gebäude', ro: 'clădirea' },
    { de: 'Treppe', pl: 'Treppen', ro: 'scara' },
    { de: 'Hund', pl: 'Hunde', ro: 'câinele' },
    { de: 'Brille', pl: 'Brillen', ro: 'ochelarii' },
    { de: 'Nachbar', pl: 'Nachbarn', ro: 'vecinul' },
    { de: 'Katze', pl: 'Katzen', ro: 'pisica' },
    { de: 'Papagei', pl: 'Papageien', ro: 'papagalul' }
];
const ex2Solution = {
    'Tür':'die', 'Paket':'das', 'Schachtel':'die', 'Lieferant':'der',
    'Wohnung':'die', 'Gebäude':'das', 'Treppe':'die', 'Hund':'der',
    'Brille':'die', 'Nachbar':'der', 'Katze':'die', 'Papagei':'der'
};

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Sortează substantivele după gen.</strong><br>Pentru fiecare substantiv, scrie articolul corect: <strong>der</strong>, <strong>die</strong> sau <strong>das</strong>.</div>';
    ex2Words.forEach((w, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>____ <span class="nomen-highlight">${w.de}</span> · <em style="color:#6b7280;">${w.ro}</em> (pl: ${w.pl})</label><input type="text" id="ex2-${i}" placeholder="der/die/das" style="width:90px;"></div><div class="feedback" id="ex2-f${i}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Words.forEach((w, i) => {
        const u = normalizeAnswer(document.getElementById(`ex2-${i}`).value);
        const f = document.getElementById(`ex2-f${i}`);
        const expected = ex2Solution[w.de];
        const ok = u === expected;
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.textContent = ok ? `✓ ${expected} ${w.de} · die ${w.pl}` : `Corect: ${expected} ${w.de} · die ${w.pl}`;
        if (ok) correct++;
    });
    return { correct, total: ex2Words.length };
}

// ============================================
// EX 3: Verbe — forma corectă (Präsens / Präteritum / Perfekt) — 8 itemi
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'Andrew ____ zur Tür. (laufen, Präsens)', accept: ['laeuft', 'läuft'], correct: 'läuft', hint: 'er-Form Präsens TARE: ä' },
    { id: 'b', sentence: 'Andrew ____ die Tür. (öffnen, Präsens)', accept: ['oeffnet', 'öffnet'], correct: 'öffnet', hint: 'er-Form Präsens T-stem: -et' },
    { id: 'c', sentence: 'Andrew ____ an die Tür. (klopfen, Präteritum)', accept: ['klopfte'], correct: 'klopfte', hint: 'er-Form imperfect regulat: -te' },
    { id: 'd', sentence: 'Frau Smith ____ eine Brille. (tragen, Präsens)', accept: ['traegt', 'trägt'], correct: 'trägt', hint: 'er-Form Präsens TARE: a→ä' },
    { id: 'e', sentence: 'Andrew ____ den Besitzer. (finden, Perfekt)', accept: ['hat gefunden'], correct: 'hat gefunden', hint: 'er-Form Perfekt TARE cu haben' },
    { id: 'f', sentence: 'Es ____ an der Tür. (klingeln, Präteritum)', accept: ['klingelte'], correct: 'klingelte', hint: 'imperfect regulat impersonal' },
    { id: 'g', sentence: 'Das Paket ____ Frau Edwards. (gehören, Präsens)', accept: ['gehoert', 'gehört'], correct: 'gehört', hint: 'er-Form Präsens + DATIV' },
    { id: 'h', sentence: 'Andrew ____ sich schüchtern. (sich fühlen, Präsens)', accept: ['fuehlt', 'fühlt'], correct: 'fühlt', hint: 'er-Form Präsens reflexiv' }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Completează cu forma verbală corectă.</strong><br>Atenție: e specificat timpul (Präsens, Präteritum, Perfekt) + persoana. Verbele tari schimbă vocala la ich/du/er.</div>';
    ex3Data.forEach((item, i) => {
        const parts = item.sentence.split('____');
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${parts[0]}<input type="text" id="ex3-${item.id}" placeholder="${item.hint}" style="width:180px; margin:0 4px;">${parts[1]}</label></div><div class="feedback" id="ex3-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex3-${item.id}`).value);
        const f = document.getElementById(`ex3-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.textContent = ok ? `✓ ${item.correct}` : `Corect: ${item.correct} (${item.hint})`;
        if (ok) correct++;
    });
    return { correct, total: ex3Data.length };
}

// ============================================
// EX 4: Richtig oder Falsch — comprehensiune din poveste (8 itemi)
// ============================================
const ex4Data = [
    { id: 'a', text: 'Andrew ist 10 Jahre alt.', accept: ['r', 'richtig'], correct: 'Richtig', exp: 'Da, „Er ist erst zehn Jahre alt" (Kapitel 1).' },
    { id: 'b', text: 'In der Holzkiste sind 5 Brillen.', accept: ['f', 'falsch'], correct: 'Falsch', exp: 'Sunt 10 perechi de ochelari, nu 5 („10 verschiedene Brillen" — Kapitel 2).' },
    { id: 'c', text: 'Frau Smith wohnt im zweiten Stock.', accept: ['f', 'falsch'], correct: 'Falsch', exp: 'Frau Smith locuiește în fața lui Andrew (parter / același etaj). Herr Edwards e cel din etajul 2.' },
    { id: 'd', text: 'Familie Jones ist neu im Gebäude.', accept: ['r', 'richtig'], correct: 'Richtig', exp: 'Da, „Wir sind neu im Haus" — domnul Jones (Kapitel 4).' },
    { id: 'e', text: 'Diana ist ein Jahr jünger als Andrew.', accept: ['f', 'falsch'], correct: 'Falsch', exp: 'Diana e cu un an MAI MARE („ein Jahr älter") — Kapitel 5.' },
    { id: 'f', text: 'Herr Edwards ist blind.', accept: ['r', 'richtig'], correct: 'Richtig', exp: 'Da, „er ist blind" + are câine de însoțire (Kapitel 6).' },
    { id: 'g', text: 'Das Paket gehört Frau Edwards aus der Hauptstraße 100.', accept: ['r', 'richtig'], correct: 'Richtig', exp: 'Surpriza finală: sora domnului Edwards locuiește pe Hauptstraße 100, livratorul s-a încurcat (10 vs 100).' },
    { id: 'h', text: 'Herr Edwards hat einen Papagei und zwei Katzen.', accept: ['f', 'falsch'], correct: 'Falsch', exp: 'Are un papagal, PATRU pisici și un câine („vier Katzen und einen Hund").' }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Richtig oder Falsch?</strong><br>Citește din nou capitolele dacă nu ești sigur. Scrie <strong>R</strong> sau <strong>F</strong>.</div>';
    ex4Data.forEach((item, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${item.text}</label><input type="text" id="ex4-${item.id}" placeholder="R sau F" style="width:80px;"></div><div class="feedback" id="ex4-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex4-${item.id}`).value);
        const f = document.getElementById(`ex4-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.innerHTML = ok ? `✓ ${item.correct} — ${item.exp}` : `Corect: ${item.correct} — ${item.exp}`;
        if (ok) correct++;
    });
    return { correct, total: ex4Data.length };
}

// ============================================
// EX 5: Traducere RO → DE — expresii utile (7 itemi)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'Ce mai faceți? (formal)', accept: ['wie geht es ihnen', 'wie geht es ihnen?'], correct: 'Wie geht es Ihnen?' },
    { id: 'b', ro: 'Bună dimineața!', accept: ['guten morgen', 'guten morgen!'], correct: 'Guten Morgen!' },
    { id: 'c', ro: 'Încântat să te cunosc.', accept: ['schoen dich kennenzulernen', 'schön dich kennenzulernen', 'schoen dich kennenzulernen.', 'schön dich kennenzulernen.'], correct: 'Schön, dich kennenzulernen.' },
    { id: 'd', ro: 'Cui aparține asta?', accept: ['wem gehoert das', 'wem gehört das', 'wem gehoert das?', 'wem gehört das?'], correct: 'Wem gehört das?' },
    { id: 'e', ro: 'Îmi pare rău.', accept: ['es tut mir leid', 'es tut mir leid.'], correct: 'Es tut mir leid.' },
    { id: 'f', ro: 'Mulțumesc mult!', accept: ['vielen dank', 'vielen dank!'], correct: 'Vielen Dank!' },
    { id: 'g', ro: 'Ce ciudat!', accept: ['wie seltsam', 'wie seltsam!'], correct: 'Wie seltsam!' }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let html = '<div class="exercise-instruction"><strong>📝 Traducere RO → DE.</strong><br>Scrie expresia în germană. Verificarea acceptă cu/fără diacritice (ae=ä, oe=ö, ue=ü, ss=ß).</div>';
    ex5Data.forEach((item, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>🇷🇴 ${item.ro}</label><input type="text" id="ex5-${item.id}" placeholder="în germană..." style="width:100%;"></div><div class="feedback" id="ex5-f${item.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(item => {
        const u = normalizeAnswer(document.getElementById(`ex5-${item.id}`).value);
        const f = document.getElementById(`ex5-f${item.id}`);
        const ok = item.accept.some(a => normalizeAnswer(a) === u);
        f.className = ok ? 'feedback correct' : 'feedback incorrect';
        f.textContent = ok ? `✓ ${item.correct}` : `Corect: ${item.correct}`;
        if (ok) correct++;
    });
    return { correct, total: ex5Data.length };
}

// ============================================
// Build all + check/reset dispatchers
// ============================================
function checkExercise(n) {
    let result;
    if (n === 1) result = checkEx1();
    else if (n === 2) result = checkEx2();
    else if (n === 3) result = checkEx3();
    else if (n === 4) result = checkEx4();
    else if (n === 5) result = checkEx5();
    if (!result) return;
    const score = document.getElementById(`score-${n}`);
    if (score) {
        const pct = Math.round((result.correct / result.total) * 100);
        const emoji = pct === 100 ? '🏆' : pct >= 60 ? '👍' : '📖';
        score.className = 'score show';
        score.innerHTML = `${emoji} <strong>${result.correct} / ${result.total}</strong> corect (${pct}%)`;
    }
}

function resetExercise(n) {
    let data;
    if (n === 1) data = ex1Data;
    else if (n === 2) { ex2Words.forEach((_, i) => { const inp = document.getElementById(`ex2-${i}`); const fb = document.getElementById(`ex2-f${i}`); if (inp) inp.value=''; if (fb) { fb.className='feedback'; fb.textContent=''; } }); const s = document.getElementById('score-2'); if (s) { s.className='score'; s.innerHTML=''; } return; }
    else if (n === 3) data = ex3Data;
    else if (n === 4) data = ex4Data;
    else if (n === 5) data = ex5Data;
    if (!data) return;
    data.forEach(item => {
        const inp = document.getElementById(`ex${n}-${item.id}`);
        const fb = document.getElementById(`ex${n}-f${item.id}`);
        if (inp) inp.value = '';
        if (fb) { fb.className = 'feedback'; fb.textContent = ''; }
    });
    const s = document.getElementById(`score-${n}`);
    if (s) { s.className = 'score'; s.innerHTML = ''; }
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
