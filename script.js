// List of characters with hints and image URLs.
const personagens = [
    {
        nome: "Harry Potter",
        dicas: [
            "É um bruxo que sobreviveu à maldição de Voldemort quando era um bebê.",
            "Ele tem uma cicatriz na testa em forma de raio."
        ],
        imagemUrl: "https://eskipaper.com/images/harry-potter-4.jpg "
    },
    {
        nome: "Goku",
        dicas: [
            "É um dos últimos Saiyajins, um guerreiro do Planeta Vegeta.",
            "Sua técnica principal é o Kamehameha, e ele pode se transformar em Super Saiyajin."
        ],
        imagemUrl: "https://www.cartonionline.com/wordpress/wp-content/uploads/2023/02/goku.jpg "
    },
    {
        nome: "Batman",
        dicas: [
            "Ele é um bilionário que combate o crime em Gotham City.",
            "Não tem superpoderes, mas usa tecnologia e gadgets avançados."
        ],
        imagemUrl: "https://terraverso.com.br/wp-content/uploads/2019/10/batman.jpg "
    },
    {
        nome: "Sherlock Holmes",
        dicas: [
            "É um detetive particular britânico, conhecido por sua grande inteligência e observação.",
            "Vive na Rua Baker, 221B, em Londres, e é acompanhado por seu amigo Dr. Watson."
        ],
        imagemUrl: "https://i.imgur.com/kYq3Q0L.jpeg"
    },
    {
        nome: "Gandalf",
        dicas: [
            "Ele é um mago poderoso, membro da Ordem de Istari.",
            "Guia os hobbits, anões e humanos em uma missão para derrotar um grande mal."
        ],
        imagemUrl: "https://i.imgur.com/N8d3m6j.png"
    },
    {
        nome: "Mulher Maravilha",
        dicas: [
            "Ela é uma princesa guerreira de Themyscira, uma ilha oculta.",
            "Seu principal acessório é o Laço da Verdade, que força as pessoas a dizerem a verdade."
        ],
        imagemUrl: "https://i.imgur.com/Kx3u45L.jpeg"
    },
    {
        nome: "Homem de Ferro",
        dicas: [
            "Ele é um inventor e bilionário excêntrico.",
            "Usa uma armadura de alta tecnologia para combater o crime e salvar o mundo."
        ],
        imagemUrl: "https://i.imgur.com/pB33gC7.png"
    },
    {
        nome: "Darth Vader",
        dicas: [
            "É um dos vilões mais icônicos do cinema, com uma respiração pesada e robótica.",
            "Ele é um Lorde Sith, conhecido por ser o principal executor do Império Galáctico."
        ],
        imagemUrl: "https://i.imgur.com/L4R5G4c.jpeg"
    },
    {
        nome: "Super-Homem",
        dicas: [
            "Ele é um alienígena do planeta Krypton, enviado à Terra ainda bebê.",
            "Seus poderes incluem superforça, voo e visão de raio-x."
        ],
        imagemUrl: "https://i.imgur.com/fVq6X0k.jpeg"
    },
    {
        nome: "Capitão América",
        dicas: [
            "Ele é um super-soldado da Segunda Guerra Mundial, que foi congelado no tempo.",
            "Seu principal acessório é um escudo indestrutível feito de vibranium."
        ],
        imagemUrl: "https://i.imgur.com/g0t6f1O.jpeg"
    },
    {
        nome: "Hulk",
        dicas: [
            "É um cientista que, após um experimento, se transforma em uma criatura gigante e verde quando fica irritado.",
            "Sua força é proporcional à sua raiva."
        ],
        imagemUrl: "https://i.imgur.com/d9T3c0D.png"
    },
    {
        nome: "Capitão Jack Sparrow",
        dicas: [
            "Ele é um pirata carismático, com um jeito de andar e falar únicos.",
            "Capitão do navio Pérola Negra, ele está sempre procurando tesouros e evitando a Companhia das Índias Orientais."
        ],
        imagemUrl: "https://i.imgur.com/j6s5Bqg.png"
    },
    {
        nome: "Peter Pan",
        dicas: [
            "Ele é um menino que se recusa a crescer e mora em uma ilha mágica.",
            "Voa com a ajuda de pó de fada e é amigo de uma pequena fada chamada Sininho."
        ],
        imagemUrl: "https://i.imgur.com/A83cQ1H.png"
    },
    
    {
        nome: "Homem-Aranha",
        dicas: [
            "Ele é um jovem fotógrafo que foi picado por um aracnídeo radioativo.",
            "Seus poderes incluem teias que ele atira dos pulsos e um 'sentido aranha' que o alerta sobre perigos."
        ],
        imagemUrl: "https://i.imgur.com/i9Tj63c.png"
    }
];

let personagemSecreto = {};
let tentativas = 0;
let dicaAtual = -1;
let pontuacao = 0;
const META_PONTOS = 100;

const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const gameScreen = document.getElementById('game-screen');
const inputPalpite = document.getElementById('adivinhaInput');
const btnEnviar = document.getElementById('enviarPalpiteBtn');
const mensagem = document.getElementById('mensagem');
const btnReiniciar = document.getElementById('reiniciarBtn');
const btnPedirDica = document.getElementById('pedirDicaBtn');
const divDica = document.getElementById('dica');
const pontuacaoTexto = document.getElementById('pontuacao');
const metaTexto = document.getElementById('meta');

function iniciarJogo() {
    const indiceAleatorio = Math.floor(Math.random() * personagens.length);
    personagemSecreto = personagens[indiceAleatorio];

    tentativas = 0;
    dicaAtual = -1;
    inputPalpite.value = '';
    mensagem.textContent = '';
    btnEnviar.disabled = false;
    btnPedirDica.style.display = 'inline-block';
    btnPedirDica.disabled = false;
    btnReiniciar.style.display = 'none';
    divDica.innerHTML = '<p>Toque em "Pedir Dica" para começar!</p>';
    inputPalpite.focus();
}

function atualizarPontuacao(pontosGanhos) {
    pontuacao += pontosGanhos;
    pontuacaoTexto.textContent = `Pontos: ${pontuacao}`;
}

function verificarPalpite() {
    const palpite = inputPalpite.value.trim().toLowerCase();
    
    if (palpite === '') {
        mensagem.textContent = 'Por favor, digite um nome de personagem.';
        return;
    }

    tentativas++;

    if (palpite === personagemSecreto.nome.toLowerCase()) {
        const pontosGanhos = calcularPontos(tentativas);
        atualizarPontuacao(pontosGanhos);
        mensagem.textContent = `Parabéns! Você acertou em ${tentativas} tentativa(s) e ganhou ${pontosGanhos} pontos!`;
        mensagem.className = 'win-message';
        fimDeJogoDaRodada();
    } else {
        mensagem.textContent = 'Incorreto. Tente novamente!';
        mensagem.className = 'lose-message';
        if (tentativas >= 3) {
            mensagem.textContent = `Você perdeu. O personagem era "${personagemSecreto.nome}".`;
            mensagem.className = 'lose-message';
            fimDeJogoTotal();
        }
    }
}

function mostrarDica() {
    dicaAtual++;
    if (dicaAtual < personagemSecreto.dicas.length) {
        divDica.innerHTML = `<p>${personagemSecreto.dicas[dicaAtual]}</p>`;
    } else {
        divDica.innerHTML = `<img src="${personagemSecreto.imagemUrl}" alt="Imagem do Personagem">`;
        btnPedirDica.disabled = true;
        mensagem.textContent = 'Última dica, agora é sua chance!';
        mensagem.className = '';
    }
}

function calcularPontos(tentativas) {
    if (tentativas === 1) return 10;
    if (tentativas === 2) return 5;
    if (tentativas === 3) return 1;
    return 0;
}

function fimDeJogoDaRodada() {
    btnEnviar.disabled = true;
    btnPedirDica.disabled = true;
    btnPedirDica.style.display = 'none';
    btnReiniciar.style.display = 'block';
    btnReiniciar.textContent = (pontuacao >= META_PONTOS) ? 'Você Venceu! Reiniciar Jogo' : 'Próximo Personagem';
}

function fimDeJogoTotal() {
    btnEnviar.disabled = true;
    btnPedirDica.disabled = true;
    btnPedirDica.style.display = 'none';
    btnReiniciar.style.display = 'block';
    btnReiniciar.textContent = 'Reiniciar Jogo';
}

function reiniciarTudo() {
    pontuacao = 0;
    pontuacaoTexto.textContent = `Pontos: 0`;
    iniciarJogo();
}

// Event Listeners para a transição e a lógica do jogo
startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    iniciarJogo();
});

btnReiniciar.addEventListener('click', () => {
    if (pontuacao >= META_PONTOS || mensagem.textContent.includes('Você perdeu')) {
        // Se venceu ou perdeu, volta para a tela inicial
        reiniciarTudo();
        gameScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
    } else {
        // Se não, vai para o próximo personagem
        iniciarJogo();
    }
});

btnEnviar.addEventListener('click', verificarPalpite);
btnPedirDica.addEventListener('click', mostrarDica);
inputPalpite.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        verificarPalpite();
    }
});