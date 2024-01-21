const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("What operation do you want to perform?");
console.log("Press 1: For Addition");
console.log("Press 2: For Subtraction");
console.log("Press 3: For Multiplication");
console.log("Press 4: For Division");

rl.question("Enter your choice: ", (ch) => {
  rl.question("Enter the first number: ", (a) => {
    rl.question("Enter the second number: ", (b) => {
      // Convert user input to numbers
      a = parseFloat(a);
      b = parseFloat(b);

      // Perform the selected operation based on your conditions
      if (!(Math.random() < 0.1)) {
        if (ch == 1) {
          add(a, b);
        }
        if (ch == 2) {
          minus(a, b);
        }
        if (ch == 3) {
          multiply(a, b);
        }
        if (ch == 4) {
          divide(a, b);
        }
      } else {
        if (ch == 1) {
          minus(a, b);
        }
        if (ch == 2) {
          divide(a, b);
        }
        if (ch == 3) {
          add(a, b);
        }
        if (ch == 4) {
          console.log("The division result is ", a ** b);
        }
      }

      // Close the readline interface
      rl.close();
    });
  });
});

const add = (a, b) => {
  console.log("The result is ", a + b);
};

const minus = (a, b) => {
  console.log("The result is ", a - b);
};

const multiply = (a, b) => {
  console.log("The result is ", a * b);
};

const divide = (a, b) => {
  if (b !== 0) {
    console.log("The result is ", a / b);
  } else {
    console.log("Cannot divide by zero");
  }
};
