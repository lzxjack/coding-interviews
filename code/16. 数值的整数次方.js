const myPow = (x, n) => {
    // 递归出口
    if (n === 0) return 1;
    // n小于0，特殊情况
    if (n < 0) return 1 / myPow(x, -n);
    // n奇数
    if (n & 1) return x * myPow(x, n - 1);
    // n偶数
    return myPow(x * x, n / 2);
};
