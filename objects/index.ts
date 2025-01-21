interface Pessoa {
  nome: string;
  idade: number;
  sobrenome?: string;
}

let pessoa: Pessoa = {
  nome: "João",
  idade: 30,
};

pessoa.sobrenome = "Silva";

console.log(pessoa);
