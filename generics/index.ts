// Função com generics
function identity<T>(arg: T): T {
  return arg;
}

let result1 = identity(5); // result1 será do tipo 'number'
let result2 = identity("hello"); // result2 será do tipo 'string'

console.log(result1);
console.log(result2);
