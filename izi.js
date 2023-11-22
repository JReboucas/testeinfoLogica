// FizzBuzz 
for (let i = 1; i <= 50; i++) {
    // Checa se o número é múltiplo de 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    // Checa se o número é múltiplo de 3
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    // Checa se o número é múltiplo de 5
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    // Se não for múltiplo de 3 ou 5, imprime o número
    else {
      console.log(i);
    }
  }
  