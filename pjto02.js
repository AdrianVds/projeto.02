var prompt = require('prompt-sync')();
var conte = 0;
var conte1 = 0;
empates = 0;
console.log("--------------------------------");
console.log("JO KEN PÔ");
console.log("Opções: pedra,papel,tesoura");
console.log("--------------------------------");
jogar();
function jogar(){
  var rodadas = +prompt("Deseja jogar quantas rodadas: ");
  for (let i = 0; i < rodadas; i+=1){
    console.log("--------------------------------")
    var escolha = prompt("Digite sua opção: ");
    var computador = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
  if (computador === 0){
    computador = "pedra";
  }else if (computador === 1){
    computador = "papel" ;
  }else if (computador === 2){
    computador = "tesoura";
  }
  console.log(`Computador jogou: ${computador}`);
  if (escolha === computador){
    empates+=1;
    console.log("ouve empate");
  }else if (escolha === "papel" && computador === "pedra"){
    conte+=1;
    console.log("Voce ganhou");
  }else if (escolha === "pedra" && computador === "tesoura"){
    conte+=1;
    console.log("voce ganhou");
  }else if (escolha === "tesoura" && computador === "papel"){
    conte+=1;
    console.log("voce ganhou");
  }else {
    conte1+=1;
    console.log("voce perdeu");
  }
}
  console.log("--------------------------------");
  console.log(`pontuação atual: Voce ${conte} pontos`);
  console.log(`pontuação atual: computador ${conte1} pontos`);
  console.log(`Empates atuais: ${empates} empates`);
  console.log("--------------------------------");
}
function jogarNovamente(){
  var jogarpartida = prompt("deseja jogar novamente?");
  if (jogarpartida === "sim"){
    jogar();
    jogarNovamente();
  }else if(jogarpartida != "sim") {
    console.log();
    console.log("Obrigado por jogar! volte sempre")
  }
}
jogarNovamente();