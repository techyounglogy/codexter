// This code does not execute properly. Try to figure out why.
// WHY WHO R U?
function multiply(a, b) {
    return a * b
}

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. 
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.
function solution(number) {
    let sum = 0
    for (i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum = sum + i
        }
    }
    return sum
}

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    let vowelsCount = 0;
    let strArr = str.split('')
    for (i = 0; i < strArr.length; i++) {
        if (strArr[i].toLowerCase() === 'a' ||
            strArr[i].toLowerCase() === 'e' ||
            strArr[i].toLowerCase() === 'i' ||
            strArr[i].toLowerCase() === 'o' ||
            strArr[i].toLowerCase() === 'u') {
            vowelsCount++
        }
    }
    return vowelsCount;
}

