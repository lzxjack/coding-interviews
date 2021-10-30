// 使用Set判重
// const findRepeatNumber = nums => {
//     const set = new Set();
//     const len = nums.length;
//     for (let i = 0; i < len; i++) {
//         const num = nums[i];
//         if (set.has(num)) return num;
//         set.add(num);
//     }
// };

// 原地交换
const findRepeatNumber = nums => {
    let i = 0;
    const len = nums.length;
    while (i < len) {
        // 若该数和下标相等，则i++，检查下一个数
        if (nums[i] === i) {
            i++;
            continue;
        }
        // 若该数作为下标对应的数，等于该数，说明重复了，返回
        if (nums[nums[i]] === nums[i]) return nums[i];
        // 否则，一直交换该数和该数作为下标对应的数，一直到数等于下标为止
        [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
    }
    return -1;
};
