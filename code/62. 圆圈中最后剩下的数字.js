// 从最后两个数开始反推
// 补全所有的数，得到的下标就是所求的数
const lastRemaining = (n, m) => {
    let res = 0;
    for (let i = 2; i <= n; i++) {
        res = (res + m) % i;
    }
    return res;
};
