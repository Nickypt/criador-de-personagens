const personagens = [
    {
        nome: "Harry Potter",
        tipoDica: "texto",
        dica: "Ele é um bruxo que sobreviveu à maldição de Voldemort quando era um bebê e tem uma cicatriz na testa em forma de raio."
    },
    {
        nome: "Super Mario",
        tipoDica: "imagem",
        dica: "personagem Mário Bros"
    },
    {
        nome: "Batman",
        tipoDica: "texto",
        dica: "Ele é um super-herói bilionário de Gotham City que não tem superpoderes, mas usa a tecnologia para combater o crime."
    },
    {
        nome: "Homem Aranha",
        tipoDica: "imagem",
        dica: "Homem Aranha Marvel"
    }
];

let personagemSecreto = {};
let tentativas = 0;

const inputPalpite = document.getElementById('adivinhaInput');
const btnEnviar = document.getElementById('enviarPalpiteBtn');
const mensagem = document.getElementById('mensagem');
const btnReiniciar = document.getElementById('reiniciarBtn');
const divDica = document.getElementById('dica');

// Função para iniciar ou reiniciar o jogo
function iniciarJogo() {
    const indiceAleatorio = Math.floor(Math.random() * personagens.length);
    personagemSecreto = personagens[indiceAleatorio];

    tentativas = 0;
    inputPalpite.value = '';
    mensagem.textContent = '';
    btnEnviar.disabled = false;
    btnReiniciar.style.display = 'none';
    divDica.innerHTML = '';
    inputPalpite.focus();

    mostrarDica();
}

function mostrarDica() {
    if (personagemSecreto.tipoDica === "texto") {
        divDica.innerHTML = `<p>${personagemSecreto.dica}</p>`;
    } else if (personagemSecreto.tipoDica === "imagem") {
        divDica.innerHTML = `<img src="https://googleusercontent.com/image_collection/image_retrieval/15517592151132994852_0" alt="Imagem do Personagem">`;
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
    btnReiniciar.style.display = 'block';
}

// Event Listeners
btnEnviar.addEventListener('click', verificarPalpite);
btnReiniciar.addEventListener('click', iniciarJogo);
inputPalpite.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        verificarPalpite();
    }
});

// Inicia o jogo quando a página carrega
iniciarJogo();