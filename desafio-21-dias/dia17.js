// Criar um programa que some todos os números até o valor inserido pelo usuário.

let numeroRecebido = Number(prompt("Digite um número"));

function soma() {
  let total = 0;
  for (let i = 1; i >= numeroRecebido; i++) {
    total += i;
  }
}

soma();
