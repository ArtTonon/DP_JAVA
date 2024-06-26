//crie uma classe Livro com as propriesades nome, titulo e autor. 
//Crie 2 metodos condizentes para essa classe. Crie 2 objetos e chame os metodos existentes.

class Livro{
  constructor(nome, titulo, autor, paginas){
    this.nome = nome;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }
  descricao(){
    return "O livro " + this.nome + " tem o titulo " + this.titulo + " e o autor é " + this.autor;
  }
  pagina(){
    return "O livro " + this.nome + " tem " + this.paginas + " paginas";
  }
}

const livro1 = new Livro('Harry Potter', 'A Pedra Filosofal', 'J. K. Rowling');
const livro2 = new Livro('Goosebumps', 88);

console.log(livro1.descricao());
console.log(livro2.pagina());