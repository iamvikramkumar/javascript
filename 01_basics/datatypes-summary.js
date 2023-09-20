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

// console.log(id === anotherId)

// const bigNumber = 34565435764524524n  //bigint



// Reference (Non Primitive)

// Array, Objects, Functions
const heros = ["Shaktiman","naagraj", "doga"];
let myObj = {
    //Objects
    name:  "Vikram",
    age : 20,
}

const myFunction = function(){
   console.log("Namaste Bharat");
}

// console.log(typeof bigNumber)
// console.log(typeof outsideTemp)
// console.log(typeof myFunction)
// console.log(typeof heros)


//Stack (Primitive) => It gives us copy of value , Heap(Non-Primitive) => It takes reference of origninal value whatever we change in value that value also cahnges with original one.


let myYoutubename = "vikram.com"
let anothername = myYoutubename
 anothername = "chaiaurcode"
console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@paytm"
}

let userTwo = userOne

userTwo.email = "vikram@google.com"

userTwo.upi = "vikram@paytm"

console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne.upi);
console.log(userTwo.upi);