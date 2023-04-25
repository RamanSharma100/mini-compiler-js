import tokenizer from "./tokenizer.js";
import parser from "./parser.js";
import transformer from "./transformer.js";

const compiler = (input) => {
  // 1. Lexical analysis - break input into tokens
  const tokens = tokenizer(input);

  // 2. Syntactic analysis

  const AST = parser(tokens);

  // 3. Transformation

  const newAST = transformer(AST);

  // 4. Code generation

  return newAST;
};

export default compiler;
