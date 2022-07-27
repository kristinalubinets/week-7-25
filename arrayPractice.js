/**
 * @param {number[]} nums
 * @return {number[]}
 */


var buildArray = function(nums) {
    let na = [];
    for(let i = 0; i < nums.length; i++) {
        na.push(nums[nums[i]])
    }
    return na;
};

//Runtime: 138 ms
//Memory Usage: 46.7 MB


/***********************************************************************************************************************************/
var buildArray = function(nums) {
    let old = nums;
    
    return nums.map( (el, index) => old[old[index]])
};

//Runtime: 139 ms
//Memory Usage: 44.9 MB




