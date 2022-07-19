describe('hasOwnProperty', () => {
  // hasOwnProperty - return true for only direct properties
  // in operator -  return true for direct and inherited properties
  test('1', () => {
    let obj = {
      firstName: 'Raj',
      lastName: 'Sekar',
      fullName() {
        return this.firstName + ' ' + this.lastName;
      },
    };

    expect(obj.fullName()).toEqual('Raj Sekar');
    expect(obj.hasOwnProperty('firstName')).toBe(true);
    expect(obj.hasOwnProperty('lastName')).toBe(true);
    expect(obj.hasOwnProperty('fullName')).toBe(true);
    expect(obj.hasOwnProperty('string')).toBe(false);
    expect(obj.hasOwnProperty('toString')).toBe(false);
  });
  test('2', () => {
    let fruits = ['Apple', 'Banana', 'Watermelon', 'Orange'];
    expect(fruits.hasOwnProperty(3)).toBe(true);
    expect(fruits.hasOwnProperty(4)).toBe(false);
  });

  test('in', () => {
    let prop = {
      name: 'raj',
    };

    expect('name' in prop).toBe(true);
    expect('toString' in prop).toBe(true);
  });
});

describe('isPrototypeOf', () => {
  // isPrototypeOf -  method checks if an object exists in another object's prototype chain.

  test('1', () => {
    function Foo() {}
    function Bar() {}
    function Baz() {}

    Bar.prototype = Object.create(Foo.prototype);
    Baz.prototype = Object.create(Bar.prototype);

    // prototype chains:
    // foo: Foo <- Object
    // bar: Bar <- Foo <- Object
    // baz: Baz <- Bar <- Foo <- Object

    const foo = new Foo();
    const bar = new Bar();
    const baz = new Baz();

    expect(Foo.prototype.isPrototypeOf(bar)).toBe(true);
    expect(Foo.prototype.isPrototypeOf(baz)).toBe(true);
    expect(Bar.prototype.isPrototypeOf(baz)).toBe(true);
    expect(Baz.prototype.isPrototypeOf(baz)).toBe(true);
    expect(Baz.prototype.isPrototypeOf(foo)).toBe(false);
    expect(Bar.prototype.isPrototypeOf(foo)).toBe(false);
  });
});

describe('propertyIsEnumerable', () => {
  //specified property is enumerable and is the object's own property.
  test('1', () => {
    let obj = {
      number: 10,
      numStr: '10',
    };

    let arr = [10, '10'];

    expect(obj.propertyIsEnumerable('number')).toBe(true);
    expect(obj.propertyIsEnumerable('numStr')).toBe(true);
    expect(obj.propertyIsEnumerable('name')).toBe(false);
    expect(arr.propertyIsEnumerable(0)).toBe(true);
    expect(arr.propertyIsEnumerable(1)).toBe(true);
    expect(arr.propertyIsEnumerable(2)).toBe(false);
    expect(arr.propertyIsEnumerable('length')).toBe(false);
  });
});

describe('assign', () => {
  // copy enumerable own prop of one or more sources to target
  test('1', () => {
    let target = { a: 1 };
    let source1 = { b: 2 };
    let source2 = { b: 1 };

    expect(Object.assign(target, source1)).toEqual({ a: 1, b: 2 });
    expect(target).toEqual({ a: 1, b: 2 });

    expect(Object.assign(target, source2)).toEqual({ a: 1, b: 1 });
    expect(target).toEqual({ a: 1, b: 1 });
  });
});

describe('create', () => {
  //method creates a new object, using an existing object as the prototype of the newly created object.
  test('1', () => {
    let person = {
      isHuman: false,
      intro: function () {
        return `Person name is ${this.name}. Am I human ${this.isHuman}`;
      },
    };
    let me = Object.create(person);
    me.name = 'Raj';
    me.isHuman = true;

    expect(me.intro()).toEqual('Person name is Raj. Am I human true');
    expect(person.isHuman).toEqual(false);
  });
});

describe('defineProperties', () => {
  // method defines new or modifies existing properties directly on an object, returning the object.
  test('1', () => {
    let obj1 = {
      name: 'Raj',
    };

    Object.defineProperties(obj1, {
      property1: {
        value: 41,
        writable: true,
      },
      property2: {
        value: 10,
        writable: false,
      },
    });

    obj1.property2 = 20;

    expect(obj1.property1).toEqual(41);
    expect(obj1.property2).toEqual(10);
    expect(obj1.name).toEqual('Raj');
  });
});

describe('defineProperty', () => {
  //defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
  test('1', () => {
    let obj1 = {
      name: 'Raj',
    };

    Object.defineProperty(obj1, 'property1', {
      value: 41,
      writable: true,
    });

    expect(obj1.property1).toEqual(41);
    expect(obj1.name).toEqual('Raj');
  });
});

describe('entries', () => {
  test('', () => {
    const object1 = {
      a: 'somestring',
      b: 42,
    };

    let entries = Object.entries(object1); // [[a, 'somestring'], [b, 42]]
    expect(Array.isArray(entries)).toBe(true);
    expect(entries[0]).toEqual(['a', 'somestring']);
    expect(entries[1]).toEqual(['b', 42]);
  });
});

describe('freeze', () => {
  // A frozen object can no longer be add, change and remove
  // prevents changing the enumerability, configurability, or writability of existing properties,
  test('1', () => {
    const obj = {
      prop: 42,
    };

    Object.freeze(obj);

    //throw an error in strict mode
    obj.prop = 10;
    expect(obj.prop).toEqual(42);
  });
});

describe('fromEntries', () => {
  test('', () => {
    const entries = new Map([
      ['foo', 'bar'],
      ['baz', 42],
    ]);

    Object.fromEntries(entries);
    // expected output: Object { foo: "bar", baz: 42 }
    console.log(entries);
  });
});

describe('getWonPropertyDescriptor', () => {
  test('getWonPropertyDescriptor', () => {
    const object1 = {
      property1: 42,
    };

    const descriptor = Object.getOwnPropertyDescriptor(object1, 'property1');
    expect(descriptor).toEqual({
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    });
  });
  test('getWonPropertyDescriptors', () => {
    const object1 = {
      property1: 42,
    };

    const descriptors1 = Object.getOwnPropertyDescriptors(object1);

    expect(descriptors1.property1).toEqual({
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    });
  });
});

describe('getPrototypeOf', () => {
  // The Object.getPrototypeOf() method returns the prototype
  test.only('1', () => {
    const prototype1 = {};
    const obj1 = Object.create(prototype1);
    expect(Object.getPrototypeOf(obj1)).toEqual(prototype1);
    obj1.me = 'Raj';
    expect(prototype1).toEqual({});
    expect(Object.getPrototypeOf(obj1)).toEqual(prototype1);
  });
});

// describe('', () => {
//   test('', () => {});
// });

// describe('', () => {
//   test('', () => {});
// });

// describe('', () => {
//   test('', () => {});
// });

// describe('', () => {
//   test('', () => {});
// });

// describe('', () => {
//   test('', () => {});
// });

// describe('', () => {
//   test('', () => {});
// });
