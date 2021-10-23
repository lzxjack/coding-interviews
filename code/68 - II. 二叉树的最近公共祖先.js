const lowestCommonAncestor = (root, p, q) => {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    // 左子树找不到，返回右子树
    if (!left) return right;
    // 右子树找不到，返回左子树
    if (!right) return left;
    // 左右子树都找到了，那么root就是要找的
    return root;
};
