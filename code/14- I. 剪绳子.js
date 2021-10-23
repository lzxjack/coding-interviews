const cuttingRope = n => {
    const dp = [null, null, 1];
    for (let i = 3; i <= n; i++) {
        dp[i] = 0;
        for (let j = 1; j <= i - 1; j++) {
            dp[i] = Math.max(dp[i], (i - j) * j, dp[i - j] * j);
        }
    }
    return dp[n];
};
