class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    getNome() {
        return this.nome
    }

    setNome(nome) {
        this.nome = nome
    }

    getPeso() {
        return this.peso
    }

    setPeso(peso) {
        this.peso = peso
    }

    getAltura() {
        return this.altura
    }

    setAltura(altura) {
        this.altura = altura
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura)
    }
}

const pessoa = new Pessoa("Guilherme", 110, 175)

const nome = pessoa.getNome()
const imc = pessoa.calculaIMC()

console.log(`O paceiente ${nome} esta com IMC ${imc}`);
