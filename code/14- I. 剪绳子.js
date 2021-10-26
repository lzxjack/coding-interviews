const cuttingRope = n => {
    const dp = [null, null, 1];
    for (let i = 3; i <= n; i++) {
        // 当前dp[i]初始化为0
        dp[i] = 0;
        for (let j = 1; j <= i - 1; j++) {
            // 因为j在遍历的过程中，会算出很多dp[i]，取最大的
            // (i - j) * j表示拆分成2个数
            // dp[i - j] * j表示拆分成2个及以上的数
            dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j);
        }
    }
    return dp[n];
};
