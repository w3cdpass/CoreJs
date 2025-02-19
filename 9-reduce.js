// reduce method

const arr2 = [1, 2, 3, 4, 5];

const sumOf = arr2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});

console.log(sumOf)


const userCart = [
    { productID: 1, pName: "mobile", price: 12000 },
    { productID: 1, pName: "mobile", price: 12000 },
    { productID: 1, pName: "mobile", price: 20343 },
    { productID: 1, pName: "mobile", price: 12000 },
    { productID: 1, pName: "mobile", price: 12000 },
    { productID: 1, pName: "mobile", price: 12000 }
]
const totolPriceCart = userCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
}, 0)
console.log(totolPriceCart)

