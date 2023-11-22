// Fibonacci
let n1 = 0;
let n2 = 1;
let nextTerm;

console.log('Sequência de Fibonacci:');
console.log(n1); // Imprime o primeiro número da sequência
console.log(n2); // Imprime o segundo número da sequência

// Loop para imprimir os próximos 38 números
for (let i = 3; i <= 40; i++) {
  nextTerm = n1 + n2;
  console.log(nextTerm);
  // Atualiza os valores de n1 e n2 para os próximos termos
  n1 = n2;
  n2 = nextTerm;
}
