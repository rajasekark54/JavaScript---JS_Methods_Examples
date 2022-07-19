/*
The Map object holds key-value pairs and remembers the original insertion order of the keys

Object is similar to Map—both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key.
*/

describe('Map', () => {
  test('1', () => {
    const map = new Map();

    map.set('a', 1);
    map.set('b', 2);
    map.set('c', 3);

    // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

    console.log();
    expect(map.get('a')).toEqual(1);

    map.set('a', 97);
    expect(map.get('a')).toEqual(97);

    expect(map.size).toEqual(3);

    map.delete('b');
    expect(map.size).toEqual(2);

    map['e'] = 5;
    expect(map.get('e')).toEqual(5);

    expect(map.has('e')).toEqual(true);
  });

  test('transform a 2D key-value Array into a map', () => {
    const arr = [
      ['a', 1],
      ['b', 2],
    ];

    const map = new Map(arr);

    expect(map.get('a')).toEqual(1);

    // transform a map into a 2D key-value Array
    expect(Array.from(map)).toEqual(arr);

    //Do the same using spread operator
    expect([...map]).toEqual(arr);

    // map.keys() o/p => MapIterator {'a', 'b', 'c'}
    // map.entries() o/p => MapIterator {'a' => 1, 'b' => 2, 'c' => 3}
  });

  test('merage map', () => {
    const first = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);

    const second = new Map([
      ['a', 4],
      ['b', 5],
    ]);

    // Spread operator essentially converts a Map to an Array
    // Merge two maps. The last repeated key wins.
    const merged = new Map([...first, ...second, ['d', 11]]);

    expect(merged.get('a')).toEqual(4);
    expect(merged.get('b')).toEqual(5);
    expect(merged.get('c')).toEqual(3);
    expect(merged.get('d')).toEqual(11);
  });
});
