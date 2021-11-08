const dicesProbability = n => {
    let dp = new Array(7).fill(1 / 6);
    let t;
    for (let i = 1; i < n; i++) {
        t = new Array(6 * (i + 1) + 1).fill(0);
        for (let j = i; j <= 6 * i; j++) {
            for (let k = 1; k <= 6; k++) {
                t[j + k] += dp[j] / 6;
            }
        }
        dp = t;
    }
    return dp.slice(n);
};
