// two type of data
// primitive 

// 7 => string, number, boolean, bigint, null, undefined, symbol

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;
const id = Symbol('123')
const anotherId = symbol('123')

// console.log(id === anotherId);

const bigNumber = 23668439n


// reference (non primitive)

// Array, objects, functions 

const heros = ["Edhi", "Mumtaz Qadri", "Ghazi Khalid"] //Arrays in square bracket
//  objects in curly braces
// can store in var like..

let myObj = {
    name: "uzmia",
    age: 22,
}
// can also store in Var
const myFunction = function(){

    console.log("Hello world");
}

console.log(typeof bigNumber);