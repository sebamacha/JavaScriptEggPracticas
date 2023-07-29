function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
      return "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      return "Sobrepeso";
    } else {
      return "Obesidad";
    }
  }
  