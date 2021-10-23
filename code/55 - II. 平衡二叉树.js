const isBalanced = root => {
    // 如果返回-1，则该节点不平衡
    const check = node => {
        if (!node) return 0;
        const left = check(node.left);
        const right = check(node.right);
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1;
        }
        return Math.max(left, right) + 1;
    };
    // 若等于-1，则不是平衡二叉树
    return check(root) !== -1;
};
