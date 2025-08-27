document.addEventListener('DOMContentLoaded', () => {
    // --- Referências aos Elementos do DOM ---
    const playButton = document.getElementById('play-button');
    const gameStart = document.getElementById('game-start');
    const gameContent = document.getElementById('game-content');
    const downloadButton = document.getElementById('download-button');

    const characterParts = {
        body: document.getElementById('body-base'),
        pants: document.getElementById('pants'),
        shirt: document.getElementById('shirt'),
        eyes: document.getElementById('eyes'),
        hair: document.getElementById('hair'),
        glasses: document.getElementById('glasses')
    };

    const partContainers = {
        skin: document.getElementById('skin-style-options'),
        eyesStyle: document.getElementById('eye-style-options'),
        eyeColor: document.getElementById('eye-color-options'),
        hair: document.getElementById('hair-style-options'),
        shirt: document.getElementById('shirt-style-options'),
        pants: document.getElementById('pants-style-options'),
        accessory: document.getElementById('accessory-options')
    };

    // --- Funções de Animação e Utilitário ---

    /**
     * Adiciona e remove a classe de animação 'rotate-in' para uma parte do personagem.
     * @param {HTMLElement} partElement - O elemento de imagem a ser animado.
     */
    function triggerAnimation(partElement) {
        if (partElement) {
            partElement.classList.add('rotate-in');
            setTimeout(() => {
                partElement.classList.remove('rotate-in');
            }, 500); // 500ms corresponde à duração da animação no CSS
        }
    }

    /**
     * Define o botão como 'ativo' em um container, removendo a classe dos outros.
     * @param {HTMLElement} container - O container de botões.
     * @param {HTMLElement} button - O botão clicado.
     */
    function setActiveButton(container, button) {
        container.querySelectorAll('.control-button').forEach(btn => btn.classList.remove('active-button'));
        button.classList.add('active-button');
    }

    // --- Lógica de Início do Jogo ---

    // Adiciona o evento de clique ao botão JOGAR
    if (playButton) {
        playButton.addEventListener('click', () => {
            gameStart.classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                gameStart.classList.add('hidden');
                gameContent.classList.remove('hidden');
                gameContent.classList.add('opacity-100', 'flex', 'lg:flex-row', 'flex-col');
                // Adiciona uma pequena animação de entrada para todas as partes ao iniciar
                Object.values(characterParts).forEach(part => triggerAnimation(part));
            }, 700);
        });
    }

    // --- Lógica de Personalização do Personagem ---

    // Event listener consolidado para todas as seções de estilo (exceto pele e acessórios)
    Object.values(partContainers).forEach(container => {
        container.addEventListener('click', (event) => {
            const button = event.target.closest('button');
            if (!button) return;

            const part = button.getAttribute('data-part');
            const style = button.getAttribute('data-style');

            if (part && style) {
                setActiveButton(container, button);
                const partElement = characterParts[part];
                if (partElement) {
                    partElement.src = `images/${style}.png`;
                    triggerAnimation(partElement);
                }
            }
        });
    });

    // Lógica para a cor da pele (caminho diferente)
    partContainers.skin.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (button) {
            setActiveButton(partContainers.skin, button);
            const newSrc = button.getAttribute('data-style');
            if (newSrc) {
                characterParts.body.src = newSrc;
                triggerAnimation(characterParts.body);
            }
        }
    });

    // Lógica para a cor dos olhos (usa filtro CSS)
    partContainers.eyeColor.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (button) {
            setActiveButton(partContainers.eyeColor, button);
            const newColor = button.getAttribute('data-color');
            if (newColor) {
                // Aplica a cor do drop-shadow para dar o efeito de cor
                characterParts.eyes.style.filter = `drop-shadow(0 0 0.75rem ${newColor})`;
            }
        }
    });
    
    // Lógica para acessórios (toggle)
    partContainers.accessory.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (button) {
            const accessoryId = button.getAttribute('data-accessory');
            const accessoryPart = characterParts[accessoryId];
            if (accessoryPart) {
                accessoryPart.classList.toggle('hidden');
                button.classList.toggle('active-button');
                triggerAnimation(accessoryPart);
            }
        }
    });

    // --- Lógica de Download ---

    // Você precisa incluir a biblioteca html2canvas no seu HTML para esta função funcionar.
    // <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            // Seleciona o container do personagem para capturar
            const containerToCapture = document.querySelector('.character-container');

            html2canvas(containerToCapture, {
                backgroundColor: null, // Deixa o fundo transparente
                scale: 2 // Aumenta a resolução da imagem para melhor qualidade
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'meu-personagem-fofo.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        });
    }
});