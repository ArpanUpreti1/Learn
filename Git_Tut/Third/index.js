// function isInt(value){
//     if(value % 1 === 0){
//         return true
//     }
//     else return false
// }
// const result =  isInt("Arpan")
// if(result){
//     console.log("It is an integer")
// }
// else{
//     console.log("No it is not an integer")
// }


// const random = Math.floor(Math.random() * 100)
// console.log(random)


// Reverse a string

// const a = "arpan"
// let b = ""
// for(let i = a.length - 1 ; i >= 0 ;i--){
//     b += a[i]
// }
// console.log(b)


// Better Way


// function reverse(){
// const a = document.getElementById("input").value
// const b = a.split('').reverse().join('')
// console.log(b)
// }


// Reverse of integer

let num = 112;
let reversedNum = 0;

while (num !== 0) {
    reversedNum = reversedNum * 10 + (num % 10);
    num = Math.floor(num / 10);
}

console.log(reversedNum); // Output: 1
