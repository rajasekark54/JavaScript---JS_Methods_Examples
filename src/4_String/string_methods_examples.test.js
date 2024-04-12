describe('at and charAt', () => {
  const string = '012 456';
  test('at', () => {
    const index = 4;

    //Bracket Notation
    expect(string.at(index)).toEqual('4');
    expect(string[index]).toEqual('4');
  });

  test('charAt', () => {
    const index = 4;

    // charAt Implementation
    expect(string.charAt(index)).toEqual('4');
    expect(string[index]).toEqual('4');
  });
});

describe('charCodeAt', () => {
  // The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
  //return ASCII value alphapets

  const word = 'aAbBcC2';
  test('1', () => {
    expect(word.charCodeAt(0)).toEqual(97);
    expect(word.charCodeAt(1)).toEqual(65);
    expect(word.charCodeAt(6)).toEqual(50);
    expect(word.charCodeAt(100)).toEqual(NaN);
  });
});

describe('codePointAt', () => {
  const word = 'aAbBcC2';
  test('1', () => {
    expect(word.codePointAt(0)).toEqual(97);
    expect(word.codePointAt(1)).toEqual(65);
    expect(word.codePointAt(6)).toEqual(50);
    expect(word.codePointAt(100)).toEqual(undefined);
  });
});

describe('concat', () => {
  test('1', () => {
    const str1 = 'Hello';
    const str2 = 'World';

    expect(str1.concat(' ', str2)).toEqual('Hello World');
    expect(str1.concat(', ', str2)).toEqual('Hello, World');
  });
});

describe('endWith and startWith', () => {
  // length - is considered as end of string
  test('startWith', () => {
    let str = '012 456 89';

    expect(str.endsWith('89')).toBe(true);
    expect(str.endsWith('56')).toBe(false);
    expect(str.endsWith('456', 6)).toBe(false);
  });

  test('startWith', () => {
    let str = 'To be, or not to be, that is the question.';

    const str1 = str.startsWith('To be');
    const str2 = str.startsWith('not to be');
    const str3 = str.startsWith('not to be', 10);

    expect(str1).toBe(true);
    expect(str2).toBe(false);
    expect(str3).toBe(true);
  });
});

describe('includes', () => {
  // length - begin from
  // case sensitivity
  test('1', () => {
    const string = 'hello World';

    expect(string.includes('ello ')).toBe(true);
    expect(string.includes('world')).toBe(false);
    expect(string.includes('World')).toBe(true);
    expect(string.includes('hello')).toBe(true);
    expect(string.includes('hello', 4)).toBe(false);
  });
});

describe('indexOf', () => {
  // return index of first occurance
  // lenght - begin from
  // if search not available, it would be -1
  // case sensitive
  test('1', () => {
    const string = 'hellow world heloow world';

    const searchStr = 'world';
    const indexOfFirst = string.indexOf(searchStr);
    const indexOfSecond = string.indexOf(searchStr, indexOfFirst + 1);

    expect(indexOfFirst).toEqual(7);
    expect(indexOfSecond).toEqual(20);
    expect(string.indexOf('WORLD')).toEqual(-1);
  });
});

describe('lastIndexOf', () => {
  // return index of last occurance
  // position - considered as end of string
  test('1', () => {
    const string = 'hellow world heloow world';
    const searchStr = 'world';
    const searchLastIndex = string.lastIndexOf(searchStr);
    const searchLastIndexOfPos = string.lastIndexOf(searchStr, 15);

    expect(searchLastIndex).toEqual(20);
    expect(searchLastIndexOfPos).toEqual(7);
    expect(string.lastIndexOf('sdsdsd')).toEqual(-1);
  });
});

describe('match', () => {
  // retrieves the result of matching a string
  // should pul regex inside the quote
  test('1', () => {
    const string = 'The quick brown fox jumps over the lazy dog. It barked.';
    const str2 =
      'My grandfather is 65 years old and My grandmother is 63 years old.';

    const regex = /[A-Z]/g;
    const found = string.match(regex);
    const foundText = string.match('');
    const foundNum = str2.match(65); // returns ["65"]

    expect(found).toMatchObject(['T', 'I']);
    expect(foundText).toMatchObject(['']);
  });
});

describe('normalize', () => {
  test('1', () => {
    const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
    const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

    console.log(`${name1}, ${name2}`);
    // expected output: "Amélie, Amélie"
    console.log(name1 === name2);
    // expected output: false
    console.log(name1.length === name2.length);
    // expected output: false

    const name1NFC = name1.normalize('NFC');
    const name2NFC = name2.normalize('NFC');

    console.log(`${name1NFC}, ${name2NFC}`);
    // expected output: "Amélie, Amélie"
    console.log(name1NFC === name2NFC);
    // expected output: true
    console.log(name1NFC.length === name2NFC.length);
    // expected output: true
  });
});

describe('padEnd and padStart', () => {
  // pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length
  test('padEnd', () => {
    let str = 'abc';

    let str2 = str.padEnd(10);
    let str3 = str.padEnd(10, 'def');
    expect(str2).toHaveLength(10);
    expect(str3).toHaveLength(10);
    expect(str3).toEqual('abcdefdefd');
  });

  test('padStart', () => {
    let str = 'abc';

    let str1 = str.padStart(10);
    let str2 = str.padStart(10, 'def');
    expect(str1).toHaveLength(10);
    expect(str2).toEqual('defdefdabc');
    expect(str).toHaveLength(3);
  });
});

describe('repeat', () => {
  // repeat the str, num of times. count includes the original str.
  // count will be converted to integer (ex: 2.5)
  test('1', () => {
    let str = 'abc';
    let str2 = str.repeat(2);
    let str3 = str.repeat(2.5);

    expect(str2).toHaveLength(6);
    expect(str2).toEqual('abcabc');
    expect(str3).toHaveLength(6);
    expect(str).toHaveLength(3);
  });
});

describe('replace and replaceAll', () => {
  test('replace', () => {
    let str = 'hello world Hello World hello world';

    let str1 = str.replace('world', 'raj');
    let str2 = str.replace(/world/g, 'raj');
    let str3 = str.replace(/world/gi, 'raj');

    expect(str1).toEqual('hello raj Hello World hello world');
    expect(str2).toEqual('hello raj Hello World hello raj');
    expect(str3).toEqual('hello raj Hello raj hello raj');
  });

  test('replaceAll', () => {
    let str = 'hello world Hello World hello world';

    let str1 = str.replaceAll('world', 'raj');
    let str2 = str.replaceAll(/world/gi, 'raj');

    expect(str1).toEqual('hello raj Hello World hello raj');
    expect(str2).toEqual('hello raj Hello raj hello raj');
  });
});

describe('search', () => {
  test('1', () => {
    const str = 'abcDefg';

    const regex = /[A-Z]/g;
    const regex1 = /[.]/g;

    // returns 3, which is the index of the first capital letter "D"
    const str1 = str.search(regex);

    // returns -1 cannot find '.' dot punctuation
    const str2 = str.search(regex1);

    expect(str1).toEqual(3);
    expect(str2).toEqual(-1);
    expect(str).toEqual('abcDefg');
  });
});

describe('slice', () => {
  // extract
  // startFrom, endFrom (<=, <)
  test('1', () => {
    const str = 'The quick brown fox jumps over the lazy dog.';

    const str1 = str.slice(0);
    const str2 = str.slice(1);
    const str3 = str.slice(4, 9);
    const str4 = str.slice(-0);
    const str5 = str.slice(-1);
    const str6 = str.slice(-9, -4);

    expect(str).toEqual('The quick brown fox jumps over the lazy dog.');
    expect(str1).toEqual('The quick brown fox jumps over the lazy dog.');
    expect(str2).toEqual('he quick brown fox jumps over the lazy dog.');
    expect(str3).toEqual('quick');
    expect(str4).toEqual('The quick brown fox jumps over the lazy dog.');
    expect(str5).toEqual('.');
    expect(str6).toEqual('lazy ');
  });
});

describe('split', () => {
  test('1', () => {
    const str = 'The quick brown fox jumps over the lazy dog.';

    const str1 = str.split(' ');
    const str2 = str.split('');
    const str3 = str.split();

    expect(str1[3]).toEqual('fox');
    expect(Array.isArray(str2)).toBe(true);
    expect(str3[0]).toEqual(str);
  });
});

describe('subString', () => {
  // start, end (<=, <)
  // between index
  test('1', () => {
    const str = 'Hello World';

    const str1 = str.substring(0, 1);
    const str2 = str.substring(1, 0);
    const str3 = str.substring(4);
    const str4 = str.substring(4, 8);
    const str5 = str.substring(8, 4);

    expect(str1).toEqual('H');
    expect(str2).toEqual('H');
    expect(str3).toEqual('o World');
    expect(str4).toEqual('o Wo');
    expect(str5).toEqual('o Wo');
  });
});

describe('lower and upper case', () => {
  test('lowerCase', () => {
    const str = 'ALPHAPETS';
    const str1 = str.toLowerCase();

    expect(str1).toEqual('alphapets');
    expect(str).toEqual('ALPHAPETS');
  });

  test('upperCase', () => {
    const str = 'alphapets';
    const str1 = str.toUpperCase();

    expect(str1).toEqual('ALPHAPETS');
    expect(str).toEqual('alphapets');
  });
});

describe('toString', () => {
  test('1', () => {
    const strObj = new String('Raj');
    const str = strObj.toString();
    const str1 = parseInt(13).toString(2);

    expect(str).toEqual('Raj');
    expect(str1).toEqual('1101');
  });
});

describe('trim', () => {
  test('trim', () => {
    expect('   Hello World    '.trim()).toEqual('Hello World');
  });

  test('trimEnd', () => {
    expect('   Hello World    '.trimEnd()).toEqual('   Hello World');
  });

  test('trimStart', () => {
    expect('   Hello World    '.trimStart()).toEqual('Hello World    ');
  });

  //it is alias of trim start and end
  test('trim left and right', () => {
    expect('   Hello World    '.trimLeft()).toEqual('Hello World    ');
    expect('   Hello World    '.trimRight()).toEqual('   Hello World');
  });
});
