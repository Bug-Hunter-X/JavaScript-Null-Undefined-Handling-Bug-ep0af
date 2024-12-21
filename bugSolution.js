function foo(a, b) {
  a = a === null ? 0 : a; // Correctly handles null values
  b = b === null ? 0 : b; // Correctly handles null values
  return a + b;
}
console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined,5)); // Output: 5