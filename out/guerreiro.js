"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
const personagem_1 = require("./personagem");
class Guerreiro extends personagem_1.Personagem {
    constructor(alcance) {
        super();
        this.alcance = alcance;
    }
    atacar(dano, alvo, distancia) {
        if (this.alcance > distancia) {
            this.dano(dano, alvo);
        }
    }
}
exports.Guerreiro = Guerreiro;
//# sourceMappingURL=guerreiro.js.map