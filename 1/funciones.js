var personass = [
    { "nombre": "Juan", "edad": 30, "ciudad": "Buenos Aires" },
    { "nombre": "María", "edad": 25, "ciudad": "Rosario" },
    { "nombre": "Pedro", "edad": 40, "ciudad": "Córdoba" },
    { "nombre": "Lucía", "edad": 35, "ciudad": "Mendoza" }
  ];
  
 ///concatenar
 let personas1 = ["Juan", "María"];
let personas2 = ["Pedro", "Lucía"];
let todasLasPersonas = personas1.concat(personas2);

console.log(todasLasPersonas); // Imprime ["Juan", "María", "Pedro", "Lucía"]

//reversa
let personas = ["Juan", "María", "Pedro", "Lucía"];
personas.reverse();

console.log(personas); // Imprime ["Lucía", "Pedro", "María", "Juan"]

//push(): agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
var frutas = ["manzana", "naranja"];
var nuevaLongitud = frutas.push("banana");
console.log(frutas); // Imprime ["manzana", "naranja", "banana"]
console.log(nuevaLongitud); // Imprime 3

//pop(): elimina el último elemento de un array y lo devuelve.

var frutas = ["manzana", "naranja", "banana"];
var ultimaFruta = frutas.pop();
console.log(frutas); // Imprime ["manzana", "naranja"]
console.log(ultimaFruta); // Imprime "banana"


///shift(): elimina el primer elemento de un array y lo devuelve.
var frutas = ["manzana", "naranja", "banana"];
var primeraFruta = frutas.shift();
console.log(frutas); // Imprime ["naranja", "banana"]
console.log(primeraFruta); // Imprime "manzana"


//unshift(): agrega uno o más elementos al principio de un array y devuelve la nueva longitud del array.
var frutas = ["naranja", "banana"];
var nuevaLongitud = frutas.unshift("manzana");
console.log(frutas); // Imprime ["manzana", "naranja", "banana"]
console.log(nuevaLongitud); // Imprime 3

//slice(): devuelve una copia superficial de una porción del array.
var frutas = ["manzana", "naranja", "banana"];
var frutasCopia = frutas.slice(1, 3);
console.log(frutasCopia); // Imprime ["naranja", "banana"]

//splice(): cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
var frutas = ["manzana", "naranja", "banana"];
frutas.splice(1, 1, "kiwi");
console.log(frutas); // Imprime ["manzana", "kiwi", "banana"]

//join(): une todos los elementos de un array en una cadena y la devuelve.
var frutas = ["manzana", "naranja", "banana"];
var cadenaFrutas = frutas.join(", ");
console.log(cadenaFrutas); // Imprime "manzana, naranja, banana"

///indexOf(): devuelve el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si no está presente.
var frutas = ["manzana", "naranja", "banana"];
var indiceNaranja = frutas.indexOf("naranja");
console.log(indiceNaranja); // Imprime 1

//lastIndexOf(): devuelve el último índice en el que se puede encontrar un elemento dado en el array, o -1 si no está presente.
var numeros = [2, 5, 9, 2];
var indiceUltimoDos = numeros.lastIndexOf(2);
console.log(indiceUltimoDos); // Imprime 3


//forEach(): ejecuta una función proporcionada una vez para cada elemento del array.
var frutas = ["manzana", "naranja", "banana"];
frutas.forEach(function(fruta) {
  console.log(fruta);
});
// Imprime:
// manzana
// naranja
// banana


//map(): crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array original.
var numeros = [1, 4, 9];
var raicesCuadradas = numeros.map(Math.sqrt);
console.log(raicesCuadradas); // Imprime [1, 2, 3]

//filter(): crea un nuevo array con todos los elementos del array original que pasan una prueba implementada por la función proporcionada.
var numeros = [12, 5, 8, 130, 44];
var mayoresQueDiez = numeros.filter(function(numero) {
  return numero > 10;
});
console.log(mayoresQueDiez); // Imprime [12, 130, 44]


//reduce(): aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un único valor.
var numeros = [0, 1, 2, 3];
var total = numeros.reduce(function(acumulador, valorActual) {
  return acumulador + valorActual;
});
console.log(total); // Imprime 6

/// conjuntos de set permite almacenar valores únicos de cualquier tipo, ya sean valores primitivos o referencias a objetos
let miSet = new Set();

miSet.add(1);
miSet.add("texto");
miSet.add({a: 1, b: 2});

console.log(miSet.size); // Imprime 3
console.log(miSet.has(1)); // Imprime true
console.log(miSet.has("texto")); // Imprime true
console.log(miSet.has({a: 1, b: 2})); // Imprime false

miSet.delete("texto");
console.log(miSet.size); // Imprime 2

//miSet.clear(); elimina todo

///Map es una colección de pares clave-valor en la que las claves y los valores pueden ser de cualquier tipo
let miMapa = new Map();

miMapa.set("clave1", "valor1");
miMapa.set("clave2", "valor2");

console.log(miMapa.size); // Imprime 2
console.log(miMapa.get("clave1")); // Imprime "valor1"
console.log(miMapa.has("clave2")); // Imprime true

miMapa.delete("clave1");
console.log(miMapa.size); // Imprime 1

//miMapa.clear(); elima todo los elementos








