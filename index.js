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

function operate(operator, num1, num2) {
  if (operator === "+") {
    return (displayValue.value = add(num1, num2));
  } else if (operator == "-") {
    return (displayValue.value = subtract(num1, num2));
  } else if (operator == "*") {
    return (displayValue.value = multiply(num1, num2));
  } else if (operator == "/") {
    return (displayValue.value = divide(num1, num2));
  } else {
    return console.log("Invalid operation");
  }
}

const displayValue = document.querySelector(".calculator-screen");
const buttons = document.querySelectorAll("button");
const equalSign = document.querySelector(".equal-sign");
const allClear = document.querySelector(".all-clear");

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    if (displayValue.value === "0") {
      displayValue.value = button.value;
    } else {
      displayValue.value += button.value;
    }
  });
});

equalSign.addEventListener("click", () => {
  if (displayValue.value.includes("+")) {
    let str = displayValue.value;
    let num1 = str.substring(0, str.indexOf("+"));
    let num2 = str.substring(str.indexOf("+") + 1);
    operate("+", parseInt(num1), parseInt(num2));
  }

  if (displayValue.value.includes("-")) {
    let str = displayValue.value;
    let num1 = str.substring(0, str.indexOf("-"));
    let num2 = str.substring(str.indexOf("-") + 1);
    operate("-", parseInt(num1), parseInt(num2));
  }

  if (displayValue.value.includes("*")) {
    let str = displayValue.value;
    let num1 = str.substring(0, str.indexOf("*"));
    let num2 = str.substring(str.indexOf("*") + 1);
    operate("*", parseInt(num1), parseInt(num2));
  }

  if (displayValue.value.includes("/")) {
    let str = displayValue.value;
    let num1 = str.substring(0, str.indexOf("/"));
    let num2 = str.substring(str.indexOf("/") + 1);
    operate("/", parseInt(num1), parseInt(num2));
  }
});

// Reset screen to zero
allClear.addEventListener("click", () => {
  displayValue.value = 0;
});
