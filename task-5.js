//  5.Task: Find and Modify

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
];

const findAndModifyUserInfo = (userArray, userName, newAge) => {
  for (let user of userArray) {
    if (user.name === userName) {
      user.age = newAge;
      return userArray;
    }
  }
  return null;
};

const modifiedUser = findAndModifyUserInfo(people, "Bob", 31);
console.log(modifiedUser);
