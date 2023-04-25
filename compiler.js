import tokenizer from "./tokenizer.js";
import parser from "./parser.js";
import transformer from "./transformer.js";
import generator from "./generator.js";

const compiler = (input) => {
  // 1. Lexical analysis - break input into tokens
  const tokens = tokenizer(input);

  // 2. Syntactic analysis - build AST (Abstract Syntax Tree)

  const AST = parser(tokens);

  // 3. Transformation - transform AST into js AST

  const newAST = transformer(AST);

  // 4. Code generation - generate js code from js AST
  const jsCode = generator(newAST);

  return jsCode;
};

export default compiler;
