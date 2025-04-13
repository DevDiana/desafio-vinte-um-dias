// Criar um programa que peça nome e senha e valide o acesso, introduzindo conceitos básicos de autenticação.

const usuario = "email@email.com";
const senha = "123456";

const usuarioLogado = prompt("digite seu e-mail");
const senhaUsuario = prompt("digite sua senha");

function verificaLoginUsuario() {
  if (usuarioLogado === usuario && senhaUsuario === senha) {
    console.log("email  e senha valido");
  } else {
    console.log("email ou senha inválida");
  }
}

verificaLoginUsuario();
