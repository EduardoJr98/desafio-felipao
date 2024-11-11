let nomeHeroi = "Thor";
let xpHeroi = 4500;
const mensagem = "O Herói de nome ";
const mensagem2 = " está no nível de ";

let nivel = "";

if (xpHeroi <= 1000) {
    nivel = "Ferro";
} else if (xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(mensagem + nomeHeroi + mensagem2 + nivel + ".");
