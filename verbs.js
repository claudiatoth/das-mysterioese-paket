// ============================================
// VERB-KONJUGATION — Das mysteriöse Paket (refactor mai 2026)
// Claudia Toth · 4 verbe-cheie din povestea Andrew
// Toate PONS-verified · Präteritum → RO IMPERFECT (regula 12)
// ============================================

const verbsData = [
    {
        inf: 'klingeln', ro: 'a suna (la sonerie)', typ: 'regulat', aux: 'haben', part: 'geklingelt',
        praes: [['ich','klingle','sun (la sonerie)'],['du','klingelst','suni'],['er/sie/es','klingelt','sună'],['wir','klingeln','sunăm'],['ihr','klingelt','sunați'],['sie/Sie','klingeln','sună']],
        praet: [['ich','klingelte','sunam'],['du','klingeltest','sunai'],['er/sie/es','klingelte','suna'],['wir','klingelten','sunam'],['ihr','klingeltet','sunați'],['sie/Sie','klingelten','sunau']],
        perf: [['ich','habe geklingelt','am sunat'],['du','hast geklingelt','ai sunat'],['er/sie/es','hat geklingelt','a sunat'],['wir','haben geklingelt','am sunat'],['ihr','habt geklingelt','ați sunat'],['sie/Sie','haben geklingelt','au sunat']],
        note: '🔗 Verbul-deschidere al lecției: <em>Es klingelt an der Tür.</em> (Sună la ușă.) Verb impersonal cu „es" sau personal. Atenție: ich klingle (nu „klingele"), pentru că -el final se contracta natural.',
        same: 'lernen, kochen, kaufen, klopfen — același tipar regulat slab'
    },
    {
        inf: 'öffnen', ro: 'a deschide', typ: 'regulat (T-stem)', aux: 'haben', part: 'geöffnet',
        praes: [['ich','öffne','deschid'],['du','öffnest','deschizi'],['er/sie/es','öffnet','deschide'],['wir','öffnen','deschidem'],['ihr','öffnet','deschideți'],['sie/Sie','öffnen','deschid']],
        praet: [['ich','öffnete','deschideam'],['du','öffnetest','deschideai'],['er/sie/es','öffnete','deschidea'],['wir','öffneten','deschideam'],['ihr','öffnetet','deschideați'],['sie/Sie','öffneten','deschideau']],
        perf: [['ich','habe geöffnet','am deschis'],['du','hast geöffnet','ai deschis'],['er/sie/es','hat geöffnet','a deschis'],['wir','haben geöffnet','am deschis'],['ihr','habt geöffnet','ați deschis'],['sie/Sie','haben geöffnet','au deschis']],
        note: '🚨 Capcana -e adițional T-D-M-N: radicalul *öffn-* se termină în „n" după consoană (ffn), deci la persoana 2/3 sg + 2 pl + Präteritum + Partizip se adaugă -e- înainte de desinență (öffn<strong>e</strong>st, öffn<strong>e</strong>t, ge<strong>öffnet</strong>). <em>Andrew öffnet die Tür.</em>'
    },
    {
        inf: 'gehören', ro: 'a aparține', typ: 'regulat', aux: 'haben', part: 'gehört',
        praes: [['ich','gehöre','aparțin'],['du','gehörst','aparții'],['er/sie/es','gehört','aparține'],['wir','gehören','aparținem'],['ihr','gehört','aparțineți'],['sie/Sie','gehören','aparțin']],
        praet: [['ich','gehörte','aparțineam'],['du','gehörtest','aparțineai'],['er/sie/es','gehörte','aparținea'],['wir','gehörten','aparțineam'],['ihr','gehörtet','aparțineați'],['sie/Sie','gehörten','aparțineau']],
        perf: [['ich','habe gehört','am aparținut'],['du','hast gehört','ai aparținut'],['er/sie/es','hat gehört','a aparținut'],['wir','haben gehört','am aparținut'],['ihr','habt gehört','ați aparținut'],['sie/Sie','haben gehört','au aparținut']],
        note: '🔗 Verb cu DATIV OBLIGATORIU: <em>Wem gehört das Paket?</em> (Cui aparține pachetul?) — Antwort: <em>Das Paket gehört mir/dir/ihm/ihr/uns/euch/ihnen.</em> Prefix INSEPARABIL ge- → Partizip FĂRĂ ge- supliemntar (gehört, NU gegehört).'
    },
    {
        inf: 'finden', ro: 'a găsi', typ: 'tare / neregulat', aux: 'haben', part: 'gefunden',
        praes: [['ich','finde','găsesc'],['du','findest','găsești'],['er/sie/es','findet','găsește'],['wir','finden','găsim'],['ihr','findet','găsiți'],['sie/Sie','finden','găsesc']],
        praet: [['ich','fand','găseam'],['du','fandest','găseai'],['er/sie/es','fand','găsea'],['wir','fanden','găseam'],['ihr','fandet','găseați'],['sie/Sie','fanden','găseau']],
        perf: [['ich','habe gefunden','am găsit'],['du','hast gefunden','ai găsit'],['er/sie/es','hat gefunden','a găsit'],['wir','haben gefunden','am găsit'],['ihr','habt gefunden','ați găsit'],['sie/Sie','haben gefunden','au găsit']],
        note: '🚨 Verb TARE: schimbare vocală i→a la Präteritum (find→fand), apoi u la Partizip (gefunden). Andrew findet den Besitzer = caut + găsit final. Plus T-stem: du findest, er findet — -e adițional după -nd.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function(x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    var hint = '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (perfect compus / timp vorbit)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#6b7280;">' + ex[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '<div class="exercise-instruction"><strong>🔁 4 verbe-cheie din povestea Andrew</strong> — klingeln (sună la ușă) · öffnen (Andrew deschide pachetul) · gehören+Dativ (cui aparține?) · finden (caută proprietarul). Toate PONS-verified.</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">Cele 4 verbe construiesc întreaga acțiune a poveștii: <em>klingelt</em> (sună soneria) → Andrew <em>öffnet</em> (deschide ușa, apoi pachetul) → întrebarea cheie <em>Wem gehört das Paket?</em> (cui aparține?) → Andrew <em>findet</em> proprietarul. Capcana cea mai mare: <em>gehören</em> cere DATIV (gehört MIR, DIR, IHM — NU mich/dich/ihn). 🦋</div>' +
        '</div></div>';

    verbsData.forEach(function(v, i) {
        let badge;
        if (v.typ.indexOf('auxiliar') >= 0) badge = '#7c3aed';
        else if (v.typ.indexOf('tare') >= 0) badge = '#dc2626';
        else badge = '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            (v.same ? '<div class="theory-box" style="background:#d1fae5;"><p style="margin:0;">📎 <strong>Același tipar regulat:</strong> ' + v.same + '</p></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
