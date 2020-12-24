// Реализуйте функцию iterate(object, callback) которая будет итерировать все ключи переданного объекта, 
// вызывая для каждого callback со следующим контрактом callback(key, value, object). Например:
const obj = { a: 1, b: 2, c: 3 };

const iterate = (obj, callback) => {
  for(let key in obj) {
    callback(key, obj[key])
  }
}

iterate(obj, (key, value) => {
  console.log({ key, value });
});

// { key: 'a', value: 1 }
// { key: 'b', value: 2 }
// { key: 'c', value: 3 }