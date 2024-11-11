let nomeHeroi = prompt("Digite o nome do herói:");
let xpHeroi;
while (true) {
  xpHeroi = parseInt(prompt("Digite o XP do herói:"), 10);
  
    if (Number.isInteger(xpHeroi) && xpHeroi >= 0) {
    break;
  } else {
    alert("Por favor, insira um número natural válido para o XP.");
  }
}

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

alert(mensagem + nomeHeroi + mensagem2 + nivel + ".");
