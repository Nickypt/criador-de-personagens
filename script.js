// Lista de personagens com dicas e URLs de imagem.
const personagens = [
    {
        nome: "Harry Potter",
        dicas: [
            "Ele é um bruxo que sobreviveu à maldição de Voldemort quando era um bebê.",
            "Ele tem uma cicatriz na testa em forma de raio."
        ],
        imagemUrl: "https://eskipaper.com/images/harry-potter-4.jpg"
    },
    {
        nome: "Goku",
        dicas: [
            "É um dos Saiyajins sobreviventes, um guerreiro do Planeta Vegeta.",
            "Sua principal técnica é o Kamehameha, e ele pode se transformar em Super Saiyajin."
        ],
        imagemUrl: "https://www.cartonionline.com/wordpress/wp-content/uploads/2023/02/goku.jpg "
    },
    {
        nome: "Batman",
        dicas: [
            "Ele é um bilionário que combate o crime em Gotham City.",
            "Não tem superpoderes, mas usa tecnologia e gadgets avançados."
        ],
        imagemUrl: "https://th.bing.com/th/id/R.14a6e7539954b258f79b7500546a91f5?rik=BZnN2ZooGHAR9Q&pid=ImgRaw&r=0 "
    },
    {
        nome: "Sherlock Holmes",
        dicas: [
            "Ele é um detetive particular britânico, conhecido por sua grande inteligência e observação.",
            "Ele vive na Rua Baker, 221B, em Londres, e é acompanhado por seu amigo Dr. Watson."
        ],
        imagemUrl: "https://th.bing.com/th/id/R.43dd37e2d89d938c4edbe619915bffe3?rik=KirWNrYa7EKviQ&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f39000000%2fSherlock-Holmes-Promo-and-BTS-Pics-sherlock-holmes-sherlock-bbc1-39076124-2856-4284.jpg&ehk=4PZ94QuABEheyjhWqP9VAk0Cu7QNhMpzvsv7xZ2WR2M%3d&risl=&pid=ImgRaw&r=0 "
    },
    {
        nome: "Gandalf",
        dicas: [
            "Ele é um mago poderoso, membro da Ordem de Istari.",
            "Ele guiasse os hobbits, anões e humanos em uma missão para derrotar um grande mal."
        ],
        imagemUrl: "https://th.bing.com/th/id/R.1de9fd651c8456e9f331519c24251a96?rik=IrS1Mgz4s4uDxA&riu=http%3a%2f%2fimages.wikia.com%2flotr%2fimages%2f8%2f8d%2fGandalf-2.jpg&ehk=Nm3tJ5SK6z6MbERxfYI6yqcd3virc6P6FuI9Uv1fxxw%3d&risl=&pid=ImgRaw&r=0 "
];

let personagemSecreto = {};
let tentativas = 0;
let dicaAtual = -1; // -1 para não ter dica, 0 para a primeira, 1 para a segunda

const inputPalpite = document.getElementById('adivinhaInput');
const btnEnviar = document.getElementById('enviarPalpiteBtn');
const mensagem = document.getElementById('mensagem');
const btnReiniciar = document.getElementById('reiniciarBtn');
const btnPedirDica = document.getElementById('pedirDicaBtn');
const divDica = document.getElementById('dica');

// Função para iniciar ou reiniciar o jogo
function iniciarJogo() {
    const indiceAleatorio = Math.floor(Math.random() * personagens.length);
    personagemSecreto = personagens[indiceAleatorio];

    tentativas = 0;
    dicaAtual = -1;
    inputPalpite.value = '';
    mensagem.textContent = '';
    btnEnviar.disabled = false;
    btnPedirDica.style.display = 'block';
    btnReiniciar.style.display = 'none';
    divDica.innerHTML = '';
    inputPalpite.focus();
}

// Função para mostrar a dica
function mostrarDica() {
    dicaAtual++;
    if (dicaAtual < personagemSecreto.dicas.length) {
        divDica.innerHTML = `<p>${personagemSecreto.dicas[dicaAtual]}</p>`;
    } else {
        divDica.innerHTML = `<img src="${personagemSecreto.imagemUrl}" alt="Imagem do Personagem">`;
        btnPedirDica.disabled = true; // Desabilita o botão após mostrar a imagem
        mensagem.textContent = 'Última dica, agora é sua chance!';
        mensagem.style.color = 'blue';
    }
}

function verificarPalpite() {
    const palpite = inputPalpite.value.trim().toLowerCase();
    
    if (palpite === '') {
        mensagem.textContent = 'Por favor, digite um nome de personagem.';
        return;
    }

    tentativas++;

    if (palpite === personagemSecreto.nome.toLowerCase()) {
        mensagem.textContent = `Parabéns! Você acertou em ${tentativas} tentativa(s)! O personagem era "${personagemSecreto.nome}"!`;
        mensagem.style.color = 'green';
        fimDeJogo();
    } else {
        mensagem.textContent = 'Incorreto. Tente novamente!';
        mensagem.style.color = 'red';
    }
}

function fimDeJogo() {
    btnEnviar.disabled = true;
    btnPedirDica.disabled = true;
    btnPedirDica.style.display = 'none';
    btnReiniciar.style.display = 'block';
}

// Event Listeners
btnEnviar.addEventListener('click', verificarPalpite);
btnReiniciar.addEventListener('click', iniciarJogo);
btnPedirDica.addEventListener('click', mostrarDica);

inputPalpite.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        verificarPalpite();
    }
});

// Inicia o jogo quando a página carrega
iniciarJogo();