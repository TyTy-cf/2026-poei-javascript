const generations = new Map();
generations.set('Gen 1', [1, 151]);
generations.set('Gen 2', [152, 251]);
generations.set('Gen 3', [252, 386]);
generations.set('Gen 4', [387, 493]);
generations.set('Gen 5', [494, 649]);
generations.set('Gen 6', [650, 721]);
generations.set('Gen 7', [722, 809]);
generations.set('Gen 8', [810, 905]);
generations.set('Gen 9', [906, 1025]);

window.addEventListener('load', () => {
    const containerPokedex = document.querySelector('.block-pokemons');
    if (!containerPokedex) return;

    const ulContainer = document.querySelector('ul.navbar-nav');
    if (!ulContainer) return;

    const inputSearch = document.querySelector('input[type="search"]');
    if (!inputSearch) return;

    let defaultGen = undefined;

    generations.forEach((value, gen) => {
        const button = document.createElement('button');
        button.textContent = gen;
        button.classList.add('btn', 'btn-primary', 'me-2')
        button.addEventListener('click', () => {
            containerPokedex.innerHTML = '';
            generatePokedex(containerPokedex, value[0], value[1]);
        });

        if (gen === 'Gen 1') {
            defaultGen = button;
            defaultGen.click();
        }

        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.appendChild(button);
        ulContainer.appendChild(li);
    });

    inputSearch.addEventListener('input', () => {
        const value = inputSearch.value;
        // Si c'est un nombre...
        if (!isNaN(parseInt(value)) && value <= 1025) {
            containerPokedex.innerHTML = '';
            getPokemonContainer(containerPokedex, value);
        } else {
            defaultGen.click();
        }
    });
});

function generatePokedex(containerPokedex, begin, end) {
    for (let i = begin; i <= end; i++) {
        getPokemonContainer(containerPokedex, i);
    }
}

async function getPokemonContainer(containerPokedex, number) {
    // Créer la div.col-4 qui va englober l'image
    const div = document.createElement('div');
    // Gère le responsive !
    div.classList.add('col-lg-2');
    div.classList.add('col-md-4');
    div.classList.add('col-sm-6');
    div.classList.add('col-12');

    // Créer une balise <img> contenant la SRC de l'image du Pokémon
    const image = document.createElement('img');
    image.src = getImageUrlById(number);
    image.classList.add('img-fluid');
    image.classList.add('w-100');
    image.alt = 'Image du Pokémon #' + number;

    const txtName = document.createElement('p');
    getPokemonObject(number).then((result) => {
        txtName.classList.add('text-center');
        txtName.classList.add('text-capitalize');
        txtName.classList.add('h5');
        txtName.textContent = result.name;
        div.appendChild(txtName);

        for (const type of result.types) {
            const txtType = document.createElement('p');
            txtType.classList.add('text-center');
            txtType.classList.add('text-capitalize');
            txtType.classList.add('h6');
            txtType.textContent = type.type.name;
            div.appendChild(txtType);
        }
    });

    image.addEventListener('mouseenter', () => {
        image.src = getImageUrlById(number, true);
    });

    image.addEventListener('mouseout', () => {
        image.src = getImageUrlById(number);
    });

    // Ajoute l'image en tant qu'enfant de la div.col-4
    div.appendChild(image);

    // Ajoute la div.col-4 dans le "containerPokedex"
    containerPokedex.appendChild(div);
}

function getImageUrlById(id, isShiny = false) {
    if (isShiny) {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`;
    }

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

function getPokemonObject(id) {
    return fetch('https://pokeapi.co/api/v2/pokemon/' + id, {method: 'GET'})
        .then(response => {
            return response.json();
        })
}