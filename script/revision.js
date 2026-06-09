
window.addEventListener('load', () => {
    const tables = document.querySelectorAll('table.data-table');
    if (tables.length === 0) return;

    loadDataTable(tables);
});

function loadDataTable(tables) {
    for (const table of tables) {

        const tableLines = table.querySelectorAll('tbody > tr');

        // Création du container de l'input avec l'input, pour chaque table HTML récupérée
        const div = createElementByTagName('div', 'd-flex');
        const input = createElementByTagName('input', 'form-control', 'w-25', 'ms-auto');
        input.type = 'search';
        const p = createElementByTagName('p');
        p.textContent = tableLines.length +  " élément(s) affiché(s)";

        div.appendChild(p);
        div.appendChild(input);
        table.before(div);

        // Configuration de l'input
        input.addEventListener('input', () => {
            const value = input.value;
            let cpt = tableLines.length;
            for (const tr of tableLines) {
                tr.classList.remove('d-none');
                if (value.length >= 2) {
                    if (!tr.innerHTML.toLowerCase().includes(value.toLowerCase())) {
                        tr.classList.add('d-none');
                        cpt--;
                    }
                }
            }
            p.textContent = cpt + " élément(s) affiché(s)";
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