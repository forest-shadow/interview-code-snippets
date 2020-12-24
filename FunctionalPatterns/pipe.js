const pipe = (...fns) => x => fns.reduce((acc, curFn) => curFn(acc), x)

const addThree = pipe((x) => x + 1, (x) => x + 2)

console.log(addThree(3))

