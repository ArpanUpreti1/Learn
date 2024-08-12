// if(2 === 2){
//     console.log("JS is stupid");
// }
// else{
//     console.log("JS is actually smart");
// }
// const temp = 36
// if(temp<50){
//     console.log("Less than 50");
// }
// else{
//     console.log("Greater than 50");
// }


// Var is very stupid 😂

const score = 200
// if(score > 100){
//     let power = "Fly"
//     console.log(`User Power: ${power}`);
// }

// const balance = 100
// if(balance > 500) console.log("Test");
// else console.log("Test 2 ");

// 

/** Falsy Value
 * false
 * 0
 * -0
 * BigInt 0n
 * ""
 * null
 * undefiened
 * NaN
 */
/**
 * Truthy Value
 * "0"
 * 'fasle'
 * " "
 * []
 * {}
 * function(){} empty function
 */



const userLoggedIn = true
const moneyXa = true 

if(userLoggedIn && moneyXa){
    console.log("You can buy");
}


// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
    //     console.log("Object is empty");
    // }
    
    
//Nullish coalescing operator (??)
let val1;
val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1);

//Ternairy operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=90 ? console.log("More than 80") : console.log("Less than 80");;

