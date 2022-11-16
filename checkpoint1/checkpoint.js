let readylineSync = require('readline-sync');

let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;

console.log(`  
  --menu--
  1 - Pipoca
  2 - Macarrão
  3 - Carne
  4 - Feijão
  5 - Brigadeiro

`);
let opcoes = readylineSync.question('Escolha uma opcao: ');
let tempo = readylineSync.question('Digite o tempo desejado: ');

function tempoInsuficiente(opcoes, tempo) {
  if (opcoes == 1 && tempo < pipoca) {
    return console.log('Tempo insuficiente');
  } else if (opcoes == 2 && tempo < macarrao) {
    return console.log('Tempo insuficiente');
  } else if (opcoes == 3 && tempo < carne) {
    return console.log('Tempo insuficiente');
  } else if ((opcoes = 4 && tempo < feijao)) {
    return console.log('Tempo insuficiente');
  } else if (opcoes == 5 && tempo < brigadeiro) {
    return console.log('Tempo insuficiente');
  }
}

function comidaQueimada(opcoes, tempo) {
  if (opcoes == 1 && tempo == pipoca * 2) {
    return console.log('Comida Queimou');
  } else if (opcoes == 2 && tempo == macarrao * 2) {
    return console.log('Comida Queimou');
  } else if (opcoes == 3 && tempo == carne * 2) {
    return console.log('Comida Queimou');
  } else if (opcoes == 4 && tempo == feijao * 2) {
    return console.log('Comida Queimou');
  } else if (opcoes == 5 && tempo == brigadeiro * 2) {
    return console.log('Comida Queimou');
  }
}

function Kaboon(opcoes, tempo) {
  if (opcoes == 1 && tempo == pipoca * 3) {
    return console.log('Kaboon');
  } else if (opcoes == 2 && tempo == macarrao * 3) {
    return console.log('Kaboon');
  } else if (opcoes == 3 && tempo == carne * 3) {
    return console.log('kaboon');
  } else if (opcoes == 4 && tempo == feijao * 3) {
    return console.log('Kaboon');
  } else if (opcoes == 5 && tempo == brigadeiro * 3) {
    return console.log('Kaboon');
  }
}

function opcaoNaoListada(opcoes) {
  if (opcoes < 1 || opcoes > 5) {
    return console.log('Opção Inexistente!!');
  }
}

function imprimirResultado(opcoes, tempo) {
  if (opcaoNaoListada(opcoes)) {
    return;
  } else if (comidaQueimada(opcoes, tempo)) {
    return;
  } else if (Kaboon(opcoes, tempo)) {
    return;
  } else if (tempoInsuficiente(opcoes, tempo)) {
    return;
  }
  return console.log('Prato Pronto, Bom apetite');
}

imprimirResultado(opcoes, tempo);

// console.log('Prato pronto. Bom apetite');
