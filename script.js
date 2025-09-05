const personagens = [
    { nome: "Batman", dicas: ["Ele é um bilionário que combate o crime em Gotham City.", "Não tem superpoderes, mas usa tecnologia e gadgets avançados."], imagemUrl: "https://terraverso.com.br/wp-content/uploads/2019/10/batman.jpg" },
    { nome: "Capitão América", dicas: ["Ele é um super-soldado da Segunda Guerra Mundial, que foi congelado no tempo.", "Seu principal acessório é um escudo indestrutível feito de vibranium."], imagemUrl: "https://4.bp.blogspot.com/-6u5w-3BUFLU/V7Y6RxlkQ2I/AAAAAAAAGYY/VGo-nz51j9ApT4Nj0kdUOsvNOk7tGzfiACLcB/s1600/captain-america-first-avenger-captain-america-the-first-avenger-shield-chris-evans.jpg " },
    { nome: "Jack Sparrow", dicas: ["Ele é um pirata carismático, com um jeito de andar e falar únicos.", "Capitão do navio Pérola Negra, ele está sempre procurando tesouros e evitando a Companhia das Índias Orientais."], imagemUrl: "https://wallup.net/wp-content/uploads/2016/03/09/71796-movies-Pirates_of_the_Caribbean_On_Stranger_Tides-Jack_Sparrow.jpg " },
    { nome: "Darth Vader", dicas: ["É um dos vilões mais icônicos do cinema, com uma respiração pesada e robótica.", "Ele é um Lorde Sith, conhecido por ser o principal executor do Império Galáctico."], imagemUrl: "https://th.bing.com/th/id/R.f09a5c96669c29e33de93ea9e7373a6f?rik=%2fGr1sMFLpJhfWg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fStar-wars-darth-vader-images-wallpaper.jpg&ehk=U%2bJ%2f0LtlMuf%2f2W95dFpkDuXJQj%2fAZxjMQsaepzAB4so%3d&risl=1&pid=ImgRaw&r=0 " },
    { nome: "Elsa", dicas: ["Ela é uma rainha que nasceu com poderes de gelo e neve.", "Sua música tema mais famosa é 'Let it Go', e seu castelo é feito de gelo."], imagemUrl: "https://www.bing.com/images/search?view=detailV2&ccid=wk0RBEbw&id=EC055399464175E7B3517B32893539429D54B01E&thid=OIP.wk0RBEbwBrIl0q2gtpViSQHaFd&mediaurl=https%3a%2f%2fi.bssl.es%2funomasenlafamilia%2f2015%2f07%2felsa-de-frozzen.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c24d110446f006b225d2ada0b6956249%3frik%3dHrBUnUI5NYkyew%26pid%3dImgRaw%26r%3d0&exph=516&expw=700&q=elsa&FORM=IRPRST&ck=15979D3A8A67F887F4B508A170729164&selectedIndex=133&itb=0 " },
    { nome: "Frodo Bolseiro", dicas: ["Ele é um hobbit, uma criatura pequena que vive em um lugar chamado o Condado.", "Sua missão é destruir um anel mágico e poderoso em uma montanha de fogo."], imagemUrl: " https://i.pinimg.com/736x/e9/c0/85/e9c0853068e60cb73c33b2d283251c3e--frodo-baggins-elijah-wood.jpg" },
    { nome: "Gandalf", dicas: ["Ele é um mago poderoso, membro da Ordem de Istari.", "Guia os hobbits, anões e humanos em uma missão para derrotar um grande mal."], imagemUrl: " https://th.bing.com/th/id/R.1de9fd651c8456e9f331519c24251a96?rik=IrS1Mgz4s4uDxA&riu=http%3a%2f%2fimages.wikia.com%2flotr%2fimages%2f8%2f8d%2fGandalf-2.jpg&ehk=Nm3tJ5SK6z6MbERxfYI6yqcd3virc6P6FuI9Uv1fxxw%3d&risl=&pid=ImgRaw&r=0" },
    { nome: "Goku", dicas: ["É um dos últimos Saiyajins, um guerreiro do Planeta Vegeta.", "Sua técnica principal é o Kamehameha, e ele pode se transformar em Super Saiyajin."], imagemUrl: "https://th.bing.com/th/id/R.e250a240c9a6ef39edc4fe4be85f47ca?rik=CnKDPEEM5UObPw&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f25600000%2fHarry-Potter-Wallpaper-harry-james-potter-25678279-1024-768.jpg&ehk=jWoVLWfxA8g42TFnDmR1WtuXt0obNmcE5vVOpRLb8pE%3d&risl=&pid=ImgRaw&r=0 " },
    { nome: "Harry Potter", dicas: ["É um bruxo que sobreviveu à maldição de Voldemort quando era um bebê.", "Ele tem uma cicatriz na testa em forma de raio."], imagemUrl: " https://tse4.mm.bing.net/th/id/OIP.Om_AwL5X0n4z-t73rWp0DgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { nome: "Homem de Ferro", dicas: ["Ele é um inventor e bilionário excêntrico.", "Usa uma armadura de alta tecnologia para combater o crime e salvar o mundo."], imagemUrl: "https://tse2.mm.bing.net/th/id/OIP.QVBfHG4w-jv_mtbpIE06aAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3 " },
    { nome: "Homem Aranha", dicas: ["Ele é um jovem fotógrafo que foi picado por um aracnídeo radioativo.", "Seus poderes incluem teias que ele atira dos pulsos e um 'sentido aranha' que o alerta sobre perigos."], imagemUrl: " " },
    { nome: "Hulk", dicas: ["É um cientista que, após um experimento, se transforma em uma criatura gigante e verde quando fica irritado.", "Sua força é proporcional à sua raiva."], imagemUrl: " " },
    { nome: "Link", dicas: ["Ele é um herói da série 'The Legend of Zelda'.", "Normalmente usa uma túnica verde e carrega uma espada e um escudo, sendo o portador da Triforce da Coragem."], imagemUrl: " " },
    { nome: "Luffy", dicas: ["Ele é o capitão do bando do Chapéu de Palha.", "Seu corpo se tornou de borracha após ele comer uma fruta do diabo."], imagemUrl: " " },
    { nome: "Luke Skywalker", dicas: ["Ele é o herói de uma galáxia muito, muito distante.", "É um mestre Jedi, filho de um dos maiores vilões do cinema."], imagemUrl: " " },
    { nome: "Mario", dicas: ["É um encanador italiano do Reino Cogumelo.", "Ele pula em inimigos e come cogumelos para crescer."], imagemUrl: " " },
    { nome: "Mickey Mouse", dicas: ["É um personagem de desenho animado que usa luvas brancas e sapatos grandes.", "Ele mora em 'Mickey Mouse Clubhouse' e trabalha em 'Fantasia'."]},
    { nome: "Mulher Maravilha", dicas: ["Ela é uma princesa guerreira de Themyscira, uma ilha oculta.", "Seu principal acessório é o Laço da Verdade, que força as pessoas a dizerem a verdade."], imagemUrl: "https://i.imgur.com/Kx3u45L.jpeg" },
    { nome: "Optimus Prime", dicas: ["Ele é o líder dos Autobots.", "Seu corpo se transforma em um caminhão, e sua frase mais famosa é 'Autobots, roll out!'."], imagemUrl: "https://i.imgur.com/r9K8f4X.jpeg" },
    { nome: "Peter Pan", dicas: ["Ele é um menino que se recusa a crescer e mora em uma ilha mágica.", "Voa com a ajuda de pó de fada e é amigo de uma pequena fada chamada Sininho."], imagemUrl: "https://i.imgur.com/A83cQ1H.png" },
    { nome: "Sherlock Holmes", dicas: ["É um detetive particular britânico, conhecido por sua grande inteligência e observação.", "Vive na Rua Baker, 221B, em Londres, e é acompanhado por seu amigo Dr. Watson."], imagemUrl: "https://i.imgur.com/kYq3Q0L.jpeg" },
    { nome: "SpongeBob SquarePants", dicas: ["É uma criatura amarela que mora em um abacaxi, no fundo do mar.", "Seu melhor amigo é uma estrela do mar, e ele trabalha no Siri Cascudo."], imagemUrl: "https://i.imgur.com/39wF4y8.jpeg" },
    { nome: "Super-Homem", dicas: ["Ele é um alienígena do planeta Krypton, enviado à Terra ainda bebê.", "Seus poderes incluem superforça, voo e visão de raio-x."], imagemUrl: "https://i.imgur.com/fVq6X0k.jpeg" }
];

let personagemSecreto = {};
let tentativas = 0;
let pontuacao = 0;
let dicaAtual = -1;
let nomeJogador = "";

// Variáveis do cronômetro
let timer;
const TEMPO_MAXIMO = 60; // Tempo em segundos
let tempoRestante = TEMPO_MAXIMO;

// Elementos da tela de início
const startScreen = document.getElementById('start-screen');
const startBtn = document.getElementById('start-btn');
const nameInput = document.getElementById('name-input');

// Elementos da tela de jogo
const gameScreen = document.getElementById('game-screen');
const inputPalpite = document.getElementById('adivinhaInput');
const btnEnviar = document.getElementById('enviarPalpiteBtn');
const mensagem = document.getElementById('mensagem');
const btnReiniciar = document.getElementById('reiniciarBtn');
const btnPedirDica = document.getElementById('pedirDicaBtn');
const divDica = document.getElementById('dica');
const pontuacaoTexto = document.getElementById('pontuacao');
const playerNameDisplay = document.getElementById('player-name-display');
const timerDisplay = document.getElementById('timer-display');

function iniciarJogo() {
    // Para um novo jogo, zera a pontuação
    if (pontuacao === 0) {
        pontuacaoTexto.textContent = `Pontos: 0`;
    }

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
    playerNameDisplay.textContent = `${nomeJogador}'s Jogo`;
    inputPalpite.focus();
    
    // Inicia o cronômetro
    resetarCronometro();
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
        mensagem.textContent = `Parabéns, ${nomeJogador}! Você acertou em ${tentativas} tentativa(s) e ganhou ${pontosGanhos} pontos!`;
        mensagem.className = 'win-message';
        fimDeJogoDaRodada();
    } else {
        mensagem.textContent = 'Incorreto. Tente novamente!';
        mensagem.className = 'lose-message';
        if (tentativas >= 3) {
            mensagem.textContent = `Você perdeu, ${nomeJogador}. O personagem era "${personagemSecreto.nome}".`;
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
    clearInterval(timer);
    btnEnviar.disabled = true;
    btnPedirDica.disabled = true;
    btnPedirDica.style.display = 'none';
    btnReiniciar.style.display = 'block';
    btnReiniciar.textContent = (pontuacao >= META_PONTOS) ? 'Você Venceu! Reiniciar Jogo' : 'Próximo Personagem';
}

function fimDeJogoTotal() {
    clearInterval(timer);
    btnEnviar.disabled = true;
    btnPedirDica.disabled = true;
    btnPedirDica.style.display = 'none';
    btnReiniciar.style.display = 'block';
    btnReiniciar.textContent = 'Reiniciar Jogo';
}

function perderPorTempo() {
    clearInterval(timer);
    mensagem.textContent = `Tempo esgotado, ${nomeJogador}! O personagem era "${personagemSecreto.nome}".`;
    mensagem.className = 'lose-message';
    fimDeJogoTotal();
}

function atualizarCronometro() {
    tempoRestante--;
    timerDisplay.textContent = `Tempo: ${tempoRestante}s`;
    
    // Altera a cor do texto quando o tempo estiver acabando
    if (tempoRestante <= 10) {
        timerDisplay.classList.add('danger');
    } else {
        timerDisplay.classList.remove('danger');
    }

    if (tempoRestante <= 0) {
        perderPorTempo();
    }
}

function resetarCronometro() {
    clearInterval(timer);
    tempoRestante = TEMPO_MAXIMO;
    timerDisplay.textContent = `Tempo: ${tempoRestante}s`;
    timerDisplay.classList.remove('danger');
    timer = setInterval(atualizarCronometro, 1000);
}

// Event Listeners para a transição e a lógica do jogo
startBtn.addEventListener('click', () => {
    nomeJogador = nameInput.value.trim();
    if (nomeJogador === "") {
        nomeJogador = "Jogador"; // Nome padrão
    }
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    iniciarJogo();
});

btnReiniciar.addEventListener('click', () => {
    if (pontuacao >= META_PONTOS || mensagem.textContent.includes('Você perdeu') || mensagem.textContent.includes('Tempo esgotado')) {
        pontuacao = 0;
        iniciarJogo();
        gameScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
    } else {
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