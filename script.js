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
        accessory: document.getElementById('accessory-options'),
        // Novas referências para os contêineres de cor específicos
        eyeColors: {
            'olho1-1': document.getElementById('eye-colors-olho1-1'),
            'eyes_2': document.getElementById('eye-colors-eyes_2'),
            'eyes_3': document.getElementById('eye-colors-eyes_3')
        }
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

    // Event listener consolidado para todas as seções de estilo (exceto pele e acessórios)
    // Este listener agora precisa lidar com a lógica de estilo e cor dos olhos
    Object.values(partContainers).forEach(container => {
        if (container.id !== 'skin-style-options' && container.id !== 'accessory-options' && container.id !== 'eye-color-options') {
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
        }
    });

    // --- Nova Lógica para Estilo e Cor dos Olhos ---

    // Listener para os botões de estilo dos olhos
    partContainers.eyesStyle.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (button) {
            const selectedStyle = button.getAttribute('data-style');
            setActiveButton(partContainers.eyesStyle, button);

            // Esconde todos os contêineres de cor
            Object.values(partContainers.eyeColors).forEach(container => {
                if (container) {
                    container.classList.add('hidden');
                }
            });

            // Mostra o contêiner de cor correspondente ao estilo selecionado
            const targetContainer = partContainers.eyeColors[selectedStyle];
            if (targetContainer) {
                targetContainer.classList.remove('hidden');
                // Pega a primeira cor do novo contêiner e a aplica
                const firstColorButton = targetContainer.querySelector('.control-button');
                if (firstColorButton) {
                    firstColorButton.click(); // Simula o clique para aplicar a cor
                }
            }

            // Mudar a imagem do olho de acordo com o estilo
            const eyesElement = characterParts.eyes;
            if (eyesElement) {
                eyesElement.src = `images/${selectedStyle}.png`;
                triggerAnimation(eyesElement);
            }
        }
    });
    
    // Listener para os botões de cor dos olhos, agora dentro de cada contêiner
    document.querySelectorAll('.eye-color-options-container').forEach(container => {
        container.addEventListener('click', (event) => {
            const button = event.target.closest('button');
            if (button) {
                setActiveButton(container, button);
                const newColor = button.getAttribute('data-color');
                const eyesElement = characterParts.eyes;

                // Agora, a lógica de cor não muda a imagem, mas aplica a cor ao SVG ou PNG
                // Você precisa de uma maneira de aplicar a cor à imagem. O ideal é usar SVGs ou um
                // sistema de camadas para que as cores funcionem. Para PNGs, a abordagem de drop-shadow
                // era a mais simples. Se o desejo é pintar os olhos dentro da imagem, isso requer
                // um método diferente (e.g., usar SVGs ou ter imagens separadas para cada cor).
                // A abordagem mais robusta seria ter imagens de olhos diferentes para cada cor.
                // Exemplo: `images/olho1-1_azul.png`, `images/olho1-1_verde.png`.
                // Como não tenho a estrutura exata das suas imagens, vou manter a lógica de troca
                // de fonte (src) para um exemplo simplificado:
                
                // Exemplo de como funcionaria se você tivesse imagens separadas por estilo e cor
                const currentStyle = document.querySelector('#eye-style-options .active-button').getAttribute('data-style');
                // O `newColor` deve ser um nome de arquivo (e.g., "azul", "vermelho")
                const colorFileName = newColor.replace('#', '');
                eyesElement.src = `images/${currentStyle}_color_${colorFileName}.png`;
                triggerAnimation(eyesElement);
            }
        });
    });

    // --- Lógica para acessórios (toggle) ---
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

    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            const containerToCapture = document.querySelector('.character-container');

            html2canvas(containerToCapture, {
                backgroundColor: null,
                scale: 2
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'meu-personagem-fofo.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        });
    }
});