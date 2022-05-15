async function fetchBeers(){
    const res = await fetch("data/data.json");
    const resJson = await res.json(res);
    console.log(resJson);
    return resJson;
}

function cardComponent({title, sub, text}, buttonText, key){
    return `
        <div class="beer">
            <div class="circle">${key}<div>
            <h2>${title}</h2>
            <h3>${sub}<h3>
            <h4>${text}<h4>
            <button>
                <span class="material-icons">arrow forward</span>
                ${buttonText}
            </button>
        </div>
    `;
}

function beers(beers, buttonText){
    return `
        <section>
            ${beers.map((beer, index) => cardComponent(beer, buttonText, index)).join('')}
        </section>
    `;
}

async function loadEvent(){
    // const citiesData = await fetch("cities/city.list.json");
    const beersData = await fetchBeers();

    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML('beforeend', beers(beersData.cards, beersData.button));

}

window.addEventListener("load", loadEvent);