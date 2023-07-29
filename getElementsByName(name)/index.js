// Obtener los campos de texto y el botón por su atributo "name"
const nombreInput = document.getElementsByName('nombre')[0];
const apellidoInput = document.getElementsByName('apellido')[0];
const saludarBtn = document.getElementById('saludarBtn');

// Agregar un evento click al botón
saludarBtn.addEventListener('click', () => {
  // Obtener el nombre y apellido ingresados
  const nombre = nombreInput.value;
  const apellido = apellidoInput.value;

  // Mostrar un mensaje de saludo
  alert('¡Hola, ' + nombre + ' ' + apellido + '!');
});
