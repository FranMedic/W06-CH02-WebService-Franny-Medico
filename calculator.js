const {
  addition,
  substract,
  multiplication,
  division,
} = require("./operations");

const firstOperator = 5;
const secondOperator = 3;

if (firstOperator === undefined || secondOperator === undefined) {
  // firstOperator = prompt("Enter first number: ");
  // secondOperator = prompt("Enter second number: ");
  console.log("vamos mal");
}
if (
  firstOperator === Number.isNaN(+firstOperator) ||
  secondOperator === Number.isNaN(+secondOperator)
) {
  console.log("Error en los datos");
  process.exit();
} else {
  console.log(
    `${firstOperator} + ${secondOperator}= ${addition(
      firstOperator,
      secondOperator
    )} `
  );
  console.log(
    `${firstOperator} - ${secondOperator}= ${substract(
      firstOperator,
      secondOperator
    )} `
  );
  console.log(
    `${firstOperator} * ${secondOperator}= ${multiplication(
      firstOperator,
      secondOperator
    )} `
  );
  console.log(
    `${firstOperator} / ${secondOperator}= ${division(
      firstOperator,
      secondOperator
    )} `
  );
}
