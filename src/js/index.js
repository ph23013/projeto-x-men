const personagens = document.querySelectorAll(".personagem");
console.log(personagens);

personagens.forEach(personagem => {
    personagem.addEventListener("mouseenter", () => {
        const personagemSelecionado = document.querySelector(".selecionado");
        personagemSelecionado.classList.remove("selecionado");
        personagem.classList.add("selecionado");
    } )
})