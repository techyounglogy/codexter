// 15. 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 

// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []


var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue
        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue
            for (let k = j + 1; k < nums.length; k++) {
                if (k > j + 1 && nums[k] == nums[k - 1]) continue
                if (nums[i] + nums[j] + nums[k] == 0) {
                    result.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    return result
};