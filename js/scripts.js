//declaração de variaveis
let x = document.querySelector(".x"); //pegando o elemento x
let o = document.querySelector(".o"); //pegando o elemento o
let boxes = document.querySelectorAll(".box"); //pegando os boxes de cada posição
let buttons = document.querySelectorAll("#buttons-container button"); //pegando os botoes
let mensages_container = document.querySelectorAll(".message");// pegando a mensagem
let mensage_text = document.querySelectorAll("message p"); // pegando o texto da mensagem
let secondPlayer;

// criando contador de jogadas
let player1 = 0;
let player2 = 0;

//desenvolvendo o evento de click as casas
for(i = 0; i < boxes.length; i++) {
    //quando alguém clica
    boxes[i].addEventListener("click", function(){

        let el = checkPlayer(player1, player2);
      
        //Verifica se o boxes está preenchido
        if (this.childNodes.length == 0) {
            let cloneElem = el.cloneNode(true);

            this.appendChild(cloneElem);
    
            //Contando as jogadas
            if (player1 == player2){
                player1++;
            }else {
                player2++;
            }
        }


    });
}

    // funcao para identificar jogador
    function checkPlayer (player1, player2) {
        
        if (player1 == player2) {
            //x
            el = x;
        } else{
            //o
            el = o;
        }

        return el;
    }




