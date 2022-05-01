// Credit Card Mask

// Usually when you buy something, you're asked whether your credit card number, 
// phone number or answer to your most secret question is still correct. However, 
// since someone could look over your shoulder, you don't want that shown on your screen. 
// Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

function maskify(cc) {
    let ccArr = cc.split('')
    for (i = 0; i < ccArr.length - 4; i++) {
        ccArr[i] = '#'
    }
    return ccArr.join('')
}

// Grasshopper - Summation

// Summation
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

