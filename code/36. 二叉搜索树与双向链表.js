const treeToDoublyList = root => {
    const dfs = cur => {
        if (!cur) return;
        dfs(cur.left);
        if (!pre) {
            // pre为空，正在访问表头节点，赋为head
            head = cur;
        } else {
            // pre有值，更新指针，双向连接
            pre.right = cur;
            cur.left = pre;
        }
        // 更新pre，将当前节点作为一下个节点的上一个节点
        pre = cur;
        dfs(cur.right);
    };
    let pre, head;
    if (!root) return;
    dfs(root);
    // 收尾相连
    head.left = pre;
    pre.right = head;
    return head;
};
