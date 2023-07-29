// El for in a diferencia del for of iterara sobre los elementos dentro de un dato. Por ejemplo, si
// utilizamos un for in sobre un array, lo que hara será darnos los índices de los elementos
// dentro del array, pero si usamos un for in sobre un objeto, nos dara cada uno de los atributos
// dentro del mismo.

// Definimos un objeto con diferentes tipos de propiedades
const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
    ciudad: "Madrid",
    hobbies: ["fútbol", "lectura", "viajes"],
  };
  
  // Utilizamos el bucle for...in para recorrer las propiedades del objeto
  for (const propiedad in persona) {
    // Verificamos si la propiedad existe directamente en el objeto y no en su prototipo
    if (persona.hasOwnProperty(propiedad)) {
      console.log(`${propiedad}: ${persona[propiedad]}`);
    }
  }
  