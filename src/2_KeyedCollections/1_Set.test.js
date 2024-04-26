/*
The Set object lets you store unique values of any type, whether if primitive values 
Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection

// If we insert object {a: 1} multiple time it will not overwrite. premitive types t can 
*/

describe('Set', () => {
  test('1', () => {
    const set = new Set();

    set.add(1);
    set.add(3);
    set.add(3);

    expect(set.size).toEqual(2); //unique values

    set.add({ a: 1 });
    set.add({ a: 1 });
    expect(set.size).toEqual(4); //unique for only primitives

    expect(set.has(3)).toEqual(true);

    set.delete(3);
    expect(set.has(3)).toEqual(false);

    expect([...set]).toEqual([1, { a: 1 }, { a: 1 }]);
  });
});
