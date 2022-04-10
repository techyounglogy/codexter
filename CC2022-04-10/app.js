// Convert a Number to a String!
// We need a function that can transform a number into a string.
// What ways of achieving this do you know?
// Examples:
// 123 --> "123"
// 999 --> "999"
function numberToString(num) {
    return String(num)
}

// Convert boolean values to strings 'Yes' or 'No'.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord(bool) {
    return (bool ? 'Yes' : 'No');
}

// List Filtering
// In this kata you will create a function that takes a list
// of non-negative integers and strings and returns a new list with the strings filtered out.
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
function filter_list(l) {
    return l.filter(element => typeof element === 'number')
}