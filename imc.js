const calcular = document.getElementById('calcular');
const btnLimpar = document.getElementById('limpar');
const clear = document.getElementsByClassName("clear");

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    const alturaInMeters = altura / 100;

    const valorIMC = (peso / (alturaInMeters * alturaInMeters)).toFixed(1);

    if (nome !== '' && altura !== '' && peso !== '') {

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal, parabéns!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!';
    }

}

function limpar () {
    for(var i = 0; i < clear.length; i++){
        clear[i].value="";
    }
    
}

calcular.addEventListener('click', imc);

btnLimpar.addEventListener('click', limpar);

var $rangeAltura = document.querySelector('#altura');
    $fieldAltura = document.querySelector('#rangeAltura');

$rangeAltura.addEventListener('input', function(){
    $fieldAltura.textContent = this.value;
});

var $rangePeso = document.querySelector('#peso');
    $fieldPeso = document.querySelector('#rangePeso');

$rangePeso.addEventListener('input', function(){
    $fieldPeso.textContent = this.value;
});