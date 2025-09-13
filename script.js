/* ===============================================
   SCRIPT.JS - FUNCIONALIDADES DO SITE ACF RANGEL PESTANA
   ===============================================
   
   Este arquivo contém todas as funcionalidades JavaScript
   necessárias para o funcionamento do site da agência.
   
   Funcionalidades incluídas:
   - Login do PostalNet
   - Navegação suave (smooth scroll)
   - Validações de formulário
   
   =============================================== */

// ================================================
// FUNÇÃO DE LOGIN DO POSTALNET
// ================================================

/**
 * Processa o formulário de login do PostalNet
 * @param {Event} event - Evento de submit do formulário
 */
function loginPostalNet(event) {
    // Previne o comportamento padrão do formulário (recarregar página)
    event.preventDefault();
    
    // Obtém os valores dos campos de entrada
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    
    // Validação básica - verifica se os campos estão preenchidos
    if (!usuario || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Validação adicional - verifica se não há apenas espaços
    if (usuario.trim() === '' || senha.trim() === '') {
        alert('Por favor, preencha os campos com informações válidas.');
        return;
    }
    
    // IMPORTANTE: Substitua esta URL pela URL real do PostalNet
    // quando obtiver acesso aos dados corretos
    alert('Redirecionando para o sistema PostalNet...');
    
    // URL do PostalNet (PLACEHOLDER - substituir pela URL real)
    const postalnetUrl = 'https://postalnet.correios.com.br/login';
    
    // Abre o PostalNet em nova aba
    window.open(postalnetUrl, '_blank');
    
    // Limpa o formulário após o login
    document.getElementById('postalnetForm').reset();
    
    // Log para debug (remover em produção se necessário)
    console.log('Tentativa de login PostalNet - Usuário:', usuario);
}

// ================================================
// NAVEGAÇÃO SUAVE (SMOOTH SCROLL)
// ================================================

/**
 * Implementa navegação suave para links âncora
 * Executa quando o DOM estiver totalmente carregado
 */
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todos os links que começam com # (âncoras internas)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Adiciona evento de click para cada link âncora
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Previne o comportamento padrão de navegação
            e.preventDefault();
            
            // Obtém o elemento de destino usando o href
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Verifica se o elemento de destino existe
            if (targetElement) {
                // Executa scroll suave até o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Alinha com o topo da viewport
                });
            }
        });
    });
});

// ================================================
// VALIDAÇÃO ADICIONAL DE FORMULÁRIOS
// ================================================

/**
 * Validações personalizadas para o formulário PostalNet
 */
function validatePostalNetForm() {
    const usuarioField = document.getElementById('usuario');
    const senhaField = document.getElementById('senha');
    
    // Remove espaços em branco das extremidades
    usuarioField.value = usuarioField.value.trim();
    senhaField.value = senhaField.value.trim();
    
    // Validação de comprimento mínimo
    if (usuarioField.value.length < 3) {
        alert('O nome de usuário deve ter pelo menos 3 caracteres.');
        usuarioField.focus();
        return false;
    }
    
    if (senhaField.value.length < 4) {
        alert('A senha deve ter pelo menos 4 caracteres.');
        senhaField.focus();
        return false;
    }
    
    return true;
}

// ================================================
// FUNÇÕES DE UTILIDADE
// ================================================

/**
 * Adiciona feedback visual quando botões são clicados
 */
function addButtonFeedback() {
    const buttons = document.querySelectorAll('.postalnet-btn, .whatsapp-btn, .reviews-btn, .faq-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Adiciona classe para feedback visual
            this.style.transform = 'scale(0.98)';
            
            // Remove o efeito após 150ms
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

/**
 * Função para melhorar a experiência de formulários
 */
function enhanceFormExperience() {
    const usuarioInput = document.getElementById('usuario');
    const senhaInput = document.getElementById('senha');
    
    // Adiciona placeholder dinâmico
    if (usuarioInput) {
        usuarioInput.addEventListener('focus', function() {
            this.style.borderColor = '#0066cc';
        });
        
        usuarioInput.addEventListener('blur', function() {
            this.style.borderColor = '';
        });
    }
    
    if (senhaInput) {
        senhaInput.addEventListener('focus', function() {
            this.style.borderColor = '#0066cc';
        });
        
        senhaInput.addEventListener('blur', function() {
            this.style.borderColor = '';
        });
    }
}

/**
 * Função para detectar se o usuário está em dispositivo móvel
 */
function isMobile() {
    return window.innerWidth <= 768;
}

/**
 * Ajusta comportamentos para dispositivos móveis
 */
function handleMobileOptimizations() {
    if (isMobile()) {
        // Remove hover effects em dispositivos móveis
        const hoverElements = document.querySelectorAll('.nav-list a, .faq-card');
        hoverElements.forEach(element => {
            element.style.transition = 'none';
        });
        
        // Melhora a experiência de toque
        document.body.style.webkitTapHighlightColor = 'rgba(0,0,0,0)';
    }
}

// ================================================
// INICIALIZAÇÃO QUANDO A PÁGINA CARREGA
// ================================================

/**
 * Executa todas as inicializações quando o DOM estiver pronto
 */
document.addEventListener('DOMContentLoaded', function() {
    
    // Adiciona feedback visual aos botões
    addButtonFeedback();
    
    // Melhora a experiência de formulários
    enhanceFormExperience();
    
    // Otimizações para mobile
    handleMobileOptimizations();
    
    // Log para confirmar que o script foi carregado
    console.log('ACF Rangel Pestana - Site carregado com sucesso!');
    
    // Verifica se todos os elementos importantes existem
    const criticalElements = [
        '#postalnetForm',
        '.nav-list',
        '.hero',
        '.contact-sidebar'
    ];
    
    criticalElements.forEach(selector => {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`Elemento crítico não encontrado: ${selector}`);
        }
    });
});

// ================================================
// TRATAMENTO DE ERROS GLOBAIS
// ================================================

/**
 * Captura erros JavaScript e evita que quebrem a experiência do usuário
 */
window.addEventListener('error', function(e) {
    console.error('Erro JavaScript capturado:', e.error);
    
    // Em produção, você poderia enviar este erro para um serviço de monitoramento
    // como Google Analytics, Sentry, etc.
    
    // Por enquanto, apenas evita que o erro apareça para o usuário
    return true;
});

// ================================================
// FUNÇÕES PARA FUTURA EXPANSÃO
// ================================================

/**
 * Placeholder para futuras funcionalidades de tracking
 */
function trackUserInteraction(action, element) {
    // Aqui você pode implementar Google Analytics, Facebook Pixel, etc.
    console.log(`Interação rastreada: ${action} em ${element}`);
}

/**
 * Placeholder para integração com APIs dos Correios
 */
function integrarComCorreios() {
    // Esta função pode ser expandida para integrar com APIs oficiais
    // dos Correios para rastreamento, cálculo de preços, etc.
    console.log('Função de integração com Correios - Pronta para implementação');
}

/**
 * Função para validar CEP (útil para futuras funcionalidades)
 */
function validarCEP(cep) {
    // Remove caracteres não numéricos
    const cepLimpo = cep.replace(/\D/g, '');
    
    // Verifica se tem 8 dígitos
    if (cepLimpo.length !== 8) {
        return false;
    }
    
    // Verifica se não é uma sequência inválida
    const cepsInvalidos = ['00000000', '11111111', '22222222', '33333333', 
                          '44444444', '55555555', '66666666', '77777777', 
                          '88888888', '99999999'];
    
    return !cepsInvalidos.includes(cepLimpo);
}