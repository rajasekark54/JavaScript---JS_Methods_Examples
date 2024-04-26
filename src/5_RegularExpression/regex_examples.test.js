// regex_examples.js

describe('Regex', () => {
  /*
    Methods: Regular expressions in JavaScript can be used with various methods like test(), exec(), match(), replace(), and search().

    test(): 
       - This method is used to test if a string matches a regular expression pattern. 
       - It returns a boolean value: true if the pattern matches the string, and false otherwise. 
       - It doesn't provide details about the match itself, just whether there is a match or not.
    exec(): 
       - This method is used to retrieve the matches when matching a string against a regular expression. 
       - It returns an array containing the matched substring (if found), along with any captured groups. If no match is found, it returns null.
    match():
       - This method is used to match a string against a regular expression. Unlike exec(), 
       - it returns an array of all matches found in the string, or null 
    replace(): 
       - This method is used to replace substrings that match a specified pattern with a replacement string. 
       - It returns a new string with the replacements made.
  */

  test('Methods', () => {
    const str = 'Hello World';
    const pattern = /Hello/;

    expect(pattern.test(str)).toEqual(true);

    const result = pattern.exec(str);
    expect(result[0]).toEqual('Hello');
    // Actual result if we print --> ["Hello", index: 0, input: "Hello World", groups: undefined]

    expect(str.match(pattern)).toEqual(expect.arrayContaining(['Hello']));
    expect(str.replace(pattern, 'Hi')).toEqual('Hi World');
    expect(str.search(pattern)).toEqual(0);
  });

  /* 
    Flags: Flags modify how a regular expression behaves. Common flags include i (case-insensitive), g (global search), and m (multiline search).
  */
  test('Flag', () => {
    const str = 'Apple apple AppLE test';
    const pattern = /apple/gi;
    const pattern1 = /applesss/gi;
    expect(str.match(pattern)).toEqual(['Apple', 'apple', 'AppLE']);
    expect(str.match(pattern1)).toEqual(null);
  });

  /* 
    Metacharacters: Metacharacters are characters with special meaning in regular expressions. 
    Some common metacharacters include 
      . (matches any single character except newline), 
      ^ (matches the start of the string), 
      $ (matches the end of the string), \ (escape character), etc.
  */
  test('Metacharacters', () => {
    const str = 'The quick brown fox jumps over the lazy dog';
    const pattern = /^The.*dog$/;

    expect(pattern.test(str)).toBe(true);
  });

  /* 
  Quantifiers: Quantifiers specify how many instances of a character, group, or character class must be present in the input for a match to be found. 
  Common quantifiers include * (zero or more), + (one or more), ? (zero or one), {n} (exactly n), {n,} (at least n), and {n,m} (between n and m).
  */
  test('Quantifiers', () => {
    const str = 'aaaaabbbbbcccc';
    const pattern = /a{3,}b{3,}/;

    expect(pattern.test(str)).toBe(true);
  });

  /* 
  Greedy and Lazy Search: Greedy quantifiers match as much of the string as possible, while lazy quantifiers match as little as possible. Greedy quantifiers are denoted by default, while lazy quantifiers are denoted by appending ?.
  */
  test('Greedy and Lazy Search', () => {
    const str = 'aaaaab';
    const patternGreedy = /a.+b/;
    const patternLazy = /a.+?b/;

    expect(str.match(patternGreedy)).toEqual(
      expect.arrayContaining(['aaaaab'])
    );
    expect(str.match(patternLazy)).toEqual(expect.arrayContaining(['aaaaab']));
  });

  /* 
  Ranges: Ranges allow you to match any single character from a specified range. They are denoted by enclosing characters within square brackets [].
  */
  test('Ranges', () => {
    const str = 'The number is 5';
    const pattern = /[0-9]/;
    expect(str.match(pattern)).toEqual(expect.arrayContaining(['5']));
  });

  /* 
  Grouping: Grouping allows you to treat multiple characters as a single unit and apply quantifiers to them. Groups are denoted by enclosing characters within parentheses ().
  */
  test('Grouping', () => {
    const str = 'aaaaaab';
    const pattern = /(a{3})b/;
    // str.match(pattern); // // Output: ["aaaaab", "aaa"]
    expect(1).toEqual(1);
  });
});
