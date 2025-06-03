// Variáveis para guardar os times e suas forças
let jogador = [];
let maquina = [];
let forcaJogador = 0;
let forcaMaquina = 0;

// Função chamada quando o jogador clica no botão "Jogar!"
function jogar() {
  // Pega os gatos escolhidos nos selects da página
  jogador = [
    document.getElementById("cat1").value,
    document.getElementById("cat2").value,
    document.getElementById("cat3").value
  ];

  // Inicializa a força do time Jogador zerada
  forcaJogador = 0;

  // Para cada gato escolhido, adiciona uma força aleatória entre 1 e 10
  jogador.forEach(() => {
    forcaJogador += Math.floor(Math.random() * 10) + 1;
  });

  // Lista de possíveis gatos da Maquina que serão sorteados para o computador
  let possiveisMaq = [
    "Frajola", "Laranja", "Tigrado", "Siamês", "Tricolor", "Branco e Preto" ];

  // Inicializa o time Maquina vazio e força zerada
  maquina = [];
  forcaMaquina = 0;

  // Sorteia 3 gatos da Maquina aleatórios e calcula a força deles
  for (let i = 0; i < 3; i++) {
    let aleatorio = Math.floor(Math.random() * possiveisMaq.length);
    maquina.push(possiveisMaq[aleatorio]);
    forcaMaquina += Math.floor(Math.random() * 10) + 1;
  }

  // Mostra o botão "Ver Resultado" para o jogador clicar depois
  document.getElementById("resultadoBtn").style.display = "inline-block";
}

// Função chamada quando o jogador clica no botão "Ver Resultado"
function verResultado() {
  // Exibe o time do jogador e a força total na página
  document.getElementById("informacoesJogador").textContent =
    `Seu time: ${jogador.join(", ")} | Fofura total: ${forcaJogador}`;

  // Exibe o time do computador (Maquina) e a força total na página
  document.getElementById("informacoesComputador").textContent =
    `Meu time: ${maquina.join(", ")} | Fofura total: ${forcaMaquina}`;

  // Compara as forças para decidir quem ganhou e mostra o resultado final
  if (forcaJogador > forcaMaquina) {
    document.getElementById("resultadoFinal").textContent = "🎉 Você venceu! Eles eram mesmo tãao fofinhos ";
  } else if (forcaMaquina > forcaJogador) {
    document.getElementById("resultadoFinal").textContent = "💥 Eu venci! Meu time te esmagou com tanta fofura!";
  } else {
    document.getElementById("resultadoFinal").textContent = "⚖️ Empate! Vamos tentar de novo!";
  }

  // Esconde o botão "Ver Resultado" até a próxima rodada
  document.getElementById("resultadoBtn").style.display = "none";
}
