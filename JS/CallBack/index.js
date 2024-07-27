// hello(wait);
// leave()

// function hello(callback){
//     console.log("Hello")
//     callback()
// }
// function leave(){
//     console.log("Leave")
// }
// function wait(){
//     console.log("Wait")
// }
// function goodBye(){
//     console.log("Goodbye")
// }
sum(displayDOM,10,2)
function sum(callback,x,y){
    let result = x + y
    callback(result)
}
function display(result){
    console.log(result)
}
function displayDOM(result){
    document.getElementById("myh1").textContent = result
}