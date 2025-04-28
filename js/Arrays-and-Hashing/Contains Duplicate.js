function containsDuplicate(nums) {
    var theBool = false;

    for (let i = 0; i < nums.length; i++) {
        nums.pop();
        var curr = nums[i];
        if (nums[i] == nums[i + 1]) {
            theBool = true;
        }
    }

    return theBool;
}

console.log(containsDuplicate([0, 0, 2, 3, 1]));

// This is the final answer
// Had to watch the NeetCode solution and instantly made sense
// Sort the Array, then simply compare values next to one another
// pretty easy, just gotta think critically