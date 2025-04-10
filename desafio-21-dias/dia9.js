// Criar um programa que peça um número e informe se ele é par ou ímpar.

let numero = Number(prompt("Digite um número"));

const verificaSeEParOuImpar = numero % 2 === 0 ? "numero par" : "numero impar";

console.log(verificaSeEParOuImpar);
