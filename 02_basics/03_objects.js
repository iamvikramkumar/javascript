// singleton 
//object.create --> constructor method --> Singleton
//object literals


const mySym = Symbol("Key1")


const JsUser = {
    "full name": "Vikram Kumar",
    [mySym] : "myKey1",
    age: 20,
    locatio: "Muzaffarpur",
    email: "vikram@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"] 
}

console.log(JsUser.email)
console.log(JsUser["email"])

console.log(JsUser["full name"])
console.log( JsUser[mySym])

JsUser.email = "vikram@paytm.com"
Object.freeze(JsUser)
JsUser.email = "Vikram@microsoft.com"

console.log(JsUser)