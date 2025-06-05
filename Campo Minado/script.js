function jogar() {

  let ganhou = 0; // 0 = venceu, 1 = perdeu

  for (let rodada = 1; rodada <= 3; rodada++) {
    console.log(`Rodada: ${rodada}`);

    // Jogador escolhe uma direção
    let escolhaJogador = parseInt(
      prompt(`Nível: ${rodada}. \nPreparado(a)? \nDecida para qual direção ir: \n[1]Esquerda [2]Meio [3]Direita`)
    );

    // Valida a escolha
    if (isNaN(escolhaJogador) || escolhaJogador < 1 || escolhaJogador > 3) {
      alert("Opção Inválida! Tente novamente.");
      continue; // Repete a rodada
    }

    // Define aleatoriamente onde está a bomba
    let bomba = Math.floor(Math.random() * 3) + 1;

    // Verifica se jogador acertou a bomba
    if (escolhaJogador == bomba) {
      alert("Explosão! Fim de jogo pra você.");
      rodada = 1000; // Interrompe o loop
      ganhou = 1;
    } else {
      alert(`Ufa, você passou! A bomba estava na direção ${bomba}`);
    }
  }

  // Mensagem final com base no resultado
  if (ganhou == 0) {
    alert("Que sorte! Você sobreviveu ao Campo Minado!");
  } else {
    alert("Não desista agora, talvez você tenha mais sorte na próxima rodada.");
  }
}
