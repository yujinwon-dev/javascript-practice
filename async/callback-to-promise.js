'use strict';

class UserStorage {
  // promise를 사용하면 콜백을 전달받지 않아도 됨
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'yj' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 1000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'yj') {
          resolve({ name: 'yj', role: 'admin'});
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage
  .loginUser(id, password)
  .then(userId => userStorage.getRoles(userId))
  .then(user => console.log(`hello ${user.name}, you have a ${user.role} role`))
  .catch(error => console.log(error));
