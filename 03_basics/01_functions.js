//FUNCTIONS 
// FUNCTION KA SIDHA MATLAB HAI JO BHI HUM CODE LIKHE HAI 20  line ka, 10 linke ka,  USKO EK PACKAGE ME BAND KAR DIYA HAI. OR ISS PACKAGE KO JITNE BAR CHAHE UTNE BAR USE KAR SAKTE KAHI BHI.

function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("K");
    console.log("R");
    console.log("A");
    console.log("M");
}

// sayMyName()

// function addTwoNumbers(number1, number2) //number1, number 2=> these are parameters
// { 
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,5) // 3, 5 => these are arguments

function addTwoNumbers(number1, number2) 
{ 
//  let result = number1 + number2
//  return result
//  console.log("Vikram");

return number1 + number2
}

// addTwoNumbers(3,5) 
const result = addTwoNumbers(3,5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    // if(username === undefined)
    if(!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("vikram"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());