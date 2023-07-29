function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  
    this.saludar = function() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    };
  }
  const persona1 = new Persona("Juan", 30);
  persona1.saludar(); 
  
  const persona2 = new Persona("María", 25);
  persona2.saludar(); 
    