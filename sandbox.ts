// explicit types

let character: string;
let age: number;
let isLoggedIn: boolean;

//age = 'luigi';

// arrays

let ninjas: string[] = [];

// union types
let mixed: (string|number)[] = [];

mixed.push('hello');
mixed.push(20);
//mixed.push(false);

let uid: string|number;

// objects

let ninja: object;
ninja = {name:'yoshi',age:30};

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
}