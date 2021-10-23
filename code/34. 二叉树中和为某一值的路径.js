const pathSumSolu = (node, target, stack, sum, res) => {
    // 将节点入栈
    stack.push(node.val);
    // 节点加入到sum中
    sum += node.val;
    // 到达了叶子节点，并且当前记录的sum正好满足条件
    if (!node.left && !node.right && sum === target) {
        // 将栈中的节点推入返回结构res中
        res.push(stack.slice(0));
    }
    // 如果存在左节点，继续遍历左子树
    if (node.left) {
        pathSumSolu(node.left, target, stack, sum, res);
    }
    // 如果存在右节点，继续遍历右子树
    if (node.right) {
        pathSumSolu(node.right, target, stack, sum, res);
    }
    // 如果不存在左右节点，表明已到达叶子节点，向上回溯。stack弹出一个节点
    stack.pop();
};

const pathSum = (root, target) => {
    // 存储结果的数组
    const res = [];
    if (root) {
        pathSumSolu(root, target, [], 0, res);
    }
    return res;
};
