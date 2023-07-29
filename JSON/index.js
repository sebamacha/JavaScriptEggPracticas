// Array de objetos JSON
const personas = [
    {
      nombre: "Juan",
      edad: 30,
      profesion: "Ingeniero",
    },
    {
      nombre: "María",
      edad: 25,
      profesion: "Diseñadora",
    },
    {
      nombre: "Carlos",
      edad: 40,
      profesion: "Programador",
    },
  ];
  
  // Acceder a los objetos JSON del array
  console.log(personas[0].nombre); 
  console.log(personas[1].edad);   
  console.log(personas[2].profesion); 

  //convertir  objeto a json
  const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
  };
  
  const personaJSON = JSON.stringify(persona);
  console.log(personaJSON);


  //convertir json a objero
  const personaJSON1 = '{"nombre":"Juan","edad":30,"profesion":"Ingeniero"}';

const persona1 = JSON.parse(personaJSON);
console.log(persona1);



  