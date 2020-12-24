// [1, [1, 2, [3, 4]], [2, 4]] -> [1, 1, 2, 3, 4, 2, 4]
const flattenArr = (arr) => {
  let result = []
  for (let el of arr) {
    if (Array.isArray(el)) {
      result = [...result, ...flattenArr(el)]
    } else {
      result = [...result, el]
    }
  }
  return result
}

const arr = [1, [1, 2, [3, 4]], [2, 4]]
console.log(flattenArr(arr))
