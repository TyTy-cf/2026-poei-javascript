function dice_roll() {
    const main = document.querySelector('div.container');
    if (main) {
        const img_result = document.querySelectorAll('img');
        const button = document.querySelector('button');

        if (img_result) {
            for (const img of img_result) {
                const result = Math.floor(Math.random() *6) + 1;
                img.src = `../images/dice/${result}.webp`;
                img.alt = `Un dé montrant le chiffre ${result}.`
            }

            if (button) {
                button.textContent = 'Relancer !';
            }
        }
    }
}

function dice_on_press() {
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', () => {
            dice_roll();
        });
    }
}

window.addEventListener('load', () => {
    const main = document.querySelector('div.container');
    const dices = document.createElement('div');

    dices.classList.add('d-flex', 'flex-row', 'align-items-center', 'justify-content-space-between', 'col-2');

    main.appendChild(dices);
    if (main) {
        const button = document.createElement('button');

        for (let i = 0; i < 5; i++) {
            const img_result = document.createElement('img');

            img_result.src = `../images/dice/default.gif`;
            img_result.alt = `Un dé tournant sur lui-même.`

            dices.appendChild(img_result);
        }

        button.textContent = 'Lancer les dés !';
        button.classList.add('d-block', 'mt-3', 'col-12', 'p-1');

        main.after(button);
    }
    dice_on_press();
})