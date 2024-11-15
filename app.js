/**
 * jokenpo
 * @author Guilherme Rosa Lopes
 */

function jogar() {
    //validaço da obrigatoriedade escolha do jogador
    if (document.getElementById('pedra').checked === false &&
        document.getElementById('tesoura').checked === false &&
        document.getElementById('papel').checked === false) {
        alert("selecione uma opção")
    } else {
        //logica principal
        //sortei do computador
        let sorteio = Math.floor(Math.random() * 3) //vai sorter os numeros 0, 1, 2
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = "img/pcpedra.png"
                break
            case 1:
                document.getElementById('pc').src = "img/pcpapel.png"
                break
            case 2:
                document.getElementById('pc').src = "img/pctesoura.png"
                break
        }
        //logisca para determinar empate ou declarar o vencedor
        if ((document.getElementById("pedra").checked === true && sorteio === 0) ||
            (document.getElementById("papel").checked === true && sorteio === 1) ||
            (document.getElementById("tesoura").checked === true && sorteio === 2)) {
           // console.log ("Empate!!") perguntar para o professor, não preicosu, o console não existe para o usuario
                
            document.getElementById('resultado').innerText = "empate"

           
        }  else if ((document.getElementById("pedra").checked === true && sorteio === 2) ||
            (document.getElementById("papel").checked === true && sorteio === 0) ||
            (document.getElementById("tesoura").checked === true && sorteio === 1)) {
            document.getElementById('resultado').innerText = "jogador ganhou"
        } else {
            document.getElementById('resultado').innerText = "PC venceu"
        }
    } 
}

function limpar() {

}