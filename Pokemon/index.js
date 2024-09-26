
async function fetchData() {

    // Grab the pokemonName
    let pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    
    // Fetch the data from the API
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    try{
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        let data = await response.json();
        let pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    } catch(error){
        console.error(error);
    }




}