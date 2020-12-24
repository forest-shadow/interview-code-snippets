// Реализуйте функцию store(value) которая сохранит значение в замыкании возвращаемой функции, 
// а после ее вызова вернет значение из замыкания, как в примере:
const store = value => () => value;

const read = store(5);
const value = read();
console.log(value); // Output: 5