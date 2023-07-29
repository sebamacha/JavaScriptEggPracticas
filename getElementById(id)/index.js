// Obtener el botón y el div por sus IDs
const cambiarBtn = document.getElementById('cambiarBtn');
const divElement = document.getElementById('miDiv');

// Agregar un evento click al botón
cambiarBtn.addEventListener('click', () => {
  // Modificar el contenido del div
  divElement.innerHTML = '<h1>Contenido Cambiado</h1><p>¡Este contenido fue cambiado con JavaScript!</p>';
});
