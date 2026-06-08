const paginas = document.querySelectorAll(".pagina");
const aside = document.querySelector("aside");

aside.addEventListener("click", (e) => {

    const secao = e.target.dataset.section;

    if (!secao) return;

    paginas.forEach((pagina) => {
        pagina.classList.remove("ativa");
    });

    document.getElementById(secao).classList.add("ativa");
});


// ====================
// IMC
// ====================

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc, genero) {

    if (genero === "masculino") {

        if (imc < 18.5) {
            return "Abaixo do peso";
        }

        if (imc <= 24.9) {
            return "Peso normal";
        }

        if (imc <= 29.9) {
            return "Sobrepeso";
        }

        return "Obesidade";
    }

    if (imc < 18.5) {
        return "Abaixo do peso";
    }

    if (imc <= 23.9) {
        return "Peso normal";
    }

    if (imc <= 28.9) {
        return "Sobrepeso";
    }

    return "Obesidade";
}

const btnImc = document.querySelector("#calcularImc");
const resultadoImc = document.querySelector("#resultadoImc");

btnImc.addEventListener("click", () => {

    const peso = Number(document.querySelector("#peso").value);
    const altura = Number(document.querySelector("#altura").value);

    const generoSelecionado =
        document.querySelector('input[name="genero"]:checked');

    if (!peso || !altura || !generoSelecionado) {

        resultadoImc.textContent =
            "Preencha todos os campos.";

        return;
    }

    if (altura <= 0) {

        resultadoImc.textContent =
            "A altura deve ser maior que zero.";

        return;
    }

    const imc = calcularIMC(peso, altura);

    const classificacao =
        classificarIMC(
            imc,
            generoSelecionado.value
        );

    resultadoImc.textContent =
        `IMC: ${imc.toFixed(2)} | ${classificacao}`;
});


// ====================
// CONVERSOR DE MOEDAS
// ====================

const btnConverterMoeda =
    document.querySelector("#btnConverterMoeda");

const resultadoMoeda =
    document.querySelector("#resultadoMoeda");

btnConverterMoeda.addEventListener("click", async () => {

    const valor =
        Number(document.querySelector("#valorMoeda").value);

    const tipo =
        document.querySelector("#tipoConversao").value;

    if (!valor) {

        resultadoMoeda.textContent =
            "Digite um valor válido.";

        return;
    }

    try {

        const resposta =
            await fetch(
                "https://economia.awesomeapi.com.br/json/last/USD-BRL"
            );

        const dados =
            await resposta.json();

        const cotacao =
            Number(dados.USDBRL.bid);

        let resultado;

        if (tipo === "brl-usd") {

            resultado =
                valor / cotacao;

            resultadoMoeda.textContent =
                `US$ ${resultado.toFixed(2)} | Cotação: R$ ${cotacao.toFixed(2)}`;

        } else {

            resultado =
                valor * cotacao;

            resultadoMoeda.textContent =
                `R$ ${resultado.toFixed(2)} | Cotação: R$ ${cotacao.toFixed(2)}`;
        }

    } catch (erro) {

        resultadoMoeda.textContent =
            "Erro ao buscar a cotação.";
    }
});