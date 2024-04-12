// Iteration way 1
const array1 = [1, 2, 3, 4, 5];
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

// Iteration way 2
console.log('\n');
const array2 = [1, 2, 3, 4, 5];
array2.forEach((item) => {
  console.log(item);
});

// Iteration way 3
console.log('\n');
const array3 = [1, 2, 3, 4, 5];
for (const item of array3) {
  console.log(item);
}

// Iteration way 4
console.log('\n');
const array4 = [1, 2, 3, 4, 5];
for (const key in array4) {
  console.log(array4[key]);
}

// Iteration way 4
console.log('\n');
const array5 = [1, 2, 3, 4, 5];
const newArray = array5.map((item) => item * 2);
console.log(newArray);
