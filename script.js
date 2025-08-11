<script>
    // Mapeia os elementos do DOM que serão alterados
    const skinParts = document.querySelectorAll('#skin-head, #skin-body, #skin-left-arm, #skin-right-arm, #skin-left-leg, #skin-right-leg');
    const leftIris = document.getElementById('left-iris');
    const rightIris = document.getElementById('right-iris');
    const glassesElement = document.getElementById('glasses');
    const hatElement = document.getElementById('hat');
    
    // Estado atual do personagem
    const characterState = {
        hairStyleId: 'hair-style-1',
        shirtStyleId: 'shirt-style-1',
        pantsStyleId: 'pants-style-1',
    };

    // Mapeia os botões de controlo
    const skinColorOptions = document.getElementById('skin-color-options');
    const hairColorOptions = document.getElementById('hair-color-options');
    const hairStyleOptions = document.getElementById('hair-style-options');
    const eyeColorOptions = document.getElementById('eye-color-options');
    const shirtColorOptions = document.getElementById('shirt-color-options');
    const shirtStyleOptions = document.getElementById('shirt-style-options');
    const pantsColorOptions = document.getElementById('pants-color-options');
    const pantsStyleOptions = document.getElementById('pants-style-options');
    const accessoryOptions = document.getElementById('accessory-options');

    /**
     * Atualiza a seleção visual dos botões
     * @param {HTMLElement} container O elemento pai que contém os botões
     * @param {HTMLElement} newSelection O botão que deve ser selecionado
     */
    function updateButtonSelection(container, newSelection) {
        container.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('selected');
        });
        if (newSelection) {
            newSelection.classList.add('selected');
        }
    }
    
    /**
     * Inicializa o estado do personagem e dos botões ao carregar a página
     */
    function initializeCharacterAndControls() {
        // Define os estilos e cores iniciais do personagem
        document.getElementById(characterState.hairStyleId).style.backgroundColor = 'black';
        document.getElementById(characterState.shirtStyleId).style.backgroundColor = '#F87171';
        document.getElementById(characterState.pantsStyleId).style.backgroundColor = '#4B5563';

        // Define a cor dos olhos inicial
        leftIris.style.backgroundColor = '#8A2BE2';
        rightIris.style.backgroundColor = '#8A2BE2';
        
        // Define o estado inicial dos botões selecionados
        updateButtonSelection(skinColorOptions, skinColorOptions.querySelector('button[data-color="#FDE6E6"]'));
        updateButtonSelection(hairStyleOptions, hairStyleOptions.querySelector('button[data-style="hair-style-1"]'));
        updateButtonSelection(hairColorOptions, hairColorOptions.querySelector('button[data-color="black"]'));
        updateButtonSelection(eyeColorOptions, eyeColorOptions.querySelector('button[data-color="#8A2BE2"]'));
        updateButtonSelection(shirtStyleOptions, shirtStyleOptions.querySelector('button[data-style="shirt-style-1"]'));
        updateButtonSelection(shirtColorOptions, shirtColorOptions.querySelector('button[data-color="#F87171"]'));
        updateButtonSelection(pantsStyleOptions, pantsStyleOptions.querySelector('button[data-style="pants-style-1"]'));
        updateButtonSelection(pantsColorOptions, pantsColorOptions.querySelector('button[data-color="#4B5563"]'));
    }

    /**
     * Adiciona listeners de evento para os botões de cor
     * @param {HTMLElement} container O elemento pai que contém os botões
     * @param {Function} updateFunction A função que será chamada para atualizar a cor
     */
    function addColorEventListeners(container, updateFunction) {
        container.addEventListener('click', (event) => {
            const button = event.target.closest('button');
            if (button) {
                const color = button.dataset.color;
                updateFunction(color);
                updateButtonSelection(container, button);
            }
        });
    }
    
    /**
     * Adiciona listeners de evento para os botões de estilo
     * @param {HTMLElement} container O elemento pai que contém os botões
     * @param {string} partType O tipo de peça (ex: 'hair', 'shirt')
     */
    function addStyleEventListeners(container, partType) {
        container.addEventListener('click', (event) => {
            const button = event.target.closest('button');
            if (button) {
                const newStyleId = button.dataset.style;
                // Esconde o estilo antigo
                const oldPart = document.getElementById(characterState[partType + 'StyleId']);
                if (oldPart) {
                    oldPart.classList.add('hidden');
                }

                // Mostra o novo estilo e atualiza o estado
                const newPart = document.getElementById(newStyleId);
                if (newPart) {
                    newPart.classList.remove('hidden');
                    
                    // Garante que a cor do estilo anterior é copiada para o novo estilo
                    const currentColor = oldPart.style.backgroundColor;
                    if (currentColor) {
                        newPart.style.backgroundColor = currentColor;
                    }

                    characterState[partType + 'StyleId'] = newStyleId;
                }
                updateButtonSelection(container, button);
            }
        });
    }
    
    /**
     * Adiciona listeners de evento para os acessórios
     */
    function addAccessoryEventListeners() {
        accessoryOptions.addEventListener('click', (event) => {
            const button = event.target.closest('button');
            if (button) {
                const accessoryId = button.dataset.accessory;
                const accessoryElement = document.getElementById(accessoryId);
                if (accessoryElement) {
                    accessoryElement.classList.toggle('hidden');
                    button.classList.toggle('selected');
                }
            }
        });
    }

    // Funções de atualização
    const updateSkinColor = (color) => {
        skinParts.forEach(part => part.style.backgroundColor = color);
    };

    const updateHairColor = (color) => {
        const currentHairPart = document.getElementById(characterState.hairStyleId);
        if (currentHairPart) {
            currentHairPart.style.backgroundColor = color;
        }
    };

    const updateEyeColor = (color) => {
        leftIris.style.backgroundColor = color;
        rightIris.style.backgroundColor = color;
    };

    const updateShirtColor = (color) => {
        const currentShirtPart = document.getElementById(characterState.shirtStyleId);
        if (currentShirtPart) {
            currentShirtPart.style.backgroundColor = color;
        }
    };
    
    const updatePantsColor = (color) => {
        const currentPantsPart = document.getElementById(characterState.pantsStyleId);
        if (currentPantsPart) {
            currentPantsPart.style.backgroundColor = color;
        }
    };

    // Adiciona os event listeners aos botões
    addColorEventListeners(skinColorOptions, updateSkinColor);
    addColorEventListeners(hairColorOptions, updateHairColor);
    addColorEventListeners(eyeColorOptions, updateEyeColor);
    addColorEventListeners(shirtColorOptions, updateShirtColor);
    addColorEventListeners(pantsColorOptions, updatePantsColor);

    // Adiciona os event listeners para os estilos
    addStyleEventListeners(hairStyleOptions, 'hair');
    addStyleEventListeners(shirtStyleOptions, 'shirt');
    addStyleEventListeners(pantsStyleOptions, 'pants');
    
    // Adiciona event listeners para os acessórios
    addAccessoryEventListeners();
    
    // Inicia o jogo ao carregar a página
    document.addEventListener('DOMContentLoaded', initializeCharacterAndControls);
    
</script>







