const copyRandomList = head => {
    if (!head) return null;
    const m = new Map();
    let node = head;
    // 遍历旧节点，复制各节点值
    while (node) {
        m.set(node, new Node(node.val));
        node = node.next;
    }
    node = head;
    // 遍历旧节点，复制连接关系
    while (node) {
        m.get(node).next = node.next ? m.get(node.next) : null;
        m.get(node).random = node.random ? m.get(node.random) : null;
        node = node.next;
    }
    return m.get(head);
};
