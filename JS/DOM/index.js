// const username = ""
// const welcomeMeg = document.getElementById("welcome")
// welcomeMeg.textContent += username === " " ? "Guest":username;
// const my_heading = document.getElementById("my-heading")
// my_heading.style.backgroundColor = "yellow"
// my_heading.style.textAlign="center"
// const fruits = document.getElementsByClassName("fruits")
// console.log(fruits)
// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");
// Array.from(h4Elements).forEach(h4Element=>{
//     h4Element.style.backgroundColor = "Yellow"
// })


// DOM NAVIGATION
// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement =>{
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "Yellow"
// })


// Last Child 

// const element = document.getElementById("Deserts")
// const lastChild = element.lastElementChild
// lastChild.style.backgroundColor = "Red"


// Add and change HTML 
const newH1 = document.createElement("h1");
newH1.id="myH1"
newH1.style.color = "tomato"
newH1.style.textAlign = "center"
// document.body.append(newH1)
// document.getElementById("box1").prepend(newH1)
const box2 = document.getElementById("box2")
document.body.insertBefore(newH1,box2)
// document.body.prepend(newH1)
newH1.textContent = "I Like Pizza"