const botao = document.querySelector('.botao');

botao.addEventListener('click', () => {
    var numero = Number(prompt("Me informe um numero:"));
    alert(`Antes do numero: ${numero}, temos o numero: ${numero - 1}\nDepois do numero: ${numero}, temos o numero: ${numero + 1}`);
})

