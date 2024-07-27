const myBox = document.getElementById("mybox")
const mybtn = document.getElementById("mybtn")


mybtn.addEventListener("mouseout",event =>{
    myBox.style.backgroundColor="greenyellow";
    myBox.textContent = "Click me";
})
mybtn.addEventListener("mouseover",event =>{
    myBox.style.backgroundColor="yellow";
    myBox.textContent = "Please";
})