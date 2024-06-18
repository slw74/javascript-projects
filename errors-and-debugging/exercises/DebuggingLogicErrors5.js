// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green' && fuelLevel >= 20000){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Something is not ready! Double check everything!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

console.log("DEBUGGER'S NOTE - In line 20 I added the boolean that requires fuelLevel to be 20,000 or more to be true as a LOGIC AND with the booleans that check the crew and computer status.  Now ALL THREE must be true together to get permission for lift off! I updated the error message in line 24 as well.");