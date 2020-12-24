const range = (start, end) => end > start ? [...range(start, end - 1), end]: [start]

const rangeTest = (start, end) => end > start ? [start, ...range(start + 1, end)] : [end]

console.log(range(2, 6))
console.log(rangeTest(2, 6))