// 1. use strict
// added in ES 5
// use this for Vanilla JavaScript
'use strict';


// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'yujin';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
// console.log(name); -> 불가능 (block scope)

// var (don't use this)
// hoisting 발생 (선언이 맨 위로 끌어올려짐)
// has no block scope
{
  age = 4;
  var age;
}


// 3. Constant, r(read only)
// use const whenever possible.
// only user let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;


// Note!
// Immutable data types: primitive types, frozen objects (ex. object.freeze())
// 데이터 자체를 바꾸는 건 가능하지만 중간에 있는 거 하나 빼고 넣고 하는 것은 불가능
// Mutable data types: all objects by default are mutable in JS
// 오브젝트 내에 있는 age, name 등의 value를 바꿀 수 있는 것처럼

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false

const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 === gsymbol2); // true

// .description을 이용해서 출력
console.log(`value: ${gsymbol1.description}`); // value: id

// Dynamic typing
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
