// Array's Unique Values Counter
// Implement a function called countUniqueValues, which accepts a sorted array, 
// and counts the unique values in the array. There can be negative numbers in the array but it always be sorted.

// countUniqueValues([1,1,1,1,1,2])                    // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])       // 7
// countUniqueValues([])                               // 0
// countUniqueValues([-2,-1,-1,0,1])                   // 4

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0
  let counter = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[counter] !== arr[j]) {
      counter++
      arr[j] = arr[counter]
    }
  }
  return counter + 1
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4