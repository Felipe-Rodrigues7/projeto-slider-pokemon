/* 
OBJETIVO 1 - Quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
    - Passo 1 - Dar um jeito de pegar o elemento HTML da seta avançar
    - Passo 2 - Dar um jeito de identificar o clique do usuário na seta avançar
     - Passo 3 - Fazer aparecer o próximo cartão na lista
     - Passo 4 - Buscar o cartão que está selecionado e esconder

    OBJETIVO 2 - Quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
    - Passo 1 - Dar um jeito de pegar o elemento HTML da seta voltar
    - Passo 2 - Dar um jeito de identificar o clique do usuário na seta voltar
     - Passo 3 - Fazer aparecer o cartão anterior na lista
     - Passo 4 - Buscar o cartão que está selecionado e esconder 
*/


const btnAvancar = document.getElementById('btn-avancar')
const btnVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
     const cartaoSelecionado = document.querySelector('.selecionado')
     cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao) {
    cartoes[cartaoAtual].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function () {    
    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener('click', function () {
    if(cartaoAtual === 0) return

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual); 
});