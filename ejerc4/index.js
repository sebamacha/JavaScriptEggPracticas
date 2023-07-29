// Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
// ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
// que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. 


let entrada = prompt("Introduce 'S' o 'N':");

if (entrada.toUpperCase() === 'S' || entrada.toUpperCase() === 'N') {
  console.log("CORRECTO");
} else {
  console.log("INCORRECTO");
}
