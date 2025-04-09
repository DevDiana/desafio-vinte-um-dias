// Criar um programa que pergunte a idade do usuário e diga se ele é maior ou menor de idade, aprendendo sobre tomada de decisões no código.

let idade = Number(prompt("Qual a sua idade"));

function verificaSeMaiorIdade() {
  if (idade >= 18) {
    console.log("maior de idade");
  } else {
    console.log("menor de idade");
  }

  idade >= 18 ? "maior de idade" : "menor de idade";
}

verificaSeMaiorIdade();
