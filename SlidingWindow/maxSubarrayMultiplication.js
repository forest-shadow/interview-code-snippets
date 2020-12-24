// write fn returning max multiplication of `num` subarray elements

const maxSubarrayMult = (arr, num) => {
  if (arr.length < num) return null;

  let maxMult = 1;
  let tempMult = 1;
  for(let i = 0; i < num; i++) {
    maxMult *= arr[i];
  }
  tempMult = maxMult;
  for(let i = num; i < arr.length; i++) {
    tempMult = tempMult / arr[i - num] * arr[i];
    maxMult = Math.max(tempMult, maxMult);
  }

  return maxMult;
}

console.log(maxSubarrayMult([1, 2, 5, 2, 8, 1, 5], 2));  // 16
console.log(maxSubarrayMult([1, 2, 5, 2, 8, 1, 5], 4));  // 160
console.log(maxSubarrayMult([4, 2, 1, 6], 1));           // 8
console.log(maxSubarrayMult([4, 2, 1, 6, 2], 4));        // 48
console.log(maxSubarrayMult([], 4));                     // null
