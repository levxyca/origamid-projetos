// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let dadosPessoais = {
  nome: "Leticia",
  sobrenome: "Leonardo",
  idade: 19,
  profissao: "Desenvolvedora",
  possuiFaculdade: true,
  mostra() {
    return dadosPessoais.nome && dadosPessoais.sobrenome;
  },
};

console.log(dadosPessoais.mostra);

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

let cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  lateVerHomem: true,
};
