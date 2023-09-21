const name = "vikram"
const repoCount = 22

// console.log(name + repoCount + " Value"); //outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //Modern way

//Declaration of string 

const gameName = new String ('vikram-vl')
// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('v'));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = " vikram     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://vikram.com/vikram%20Kumar"

console.log(url.replace('%20', '-'))

console.log(url.includes('rohit'))

console.log(gameName.split('-'))