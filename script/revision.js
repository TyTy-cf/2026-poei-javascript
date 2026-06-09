// NOT 100% WORKING - displayCount is a lil' bit bugged

function isInsideRow(row, searchBar) {
    for (const item of row.children) {
        if (item.outerText.includes(searchBar.value)) {
            return true;
        }
    }
    return false;
}

function search(tab, searchBar) {
    const rows = tab.querySelectorAll('tbody tr');
    const displayText = document.querySelector('p');

    let totalCount = rows.length;
    let displayCount = 0;

    if (rows && displayText) {
        searchBar.addEventListener('input', () => {
            if (!searchBar.value) {
                displayCount = totalCount;
                displayText.textContent = `Displayed rows : ${displayCount} | Total rows : ${totalCount}`;
                for (const line of rows) {
                    line.classList.remove('d-none');
                }
            } else {
                for (const line of rows) {
                    let state = isInsideRow(line, searchBar);
                    if (state) {
                        line.classList.remove('d-none');
                        displayCount < 6 ? displayCount++ : displayCount = 6;
                    } else {
                        line.classList.add('d-none');
                        displayCount > 0 ? displayCount-- : displayCount = 0;
                    }
                }
                displayText.textContent = `Displayed rows : ${displayCount} | Total rows : ${totalCount}`;
            }
        })
    }
}

function barAppear(tab) {
    const main = document.querySelector('.row');
    const rows = tab.querySelectorAll('tbody tr');

    if (main && tab) {
        const secondary = document.createElement('div');
        const displayText = document.createElement('p');
        const form = document.createElement('form');
        const label = document.createElement('label');
        const input = document.createElement('input');

        let count = 0;

        for (const line of rows) count++;

        secondary.classList.add('mb-3', 'd-flex', 'flex-row', 'justify-content-between');

        displayText.textContent = `Displayed rows : ${count} | Total rows : ${count}`

        form.name = "search";

        label.for = "search";
        label.textContent = "Search :";
        label.classList.add('me-2');

        input.type = "text";
        input.id = "s-bar";
        input.name = "s-bar";
        input.placeholder = "Item you want to search";

        tab.before(secondary);
        secondary.appendChild(displayText);
        secondary.appendChild(form);
        form.appendChild(label);
        label.after(input);

        return input;
    }
}

window.addEventListener('load', () => {
    const tabs = document.querySelectorAll('.data-table');

    if (tabs) {
        for (const tab of tabs) {
            const searchBar = barAppear(tab);
            search(tab, searchBar);
        }
    }
})