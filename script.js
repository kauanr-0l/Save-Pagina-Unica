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

// Calculo IMC//

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc, genero) {
  if (genero === "masculino") {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc <= 24.9) return "Peso normal";
    if (imc <= 29.9) return "Sobrepeso";

    return "Obesidade";
  }

  if (imc < 18.5) return "Abaixo do peso";
  if (imc <= 24.9) return "Peso normal";
  if (imc <= 29.9) return "Sobrepeso";

  return "Obesidade";
}

const btnImc = document.querySelector("#calcularImc");

if (btnImc) {
  btnImc.addEventListener("click", () => {
    const peso = Number(document.querySelector("#peso").value);

    const altura = Number(document.querySelector("#altura").value);

    const generoSelecionado = document.querySelector(
      'input[name="genero"]:checked',
    );

    const resultadoImc = document.querySelector("#resultadoImc");

    if (!peso || !altura || !generoSelecionado) {
      resultadoImc.textContent = "Preencha todos os campos.";

      return;
    }

    const imc = calcularIMC(peso, altura);

    const classificacao = classificarIMC(imc, generoSelecionado.value);

    resultadoImc.textContent = `IMC: ${imc.toFixed(2)} | ${classificacao}`;
  });
}

//Money

const btnConverterMoeda = document.querySelector("#btnConverterMoeda");

if (btnConverterMoeda) {
  btnConverterMoeda.addEventListener("click", async () => {
    const valor = Number(document.querySelector("#valorMoeda").value);

    const tipo = document.querySelector("#tipoConversao").value;

    const resultadoMoeda = document.querySelector("#resultadoMoeda");

    if (!valor) {
      resultadoMoeda.textContent = "Digite Um Valor";

      return;
    }

    try {
      const resposta = await fetch(
        "https://economia.awesomeapi.com.br/json/last/USD-BRL",
      );

      const dados = await resposta.json();

      const cotacao = Number(dados.USDBRL.bid);

      let resultado;
      if (tipo === "brl-usd") {
        resultado = valor / cotacao;

        resultadoMoeda.textContent = `US$ ${resultado.toFixed(2)} | Cotação: R$ ${cotacao.toFixed(2)}`;
      } else {
        resultado = valor * cotacao;

        resultadoMoeda.textContent = `R$ ${resultado.toFixed(2)} | Cotação: R$ ${cotacao.toFixed(2)}`;
      }
    } catch {
      resultadoMoeda.textContent = "Erro ao buscar Cotação";
    }
  });
}

// Hot temperatura

const btnTemperatura = document.querySelector("#btnTemperatura");

if (btnTemperatura) {
  btnTemperatura.addEventListener("click", () => {
    const valor = Number(document.querySelector("#valorTemperatura").value);

    const tipo = document.querySelector("#tipoTemperatura").value;
    const resultadoTemperatura = document.querySelector(
      "#resultadoTemperatura",
    );

    let resultado;
    if (tipo === "c-f") {
      resultado = (valor * 9) / 5 + 32;

      resultadoTemperatura.textContent = `${resultado.toFixed(2)} °F`;
    } else {
      resultado = ((valor - 32) * 5) / 9;

      resultadoTemperatura.textContent = `${resultado.toFixed(2)} °C`;
    }
  });
}

//Velocidade

const btnVelocidade =
    document.querySelector("#btnVelocidade");


if (btnVelocidade) {

    btnVelocidade.addEventListener("click", () => {

       const valor =
            Number(
                document.querySelector("#valorVelocidade").value
            );

              const tipo =
            document.querySelector("#tipoVelocidade").value;

              const resultadoVelocidade =
            document.querySelector("#resultadoVelocidade");

        let resultado 
          if (tipo === "kmh-mph") {

    resultado =
        valor * 0.621371;

    resultadoVelocidade.textContent =
        `${resultado.toFixed(2)} mph`;

} else {

    resultado =
        valor / 0.621371;

    resultadoVelocidade.textContent =
        `${resultado.toFixed(2)} km/h`;
} 
    });
}



// é mt é massa
const btnMassa =
    document.querySelector("#btnMassa");

if (btnMassa) {

   btnMassa.addEventListener("click", () => {

    const valor =
            Number(
                document.querySelector("#valorMassa").value
            );

            const tipo =
            document.querySelector("#tipoMassa").value;

             const resultadoMassa =
            document.querySelector("#resultadoMassa");

        let resultado;

         if (tipo === "kg-lbs") {

    resultado =
        valor * 2.20462;

    resultadoMassa.textContent =
        `${resultado.toFixed(2)} lbs`;

} else {

    resultado =
        valor / 2.20462;

    resultadoMassa.textContent =
        `${resultado.toFixed(2)} kg`;
}


    });}



  const btnRegraTres =
    document.querySelector("#btnRegraTres");

if (btnRegraTres) {

    btnRegraTres.addEventListener("click", () => {

        const a =
            Number(document.querySelector("#valorA").value);

        const b =
            Number(document.querySelector("#valorB").value);

        const c =
            Number(document.querySelector("#valorC").value);

        const resultado =
            document.querySelector("#resultadoRegraTres");


            const resultaConta = (c * b) /a;

            console.log(resultaConta);
            
            if(!isFinite(resultaConta)) {
              
                document.getElementById("resultadoRegraTres").innerText =
                    `Não é possível efetuar o calculo. Colocar um valor Válido.`

            } 
              else {
              document.getElementById("resultadoRegraTres").innerText = resultaConta.toFixed(2);
            }

    });

}











const btnTema =
    document.querySelector("#btnTema");

btnTema.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (
        document.body.classList.contains("dark-mode")
    ) {

        btnTema.textContent =
            "☀️ Modo Claro";

    } else {

        btnTema.textContent =
            "🌙 Modo Escuro";
    }
});
