// 贪心：每次拆成n个3，如果剩下是4，则保留4，然后相乘

const cuttingRope = n => {
    const arr = [null, null, 1, 2, 4];
    if (n <= 4) return arr[n];
    const mod = 1000000007;
    let res = 1;
    while (n > 4) {
        res = (res * 3) % mod;
        n -= 3;
    }
    res *= n;
    return res % mod;
};
