// fist character
const personagem = prompt("Qual o nome do seu persongem?")
const poder = Number(prompt("Qual o poder de ataque do seu personagem?"))
// second character
const personagem1 = prompt("Qual o nome você dará ao personagem que defenderá?")
let vida = Number(prompt("Quanto de vida esse personagem tem?"))
const defesa = Number(prompt("Qual o poder de defesa desse personagem?"))
const escudo = confirm("Esse personagem tem escudo?")

// fist character
document.writeln("<br>O nome do seu personagem é " + personagem)
document.writeln("<br>O poder do seu personagem é " + poder)
// second character
document.writeln("<br><hr>O nome do personagem que defenderá é " + personagem1)
document.writeln("<br>A vida dele é " + vida)
document.writeln("<br>O poder de defesa é " + defesa)

if(poder > defesa && escudo === false){
   let combate1 = poder - defesa 
   vida = vida - combate1
    document.write("<br><hr>O dano causado não tendo escudo em " + personagem1 + " foi " + combate1 + "<br> e a vida de " + personagem1 + " está em " + vida )
}else if(poder > defesa && escudo === true){
    let combate2 = poder - defesa
    let diferenca = combate2 / 2
    vida = vida - diferenca
    document.writeln("<br><hr>O dano causado tendo escudo foi " +  diferenca + "<br> e a vida de " + personagem1 + " está em " + vida)
}if(poder < defesa){
    document.writeln("<br><hr> O dano sofrido por " + personagem1  + " foi 0<br> e a vida de " + personagem1 + " está em " + vida )
}
