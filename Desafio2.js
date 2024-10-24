


function ranked(vitorias, derrotas){

    let saldoVitorias = vitorias - derrotas
    let nivel = ""

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    return{
        saldoVitorias: saldoVitorias,
        nivel: nivel
    }
        
}

let calculaSaldoVitorias = ranked(140, 10)


console.log(`O Herói tem um saldo de ${calculaSaldoVitorias.saldoVitorias} e está no nível de ${calculaSaldoVitorias.nivel}.`);
