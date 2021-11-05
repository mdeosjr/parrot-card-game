let numeroDeCartas = prompt("Qual é o número de cartas desejado?");
// let cartaEscolhida = [];
// let nomeCartas = [
// bobross,
// explody,
// metal,
// revertit,
// triplets,
// unicorn,
// fiesta
// ] 

while (numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 !== 0) {
    numeroDeCartas = prompt("Qual é o número desejado de cartas?")
} 

lancarCartas ();

function lancarCartas () {
    // embaralhando()
    cartas = document.querySelector(".cartas")

    for (let i = 0; i < numeroDeCartas; i++) {
        cartas.innerHTML += "BRABOS"
        // `<div class="carta" data-identifier="card">
        //     <div class="carta-frente face" data-identifier="front-face">
        //         <div class="imagem"></div>
        //     </div>
        //     <div class="carta-verso face" data-identifier="back-face">
        //         <div><img src="assets/${cartaEscolhida[i]}parrot.gif"></div>
        //     </div>
        // </div>`
    }
}

// function embaralhando () {
//     cartaEscolhida = nomeCartas.sort(comparador);
// }

// function comparador () {
//     return Math.random() - 0.5;
// }