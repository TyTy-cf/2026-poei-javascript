
window.addEventListener('load', () => {
    const containerDice = document.querySelector('div.dice-container');

    if (!containerDice) {
        return;
    }

    // Temp array containing all <img> created
    const dice = [];

    generateDice(containerDice, dice);

    // Add with button
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Throw Dice';

    button.addEventListener('click', () => {
        for (const die of dice) {
            updateSrc(die);
        }
    });

    containerDice.after(button);

});

function generateDice(containerDice, dice) {
    for (let i = 0; i < 5; i++) {
        const img = document.createElement('img');
        updateSrc(img);
        containerDice.appendChild(img);
        dice.push(img);
    }
}

function updateSrc(imgTag) {
    const value = Math.floor(Math.random() * 6) + 1;
    imgTag.src = '../images/dice/' + value + '.webp';
}