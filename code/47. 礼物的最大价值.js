const maxValue = grid => {
    // 行、列
    const [m, n] = [grid.length, grid[0].length];
    // 创建行m列n的二维数组
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    // (0,0)位置初始化
    dp[0][0] = grid[0][0];
    // 第一列初始化
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    // 第一行初始化
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }
    // 遍历，完善dp数组
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[m - 1][n - 1];
};
