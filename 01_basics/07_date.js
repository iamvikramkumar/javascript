//Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(typeof myDate) //Date is object type

// let myCreatedDate = new Date(2024, 0, 13,)
// let myCreatedDate = new Date(2024, 0, 13, 5, 3)
// let myCreatedDate = new Date("2023-01-13")
let myCreatedDate = new Date("01-13-2023")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

//Timestamps is used for checking exact time stamp value. Whenever we implement quiz or polls design then we have to check who score more or poll first according to that we decide winner using timestamps 
let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date() 
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

//String interpulation means backtick (``)

// `${newDate.getDay()} and the time is`

newDate.toLocaleString('default',{
    weekday: "long"
    //  timeZone: ''
})