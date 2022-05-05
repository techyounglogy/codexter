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