// 动态规划：
// 若前一个元素＞0，则将其加到当前元素上
// 最后返回最大的元素
const maxSubArray = nums => {
    if (nums.length === 1) return nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // 如果前一个的累加和小于0，就不要累加了
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1];
        }
        // 更新max
        max = max > nums[i] ? max : nums[i];
    }
    return max;
};

// 贪心算法
// 若当前元素之前的和＜0，丢弃当前元素之前的数列
// const maxSubArray = nums => {
//     let curSum = nums[0];
//     let maxSum = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         // 若当前元素之前的和＜0，丢弃当前元素之前的数列
//         curSum = Math.max(nums[i], nums[i] + curSum);
//         // 将当前值与最大值比较，取最大
//         maxSum = Math.max(curSum, maxSum);
//     }
//     return maxSum;
// };

// console.log(maxSubArray([-2, -1]));
