//try...catch:
try {
    // Código que podría lanzar una excepción
    const resultado = 10 / 0; // División por cero, genera una excepción
  } catch (error) {
    // Manejo del error
    console.log("Ha ocurrido un error:", error.message);
  }

  
  //try...finally:
  try {
    // Código que podría lanzar una excepción
    console.log("Ejecutando código dentro del bloque try");
  } finally {
    // Código que se ejecutará siempre, independientemente de si hay excepción o no
    console.log("Ejecutando código dentro del bloque finally");
  }

  
  //try...catch...finally:
  try {
    // Código que podría lanzar una excepción
    const resultado = 10 / 0; // División por cero, genera una excepción
  } catch (error) {
    // Manejo del error
    console.log("Ha ocurrido un error:", error.message);
  } finally {
    // Código que se ejecutará siempre, independientemente de si hay excepción o no
    console.log("Ejecutando código dentro del bloque finally");
  }
  