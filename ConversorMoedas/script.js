function conversor() {

  moeda = prompt("Para qual moeda você quer converter? (Dólar, Euro ou Won) ")

  valor = prompt("Qual valor?")

  let umWon = 0.0040  // 1 Won equivale a 0.0040 reais
  let umDolar = 5.71  // 1 Dólar equivale a 5.71 reais
  let umEuro = 6.17   // 1 Euro equivale a 6.17 reais

  let conversor  // Variável que armazenará o resultado da conversão

  // Função para formatar o número com duas casas decimais no formato brasileiro
  function formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  // Verifica se a moeda escolhida foi Won (maiúsculo ou minúsculo)
  if ((moeda == "Won") || (moeda == "won")) {
    conversor = valor / umWon  // Converte reais para Won
    alert(`A conversão ficou em ₩ ${formatarValor(conversor)}.`)  // Mostra o resultado formatado
  }

  // Verifica se a moeda escolhida foi Dólar
  else if ((moeda == "Dólar") || (moeda == "dólar")) {
    conversor = valor / umDolar  // Converte reais para Dólar
    alert(`A conversão ficou em US$ ${formatarValor(conversor)}.`)
  }

  // Verifica se a moeda escolhida foi Euro
  else if ((moeda == "Euro") || (moeda == "euro")) {
    conversor = valor / umEuro  // Converte reais para Euro
    alert(`A conversão ficou em ${formatarValor(conversor)} €.`)
  }

  // Se a moeda informada não for válida
  else {
    alert("Moeda inválida! Tente novamente.")  // Mensagem de erro
  }
}
