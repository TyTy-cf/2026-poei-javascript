
window.addEventListener('load', () => {
    exo1();
    exo2();
    exo3();
    exo4();
    toggleElement(
        '.table-student',
        'button.btn.btn-primary',
    );
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
    const lines = document.querySelectorAll('tbody tr');
    for (const line of lines) {
        const rankTd = line.querySelector('td:nth-child(2)');
        const averageTd = line.querySelector('td:nth-child(3)');

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

function toggleElement(toggledElement, actionElement, isDefaultHidden = true) {
    const tableStudent = document.querySelector(toggledElement);
    if (tableStudent) {
        if (isDefaultHidden) {
            tableStudent.classList.add('d-none');
        }
        const button = document.querySelector(actionElement);
        if (button) {
            button.addEventListener('click', () => {
                tableStudent.classList.toggle('d-none');
            });
        }
    }
}














