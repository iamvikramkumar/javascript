// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// chai()
// ()()
// Global scope se problem hoti kai bar to us global scope ka jo variables hai ya jo bhi declaration hai uske pollution ko hatane ke liye iife ka use karte hai
// Avoid variable hoisting from within blocks
// Protect against polluting the global environment
// Do not create unnecessary global variables and functions
// Organize JavaScript code

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('vikram')