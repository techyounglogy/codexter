// Remove String Spaces

// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    return x.replace(/ /g, '')
}

// Counting sheep...

// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

// Growth of a Population

// In a small town the population is p0 = 1000 at the beginning of a year. 
// The population regularly increases by 2 percent per year 
// and moreover 50 new inhabitants per year come to live in the town. 
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: 
// if the parameter percent is 2 you have to convert it to 0.02.

// Long Solution
function nbYear(p0, percent, aug, p) {
    const percentage = percent / 100
    let result = p0
    let years = 0

    while (result < p) {
        result += result * percentage + aug
        years++
    }

    return years
}


// Short Solution

const nbYear = (p0, percent, aug, p) => {
    let y = 0
    for (y; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug
    return y
}

// Function Export
module.exports = nbYear
