function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.3});
}

function gerarNumeroAleatorio(min, max){
    let NumeroEscolhido = parseInt(Math.random() * max + min)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == max){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(NumeroEscolhido)){
        gerarNumeroAleatorio(1, 10);
    } else {
        listaDeNumerosSorteados.push(NumeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return NumeroEscolhido;
    }
}

function limparCampoInput(){
    let campo = document.querySelector('input');
    campo.value = " "
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio(1, 10);
    limparCampoInput();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo da Adivinhação");
    exibirTextoNaTela("p", "Digite um numero de 1 a 10");
}

let listaDeNumerosSorteados = [];
let numeroAleatorio = gerarNumeroAleatorio(1, 10);
let tentativas = 1;

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Parabens, voce acertou com ${tentativas} ${palavraTentativa}`;

    if(chute == numeroAleatorio){
        exibirTextoNaTela("h1", "Acertou!!!");
        exibirTextoNaTela("p", mensagemTentativas);

        document.getElementById("reiniciar").removeAttribute("disabled");

    } else if (chute > numeroAleatorio) {
        exibirTextoNaTela("p","O numero secreto é menor");
    } else {
        exibirTextoNaTela("p", "O numero secreto é maior");
    }

    limparCampoInput();
    tentativas++;
}