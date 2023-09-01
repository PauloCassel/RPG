import { Melee } from "./melee"
import { Ranged } from "./ranged"
import { Guilda } from "./guilda"
import { Objeto } from "./objeto"

//Servos
let Lancer = new Melee
let Caster = new Ranged
let Assassin = new Melee
let Berserker = new Melee
let Rider = new Melee
let Archer = new Ranged
//Mestres
let Shirou = new Melee
let Kirei = new Melee
let Emiya = new Melee

/////////////////////////////////////////////////////////////////////////////////////

console.log("Iteração 1\n")//Iteração 1

Assassin.atacar(1500, Lancer, 1)//Teste de Ataque e Morte
Lancer.imprime()

Assassin.atacar(500, Caster, 1)
Caster.curar(300, Caster) //Teste de Cura
Caster.imprime()

////////////////////////////////////////////////////////////////////////////////////

console.log("Iteração 2\n")//Iteração 2

Caster.atacar(500, Caster, 1)//Teste de atacar a si mesmo
Caster.imprime()

Caster.curar(500, Assassin)//Teste de curar outra pessoa
Assassin.imprime()

////////////////////////////////////////////////////////////////////////////////////

console.log("Iteração 3\n")//Iteração 3

Archer.atacar(500, Berserker, 13)//Teste de Ataque (Longa distancia ataca uma classe corpo-a-corpo.)
Berserker.imprime()

Berserker.atacar(500, Archer, 10)//Teste de Ataque (Corpo-a-corpo ataca uma classe Longa distancia.)
Archer.imprime()

////////////////////////////////////////////////////////////////////////////////////

console.log("Iteração 4\n")//Iteração 4

let Mestres = new Guilda("Mestres")//Criando Guilda

Shirou.adicionarGuilda(Mestres)//Colocando personagens na guilda
console.log("O Personagem 'Shirou' entrou na guilda Mestres.\n")

Emiya.adicionarGuilda(Mestres)
console.log("O Personagem 'Emiya' entrou na guilda Mestres.\n")

Kirei.adicionarGuilda(Mestres)
console.log("O Personagem 'Kirei' entrou na guilda Mestres.\n")

Shirou.atacar(500, Emiya, 1)//Teste de atacar alguém da mesma guilda.
Emiya.imprime()

Rider.atacar(500, Emiya, 1)//Teste de curar alguém da mesma guilda.
Shirou.curar(300, Emiya)
Emiya.imprime()

Mestres.imprime()

Kirei.deletarGuilda(Mestres)

Mestres.imprime()

//////////////////////////////////////////////////////////////////////////////////

console.log("\nIteração 5\n")//Iteração 5

let Arvore = new Objeto(2000, true)
Arvore.imprime()

//Objetos não podem entrar em guilda, curar e nem atacar.

Kirei.atacar(2000, Arvore, 1)
Arvore.imprime()