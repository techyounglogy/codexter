// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
    if (number % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}

// Disemvowel Trolls
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
}
// g tells to find all matches, not just the first.
// i tells to be case insensitive.
// What goes inside the // is the pattern.
// [] tells to match any character in a set.
// aeiou are the characters in the set.


// Create Phone Number
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
function createPhoneNumber(numbers) {
    let stringOne = '('
    for (i = 0; i < 3; i++) {
        stringOne = stringOne + numbers[i]
    }
    stringOne = stringOne + ')'
    let stringTwo = ' '
    for (i = 3; i < 6; i++) {
        stringTwo = stringTwo + numbers[i]
    }
    stringTwo = stringTwo + ''
    let stringThree = '-'
    for (i = 6; i < numbers.length; i++) {
        stringThree = stringThree + numbers[i]
    }
    return stringOne + stringTwo + stringThree
}
// Alternative
// function createPhoneNumber(numbers) {
//     var format = "(xxx) xxx-xxxx";
//     for (var i = 0; i < numbers.length; i++) {
//         format = format.replace('x', numbers[i]);
//     }
//     return format;
// }