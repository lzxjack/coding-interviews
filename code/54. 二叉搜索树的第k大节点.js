// 二叉搜索树,具有下列性质的二叉树：
// 1. 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
// 2. 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
// 3. 它的左、右子树也分别为二叉排序树。

const kthLargest = (root, k) => {
    // 中序遍历(访问右节点在前)：右-根-左
    const unInOrder = (node, arr = []) => {
        if (node) {
            unInOrder(node.right, arr);
            arr.push(node.val);
            unInOrder(node.left, arr);
        }
        return arr;
    };
    const res = [];
    unInOrder(root, res);
    // 得到从大到小排序的数组
    // console.log(res);
    return res[k - 1];
};
