// Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
// de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
// para calcular el área y el perímetro se utilizan las siguientes fórmulas:
// area = PI * radio2
// perimetro = 2 * PI * radio

var pi = 3.14;
var radio = parseFloat(prompt("Ingrese el radio de la circunferencia: "));
var area = pi * radio * radio;
var perimetro = 2 * pi * radio;
alert("El área de la circunferencia es: " + area + "\nEl perímetro de la circunferencia es: " + perimetro);

