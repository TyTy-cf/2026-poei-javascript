
window.addEventListener('load', () => {
    exo1();
    exo2();
    exo3();
});

function exo1() {
    const students = document.querySelectorAll('td:first-child');
    for (const td of students) {
        td.classList.add('fw-bold');
    }
}

function exo2() {
    const ranks = document.querySelectorAll('td:nth-child(2)');
    for (const td of ranks) {
        td.classList.add('ranks');
    }
}

function exo3() {
    const title = document.querySelector('h1');
    if (title) {
        title.innerText = 'TP Javascript POEI';
    }
}

function exo4() {

}









