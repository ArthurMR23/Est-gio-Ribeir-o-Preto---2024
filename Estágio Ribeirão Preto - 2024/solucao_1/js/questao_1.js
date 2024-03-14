// Variáveis do programa

let INDICE = 13;
let SOMA = 0;
let K = 0;

// FIMvariáveis do programa

// Função com a estrutura do código, se precisar alterar valor, alterar váriavies

function estruturaPrograma() {
  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }
  return SOMA; // Retornar o valor da soma
}

// FIMfunção com a estrutura do código, se precisar alterar valor, alterar váriavies

// Exibir o resultado na tela

document.getElementById("resultado").textContent = "Resultado: " + estruturaPrograma();

// FIMexibir o resultado na tela
