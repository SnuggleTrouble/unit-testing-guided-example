function sum(a, b) {
  if (!a && !b) return 0;
  if (!b) return a;
  return a + b;
}

function subtract(a, b) {
  if (!a && !b) return 0;
  if (!b) return a;
  return a - b;
}

function divide(a, b) {
  if (b === 0) throw "You can't divide by zero";
  return a / b;
}

function multiply(a, b) {
  if (!b) return a;
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
