const copyRandomList = head => {
  const map = new Map();

  // 第一次遍历，复制节点值
  let p = head;
  while (p) {
    map.set(p, new Node(p.val));
    p = p.next;
  }

  //   第二次遍历，复制节点关系
  p = head;
  while (p) {
    map.get(p).next = map.get(p.next) || null;
    map.get(p).random = map.get(p.random) || null;
    p = p.next;
  }

  return map.get(head);
};
