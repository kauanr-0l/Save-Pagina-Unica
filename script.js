 

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




function calclarIMC(peso, altura) {
return peso / (altura * altura);
}

function classificarIMC(imc, genero){

    if (genero === "masculino") {

        if (imc < 18.5) return "Abaixo do peso";
        if (imc <= 24.9) return "Peso normal";
        if (imc <= 29.9) return "Sobrepeso";
        
        return "Obsesidade";

    }

    if (imc < 18.5) return "Abaixo do peso";
    if (imc <= 24.9) return "Peso normal";
    if (imc <= 29.9) return "Sobrepeso";
    
    return "Obsesidade";



}


const btnIMC = document.querySelector("#calcularImc");

if (btnIMC){
    
}
