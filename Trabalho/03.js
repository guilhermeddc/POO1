class Disciplina {
    constructor(matricula, nome, nota01, nota02) {
        this.matricula = matricula
        this.nome = nome
        this.nota01 = nota01
        this.nota02 = nota02
    }

    getMatricula() {
        return this.matricula
    }

    setMatricula(matricula) {
        this.matricula = matricula
    }

    getNome() {
        return this.nome
    }

    setNome(nome) {
        this.nome = nome
    }

    getNota01() {
        return this.nota01
    }

    setNota01(nota01) {
        this.nota01 = nota01
    }

    getNota02() {
        return this.nota02
    }

    setNota02(nota02) {
        this.nota02 = nota02
    }

    mediaFinal() {
        return (this.nota01 + this.nota02) / 2
    }
}

const aluno01 = new Disciplina(315623561, "Guilherme", 80, 76)

const matricula = aluno01.getMatricula()
const nome = aluno01.getNome()
const mediaFinal = aluno01.mediaFinal()

console.log(`O Aluno ${nome}, com a matricula ${matricula} ficou com media ${mediaFinal}`);
