// write fn which will check if the second array have all the values from first one powered by 2

const sameSquared = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  const lookup = {}
  for (let number of arr1) {
    if (lookup[number]) lookup[number]++
    else lookup[number] = 1
  }

  for (let number of arr2) {
    const lookupRootIndex = Math.sqrt(number)
    if (lookup[lookupRootIndex]) lookup[lookupRootIndex]--
    else return false
  }
  return true
}

console.log(sameSquared([1, 2, 3], [4, 1, 9])) // true
console.log(sameSquared([1, 2, 3], [1, 9]))    // false
console.log(sameSquared([1, 2, 1], [4, 4, 1])) // false
