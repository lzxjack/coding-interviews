// 判断当前格子是否能过的函数
const isTrue = (m, n, k) => {
    let [sum1, sum2] = [0, 0];
    while (m !== 0) {
        sum1 += m % 10;
        m = Math.floor(m / 10);
    }
    while (n !== 0) {
        sum2 += n % 10;
        n = Math.floor(n / 10);
    }
    return sum1 + sum2 <= k;
};

const movingCount = (m, n, k) => {
    // 构建已访问的数组，初始全部为false
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
    let res = 0;
    const dfs = (i, j) => {
        // 若越界，或遇到已访问过的，return
        if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j]) return;
        // 标记访问
        visited[i][j] = true;
        if (isTrue(i, j, k)) {
            // 如果当前格子能访问，计数+1，并向四个方向继续访问
            res++;
            dfs(i + 1, j);
            dfs(i, j + 1);
            dfs(i - 1, j);
            dfs(i, j - 1);
        }
    };
    dfs(0, 0);
    return res;
};
