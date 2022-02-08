var axios = require('axios').default;

const getPokemon = async (pokemonName) => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(response => {
        return response.data.sprites.front_default
    }).catch(err => console.log(err))
}

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    console.log("You typed", data.trim());
    console.log(getPokemon(data.trim()).then(response => {
        console.log(response)
    }))
});