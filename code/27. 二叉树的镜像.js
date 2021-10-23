const mirrorTree = root => {
    if (root) {
        // 交换当前左右节点
        const temp = root.right;
        root.right = root.left;
        root.left = temp;
        // 递归交换左子树的左右节点
        mirrorTree(root.left);
        // 递归交换右子树的左右节点
        mirrorTree(root.right);
    }
    return root;
};
