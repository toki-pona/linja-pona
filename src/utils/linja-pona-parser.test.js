import {stringToLP} from './linja-pona-parser';

it('parses simple words and foreign words', () => {
    const chars = stringToLP('toki Inli.');
    expect(chars).toEqual('\ue66c Inli.');
});

it('parses compound words', () => {
    const chars = stringToLP('sitelen-ma li lili');
    expect(chars).toEqual('\uf012 \ue627 \ue628');
});

it('parses concatenated native words like foreign words', () => {
    const chars = stringToLP('ijopona');
    expect(chars).toEqual('ijopona');
});
