// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

function pessoaConstrutora(nomeRecebido, idadeRecebido) {
  (this.nome = nomeRecebido),
    (this.idade = idadeRecebido),
    (this.andar = function () {
      console.log(nomeRecebido + " andou");
    });
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const Maria = new pessoaConstrutora("Maria", 15);
const Jao = new pessoaConstrutora("João", 20);
const Bruno = new pessoaConstrutora("Bruno", 25);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
}

const listaItens = new Dom("li");

listaItens.addClass("ativar");
