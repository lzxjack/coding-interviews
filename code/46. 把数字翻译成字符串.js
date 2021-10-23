const translateNum = num => {
    const str = `${num}`;
    const dp = [1, 1];
    const len = str.length;
    for (let i = 2; i < len + 1; i++) {
        const preNum = parseInt(str[i - 2] + str[i - 1]);
        if (preNum >= 10 && preNum <= 25) {
            dp[i] = dp[i - 1] + dp[i - 2];
        } else {
            dp[i] = dp[i - 1];
        }
    }
    return dp[len];
};
