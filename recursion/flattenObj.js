const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
  e: {
    f: {
      g: 4,
      h: 5,
    },
  },
}

const flatten = (obj, keys = []) => {
  let result = {};
  for(let key in obj) {
    if(obj[key].constructor === Object) {
      result = {...result, ...flatten(obj[key], [...keys, key])}
    } else {
      result = {...result, [[...keys, key].join(':')]: obj[key]}
    }
  }
  return result;
}

// const flatten = (obj, keys = []) => {
//   let result = {}
//   for(let key in obj) {
//     if(obj[key].constructor === Object) {
//       result = {...result, ...flatten(obj[key], [...keys, key])}
//     } else {
//       result = {...result, [[...keys, key].join(':')]: obj[key]}
//     }
//   }
//   return result
// }

console.log(flatten(obj))
