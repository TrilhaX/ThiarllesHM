let Foco = document.getElementById("input1");
let Distancia = document.getElementById("input2");
let Altura = document.getElementById("input3");
let resultado = document.querySelector("span.resultado");

let focoValue = parseInt(Foco.value), distanciaValue = parseInt(Distancia.value), alturaValue = parseInt(Altura.value), 
altura, calculo, tipoImagem, imagem, Calculo2, Calculo3;

function checkFoco() {
    if (focoValue > 0) {
        foco = "Côncavo";
    } else if (focoValue < 0) {
        foco = "Convexo";
    } else {
        foco = "Plano";
    }
}

function checkDistancia() {
    if (distanciaValue > 0) {
        distancia = "Possível ser feito";
    } else {
        distancia = "Quebrará o espelho";
    }
}

function checkAltura() {
    if (alturaValue > 0) {
        altura = "Objeto Para Cima";
    } else if (alturaValue < 0) {
        altura = "Objeto Para Baixo";
    } else {
        altura = "Objeto no Ponto";
    }
}

function checkImagem() {
    if (focoValue === distanciaValue) {
        imagem = "Imagem Imprópria";
    } else {
        imagem = "Imagem Própria";
    }
}

function calcularAmpliacao() {
    if (focoValue !== distanciaValue) {
        calculo = (focoValue * distanciaValue) / (focoValue - distanciaValue);
        if (calculo > 0) {
            tipoImagem = "Imagem Real (Fora do Espelho)";
        } else if (calculo < 0) {
            tipoImagem = "Imagem Virtual (Dentro do Espelho)";
        } else {
            tipoImagem = "Imagem Imprópria";
        }
    } else {
        calculo = "Imagem Imprópria";
        tipoImagem = "Imagem Imprópria";
    }
}

function calcularAmpliacaoLente() {
    if (focoValue !== distanciaValue) {
        let calculoLente = (focoValue * distanciaValue) / (focoValue - distanciaValue);
        let calculo2 = (-calculoLente / distanciaValue);

        if (calculo2 > 0 && calculo2 !== 1) {
            Calculo2 = `Imagem Direita, A imagem é ${calculo2} vezes a altura do objeto.`;
        } else if (calculo2 === 1) {
            Calculo2 = `Imagem Direita, A imagem é igual a altura do objeto.`;
        } else {
            Calculo2 = `Imagem Invertida, A imagem é ${calculo2} vezes a altura do objeto.`;
        }
    } else {
        Calculo2 = "Imagem Imprópria";
    }
}

function alturaDaImagem() {
    if (focoValue !== distanciaValue) {
        let calculoLente = (focoValue * distanciaValue) / (focoValue - distanciaValue);
        let calculo2 = (-calculoLente / distanciaValue);
        let calculo3 = calculo2 * alturaValue;

        Calculo3 = calculo3;
    } else {
        Calculo3 = "Imagem Imprópria";
    }
}

document.getElementById("buttoncalcular").addEventListener("click", function() {
    units = document.getElementsByClassName("units");
    focoValue = convert(Foco.value, units[0].value);
    distanciaValue = convert(Distancia.value, units[1].value);
    alturaValue = convert(Altura.value, units[2].value);
    checkImagem();
    calcularAmpliacaoLente();
    checkFoco();
    checkDistancia();
    checkAltura();
    calcularAmpliacao();
    alturaDaImagem();
    espelhoEstado()
    result();
});

function espelhoEstado(){
    if(tipoImagem === "Imagem Imprópria"){
        document.body.style.backgroundImage = "url(imagens/images.jpg)"
        var audio = new Audio("audios/breaking-glass-83809.mp3");
        audio.play();
    }else{
        document.body.style.backgroundImage = "url(imagens/pexels-pixabay-531880.jpg)"
    }
}

function visible(element, display = "block") {
    element.style.visibility = "visible"
    element.style.display = display
}

function convert(value, unit) {
    outputUnit = document.querySelector("#units-res").value;
    return value * unit/outputUnit
}

function result() {
    visible(document.querySelector("h1.resultado"))
    visible(resultado)
    if (Foco.value && Distancia.value && Altura.value) {
        resultado.innerHTML = `Tipo de espelho: ${foco}<br>Distância Apropriada?: ${distancia}<br>Altura do Objeto: ${altura}<br>Ampliação do Espelho: ${calculo}<br>Tipo da imagem: ${tipoImagem}<br>Ampliação de Lente: ${Calculo2}<br> A altura da imagem é: ${Calculo3}`;
    } else {
        resultado.innerHTML = "Preencha todos os campos!!";
    }
}