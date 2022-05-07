// Simple Pig Latin

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    const arr = str.split(' ')
    return arr
        // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
        // const array1 = [1, 4, 9, 16];
        // pass a function to map
        // const map1 = array1.map(x => x * 2);
        // console.log(map1);
        // expected output: Array [2, 8, 18, 32]
        .map((word) => {
            // The only problem with this implementation is that it will not skip characters such as !,? etc… 
            // Let’s use a very simple RegEx to determine if our character is a letter.
            // We can implement a simple check like the following:
            return word.match(/[A-z]/i)
                // The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
                // const str = 'Mozilla';
                // console.log(str.substring(1, 3));
                // expected output: "oz"
                // console.log(str.substring(2));
                // expected output: "zilla"
                ? `${word.substr(1)}${word.substr(0, 1)}ay`
                : word
        })
        .join(' ')
}