//  Primitive Datatypes => call by value => whenever we copy this we cant copy original data only reference data used

// 7 types : String, Number, Boolean, Null, Undefined, Symbol => It is used for making the value unique, BigInt

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)


// Reference (Non Primitive)

// Array, Objects, Functions
