const botao = document.querySelector('.botao');

botao.addEventListener('click', () => {
    var produto = prompt("Qual produto você quer comprar?");
    var preco = prompt('Qual o valor dele?');
    var valorParaPagar = prompt('Qual o valor você deu para comprar?')

    alert(`Você comprou o ${produto} que custou R$${preco}\nDeu R$${valorParaPagar} em dinheiro e vai receber R$${valorParaPagar - preco} de troco!\nVolte Sempre!`)
});