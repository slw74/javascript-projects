//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log(language.slice(0,1)+language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.
//DEBUGGER'S NOTE - I don't understand this question.  We used method chaining already in question 1.  So are we meant to search for an alternate method that we've not been introduced to in the reading to accomplish this result? 


//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let firstInitial = language[0];
let lastInitial = language[4];

console.log(`The abbreviation for '${language}' is '${firstInitial}${lastInitial}'.`);


//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let phrase = "    will you please make exercises and quizes and assignments cover what launch coders have studied in the lessons!     ";
let newPhrase = phrase.trim().slice(8).toUpperCase();
console.log(newPhrase);

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

//DEBUGGER'S NOTE-this particlar method to capitalize the first letter WAS NOT INTRODUCED IN OUR READING!  I found it doing outside JavaScript research.
//When I ran this code I got an error saying it was not a function/method.  I did more research and found all sorts of code snippets to split and capitalize the first word of a string that were beyond what we've learned at this point.  I'm going to have to move on because I went down a rabbit hole with this.
/*
let notTitleCase = 'title case';
let newNotTitleCase = notTitleCase.capitalizeFirstLetter();
console.log(notTitleCase);
*/