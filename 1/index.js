console.info("cartel de informacion");
console.warn("cartel de warning");
console.log("hola desde la consola desde el navegador");
let eddad = prompt("ingrese edad");
alert("hola tu edad es " + typeof eddad);
//template string
let nombre = "juan";
let apellido = "perez";
let edad = 25;
let mensaje = `hola ${nombre} ${apellido} tu edad es ${edad}`;
console.log(mensaje);

//json manejar objetos en js

//crear un json de persona
let persona = {
  nombre: "Sebastian",
  apellido: "Macharette",
  edad: 39,
  profesion: "De todo un poco",
  mascota: {
    nombre: "tovi",
    edad: 14,
    fechanac: new Date(21 - 8 - 2010),
  },
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.profesion);

//uso de date , variable

let mascota = {
  nombre: "tovi",
  edad: 14,
  fechanac: new Date(21 - 8 - 2010),
};
console.log(mascota);

console.log(persona);

//array-conjunto de datos - puede tener elementos repetidos
let numeros = [18, 82, 43, 4, 5, 6, 7, 8, "seba", true];
console.log(numeros);

//posicionamiento de array
console.log(numeros[0]), console.log(numeros[1]), console.log(numeros[2]);

//convertir todo el json a numeros
console.log(JSON.stringify(numeros));
//parsear objeto a cadena
let jsonString = '{"nombre":"Juan", "edad":30, "ciudad":"Buenos Aires"}';
let objeto = JSON.parse(jsonString);

console.log(objeto.nombre); // Imprime "Juan"
console.log(objeto.edad); // Imprime 30
console.log(objeto.ciudad); // Imprime "Buenos Aires"

//crear un arraylist de objetos de personas 
class Persona {
    constructor(nombre, edad, ciudad) {
      this.nombre = nombre;
      this.edad = edad;
      this.ciudad = ciudad;
    }
  }
  
  let personas = [
    new Persona("Juan", 30, "Buenos Aires"),
    new Persona("María", 25, "Rosario"),
    new Persona("Pedro", 40, "Córdoba"),
    new Persona("Lucía", 35, "Mendoza")
  ];
  
  console.log(personas);
  console.log(personas.length);

