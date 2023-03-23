var botao = document.getElementById('botao');

botao.addEventListener('click', () => {
    var nome = prompt('Qual seu nome?');
    var idade = prompt(`Ok ${nome}, agora me diga sua idade...`);
    alert(`Acabei de conhecer o(a) ${nome} que tem ${idade} anos,seja muito bem vindo(a)!`)
});
