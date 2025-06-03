function jogar() {

  // Jogador escolhe entre 1 (Pedra), 2 (Papel) ou 3 (Tesoura)
  let escolhaJogador = prompt("Escolha uma opção: [1] Pedra, [2] Papel ou [3] Tesoura");

  // Computador escolhe aleatoriamente entre 1 e 3
  let escolhaComput = Math.floor(Math.random() * 3) + 1;

  // Verifica empate
  if (escolhaJogador == escolhaComput) {
    alert("Empate. Vamos tentar de novo!");
  }

  // Verifica combinações possíveis quando o jogador escolhe Pedra
  if (escolhaJogador == 1) {
    if (escolhaComput == 2) {
      alert("Você escolheu Pedra");
      alert("Eu escolhi Papel");
      alert("Ihh, não foi dessa vez! Tente novamente, quem sabe você tenha mais sorte.");
    }
    if (escolhaComput == 3) {
      alert("Você escolheu Pedra");
      alert("Eu escolhi Tesoura");
      alert("AEE, você venceu! Mas só dessa vez hein, vamos jogar outra partida!");
    }
  }

  // Verifica combinações quando o jogador escolhe Papel
  if (escolhaJogador == 2) {
    if (escolhaComput == 1) {
      alert("Você escolheu Papel");
      alert("Eu escolhi Pedra");
      alert("AEE, você venceu! Mas só dessa vez hein, vamos jogar outra partida!");
    }
    if (escolhaComput == 3) {
      alert("Você escolheu Papel");
      alert("Eu escolhi Tesoura");
      alert("Ihh, não foi dessa vez! Tente novamente, quem sabe você tenha mais sorte.");
    }
  }

  // Verifica combinações quando o jogador escolhe Tesoura
  if (escolhaJogador == 3) {
    if (escolhaComput == 1) {
      alert("Você escolheu Tesoura");
      alert("Eu escolhi Pedra");
      alert("Ihh, não foi dessa vez! Tente novamente, quem sabe você tenha mais sorte.");
    }
    if (escolhaComput == 2) {
      alert("Você escolheu Tesoura");
      alert("Eu escolhi Papel");
      alert("AEE, Você venceu! Mas só dessa vez hein, vamos jogar outra partida!");
    }
  }
}
