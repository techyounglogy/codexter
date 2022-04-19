// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each 
// character in the new string is "(" if that character appears only once in 
// the original string, or ")" if that character appears more than once in 
// the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
    if (!word) { return }
    var str = word.toLowerCase();
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        var _char = str.charAt(i);
        if (str.indexOf(_char) == str.lastIndexOf(_char)) {
            newStr += '\(';
        } else {
            newStr += '\)';
        }
    }
    return newStr;
}