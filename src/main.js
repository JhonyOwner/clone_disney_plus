// =====================================
// MAIN.JS - LÓGICA DO PROJETO
// =====================================
// Este arquivo contém toda a interatividade do clone Disney+

// ===== EVENTO: DOCUMENTO CARREGADO =====
// Espera o HTML carregar completamente antes de executar qualquer código
// Isso garante que todos os elementos HTML estejam disponíveis
document.addEventListener("DOMContentLoaded", function() {

    // ===== SELETORES PRINCIPAIS =====
    // Pega todos os botões das abas (Em breve, Populares, Star+)
    const buttons = document.querySelectorAll("[data-tab-button]");
    
    // Pega todas as perguntas do FAQ
    const questions = document.querySelectorAll("[data-faq-question]");

    // Pega a seção hero (aquela com o banner grande no topo)
    const heroSection = document.querySelector(".hero");
    
    // Calcula a altura da seção hero em pixels
    const alturaHero = heroSection.clientHeight;

    // ===== EVENTO: SCROLL (ROLAGEM DA PÁGINA) =====
    // Quando o usuário rola a página, verifica a posição e mostra/oculta o header
    window.addEventListener("scroll", function() {
        // Pega a posição atual da rolagem em pixels
        const posicaoAtual = window.scrollY;

        // Se ainda está vendo o hero (não rolou o suficiente)
        if (posicaoAtual < alturaHero) {
            ocultaElementosHeader(); // Oculta logo e botões do header
        } else {
            exibeElementosHeader(); // Mostra logo e botões do header
        }
    });

    // ===== SEÇÃO: ABAS DE ATRAÇÕES (Em breve, Populares, Star+) =====
    // Percorre cada botão de aba
    for (let i = 0; i < buttons.length; i++) {
        // Quando o usuário clica em um botão da aba
        buttons[i].addEventListener('click', function(botao) {
            // Pega o ID da aba alvo (ex: "em_breve", "populares", "star_plus")
            const abaAlvo = botao.target.dataset.tabButton;
            
            // Encontra o elemento HTML que corresponde a essa aba
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            
            // Esconde todas as abas que estão visíveis
            esconderTodasAbas();
            
            // Mostra a aba que foi clicada adicionando a classe ativa
            aba.classList.add("shows__list--is--active");
            
            // Remove o destaque de todos os botões
            removeBotaoAtivo();
            
            // Destaca o botão que foi clicado adicionando a classe ativa
            botao.target.classList.add("shows__tabs__button--is--active");
        })
    }
    
    // ===== SEÇÃO: FAQ (Perguntas e Respostas) =====
    // Percorre cada pergunta do FAQ
    for(let i = 0; i < questions.length; i++) {
        // Quando o usuário clica em uma pergunta, abre ou fecha a resposta
        questions[i].addEventListener("click", abreOuFechaResposta);
    }       
})

// ===== FUNÇÃO: OCULTAR ELEMENTOS DO HEADER =====
// Oculta o logo e os botões do header quando está na seção hero
function ocultaElementosHeader() {
    const header = document.querySelector(".header");
    // Adiciona a classe que oculta (opacity: 0) o header
    header.classList.add("header--is--hidden");
}

// ===== FUNÇÃO: EXIBIR ELEMENTOS DO HEADER =====
// Exibe o logo e os botões do header quando sai da seção hero
function exibeElementosHeader() {
    const header = document.querySelector(".header");
    // Remove a classe que oculta, tornando o header visível novamente
    header.classList.remove("header--is--hidden");
}

// ===== FUNÇÃO: ABRIR OU FECHAR RESPOSTA DO FAQ =====
// Alterna entre abrir e fechar a resposta de uma pergunta
// Quando clica na pergunta, a classe "faq__questions__item--is--open" é adicionada/removida
function abreOuFechaResposta(elemento) {
    // Nome da classe que indica que a resposta está aberta
    const classe = 'faq__questions__item--is--open';
    
    // Pega o elemento pai (o item inteiro da pergunta)
    const elementoPai = elemento.target.parentNode;

    // Toggle adiciona a classe se não tiver, ou remove se tiver
    // Isso faz com que a resposta alterne entre aberta e fechada
    elementoPai.classList.toggle(classe);
}

// ===== FUNÇÃO: REMOVER BOTÃO ATIVO =====
// Remove o destaque de TODOS os botões das abas
// Isso é necessário quando clica em um novo botão
function removeBotaoAtivo() {
    // Pega novamente todos os botões das abas
    const buttons = document.querySelectorAll("[data-tab-button]");

    // Percorre cada botão
    for (let i = 0; i < buttons.length; i++) {
        // Remove a classe que destaca o botão
        buttons[i].classList.remove("shows__tabs__button--is--active");
    }
}

// ===== FUNÇÃO: ESCONDER TODAS AS ABAS =====
// Oculta TODAS as abas de atrações
// Isso é feito quando o usuário clica em um novo botão de aba
function esconderTodasAbas() {
    // Pega todas as abas (elementos com atributo data-tab-id)
    const tabsContainer = document.querySelectorAll("[data-tab-id]");

    // Percorre cada aba
    for (let i = 0; i < tabsContainer.length; i++) {
        // Remove a classe que exibe a aba, ocultando-a
        tabsContainer[i].classList.remove("shows__list--is--active");
    }