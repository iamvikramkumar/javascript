// array 

const myArr = [0, 1, 2, 3, 4, 5]

//Javascripts arrays are resizeable we can add any elements after declaration
// console.log(myArr[0])

// Whenever we apply array copy operations then Javascript creates Shallow Copy
//Shallow Copy --> A shallow copy of an object is a copy whose properties share the same reference point => that means whatever we change that changes reflect in original value also.

//Deep Copy --> Properties do not share the same references.

const myHeros  = ["Shaktiman", "Nagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myHeros)


// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // It remove last value from array 

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// Slice, Splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3) //It include first, second and last is not included( 1 2 not 3 )
 
console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3) //
console.log("C ", myArr)
console.log(myn2)

//splice manipulate original array 
//let say our arr =[0,1,2,3,4,5] and if we apply slice(1,3) then we get output 1 2 3
