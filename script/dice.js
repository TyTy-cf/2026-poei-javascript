
window.addEventListener('load', () => {

    const containerDice = document.querySelector('div.dice-container');

    if (containerDice) {
        for (let i = 0; i < 5; i++) {
            const img = document.createElement('img');
            const value = Math.floor(Math.random() * 6) + 1;
            img.src = '../images/dice/' + value + '.webp';
            containerDice.appendChild(img);
        }
    }
});