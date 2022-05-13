// 写法1
const mirrorTree = root => {
  // 递归出口
  if (!root) return null;
  // 交换当前左右节点
  [root.left, root.right] = [root.right, root.left];
  // 递归交换左子树的左右节点
  mirrorTree(root.left);
  // 递归交换右子树的左右节点
  mirrorTree(root.right);
  // 返回当前节点给上一级
  return root;
};

// 写法2
const mirrorTree2 = root => {
  if (!root) return null;

  const node = new TreeNode(root.val);

  node.left = mirrorTree(root.right);
  node.right = mirrorTree(root.left);

  return node;
};
