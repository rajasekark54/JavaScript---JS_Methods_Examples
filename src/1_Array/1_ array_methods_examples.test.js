describe("Array", () => {
  test("at", () => {
    const arr = [5, 12, 8, 130, 44];

    expect(arr.at(1)).toEqual(12);
    expect(arr.at(-2)).toEqual(130);
    expect(arr[1]).toEqual(12);
    expect(arr[-2]).toEqual(undefined);
  });

  test("cancat", () => {
    const letters = ["a", "b", "c"];
    const numbers = [1, 2, 3];

    let arr = letters.concat(numbers);
    let arr1 = [...letters, ...numbers];

    expect(arr).toEqual(["a", "b", "c", 1, 2, 3]);
    expect(arr1).toEqual(["a", "b", "c", 1, 2, 3]);
    expect(letters).toEqual(letters);

    const num1 = [1, 2, 3];
    const num2 = [4, 5, 6];
    const num3 = [7, 8, 9];

    const num4 = num1.concat(num2, num3);
    expect(num4).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  // every element in the array should pass the test
  // arguments - element, index, array
  test("every", () => {
    const array1 = [1, 30, 39, 29, 10, 13];
    res1 = array1.every((x, index, array) => x < 40);

    expect(res1).toBe(true);
  });

  // The fill() method changes all elements in an array to a static value
  // arguments - value, startfrom, uptoEnd
  // overwrite an original array;
  test("fill", () => {
    const arr = [1, 2, 3, 4];

    expect(arr.fill(1, 1, 3)).toEqual([1, 1, 1, 4]);
    expect(arr).toEqual([1, 1, 1, 4]);

    expect([1, 1].fill(3)).toEqual([3, 3]);
  });

  // shallow copy of a portion of a given array or group of elm passes the ondition
  test("filter", () => {
    let filtered = [12, 5, 8, 130, 44];
    let res = filtered.filter((elm, index, array) => elm > 10);

    expect(res).toEqual([12, 130, 44]);
    expect(filtered).toEqual(filtered);
  });

  // return the first statisfied elm
  test("find", () => {
    let filtered = [5, 15, 8, 130, 44];
    let res = filtered.find((elm, index, array) => elm > 10);

    expect(res).toEqual(15);
    expect(filtered).toEqual(filtered);
  });

  test("findIndex", () => {
    let filtered = [5, 15, 8, 130, 44];
    let res = filtered.findIndex((elm, index, array) => elm > 10);

    expect(res).toEqual(1);
    expect(filtered).toEqual(filtered);
  });

  // return the first statisfied elm
  test("findLast", () => {
    let filtered = [5, 15, 8, 130, 10];
    let res = filtered.findLast((elm, index, array) => elm > 10);

    expect(res).toEqual(130);
    expect(filtered).toEqual(filtered);
  });

  test("findLastIndex", () => {
    let filtered = [5, 15, 8, 130, 10];
    let res = filtered.findLastIndex((elm, index, array) => elm > 10);

    expect(res).toEqual(3);
    expect(filtered).toEqual(filtered);
  });

  // flat - creates new array with all sub-array elm concatenated int it.
  // arg - deep (how deep sub array concatenated)
  //     - default deep val as 1
  test("flat", () => {
    let arr1 = [0, 1, 2, [3, 4]];
    let arr1Copy = [0, 1, 2, [3, 4]];
    let arr2 = [0, 1, 2, [[[3, 4]]]];

    expect(arr1.flat()).toEqual([0, 1, 2, 3, 4]);
    expect(arr1).toEqual(arr1Copy);
    expect(arr2.flat(2)).toEqual([0, 1, 2, [3, 4]]);
    expect(arr2.flat(Infinity)).toEqual([0, 1, 2, 3, 4]);

    // is equivalent to
    let res3 = arr1.reduce((arr, elm) => arr.concat(elm), []);
    expect(res3).toEqual([0, 1, 2, 3, 4]);
  });

  // It is identical to a map() followed by a flat()
  test("map and flat", () => {
    const arr = [1, 2, 3, 4];

    const arrMap = arr.map((x) => [x * 2]);
    expect(arrMap).toEqual([[2], [4], [6], [8]]);

    const arrFlatMap = arr.flatMap((x) => [x * 2]);
    expect(arrFlatMap).toEqual([2, 4, 6, 8]);
  });

  test("includes", () => {
    const arr = [1, 2, 3];

    expect(arr.includes(2)).toBe(true);
    expect(arr.includes(1)).toBe(true);
    expect(arr.includes(4)).toBe(false);
  });

  //returns the first index at which a given element can be found in the array, or -1 if it is not present.
  // arg - searchElement, fromIndex
  test("indexOf", () => {
    const arr = [1, 2, 3];

    expect(arr.indexOf(2)).toBe(1);
    expect(arr.indexOf(1)).toBe(0);
    expect(arr.indexOf(4)).toBe(-1);

    expect([2, 9, 9, 9].indexOf(9, 2)).toBe(2);
  });

  test("lastIndexOf", () => {
    const arr = [1, 3, 2, 3];

    expect(arr.lastIndexOf(3)).toBe(3);

    expect([2, 9, 9, 9].indexOf(9, 2)).toBe(2);
  });

  test("join", () => {
    const arr = ["Fire", "Air", "Water"];

    expect(arr.join()).toEqual("Fire,Air,Water");
    expect(arr.join("")).toEqual("FireAirWater");
    expect(arr.join("-")).toEqual("Fire-Air-Water");
  });

  test("length", () => {
    const arr = ["Fire", "Air", "Water"];

    expect(arr.length).toEqual(3);
  });

  test("push", () => {
    const arr = ["Fire", "Air"];
    const arr1 = ["Fire"];
    arr1.push("Air");

    expect(arr1).toMatchObject(arr);
  });

  test("pop", () => {
    const arr1 = ["Fire", "Air"];
    arr1.pop();
    arr1.pop();

    expect(arr1).toMatchObject([]);
  });

  // if we not pass as initial value, it will take first index val
  // return single value
  test("reduce", () => {
    const array = [1, 2, 3];

    let res1 = array.reduce((p, c) => p + c, 2);
    expect(res1).toEqual(8);

    let res2 = array.reduce((p, c) => p + c);
    expect(res2).toEqual(6);

    let res3 = array.reduce((p, c) => {
      console.log(p, c);
      p.push(c * 2);
      return p;
    }, []);
    // if we do the same problem like below it throwing an error
    // let res4 = array.reduce((p, c) => p.push(c * 2), []);

    expect(res3).toEqual([2, 4, 6]);

    console.log(res1);
  });

  // similar to reduce
  // iterate from right to left
  test("reduceRight", () => {
    const array = [1, 2, 3];

    let res1 = array.reduceRight((p, c) => p + c, 2);
    expect(res1).toEqual(8);

    let res2 = array.reduceRight((p, c) => p + c);
    expect(res2).toEqual(6);

    let res3 = array.reduceRight((p, c) => {
      console.log(p, c);
      p.push(c * 2);
      return p;
    }, []);
    // if we do the same problem like below it throwing an error
    // let res4 = array.reduce((p, c) => p.push(c * 2), []);

    expect(res3).toEqual([6, 4, 2]);

    console.log(res1);
  });

  test("reverse", () => {
    const array = [1, 2, 3];
    expect(array.reverse()).toMatchObject([3, 2, 1]);
  });

  test("unshift", () => {
    const array = [1, 2, 3];
    array.unshift(0);
    expect(array).toMatchObject([0, 1, 2, 3]);
  });

  test("shift", () => {
    const array = [1, 2, 3];
    array.shift();
    expect(array).toMatchObject([2, 3]);
  });

  test("slice", () => {
    const array = [1, 2, 3, 4, 5];
    const arr2 = array.slice(1);
    const arr3 = array.slice(1, 2);
    const arr4 = array.slice(0, 2);

    expect(arr2).toMatchObject([2, 3, 4, 5]);
    expect(arr3).toMatchObject([2]);
    expect(arr4).toMatchObject([1, 2]);

    const arr5 = array.slice(-1);
    const arr6 = array.slice(-2);
    const arr7 = array.slice(-3, -2);

    expect(arr5).toMatchObject([5]);
    expect(arr6).toMatchObject([4, 5]);
    expect(arr7).toMatchObject([3]);
  });

  // atleast one element passes the condition
  test("some", () => {
    const array = [1, 2, 3, 4, 5];
    let res1 = array.some((elm, index, arr) => elm > 4);
    expect(res1).toBe(true);

    let res2 = array.some((elm, index, arr) => elm > 5);
    expect(res2).toBe(false);
  });
});
