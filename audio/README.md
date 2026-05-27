# Audio — Das mysteriöse Paket

## 🎙️ Pentru Claudia: încarcă MP3-uri cu vocea ta (DE + RO)

În lecție există **7 secțiuni teorie** (6 capitole povestea + vocabular sintetizat). Audio vocea Claudiei (înregistrat de tine, DE + RO) — încarcă fișierele MP3 aici cu numele EXACT de mai jos:

| Nr | Fișier MP3 | Conținut de înregistrat |
|----|------------|--------------------------|
| 1 | `01-kapitel-1.mp3` | Kapitel 1 (DE + RO) — Es klingelt an der Tür · Andrew primește pachetul |
| 2 | `02-kapitel-2.mp3` | Kapitel 2 (DE + RO) — Andrew öffnet das Paket · 10 perechi ochelari |
| 3 | `03-kapitel-3.mp3` | Kapitel 3 (DE + RO) — Frau Smith · vecina vârstnică |
| 4 | `04-kapitel-4.mp3` | Kapitel 4 (DE + RO) — Familie Jones · familia nouă |
| 5 | `05-kapitel-5.mp3` | Kapitel 5 (DE + RO) — Diana · colega de școală |
| 6 | `06-kapitel-6.mp3` | Kapitel 6 (DE + RO) — Herr Edwards · surpriza finală |
| 7 | `07-vocabular.mp3` | Vocabular tematic sintetizat (DE + RO) |

### Cum încarci pe GitHub
1. Mergi la [github.com/claudiatoth/das-mysterioese-paket/tree/main/audio](https://github.com/claudiatoth/das-mysterioese-paket/tree/main/audio)
2. Click pe „Add file" → „Upload files"
3. Drag-and-drop fișierele MP3 (cu numele exacte din tabel)
4. Commit changes
5. Pe Pages durează ~30s să se propage

### După upload — agent reactivează butoanele audio
După ce ai încărcat MP3-urile, anunță agentul să re-introducă butoanele „▶ Ascultă" în `theory.js` pentru fiecare capitol — fișierul rămâne identic în structură, doar `<div class="lesson-audio">` cu butoanele revin.

---

## 🤖 Audio flashcards (Hedda — generat automat)

În folderul `cards/` sunt **32 fișiere WAV Hedda** (Microsoft Hedda Desktop de-DE) pre-generate pentru pronunția flashcards-urilor:

- `01-tuer.wav` ... `32-wem-gehoert.wav`

Acestea NU se schimbă — sunt generate automat pentru pronunție rapidă a cuvintelor individuale. Vocea Claudiei e doar la teorie (cele 7 fișiere din folderul `audio/` direct, NU în `audio/cards/`).
