// Método: Math.sqrt() - Calcula la raíz cuadrada de un número.
const numero = 16;
const raizCuadrada = Math.sqrt(numero);
console.log("Raíz cuadrada de", numero, "es:", raizCuadrada); // Output: 4

// Método: Math.abs() - Devuelve el valor absoluto de un número.
const numeroNegativo = -10;
const valorAbsoluto = Math.abs(numeroNegativo);
console.log("Valor absoluto de", numeroNegativo, "es:", valorAbsoluto); // Output: 10

// Método: Math.pow() - Calcula la potencia de un número.
const base = 2;
const exponente = 3;
const potencia = Math.pow(base, exponente);
console.log(base, "elevado a", exponente, "es:", potencia); // Output: 8

// Método: Math.ceil() - Redondea un número hacia arriba al entero más cercano.
const numeroDecimal = 7.25;
const redondeoArriba = Math.ceil(numeroDecimal);
console.log("Redondeo hacia arriba de", numeroDecimal, "es:", redondeoArriba); // Output: 8

// Método: Math.floor() - Redondea un número hacia abajo al entero más cercano.
const redondeoAbajo = Math.floor(numeroDecimal);
console.log("Redondeo hacia abajo de", numeroDecimal, "es:", redondeoAbajo); // Output: 7

// Método: Math.round() - Redondea un número al entero más cercano.
const redondeoCercano = Math.round(numeroDecimal);
console.log("Redondeo cercano de", numeroDecimal, "es:", redondeoCercano); // Output: 7

// Método: Math.random() - Genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo).
const numeroAleatorio = Math.random();
console.log("Número aleatorio:", numeroAleatorio); // Output: (valor aleatorio entre 0 y 1)

// Método: Math.min() - Devuelve el valor más bajo entre una serie de números.
const minimo = Math.min(10, 5, 20, 8, 15);
console.log("Valor mínimo:", minimo); // Output: 5

// Método: Math.max() - Devuelve el valor más alto entre una serie de números.
const maximo = Math.max(10, 5, 20, 8, 15);
console.log("Valor máximo:", maximo); // Output: 20
