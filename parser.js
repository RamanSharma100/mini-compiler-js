const parser = (tokens) => {
  let current = 0;

  const walk = () => {
    let token = tokens[current];

    if (token.type === "number") {
      current++;
      return {
        type: "NumberLiteral",
        value: token.value,
      };
    }

    if (token.type === "paren" && token.value === "(") {
      token = tokens[++current];

      const node = {
        type: "CallExpression",
        name: token.value,
        params: [],
      };

      token = tokens[++current];

      while (token.value !== ")") {
        node.params.push(walk());
        token = tokens[current];
      }

      current++;

      return node;
    }

    throw new Error(`Invalid Token: ${token.type}`);
  };

  const ast = {
    type: "Program",
    body: [walk(current, tokens)],
  };

  return ast;
};

export default parser;
