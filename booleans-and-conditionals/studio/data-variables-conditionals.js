// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    preparedForLiftOff = false;
    console.log("Danger Will Robinson! " + (astronautCount - 7) + " must exit the craft ASAP!");
}else {
    console.log("There are " + (astronautCount) + " astronauts; so the craft is ready for lift off.");
}


// add logic below to verify all astronauts are ready
if (astronautStatus !== "ready") {
    preparedForLiftOff = false;
    console.log("Stop the presses! The astronauts are not ready!");
}else {
    console.log("The astronauts are ready to go.");
}


// add logic below to verify the total mass does not exceed the maximum limit of 850000
/*if (totalMassKg > maximumMassLimit); {
    preparedForLiftOff = false;
    console.log("The maximum mass limit is " + maximumMassLimit + " and the shuttle's curent total mass is " + totalMassKg + ". That's too heavy for lift off!");
}else {
    console.log("The maximum mass limit is " + maximumMassLimit + " and the shuttle's curent total mass is " + totalMassKg + " so that meets the standard for lift off.");
}*/
//DEBUGGING NOTE - for some reason line 42 is throwing an error on else that causes this snippet to fail.   ask for a fresh set of eyes


// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
    preparedForLiftOff = false;
    console.log("Fuel tempeature is not within range!  ABORT!");
}else {
    console.log("Fuel temperature is within range.");
}


// add logic below to verify the fuel level is at 100%
if (fuelLevel !== "100%") {
    preparedForLiftOff = false;
    console.log("ABORT! Fuel tank is less than 100%");
}else {
    console.log("Fuel tank level is 100%. You may proceed to the next check point on the list.")
}


// add logic below to verify the weather status is clear
if (weatherStatus !== "clear") {
    preparedForLiftOff = false;
    console.log("LOOK TO THE SKY! The weather status is not clear");
}else {
    console.log("All clear skies above! The weather is looking good.");
}

// Verify shuttle launch can proceed based on above conditions
if (!preparedForLiftOff) {
    console.log("ABORT MISSION!!!");
}else {
    console.log(`
        All systems are a go! Initiating space shuttle launch sequence
        --------------------------------------------------------------
        Date: ${date}
        Time: ${time}
        Astronaut Count: ${astronautCount}
        Crew Mass: ${crewMassKg} kg
        Fuel Mass: ${fuelMassKg} kg
        Shuttle Mass: ${shuttleMassKg} kg
        Total Mass: ${totalMassKg} kg
        Fuel Temperature: ${fuelTempCelsius} C 
        Weather Status: ${weatherStatus}

        ---------------------------------------------------------------
        Have a safe trip astronauts!`);
}
