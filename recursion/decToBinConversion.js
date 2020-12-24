function F(x, y) {
  return Math.ceil(Math.log(y) / Math.log(x))
}

function bitsMap(bitsNumber) {
  return bitsNumber > 1
    ? [2 ** (bitsNumber - 1), ...bitsMap(bitsNumber - 1)]
    : [1]
}

function decToBinConversion(decNum) {
  const bitsArr = bitsMap(getBaseLog(2, decNum))
  let tempNum = decNum
  return bitsArr.reduce((acc, bit) => {
    if (tempNum - bit >= 0) {
      tempNum -= bit
      return (acc += '1')
    } else {
      return (acc += '0')
    }
  }, '')
}

console.log(decToBinConversion(255))
console.log(decToBinConversion(240))
console.log(decToBinConversion(1))
console.log(decToBinConversion(7))
console.log(decToBinConversion(10))
