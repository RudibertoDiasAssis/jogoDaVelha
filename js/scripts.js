//declaração de variaveis
let x = document.querySelector(".x"); //pegando o elemento x
let o = document.querySelector(".o"); //pegando o elemento o
let boxes = document.querySelectorAll(".box"); //pegando os boxes de cada posição
let buttons = document.querySelectorAll("#buttons-container button"); //pegando os botoes
let mensages_container = document.querySelector("#message");// pegando a mensagem
let mensage_text = document.querySelector("#message p"); // pegando o texto da mensagem
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

                if (secondPlayer == 'ai-player') {
                    // function para chamar IA
                    computerPlay()
                    player2++;
                }

            }else {
                player2++;
            }
            checkWinCondic ();
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
    function checkWinCondic () {
        let block1 = document.getElementById("block-1");
        let block2 = document.getElementById("block-2");
        let block3 = document.getElementById("block-3");
        let block4 = document.getElementById("block-4");
        let block5 = document.getElementById("block-5");
        let block6 = document.getElementById("block-6");
        let block7 = document.getElementById("block-7");
        let block8 = document.getElementById("block-8");
        let block9 = document.getElementById("block-9");

        // configuração horizontal
        if (block1.childNodes.length > 0 && block2.childNodes.length > 0 && block3.childNodes.length > 0){

            let block1Child = block1.childNodes[0].className;
            let block2Child = block2.childNodes[0].className;
            let block3Child = block3.childNodes[0].className;
        
        if (block1Child == "x" && block2Child == "x" && block3Child == "x") {
            whatWinner("x");
            } else if (block1Child == "o" && block2Child == "o" && block3Child == "o") {
                whatWinner("o");
            }
        }

        if (block4.childNodes.length > 0 && block5.childNodes.length > 0 && block6.childNodes.length > 0){

            let block4Child = block4.childNodes[0].className;
            let block5Child = block5.childNodes[0].className;
            let block6Child = block6.childNodes[0].className;

        if (block4Child == "x" && block5Child == "x" && block6Child == "x") {
            whatWinner("x");
            }else if (block4Child == "o" && block5Child == "o" && block6Child == "o") {
                whatWinner("o");
            }
        }

        if (block7.childNodes.length > 0 && block8.childNodes.length > 0 && block9.childNodes.length > 0){

            let block7Child = block7.childNodes[0].className;
            let block8Child = block8.childNodes[0].className;
            let block9Child = block9.childNodes[0].className;

        if (block7Child == "x" && block8Child == "x" && block9Child == "x") {
            whatWinner("x");
            }else if (block7Child == "o" && block8Child == "o" && block9Child == "o") {
                whatWinner("o");
            }
        }
    
     // configuração vertical
     if (block1.childNodes.length > 0 && block4.childNodes.length > 0 && block7.childNodes.length > 0){

        let block1Child = block1.childNodes[0].className;
        let block4Child = block4.childNodes[0].className;
        let block7Child = block7.childNodes[0].className;

    if (block1Child == "x" && block4Child == "x" && block7Child == "x") {
        whatWinner("x");
        }else if (block1Child == "o" && block4Child == "o" && block7Child == "o") {
            whatWinner("o");
        }
    }
    if (block2.childNodes.length > 0 && block5.childNodes.length > 0 && block8.childNodes.length > 0){

        let block2Child = block2.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block8Child = block8.childNodes[0].className;

    if (block2Child == "x" && block5Child == "x" && block8Child == "x") {
        whatWinner("x");
        }else if (block2Child == "o" && block5Child == "o" && block8Child == "o") {
            whatWinner("o");
        }
    }   
        if (block3.childNodes.length > 0 && block6.childNodes.length > 0 && block9.childNodes.length > 0){

            let block3Child = block3.childNodes[0].className;
            let block6Child = block6.childNodes[0].className;
            let block9Child = block9.childNodes[0].className;
    
        if (block3Child == "x" && block6Child == "x" && block9Child == "x") {
            whatWinner("x");
            }else if (block3Child == "o" && block6Child == "o" && block9Child == "o") {
                whatWinner("o");
            }
        }   
        // Configurando Diagonal
        if (block1.childNodes.length > 0 && block5.childNodes.length > 0 && block9.childNodes.length > 0){

            let block1Child = block1.childNodes[0].className;
            let block5Child = block5.childNodes[0].className;
            let block9Child = block9.childNodes[0].className;
    
        if (block1Child == "x" && block5Child == "x" && block9Child == "x") {
            whatWinner("x");
            }else if (block1Child == "o" && block5Child == "o" && block9Child == "o") {
                whatWinner("o");
            }
        }
        if (block3.childNodes.length > 0 && block5.childNodes.length > 0 && block7.childNodes.length > 0){

                let block3Child = block3.childNodes[0].className;
                let block5Child = block5.childNodes[0].className;
                let block7Child = block7.childNodes[0].className;
        
         if (block3Child == "x" && block5Child == "x" && block7Child == "x") {
            whatWinner("x");
            }else if (block3Child == "o" && block5Child == "o" && block7Child == "o") {
                whatWinner("o");
            }
        }
        // Empate
        let conuter = 0;
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].childNodes[0] != undefined) {
                conuter++;
            }
        }
        if (conuter == 9) {
            whatWinner("deu velha");
        }
    }
        // Resultado no placar e mensagem de vencedor
        function whatWinner(winner) {
            let scoreboard1 = document.querySelector("#scoreboard-1");
            let scoreboard2 = document.querySelector("#scoreboard-2");
            let msg = "";
            container.classList.add("hide");

            if(winner == "x"){
                scoreboard1.textContent = parseInt(scoreboard1.textContent) + 1;
                    msg = "O jogador X venceu";
            } else if(winner == "o") {
                scoreboard2.textContent = parseInt(scoreboard2.textContent) + 1;
                msg = "O jogador O venceu";
            } else {
                msg = "Deu empate";
            }

        //Exibindo as mensagens na tela
        mensage_text.innerHTML = msg;
        mensages_container.classList.remove("hide");

        
        //tempo de mensaggem
        setTimeout(function(){
            container.classList.add("hide");
        }, 1000);

        setTimeout(function(){
            mensages_container.classList.add("hide");
            container.classList.remove("hide");
        }, 1000);
        


        // Zerar o placar
        player1 = 0;
        player2 = 0;

        // limpando o jogo
        let boxeToRemove = document.querySelectorAll(".box div");

        for (let i = 0; i < boxeToRemove.length; i++) {
        boxeToRemove[i].parentNode.removeChild(boxeToRemove[i]);
        }
    }    
    //Selecionando jogadores
    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click", function() {

        secondPlayer = this.getAttribute("id");

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = "none";
        }

        setTimeout(function() {
            let container = document.querySelector('#container');
            container.classList.remove("hide");
        }, 300);
    })

 }
//Logica de funcionamento da jogada automática
    function computerPlay() {
    let cloneO = o.cloneNode(true);
    let counter = 0;
    let filled = 0;

    for(let i = 0; i < boxes.length; i++) {
        let randowNumber = Math.floor(Math.random() * 5);

        if (boxes[i].childNodes[0] == undefined) {
            if(randowNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
            
        }else {
                filled++;
            }
        }
        if (counter == 0  && filled < 9) {
        computerPlay();
    }

}

