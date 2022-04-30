// Replace With Alphabet Position

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    // Then all the text should be converted to capital letters.
    const upperText = text.toUpperCase()
    // Now we are ready to use charCodeAt(). 
    // The string of uppercase letters will be converted into an array that we can map over, 
    // using charCodeAt() for each letter.
    const arr = upperText.split("").map(let => let.charCodeAt())
    // At this point, a new array with the correct numerical values can be created. 
    // It will be made using the filter() method. 
    // For every number in the array that is greater than 64 and less than 91, 
    // place into the new array that number.
    const newArr = arr.filter(num => {
        if (num > 64 && num < 91) {
            return num
        }
    })
    // Afterwards, a third array with the correct numerical values 
    // is made by mapping over the previous array and 
    // subtracting 64 from each number in the array.
    const updateNumArr = newArr.map(num => num - 64)
    return updateNumArr.join(" ")
}