// ++++++++++++++++++++++++ Memory+++++++++++++++++++++++++

//Stack(primitive), Heap(Non-primitive)
let myName = "Arpan"

let anotherName = myName
anotherName = "chaiaurcode"
console.log(anotherName);
console.log(myName);


let user1 = {
    email : "user@iic.edu.np",
    pay : "esewa"
}

let user2 = user1

user2.email = "arpan@iic.edu.np"
console.log(user1.email);
console.log(user2.email);