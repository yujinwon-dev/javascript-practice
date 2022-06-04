'use strict';

// 1. Async
async function fetchUser() {
  return 'yj';
}

const user = fetchUser();
user.then(console.log); // async를 함수 앞에 쓰면 자동으로 리턴되는 값을 Promise로 만들어줌
console.log(user);

// 2. Await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return 'apple!';
}

async function getBanana() {
  await delay(1000);
  return 'banana!';
}

// Promise도 여러번 중첩하게 되면 콜백지옥과 비슷한 문제 발생
// function pickFruits() {
//   return getApple()
//   .then(apple => {
//     return getBanana()
//     .then(banana => `${apple} + ${banana}`);
//   });
// }

// async await를 사용하면 기존에 동기적으로 코드를 작성하듯이 할 수 있고 가독성도 좋아짐
async function pickFruits() {
  try {
    // 단, 순차적으로 실행되어 1초 + 1초 -> 총 2초 소요
    // 서로 연관된 것이 없는데도 순차적으로 실행되므로 비효율적
    // const apple = await getApple();
    // const banana = await getBanana();

    // 병렬적으로 수행하는 법 (코드 더러운 ver)
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
  } catch(err) {
    console.log(err);
  }
}

pickFruits().then(console.log);

// 3. useful Promise APIs
async function pickAllFruits() {
  // all 메서드 사용 시 비동기적으로 실행 후 응답 array 반환
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

async function pickOnlyOne() {
  // 더 빨리 실행되는 하나의 응답을 리턴
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
