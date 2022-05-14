'use strict';

// Object
const myName = 'yj';
const myAge = 4;
// 이렇게 각각 변수를 선언하면 선언도 하나씩 해주고 인자도 하나씩 넣어줘야 함
print(myName, myAge);

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

// 오브젝트를 사용하면 데이터를 간편하게 관리 가능!
const yj = { name: 'yj', age: 4};

const obj1 = {};  // object literal syntax
const obj2 = new Object(); // object constructor syntax

// JS는 동적으로 타입이 결정되기 때문에 중간에 프로퍼티를 추가/삭제할 수도 있음
yj.hasJob = true;
console.log(yj.hasJob);
delete yj.hasJob;
console.log(yj.hasJob);


// Computed properties
console.log(yj.name); // 보통은 이렇게 사용
console.log(yj['name']);  // 동적으로 원하는 프로퍼티를 받아오고 싶을 때 사용

function printValue(obj, key) {
  console.log(obj[key]);
}


// Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};
const person4 = makePerson('yj', 20);
console.log(person4);

// 이전에 클래스가 없을 때 이렇게 많이 사용했음
// key와 value의 이름이 동일할 경우 생략 가능
function makePerson(name, age) {
  return { name, age };
}


// Constructor function (생성자 함수)
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}


// for (key in obj)
for (let k in yj) {
  console.log(k);
}
// for (value of iterable)
const array1 = [1, 3, 5, 6];
for (let value of array1) {
  console.log(value);
}



// Cloning
const user = { name: 'wyj', age: 20};
const user2 = user;
user2.name = 'hi';  // 같은 곳을 가리키기 때문에 user의 name이 바뀜
console.log(user);

// const user3 = {};
// Object.assign(user3, user);
const user3 = Object.assign({}, user);
user3.name = 'assign!';
console.log(user);
console.log(user3);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
// 같은 key의 값 할당 시 나중에 나온 게 할당됨
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
