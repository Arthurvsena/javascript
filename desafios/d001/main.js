var botoes = document.querySelectorAll('.botao');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        alert(`Você clicou no botão ${Array.from(botoes).indexOf(botao) + 1}!`);
    })
})