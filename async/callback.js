'use strict';

// JavaScript는 동기적
// 코드가 호이스팅 이후에 하나씩 동기적으로 실행됨
// 호이스팅: var, function declaration 등 선언이 가장 위로 끌어올려지는 것
// Asynchronous: 코드가 어떤 순서로 실행될 지 보장하 수 없는 것 ex) setTimeout()
console.log('1');
// 콜백함수: 나중에 다시 불러달라고 하며 전달하는 함수
setTimeout(() => {
  console.log('2');
}, 1000);
console.log('3');


// Synchronous callback
// 함수 선언은 호이스팅됨 -> 콘솔 로그 1, 2, 3, printImmediately 순서대로 실행 -> 2는 타임아웃 이후 출력
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// Callback hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'yj' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'yj') {
        onSuccess({ name: 'yj', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
// 콜백 지옥의 단점
// 가독성이 떨어짐 -> 디버깅, 유지보수 어려움
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => console.log(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`),
      error => console.log(error)
    );
  },
  error => console.log(error)
);