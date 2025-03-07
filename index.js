// Part-1 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//====================================================
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
//=====================================================================
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
//====================================================================
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
//=====================================================================

const stringsLongerThan = (value, number) => {
  for (let i = 0; i < value.length; i++) {
    if (value[i].length > number) {
      console.log(value[i]);
    }
  }
};

stringsLongerThan(["say", "hello", "in", "the", "morning"], 3);
//==============================================================
const numberRecursion = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
};
console.log(numberRecursion(5));

// Part 2: Thinking Methodically
// =============================================

const dataOfObjects = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

const dataManupulations = (dataOfObjects) => {
  const sortedByAge = dataOfObjects.sort(
    (a, b) => parseInt(a.age) - parseInt(b.age)
  );

  const upDatedData = sortedByAge.map((data) => ({
    id: data.id,
    name: data.name,
    job: data.occupation,
    age: (parseInt(data.age) + 1).toString(),
  }));
  console.log(upDatedData);

  const totalAgeAverage = upDatedData.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.age);
  }, 0);
  const averageAge = totalAgeAverage / upDatedData.length;
  console.log(`Average = ${averageAge}`);
};

dataManupulations(dataOfObjects);

// Part 3: Thinking Critically
// ====================================================================
const randomObject = [
  { name: "ROB", age: 33 },
  { name: "DOB", age: 30 },
  { name: "Robin", old: 38 }, // Does not have "age", has "old" instead
];

// Function to update the object in place
const incrementAgeInPlace = (obj) => {
  obj.age = typeof obj.age === "number" ? obj.age + 1 : 0; // If age exists, increment; else set to 0
  obj.updated_at = new Date(); // Set the updated_at field
};

// Function to create a copy, increment age, and return the copy
const copyAndIncrementAge = (obj) => {
  const newObj = { ...obj }; // Copy the object
  newObj.age = typeof newObj.age === "number" ? newObj.age + 1 : 0; // If age exists, increment; else set to 0
  newObj.updated_at = new Date(); // Set the updated_at field
  return newObj;
};

// Apply the function in place
randomObject.forEach(incrementAgeInPlace);
console.log("Updated in place:", randomObject);

// Create a new array with updated copies
const updatedCopies = randomObject.map(copyAndIncrementAge);
console.log("New copies with updated age:", updatedCopies);

//Part -- 4
// ============================================================
let userProfile = {
  name: "Jane Doe",
  age: 28,
  email: "janedoe@example.com",
  updated_at: new Date("2025-03-01T12:00:00Z"),
};

function incrementUserAgeInPlace(user) {
  if (user.age === undefined) {
    user.age = 0;
  }
  user.age += 1;
  user.updated_at = new Date();
}

function incrementUserAgeCopy(user) {
  let userCopy = { ...user };
  if (userCopy.age === undefined) {
    userCopy.age = 0;
  }
  userCopy.age += 1;
  userCopy.updated_at = new Date();
  return userCopy;
}

incrementUserAgeInPlace(userProfile);
console.log("Updated User Profile (in place):", userProfile);

let newUserProfile = incrementUserAgeCopy(userProfile);
console.log("Original User Profile (unchanged):", userProfile);
console.log("New User Profile (copy):", newUserProfile);

// Part 5: Thinking Back
// ======================================================================
// How many of the scripts could be turned into functions?
// --- Most of the solution i use function

// What would the parameters look like? What kind of returns should they have?
// ----function receive the input as a parameters. function return or console log the value of the answer based of data type.

//Could you package your code into even smaller blocks, creating helper functions?
// ----Yes I can. I can make it more clean.

//What else could be changed to optimize the code, knowing what you now know?
//--- I need to think about the Time Complexity and Space Complexity
