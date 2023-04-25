import compiler from "./compiler.js";

const input = "(add 2 (subtract 4 2))";
const output = compiler(input);

console.log(JSON.stringify(output, null, 2));
