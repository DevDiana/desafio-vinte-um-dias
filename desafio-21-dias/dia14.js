//  Criar um jogo de perguntas e respostas utilizando if/else para reforçar o aprendizado.

const resposta1 = "Mercúrio";
const resposta2 = "18 anos";

function perguntasRespostas() {
  let resultado1 = prompt("QUAL o primeiro planeta do sistema solar?");
  let resultado2 = prompt("Qual a maior idade aqui no Brasil?");

  if (resultado1 === resposta1 && resposta2 === resultado2) {
    console.log("Voce acertou");
  } else {
    console.log("Voce errou!!!!!!!");
  }
}
perguntasRespostas();
