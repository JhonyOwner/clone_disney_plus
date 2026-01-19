// Espera a página carregar completamente antes de executar o código
document.addEventListener("DOMContentLoaded", function() {

    // Pega todos os botões das abas na página
    const buttons = document.querySelectorAll("[data-tab-button]");
    const questions = document.querySelectorAll("[data-faq-question]");

    const heroSection = document.querySelector(".hero");
    const alturaHero = heroSection.clientHeight;

    window.addEventListener("scroll", function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosHeader();
        } else {
            exibeElementosHeader();
        }
    });


    // Seção de atrações - quando a página rolar, executa a função
    for (let i = 0; i < buttons.length; i++) {
        // Quando alguém clica no botão, executa esta ação
        buttons[i].addEventListener('click', function(botao) {
            // Descobre qual aba o botão representa
            const abaAlvo = botao.target.dataset.tabButton;
            // Encontra a aba correspondente na página
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            // Esconde todas as abas que estão visíveis
            esconderTodasAbas();
            // Mostra a aba que foi clicada
            aba.classList.add("shows__list--is--active");
            // Remove o destaque de todos os botões
            removeBotaoAtivo();
            // Destaca o botão que foi clicado
            botao.target.classList.add("shows__tabs__button--is--active");
        })
    }
    // Seção de FAQ - quando alguém clicar na pergunta, abre ou fecha a resposta
    for(let i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", abreOuFechaResposta);
    }       
})

function ocultaElementosHeader() {
    const header = document.querySelector(".header");
    header.classList.add("header--is--hidden");
}
function exibeElementosHeader() {
    const header = document.querySelector(".header");
    header.classList.remove("header--is--hidden");
}

// Função para abrir ou fechar a resposta da pergunta clicada
function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is--open';
    console.log(elemento);
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

// Função para tirar o destaque de todos os botões das abas
function removeBotaoAtivo() {
    // Pega novamente todos os botões das abas
    const buttons = document.querySelectorAll("[data-tab-button]");

    // Repete para cada botão da lista, removendo o destaque
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("shows__tabs__button--is--active");
    }
}

// Função para esconder todas as abas que estão aparecendo
function esconderTodasAbas() {
    // Pega todas as abas da página
    const tabsContainer = document.querySelectorAll("[data-tab-id]");

    // Repete para cada aba da lista, escondendo ela
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove("shows__list--is--active");
    }

}