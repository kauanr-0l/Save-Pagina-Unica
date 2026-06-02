const btnDesafio1 = document.querySelector("#btnDesafio1")
const btnDesafio2 = document.querySelector("#btnDesafio2")
const btnDesafio3 = document.querySelector("#btnDesafio3")
const btnDesafio4 = document.querySelector("#btnDesafio4")
const btnDesafio5 = document.querySelector("#btnDesafio5")
const btnDesafio6 = document.querySelector("#btnDesafio6")



const conversor = document.getElementById("conversor")
const imc = document.getElementById("imc")
const temperatura = document.getElementById("temperatura")
const velocidade = document.getElementById("velocidade")
const massa = document.getElementById("massa")
const regra = document.getElementById("regra-de-tres")



const desafios = [
  conversor,
  imc,
  temperatura,
  velocidade,
  massa,
  regra
]


btnDesafio1.addEventListener("click", () => {

    conversor.classList.add("ativo")

})

function mostrarDesafio(desafioAtivo) {
  desafios.forEach(item => {
    item.classList.remove("ativo")
  })

  desafioAtivo.classList.add("ativo")
}