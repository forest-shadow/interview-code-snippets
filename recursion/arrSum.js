// write recursive function able to sum array's elements
const arrSum = ([head, ...tail]) => head ? head + arrSum(tail) : 0;

console.log(arrSum([1, 2, 3, 4, 5]))
