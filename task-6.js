//  6.Task: Array Reduction

const numbers = [1, 2, 3, 4, 5, 6];
const someOfEvenNumber = (numbers) => {
  return numbers.reduce((acc, curr) => {
    if (curr % 2 === 0) {
      return acc + curr;
    }
    return acc;
  }, 0);
};

const sumOfEvenNumber = someOfEvenNumber(numbers);
console.log(sumOfEvenNumber);
