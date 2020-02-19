const obj = {
    nome: "guilherme",
    idade: 30,
    caracteristicas: {
        peso: 100,
        altura: 175
    }
}

const { caracteristicas: { peso, altura }, ...others } = obj

console.log(peso);
console.log(altura);
console.log(others);

const imc = (...resultado) => resultado.reduce((peso, altura) => peso / (altura * altura))

console.log(imc(peso, altura));

const peso2 = { ...obj.caracteristicas, peso: 150 }
const altura2 = { ...obj.caracteristicas, altura: 190 }

console.log(peso2);
console.log(altura2);

console.log(imc({ peso, altura }));