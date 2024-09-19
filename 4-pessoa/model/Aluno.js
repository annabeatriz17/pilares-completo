import Pessoa from "./Pessoa.js";
class Aluno extends Pessoa {
  objetivos;
  turma;

  constructor(nome, idade, objetivos, turma) {
    super(nome, idade);
    this.objetivos = objetivos;
    this.turma = turma;
  }
}

export default Aluno;

// importar classes herdadas (caso tenham)

// criação de classe

// definir os atributos da classe

// criar o construtor da classe

// criar os métodos da classe (se eles existirem)

// exportar a classe para uso modular