function changeGen(string, way) {
    clearPokemon();
    if (parseInt(string[0]) === 1) {
        if (way === true) {
            generatePokemon(152, 251);
        } else {
            generatePokemon(906, 1025);
        }
    } else if (parseInt(string[0]) === 2) {
        if (way === true) {
            generatePokemon(252, 386);
        } else {
            generatePokemon(1, 151);
        }
    } else if (parseInt(string[0]) === 3) {
        if (way === true) {
            generatePokemon(387, 493);
        } else {
            generatePokemon(152, 251);
        }
    } else if (parseInt(string[0]) === 4) {
        if (way === true) {
            generatePokemon(494, 649);
        } else {
            generatePokemon(252, 386);
        }
    } else if (parseInt(string[0]) === 5) {
        if (way === true) {
            generatePokemon(650, 721)
        } else {
            generatePokemon(387, 493);
        }
    } else if (parseInt(string[0]) === 6) {
        if (way === true) {
            generatePokemon(722, 809);
        } else {
            generatePokemon(494, 649);
        }
    } else if (parseInt(string[0]) === 7) {
        if (way === true) {
            generatePokemon(810, 905);
        } else {
            generatePokemon(650, 721);
        }
    } else if (parseInt(string[0]) === 8) {
        if (way === true) {
            generatePokemon(906, 1025);
        } else {
            generatePokemon(722, 809);
        }
    } else if (parseInt(string[0]) === 9) {
        if (way === true) {
            generatePokemon(1, 151);
        } else {
            generatePokemon(810, 905);
        }
    } else return;
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
            if (value < 152) title.innerText = "1st Gen Pokemon";
            else if (value < 252) title.innerText = "2nd Gen Pokemon";
            else if (value < 387) title.innerText = "3rd Gen Pokemon";
            else if (value < 494) title.innerText = "4th Gen Pokemon";
            else if (value < 650) title.innerText = "5th Gen Pokemon";
            else if (value < 722) title.innerText = "6th Gen Pokemon";
            else if (value < 810) title.innerText = "7th Gen Pokemon";
            else if (value < 906 ) title.innerText = "8th Gen Pokemon";
            else title.innerText = "9th Gen Pokemon";
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

function generatePokemon(min, max) {
    const main = document.querySelector('.block-pokemons');
    const title = document.querySelector('h1');

    if (main) {
        for (let i = min; i < max+1; i++) {
            const pokemon_div = document.createElement('div');
            const pokemon_img = document.createElement('img');
            const pokemon_name = document.createElement('p');

            pokemon_div.classList.add('col-xl-1', 'col-lg-2', 'col-md-4', 'col-sm-6', 'col-12');
            pokemon_img.src = urlById(i);

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