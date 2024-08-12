const user = {
    username : "arpan",
    price : 99,
    welcomeMsg : function (){
        console.log(`${this.username}, welcome to arpan.com`);
    }
}
// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()
// console.log(this);

// function coffee(){
//     let username = "Arpan"
//     console.log(this.username);
// }
// coffee()


// const chai = () =>{
//     let username = "xzxz"
//     console.log(this.username);
// }
// chai()


// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => ({username: "arpan"})

// console.log(addTwo(2,3))