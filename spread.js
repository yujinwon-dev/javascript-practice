// function max(...rest) { // rest
//   return rest.reduce((acc, current) => (acc < current ? current : acc))
// }

// const numbers = [1, 2, 3, 4, 10, 5, 6, 7];
// const result = max(...numbers); // spread
// console.log(result);

// 1. 함수 호출
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 3, 5];
sum(...numbers);

// 2. 배열 리터럴과 문자열
const nums = [1, 2, 3, 4];
const newArr = [...nums, '4', 'five', 6];
console.log(newArr);

// 3. 객체 리터럴
const obj = {name: 'yj', age: 20};
let objClone = {...obj, sex: 'female'};
console.log(objClone);
