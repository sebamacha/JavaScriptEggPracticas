const frase = "¡Hola, mundo!";

// Método: length - Obtiene la longitud de la cadena.
const longitud = frase.length;
console.log("Longitud de la cadena:", longitud); // Output: 13

// Método: indexOf() - Busca la posición de una subcadena.
const posicionHola = frase.indexOf("Hola");
console.log("Posición de 'Hola':", posicionHola); // Output: 1

// Método: slice() - Extrae una parte de la cadena.
const subcadena = frase.slice(1, 5);
console.log("Subcadena:", subcadena); // Output: "Hola"

// Método: toUpperCase() - Convierte la cadena a mayúsculas.
const mayusculas = frase.toUpperCase();
console.log("Mayúsculas:", mayusculas); // Output: "¡HOLA, MUNDO!"

// Método: toLowerCase() - Convierte la cadena a minúsculas.
const minusculas = frase.toLowerCase();
console.log("Minúsculas:", minusculas); // Output: "¡hola, mundo!"

// Método: replace() - Reemplaza una subcadena por otra.
const nuevaFrase = frase.replace("Hola", "Adiós");
console.log("Nueva frase:", nuevaFrase); // Output: "¡Adiós, mundo!"

// Método: split() - Divide la cadena en un array de subcadenas.
const palabras = frase.split(" ");
console.log("Palabras:", palabras); // Output: ["¡Hola,", "mundo!"]

// Método: startsWith() - Verifica si la cadena comienza con una subcadena dada.
const comienzaConHola = frase.startsWith("Hola");
console.log("Comienza con 'Hola':", comienzaConHola); // Output: false

// Método: endsWith() - Verifica si la cadena termina con una subcadena dada.
const terminaConMundo = frase.endsWith("mundo!");
console.log("Termina con 'mundo!':", terminaConMundo); // Output: true

// Método: includes() - Verifica si la cadena contiene una subcadena dada.
const contieneMundo = frase.includes("mundo");
console.log("Contiene 'mundo':", contieneMundo); // Output: true
