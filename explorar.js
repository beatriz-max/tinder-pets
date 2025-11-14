const pets = [
    {
       nome: "Kira", 
       especie: "Gato", 
       idade: 2, 
       foto:
    }, 
    {
        nome: "Nico",
        especie: "Cachorro",
        idade: 3, 
        foto:
    }
    {
        nome: "Nina", 
        especie: "Cachorro",
        idade: 4,
        foto:
    }
    {
        nome: "Cacau", 
        especie: "Papagaio",
        idade: 2,
        foto:
    }
    {
        nome: "Rajah", 
        especie: "Gato",
        idade: 2,
        foto:
    }
function exibirPets() {
    const container = document.getElementById("lista-pets");
    container.innerHTML = "";

    pets.forEach((pet) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = 
        <><img src="${pet.foto}" alt="${pet.nome}"></img><div class="card-info">
                <h3>${pet.nome}</h3>
                <p>${pet.especie}</p>
                <p>${pet.idade} ano(s)</p>
            </div></>
            ;
        container.appendChild(card);
    });
    document.addEventListener("DOMContentLoaded", exibirPets)
}
]