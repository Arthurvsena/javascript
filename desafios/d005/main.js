const botao = document.querySelector('.botao');
const resposta = document.querySelector('.resposta');
const container = document.querySelector('.container')

botao.addEventListener('click', () => {
    var distancia = prompt('Digite uma distancia em metros(m)');

    const novoTitulo = document.createElement('h1')
    container.appendChild(novoTitulo)
    novoTitulo.innerHTML = `A distancia de ${distancia} metros corresponde a...`
    resposta.innerHTML=`
        ${distancia / 1000} quilômetros(km)<br>
        ${distancia / 100} hectômetros(hm)<br>
        ${distancia / 10} decamêtros (dam)<br>
        ${distancia * 10} decímetros (dm)<br>
        ${distancia * 100} centímetros (cm)<br>
        ${distancia * 1000} milímetros (mm)<br>
    `
})