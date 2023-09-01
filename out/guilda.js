"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guilda = void 0;
class Guilda {
    constructor(nome, membros = []) {
        this.membros = [];
        this.nome = nome;
        this.membros = membros;
    }
    entrarGuilda(personagem) {
        if (!personagem.guildas.includes(this)) {
            personagem.guildas.includes(this);
        }
        this.membros.push(personagem);
    }
    sairGuilda(peronsagem) {
        for (let i = 0; i < this.membros.length; i++) {
            if (peronsagem == this.membros[i]) {
                this.membros.splice(i, 1);
            }
        }
    }
    imprime() {
        for (let i = 0; i < this.membros.length; i++) {
            console.log("Nome: ", this.nome, "\nMembros: ", this.membros.length);
        }
    }
}
exports.Guilda = Guilda;
//# sourceMappingURL=guilda.js.map