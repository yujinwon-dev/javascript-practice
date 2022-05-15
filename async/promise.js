'use strict';

// Promise is a JavaScript object for asynchronois operation
// 비동기적인 것을 수행할 때 콜백함수 대신 유용하게 사용 가능
// state: pending -> fulfilled / rejected
// Producer vs Consumer

// 1. Producer
// 새 프로미스가 만들어질 때, executor 함수가 자동으로 바로 실행됨!
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (네트워크 통신, 파일 읽기 등)
  console.log('doing something...');
  setTimeout(() => {
    // resolve('yj');
    reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally를 이용해서 값을 받아올 수 있음
promise
  .then(value => {
    // resolve 콜백함수를 통해 전달한 값이 value에 전달됨
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  })

  