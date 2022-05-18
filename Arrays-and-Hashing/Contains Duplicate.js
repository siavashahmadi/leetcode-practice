function containsDuplicate(nums) {
    var theBool = false;

    for (let i = 0; i < nums.length; i++) {
        var curr = nums[i];
        curr = nums.pop(i);
        if (nums.includes(curr)) {
            theBool = true;
        }
    }

    return theBool;
}

console.log(containsDuplicate([0, 0, 2, 3, 1]));

THIS DOESNT WORK FOR COMPARING ZERO VALUES