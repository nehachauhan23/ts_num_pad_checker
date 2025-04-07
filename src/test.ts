import { checkNumberPadding } from "./checkNumberPadding";

const testCases: [string[], number][] = [
  [["001", "002"], 3],
  [["001", "002", "9999"], 3],
  [["1", "2", "999"], 1],
  [["999", "9999"], -3],
  [["99", "999", "9999"], -2],
  [["01", "002"], -1],
  [[], 0],
];

console.log("=== Number Padding Consistency Checker ===\n");

testCases.forEach(([input, expected], index) => {
  const result = checkNumberPadding(input);
  const status = result === expected ? "PASS" : `FAIL (Expected: ${expected})`;

  console.log(`Test #${index + 1}`);
  console.log(`Input:     ${JSON.stringify(input)}`);
  console.log(`Output:    ${result}`);
  console.log(`Result:    ${status}`);
  console.log("=".repeat(40));
});
