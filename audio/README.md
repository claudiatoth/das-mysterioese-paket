# Audio — Das mysteriöse Paket

## Subsecțiuni teorie (7 fișiere WAV Hedda)
- `01-kapitel-1.wav` — Kapitel 1: Es klingelt an der Tür
- `02-kapitel-2.wav` — Kapitel 2: Andrew öffnet das Paket
- `03-kapitel-3.wav` — Kapitel 3: Frau Smith
- `04-kapitel-4.wav` — Kapitel 4: Familie Jones
- `05-kapitel-5.wav` — Kapitel 5: Diana
- `06-kapitel-6.wav` — Kapitel 6: Herr Edwards (Surpriza finală)
- `07-vocabular.wav` — Vocabular tematic sintetizat

## Carduri (32 fișiere WAV Hedda — `audio/cards/NN-name.wav`)
Toate cele 32 flashcards au audio pre-generat Hedda (Microsoft Hedda Desktop de-DE) + fallback TTS browser.

## Generare
Pattern Unicode-safe pentru Umlaut (regula 11 din AGENTS-README):
```powershell
Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$synth.SelectVoice('Microsoft Hedda Desktop')
$synth.Rate = 0
$synth.SetOutputToWaveFile($wavPath)
$synth.Speak($text)
$synth.Dispose()
```

SSML cu `<break time="60ms"/>` între prefix și sufix pentru plurale problemă (regula post-Ostern).
