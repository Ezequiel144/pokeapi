
const pokemon = async ()=>{
    const resp = await fetch("https://pokeapi.co/api/v2/pokemon/12")
    const data = await resp.json();
    console.log(data);
}

pokemon();