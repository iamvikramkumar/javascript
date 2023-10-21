//reduce --> execute user supply "reducer"

const myNums = [1,2,3]

// const myTotal = myNums.reduce ( function (acc, currval) {
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0 )

const myTotal = myNums.reduce( (acc,currval) => acc + currval, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "mobile development",
        price: 5999
    },
    {
        itemName : "datastructure",
        price: 3999
    },
]

const priceTopay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceTopay);