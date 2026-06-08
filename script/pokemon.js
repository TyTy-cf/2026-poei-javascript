const ordinal = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
const gen = new Map;
gen.set(1, [1, 151]);
gen.set(2, [152,251]);
gen.set(3, [252, 386]);
gen.set(4, [387, 493]);
gen.set(5, [494, 649]);
gen.set(6, [650, 721]);
gen.set(7, [722, 809]);
gen.set(8, [810, 906]);
gen.set(9, [907, 1025]);

function changeGen(string, way) {
    clearPokemon();
    let generation = 0;
    if (way === true) {
        if (parseInt(string[0]) === 9) generation = gen.get(1);
        else generation = gen.get(parseInt(string[0])+1);
    } else {
        if (parseInt(string[0]) === 1) generation = gen.get(9);
        else generation = gen.get(parseInt(string[0])-1);
    }
    generatePokemon(generation[0], generation[1]); 
}

function search(value) {
    const main = document.querySelector('.block-pokemons');
    const form = document.querySelector('form[name="search"]');
    const title = document.querySelector('h1');

    if (main) {
        clearPokemon();
        const pokemon_div_new = document.createElement('div');
        const pokemon_img = document.createElement('img');

        pokemon_div_new.classList.add('col-12');
        pokemon_img.src = urlById(value);

        pokemon_img.addEventListener('mouseover', () => {
            pokemon_img.src = urlById(value, true);
        })

        pokemon_img.addEventListener('mouseout', () => {
            pokemon_img.src = urlById(value);
        })


        main.appendChild(pokemon_div_new);
        pokemon_div_new.appendChild(pokemon_img);
        if (title) {
            for (const generation of gen) {
                if (value >= generation[1][0] && value <= generation[1][1]) {
                    console.log(generation)
                    title.textContent = `${generation[0]}${ordinal[generation[0]-1]} Gen Pokemon`
                }
            }
        }
    }
}

function clearPokemon() {
    const main = document.querySelector('.block-pokemons');
    if (main) {
        const pokemon_div = document.querySelectorAll('.col-12')
        for (const pokemon of pokemon_div) {
            pokemon.remove();
        }
    }
}

function clearAll() {
    const main = document.querySelector('.container');
    if (main) {
        main.remove();
    }
}

function generatePokemon(min, max) {
    const main = document.querySelector('.block-pokemons');
    const title = document.querySelector('h1');

    if (main) {
        for (let i = min; i < max+1; i++) {
            const pokemon_div = document.createElement('div');
            const pokemon_img = document.createElement('img');
            const pokemon_name = document.createElement('p');
            pokemon_name.classList.add('bold')

            pokemon_div.classList.add('col-xl-1', 'col-lg-2', 'col-md-4', 'col-sm-6', 'col-12');
            pokemon_img.src = urlById(i);

            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`, {method: 'GET'})
            .then(res => {
                return res.json();
            })
            .then(json => {
                if (json) {
                    pokemon_name.textContent = json.name;
                } else throw new Error("Non-JSON format received. Abort.")
            })
            .catch((err) => {
                console.log(err);
            })

            pokemon_img.addEventListener('mouseover', () => {
                pokemon_img.src = urlById(i, true);
            })

            pokemon_img.addEventListener('mouseout', () => {
                pokemon_img.src = urlById(i);
            })

            main.appendChild(pokemon_div);
            pokemon_div.appendChild(pokemon_img);
            pokemon_div.appendChild(pokemon_name);
        }
    }
    if (title) {
        if (min == 1) title.innerText = "1st Gen Pokemon";
        else if (min == 152) title.innerText = "2nd Gen Pokemon";
        else if (min == 252) title.innerText = "3rd Gen Pokemon";
        else if (min == 387) title.innerText = "4th Gen Pokemon";
        else if (min == 494) title.innerText = "5th Gen Pokemon";
        else if (min == 650) title.innerText = "6th Gen Pokemon";
        else if (min == 722) title.innerText = "7th Gen Pokemon";
        else if (min == 810) title.innerText = "8th Gen Pokemon";
        else title.innerText = "9th Gen Pokemon";
    }
}

function generateIndividualPokemon(index) {
    const main = document.querySelector('body');
    const container = document.createElement('div');
    const row = document.createElement('div');
    const img = document.createElement('img');
    const pokemon_name = document.createElement('h2');

    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${index}.gif`
    pokemon_name.textContent = 

    container.classList.add('container');
    row.classList.add('row', 'desc');
    img.classList.add('col-6');
    pokemon_name.classList.add('col-6');

    main.appendChild(container);
    container.appendChild(row);
    row.appendChild(img);
}

function urlById(id, isShiny = false) {
    if (isShiny) {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`
    }

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
}

window.addEventListener('load', () => {
    const main = document.querySelector('div.row.block-pokemons');
    const inputBox = document.querySelector('input');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const title = document.querySelector('h1');

    generatePokemon(1, 151);
    const pokemon_img = document.querySelectorAll('img');

    if (pokemon_img) {
        for (const img of pokemon_img) {
            img.addEventListener('click', () => {
                console.log(img)
                let link = img.src;
                let index = link.match(/(\d+)/);
                clearAll();
                generateIndividualPokemon(parseInt(index[0]));
            })
        }
    }

    if (inputBox) {
        inputBox.addEventListener('input', () => {
            if (!inputBox.value) {
                clearPokemon();
                generatePokemon(1, 151);
            } else search(inputBox.value);
        })
    }

    if (left && right && title) {
        left.addEventListener('click', () => {
            changeGen(title.innerText, false);
        });
        right.addEventListener('click', () => {
            changeGen(title.innerText, true);
        })
    }
})