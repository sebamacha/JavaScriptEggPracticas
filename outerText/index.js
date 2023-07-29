// Obtener el párrafo
const parrafoElement = document.getElementById('miParrafo');

// Obtener el contenido de texto visible del párrafo, incluyendo el de los nodos hijos
const textoVisibleCompleto = parrafoElement.outerText;

console.log('El contenido de texto visible completo del párrafo es: ' + textoVisibleCompleto);
