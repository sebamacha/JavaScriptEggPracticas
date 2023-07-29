// Obtener la lista de frutas por su clase
const listaFrutas = document.getElementsByClassName('lista-frutas')[0];

// Agregar un nuevo elemento a la lista
const nuevaFruta = document.createElement('li');
nuevaFruta.textContent = 'Uva(agregado desde js)';
listaFrutas.appendChild(nuevaFruta);
