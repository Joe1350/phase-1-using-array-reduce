const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }
];

function getTotalAmountForProducts(products) {
    let totalPrice = 0
    for (let product of products) {
        totalPrice += product.price;
    }
    return totalPrice
}

console.log(getTotalAmountForProducts(products))

const couponLocations = [
    { room: 'Living room', amount: 5 },
    { room: 'Kitchen', amount: 2 },
    { room: 'Bathroom', amount: 1 },
    { room: 'Master bedroom', amount: 7 }
];
  
  function ourReduce(arr, reducer, init) {
    let accum = init;
    for (const element of arr) {
        accum = reducer(accum, element);
    };
    return accum;
}
  
function couponCounter(totalAmount, location) {
    return totalAmount + location.amount;
}
  
console.log(ourReduce(couponLocations, couponCounter, 0));

console.log(ourReduce(couponLocations, couponCounter, 3));

const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element) {return element * 2 + accumulator}, 0)

    // if no initial value is given, it will start at the first value of the array.
// const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator})

console.log(doubledAndSummed)

const doubledAndSummedFromTen = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator}, 10)

console.log(doubledAndSummedFromTen)

// const hogwartsHouses = {
//     "Slytherin": [],
//     "Gryffindor": [],
//     "Hufflepuff": [],
//     "Ravenclaw": []
// }

// const sortingHat = {}

// const incomingStudents = {
//     studentName: 'harryPotter',
//     studentName: 'ronWeasly',
//     studentName: 'hermioneGranger'
// }

// function houseAssign(house) {
//     return house
// }

// sortingHat.houseAssign(studentName)

// incomingStudents.reduce(function(houses, student) {
//     houses[sortingHat.houseAssign(student)].push(student)
// }, hogwartsHouses)



// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(accumulator, element){return accumulator += element}, 0)