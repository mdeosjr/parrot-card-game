let numeroDeCartas = parseInt(prompt("Qual é o número de cartas desejado?"));
let cartasSorteadas = [];
let nomeCartas = [
"bobross",
"explody",
"metal",
"revertit",
"triplets",
"unicorn",
"fiesta"
] 
let carta1 = null; 
let carta2 = null;
let cartaEscolhida = 0;
let qteJogadas = 0;
const qteTotal = document.querySelectorAll(".carta-Selecionada").length;

while (numeroDeCartas < 4 || numeroDeCartas > 14 || numeroDeCartas % 2 !== 0) {
    numeroDeCartas = prompt("Qual é o número desejado de cartas?")
} 

lancarCartas ();

function comparador () {
    return Math.random() - 0.5;
}

function embaralhando () {
    nomeCartas.sort(comparador);
}

function lancarCartas () {
    embaralhando()
    let cartas = document.querySelector(".cartas")

    if (numeroDeCartas === 8) {
        cartas.style.width = "700px"
    } else if (numeroDeCartas === 10) {
        cartas.style.width = "800px"
    } else if (numeroDeCartas === 14) {
        cartas.style.width = "1100px"
    }

    for (let i = 0; i < (numeroDeCartas/2); i++) {
        cartasSorteadas.push(nomeCartas[i]);
        cartasSorteadas.push(nomeCartas[i]);
        cartasSorteadas.sort(comparador);
    }
    
    cartasSorteadas.sort(comparador);

    for (let i = 0; i < numeroDeCartas; i++) {
        cartas.innerHTML +=
        `<div class="carta" data-identifier="card" onclick="cartaVirada(this)">
            <div  class="carta-frente face" data-identifier="front-face">
                <img src="assets/front.png">
            </div>
            <div class="carta-verso face" data-identifier="back-face">   
                <img src="assets/${cartasSorteadas[i]}parrot.gif">
            </div>        
        </div>`
    }
}

function cartaVirada (carta) {
    carta.classList.add("carta-Selecionada"); 
    cartaEscolhida++;

    if (cartaEscolhida === 1) {
        carta1 = carta;
        qteJogadas++;
    }

    if (cartaEscolhida === 2) {
        carta2 = carta;
        qteJogadas++;

        if (carta1.innerHTML === carta2.innerHTML) {
            cartaEscolhida = 0;
            carta1.removeAttribute("onclick");
            carta2.removeAttribute("onclick");
        } else {
            setTimeout (delay, 1000);
            cartaEscolhida = 0;
        }
    }
    finalizar();
}

function delay () {
    carta1.classList.remove("carta-Selecionada");
    carta2.classList.remove("carta-Selecionada");
}

function finalizar () {
    if (qteTotal === numeroDeCartas) {
        alert("Você venceu");
    }
}