// const number = [1,2,3,4,5]
// const sqaure = number.map(square)
// console.log(sqaure)
// function square(element){
//     return Math.pow(element,2)
// }
// const students = ["Arpan","Jenish","Aayush"]
// const studentUpper = students.map(upperCase)
// console.log(studentUpper)
// function upperCase(element){
//     return element.toUpperCase()
// }

// const dates = ["2022-1-10","2022-2-21","2028-9-29"]
// const formatedDates = dates.map(formatDate)
// console.log(formatedDates)

// function formatDate(element){
//     const parts = element.split("-")
//     return `${parts[1]}/${parts[2]}/${parts[0]}`
// }



// Filter Methods
// let numbers = [1,2,3,4,5,6,7,8]
// let evenNums = numbers.filter(isEven)
// let oddNums = numbers.filter(Odd)
// console.log(evenNums)
// console.log(oddNums)
// function isEven(element){
//     return element % 2 === 0;
// }

// function Odd(element){
//     return element % 2 !== 0;
// }


// Reduce Methods
const prices = [5,7,10,40,25,20]
const total = prices.reduce(sum);
console.log(`$${total}`)

function sum(previous, element){
    return previous + element
}