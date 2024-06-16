// Declare and assign the variables below
const shuttleName = "Determination";
const shuttleSpeed_mph = 17500;
const distanceToMars_km = 225000000;
const distanceToMoon_km = 384400;
const milesPerKilometer = 0.621;


// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed_mph);
console.log(typeof distanceToMars_km);
console.log(typeof distanceToMoon_km);
console.log(typeof milesPerKilometer);


// Calculate a space mission below
const milesToMars = distanceToMars_km * milesPerKilometer;
const hoursToMars = milesToMars / shuttleSpeed_mph;
const daysToMars = hoursToMars / 24;


// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");


// Calculate a trip to the moon below
const milesToMoon = distanceToMoon_km * milesPerKilometer;
const hoursToMoon = milesToMoon / shuttleSpeed_mph;
const daysToMoon = hoursToMoon / 24;


// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the moon.");
