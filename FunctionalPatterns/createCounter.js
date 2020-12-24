// write fn which will be create counter invoking which will result to this output:
// 6 7 8 5 6 7
const createCounter = (start, end) => {
  let count = start;
  return () => {
    if(count === end) {
      return count = start;
    }
    return ++count;
  }
}

const counter = createCounter(5, 8);
console.log(counter()); // 6
console.log(counter()); // 7
console.log(counter()); // 8
console.log(counter()); // 5
console.log(counter()); // 6
console.log(counter()); // 7
