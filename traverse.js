const traverse = (ast, visitors) => {
  const walkNode = (node, parent) => {
    const method = visitors[node.type];

    if (method) {
      method(node, parent);
    }

    if (node.type === "Program") {
      walkNodes(node.body, node);
    } else if (node.type === "CallExpression") {
      walkNodes(node.params, node);
    }
  };

  const walkNodes = (nodes, parent) => {
    nodes.forEach((node) => {
      walkNode(node, parent);
    });
  };

  walkNode(ast, null);
};

export default traverse;
