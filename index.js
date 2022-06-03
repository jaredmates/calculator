// Add
function add(num1, num2) {
  return roundNumber(num1 + num2);
}
// Subtract
function subtract(num1, num2) {
  return roundNumber(num1 - num2);
}
// Multiply
function multiply(num1, num2) {
  return roundNumber(num1 * num2);
}
// divide
function divide(num1, num2) {
  if (num2 === 0) {
    return "( ͡° ͜ʖ ͡°)";
  } else {
    return roundNumber(num1 / num2);
  }
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
const decimal = document.querySelector(".decimal");

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    if (displayValue.value === "0") {
      displayValue.value = button.value;
      currentNum = button.value;
    } else {
      displayValue.value += button.value;
      currentNum += button.value;
    }
  });
});

equalSign.addEventListener("click", () => {
  // if (currentNum != "") {
  if (displayValue.value.includes("+")) {
    let str = displayValue.value;
    let num1 = str.substring(0, str.indexOf("+"));
    let num2 = str.substring(str.indexOf("+") + 1);
    operate("+", parseFloat(num1), parseFloat(num2));
  }

  if (displayValue.value.includes("-")) {
    let str = displayValue.value;
    let num1 = str.substring(0, str.indexOf("-"));
    let num2 = str.substring(str.indexOf("-") + 1);
    operate("-", parseFloat(num1), parseFloat(num2));
  }

  if (displayValue.value.includes("*")) {
    let str = displayValue.value;
    let num1 = str.substring(0, str.indexOf("*"));
    let num2 = str.substring(str.indexOf("*") + 1);
    operate("*", parseFloat(num1), parseFloat(num2));
  }

  if (displayValue.value.includes("/")) {
    let str = displayValue.value;
    let num1 = str.substring(0, str.indexOf("/"));
    let num2 = str.substring(str.indexOf("/") + 1);
    operate("/", parseFloat(num1), parseFloat(num2));
  }
  // }
});

// Reset screen to zero
allClear.addEventListener("click", () => {
  currentNum = 0;
  displayValue.value = 0;
});

let currentNum = 0;

decimal.addEventListener("click", () => {
  addDecimal();
});

function addDecimal() {
  if (!currentNum.includes(".")) {
    displayValue.value += ".";
  }
}

function roundNumber(num) {
  return Math.round(num * 100) / 100;
}
