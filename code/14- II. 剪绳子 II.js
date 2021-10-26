// 贪心：每次拆成n个3，如果剩下是4，则保留4，然后相乘

const cuttingRope = n => {
    // 特殊情况处理
    const arr = [null, null, 1, 2, 4];
    if (n <= 4) return arr[n];
    const mod = 1000000007;
    let res = 1;
    while (n > 4) {
        // 每次减掉3
        res = (res * 3) % mod;
        n -= 3;
    }
    // 最后剩下一段小于等于4的长度
    res *= n;
    return res % mod;
};
