 

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

