/**
 * Exo 1
 */

function predictFuture(hours, minutes) {
    return "Dans 1 minute il sera " + hours + "h" + (minutes + 1);
}

console.log("Exo 1 : prediction du futur pour 10h15 : " + predictFuture(10, 15));

/**
 * Exo 2
 */

function calculatePriceBy(copy) {
    let price = 0.08;
    if (copy < 10) {
        price = 0.11;
    } else if (copy <= 50) {
        price = 0.10;
    } else if (copy <= 99) {
        price = 0.09;
    }
    return copy * price;
}

console.log("Exo 3 : reprographie")
console.log(calculatePriceBy(8));
console.log(calculatePriceBy(39));
console.log(calculatePriceBy(72));
console.log(calculatePriceBy(150));

/**
 * Exo 3
 */

function getAge(year) {
    // new Date() = date actuelle COMPLETE
    // getFullYear = renvoie l'année actuelle depuis un objet Date
    const currentYear = new Date().getFullYear();
    return currentYear - year;
}

console.log("Exo 3 : Né en 2000, tu as " + getAge(2000) + " ans ");

/**
 * Exo 4
 */

function countUpToTen(startFrom) {
    let str = '';
    for(let i = startFrom + 1; i <= startFrom + 10; i++) {
        str += i + "\n";
    }
    return str;
}

const nb = 17;
console.log("Exo 4 : on compte depuis " + nb + " jusqu'à " + (nb + 10));
console.log(countUpToTen(nb));

/**
 * Exo 5
 */

function displayMultiply(digit) {
    let str = '';
    for (let i = 1; i <= 12; i++) {
        str += i + " x " + digit + " = " + (i * digit) + "\n";
    }
    return str;
}

const digit = 7;
console.log("Exo 5 : table de multiplication de " + digit)
console.log(displayMultiply(digit));


/**
 * Utility to find an element inside an array
 * @param element
 * @param array
 */
function existsInArray(element, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
}