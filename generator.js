const generator = (node) => {
  if (node.type === "NumberLiteral") {
    return node.value;
  }
  if (node.type === "Identifier") {
    return node.name;
  }
  if (node.type === "CallExpression") {
    const args = node.arguments.map(generator).join(", ");
    return `${generator(node.callee)}(${args})`;
  }
  if (node.type === "ExpressionStatement") {
    return `${generator(node.expression)};`;
  }
  if (node.type === "Program") {
    return node.body.map((node) => `${generator(node)}`).join("\n");
  }
};

export default generator;
