
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

const cachePokemonElements = new Map();

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
            if (!cachePokemonElements.has(value)) {
                cachePokemonElements.set(value, getPokemonContainer(value));
            }
            containerPokedex.appendChild(cachePokemonElements.get(value));
        } else {
            // Barre de recherche textuelle : on ne refresh plus la Gen 1 !
            for (const pokemonElement of cachePokemonElements.values()) {
                // pokemonElement = div content img + p
                // si p.textContent contient value, alors
                // retirer classe d-none
                // sinon ajouter d-none
            }
        }
    });
});

function generatePokedex(containerPokedex, begin, end) {
    for (let i = begin; i <= end ; i++) {
        if (!cachePokemonElements.has(i)) {
            cachePokemonElements.set(i, getPokemonContainer(i));
        }
        containerPokedex.appendChild(cachePokemonElements.get(i));
    }
}

function getPokemonContainer(number) {
    // Créer la div.col-4 qui va englober l'image
    const div = document.createElement('div');
    // Gère le responsive !
    div.classList.add('col-lg-1');
    div.classList.add('col-md-2');
    div.classList.add('col-sm-4');
    div.classList.add('col-6');

    // Créer une balise <img> contenant la SRC de l'image du Pokémon
    const image = document.createElement('img');
    image.src = getImageUrlById(number);
    image.classList.add('img-fluid');
    image.alt = 'Image du Pokémon #' + number;

    image.addEventListener('mouseenter', () => {
        image.src = getImageUrlById(number, true);
    });

    image.addEventListener('mouseout', () => {
        image.src = getImageUrlById(number);
    });

    const p = document.createElement('p');
    p.classList.add('text-center');
    p.setAttribute('data-info', '');

    const url = 'https://pokeapi.co/api/v2/pokemon/' + number;
    fetch(url, {method: 'GET'})
        .then((result) => {
            if (result.status === 404) {
                throw new Error("Le Pokémon numéro " + number + " n'existe pas...");
            }
            return result.json();
        })
        .then((jsonContent) => {
            if (jsonContent) {
                p.textContent = toTitleCase(jsonContent.name);
                div.appendChild(image);
                div.appendChild(p);
            }
        })
        .catch((err) => {
            console.log(err)
        });

    return div;
}

function toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getImageUrlById(id, isShiny = false) {
    if (isShiny) {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${id}.png`;
    }

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
}