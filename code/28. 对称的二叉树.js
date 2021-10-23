const isSymmetric = root => {
    if (!root) return true;
    const check = (node1, node2) => {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        return (
            node1.val === node2.val &&
            check(node1.left, node2.right) &&
            check(node1.right, node2.left)
        );
    };
    // return check(root, root);
    return check(root.left, root.right);
};
