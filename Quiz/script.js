// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta: "Quem descobriu o Brasil?",
    respostas: [
      { opcao: "Dom Pedro I", correto: false },
      { opcao: "Pedro Álvares Cabral", correto: true },
      { opcao: "Deodoro da Fonseca", correto: false }
    ]
  },
  {
    pergunta: "Qual é o animal mais rápido do mundo em terra?",
    respostas: [
      { opcao: "Leopardo", correto: false },
      { opcao: "Cavalo", correto: false },
      { opcao: "Guepardo", correto: true }
    ]
  },
  {
    pergunta: "Quem foi o primeiro presidente do Brasil?",
    respostas: [
      { opcao: "Marechal Deodoro da Fonseca", correto: true },
      { opcao: "Getúlio Vargas", correto: false },
      { opcao: "Juscelino Kubitschek", correto: false }
    ]
  },
  {
    pergunta: "Qual é o maior país do mundo em extensão territorial?",
    respostas: [
      { opcao: "China", correto: false },
      { opcao: "Rússia", correto: true },
      { opcao: "Canadá", correto: false }
    ]
  },
  {
    pergunta: "Qual é a fórmula da água?",
    respostas: [
      { opcao: "H2O", correto: true },
      { opcao: "CO2", correto: false },
      { opcao: "O2", correto: false }
    ]
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    respostas: [
      { opcao: "Vincent van Gogh", correto: false },
      { opcao: "Pablo Picasso", correto: false },
      { opcao: "Leonardo da Vinci", correto: true }
    ]
  },
  {
    pergunta: "Em que ano o homem foi à lua pela primeira vez?",
    respostas: [
      { opcao: "1959", correto: false },
      { opcao: "1969", correto: true },
      { opcao: "1972", correto: false }
    ]
  },
  {
    pergunta: "Qual é o oceano mais profundo do mundo?",
    respostas: [
      { opcao: "Oceano Pacífico", correto: true },
      { opcao: "Oceano Atlantico", correto: false },
      { opcao: "Oceano Índico", correto: false }
    ]
  },
  {
    pergunta: "Qual é o idioma mais falado no mundo?",
    respostas: [
      { opcao: "Inglês", correto: false },
      { opcao: "Mandarim", correto: true },
      { opcao: "Espanhol", correto: false }
    ]
  },
  {
    pergunta: "Qual é o maior animal terrestre?",
    respostas: [
      { opcao: "Girafa", correto: false },
      { opcao: "Hipopótamo", correto: false },
      { opcao: "Elefante africano", correto: true }
    ]
  }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos++; // Incrementa o contador de acertos
      }

      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
