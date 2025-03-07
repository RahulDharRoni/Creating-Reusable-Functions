Part 1: Thinking Functionally
=================================
When coding, it is important to approach your work using small, manageable blocks of code. Some functions may become dozens or hundreds of lines long, but keeping things small and simple will help you scale and maintain your code.


This section will have you build a few simple functions to accomplish arbitrary tasks. When building functions, remember that there are many ways to accomplish a task in programming. Sometimes, the shortest route is the best, and sometimes it is not.


Take the following example, which contains five functions that accomplish the same task. If you were looking at this code for the first time, which would make the most sense to you?

While there is rarely a “correct” answer in programming, it is important to keep your audience (other programmers) in mind. Write functions with descriptive names, and clear inputs and outputs.


With that in mind, write functions that accomplish the following:
    1- Take an array of numbers and return the sum.
    2- Take an array of numbers and return the average.
    3- Take an array of strings and return the longest string.
    4- Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
        ==> For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
    5- Take a number, n, and print every number between 1 and n without using loops. Use recursion.


Part 2: Thinking Methodically
=============================================
When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.
For the tasks below, use the following data to test your work:

        [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
        { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
        { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
        { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
        { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
Use callback functions alongside Array methods to accomplish the following:

    >> Sort the array by age.
    >> Filter the array to remove entries with an age greater than 50.
    >> Map the array to change the “occupation” key to “job” and increment every age by 1.
    >> Use the reduce method to calculate the sum of the ages.
        >> Then use the result to calculate the average age.