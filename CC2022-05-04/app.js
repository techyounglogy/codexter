// Convert string to camel case

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    let strArr = str.split('')
    for (i = 0; i < strArr.length; i++) {
        if (strArr[i] === '-' || strArr[i] === '_') {
            strArr[i] = strArr[i + 1].toUpperCase()
            strArr.splice(i + 1, 1)
        }
    }
    return strArr.join('')
}

// cleaver solution
function toCamelCase(str) {
    // \w finds all word characters
    // [ -_]  match all the dashes and underscores
    // ig is ignore case and g is global search
    var regExp = /[-_]\w/ig;
    return str.replace(regExp, function (match) {
        //we're grabbing the second character at index 1 and transforming that to uppercase to replace the dash or 
        //underscore the preceded it
        return match.charAt(1).toUpperCase();
    })
}

// Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// cleaver solution
// The Solution use regex.
// regex \d sort number 0–9.
function order(words) {
    return words.split(' ').sort(function (a, b) {
        return a.match(/\d/) - b.match(/\d/);
    }).join(' ');
}