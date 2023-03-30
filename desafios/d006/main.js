const botao = document.querySelector('.botao');
const resposta = document.querySelector('.resposta');
const container = document.querySelector('.container')

botao.addEventListener('click', () => {
    var temperatura = Number(prompt('Digite uma temperatura em Cº (Celsius)'));

    const novoTitulo = document.createElement('h1')
    container.appendChild(novoTitulo)
    novoTitulo.innerHTML = `A distancia de ${temperatura} metros corresponde a...`
    resposta.innerHTML=`
        ${temperatura * 1.8 + 32}º Graus Fahrenheit(Fº)<br>
        ${temperatura + 273.15}º Graus Kelvin <br>
    `
})