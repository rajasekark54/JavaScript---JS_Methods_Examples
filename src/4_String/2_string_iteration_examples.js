// Iteration way 1
const str1 = 'Hello';
for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}

// Iteration way 2
const str2 = 'Hello';
for (const char of str2) {
  console.log(char);
}

// Iteration way 3
const str3 = 'Hello';
const charArray1 = Array.from(str3);
const mappedArray = charArray1.map((char) => {
  return char.toUpperCase();
});
console.log(mappedArray.join(''));

// Iteration way 4
const str4 = 'Hello';
const charArray2 = str4.split('');
charArray2.forEach((char) => {
  console.log(char);
});
