// os dois números que serão iniciados para criar a sequencia
const sequenceFibo = [0, 1]
// numero a ser testado, caso queria testar outro, por favor restire o 5 e digite o desejado
const numberPrompt = 5

// estrutura de repeticao usado para calcular a sequencia até o numero digitado
while (sequenceFibo[sequenceFibo.length - 1] < numberPrompt) {
  const nextFibo =
    sequenceFibo[sequenceFibo.length - 1] +
    sequenceFibo[sequenceFibo.length - 2]
  sequenceFibo.push(nextFibo)
}

// estrutura condicional usado para destinguir se o  numero digitado esta dentro do array previamente criado
if (sequenceFibo.includes(parseInt(numberPrompt))) {
  console.log(`${numberPrompt} pertence`)
} else {
  console.log(`${numberPrompt} não pertence`)
}
