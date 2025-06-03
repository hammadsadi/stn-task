//  4.Task: Sorting Objects
const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Chevrolet", model: "Camaro", year: 2018 },
  { make: "BMW", model: "X5", year: 2022 },
  { make: "Mercedes-Benz", model: "C-Class", year: 2020 },
  { make: "Hyundai", model: "Elantra", year: 2017 },
  { make: "Nissan", model: "Altima", year: 2019 },
  { make: "Kia", model: "Sorento", year: 2021 },
  { make: "Audi", model: "A4", year: 2023 },
];

cars.sort((a, b) => a.year - b.year);
console.log(cars);
