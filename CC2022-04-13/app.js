// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
function isIsogram(str) {
    let strArr = str.toLowerCase().split('')
    for (i = 0; i < strArr.length; i++) {
        for (j = i + 1; j < strArr.length; j++) {
            if (strArr[i] === strArr[j]) {
                return false;
            }
        }
    }
    return true
}

// Return Negative
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
function makeNegative(num) {
    return (num > 0 ? num * -1 : num)
}

// Find The Parity Outlier
// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)
function findOutlier(integers) {
    let oddA = []
    let evenA = []
    for (i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenA.push(integers[i])
        } else {
            oddA.push(integers[i])
        }
    }
    if (oddA.length > evenA.length) {
        return evenA[0]
    } else if (oddA.length < evenA.length) {
        return oddA[0]
    }
}