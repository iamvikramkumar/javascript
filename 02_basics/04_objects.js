// const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "vikram",
            lastname : "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 1,
        email: "v@gmail.com"
    },
    {
        id: 1,
        email: "v@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//Object destructure
const course = {
    coursename: "Js in Hindi",
    price: "999",
    courseInstructor: "hitesh" 
}

// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);


// {} curly braces used for DESTRUCTURE the objects and array 
// const navbar = ({company}) => {

// }
// navbar(company = "RELIANCE JIO")

//API CONCEPT
// APNA KAAM DUSRE KE SAR PAR DALNA USKO HI API KEHTE HAI
//JSON is used for api call
// {
//     "name": "vikram",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Api sometime gives array also so its not required api gives always object
//It's an array
[
    {},
    {},
    {}
]