// Part-1
// ====================================================
const arrayOfNumber = [20, 30, 40, 50, 60];
function sum(numbers) {
  let sumUp = 0;
  numbers.forEach((number) => {
    sumUp += number;
  });
  //   return sumUp; it will return the sum value
  const average = sumUp / numbers.length;
  return average; // return the average of the array of Number
}
console.log(sum(arrayOfNumber));
// =============================================
const arrayOfStrings = [
  "Take an array of numbers and return the sum",
  "Take an array of strings and return the longest string.",
  "Take an array of numbers and return the average.",
  "Take an array of strings, and a number and return an array of the strings that are longer than the given number. ",
  "Take a number, n, and print every number between 1 and n without using loops. Use recursion.",
];

const longestStringLength = (stringValue) => {
  let longestStr = ""; // More appropriate variable name
  for (let i = 0; i < stringValue.length; i++) {
    if (
      typeof stringValue[i] === "string" &&
      stringValue[i].length > longestStr.length
    ) {
      longestStr = stringValue[i];
    }
  }
  return `➡️➡️➡️➡️➡️➡️Longest String of the array === ${longestStr.length}`;
};

console.log(longestStringLength(arrayOfStrings));
// ==================================================
const longestString = (stringValue) => {
  for (let i = 0; i < stringValue.length; i++) {
    for (let j = i + 1; j < stringValue.length; j++) {
      if (stringValue[i].length > stringValue[j].length) {
        let position = stringValue[i];
        stringValue[i] = stringValue[j];
        stringValue[j] = position;
      }
    }
  }
  for (let i = 0; i < stringValue.length; i++) {
    console.log(`${stringValue[i]} = ${stringValue[i].length} length`);
  }
};
longestString(arrayOfStrings);
// =============================================

const stringsLongerThan = (value, number) => {
  for (let i = 0; i < value.length; i++) {
    if (value[i].length > number) {
      console.log(value[i]);
    }
  }
};

stringsLongerThan(["say", "hello", "in", "the", "morning"], 3);
