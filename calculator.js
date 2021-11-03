const {
  addition,
  substract,
  multiplication,
  division,
} = require("./operations");

const calculator = (numberOne, numberTwo) => {
  let htmlCreated;
  if (Number.isNaN(+numberOne) || Number.isNaN(+numberTwo)) {
    htmlCreated = "<p>CATACLISMO, ERROR AYUDAAA!!!!! </p>";
  } else {
    htmlCreated = `<!DOCTYPE html>
<html lang="es-ES">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculadora</title>
  </head>
  <body>
    <h1>Resultados</h1>
    <ul>
      <li>Suma: ${numberOne} + ${numberTwo}= ${addition(
      numberOne,
      numberTwo
    )} </li>
      <li>Resta: ${numberOne} - ${numberTwo}= ${substract(
      numberOne,
      numberTwo
    )} </li>
      <li>Multiplicación: ${numberOne} * ${numberTwo}= ${multiplication(
      numberOne,
      numberTwo
    )} </li>
      <li>División: 
      ${numberOne} / ${numberTwo}= ${division(numberOne, numberTwo)} </li>
    </ul>
  </body>
</html>`;
  }
  return htmlCreated;
};

module.exports = calculator;
