import compiler from "./compiler.js";

const input = "(add 2 (sub 4 2))";

console.log("\ninput(LISP): ", input, "\n");

console.log("compiling...");

const output = compiler(input);

console.log("\nJS Code:", output);
