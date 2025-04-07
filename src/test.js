"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkNumberPadding_js_1 = require("./checkNumberPadding.js");
const testCases = [
    [["001", "002"], 3],
    [["001", "002", "9999"], 3],
    [["1", "2", "999"], 1],
    [["999", "9999"], -3],
    [["99", "999", "9999"], -2],
    [["01", "002"], -1],
    [[], 0],
];
for (const [input, expected] of testCases) {
    const result = (0, checkNumberPadding_js_1.checkNumberPadding)(input);
    console.log(`Input: ${JSON.stringify(input)} ➜ Result: ${result} ➜ ${result === expected ? "✅ PASS" : `❌ FAIL (expected ${expected})`}`);
}
