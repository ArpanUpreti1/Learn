// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
//     if(!response.ok){
//         throw new Error("Couldn't Fetch")
//     }
//     return response.json()
// })
// .then(data =>console.log(data.id))
// .catch(error=>{console.log(error)})
fetchData()
async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Something went wrong");
        }
        const data = await response.json()
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite
        imgElement.style.display = "block"


    }
    catch(error){
        console.error(error)
    }
}