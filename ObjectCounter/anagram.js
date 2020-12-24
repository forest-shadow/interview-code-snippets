// write anagram fn receiving 2 strings and deciding if them are anagrams
// e.g. have the same amount of letters

const anagram = (str1, str2) => {
  if(str1.length !== str2.length || str1 === str2) return false
  const [str1Counter, str2Counter] = [str1, str2].map(str => {
    let result = {}
    for(let char of str.split('')) {
      if(result[char]) result[char] ++
      else result[char]  = 1
    }
    return result
  })
  // const str1Counter = {}
  // const str2Counter = {}
  // for(let char of str1.split('')) {
  //   if(str1Counter[char] ) str1Counter[char] ++
  //   else str1Counter[char]  = 1
  // }
  // for(let char of str2.split('')) {
  //   if(str2Counter[char] ) str2Counter[char] ++
  //   else str2Counter[char]  = 1 
  // }

  for(let char in str2Counter) {
    if(str1Counter[char] !== str2Counter[char]) return false
  }

  return true
}
console.log(anagram('', ''))                  // true
console.log(anagram('aaz', 'zza'))           // false
console.log(anagram('anagram', 'nagaram'))    // true
console.log(anagram('rat', 'car'))            // false
console.log(anagram('awesome', 'awesom'))     // false
console.log(anagram('qwerty', 'qeywrt'))      // true