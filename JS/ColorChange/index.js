const buttons = document.querySelectorAll(".button")
const body = document.querySelector('body');
const h1 = document.querySelector('h1')
buttons.forEach((button)=>{
button.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target.id === "green"){
        body.style.backgroundColor = e.target.id;
        h1.innerHTML = "You selected Green"
    }
    if(e.target.id === "yellow"){
        body.style.backgroundColor = e.target.id;
         h1.innerHTML = "You selected Yellow"
    }
    if(e.target.id === "red"){
        body.style.backgroundColor = e.target.id;
         h1.innerHTML = "You selected Red"
    }
    if(e.target.id === "blue"){
        body.style.backgroundColor = e.target.id;
         h1.innerHTML = "You selected Blue"
    }
    
})
})

//Mistakes  or takeaways
/**
 * 1. Forget that querySelector only selects first item not all
 * 2. Forget to run forEach() loop to select each indivial box to put some style .
 */