let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());       //there is no delimiter to determine how the string is broken apart  
console.log(str.split('e'));    //split the string at each letter e
console.log(str.split(' '));    //split the string at each space
console.log(str.split(''));     //split the string at each character

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
newString1 = arr.join("+");     //the "+" will be the connector that glues the array elements together
console.log(newString1); 

newString2 = arr.join("");      //the "" character will be the connector
console.log(newString2);

newString3 = arr.join("_");     //the "_" underscore will be the connector
console.log(newString3);

newString4 = arr.join(" ");     //the " "   space will be the connector
console.log(newString4);
 

//3) Do split or join change the original string/array?
//DEBUGGER'S NOTE - Yes and no.  While they don't change the items within the original string/array they do change how it is presented after the code is run.

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

console.log(cargoHold.split(',').sort().join(','));