import { Personagem } from "./personagem"

export class Guilda {
    nome: string
    membros: Array<Personagem> = []

    constructor(nome: string, membros: Array<Personagem> = []) {
        this.nome = nome
        this.membros = membros
    }
    entrarGuilda(personagem: Personagem) {
        if (!personagem.guildas.includes(this)) {
            personagem.guildas.includes(this)
        }
        this.membros.push(personagem)
    }
    sairGuilda(peronsagem: Personagem) {
        for (let i:number = 0; i < this.membros.length; i++) {
            if (peronsagem == this.membros[i]) {
                this.membros.splice(i, 1)
            }
        }
    }

    imprime() {
        for(let i: number = 0; i < this.membros.length; i++) {
            console.log("Nome: ", this.nome, "\nMembros: ", this.membros.length)
        }
    }
}