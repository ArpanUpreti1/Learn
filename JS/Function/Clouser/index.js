// function outer(){

//     let message = "Hello"
//     function inner(){
//         console.log(message)
//     }
//     inner()
// }

// outer();
function createCounter(){
let count = 0 ;
function increment(){
    count ++;
    console.log(`Count Increased to: ${count}`)
}
increment()
increment()
increment()
}
createCounter()

