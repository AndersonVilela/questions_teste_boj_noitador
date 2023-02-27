import dados from "./dados.json" assert {type: "json"};

 const dayleBilling = dados.map((e) => {
  if (e.valor > 0) {
    return e.valor
  }
})

let menorinvoicing = dayleBilling[0];
let higherRevenue = dayleBilling[0];
let somainvoicing = 0;
let daysAboveAverage = 0;

for (let i = 0; i < dayleBilling.length; i++) {
  const invoicing = dayleBilling[i];

  if (invoicing < menorinvoicing) {
    menorinvoicing = invoicing;
  }
  if (invoicing > higherRevenue) {
    higherRevenue = invoicing;
  }

  if (invoicing > 0) {
    somainvoicing += invoicing;
    daysAboveAverage++;
  }
}

const mediaMensal = somainvoicing / daysAboveAverage;

let daysAboveAverageMensal = 0;
for (let i = 0; i < dayleBilling.length; i++) {
  const invoicing = dayleBilling[i];
  if (invoicing > mediaMensal) {
    daysAboveAverageMensal++;
  }
}

console.log(`Menor invoicing diário: R$ ${menorinvoicing}`);
console.log(`Maior invoicing diário: R$ ${higherRevenue}`);
console.log(`Número de dias acima da média mensal: ${daysAboveAverageMensal}`);
