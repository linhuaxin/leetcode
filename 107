var levelOrderBottom = function(root) {
  if (!root) { return []; }
  let res = [];
  let q = [root];

  while (q.length) {
    let len = q.length;
    res.push([]);

    while (len--) {
      let n = q.shift();
      res[res.length - 1].push(n.val);
      if (n.left) { q.push(n.left); }
      if (n.right) { q.push(n.right); }
    }
  }

  return res.reverse();
};
