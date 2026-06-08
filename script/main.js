/**
 * Exo 1
 */

function predictFuture(hours, minutes) {
    let now = new Date(Date.now());
    let timestamp = (minutes * 60 * 1000) + (hours * 60 * 60 * 1000);
    now.setTime(now.getTime() + timestamp);
    return "Dans " + hours + "h" + minutes + " minute il sera " + now.toTimeString();
}

// console.log(predictFuture(10, 15));

/**
 * Exo 2
 */

function calculPriceBy(copy) {
    let price;

    if (copy >= 100) {
        price = 0.08;
    } else if (copy >= 50) {
        price = 0.09;
    } else if (copy >= 10) {
        price = 0.10;
    } else {
        price = 0.11;
    }

    return price * copy;
}

// console.log("For 5 copies the price is " + calculPriceBy(5));
// console.log("For 15 copies the price is " + calculPriceBy(15));
// console.log("For 120 copies the price is " + calculPriceBy(120));


/**
 * Exo 3
 */

function getAge(year) {
    let now = new Date(Date.now());
    return now.getFullYear() - year;
}

// console.log(getAge(1997));

/**
 * Exo 4
 */

function countUpToTen(startFrom) {
    let result = "Count from : " + startFrom;

    for (let i = startFrom + 1; i < (startFrom + 11); i++) {
        result += "\r\n" + i;
    }

    return result;
}

// console.log(countUpToTen(17));

/**
 * Exo 5
 */

function displayMultiply(digit) {
    let result = "Table of : " + digit;

    for (let i = 1; i <= 12; i++) {
        result += "\r\n" + i + " x " + digit + " = " + i * digit;
    }

    return result;
}

// console.log(displayMultiply(3));

/**
 * Exo 6
 */

function addUpTo(max) {
    let result = 0;

    for (let i = 1; i <= max; i++) {
        result += i;
    }

    return result;
}

// console.log(addUpTo(5));

/**
 * Exo 7
 */

function displayVowels() {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    return vowels;
}

/**
 * Exo 8
 */

function getAverage(grades) {
    let total = 0;
    for (const grade of grades) {
        total += grade;
    }

    return total / grades.length;
}

/**
 * Exo 9
 */

function addArray(first, second) {
    let newArray = [];

    if (first.length === second.length) {
        for (const index in first) {
            newArray.push(first[index] + second[index]);
        }
    }
    return newArray;
}

// console.log(addArray([10, 5, 6, 5.2], [4, 5.5, 6, 100]));

/**
 * Exo 10
 */

function isInArray(array, element) {
    for (const arrayElement of array) {
        if (element === arrayElement) {
            return true;
        }
    }
    return false;
}

function removeDuplicate(array) {
    let newArray = [];

    for (const element of array) {
        if (!isInArray(newArray, element)) {
            newArray.push(element);
        }
    }

    return newArray
}

// console.log(removeDuplicate([1, 1, 4, 5, 4, 6, 10, 2, 6, 1]));

/**
 * Exo 11
 */

function inverseWord(str) {
    let reversedStr = "";

    for (let i = str.length; i >= 0; i--) {
        reversedStr += str.charAt(i);
    }

    return reversedStr;
}

// console.log(inverseWord("espion"));

/**
 * Exo 12
 */

function isSecuredPassword(password) {
    return /^(?=.*[@!]).{9,}$/.test(password);
}

// console.log(isSecuredPassword("password@"));
// console.log(isSecuredPassword("password"));
// console.log(isSecuredPassword("hello!12"));
// console.log(isSecuredPassword("12345678!"));

/**
 * Exo 13
 */

function excerpt(str, from = 15) {
    let newStr = "";
    if (str.length > from) {
        newStr = str.substring(0, from);
        newStr += "...";
    }

    return newStr;
}

// console.log(excerpt("C'est une très longue phrase"));

/**
 * Exo 14
 */

function isPangram(str) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (const letter of alphabet) {
        if (!str.includes(letter)) {
            return false
        }
    }

    return true;
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// console.log(isPangram("The quick brown fox jumps over."));

/**
 * Exo 15
 */

function getRange(anArray) {
    let lowestValue = Number.MAX_VALUE;
    let highestValue = 0;

    for (const element of anArray) {
        if (element > highestValue) {
            highestValue = element;
        }
        if (element < lowestValue) {
            lowestValue = element;
        }
    }

    return highestValue - lowestValue;
}

// console.log(getRange([15, 78, 45, 96, 12, 32, 65, 78, 91]));

/**
 * Exo 16
 */

function isPalindrome(str) {
    str = str.normalize("NFD").replace(/\p{Diacritic}/gu, "")

    return (str === inverseWord(str))
}

// console.log(isPalindrome("ressasser"));
// console.log(isPalindrome("rêver"));
// console.log(isPalindrome("toto"));

/**
 * Exo 17
 */

// function getScrabbleScore(str) {
//     const pointsScrabble = {
//         'a': 1,
//         'b': 3,
//         'c': 3,
//         'd': 2,
//         'e': 1,
//         'f': 4,
//         'g': 2,
//         'h': 4,
//         'i': 1,
//         'j': 8,
//         'k': 5,
//         'l': 1,
//         'm': 3,
//         'n': 1,
//         'o': 1,
//         'p': 3,
//         'q': 10,
//         'r': 1,
//         's': 1,
//         't': 1,
//         'u': 1,
//         'v': 4,
//         'w': 4,
//         'x': 8,
//         'y': 4,
//         'z': 10
//     };
//
//     let score = 0;
//
//     for (let i = 0; i < str.length; i++) {
//         score += pointsScrabble[str.charAt(i)];
//     }
//
//     return score;
// }

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

    for (let i = 0; i < str.length; i++) {
        for (const letters of lettersByPoints.keys()) {
            letters.includes(str[i].toLocaleUpperCase()) && (points += lettersByPoints.get(letters));
        }
    }
    return points;
}

// console.log(getScrabbleScore("lazy"));

/**
 * Exo 18
 */

function changeSentences(sentence) {
    let newSentence = "";

    for (let i = 0; i < sentence.length; i++) {
        newSentence += sentence.charAt(i);
        if (isInArray(displayVowels(), sentence.charAt(i))) {
            newSentence += "fe" + sentence.charAt(i);
        }
    }

    return newSentence;
}

// console.log(changeSentences("chat"));

/**
 * Exo 19
 */

function encrypt(str, gap) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr += String.fromCharCode(str.charCodeAt(i) + gap);
    }

    return newStr;
}

// console.log(encrypt("chat", 3));

function decrypt(str, gap) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        newStr += String.fromCharCode(str.charCodeAt(i) - gap);
    }

    return newStr;
}

// console.log(decrypt("fkdw", 3));

/**
 * Exo 20
 */

function calculateHypotenuse(h, w) {
    return Math.sqrt(h ** 2 + w ** 2);
}

// console.log(calculateHypotenuse(4.56, 5.65));

/**
 * Exo 21
 */

function getGain(nbSubscribers) {
    let income = nbSubscribers * 4.99;
    let gain = [];

    if (nbSubscribers > 1000) {
        gain.push(income * 0.05);
        gain.push(income * 0.95);
    } else if (nbSubscribers > 500) {
        gain.push(income * 0.15);
        gain.push(income * 0.85);
    } else if (nbSubscribers > 100) {
        gain.push(income * 0.25);
        gain.push(income * 0.75);
    } else {
        gain.push(income * 0.40);
        gain.push(income * 0.60);
    }

    return gain;
}

/**
 * Exo 22
 */

function displayHoursByTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);

    return hours + "h" + minutes;
}

// console.log(displayHoursByTime(3665));

/**
 * Exo 23
 */

function getLettersBy(str) {
    let normalizedStr = str.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/[^a-zA-Z]/gi, "");
    let nbrVowels = 0;
    let nbrConsonnants = 0;

    for (let i = 0; i < normalizedStr.length; i++) {
        isInArray(displayVowels(), normalizedStr.charAt(i)) ? nbrVowels++ : nbrConsonnants++;
    }

    return "Il y a " + nbrVowels + " voyelles et " + nbrConsonnants + " consonnes dans la chaine de caractères \"" + str + "\"";
}

// console.log(getLettersBy("Dobry, wieczór"));

/**
 * Exo 25
 */

function generateLetters() {
    const VOWELS = ["A", "E", "I", "O", "U", "Y"];

    const CONSONANTS = [
        "B", "C", "D", "F", "G",
        "H", "J", "K", "L", "M",
        "N", "P", "Q", "R", "S",
        "T", "V", "W", "X", "Z"
    ];

    let playerChoice;
    let letters = [];

    for (let i = 0; i < 9; i++) {
        playerChoice = readlineSync.keyIn("Consonant or Vowel ? (C/V) :", {limit: 'cv'});
        (playerChoice === 'c') ? letters.push(CONSONANTS[Math.floor(Math.random() * CONSONANTS.length)]) : letters.push(VOWELS[Math.floor(Math.random() * VOWELS.length)])
    }

    return letters;
}

//console.log(generateLetters());

/**
 * Exo 25
 */

function mastermind() {
    let solution = [];
    let playerGuess = [];
    let computerAnswer = [];

    for (let i = 0; i < 4; i++) {
        solution.push(Math.floor(Math.random() * 5) + 1);
    }
    console.log("Solution : " + solution);

    for (let i = 0; i < 9; i++) {

        playerGuess = [];
        computerAnswer = [];

        for (let i = 0; i < 4; i++) {
            playerGuess.push(parseInt(readlineSync.keyIn("Entre 1 chiffre entre 1 et 5 :", {limit: '$<1-5>'})));
        }
        console.log("Saisie : " + playerGuess);

        for (const index in solution) {
            computerAnswer.push(solution[index] === playerGuess[index] ? solution[index] : "x")
        }
        console.log("Résultat : " + computerAnswer);

        if (JSON.stringify(playerGuess) === JSON.stringify(solution)) {
            console.log("Gagné")
            return true;
        }
    }

    console.log("Perdu")
    return false;

}

// mastermind();

/**
 * Exo 26
 */

function getTravelTime(km) {
    let timeWalking = km / 5;
    let timeBiking = km / 20;
    let timeDriving = km / 90;
    let timeHighway = km / 130;

    return "- À pied vous mettrez " + Math.floor(timeWalking) + "h" + Math.floor(timeWalking % 1 * 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        }) + " pour faire " + km + "km\n" +
        "- En vélo vous mettrez " + Math.floor(timeBiking) + "h" + Math.floor(timeBiking % 1 * 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        }) + " pour faire " + km + "km\n" +
        "- En voiture sur route vous mettrez " + Math.floor(timeDriving) + "h" + Math.floor(timeDriving % 1 * 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        }) + " pour faire " + km + "km\n" +
        "- En voiture sur autoroute vous mettrez " + Math.floor(timeHighway) + "h" + Math.floor(timeHighway % 1 * 60).toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false
        }) + " pour faire " + km + "km";
}

// console.log(getTravelTime(100));

/**
 * Exo 27
 */

function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    for (const letter of str1) {
        let index = str2.indexOf(letter);
        console.log(index);
        if (index !== -1) {
            str2 = str2.replace(letter, '');
            //console.log(str2);
        } else {
            console.log("Perdu");
            return false
        }
    }
    console.log("Gagné");
    return true
}

// isAnagram("mot", "tom");

/**
 * Exo 28
 */

function getLonguestWord(str) {
    let wordArray = str.split(' ');
    let currentLonguest = "";

    for (const word of wordArray) {
        (word.length > currentLonguest.length) && (currentLonguest = word);
    }

    return currentLonguest + "(" + currentLonguest.length + ")";
}

// console.log(getLonguestWord("The quick brown fox jumps over the lazy dog."))

/**
 * Exo 29
 */

function compressed(str) {
    let compressedStr = "";
    let currentLetter = '';
    let currentLetterCount = 0;

    for (const letter of str) {
        if (currentLetter !== letter) {
            (currentLetterCount !== 0) && (compressedStr += currentLetterCount);
            currentLetterCount = 1;
            currentLetter = letter;
            compressedStr += currentLetter;
        } else {
            currentLetterCount++
        }
    }
    compressedStr += currentLetterCount;
    return compressedStr;
}

// console.log(compressed("aaabbc"));