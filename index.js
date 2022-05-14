// Add
function add(num1, num2) {
  return num1 + num2;
}
// Subtract
function subtract(num1, num2) {
  return num1 - num2;
}
// Multiply
function multiply(num1, num2) {
  return num1 * num2;
}
// divide
function divide(num1, num2) {
  return num1 / num2;
}

console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log(divide(5, 3));

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "*") {
    return multiply(num1, num2);
  } else if (operator == "/") {
    return divide(num1, num2);
  } else {
    return console.log("Invalid operation");
  }
}

console.log(operate("/", 10, 2));
