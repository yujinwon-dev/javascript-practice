// 1. Object to JSON
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  birthDate: new Date(),
  // 함수나 Symbol처럼 JS에만 있는 데이터는 변환되지 않음
  jump: () => {
    console.log(`${name} can jump!`);
  }
}

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

// 좀 더 세밀하게 통제하고 싶을 때 reviver 함수 사용
json = JSON.stringify(rabbit, (key, value) => {
  return key === 'name' ? 'yj' : value;
});
console.log(json);

// 2. JSON to Object
const obj = JSON.parse(json);
console.log(obj);