class Heroi {
    constructor(nome, idade, tipo) {

        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();  
    }

    atacar() {

        let ataque;
        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        } else {
            ataque = "realizou um ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const heroiMago = new Heroi("Patolino", 300, "mago");
heroiMago.atacar();  

const heroiGuerreiro = new Heroi("Garen", 35, "guerreiro");
heroiGuerreiro.atacar();  

const heroiMonge = new Heroi("Aang", 17, "monge");
heroiMonge.atacar();  

const heroiNinja = new Heroi("Naruto", 16, "ninja");
heroiNinja.atacar();  