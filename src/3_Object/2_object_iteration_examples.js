// Iteration way 1
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// Iteration way 2
const obj1 = { a: 1, b: 2, c: 3 };
Object.keys(obj1).forEach((key) => {
  console.log(`${key}: ${obj1[key]}`);
});

// Iteration way 3
const obj2 = { a: 1, b: 2, c: 3 };
Object.values(obj2).forEach((value) => {
  console.log(value);
});

// Iteration way 4
const obj3 = { a: 1, b: 2, c: 3 };
Object.entries(obj3).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Iteration way 5
const obj4 = { a: 1, b: 2, c: 3 };
for (const key in obj4) {
  if (obj4.hasOwnProperty(key)) {
    console.log(`${key}: ${obj4[key]}`);
  }
}
