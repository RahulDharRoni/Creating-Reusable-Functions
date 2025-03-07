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
  console.log(averageAge);
};

dataManupulations(dataOfObjects);

// Part 3: Thinking Critically
// ====================================================================
const thinkingCriticallyData = [
  { age: "41" },
  { age: "25" },
  { age: "19" },
  { age: "58" },
  { age: "111" },
];

function incrementAgeInPlace(obj) {
  if (obj.age === undefined) {
    obj.age = 0;
  }
  obj.age = parseInt(obj.age) + 1;
  obj.updated_at = new Date();
}

function incrementAgeCopy(obj) {
  let copy = { ...obj };
  if (copy.age === undefined) {
    copy.age = 0;
  }
  copy.age = parseInt(copy.age) + 1;
  copy.updated_at = new Date();
  return copy;
}

incrementAgeInPlace(thinkingCriticallyData[0]);
console.log(thinkingCriticallyData[0]);

let copiedObject = incrementAgeCopy(thinkingCriticallyData[1]);
console.log(copiedObject);

//Part -- 4
// ==================================================

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
