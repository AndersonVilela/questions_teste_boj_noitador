const invoicingStates = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

let amount = 0
const percentages = {}

for (const state in invoicingStates) {
  amount += invoicingStates[state]
}

for (const state in invoicingStates) {
  const percentual = (invoicingStates[state] / amount * 100)
  percentages[state] = percentual
}

console.log(`Valor total mensal da distribuidora: R$ ${amount.toFixed(2)}`);
for (const state in percentages) {
  console.log(`${state}: ${percentages[state].toFixed(2)}%`)
}
