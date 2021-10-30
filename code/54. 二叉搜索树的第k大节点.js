// 二叉搜索树,具有下列性质的二叉树：
// 1. 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
// 2. 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
// 3. 它的左、右子树也分别为二叉排序树。

const kthLargest = (root, k) => {
    // 遍历顺序(访问右节点在前)：右-根-左
    const unInOrder = node => {
        if (!node) return;
        unInOrder(node.right);
        res.push(node.val);
        unInOrder(node.left);
    };
    const res = [];
    unInOrder(root, res);
    // 得到从大到小排序的数组
    return res[k - 1];
};
