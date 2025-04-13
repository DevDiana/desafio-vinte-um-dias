// Criar um programa que receba um número (1 a 7) e exiba o nome do dia correspondente, praticando estruturas de decisão mais organizadas.

let numeroRecebido = Number(prompt("Digite um número de 1 a 7: "));

function verificaDia() {
  switch (numeroRecebido) {
    case 1:
      console.log("Segunda-feira");
      break;

    case 2:
      console.log("Terça-feira");
      break;

    case 3:
      console.log("Quarta-feira");
      break;

    case 4:
      console.log("Quinta-feira");
      break;

    case 5:
      console.log("Sexta-feira");
      break;
    case 6:
      console.log("Sábado");
      break;

    case 7:
      console.log("Domingo");
      break;
  }
}
verificaDia();
