// Função para verificar se um número pertence à sequência de Fibonacci

function verificaFibonacci(numero) {
  let n1 = 0;
  let n2 = 1;

  while (n2 <= numero) {
      if (n2 === numero) {
          return true; // O número pertence à sequência
      }
      const proximo = n1 + n2;
      n1 = n2;
      n2 = proximo;
  }

  return false; // O número não pertence à sequência

}

// FIMfunção para verificar se um número pertence à sequência de Fibonacci

// Função para responder se pertence ou não a Fibonacci

function repondeNumero() {

  const numeroInformado = parseInt(prompt('Informe um número: '));
  
  if (verificaFibonacci(numeroInformado)) {
    document.getElementById("resultado").textContent = `${numeroInformado} pertence à sequência de Fibonacci.`;
  } else {
    document.getElementById("resultado").textContent = `${numeroInformado} não pertence à sequência de Fibonacci.`;
  }
}

// FIMfunção para responder se pertence ou não a Fibonacci

repondeNumero(); //Código para rodar função