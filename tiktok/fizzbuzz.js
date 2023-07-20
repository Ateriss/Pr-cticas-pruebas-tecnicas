/*Escribe un programa que imprima los números del 1 al 100. Pero para los múltiplos de 3, en lugar del número, imprime "Fizz", y para los múltiplos de 5, imprime "Buzz". Para aquellos números que son múltiplos tanto de 3 como de 5, imprime "FizzBuzz".*/

// Testing con Jest

export const fizzbuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz';
    } else if (num % 3 === 0) {
      return 'Fizz';
    } else if (num % 5 === 0) {
      return 'Buzz';
    }
    return num;
  };