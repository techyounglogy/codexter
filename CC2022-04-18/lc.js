// Start leetcode:

// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function (nums, target) {
    // Array to store the result
    result = [];
    // Map to store the difference and its index
    index_map = new Map();
    // Loop for each element in the array
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (index_map.has(difference)) {
            result[0] = i;
            result[1] = index_map.get(difference);
            break;
        } else {
            index_map.set(nums[i], i);
        }
    }
    return result;
}

// NOT OPTIMAL SOLUTION:

// var twoSum = function (nums, target) {
//     for (i = 0; i < nums.length; i++) {
//         for (j = i + 1; j < nums.length; j++) {
//             let sum = nums[i] + nums[j]
//             if (sum === target) {
//                 return [i, j]
//             }
//         }
//     }
// }