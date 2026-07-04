const key_c = {
    'c': 1, 'b#': 1, 'c#': 2, 'd♭': 2, 'd': 3, 'd#': 4, 'e♭': 4, 'e': 5, 'f♭': 5, 'e#': 6, 'f': 6, 'f#': 7, 'g♭': 7, 'g': 8, 'g#': 9, 'a♭': 9,
    'a': 10, 'a#': 11, 'b♭': 11, 'b': 12, 'c♭': 12
};
const key_g = {
    'g': 1, 'g#': 2, 'a♭': 2, 'a': 3, 'a#': 4, 'b♭': 4, 'b': 5, 'c♭': 5, 'b#': 6, 'c': 6, 'c#': 7, 'd♭': 7, 'd': 8, 'd#': 9, 'e♭': 9,
    'e': 10, 'f♭': 10, 'e#': 11, 'f': 11, 'f#': 12, 'g♭': 12
};
const key_d = {
    'd': 1, 'd#': 2, 'e♭': 2, 'e': 3, 'f♭': 3, 'e#': 4, 'f': 4, 'f#': 5, 'g♭': 5, 'g': 6, 'g#': 7, 'a♭': 7, 'a': 8, 'a#': 9, 'b♭': 9,
    'b': 10, 'c♭': 10, 'b#': 11, 'c': 11, 'c#': 12, 'd♭': 12
};
const key_a = {
    'a': 1, 'a#': 2, 'b♭': 2, 'b': 3, 'c♭': 3, 'b#': 4, 'c': 4, 'c#': 5, 'd♭': 5, 'd': 6, 'd#': 7, 'e♭': 7, 'e': 8, 'f♭': 8, 'e#': 9, 'f': 9, 'f#': 10,
    'g♭': 10, 'g': 11, 'g#': 12, 'a♭': 12
};
const key_e = {
    'e': 1, 'f♭': 1, 'e#': 2, 'f': 2, 'f#': 3, 'g♭': 3, 'g': 4, 'g#': 5, 'a♭': 5, 'a': 6, 'a#': 7, 'b♭': 7, 'b': 8, 'c♭': 8, 'c': 9, 'b#': 9, 'c#': 10,
    'd♭': 10, 'd': 11, 'd#': 12, 'e♭': 12
};
const key_b = {
    'b': 1, 'c♭': 1, 'b#': 2, 'c': 2, 'c#': 3, 'd♭': 3, 'd': 4, 'd#': 5, 'e♭': 5, 'e': 6, 'f♭': 6, 'e#': 7, 'f': 7, 'f#': 8, 'g♭': 8, 'g': 9, 'g#': 10,
    'a♭': 10, 'a': 11, 'a#': 12, 'b♭': 12
};
const key_gb = {
    'g♭': 1, 'f#': 1, 'g': 2, 'g#': 3, 'a♭': 3, 'a': 4, 'a#': 5, 'b♭': 5, 'b': 6, 'c♭': 6, 'b#': 7, 'c': 7, 'c#': 8, 'd♭': 8, 'd': 9,
    'd#': 10, 'e♭': 10, 'e': 11, 'f♭': 11, 'e#': 12, 'f': 12
};
const key_db = {
    'd♭': 1, 'c#': 1, 'd': 2, 'd#': 3, 'e♭': 3, 'e': 4, 'f♭': 4, 'e#': 5, 'f': 5, 'f#': 6, 'g♭': 6, 'g': 7, 'g#': 8, 'a♭': 8, 'a': 9,
    'a#': 10, 'b♭': 10, 'b': 11, 'c♭': 11, 'b#': 12, 'c': 12
};
const key_ab = {
    'a♭': 1, 'g#': 1, 'a': 2, 'a#': 3, 'b♭': 3, 'b': 4, 'c♭': 4, 'b#': 5, 'c': 5, 'c#': 6, 'd♭': 6, 'd': 7, 'd#': 8, 'e♭': 8, 'e': 9, 'f♭': 9,
    'e#': 10, 'f': 10, 'f#': 11, 'g♭': 11, 'g': 12
};
const key_eb = {
    'e♭': 1, 'd#': 1, 'e': 2, 'f♭': 2, 'e#': 3, 'f': 3, 'f#': 4, 'g♭': 4, 'g': 5, 'g#': 6, 'a♭': 6, 'a': 7, 'a#': 8, 'b♭': 8, 'b': 9,
    'c': 10, 'c#': 11, 'd♭': 11, 'd': 12
};
const key_bb = {
    'b♭': 1, 'a#': 1, 'b': 2, 'c♭': 2, 'b#': 3, 'c': 3, 'c#': 4, 'd♭': 4, 'd': 5, 'd#': 6, 'e♭': 6, 'e': 7, 'f': 8, 'f#': 9, 'g♭': 9,
    'g': 10, 'g#': 11, 'a♭': 11, 'a': 12
};
const key_f = {
    'f': 1, 'e#': 1, 'f#': 2, 'g♭': 2, 'g': 3, 'g#': 4, 'a♭': 4, 'a': 5, 'a#': 6, 'b♭': 6, 'b': 7, 'c♭': 7, 'b#': 8, 'c': 8, 'c#': 9, 'd♭': 9,
    'd': 10, 'd#': 11, 'e♭': 11, 'e': 12, 'f♭': 12
};

const minor2 = 1;
const major2 = 2;
const minor3 = 3;
const major3 = 4;
const perfect4 = 5;
const tritone = 6;
const perfect5 = 7;
const minor6 = 8;
const major6 = 9;
const minor7 = 10;
const major7 = 11;

const MAX_NOTES = 6;

const ROOT_TO_KEY = {
    'c': key_c, 'b#': key_c,
    'g': key_g,
    'd': key_d,
    'a': key_a,
    'e': key_e, 'f♭': key_e,
    'b': key_b, 'c♭': key_b,
    'g♭': key_gb, 'f#': key_gb,
    'd♭': key_db, 'c#': key_db,
    'a♭': key_ab, 'g#': key_ab,
    'e♭': key_eb, 'd#': key_eb,
    'b♭': key_bb, 'a#': key_bb,
    'f': key_f, 'e#': key_f,
};

const CHORD_HANDLERS = {
    2: two_notes,
    3: three_notes,
    4: four_notes,
    5: five_notes,
    6: six_notes,
};

let resultEl;
let historyListEl;

const state = {
    showingResult: false,
};

function getKeySignature(rootNote) {
    return ROOT_TO_KEY[rootNote.toLowerCase()] ?? null;
}

function parseNotes(value) {
    return value.trim().split(/\s+/).filter(Boolean);
}

function getIntervals(keySig, notes) {
    const rootValue = keySig[notes[0].toLowerCase()];
    if (rootValue === undefined) {
        return null;
    }

    const intervals = [];
    for (let i = 1; i < notes.length; i++) {
        const noteValue = keySig[notes[i].toLowerCase()];
        if (noteValue === undefined) {
            return null;
        }
        intervals.push(noteValue - rootValue);
    }
    return intervals;
}

function normalizeNotes(notes) {
    return notes.map((note) => note.toLowerCase());
}

function addToHistory(originalNotes, result) {
    const entry = document.createElement('p');
    entry.textContent = originalNotes.toUpperCase() + ' = ' + result;
    historyListEl.prepend(entry);
}

function showResult(message) {
    resultEl.value = message;
    state.showingResult = true;
}

function clearScreen() {
    resultEl.value = '';
    state.showingResult = false;
}

function display(displayValue) {
    if (state.showingResult) {
        clearScreen();
    }

    const currentValue = resultEl.value;

    if (displayValue === '♭' || displayValue === '#') {
        if (!currentValue.length || currentValue.endsWith(displayValue)) {
            return;
        }
        resultEl.value = currentValue + displayValue;
        return;
    }

    const note = displayValue.trim().toLowerCase();
    if (!note) {
        return;
    }

    const tokens = parseNotes(currentValue).map((token) => token.toLowerCase());
    if (tokens.includes(note) || tokens.length >= MAX_NOTES) {
        return;
    }

    const displayNote = displayValue.trim().toUpperCase();
    resultEl.value = tokens.length ? currentValue + ' ' + displayNote : displayNote;
}

function backspace() {
    if (state.showingResult) {
        clearScreen();
        return;
    }

    let value = resultEl.value.slice(0, -1);
    if (value.endsWith(' ')) {
        value = value.slice(0, -1);
    }
    resultEl.value = value;
}

function calculate() {
    if (state.showingResult) {
        clearScreen();
        return;
    }

    const notes = parseNotes(resultEl.value);
    const originalLabel = notes.join(' ');

    if (notes.length < 2) {
        showResult('Enter 2 or more notes');
        return;
    }

    if (notes.length > MAX_NOTES) {
        showResult('Enter up to 6 notes');
        return;
    }

    const handler = CHORD_HANDLERS[notes.length];
    const result = handler(notes);
    addToHistory(originalLabel, result);
    showResult(result);
}

function two_notes(notes) {
    const normalized = normalizeNotes(notes);
    const keySig = getKeySignature(normalized[0]);
    if (!keySig) {
        return 'Invalid note';
    }

    const int_in_chord = getIntervals(keySig, normalized);
    if (!int_in_chord) {
        return 'Invalid note';
    }

    let result;

    if(int_in_chord.includes(minor2)){
                result = 'Minor 2nd (♭2)';
            } else if(int_in_chord.includes(major2)){
                result = 'Major 2nd (2)';
            } else if(int_in_chord.includes(minor3)){
                result = 'Minor 3rd (♭3)';
            } else if(int_in_chord.includes(major3)){
                result = 'Major 3rd (3)';
            } else if(int_in_chord.includes(perfect4)){
                result = 'Perfect 4th (4)';
            } else if(int_in_chord.includes(tritone)){
                result = 'Tri-tone (#4/♭5)';
            } else if(int_in_chord.includes(perfect5)){
                result = 'Perfect 5th (5)';
            } else if(int_in_chord.includes(minor6)){
                result = 'Minor 6th (♭6)';
            } else if(int_in_chord.includes(major6)){
                result = 'Major 6 (6)';
            } else if(int_in_chord.includes(minor7)){
                result = 'Minor 7th (♭7)';
            } else if(int_in_chord.includes(major7)){
                result = 'Major 7th (7)';
            } else {
                result = 'Not Found';
            }

    return result;
}

function three_notes(notes) {
    const working = normalizeNotes(notes);
    let result = 'Not Found';
    let tries = 0;
    let found = false;

    while (!found) {
        const keySig = getKeySignature(working[0]);
        if (!keySig) {
            return 'Invalid note';
        }

        const int_in_chord = getIntervals(keySig, working);
        if (!int_in_chord) {
            return 'Invalid note';
        }

        if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5)){
                    found = true;
                    result = working[0].toUpperCase() + 'm';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5)){
                    found = true;
                    result = working[0].toUpperCase();
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(major7)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj7 (no 5th)';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor7)){
                    found = true;
                    result = working[0].toUpperCase() + 'm7 (no 5th)';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor7)){
                    found = true;
                    result = working[0].toUpperCase() + '7 (no 5th)';
                } else if(int_in_chord.includes(major2) && int_in_chord.includes(perfect5)){
                    found = true;
                    result = working[0].toUpperCase() + 'sus2';
                } else if(int_in_chord.includes(perfect4) && int_in_chord.includes(perfect5)){
                    found = true;
                    result = working[0].toUpperCase() + 'sus4';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(tritone)){
                    found = true;
                    result = working[0].toUpperCase() + 'dim';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor6)){
                    found = true;
                    result = working[0].toUpperCase() + 'aug';
                } else {
                    working.push(working.shift());
                    tries++;
                    if (tries >= working.length) {
                        found = true;
                    }
                }
    }

    return result;
}

function four_notes(notes) {
    const working = normalizeNotes(notes);
    let result = 'Not Found';
    let tries = 0;
    let found = false;

    while (!found) {
        const keySig = getKeySignature(working[0]);
        if (!keySig) {
            return 'Invalid note';
        }

        const int_in_chord = getIntervals(keySig, working);
        if (!int_in_chord) {
            return 'Invalid note';
        }

        if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7)){
                    found = true;
                    result = working[0].toUpperCase() + 'm7';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj7';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor6) && int_in_chord.includes(major7)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj7#5';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor6) && int_in_chord.includes(minor7)){
                    found = true;
                    result = working[0].toUpperCase() + 'min7#5';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7)){
                    found = true;
                    result = working[0].toUpperCase() + '7';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor6) && int_in_chord.includes(minor7)){
                    found = true;
                    result = working[0].toUpperCase() + '7#5';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(tritone) && int_in_chord.includes(minor7)){
                    found = true;
                    result = working[0].toUpperCase() + '7♭5';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7)){
                    found = true;
                    result = working[0].toUpperCase() + 'min/maj7';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + 'add2';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + 'm add2';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(tritone) && int_in_chord.includes(minor7)){
                    found = true;
                    result = working[0].toUpperCase() + 'm7♭5';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(tritone) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'dim7';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + 'add4';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + 'm add4';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'm6';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + '6';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(major7) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj9 (no 5th)';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor7) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + 'm9 (no 5th)';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor7) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + '9 (no 5th)';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor7) && int_in_chord.includes(minor3)){
                    found = true;
                    result = working[0].toUpperCase() + '7#9 (no 5th)';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor7) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + '11 (no 5th)';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor7) && int_in_chord.includes(tritone)){
                    found = true;
                    result = working[0].toUpperCase() + '7#11 (no 5th)';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor7) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + '13 (no 5th)';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(major7) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + 'min/maj9 (no 5th)';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + 'min/maj11 (no 5th)';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(major7) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'min/maj13 (no 5th)';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(major6) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + '6/9 (no 5th)';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(major6) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + 'm6/9 (no 5th)';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj11 (no 5th)';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor7) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + 'm11 (no 5th)';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor7) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'm13 (no 5th)';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(major7) && int_in_chord.includes(tritone)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj7#11 (no 5th)';
        
                } else {
                    working.push(working.shift());
                    tries++;
                    if (tries >= working.length) {
                        found = true;
                    }
                }
    }

    return result;
}

function five_notes(notes) {
    const working = normalizeNotes(notes);
    let result = 'Not Found';
    let tries = 0;
    let found = false;

    while (!found) {
        const keySig = getKeySignature(working[0]);
        if (!keySig) {
            return 'Invalid note';
        }

        const int_in_chord = getIntervals(keySig, working);
        if (!int_in_chord) {
            return 'Invalid note';
        }

        if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + 'm9';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj9';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + '9';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(minor6)){
                    found = true;
                    result = working[0].toUpperCase() + '9#5';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(tritone) && int_in_chord.includes(minor7) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + '9♭5';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(minor2)){
                    found = true;
                    result = working[0].toUpperCase() + '7♭9';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(minor3)){
                    found = true;
                    result = working[0].toUpperCase() + '7#9';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + '11';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(tritone)){
                    found = true;
                    result = working[0].toUpperCase() + '7#11';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor6) && int_in_chord.includes(minor7) && int_in_chord.includes(minor3)){
                    found = true;
                    result = working[0].toUpperCase() + '7#5#9';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(tritone) && int_in_chord.includes(minor7) && int_in_chord.includes(minor3)){
                    found = true;
                    result = working[0].toUpperCase() + '7♭5#9';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor6) && int_in_chord.includes(minor7) && int_in_chord.includes(minor2)){
                    found = true;
                    result = working[0].toUpperCase() + '7#5♭9';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(tritone) && int_in_chord.includes(minor7) && int_in_chord.includes(minor2)){
                    found = true;
                    result = working[0].toUpperCase() + '7♭5♭9';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + '13';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + 'min/maj9';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + 'min/maj11';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'min/maj13';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major6) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + '6/9';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major6) && int_in_chord.includes(major2)){
                    found = true;
                    result = working[0].toUpperCase() + 'm6/9';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj11';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + 'm11';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'm13';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(tritone)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj7#11';
                }  else if(int_in_chord.includes(major3) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj13 (no 5th)';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj11 (no 5th)';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(minor7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + '11 (no 5th)';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + 'min/maj11 (no 5th)';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'min/maj13 (no 5th)';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'min/maj13 (no 5th)';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj13 (no 5th)';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + 'm11 (no 5th)';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor7) && int_in_chord.includes(major2) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'm13 (no 5th)';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(minor7) && int_in_chord.includes(perfect4) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'm13';
        
                } else {
                    working.push(working.shift());
                    tries++;
                    if (tries >= working.length) {
                        found = true;
                    }
                }
    }

    return result;
}

function six_notes(notes) {
    const working = normalizeNotes(notes);
    let result = 'Not Found';
    let tries = 0;
    let found = false;

    while (!found) {
        const keySig = getKeySignature(working[0]);
        if (!keySig) {
            return 'Invalid note';
        }

        const int_in_chord = getIntervals(keySig, working);
        if (!int_in_chord) {
            return 'Invalid note';
        }

        if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj13';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj11';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + '11';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + 'min/maj11';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'min/maj13';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(perfect4) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'min/maj13';
                } else if(int_in_chord.includes(major3) && int_in_chord.includes(perfect5) && int_in_chord.includes(major7) && int_in_chord.includes(major2) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'maj13';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(major2) && int_in_chord.includes(perfect4)){
                    found = true;
                    result = working[0].toUpperCase() + 'm11';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(major2) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'm13';
                } else if(int_in_chord.includes(minor3) && int_in_chord.includes(perfect5) && int_in_chord.includes(minor7) && int_in_chord.includes(perfect4) && int_in_chord.includes(major6)){
                    found = true;
                    result = working[0].toUpperCase() + 'm13';
                } else {
                    working.push(working.shift());
                    tries++;
                    if (tries >= working.length) {
                        found = true;
                    }
                }
    }

    return result;
}

function clearHistory() {
    historyListEl.replaceChildren();
}

function init() {
    resultEl = document.getElementById('result');
    historyListEl = document.getElementById('history-list');

    document.getElementById('clear').addEventListener('click', clearScreen);
    document.getElementById('backspace').addEventListener('click', backspace);
    document.getElementById('equals').addEventListener('click', calculate);
    document.getElementById('clear_history').addEventListener('click', clearHistory);

    document.querySelectorAll('#calculator .note').forEach((button) => {
        button.addEventListener('click', () => display(' ' + button.value));
    });

    document.getElementById('flat').addEventListener('click', () => display('♭'));
    document.getElementById('sharp').addEventListener('click', () => display('#'));
}

document.addEventListener('DOMContentLoaded', init);
