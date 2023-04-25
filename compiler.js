import tokenizer from "./tokenizer.js";

const compiler = (input) => {
  // 1. Lexical analysis - break input into tokens
  const tokens = tokenizer(input);

  // 2. Syntactic analysis
  // 3. Transformation
  // 4. Code generation

  return tokens;
};

export default compiler;
