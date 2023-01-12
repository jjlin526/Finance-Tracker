"use strict";
// ex. 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// ex. 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// ex. 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
