const lowestCommonAncestor = (root, p, q) => {
    if (!root) return null;
    // 如果相等，公共祖先就是他们本身
    if (p.val === q.val) return p;
    // 遍历root
    while (root) {
        // 当前节点值在p，q的左边，遍历右子树
        if (root.val < q.val && root.val < p.val) {
            root = root.right;
        } else if (root.val > q.val && root.val > p.val) {
            // 当前节点值在p，q的右边，遍历左子树
            root = root.left;
        } else {
            // 当前节点值在p，q的中间，那么当前节点就是公共祖先
            return root;
        }
    }
};
