//Part Two Section One

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.

//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.

//* Your code here. */
console.log(dna);

let trimmed = dna.trim();
console.log(trimmed);

//2) Change all of the letters in the dna string to UPPERCASE, then print the result.
console.log(dna.toUpperCase());

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.


dna2 = dna.trim().toUpperCase();
console.log(dna2)

//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.
dnaTwo = dnaTwo.replace('GCT','AGG');
console.log(dnaTwo);

//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
//NOTE-this particlar method chain WAS NOT INTRODUCED IN OUR READING!  I found it doing outside JavaScript research. Having a weird syntax error with the else statement!
/*if (dnaTwo.indexOf('CAT') > -1); {
    alert("CAT gene found");
}else {
    console.log("CAT gene not found");
}*/

//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.
console.log(dnaTwo.slice(16,19));

//4) Use a template literal to print, "The DNA strand is ___ characters long."
let dnaLength = dna2.length;
console.log(`The DNA strand is ${dnaLength} characters long.`);

//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
//????????????  I have no idea what they are asking us to do at all.  After doing more outside research I peeked at the solution.  I will be honest.  I am feeling very frustrated.  This question nor the solution doesn't reflect what learners have been introduced to nor should be reasonably expected to produce at this point.


console.log(`${dnaTwo.slice(4,7).toLowerCase()}o ${dnaTwo.slice(dnaTwo.indexOf('CAT'),dnaTwo.indexOf('CAT')+3).toLowerCase()}`);