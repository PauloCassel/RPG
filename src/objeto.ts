export class Objeto {
    vida: number
    vivo: boolean

    constructor(vida: number, vivo: boolean) {

        this.vida = vida
        this.vivo = vivo
    }
    imprime() {
        console.log("Vida: " + this.vida, "\nVivo: " + this.vivo,"\n")
    }
}