const rlS = require('readline-sync');

/**
 * Exo 1
 */

function predictFuture(hours, minutes) {
    return "Dans 1 minute il sera " + hours + "h" + (minutes + 1);
}

// console.log("Exo 1 : prediction du futur pour 10h15 : " + predictFuture(10, 15));

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

// console.log(calculatePriceBy(8));

/**
 * Exo 3
 */

function getAge(year) {
    // new Date() = date actuelle COMPLETE
    // getFullYear = renvoie l'année actuelle depuis un objet Date
    const currentYear = new Date().getFullYear();
    return currentYear - year;
}

// console.log("Exo 3 : Né en 2000, tu as " + getAge(2000) + " ans ");

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

// console.log(countUpToTen(17));

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

// console.log(displayMultiply(7));

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

// console.log(addUpTo(5));

/**
 * Exo 7
 */

function displayVowels() {
    return ['a','e', 'i', 'o', 'u', 'y'];
}

// console.log(displayVowels());

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

// console.log(getAverage([14, 16, 17, 13, 18, 2, 14]));

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

// console.log(addArray([4, 8, 7, 9, 1, 5, 4, 6], [7, 6, 5, 2, 1, 3, 7, 4]));

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

// console.log(removeDuplicate([1, 1, 2, 3, 4, 5, 3, 5, 4, 7]));

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

// console.log(inverseWord("espion"));

/**
 * Exo 12
 */

function isSecuredPassword(str) {
    return str.length >= 9 && (existsInArray("@", str) || existsInArray("!", str));
}

console.log(isSecuredPassword("espionn@ge"));

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

// console.log(excerpt("Lorem quisque class vestibulum"));

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

// console.log(isPangram("The quick brown fôx jumps over thé lazy dög !"));

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

// const anArray = [15, 78, 45, 96, 12, 32, 65, 78, 91];
// console.log(getRange(anArray));

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

/**
 * 
 * let palindrome = "ressasser"
 *  console.log("isPalindrome for " + palindrome + " ? " + isPalindrome(palindrome));
 *  palindrome = "rêver"
 *  console.log("isPalindrome for " + palindrome + " ? " + isPalindrome(palindrome));
 *  palindrome = "toto"
 *  console.log("isPalindrome for " + palindrome + " ? " + isPalindrome(palindrome));
 * 
*/

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

    
    for (const letter of str) {
        lettersByPoints.forEach((value, key) => {
            if (key.includes(letter.toUpperCase())) {
                points += value;
            }
        });
    }

    return points;
}
// console.log(getScrabbleScore("lazy"));

/**
 * Exo 18
 */

function changeSentences(str) {
    let modified = "";
    const voyelle = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < voyelle.length; j++) {
            if (str[i] == voyelle[j]) {
                modified += `${str[i]}fe`;
            }
        }
        modified += `${str[i]}`
    }
    return modified
}

// console.log(changeSentences("anticonstitutionnellement"));

/**
 * Exo 19
 */

const ALPHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function encrypt(str, gap) {
    let result = '';
    let index_fix = 0;
    const stringTLC = str.toLowerCase();
    for (let i = 0; i < stringTLC.length; i++) {
        if (stringTLC[i] == ' ') result += ' ';
        for (let j = 0; j < ALPHABET.length-1; j++) {
            if (stringTLC[i] == ALPHABET[j]) {
                if (j+gap > ALPHABET.length) {
                    index_fix = (j+gap)-ALPHABET.length;
                    result += ALPHABET[index_fix];
                } else result += ALPHABET[j+gap]
            }
        }
    }
    return result;
}

// console.log(encrypt("chat", 3));

function decrypt(str, gap) {
    let unresult = '';
    let index_fix = 0;
    const cypherTLC = str.toLowerCase();
    for (let i = 0; i < cypherTLC.length; i++) {
        if (cypherTLC[i] == ' ') unresult += ' ';
        for (let j = 0; j <= ALPHABET.length-1; j++) {
            if (cypherTLC[i] == ALPHABET[j]) {
                if (j-gap < 0) {
                    index_fix = (j-gap)+ALPHABET.length;
                    unresult += ALPHABET[index_fix];
                } else unresult += ALPHABET[j-gap]
            }
        }
    }
    return unresult;
}

// console.log(decrypt("fkdw", 3));

/**
 * Exo 20
 */

function calculateHypotenuse(h, w) {
    return Math.sqrt(h*h + w*w)
}

// console.log(calculateHypotenuse(67,42))

/**
 * Exo 21
 */

function getGain(nbSubscribers) {
    let total = nbSubscribers*4.99;
    if (nbSubscribers < 100) {
        console.log(`Gain streamer : ${total*0.6} ; Gain site : ${total*0.4}`)
    } else if (nbSubscribers < 500) {
        console.log(`Gain streamer : ${total*0.75} ; Gain site : ${total*0.25}`)
    } else if (nbSubscribers < 1000) {
        console.log(`Gain streamer : ${total*0.85} ; Gain site : ${total*0.15}`)
    } else console.log(`Gain streamer : ${total*0.95} ; Gain site : ${total*0.05}`)
    return total;
}

// console.log(getGain(999))

/**
 * Exo 22
 */

function displayHoursByTime(time) {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time%3600)/60);

    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${hours}h${minutes}`;
}

// console.log(displayHoursByTime(3599));

/**
 * Exo 23
 */

function getLettersBy(str) {
    let voy = "aeiouy"
    let voyNumb = 0;
    let spcNumb = 0;
    for (const letter in str) {
        let actualLetter = str[letter].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        for (let i = 0; i < voy.length; i++) {
            if (actualLetter == voy[i]) {
                voyNumb++;
            }
        }
        if (actualLetter == ' ') {
            spcNumb++;
        }
    }
    return `Il y a ${voyNumb} voyelles et ${str.length-voyNumb-spcNumb} consonnes dans la chaîne de caractères "${str}"`
}

// console.log(getLettersBy("Dobry wieczór"))

/**
 * Exo 24
 */

function generateLetters() {
    let tab = [];
    let consTab = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
    let voyTab = ['A', 'E', 'I', 'O', 'U', 'Y'];

    while (tab !== 9) {
        let askLetter= rlS.question("Consonne ou voyelle ? (C/V): ");
        if (askLetter.toUpperCase() == 'C') {
            tab.push(consTab[Math.floor(Math.random() * consTab.length)]);
        } else if (askLetter.toUpperCase() == 'V') {
            tab.push(voyTab[Math.floor(Math.random() * voyTab.length)])
        } else continue;
    }

    return tab;
}

// console.log(generateLetters());

/**
 * Exo 25
 */

function mastermind() {
    let tabToFind = [];
    let tabGuess = [];
    let tabDisplay = [];

    for (let i = 0; i < 4; i++) {
        tabToFind.push(parseInt(Math.floor(Math.random() * 6)));
    }

    for (let i = 0; i < 9; i++) {
        let win = true;
        for (let j = 0; j < 4; j++) {
            value = rlS.question("Saisissez un chiffre de 1 à 5 : ");
            tabGuess.push(parseInt(value));
        }
        for (let j = 0; j < 4; j++) {
            if (tabToFind[j] == tabGuess[j]) {
                tabDisplay.push(tabToFind[j]);
            } else {
                tabDisplay.push('x');
                win = false;
            }
        }
        if (win == true) {
            console.log(`Gagné ! ${i+1} tentatives nécessaires. La réponse était ${tabToFind}`);
            return 'OK';
        }
        console.log(`Résultat : ${tabDisplay}`);
        tabDisplay = [];
        tabGuess = [];
    }
    console.log(`Perdu... La réponse était ${tabToFind}.`);
    return false;

}

// console.log(mastermind())

/**
 * Exo 26
 */

function getTimeTraveling(km) {
    const speed = [
        {
            way: "Walking",
            kmh: 5
        },
        {
            way: "Biking",
            kmh: 20
        },
        {
            way: "Driving Classic",
            kmh: 90
        },
        {
            way: "Driving Highway",
            kmh: 130
        }
    ]

    timewalk = displayHoursByTime((km/speed[0].kmh)*3600);
    timebike = displayHoursByTime((km/speed[1].kmh)*3600);
    timedclas = displayHoursByTime((km/speed[2].kmh)*3600);
    timedhigh = displayHoursByTime((km/speed[3].kmh)*3600);
    
    return `A pied vous mettrez ${timewalk} pour faire ${km}km
En vélo vous mettrez ${timebike} pour faire ${km}km
En voiture sur route vous mettrez ${timedclas} pour faire ${km}km
En voiture sur autoroute vous mettrez ${timedhigh} pour faire ${km}km`
}

// console.log(getTimeTraveling(100));

// END