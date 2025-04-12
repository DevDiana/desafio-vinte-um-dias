// Criar um programa que informe se um número é positivo, negativo ou zero.

let numero = Number(prompt("Digite um número"));

function verificaNumero(numero) {
  if (numero === 0) {
    console.log("Número igual a zero");
  } else if (numero > 0) {
    console.log("Número positivo");
  } else {
    console.log("Número negativo");
  }
}

verificaNumero(numero);
