// 递归
// const isSymmetric = root => {
//     if (!root) return true;
//     // 判断两个二叉树是否镜像
//     const check = (node1, node2) => {
//         // 两个空树，true
//         if (!node1 && !node2) return true;
//         // 只有一个空树，false
//         if (!node1 || !node2) return false;
//         // 镜像的条件：
//         // 1. 节点值相等
//         // 2. node1的左子树和node2的右子树是镜像
//         // 3. node1的右子树和node2的左子树是镜像
//         return (
//             node1.val === node2.val &&
//             check(node1.left, node2.right) &&
//             check(node1.right, node2.left)
//         );
//     };
//     // 判断树的两个子树是否镜像即可
//     return check(root.left, root.right);
// };

// 迭代：利用层序遍历的思想
const isSymmetric = root => {
    if (!root) return true;
    // 根节点的左右节点入队
    const queue = [root.left, root.right];
    while (queue.length) {
        // 当前队列的长度
        const len = queue.length;
        // 每次对比两个节点，所以i=i+2
        for (let i = 0; i < len; i += 2) {
            // 两个节点出队
            const left = queue.shift();
            const right = queue.shift();
            // 有一个为空，另一个不为空，直接返回false
            if ((left && !right) || (!left && right)) return false;
            // 两节点都不为空
            if (left && right) {
                // 值不相等，返回false
                if (left.val !== right.val) return false;
                // 将两个节点的左右节点，按照对应关系入队
                queue.push(left.left, right.right, left.right, right.left);
            }
        }
    }
    // 遍历结束返回true
    return true;
};
