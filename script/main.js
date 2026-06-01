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