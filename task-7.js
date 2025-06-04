//  7. Task: Leap Year Checker
const numbers = [1, 2, 2, 3, 4, 4, 5, 1];

const getUniqueNumbers = (numbers) => {
  const uniqueNumbers = [...new Set(numbers)];
  return uniqueNumbers;
};

const uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers);
