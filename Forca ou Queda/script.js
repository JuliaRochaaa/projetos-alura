//Preciso criar uma lista com 3 personagens

marvel = ["", "", ""];
dc = ["", "", ""];

forcaM = 0;
forcaD = 0;

console.log(`Array Marvel Início: ${marvel}`);
for (let i = 0; i < 3; i++) {
  escolhaMarvel = prompt(
    `Digite o Herói ${
      i + 1
    } da Marvel: \n- Homem de Ferro \n- Fenix Negra \n- Capitã Marvel \n- Capitão América`
  );
  marvel[i] = escolhaMarvel;
  //Calcular a força de cada personagem e depois somar para saber a força do time
  forcaM = forcaM + Math.floor(Math.random() * 10) + 1;
  //forcaM += Math.floor(Math.random() * 10) + 1 / Maneira mais avançada de fazer a mesma coisa
}
console.log(`Array Marvel Final: ${marvel}`);

console.log(`Array DC Início: ${dc}`);
for (let i = 0; i < 3; i++) {
  indiceAleatorio = Math.floor(Math.random() * 6);
  possiveisDC = [
    "Batwoman",
    "SuperHomem",
    "Mulher Maravilha",
    "Katana",
    "Batman",
    "Aquaman"
  ];
  dc[i] = possiveisDC[indiceAleatorio];
  //Calcular a força de cada personagem do time do computador
  forcaD = forcaD + Math.floor(Math.random() * 10) + 1;
  //forcaD += Math.floor(Math.random() * 10) + 1; / Maneira mais avançada de fazer a mesma coisa
}
console.log(`Array DC Final? ${dc}`);

//Comparar os dois times pra saber quem ganhou
if (forcaM > forcaD) {
  alert(
    `Seu time é muito forte! Você ganhou a batalha! \nForça Total: ${forcaM}`
  );
} else {
  if (forcaD > forcaM) {
    alert(
      `Não foi dessa vez, seu time é fraco! Time DC ganhou com força ${forcaD}`
    );
  } else {
    alert(
      `Deu empate! Os dois times têm a mesma força. \nForça Marvel: ${forcaM} \nForça DC: ${forcaD}`
    );
  }
}
