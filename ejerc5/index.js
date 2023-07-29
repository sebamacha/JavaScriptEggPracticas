// Construir un programa que simule un menú de opciones para realizar las cuatro
// operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
// numéricos enteros. El usuario, además, debe especificar la operación con el primer
// carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
// o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. 

let num1 = parseInt(prompt("Introduce el primer número:"));
let num2 = parseInt(prompt("Introduce el segundo número:"));
let operacion = prompt("Introduce la operación a realizar (S/s, R/r, M/m, D/d):");

switch (operacion.toUpperCase()) {
  case 'S':
    console.log(`El resultado de la suma es: ${num1 + num2}`);
    break;
  case 'R':
    console.log(`El resultado de la resta es: ${num1 - num2}`);
    break;
  case 'M':
    console.log(`El resultado de la multiplicación es: ${num1 * num2}`);
    break;
  case 'D':
    if (num2 === 0) {
      console.log("Error: No se puede dividir por cero");
    } else {
      console.log(`El resultado de la división es: ${num1 / num2}`);
    }
    break;
  default:
    console.log("Error: Operación no válida");
}
