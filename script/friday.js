// const rlS = require('readline-sync');

function guessNumber() {
    const solution = Math.floor(Math.random() * 100) + 1;
    let guess = '';
    let userTry = 1;
    while (userTry < 6) {
        while (guess < 1 || guess > 100) {
            guess = rlS.question("Try to guess my number (1 to 100) : ");
        }
        if (parseInt(guess) === solution) {
            console.log(`\nGreat ! You found it in ${userTry} try(s) !`);
            return;
        } else {
            if (parseInt(guess) > solution) {
                guess = '';
                console.log(`\nLess ! ${5-userTry++} try(s) remaining.`);
            } else {
                guess = '';
                console.log(`\nMore ! ${5-userTry++} try(s) remaining.`);
            }
        }
    }
    console.log(`You have lost ! Number was ${solution}.`);
    return;
}

// guessNumber();

function doubleChar(string) {
    const occ = new Map();
    let result = ''
    for (const letter of string) {
        if (!occ.get(letter)) {
            occ.set(letter, 1);
            result += letter;
        } else {
            let i = occ.get(letter);
            occ.set(letter, ++i);
            for (let j = 0; j < i; j++) {
                result = result + letter;
            }
        }
    }
    return result;
}

// console.log(doubleChar("pomme"));
// console.log(doubleChar("verriere"));

window.addEventListener('load', () => {
    const modifyBtn = document.querySelector('div>button');
    const form = document.forms["friday-form"];
    const actual = document.querySelectorAll('span');
    const actualpfp = document.querySelector('img');
    if (modifyBtn && form && actual) {
        console.log(form["pfp"]);
        modifyBtn.addEventListener('click', () => {
            form["name"].value = actual[0].innerText;
            form["function"].value = actual[1].innerText;
            form.classList.toggle('d-none');
        })

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            actual[0].innerText = form["name"].value;
            actual[1].innerText = form["function"].value;
            actualpfp.src = form["pfp"]
        })
    }
})