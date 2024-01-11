/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let maxNum = Math.max(...nums)
  let answer = k * (maxNum)
  for (let i = 0; i < k; i++) {
    answer+=i
  }
  return answer
};