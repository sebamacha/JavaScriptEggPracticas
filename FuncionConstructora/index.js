// Definimos la función constructora para crear objetos de tipo "Persona"
function Persona(nombre, edad) {
    // Propiedades
    this.nombre = nombre;
    this.edad = edad;
  
    // Método
    this.saludar = function() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    };
  }
  
  // instancia de Persona usando la función constructora
  const persona1 = new Persona("Juan", 30);
  
  // Acceder a las propiedades y métodos del objeto persona1
  console.log(persona1.nombre); 
  console.log(persona1.edad);   
  persona1.saludar(); 