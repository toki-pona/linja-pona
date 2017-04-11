import _ from 'lodash';
import dict from '../linja-pona/ligatures';

const matchWord = text => {
    return (text.match(/^\S+|^\s+/) || [])[0];
};

const matchGlyph = text => {
    return dict.find(({ key, code }) => {
        const isGlyphAtStart = text.startsWith(key);
        if(!isGlyphAtStart) {
            return false;
        }
        const nextChar = text.charAt(key.length);
        return nextChar.length === 0 || !nextChar.match(/[a-z\-]/);
    });
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

const SPECIAL_KEYS = new Set([
    'aa',
    'a ',
    'a!',
    'oo',
    'o ',
    'o!',
    'ee',
    'e ',
    'e!',
    '  ',
    ', ',
    '. ',
    ': ',
    '! ',
    '? ',
    'seme?',
    'kin!',
    'zz',
]);

const isSpecial = ({key}) => SPECIAL_KEYS.has(key);

let wlCache;
const getWordsList = () => {
    if(!wlCache) {
        wlCache = _(dict).sortBy('key').reject(isSpecial).value();
    }
    return wlCache;
}

export {stringToLP, getWordsList};
