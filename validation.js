function add(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "plese give me a number";
  }
  return num1 + num2;
}
const result = add("12", 55);
console.log(result);
