/**
 * @param {number[]} nums
 * @return {number[]}
 */
// My Original On2 complexity solution
// var productExceptSelf = function (nums) {
//     const answer = [];
//     let sum = 1;
//     let currentNum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         currentNum = nums.shift();
//         for (let i = 0; i < nums.length; i++) {
//             sum *= nums[i];
//             console.log(sum)
//         }
//         answer.push(sum); sum = 1;
//         nums.push(currentNum);
//     }
//     return answer;
// };

// O(n) complexity solution
//             |1 |2 |3 |4 |
//   prefix   1|1 |1 |6 |24|1
//   postfix  1|24|24|12|4 |1

var productExceptSelf = function (nums) {

    var answer = [];

    prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    postfix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= postfix;
        postfix *= nums[i];
    }

    return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));