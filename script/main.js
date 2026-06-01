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

function calculPriceBy(copy)
{
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

function getAge(year)
{
    let now = new Date(Date.now());
    return now.getFullYear()-year;
}

// console.log(getAge(1997));

/**
 * Exo 4
 */

function countUpToTen(startFrom)
{
    let result = "Count from : " + startFrom;

    for (let i = startFrom+1; i < (startFrom+11); i++) {
        result += "\r\n" + i ;
    }

    return result;
}

// console.log(countUpToTen(17));

/**
 * Exo 5
 */

function displayMultiply(digit)
{
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

function addUpTo(max)
{
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

function displayVowels()
{
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    return vowels;
}

/**
 * Exo 8
 */

function getAverage(grades)
{
    let total = 0;
    for (const grade of grades) {
        total += grade;
    }

    return total / grades.length;
}

/**
 * Exo 9
 */

function addArray(first, second)
{
    let newArray= [];

    if (first.length === second.length)
    {
        for (const index in first) {
            newArray.push(first[index] + second[index]);
        }
        return newArray;
    }
}

// console.log(addArray([10, 5, 6, 5.2], [4, 5.5, 6, 100]));

/**
 * Exo 10
 */

function removeDuplicate(array)
{
    let newArray = [];

    for (const element of array) {
        let isDuplicate = false;
        for (const newArrayElement of newArray) {
            if (element === newArrayElement)
            {
                isDuplicate = true;
            }
        }
        if(!isDuplicate)
        {
            newArray.push(element);
        }
    }

    return newArray
}

// console.log(removeDuplicate([1, 1, 4, 5, 4, 6, 10, 2, 6, 1]));

/**
 * Exo 11
 */

function inverseWord(str)
{
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

function isSecuredPassword(password)
{
    return /^(?=.*[@!]).{9,}$/.test(password);
}

// console.log(isSecuredPassword("password@"));
// console.log(isSecuredPassword("password"));
// console.log(isSecuredPassword("hello!12"));
// console.log(isSecuredPassword("12345678!"));

/**
 * Exo 13
 */

