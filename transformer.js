import traverse from "./traverse.js";

const transformer = (ast) => {
  const newAst = {
    type: "Program",
    body: [],
  };

  let position = newAst.body;

  traverse(ast, {
    NumberLiteral(node) {
      newAst.body.push({
        type: "NumberLiteral",
        value: node.value,
      });
    },
    CallExpression(node, parent) {
      let expression = {
        type: "CallExpression",
        callee: {
          type: "Identifier",
          name: node.name,
        },
        arguments: [],
      };

      const prevPosition = position;

      position = expression.arguments;

      if (parent.type !== "CallExpression") {
        expression = {
          type: "ExpressionStatement",
          expression: expression,
        };
      }

      prevPosition.push(expression);
    },
  });

  return newAst;
};

export default transformer;
