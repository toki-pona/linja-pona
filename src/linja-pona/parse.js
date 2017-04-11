import fs from 'q-io/fs';
import path from 'path';
import sort from 'immutable-sort';

const INPUT_FILE = path.join(__dirname, 'ligatures.txt');
const OUTPUT_FILE = path.join(__dirname, 'ligatures.js');

//"sub k i w e n hyphen j e l o by uniF032;"
const LINE_RE = /^sub\s(.+\s)+by uni([0-9A-F]+);$/;
const CHAR_DICT = {
    a: 'a',
    e: 'e',
    i: 'i',
    j: 'j',
    k: 'k',
    l: 'l',
    m: 'm',
    n: 'n',
    o: 'o',
    p: 'p',
    s: 's',
    t: 't',
    u: 'u',
    w: 'w',
    z: 'z',
    hyphen: '-',
    space: ' ',
    comma: ',',
    period: '.',
    colon: ':',
    exclam: '!',
    question: '?'
};

const IGNORED_CHARS = {
    _65535: true
};

const ADDITIONS = [
    {
        key: 'a',
        code: 58880
    },
    {
        key: 'e',
        code: 58889
    },
    {
        key: 'o',
        code: 58948
    }
];

const parseLine = line => {
    const matches = line.match(LINE_RE);
    if (!matches) {
        return null;
    }
    const [, encKey, hexCode] = matches;

    const key = decodeKey(encKey);
    if(key === '') {
        return null;
    }
    const code = decodeCode(hexCode);
    return { key, code };
};

const decodeKey = encKey => encKey.trim().split(' ').map(decodeChar).join('');

const decodeChar = char => {
    if (IGNORED_CHARS[char]) {
        return '';
    }
    if (CHAR_DICT.hasOwnProperty(char)) {
        return CHAR_DICT[char];
    }
    throw new RangeError(`Unknown char "${char}"`);
};

const decodeCode = code => parseInt(code, 16);

const mapLines = txt => {
    return sort(txt.split('\n')
        .map(line => parseLine(line.trim()))
        .filter(line => line), compareByKeyLength)
        .concat(ADDITIONS)
        ;
};

const compareByKeyLength = (dictionaryItemL, dictionaryItemR) => {
    const lengthL = dictionaryItemL.key.length;
    const lengthR = dictionaryItemR.key.length;
    return lengthR - lengthL;
};

const main = async () => {
    const ligaTxt = await fs.read(INPUT_FILE);
    const dict = mapLines(ligaTxt);
    const dictJson = JSON.stringify(dict, false, 2);
    await fs.write(OUTPUT_FILE, `module.exports = ${dictJson};`);
};
main();
