// write recursive fn for arr traversing
const traverseArr = ([head, ...tail]) => {
  if(head) {
    console.log(head);
    return [head, ...traverseArr(tail)];
  }
  return [];
}

let arr = [1, 2, 3, 4];
console.log(traverseArr(arr));
