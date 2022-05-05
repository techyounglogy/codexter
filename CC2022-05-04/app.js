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