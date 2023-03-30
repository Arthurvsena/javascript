const botao = document.querySelector('.botao');
var real = document.querySelector('.real');
var dolar = document.querySelector('.dolar');

botao.addEventListener('click',() => {
    var cotacao = Number(prompt('Em primeiro lugar,quando está a cotação do dolar nesse momento?'));
    var valorParaConverter = Number(prompt('Quanto você deseja converter?'));

    real.innerHTML = valorParaConverter
    var resultado = valorParaConverter * cotacao;
    dolar.innerHTML = resultado;
})