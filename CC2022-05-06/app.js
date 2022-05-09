// Two to One

// Take 2 strings s1 and s2 including only letters from a to z. 
// Return a new sorted string, the longest possible, 
// containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    return [...new Set((s1 + s2).split(''))].sort().join('')
}

// -----> 1) Remove duplicates from an array using a Set

let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);

// Output:
// [ 'A', 'B', 'C' ]

// -----> 2) Remove duplicates from an array using indexOf() and filter() methods

// The indexOf() method returns the index of the first occurrence of an element in an array. For example:

let chars = ['A', 'B', 'A', 'C', 'B'];
chars.indexOf('B');

// Output:
// 1  

// The duplicate item is the item whose index is different from its indexOf() value:

let chars = ['A', 'B', 'A', 'C', 'B'];

chars.forEach((c, index) => {
    console.log(`${c} - ${index} - ${chars.indexOf(c)}`);
});

// Output:
// A - 0 - 0
// B - 1 - 1
// A - 2 - 0
// C - 3 - 3
// B - 4 - 1

// To remove the duplicates, you use the filter() method to include only elements whose indexes match their indexOf values:

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
});

console.log(uniqueChars);

// Output:
// [ 'A', 'B', 'C' ]

// To find the duplicate values, you need to reverse the condition:

let chars = ['A', 'B', 'A', 'C', 'B'];

let dupChars = chars.filter((c, index) => {
    return chars.indexOf(c) !== index;
});

console.log(dupChars);

// Output:
// [ 'A', 'B' ]

// -----> 3) Remove duplicates from an array using forEach() and include()

// The include() returns true if an element is in an array or false if it is not.
// The following example iterates over elements of an array and adds to a new array only elements that are not already there:

let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

console.log(uniqueChars);

// Output:
// [ 'A', 'B', 'C' ]    