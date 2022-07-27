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


/***************************************************************************************************************************************** */
var twoSum = function(nums, target) {
   
    let obj = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]] >= 0){
           return [obj[nums[i]], i];
        }
        obj[target-nums[i]] = i;
    }
};
