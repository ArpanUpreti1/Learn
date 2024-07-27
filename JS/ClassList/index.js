const myBtn = document.getElementById("myBtn");
// myBtn.classList.add("hover")
// myBtn.classList.remove("enabled")
myBtn.addEventListener("mouseover",event=>{
    event.target.classList.add("hover")
})
myBtn.addEventListener("mouseout",event=>{
    event.target.classList.remove("hover")
})
