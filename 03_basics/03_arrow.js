const user = {
    username: "vikram",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "vikram"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "vikram"
//     console.log(this.username);
// }

const chai = () => {
    let username = "vikram"
    console.log(this);
}

//chai()

// () =>  {} //arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2 }  // Explicit Return 

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) // Implicit return


const addTwo = (num1, num2) => ({username: "vikram"})

console.log(addTwo(3,4));


const myArray = [1,2,3,4,5]

// myArray.forEach(() =>{})