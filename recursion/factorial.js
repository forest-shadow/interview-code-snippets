// write fn which will be calculate number's factorial

const factorial = num => num > 1 ? num * factorial(num - 1) : num;
// or
// const factorial = (num) => num > 1 ? num * factorial(num - 1) : 1;
console.log(factorial(5)); // 120