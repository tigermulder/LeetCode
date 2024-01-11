/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let maxNum = Math.max(...nums)
  let answer = (k * maxNum) + (k*(k-1)/2)
  return answer
};
