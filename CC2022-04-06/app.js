// Who likes it?
// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
function likes(names) {
    if (names.length === 0) {
        return 'no one likes this';
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length > 3) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}
// Cleaver way
// function likes(names) {
// TO make sure there are no undifined names in the array
//     names = names || [];
//     switch (names.length) {
//         case 0: return 'no one likes this'; break;
//         case 1: return names[0] + ' likes this'; break;
//         case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
//         case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
//         default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
//     }
// }


// Find the odd int
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
function findOdd(A) {
    var count = 0;
    for (var i = 0; i < A.length; i++) {
        for (var j = 0; j < A.length; j++) {
            if (A[i] == A[j]) {
                count++;
            }
        }
        if (count % 2 != 0) {
            return A[i];
        }
    }
}

// Square Every Digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
function squareDigits(num) {
    let str = String(num)
    let arr = str.split('').map(str => Number(str))
    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i]
    }
    let sqrtNum = Number(arr.join(''))
    return sqrtNum
}