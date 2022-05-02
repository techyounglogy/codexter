// Square(n) Sum

// Complete the square sum function so that it squares each number passed into it
// and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + Math.pow(numbers[i], 2);
    }
    return sum;
}

// Unique In Order

// Implement the function unique_in_order which takes as argument a sequence and 
// returns a list of items without any elements with the same value next to each other and 
// preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
