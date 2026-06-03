
window.addEventListener('load', () => {
    exo1();
    exo2();
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