const levelOrder = root => {
    if (!root) return [];
    const res = [];
    // 根节点入队
    const q = [root];
    // 是否需要反转的标志位
    let flag = false;
    // 当队列还有值时，一直执行
    while (q.length) {
        let len = q.length;
        res.push([]);
        while (len--) {
            // 获取根节点，根节点出队
            const n = q.shift();
            // 根节点加入res栈顶元素
            res[res.length - 1].push(n.val);
            // 队头左右节点入队
            n.left && q.push(n.left);
            n.right && q.push(n.right);
        }
        // 每隔一层，反转一次
        flag && res[res.length - 1].reverse();
        flag = !flag;
    }
    return res;
};
