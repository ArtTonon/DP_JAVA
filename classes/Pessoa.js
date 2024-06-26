//crie uma classe Pessoa com propriesades como nome, idade e cidade. 
//Adicione um método a classe Pessoa chamado cumprimentar que retorna 
//uma mensagem de cumprimento com o nome da pessoa e a idade dela. Crie 
//um objeto de pessoa que chame o metodo cumprimentar.

class Pessoa{
    constructor(nome, idade, cidade){
      this.nome = nome;
      this.idade = idade;
      this.cidade = cidade;
    }
    cumprimentar(){
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`
    }
  }

  const pessoa1 = new Pessoa('João', 25, 'São Paulo');
  console.log(pessoa1.cumprimentar());