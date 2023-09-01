"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
const objeto_1 = require("./objeto");
class Personagem extends objeto_1.Objeto {
    constructor() {
        super(1000, true);
        this.guildas = [];
        this.level = 1;
        this.guildas = [];
    }
    imprime() {
        console.log("Vida:", this.vida, "\nLevel:", this.level, "\nVivo: ", this.vivo, "\n");
    }
    dano(dano, alvo) {
        if (alvo instanceof Personagem) {
            for (let i = 0; i < this.guildas.length; i++) {
                if (alvo.guildas.includes(this.guildas[i])) {
                    console.log("Fogo amigo é proibido");
                    return;
                }
            }
            if (alvo != this) {
                if (alvo.level >= this.level + 5) {
                    dano = dano / 2;
                }
                if (alvo.level <= this.level - 5) {
                    dano = dano * 1.5;
                }
                alvo.vida = alvo.vida - dano;
                if (alvo.vida <= 0) {
                    alvo.vivo = false;
                    alvo.vida = 0;
                }
            }
        }
        else if (alvo instanceof objeto_1.Objeto) {
            if (alvo != this) {
                alvo.vida = alvo.vida - dano;
                if (alvo.vida <= 0) {
                    alvo.vida = 0;
                    alvo.vivo = false;
                    console.log("Alvo destruido.");
                }
            }
        }
    }
    curar(cura, alvo) {
        if (alvo instanceof Personagem) {
            for (let i = 0; i < this.guildas.length; i++) {
                if (!alvo.guildas.includes(this.guildas[i])) {
                    console.log("\nNão pode curar um inimigo");
                    return;
                }
            }
            if (alvo === this && alvo.vida > 1000) {
                alvo.vida = 1000;
            }
            if (alvo.vida > 0 && alvo.vida < 1000) {
                alvo.vida = alvo.vida + cura;
                if (alvo.vida > 1000) {
                    alvo.vida = 1000;
                }
            }
        }
        if (alvo != this) {
            console.log("Você não pode curar objetos");
        }
    }
    adicionarGuilda(guilda) {
        this.guildas.push(guilda);
        guilda.entrarGuilda(this);
    }
    deletarGuilda(guilda) {
        for (let i = 0; i < this.guildas.length; i++) {
            if (guilda == this.guildas[i]) {
                this.guildas.splice(i, 1);
                guilda.sairGuilda(this);
            }
        }
    }
}
exports.Personagem = Personagem;
//# sourceMappingURL=personagem.js.map