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

function uniqueInOrder(iterable) {
    // The first thing we do is create a variable called strArr. 
    // In this variable, we could go ahead and use this to convert our string to an array. 
    // The problem is not all of the function’s inputs will be strings. 
    // We will need to check if the input is an array or not. 
    // If it is an array, we directly assign the input to strArr.

    // If it is not and it is a string, 
    // we convert the string to an array and then assign the array to strArr.
    let strArr = Array.isArray(iterable) ? iterable : iterable.split('');
    // Next, we create another variable called unique. 
    // This variable will contain our unique array without the consecutive duplicate array elements. 
    // We use the filter() method to filter out any elements with the same value next to each other 
    // and keep only one of them.
    let unique = strArr.filter((letter, i) => {
        return strArr[i] != strArr[i + 1];
    })
    return unique;
}