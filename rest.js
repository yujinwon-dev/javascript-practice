// 1. 객체
const person = {
  name: 'yj',
  age: 20,
  sex: 'female'
};

const { age, ...r} = person;
console.log(age);
console.log(r);  // {name: 'yj', sex: 'female'}

// 2. 배열
const numbers = [1, 2, 3, 4, 5, 6];
const [ first, ...rest ] = numbers;
console.log(first);
console.log(rest);  // [2, 3, 4, 5, 6]
