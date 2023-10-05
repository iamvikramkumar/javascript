// singleton 
//object.create --> constructor method --> Singleton
//object literals


const mySym = Symbol("Key1")


const JsUser = {
    "full name": "Vikram Kumar",
    [mySym] : "myKey1",
    age: 20,
    location: "Muzaffarpur",
    email: "vikram@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"] 
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["full name"])
// console.log( JsUser[mySym])

JsUser.email = "vikram@paytm.com"
// Object.freeze(JsUser) // if we don't want change something email by someone then we have to fixed that using freeze 
JsUser.email = "Vikram@microsoft.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this["full name"]}`);
}
console.log(JsUser.greetingTwo()); 
console.log(JsUser.greeting());