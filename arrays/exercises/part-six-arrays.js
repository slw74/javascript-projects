//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
//DEBUGGER'S NOTE - We were not shown how to use push to create a two dimensional array from scratch so i'm going to define one using the code example at the bottom of the multi-dimensional arrays reading.

let table = [
    ['hydrogen', 'H', 1.008],
    ['helium', 'He', 4.003],
    ['iron', 'Fe', 55.85],
];


//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

console.log("\nprinting the result of a whole table variable");
console.log(table);

console.log("\nprinting the result of individual bracket notations from within a multi-dimensional array");
console.log(table[0][2]);
console.log(table[1][1]);
console.log(table[2][2]);


//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log("\nthe mass of element 1");
console.log(table[0][2]);
console.log("the name for element 2");
console.log(table[1][0]);
console.log("the name symbol for the 26th element on the periodic table");
console.log(table[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
//DEBUGGER'S NOTE - Didn't we just do this?  Technically the table array with the elements has three lines of arrays in it.