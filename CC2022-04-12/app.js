// Jaden Casing Strings
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
// Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, 
// he is known for almost always capitalizing every word. For simplicity, 
// you'll have to capitalize each word, check out how contractions are expected to be in the example below.
// Your task is to convert strings to how they would be written by Jaden Smith. 
// The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
String.prototype.toJadenCase = function () {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};

// Shortest Word
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function findShort(s) {
    var arr = s.split(' ');
    var smallest = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length < smallest.length) {
            smallest = arr[i];
        }
    }
    return smallest.length;
}
// function findShort(s) {
//     const strArr = s.split(' ');                    //   convert string to array
//     const lengthOfWords = strArr.map(string => {    //   loop through array and find length
//         return (string.length);
//     })
//     return Math.min(...lengthOfWords);              //   output length of shortest string
// }

// Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function XO(str) {
    let strArr = str.toLowerCase().split('')
    let xCount = 0
    let oCount = 0
    for (i = 0; i < strArr.length; i++) {
        if (strArr[i] === 'o') {
            oCount++
        } else if (strArr[i] === 'x') {
            xCount++
        }
    }
    return (xCount === oCount ? true : false);
}