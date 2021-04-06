// Crie uma função para verificar se um valor é Truthy

function verifica() {
  0 ? console.log("truthy") : console.log("falsy"); // zero é falsy
}

verifica();

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

let quad = 10;

function perimetro() {
 let soma = quad + quad + quad + quad;
 console.log(soma);
}

perimetro();

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

const nome = 'Leticia';
const sobrenome = 'Leonardo';

function nomeCompleto(nome, sobrenome) {
  console.log(`${nome} ${sobrenome}`);
}

nomeCompleto(nome, sobrenome);

// Crie uma função que verifica se um número é par

let n = 35;

function verificaPar(number) {
  if (number % 2 === 0) {
    console.log('É par');
  } else {
    console.log('É ímpar');
  }
}

verificaPar(n);
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

let nmbr = 10;
let string = "ola"
let nu;

function tipo(dado) {
  console.log(typeof(dado));
}

tipo(nmbr);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

window.addEventListener('scroll', function() {
  console.log('Leticia Leonardo');
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
