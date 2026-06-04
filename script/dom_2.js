window.addEventListener('load', () => {
    // Example of event with mouseover listener on all the document
    document.addEventListener('mouseover', (event) => {
        console.log(event);
    });

    // On créé une balise <img> ; le nom de la balise à créer
    const img = document.createElement('img');
    img.src = 'https://picsum.photos/200/300.jpg';
    img.alt = 'Une photo aléatoire';
    img.classList.add('img-fluid');

    const title = document.querySelector('h1');
    if (title) {
        title.after(img);
    }

    const form = document.forms['a-form']; // HTMLFormElement
    if (form) {
        const inputPassword = form['password'];  // HTMLInputElement
        const inputConfirmPassword = form['confirm-password'];  // HTMLInputElement

        if (inputPassword && inputConfirmPassword) {

            // Example of event with keyUp listener
            inputPassword.addEventListener('keyup', (event) => {
                if (event.key === 'Shift') {
                    console.log(event)
                }
            });

            form.addEventListener('submit', (event) => {
                // Bloque le comportement par défaut de l'évènement submit
                event.preventDefault();
                const passwordValue = inputPassword.value;
                const confirmPasswordValue = inputConfirmPassword.value;

                // Si les mots de passe ne sont pas vide & égaux, alors...
                if (passwordValue !== '' &&
                    passwordValue === confirmPasswordValue
                ) {
                    // On supprime l'image
                    img.remove();
                } else {
                    alert("Les mots de passe ne sont pas valides");
                }
            });
        }
    }
});