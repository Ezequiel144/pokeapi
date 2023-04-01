
const maincontent = document.querySelector(".maincontent")

const pokemon = async ()=>{
    for(let i=1;i <= 151;i++){
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const data = await resp.json();
        /* console.log(data); */
        datospokemon(data);
    }
}
pokemon();


function datospokemon(apidata){
    const type = apidata.types.map((d) => { 
        return `<p class="tipos" id="${d.type.name}">${d.type.name}</p>`;
    });
    const types = type.join('');
    console.log(types);

    const div = document.createElement("div");
    div.classList = "card";
    div.innerHTML = `
        <p class="idpokefont">#${apidata.id}</p>  
        <div class="contentimg">
            <img class="imgpoke" src="${apidata.sprites.other.dream_world.front_default}" alt="${apidata.name}">
        </div>
        <div class="content_title_id">
            <p class="idpoke">${apidata.id}</p>
            <h2 class="title">${apidata.name}</h2>
        </div>
        <div class="contenttips">
            ${types}
        </div>
        <div class="contentstast">
            <p class="stast" id="height">${apidata.height}dm</p>
            <p class="stast" id="weight">${apidata.weight}kg</p>
        </div>
    `;
    maincontent.append(div);
    /* console.log(apidata.types[0].type.name); */
}
