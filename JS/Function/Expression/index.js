// function hello(){
//     console.log("Hello!!");
// }


// setTimeout(function(){
//     console.log("Hello")
// },3000);
const numbers = [1,2,3,4,5,7,8]
const squares = numbers.map(function(element){
    return Math.pow(element,2)
})
const cubes = numbers.map(function (element){ return Math.pow(element,3)})
const evenNum = numbers.filter(function (element){
    return element % 2 ===0
})
console.log(evenNum)
console.log(squares)
console.log(cubes)

