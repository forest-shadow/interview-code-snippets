// write fn which will be return exp in specified power
const exp = (num, pow) => pow > 0 ? num * exp(num, pow - 1) : 1;

console.log(exp(2,4)); // 16