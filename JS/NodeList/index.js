let btn = document.querySelectorAll(".myBtn")
btn.forEach(element =>{
    element.addEventListener("mouseout",event=>{
        event.target.style.backgroundColor="tomato"
    })
})