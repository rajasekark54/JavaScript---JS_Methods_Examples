// Iteration way 1
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// Iteration way 2
console.log('\n');
const array1 = [1, 2, 3, 4, 5];
array1.forEach((item) => {
  console.log(item);
});

// Iteration way 3
console.log('\n');
const array2 = [1, 2, 3, 4, 5];
for (const item of array2) {
  console.log(item);
}

// Iteration way 4
console.log('\n');
const array3 = [1, 2, 3, 4, 5];
for (const key in array3) {
  console.log(array3[key]);
}

// Iteration way 4
console.log('\n');
const array4 = [1, 2, 3, 4, 5];
const newArray = array4.map((item) => item * 2);
console.log(newArray);
