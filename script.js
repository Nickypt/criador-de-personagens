document.getElementById('play-button').addEventListener('click', function() {
    const gameStart = document.querySelector('.game-start');
    gameStart.style.opacity = '0';
    setTimeout(() => {
        gameStart.style.display = 'none';
    }, 1000); // Garante que a animação termine antes de ocultar
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