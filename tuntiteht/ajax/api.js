"use strict";

async function fetchData() {
    // try -> kokeile läpikäydä koodi
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon",);
        // response = palautetaan pyynnön palauttama lupaus (promise)
        // fetch("url", toinen argumentti) <- voi olla tyhjä

        // kolmannen osapuolen API:ssa tärkeää: check status-koodi (ok: true)
        console.log(response);
        if (response.ok) {
            const response_data = await response.json();
            return response_data;

        } else { // jos response.ok ei ole ok:
            throw new Error(`HTTP-virhe! tilakoodi: ${response.status}`)
        }

    // catch -> kokeilun läpikäynnin sijaan
    } catch (error) {
        console.log(`Virhe datan hakemisessa ${error}`);
    }
    
}

async function showPokemonTypes(event, url) {
    const pokemonData = await fetchData(url);
    console.log(pokemonData);
    console.dir(event);
}

async function createPokemonView() {
    const pokemonData = await fetchData("https://pokeapi.co/api/v2/pokemon");
    const pokemonDiv = document.querySelector("#poke-content");

    for (let pokemon of pokemonData.results){
        console.log(pokemon);
        let onePokemonDiv = document.createElement("div");
        let pokemonText = document.createElement("p");

        pokemonText.textContent = pokemon.name;

        pokemonText.addEventListener("click", (event) => showPokemonTypes(event, pokemon.url));

        onePokemonDiv.appendChild(pokemonText);
        pokemonDiv.appendChild(onePokemonDiv);
    }
}

createPokemonView();



//const pokemonData = fetchData(); // ei voi olla await fetchData(), toimii vain async-funktioissa
//console.log(pokemonData);

// TLDR: kutsussa kestää tosi kauan ennen kuin se on valmis
//for (let i=1; i!=0; i++) {
//    console.log(`${i} rivi kutsun jälkeen`)
//}
