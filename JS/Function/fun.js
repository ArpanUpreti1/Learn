function addTwoNumber(num1, num2){
   return num1 + num2
}
const result = addTwoNumber(4,5)
// console.log(result);

function logInUserMesg(userName = "user"){
    return `${userName} just looged in!`
}
// console.log(logInUserMesg())

function calculateCartPrice(...num1){ // ... this is an rest operator
    let sum = 0
    for(let i = 0; i < num1.length; i++){
        sum += num1[i]
    }
    return sum
}
// console.log(calculateCartPrice(100,200,400))

const user = {
    username : "arpan",
    price : 19
}
function handleObject (anyobj){
    console.log(`username is: ${anyobj.username}`)
}
handleObject(user)
handleObject({
    username: "hhhhh"
})