// Método: Crear un array vacío.
const arrayVacio = [];
console.log("Array vacío:", arrayVacio);

// Método: Crear un array con elementos.
const numeros = [1, 2, 3, 4, 5];
console.log("Array de números:", numeros);

// Método: Obtener la longitud (cantidad de elementos) de un array.
const longitudArray = numeros.length;
console.log("Longitud del array:", longitudArray); // Output: 5

// Método: Acceder a un elemento por su índice
const primerElemento = numeros[0];
console.log("Primer elemento:", primerElemento); 

// Método: Modificar un elemento por su índice
numeros[2] = 10;
console.log("Array modificado:", numeros); 

// Método: Añadir elementos al final del array
numeros.push(6);
console.log("Array con nuevo elemento:", numeros); 

// Método: Eliminar el último elemento del array.
console.log("Array sin último elemento:", numeros); 

// Método: Añadir elementos al principio del array
numeros.unshift(0);
console.log("Array con nuevo elemento al principio:", numeros); 

// Método: Eliminar el primer elemento del array
numeros.shift();
console.log("Array sin primer elemento:", numeros); 

// Método: Obtener una porción (subarray) de un array
const subarray = numeros.slice(1, 4);
console.log("Subarray:", subarray); // 

// Método: Unir dos o más arrays en uno solo
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arrayUnido = array1.concat(array2);
console.log("Array unido:", arrayUnido); 

// Método: Buscar el índice de un elemento en el array
const indice = arrayUnido.indexOf(4);
console.log("Índice del elemento '4':", indice); 

// Método: Verificar si un elemento existe en el array
const existeElemento = arrayUnido.includes(7);
console.log("¿Existe el elemento '7'?:", existeElemento); 

// Método: Recorrer un array utilizando forEach
arrayUnido.forEach((elemento, index) => {
  console.log(`Elemento ${index}: ${elemento}`);
});

// Método: Filtrar elementos que cumplan una condición
const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log("Números pares:", numerosPares); // Output: [2, 10, 4]

// Método: Transformar elementos de un array con map
const numerosDuplicados = numeros.map((num) => num * 2);
console.log("Números duplicados:", numerosDuplicados); 
