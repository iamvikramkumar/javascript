const accountId = 144553
let accountEmail = "vikramkumar@google.com"
var accountPassword = "12345"
accountCity = "Muzaffarpur"
let accountState; // if we not assign any value then it shows undefined

// accountId = 2 //not allowed

accountEmail = "vl@es.com"
accountPassword = "12121"
accountCity = "Muzaffarpur"
console.log(accountId);

/* Prefer not to use var because of issue in block scope and functional scope*/


console.table([accountEmail, accountId, accountPassword, accountCity, accountState])