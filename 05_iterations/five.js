const coding = ["js", "java", "python", "cpp", "ruby"]

// coding.forEach( function (item) {
//     console.log(item);
// } )


// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

//arrow function () => {}

//for ecah callback isiliye function name nhi dena hai sirf isse hi kaam hojayega () {}


// coding.forEach((item, index, arr) => {
//     console.log(item,index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
    languageName: "python",
    languageFileName: "py"
}
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})
