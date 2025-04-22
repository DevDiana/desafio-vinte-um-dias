// Criar um programa que permita adicionar nomes a uma lista e depois exiba todos os nomes

let nomes = [];

function exibirNomes() {
  let nome = prompt("Digite um nome (ou 'sair' para encerrar):");

  while (nome !== "sair") {
    nomes.push(nome);
    nome = prompt("Digite outro nome (ou 'sair' para encerrar):");
  }

  for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
  }
}

exibirNomes();
