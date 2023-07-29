// Crear un objeto Map
// Crear un objeto Map
const miMapa = new Map();

// map.set(clave, valor)
miMapa.set("nombre", "Juan");
miMapa.set("edad", 30);
miMapa.set("profesion", "Ingeniero");

// map.get(clave)
const nombre = miMapa.get("nombre");
console.log("Nombre:", nombre); // 

// map.has(clave)
const tieneProfesion = miMapa.has("profesion");
console.log("Tiene profesión:", tieneProfesion); 

// map.delete(clave)
miMapa.delete("edad");

// map.size
const tamaño = miMapa.size;
console.log("Tamaño del Map:", tamaño); 

// Recorrer el Map utilizando for...of
for (const [clave, valor] of miMapa) {
  console.log(`${clave}: ${valor}`);
}


// Crear un objeto Set
// Crear un objeto Set utilizando un array como argumento
const miSet = new Set([1, 2, 3, 4, 5]);

// set.add(valor)
miSet.add(6).add(7).add(8);

// set.has(valor)
const tieneNumero3 = miSet.has(3);
console.log("¿Contiene el número 3?", tieneNumero3); 

// set.delete(valor)
const seEliminoNumero4 = miSet.delete(4);
console.log("¿Se eliminó el número 4?", seEliminoNumero4); 

// set.size
const tamaño2 = miSet.size;
console.log("Tamaño del Set:", tamaño2); //  (3, 4 eliminados y 6, 7, 8 agregados)

// set.clear()
miSet.clear();
console.log("Set después de limpiarlo:", miSet); 
