// 3.Task: Function Composition

//  Square the number
const squareNumber = (num) => num * num;

//  Double the number
const doubleNumber = (num) => num * 2;

// Add 5 to the number
const addFive = (num) => num + 5;

// Compose the functions
const composedFunction = (num) => {
  const squared = squareNumber(num);
  const doubled = doubleNumber(squared);
  const result = addFive(doubled);
  return result;
};
console.log(composedFunction(5));
