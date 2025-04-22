// Criar um jogo "Adivinhe o número"
const numero = Math.floor(Math.random() * 10) + 1;
function jogoAdivinhaONumero() {
  let numeroPeloUsuario;

  while (numeroPeloUsuario !== numero) {
    numeroPeloUsuario = Number(prompt("Digite um número de 1 a 10"));

    if (numeroPeloUsuario < 1 || numeroPeloUsuario > 10) {
      console.log("Por favor, digite um número entre 1 e 10.");
    } else if (numeroPeloUsuario < numero) {
      console.log("O número é maior. Tente novamente!");
    } else if (numeroPeloUsuario > numero) {
      console.log("O número é menor. Tente novamente!");
    } else {
      console.log("Parabéns! Você acertou!");
    }
  }
}

jogoAdivinhaONumero();
