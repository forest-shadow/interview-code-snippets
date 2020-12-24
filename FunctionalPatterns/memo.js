// write memo fn
const sum = (a, b) => a + b;
const getKey = (...args) => args.reduce((acc, arg) => acc.concat(`${arg}:${typeof arg};`), '')


const memo = fn => {
  const hash = {};
  let counter = 0;
  return (...args) => {
    const currentKey = getKey(...args);
    if (hash[currentKey]) {
      return hash[currentKey];
    }

    console.log(++counter);
    return hash[currentKey] = fn(...args);
  }
}

const memoSum = memo(sum);
console.log('sum', memoSum(1, 2));
console.log('sum', memoSum(1, 2));
console.log('sum', memoSum(1, 2));
console.log('sum', memoSum(2, 3));
console.log('sum', memoSum(2, 3));