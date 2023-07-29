// Obtener todos los elementos div en la página
const divElements = document.getElementsByTagName('div');

// Iterar sobre los divs y mostrar su contenido
for (let i = 0; i < divElements.length; i++) {
  const titulo = divElements[i].getElementsByTagName('h2')[0].textContent;
  const contenido = divElements[i].getElementsByTagName('p')[0].textContent;

  console.log('Título: ' + titulo);
  console.log('Contenido: ' + contenido);
}
