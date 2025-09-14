/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const T = []
  for(let i in nums){
    i = parseInt(i)
    for(let j = i + 1 ; j< nums.length ; j++){
      if(nums[i]+nums[j] === target){
        T.push(i,j)
        return T
      }
      
    }
  }  
};
