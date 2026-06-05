
window.addEventListener('load', () => {
    const fridayForm = document.forms['friday-form'];
    if (!fridayForm) return;

    const button = document.querySelector('button.btn-warning');
    if (!button) return;

    fridayForm.classList.add('d-none');

    // Les <input> du form
    const inputName = fridayForm['name'];
    const inputFunction = fridayForm['function'];

    // Les <span> des données
    const nameElement = document.querySelector('section p:first-child span');
    const functionElement = document.querySelector('section p:nth-child(2) span');

    button.addEventListener('click', () => {
        // On masque ou démasque le formulaire
        fridayForm.classList.toggle('d-none');

        // On récupère les valeurs des <span> des informations du user pour les mettre dans les <input> appropriés
        inputName.value = nameElement.textContent;
        inputFunction.value = functionElement.textContent;
    });

    fridayForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // On récupère les valeurs des <input> pour les passer dans les <span>
        nameElement.textContent = inputName.value;
        functionElement.textContent = inputFunction.value;

        // On masque le formulaire une fois terminé
        fridayForm.classList.toggle('d-none');
    });

});