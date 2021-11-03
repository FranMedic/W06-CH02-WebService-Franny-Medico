const division = (firstOperator, secondOperator) =>
  firstOperator / secondOperator;

const multiplication = (firstOperator, secondOperator) =>
  firstOperator * secondOperator;

const substract = (firstOperator, secondOperator) =>
  firstOperator - secondOperator;

const addition = (firstOperator, secondOperator) =>
  +firstOperator + +secondOperator;

module.exports = { division, multiplication, substract, addition };
