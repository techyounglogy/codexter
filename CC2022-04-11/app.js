// Reversed Strings
// Complete the solution so that it reverses the string passed into it.
// 'world'  => 'dlrow'
// 'word'   => 'drow'
function solution(str) {
    return str.split('')                    // split a regular string into array of strings separated by ''
        .reverse()                          // reverse the array of strings
        .join('')                           // join all elements of the array into a string
}

// Mumbling
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
    return s.split('')
        .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
        .join('-');
}

// Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
function positiveSum(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {      // setup loop to go through array of given length
        if (arr[i] > 0) {                   // if arr[i] is greater than zero
            total += arr[i];                // add arr[i] to total
        }
    }
    return total;                           // return total
}