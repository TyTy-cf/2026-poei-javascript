function searchInTable(table, input, counter) {
    const trList = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    let countVisible = 0;

    let tdList;
    let containsSearch = false;
    for (const tableElement of trList) {
        tdList = tableElement.getElementsByTagName("td");
        for (const td of tdList) {
            if (td.textContent.toLowerCase().includes(input.value.toLowerCase()))
            {
                containsSearch = true;
                countVisible++;
                break;
            }
        }

        tableElement.hidden = !containsSearch;

        containsSearch = false;
    }
    counter.textContent = countVisible;
}

function generateSearchBars(tables) {
    for (const table of tables) {
        const head = table.querySelector("thead");

        const row = document.createElement("div");
        row.classList.add('row');

        const input = document.createElement("input");
        input.classList.add('col-3');
        input.classList.add('ms-auto');
        input.type = "text";
        input.name = "tableSearch";
        input.placeholder = "Recherche";

        const counterDiv = document.createElement("p");
        counterDiv.classList.add('mr-auto');
        counterDiv.classList.add('col-3');

        const total = document.createElement("span");
        total.textContent = "/" + table.getElementsByTagName("tbody")[0].getElementsByTagName("tr").length

        const counter = document.createElement("span");
        counter.classList.add('counter');

        counterDiv.appendChild(counter);
        counterDiv.appendChild(total);
        row.appendChild(counterDiv);
        row.appendChild(input);

        head.parentElement.parentElement.prepend(row);
        searchInTable(table, input, counter);

        input.addEventListener("input", () => searchInTable(table, input, counter));
    }
}

window.addEventListener('load', () => {
    const tables = document.querySelectorAll(".data-table");
    generateSearchBars(tables);
});