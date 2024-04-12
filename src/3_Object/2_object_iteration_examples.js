// Iteration way 1
const obj1 = { a: 1, b: 2, c: 3 };
for (const key in obj1) {
  console.log(`${key}: ${obj1[key]}`);
}

// Iteration way 2
const obj2 = { a: 1, b: 2, c: 3 };
Object.keys(obj2).forEach((key) => {
  console.log(`${key}: ${obj2[key]}`);
});

// Iteration way 3
const obj3 = { a: 1, b: 2, c: 3 };
Object.values(obj3).forEach((value) => {
  console.log(value);
});

// Iteration way 4
const obj4 = { a: 1, b: 2, c: 3 };
Object.entries(obj4).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// Iteration way 5
const obj5 = { a: 1, b: 2, c: 3 };
for (const key in obj5) {
  if (obj5.hasOwnProperty(key)) {
    console.log(`${key}: ${obj5[key]}`);
  }
}
