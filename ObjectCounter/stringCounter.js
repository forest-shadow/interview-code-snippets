const stringCounter = str => {
  const counter = {}
  for (let char of str.split('')) {
    if (counter[char]) counter[char]++
    else counter[char] = 1
  }
  return counter
}

console.log(stringCounter('aaaa'))
console.log(stringCounter('hello'))
