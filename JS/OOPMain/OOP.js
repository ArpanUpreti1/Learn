// const user  = {
//     username : "Arpan",
//     LoginCount : 12,
//     SignIned : true,
//     userDetail : function(){
//         console.log("Got details");
        
//     }
// }
// user.userDetail()

//Everything in js is object 

//Function also can referecnce to object.

function addby5(num){
    return num + 5;
}
addby5.power = 2
// console.log(addby5.power)
// console.log(addby5(2))
// console.log(addby5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.incerment = function(){
    this.score++;
}
createUser.prototype.printMe = function (){
    console.log(`Price is: ${this.score}`);
    
}
const chai = new createUser("Chai",25)
const tea = createUser("Tea",100)
chai.printMe()