let Foco = document.getElementById("input1");
let Distancia = document.getElementById("input2");
let Altura = document.getElementById("input3");
let resultado = document.getElementById("resultado");

let foco;
let distancia;
let altura;
let calculo;
let tipoImagem;
let imagem;
let Calculo2;
let Calculo3;

function checkFoco() {
    let focoValue = parseInt(Foco.value);
    if (focoValue > 0) {
        foco = "Côncavo";
    } else if (focoValue < 0) {
        foco = "Convexo";
    } else {
        foco = "Plano";
    }
}

function checkDistancia() {
    let distanciaValue = parseInt(Distancia.value);
    if (distanciaValue > 0) {
        distancia = "Possível ser feito";
    } else {
        distancia = "Quebrará o espelho";
    }
}

function checkAltura() {
    let alturaValue = parseInt(Altura.value);
    if (alturaValue > 0) {
        altura = "Objeto Para Cima";
    } else if (alturaValue < 0) {
        altura = "Objeto Para Baixo";
    } else {
        altura = "Objeto no Ponto";
    }
}

function checkImagem() {
    let focoValue = parseInt(Foco.value);
    let distanciaValue = parseInt(Distancia.value);
    
    if (focoValue === distanciaValue) {
        imagem = "Imagem Imprópria";
    } else {
        imagem = "Imagem Própria";
    }
}

function calcularAmpliação() {
    let focoValue = parseInt(Foco.value);
    let distanciaValue = parseInt(Distancia.value);
    
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

function calcularAmpliaçãoLente() {
    let focoValue = parseInt(Foco.value);
    let distanciaValue = parseInt(Distancia.value);
    
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
    let focoValue = parseInt(Foco.value);
    let distanciaValue = parseInt(Distancia.value);
    let alturaValue = parseInt(Altura.value);
    
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
    checkImagem();
    calcularAmpliaçãoLente();
    checkFoco();
    checkDistancia();
    checkAltura();
    calcularAmpliação();
    alturaDaImagem();
    result();
});

function result() {
    if (Foco.value !== "" && Distancia.value !== "" && Altura.value !== "") {
        resultado.innerHTML = `Tipo de espelho: ${foco}<br>Distância Apropriada?: ${distancia}<br>Altura do Objeto: ${altura}<br>Ampliação do Espelho: ${calculo}<br>Tipo da imagem: ${tipoImagem}<br>Ampliação de Lente: ${Calculo2}<br> A altura da imagem é: ${Calculo3}`;
    } else {
        resultado.innerHTML = "Preencha todos os campos!!";
    }
}