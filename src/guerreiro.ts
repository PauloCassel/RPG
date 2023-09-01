import { Objeto } from "./objeto";
import { Personagem } from "./personagem";

export class Guerreiro extends Personagem {
    alcance: number;

    constructor(alcance:number) {
        super()
        this.alcance = alcance
    }
    atacar(dano: number, alvo: Objeto, distancia:number) {
        if(this.alcance > distancia) {
            this.dano(dano, alvo)
        }
    }
}