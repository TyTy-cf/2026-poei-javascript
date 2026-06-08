
window.addEventListener('load', () => {

    new Promise((resolve, reject) => {
        const value = Math.floor(Math.random() * 50);
        console.log(value)
        if (value >= 40) {
            resolve("C'est vraiment pas mal");
        } else {
            reject("C'est pas faux");
        }
    }).then((resultPromise) => {
        return resultPromise;
    }).then((resultInsidePromise) => {
        console.log(resultInsidePromise);
    }).catch((err) => {
        console.log(err);
    });

    let loading = true;
    // API : je sais que je vais récupérer du JSON
    const url = 'https://pokeapi.co/api/v2/pokemon/445';

    fetch(url, {method: 'GET'})
    .then((result) => {
        if (result.status === 404) {
            throw new Error("Error 404 sur : " + url);
        }
        // ... je peux donc faire un "result.json()"
        return result.json();
    })
    .then((jsonContent) => {
        // Traitement ici lorsque la promise est arrivée
        loading = false;
        console.log("loading dans le then : " + loading)
        // Je log le JSON ici
        console.log(jsonContent.name)
    })
    .catch((err) => {
        console.log(err)
    });

    console.log("loading en dehors du fetch : " + loading)

});