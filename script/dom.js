function boldStudents() {
    const myEtu = (document.querySelectorAll('td:first-child'));
    for (const etudiant of myEtu) {
        etudiant.classList.add("fw-bold");
    }
}

function addRanks() {
    const notesEtu = (document.querySelectorAll('td:nth-child(2)'));
    for (const notes of notesEtu) {
        notes.classList.add("ranks");
    }
}

function changeTitle() {
    const pageTitle = (document.querySelector('h1'));
    if (pageTitle) {
        pageTitle.innerText = "TP Javascript POEI";
    }
}

function getAvg() {
    const lines = document.querySelectorAll('tbody tr');
    for (const line of lines) {
        const rankTd = line.querySelector('td:nth-child(2)');
        const averageTd = line.querySelector('td:nth-child(3');

        if (rankTd && averageTd) {
            const ranks = rankTd.textContent.split(',');
            let sum = 0;
            for (const rank of ranks) {
                sum += parseInt(rank.replace(' ', ''));
            }

            averageTd.textContent = (sum / ranks.length).toString();
        }
    }
}

function toggleElement() {
    const tab = document.querySelector('.table-student');
    if (tab) {
        tab.classList.add('d-none');
        const button = document.querySelector('.btn.btn-primary')
        if (button) {
            button.addEventListener('click', () => {
                tab.classList.toggle('d-none');
            });
        }
    }
}

function logInput() {
    const inputBox = document.querySelectorAll('input');
    if (inputBox) {
        const log = document.querySelector('p');
        if (log) {
            inputBox.addEventListener('input', () => {
                log.textContent = inputBox.innerText;
            });
        }
    }
}

window.addEventListener('load', () => {
    boldStudents();
    addRanks();
    changeTitle();
    getAvg();
    toggleElement();
    logInput();
});