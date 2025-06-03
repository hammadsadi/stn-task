// 1.Task: Array Filtering and Mapping
const people = [
  { name: "Alice", age: 25, gender: "Female" },
  { name: "Bob", age: 30, gender: "Male" },
  { name: "Charlie", age: 22, gender: "Male" },
  { name: "Diana", age: 28, gender: "Female" },
  { name: "Ethan", age: 35, gender: "Male" },
  { name: "Fiona", age: 27, gender: "Female" },
  { name: "George", age: 24, gender: "Male" },
  { name: "Hannah", age: 29, gender: "Female" },
  { name: "Ivan", age: 32, gender: "Male" },
  { name: "Julia", age: 26, gender: "Female" },
  { name: "Kevin", age: 31, gender: "Male" },
  { name: "Laura", age: 23, gender: "Female" },
  { name: "Mike", age: 34, gender: "Male" },
  { name: "Nina", age: 21, gender: "Female" },
  { name: "Oscar", age: 33, gender: "Male" },
  { name: "Paula", age: 29, gender: "Female" },
  { name: "Quentin", age: 36, gender: "Male" },
  { name: "Rachel", age: 22, gender: "Female" },
  { name: "Sam", age: 27, gender: "Male" },
  { name: "Tina", age: 24, gender: "Female" },
];

//  Get Male Name
const getMaleNames = (people) => {
  const maleNames = people
    .filter((person) => person.gender === "Male")
    .map((person) => person.name);
  return maleNames;
};
console.log(getMaleNames(people));
