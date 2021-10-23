// 从最后两个数开始反推
// 补全所有的数，得到的下标就是所求的数
const lastRemaining = (n, m) => {
    let res = 0;
    for (let i = 2; i <= n; i++) {
        res = (res + m) % i;
    }
    return res;
};

// const lastRemaining = (n, m) => {
//     const nums = [];
//     for (let i = 0; i < n; i++) {
//         nums.push(i);
//     }
//     let p = 0;

//     while (nums.length > 1) {
//         p = p + m - 1;
//         while (p > nums.length - 1) {
//             p = p - nums.length;
//         }
//         nums.splice(p, 1);
//     }
//     return nums[0];
// };
