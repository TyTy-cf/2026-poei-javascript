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

let digit = 7;
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

/**
 * Exo 6
 */

function addUpTo(max) {
    let tmpRes = 0;
    for (let i = 1; i <= max; i++) {
        tmpRes += i;
    }
    return tmpRes;
}

digit = 5;
console.log("Exo 6 : add up to " + digit)
console.log(addUpTo(digit));

/**
 * Exo 7
 */

function displayVowels() {
    return ['a','e', 'i', 'o', 'u', 'y'];
}

console.log("Exo 7 : display vowels")
console.log(displayVowels());

/**
 * Exo 8
 */

function getAverage(grades) {
    let tmpAvg = 0;
    const nbGrades = grades.length;
    for (let i = 0; i < nbGrades; i++) {
        tmpAvg += grades[i];
    }
    return (tmpAvg / nbGrades).toFixed(2);
}

const grades = [14, 16, 17, 13, 18, 2, 14];
console.log("Exo 8 : average of " + grades)
console.log(getAverage(grades));

/**
 * Exo 9
 */

function addArray(firstArray, secondArray) {
    const firstArrayLength = firstArray.length;
    const tmpArray = [];

    if (firstArrayLength !== secondArray.length) {
        return tmpArray;
    }
    for (let i = 0; i < firstArrayLength; i++) {
        tmpArray[i] = firstArray[i] + secondArray[i];
    }

    return tmpArray;
}

const firstArray = [4, 8, 7, 9, 1, 5, 4, 6];
const secondArray = [7, 6, 5, 2, 1, 3, 7, 4];
console.log("Exo 9 : add array [" + firstArray + "] to [" + secondArray + "]");
console.log(addArray(firstArray, secondArray));

/**
 * Exo 10
 */

function removeDuplicate(tmpArray) {
    // Initialiser un nouveau tableau vide (newArray)
    const newArray = [];
    // Parcourir le tableau "tmpArray" en paramètre
    for (let i = 0; i < tmpArray.length; i++) {
        const element = tmpArray[i];
        // Si "element" de "tmpArray" n'existe pas dans "newArray"
        if (!existsInArray(element, newArray)) {
            // Alors on ajoute "element" dans "newArray"
            newArray.push(element);
        }
    }
    // Renvoyer "newArray"
    return newArray;
}

const data = [1, 1, 2, 3, 4, 5, 3, 5, 4, 7];
console.log("Exo 10 : remove duplicate from " + data)
console.log(removeDuplicate(data));

/**
 * Exo 11
 */

function inverseWord(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

let word = "espion";
console.log("Exo 11 : inverseWord " + word)
console.log(inverseWord(word));

/**
 * Exo 12
 */

function isSecuredPassword(str) {
    return str.length >= 9 && (existsInArray("@", str) || existsInArray("!", str));
}

let pwd = "espion";
console.log("Exo 12 : ");
console.log(pwd + " is a secure password ? " + isSecuredPassword(pwd));
pwd = "espion@";
console.log(pwd + " is a secure password ? " + isSecuredPassword(pwd));
pwd = "espionnage";
console.log(pwd + " is a secure password ? " + isSecuredPassword(pwd));
pwd = "espionn@ge";
console.log(pwd + " is a secure password ? " + isSecuredPassword(pwd));
pwd = "espionnage!";
console.log(pwd + " is a secure password ? " + isSecuredPassword(pwd));

/**
 * Exo 13
 */

function excerpt(str, from = 14) {
    // if (str.length <= from) return str; => même chose qu'en-dessous !
    if (str.length <= from) {
        return str;
    }

    return str.substring(0, from) + "...";
}

word = "Lorem quisque class vestibulum";
console.log("Exo 13 : excerpt ")
console.log(excerpt(word));

/**
 * Exo 14
 */

function sanitizeString(str) {
    return str.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function isPangram(str) {
    let tmpStr = '';
    const avoidedCharacters = " '.,;?!"
    str = sanitizeString(str);

    for (const letter of str) {
        if (!existsInArray(letter, avoidedCharacters) && !existsInArray(letter, tmpStr)) {
            tmpStr += letter;
        }
    }

    return tmpStr.length === 26;
}

word = "The quick brown fôx jumps over thé lazy dög !";
console.log("Exo 14 : isPangram ")
console.log(isPangram(word));

/**
 * Exo 15
 */

function getRange(anArray) {
    let min = anArray[0],
        max = anArray[0];

    for (const elt of anArray) {
        if (elt < min) {
            min = elt;
        }
        if (elt > max) {
            max = elt;
        }
    }

    return max - min;
}

const anArray = [15, 78, 45, 96, 12, 32, 65, 78, 91];
console.log("Exo 15 : getRange of [" + anArray + "]");
console.log(getRange(anArray));

/**
 * Exo 16
 */

function isPalindrome(str) {
    let tmpStr = '';
    str = sanitizeString(str);

    for(let i = str.length - 1; i >= 0; i--) {
        tmpStr += str[i];
    }

    return tmpStr === str;
    // Same code as last instruction
    // if (tmpStr === str) {
    //     return true;
    // }
    // return false;
}

let palindrome = "ressasser"
console.log("Exo 16 : isPalindrome ");
console.log("isPalindrome for " + palindrome + " ? " + isPalindrome(palindrome));
palindrome = "rêver"
console.log("isPalindrome for " + palindrome + " ? " + isPalindrome(palindrome));
palindrome = "toto"
console.log("isPalindrome for " + palindrome + " ? " + isPalindrome(palindrome));

/**
 * Exo 17
 */

function getScrabbleScore(str) {
    let points = 0;
    const lettersByPoints = new Map();
    lettersByPoints.set("AEIOULNRST", 1);
    lettersByPoints.set("DG", 2);
    lettersByPoints.set("BCMP", 3);
    lettersByPoints.set("FHVWY", 4);
    lettersByPoints.set("K", 5);
    lettersByPoints.set("JX", 8);
    lettersByPoints.set("QZ", 10);

    str = str.toUpperCase();

    // Pour chaque lettre du mot "str"
    for (const letter of str) {
        // .keys() => récupère un tableau de TOUTES les clés de la map
        for (const key of lettersByPoints.keys()) {
            // Si la lettre existe dans la clé de la map, alors
            if (existsInArray(letter, key)) {
                // additionner le nombe de points de la lettre dans la variable "points"
                points += lettersByPoints.get(key); // get the value
                break;
            }
        }
    }

    // retourner "points"
    return points;
}

word = "lazy";
console.log("Exo 17 : getScrabbleScore of " + word);
console.log(getScrabbleScore(word));

/**
 * Exo 18
 */

function changeSentences(sentences, modify = 'fe') {
    let vowels = displayVowels();
    // initialiser une variable "modifiedSentence"
    let modifiedSentence = '';
    // pour chaque lettre de "sentences"
    for (const letter of sentences) {
        // ajouter la lettre à "modifiedSentence"
        modifiedSentence += letter;
        // si la lettre est une voyelle, alors on ajoute "fe" et on ajoute de nouveau la lettre
        if (existsInArray(letter, vowels)) {
            modifiedSentence += modify + letter;
        }
    }
    // retourner modifiedSentence
    return modifiedSentence;
}

word = "chien";
console.log("Exo 18 : changeSentences of " + word);
console.log(changeSentences(word));

/**
 * Exo 19
 */

function encryptDecrypt(str, gap) {
    str = str.toLowerCase();
    // Initialiser une variable avec l'alphabet complet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const avoidedCharacters = " '.,;?!"
    let encryptWord = '';
    // pour chaque lettre du mot "str"
    for (const letter of str) {
        if (existsInArray(letter, avoidedCharacters)) {
            encryptWord += letter;
            continue;
        }
        // récupérer son équivalent avec le gap dans l'alphabet complet => /!\
        const newIndex = (alphabet.indexOf(letter) + gap + 26) % 26;
        // ajouter la nouvelle lettre dans encryptWord
        encryptWord += alphabet[newIndex];
    }

    // retourner encryptWord
    return encryptWord;
}

word = "Le chat est noir";
console.log("Exo 19 : encrypt of " + word);
console.log(encryptDecrypt(word, 5));

/**
 * Exo 20
 */

function calculateHypotenuse(h, w) {
    return Math.sqrt(Math.pow(h, 2) + Math.pow(w, 2));
}

const h = 5;
const w = 7;
console.log("Exo 20 : calculateHypotenuse with h : " + h + " and w : " + w);
console.log(calculateHypotenuse(h, w));