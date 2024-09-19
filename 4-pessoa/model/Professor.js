import Pessoa from "./Pessoa.js";

class Professor extends Pessoa {
  especialidades;

  constructor(nome, idade, especialidades) {
    super(nome, idade);
    this.especialidades = especialidades;
  }
}
export default Professor;

// importar classes herdadas (caso tenham)

// criação de classe

// definir os atributos da classe

// criar o construtor da classe

// criar os métodos da classe (se eles existirem)

// exportar a classe para uso modular
