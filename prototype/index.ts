// Definindo a classe Carro com os tipos para as propriedades
class Carro {
  marca: string;
  modelo: string;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  // Método 'ligar' que será acessado pelas instâncias
  ligar(): void {
    console.log(`${this.marca} ${this.modelo} está ligado!`);
  }
}

// Criando um novo carro
const meuCarro = new Carro("Fusca", "1975");

// Usando o método
meuCarro.ligar(); // Saída: Fusca 1975 está ligado!
