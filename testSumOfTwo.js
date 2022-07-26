/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
    if (nums.length === 0) 
        return 'Array cannot be empty!!!';

    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++) {
            if( nums[i]+nums[j] === target && i !== j ) {
                return [i,j];
            }
        }
    }
};

module.exports = twoSum;