// Lista de personagens com dicas e URLs de imagem.
const personagens = [
    {
        nome: "Harry Potter",
        dicas: [
            "Ele é um bruxo que sobreviveu à maldição de Voldemort quando era um bebê.",
            "Ele tem uma cicatriz na testa em forma de raio."
        ],
        imagemUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dharry%2Bpotter&psig=AOvVaw0_w_X_qW_zY_b-yX_Z_B-&ust=1672531200000000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJ-l8oT-y_4CFQAAAAAdAAAAABAE"
    },
    {
        nome: "Goku",
        dicas: [
            "É um dos Saiyajins sobreviventes, um guerreiro do Planeta Vegeta.",
            "Sua principal técnica é o Kamehameha, e ele pode se transformar em Super Saiyajin."
        ],
        imagemUrl: "https://googleusercontent.com/image_collection/image_retrieval/15517592151132994852_0"
    },
    {
        nome: "Batman",
        dicas: [
            "Ele é um bilionário que combate o crime em Gotham City.",
            "Não tem superpoderes, mas usa tecnologia e gadgets avançados."
        ],
        imagemUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dbatman&psig=AOvVaw0_w_X_qW_zY_b-yX_Z_B-&ust=1672531200000000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJ-l8oT-y_4CFQAAAAAdAAAAABAE"
    },
    {
        nome: "Sherlock Holmes",
        dicas: [
            "Ele é um detetive particular britânico, conhecido por sua grande inteligência e observação.",
            "Ele vive na Rua Baker, 221B, em Londres, e é acompanhado por seu amigo Dr. Watson."
        ],
        imagemUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dsherlock%2Bholmes&psig=AOvVaw0_w_X_qW_zY_b-yX_Z_B-&ust=1672531200000000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJ-l8oT-y_4CFQAAAAAdAAAAABAE"
    },
    {
        nome: "Gandalf",
        dicas: [
            "Ele é um mago poderoso, membro da Ordem de Istari.",
            "Ele guiasse os hobbits, anões e humanos em uma missão para derrotar um grande mal."
        ],
        imagemUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgandalf&psig=AOvVaw0_w_X_qW_zY_b-yX_Z_B-&ust=1672531200000000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJ-l8oT-y_4CFQAAAAAdAAAAABAE"
    }
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