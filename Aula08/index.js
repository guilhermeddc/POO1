// class Lista {
//     constructor() {
//         this.array = []
//     }

//     adicionarElemento() {
//         this.array.push("elemento")
//     }
// }

// const lista = new Lista()
// lista.adicionarElemento()
// lista.adicionarElemento()
// lista.adicionarElemento()
// lista.adicionarElemento()
// lista.adicionarElemento()
// // console.log(lista.array);


class CaixaEletronico {
    constructor(codgo, saldo) {
        this.codgo = codgo;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor
    }

    mostrar() {
        console.log(`banco ${this.codgo} com saldo de R$${this.saldo}.00.`);
    }
}

const caixa = new CaixaEletronico(222, 0)

caixa.depositar(500)
caixa.mostrar()
caixa.depositar(-250)
caixa.mostrar()
caixa.depositar(500)
caixa.mostrar()

