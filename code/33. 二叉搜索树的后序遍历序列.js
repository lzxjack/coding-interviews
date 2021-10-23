const verifyPostorder = postorder => {
    const len = postorder.length;
    if (len <= 1) return true;
    // 后序遍历，最后一个是根节点
    const root = postorder[len - 1];
    // 找到第一个大于根节点的位置i
    let i = 0;
    while (postorder[i] < root) i++;
    // 从i开始，判断i右边到根节点之间的元素，是否都大于根节点值
    const res = postorder.slice(i, len - 1).every(x => x > root);
    // 若否，直接返回false
    // 若是，递归判断左右子树
    return res
        ? verifyPostorder(postorder.slice(0, i)) && verifyPostorder(postorder.slice(i, len - 1))
        : false;
};

// 后序遍历，最后一个是根节点
// 找到第一个大于根节点的位置i
// 从i开始，判断i右边到根节点之间的元素，是否都大于根节点值，若否，直接返回false；若是，递归判断左右子树
