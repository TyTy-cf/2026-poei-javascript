
window.addEventListener('load', () => {
    const containerPokedex = document.querySelector('.block-pokemons');
    if (!containerPokedex) return;

    generatePokedex(containerPokedex);
});

function generatePokedex(containerPokedex) {
    for (let i = 1; i <= 151 ; i++) {
        // Créer la div.col-4 qui va englober l'image
        const div = document.createElement('div');
        // Gère le responsive !
        div.classList.add('col-lg-2');
        div.classList.add('col-md-4');
        div.classList.add('col-sm-6');
        div.classList.add('col-12');

        // Créer une balise <img> contenant la SRC de l'image du Pokémon
        const image = document.createElement('img');
        image.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/'+i+'.png'
        image.classList.add('img-fluid');
        image.alt = 'Image du Pokémon #' + i;

        // Ajoute l'image en tant qu'enfant de la div.col-4
        div.appendChild(image);

        // Ajoute la div.col-4 dans le "containerPokedex"
        containerPokedex.appendChild(div);
    }
}