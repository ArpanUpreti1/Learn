// console.log("Hello world !!")
// console.log("Name: Arpann\nAddress: Itahari\nEmail: arpan.upreti@gmail.com\nContact: 9876554332")
// document.write("Name: Arpann<br>Address: Itahari<br>Email: arpan.upreti@gmail.com<br>Contact: 9876554332")
// let a = 10 ;
// let b = 80;
//     let add = a + b;
//     let sub = a - b;
//     let mul = a * b;
//     let aa = "2"+2+2; 
//     console.log(aa)
//     console.log("Add:",add);
//     console.log("Sub:",sub);
//     console.log("mul:",mul);
//     if(a>b){
//         console.log("A is greater")
//     }
//     else{
//         console.log("B is gerater")
//     }

    add()
    function add(){
        let a=10
        let b =5
        let add = a + b;
        let sub = a - b;
        let mul = a * b;
        console.log("Add:",add);
        console.log("Sub:",sub);
        console.log("mul:",mul);
    }
    var a = "Arpan"
    for(let i = 0; i<a.length;i++){
        console.log(a[i])
    }
const x =[1,2,3]
var a = "HELLO"
console.log(a.toLowerCase())
const student = {
    std1: "Arpan",
    std2: "Jenish"
}
student.std3 = "Jenisha"  // Adds value to the property 
student.std1 = "AAyush"
delete student.std1 // Deletes the property and the value 
console.log(student)  

function myFunction(){
    window.alert("The button was clicked")
}

let add1 =(a,b)=>{return a+b}
console.log(add1(10,20))