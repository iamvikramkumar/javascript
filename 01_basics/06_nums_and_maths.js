const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); 

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

// ++++++++ Maths +++++++++


console.log(Math);
// console.log(Math.abs(-4))
// console.log(Math.round(4.5))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(4,2,5,6))
// console.log(Math.max(4,2,7,8))
console.log(Math.random())  // Its value always come between 0 to 1 only.
console.log((Math.random()*10) + 1); //It gives us value in b/w 1 to 9
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // +1 is used for avoiding 0 and +min is used for minimum is must required this much
//max-min  is used for getting range