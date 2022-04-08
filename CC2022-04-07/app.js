// Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string,
// but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"
function spinWords(string) {
    let strArr = string.split(' ')
    for (i = 0; i < strArr.length; i++) {
        if (strArr[i].length >= 5) {
            strArr[i] = strArr[i].split('').reverse().join('')
        }
    }
    return strArr.join(' ')
}

// Bit Counting
// Write a function that takes an integer as input,
// and returns the number of bits that are equal to one in the binary representation of that number.
// You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
var countBits = function (n) {
    let binary = (n).toString(2)
    let binArr = binary.split('').map(Number)
    let sum = 0
    for (i = 0; i < binArr.length; i++) {
        if (binArr[i] === 1) {
            sum = sum + 1
        }
    }
    return sum
}

// Sum of Digits / Digital Root
// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
function digital_root(n) {
    let nArr = String(n).split('').map(Number)
    let sum = 0
    for (i = 0; i < nArr.length; i++) {
        sum = sum + nArr[i]
    }
    return sum < 10 ? sum : digital_root(sum);
}