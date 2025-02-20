function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 10); // Correct: No type error

//Alternative solutions:

//1. Type assertion (use with caution):
let result2 = add(5, <number> '10');

//2. Type guard:
function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: number, b: any): number {
  if (isNumber(b)) {
    return a + b;
  } else {
    return a; // Or throw an error
  }
}

let result3 = addSafe(5, '10'); //result3 will be 5
let result4 = addSafe(5, 10); //result4 will be 15