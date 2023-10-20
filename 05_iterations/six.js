// const coding = ["js", "java", "python", "cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);

//Foreach not return the value

//Filter Map and Reduce

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => { return num > 4} )
// console.log(newNums);

// const newNums = myNums.filter( (num) => { num > 4} )  //output []

// const newNums = []
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1982, edition: 2005},
    { title: 'Book Three', genre: 'History', publish: 1986, edition: 2006},
    { title: 'Book Five', genre: 'Fiction', publish: 1981, edition: 2003},
    { title: 'Book Six', genre: 'Fiction', publish: 1981, edition: 2004},
];

const userBook = books.filter((bk) => bk.genre === 'History') 
console.log(userBook);


