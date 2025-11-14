function exibirMatches() {
    const lista = document.getElementById("lista-matches");
    const mensagem = document.getElementById("mensagem");

    const matches = JSON.parse(localStorage.getItem("matches")) || [];

    if (matches.length === 0) {
        mensagem.textContent = "Você ainda não deu match com nenhum pet 😿";
        return;
    }

    matches.forEach((pets) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = 
        <img src="${pet.foto}" alt="${pet.nome}">
        <div class="card-info">
            <h3${pet.nome}></h3>
            <p>${pet.especie}, ${pet.idade} ano(s)</p>
        </div>
        ;

        lista.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", exibirMatches); 