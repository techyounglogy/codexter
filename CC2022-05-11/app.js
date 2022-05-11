// 5kyu -

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    // TODO: Program me
    const zeros = arr.filter((elm) => elm === 0).length;
    const result = arr.filter((elm) => elm !== 0);

    for (let i = 0; i < zeros; i += 1) {
        result.push(0);
    }

    return result;
}

