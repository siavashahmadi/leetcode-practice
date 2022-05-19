/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// NOT FINISHED
var twoSum = function (nums, target) {
    let outputArray = [];
    for (let i = 0; i < nums.length; i++) {
        // var firstNum = nums[i]
        // console.log(nums[i]);
        for (let j = i + 1; j < nums.length; j++) {
            // var secondNum = nums[j];
            // console.log(nums[j]);
            if (nums[i] + nums[j] === target) {
                outputArray.push(i);
                outputArray.push(j);
            }
        }
    }
    return outputArray;
};

console.log(twoSum([3, 2, 4], 6));

// This is the brute force and slowest solution