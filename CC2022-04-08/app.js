// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
function highAndLow(numbers) {
    let intArr = numbers.split(' ').map(Number)
    let sortedArr = intArr.sort(function (a, b) { return a - b });
    return `${sortedArr[sortedArr.length - 1]} ${sortedArr[0]}`
}

// Opposite number
// Very simple, given an integer or a floating-point number, find its opposite.
// 1: -1
// 14: -14
// -34: 34
function opposite(number) {
    return number * -1
}

// Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character. If the word's length is even,
// return the middle 2 characters.
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"
// #Input
// A word (string) of length 0 < str < 1000
// (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases).
// You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
// #Output
// The middle character(s) of the word represented as a string.
function getMiddle(s) {
    let arr = s.split('')
    if (arr.length % 2 === 0) {
        return `${arr[(arr.length / 2) - 1]}${arr[(arr.length / 2)]}`
    } else if (arr.length % 2 === 1) {
        let temp = Math.floor(arr.length / 2)
        return `${arr[temp]}`
    } else {
        return s
    }
}