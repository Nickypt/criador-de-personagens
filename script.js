document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('play-button');
    const gameStartScreen = document.querySelector('.game-start');
    const gameContent = document.querySelector('.game-content');

    if (playButton && gameStartScreen && gameContent) {
        playButton.addEventListener('click', function() {
            // Inicia a transição de opacidade para a tela inicial
            gameStartScreen.style.opacity = '0';
            
            // Aguarda a transição terminar antes de esconder a tela e mostrar o jogo
            setTimeout(function() {
                gameStartScreen.style.display = 'none';
                gameContent.style.display = 'flex'; // ou 'block', dependendo do seu layout
            }, 1000); // 1000ms = 1 segundo, igual à transição no CSS
        });
    }
});





// Get the character image parts
const bodyBase = document.getElementById('body-base');
const pants = document.getElementById('pants');
const shirt = document.getElementById('shirt');
const hair = document.getElementById('hair');
const glasses = document.getElementById('glasses');

// Get the option containers
const skinStyleOptions = document.getElementById('skin-style-options');
const pantsStyleOptions = document.getElementById('pants-style-options');
const shirtStyleOptions = document.getElementById('shirt-style-options');
const hairStyleOptions = document.getElementById('hair-style-options');
const accessoryOptions = document.getElementById('accessory-options');

// Helper function to update character parts and active buttons
function updateCharacter(part, newSrc) {
    part.src = `images/${newSrc}.png`;
}

// Function to handle button clicks for a specific section
function handleOptionClick(container, part) {
    container.addEventListener('click', (event) => {
        const clickedButton = event.target.closest('button');
        if (clickedButton) {
            container.querySelectorAll('.control-button').forEach(btn => btn.classList.remove('active-button'));
            clickedButton.classList.add('active-button');
            const newStyle = clickedButton.getAttribute('data-style');
            if (newStyle) {
                updateCharacter(part, newStyle);
            }
        }
    });
}

// Event listeners for different sections
handleOptionClick(pantsStyleOptions, pants);
handleOptionClick(shirtStyleOptions, shirt);
handleOptionClick(hairStyleOptions, hair);

// Special case for skin color because it uses different file paths
skinStyleOptions.addEventListener('click', (event) => {
    const clickedButton = event.target.closest('button');
    if (clickedButton) {
        skinStyleOptions.querySelectorAll('.control-button').forEach(btn => btn.classList.remove('active-button'));
        clickedButton.classList.add('active-button');
        const newSrc = clickedButton.getAttribute('data-style');
        if (newSrc) {
            bodyBase.src = newSrc;
        }
    }
});

// Accessory toggle
accessoryOptions.addEventListener('click', (event) => {
    const clickedButton = event.target.closest('button');
    if (clickedButton) {
        const accessoryId = clickedButton.getAttribute('data-accessory');
        const accessoryPart = document.getElementById(accessoryId);
        if (accessoryPart) {
            accessoryPart.classList.toggle('hidden');
            clickedButton.classList.toggle('active-button');
        }
    }
});



// Adicione esta parte ao seu script.js
// Lógica para mudar o estilo (a imagem) dos olhos
const eyeStyleOptions = document.getElementById('eye-style-options');
const eyesImg = document.getElementById('eyes');

eyeStyleOptions.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (target) {
        // Remover a classe ativa de todos os botões de estilo de olho
        document.querySelectorAll('#eye-style-options button').forEach(btn => {
            btn.classList.remove('active-button');
        });

        // Adicionar a classe ativa ao botão clicado
        target.classList.add('active-button');
        
        // Mudar a imagem dos olhos
        const newStyle = target.getAttribute('data-style');
        eyesImg.src = `images/${newStyle}.png`;
    }
});

// Lógica para mudar a cor dos olhos
const eyeColorOptions = document.getElementById('eye-color-options');

eyeColorOptions.addEventListener('click', (event) => {
    const target = event.target.closest('button');
    if (target) {
        // Remover a classe ativa de todos os botões de cor de olho
        document.querySelectorAll('#eye-color-options button').forEach(btn => {
            btn.classList.remove('active-button');
        });

        // Adicionar a classe ativa ao botão clicado
        target.classList.add('active-button');
        
        // Obter a cor do atributo data-color
        const newColor = target.getAttribute('data-color');
        
        // Aplicar a cor usando um filtro CSS
        // O `filter: hue-rotate(...)` é a forma mais eficaz de mudar a cor de uma imagem PNG
        // sem precisar ter várias imagens coloridas.
        // No entanto, para cores específicas, o melhor é ter a imagem já colorida.
        // Para simplificar, o ideal seria ter imagens separadas para cada cor,
        // mas se for usar a mesma imagem para diferentes cores de olhos, o CSS filter é uma opção.
        eyesImg.style.filter = `drop-shadow(0 0 0.75rem ${newColor})`;
    }
});