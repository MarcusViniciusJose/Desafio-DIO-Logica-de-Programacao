let heroi = "Marcus"
let nivelHeroi = ""
let xp = 12000

switch(true){
    case (xp < 1000):
        nivelHeroi = "Ferro";
        break;
    case (xp >= 1001 && xp <= 2000):
        nivelHeroi = "Bronze";
        break;
    case (xp >= 2001 && xp <= 5000):
        nivelHeroi = "Prata";
        break;
    case (xp >= 5001 && xp <= 7000):
        nivelHeroi = "Ouro";
        break;
    case (xp >= 7001 && xp <= 8000):
        nivelHeroi = "Platina";
        break;
    case (xp >= 8001 && xp <= 9000):
        nivelHeroi = "Ascendente";
        break;
    case (xp >= 9001 && xp <= 10000):
        nivelHeroi = "Imortal";
        break;
    case (xp >= 10001):
        nivelHeroi = "Radiante";
        break;
    default:
        nivelHeroi = "XP inválida";
}

console.log(`O Herói de nome ${heroi} está no nível de ${nivelHeroi}`)