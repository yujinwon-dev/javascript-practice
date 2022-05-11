// 1. String concatenation
console.log('1' + 2); // 12 (숫자가 문자열로 변환됨)
const myName = 'yj';
console.log(`string literals:

'''

hi ${myName}`); // string literal을 사용할 경우 줄바꿈, 특수기호도 반영됨


// 3. Default parameters
function showMessage(message, from='unknown') {
	console.log(`${message} by ${from}`);
}
showMessage('Hiii');


// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}
printAll('hi', 'I\'m', 'yj');


// First-class function
// 변수처럼 다뤄지는 함수
// 변수에 할당할 수 있고, 다른 함수에 인자로 전달할 수 있고, 다른 함수로부터 리턴될 수 있다.

// 1. Function expression
// function declaration은 hoist 되지만, function expression은 hoist 되지 않는다. (선언 이전에 호출 불가)
const print = function() {  // 익명 함수
  console.log('print');
}

// 2. Callback function
// 함수를 인자로 전달해서 상황에 맞게 호출해~ 라고 하는 것
// 여기서는 printYes, printNo가 콜백 함수
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function() {
  console.log('yes');
}

// named function
// 디버깅을 편리하게 하거나, 재귀 호출을 하기 위해 사용
const printNo = function print() {
  console.log('yes');
  print();
}

randomQuiz('love you', printYes, printNo);

// arrow function
// always anonymous
const simplePrint = () => console.log('print');

// 선언과 동시에 함수 호출하기
// IIFE: Immediately Invoked Function Expression
(function hello() {
  console.log('IIFE');
})()