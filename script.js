document.addEventListener('DOMContentLoaded', () => {

    // Função auxiliar para remover a classe 'active-button'
    function removeActiveClass(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            const buttons = container.querySelectorAll('.control-button');
            buttons.forEach(btn => btn.classList.remove('active-button'));
        }
    }

    // Gerenciador de eventos para estilos de cabelo
    const hairOptions = document.getElementById('hair-style-options');
    const hairImg = document.getElementById('hair');
    if (hairOptions && hairImg) {
        hairOptions.addEventListener('click', (e) => {
            const newStyle = e.target.dataset.style;
            if (newStyle) {
                removeActiveClass('hair-style-options');
                e.target.classList.add('active-button');
                hairImg.src = `images/${newStyle}.png`;
            }
        });
    }

    // Gerenciador de eventos para estilos de camisa
    const shirtOptions = document.getElementById('shirt-style-options');
    const shirtImg = document.getElementById('shirt');
    if (shirtOptions && shirtImg) {
        shirtOptions.addEventListener('click', (e) => {
            const newStyle = e.target.dataset.style;
            if (newStyle) {
                removeActiveClass('shirt-style-options');
                e.target.classList.add('active-button');
                shirtImg.src = `images/${newStyle}.png`;
            }
        });
    }

    // Gerenciador de eventos para estilos de calças
    const pantsOptions = document.getElementById('pants-style-options');
    const pantsImg = document.getElementById('pants');
    if (pantsOptions && pantsImg) {
        pantsOptions.addEventListener('click', (e) => {
            const newStyle = e.target.dataset.style;
            if (newStyle) {
                removeActiveClass('pants-style-options');
                e.target.classList.add('active-button');
                pantsImg.src = `images/${newStyle}.png`;
            }
        });
    }

    // Gerenciador de eventos para acessórios (alternar visibilidade)
    const accessoryOptions = document.getElementById('accessory-options');
    if (accessoryOptions) {
        accessoryOptions.addEventListener('click', (e) => {
            const accessoryId = e.target.dataset.accessory;
            if (accessoryId) {
                e.target.classList.toggle('active-button');
                const accessory = document.getElementById(accessoryId);
                if (accessory) {
                    accessory.classList.toggle('hidden');
                }
            }
        });
    }
    
    // Lógica para o botão de download
    const downloadButton = document.getElementById('download-button');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            const characterContainer = document.querySelector('.character-container');
            if (characterContainer) {
                // Instala e usa a biblioteca html2canvas para converter a div em imagem
                // Esta parte exige que a biblioteca esteja instalada
                // Ou você pode usar uma solução mais simples como a de SVG do seu código anterior, mas com algumas modificações para PNG
                alert('A função de download precisa de uma biblioteca externa como html2canvas para funcionar. Copie a imagem manualmente por enquanto ou adicione a biblioteca.');
            }
        });
    }
});