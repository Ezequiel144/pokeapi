
const maincontent = document.querySelector(".maincontent")

const pokemon = async ()=>{
    for(let i=1;i <= 151;i++){
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const data = await resp.json();
        console.log(data);
        datospokemon(data);
    }
}
pokemon();


function datospokemon(apidata){
    const div = document.createElement("div");
    div.classList = "card";
    div.innerHTML = `
        <p class="idpokefont">${apidata.id}</p>  
        <div class="contentimg">
            <img class="imgpoke" src="${apidata.sprites.other.dream_world.front_default}" alt="${apidata.name}">
        </div>
        <div class="content_title_id">
            <p class="idpoke">${apidata.id}</p>
            <h2 class="title">${apidata.name}</h2>
        </div>
        <div class="contenttips">
            <p class="tipos">fire</p>
            <p class="tipos">fire</p>
        </div>
        <div class="contentstast">
            <p class="stast" id="height">${apidata.height}dm</p>
            <p class="stast" id="weight">${apidata.weight}kg</p>
        </div>
    `;
    maincontent.append(div);
}