// Allows multiple operation concurently without waiting
// function fun1(callback){
//     setTimeout(()=>{console.log("Task 1"); callback()}, 3000);
// }
// function fun2(){
//     console.log("Task 2 ");
//     console.log("Task 3");
// }
// fun1(fun2)
// try{
//     console.log("Hello")
// }
// catch(error){
//     console.error(error)
// }
// finally{
//     console.log("Close")
// }

// console.log("End")
try{
const divident = window.prompt("Enter a divident: ")
const divisor = window.prompt("Enter a divisor: ")
if(divisor == 0 ){
    throw new Error("You cant divide by 0")
}
const result = divident / divisor;
console.log(result)
}
catch(error){
    console.error(error);
}
console.log("END")