class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    setNome(nome) {
        this.nome = nome
    }

    getNome() {
        return this.nome
    }

    setIdade(idade) {
        this.idade = idade
    }

    getIdade() {
        return this.idade
    }

    imprimir() {
        return `Nome: ${this.nome} || Idade: ${this.idade}`
    }
}

const pessoa = new Pessoa('Tainara', 19)

console.log(pessoa.imprimir());

class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
        super(nome, idade)
        this.salario = salario
    }

    setSalario(salario) {
        this.salario = salario
    }

    getSalario() {
        return this.salario
    }

    calcularSalarioLiquido() {
        const salarioLiquido = this.salario - (this.salario * 0.13)
        return `${this.nome} possui um salario de ${salarioLiquido}`
    }
}

const funcionario = new Funcionario('Guilherme', 30, 1900)
console.log(funcionario.idade);


class Diretor extends Pessoa {
    constructor(nome, permisssao) {
        super(nome)
        this.permisssao = permisssao
    }

    setPermissao(permisssao) {
        this.permisssao = permisssao
    }

    getPermissao() {
        return this.permisssao
    }

    nivelPermsssao() {
        return `${this.nome} tem permissao ${this.permisssao}`
    }
}

const diretor = new Diretor('Gusavo', 'Parcial')

console.log(diretor.getNome())
console.log(diretor.nivelPermsssao());

diretor.setNome('Maria')
diretor.setIdade(25)
console.log(diretor.getNome());
console.log(diretor.nivelPermsssao());
console.log(diretor.imprimir());




