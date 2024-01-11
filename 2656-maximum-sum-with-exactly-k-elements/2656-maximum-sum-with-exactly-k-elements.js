/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let maxNum = Math.max(...nums)
  let answer = 0
  for (let i = 0; i < k; i++) {
    answer = answer + maxNum
    maxNum+=1
  }
  return answer
};