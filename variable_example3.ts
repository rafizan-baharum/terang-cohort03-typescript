// https://www.geeksforgeeks.org/data-types-in-typescript/

// variable declaration
// without assignment yet
let myName:string;
let myAge:number;
let iLoveProgramming: boolean;

// string variable assignment
myName = 'Mary';

// number variable assignment
myAge = 25;

// boolean variable assignment
iLoveProgramming = true;

// printing out variable
console.log('my name: ' + myName);
console.log('my age: ' + myAge);
console.log('my love for programming : ' + iLoveProgramming);

document.body.innerHTML = `My name is ${myName} and I'm of ${myAge} years of age and I love programming (${iLoveProgramming})`;