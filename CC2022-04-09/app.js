// You're a square!
// A square of squares
// You like building blocks. You especially like building blocks that are squares. 
// And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! 
// If you just had a way to know, whether you're currently working in vain… Wait! That's it! 
// You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; 
// in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false
var isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0
}

// Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
function arrayDiff(a, b) {
    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                a.splice(i, i + 1);
            }
        }
    }
    return a
}

// Descending Order
// Your task is to make a function that can take any non-negative integer as an argument and
// return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
function descendingOrder(n) {
    let arr = String(n).split('')
    let sortedArr = arr.sort((a, b) => b - a)
    let num = sortedArr.join('')
    return Number(num)
}