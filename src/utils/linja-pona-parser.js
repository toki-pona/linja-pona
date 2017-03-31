import dict from '../linja-pona/ligatures';

const matchWord = text => {
    return (text.match(/^\S+|^\s+/) || [])[0];
};

const matchGlyph = text => {
    return dict.find(({ key, code }) => text.startsWith(key));
};

const stringToLP = text => {
    if (!text.length) {
        return '';
    }

    const glyph = matchGlyph(text);
    if (glyph) {
        return String.fromCharCode(glyph.code) + stringToLP(text.substr(glyph.key.length));
    } else {
        const word = matchWord(text);
        return word + stringToLP(text.substr(word.length));
    }
};

export {stringToLP};
