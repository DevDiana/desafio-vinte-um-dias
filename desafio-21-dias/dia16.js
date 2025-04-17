// Criar um programa que peça um número e exiba a tabuada dele.

let numero = Number(prompt("Digite um numero para a tabuada"));

function tabuada() {
  for (let i = 0; i <= 10; i++) {
    console.log(numero * i);
  }
}

tabuada();
