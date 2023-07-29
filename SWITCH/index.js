let fruta = "naranja";

switch (fruta) {
  case "banana":
    console.log("El precio de la banana es $0.50.");
    break;
  case "manzana":
    console.log("El precio de la manzana es $0.60.");
    break;
  case "naranja":
    console.log("El precio de la naranja es $0.70.");
    break;
  default:
    console.log("Lo siento, no tenemos " + fruta + ".");
}