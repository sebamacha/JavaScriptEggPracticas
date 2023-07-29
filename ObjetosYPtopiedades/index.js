const personas = [
    { nombre: "Alicia", edad: 25, ciudad: "Nueva York" },
    { nombre: "Bob", edad: 32, ciudad: "París" },
    { nombre: "Carlos", edad: 40, ciudad: "Londres" }
  ];
  
  function agregarSaludo(personas) {
    return personas.map(persona => {
      return {
        ...persona,
        saludo: `Hola, mi nombre es ${persona.nombre} y soy de ${persona.ciudad}`
      };
    });
  }
  
  const personasConSaludos = agregarSaludo(personas);
  console.log(personasConSaludos);
  