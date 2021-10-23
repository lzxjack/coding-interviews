const maxDepth = root => {
    // 递归退出条件
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
