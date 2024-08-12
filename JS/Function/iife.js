//Immediately Invoked Function Expression (IIFE). It is used to avoid global scope pollution
(function chai(){
    console.log(`DB Connected`)
})();

((name) =>{
    console.log(`DB connected to ${name}`)
})('Arpan')