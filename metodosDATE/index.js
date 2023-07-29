// Método: Crear una instancia de Date con la fecha y hora actual.
const fechaActual = new Date();
console.log("Fecha y hora actual:", fechaActual);

// Método: Obtener el año actual.
const añoActual = fechaActual.getFullYear();
console.log("Año actual:", añoActual);

// Método: Obtener el mes actual (0-11, donde 0 es enero y 11 es diciembre).
const mesActual = fechaActual.getMonth();
console.log("Mes actual:", mesActual); // Output: Valor entre 0 y 11

// Método: Obtener el día del mes actual (1-31).
const diaMesActual = fechaActual.getDate();
console.log("Día del mes actual:", diaMesActual);

// Método: Obtener el día de la semana (0-6, donde 0 es domingo y 6 es sábado).
const diaSemana = fechaActual.getDay();
console.log("Día de la semana:", diaSemana); // Output: Valor entre 0 y 6

// Método: Obtener la hora actual (0-23).
const horaActual = fechaActual.getHours();
console.log("Hora actual:", horaActual);

// Método: Obtener los minutos actuales (0-59).
const minutosActuales = fechaActual.getMinutes();
console.log("Minutos actuales:", minutosActuales);

// Método: Obtener los segundos actuales (0-59).
const segundosActuales = fechaActual.getSeconds();
console.log("Segundos actuales:", segundosActuales);

// Método: Obtener los milisegundos actuales.
const milisegundosActuales = fechaActual.getMilliseconds();
console.log("Milisegundos actuales:", milisegundosActuales);

// Método: Obtener la fecha y hora en formato legible.
const fechaLegible = fechaActual.toLocaleString();
console.log("Fecha y hora legible:", fechaLegible);

// Método: Obtener la fecha y hora en formato UTC (Tiempo Universal Coordinado).
const fechaUTC = fechaActual.toUTCString();
console.log("Fecha y hora en UTC:", fechaUTC);

// Método: Crear una instancia de Date con una fecha específica.
const fechaEspecifica = new Date("2023-07-29 12:30:00");
console.log("Fecha y hora específica:", fechaEspecifica);
