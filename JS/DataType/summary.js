// Primitive dataType

// 7 Type: String, Number, Boolean, Null, undefiened, Symbol, BigInt

// JS is Dynamically and weekly typed language which means we dont need to explicitly define the datatype of any variables and we can reassign any type of data in the variable without explicitly defining it 
let score = 100
score = "Arpan"
score = [1,2,3,4]
console.log(score);
const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 1111111111111111111n;

console.log(id===anotherId);

// Reference / Non-Primitive Type:

//3 Types: Arrays, Objects, Functions 
const heros = ["Batman","superman","elon"]
 let myObj = {
    name: "Arpan",
    age: 22
};
const a = ()=>{
    console.log(10 + 20);
}
a()