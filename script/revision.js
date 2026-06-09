
window.addEventListener('load', () => {
    const tables = document.querySelectorAll('table.data-table');
    if (tables.length === 0) return;

    loadDataTable(tables);
});

function loadDataTable(tables) {
    for (const table of tables) {
        // Création du container de l'input avec l'input, pour chaque table HTML récupérée
        const div = createElementByTagName('div', 'd-flex');
        const input = createElementByTagName('input', 'form-control', 'w-25', 'ms-auto');
        input.type = 'search';

        div.appendChild(input);
        table.before(div);

        const tableLines = table.querySelectorAll('tbody > tr');

        // Configuration de l'input
        input.addEventListener('input', () => {
            const value = input.value;
            for (const tr of tableLines) {
                tr.classList.remove('d-none');
                if (value.length >= 2) {
                    if (!tr.innerHTML.toLowerCase().includes(value.toLowerCase())) {
                        tr.classList.add('d-none');
                    }
                }
            }
        });
    }
}

function createElementByTagName(tagName, ...classList) {
    const el = document.createElement(tagName);
    for (const classItem of classList) {
        el.classList.add(classItem);
    }
    return el;
}