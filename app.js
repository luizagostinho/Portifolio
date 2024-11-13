alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 5;
console.log("numeroSecreto")
let chute = prompt("Escolha um numero entre 1 e 10");

// se o chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o numero secreto ${numeroSecreto}`)
} else {
    alert("Você errou :(")
}