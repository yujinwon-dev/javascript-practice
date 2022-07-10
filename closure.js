// function foo() {
//   const x = 1;
//   const y = 2;

//   // 일반적으로 클로저라고 하지 않는다.
//   function bar() {
//     const z = 3;

//     debugger;
//     // 상위 스코프의 식별자를 참조하지 않는다.
//     console.log(z);
//   }
//   return bar;
// }

// const bar = foo();
// bar();



// function foo() {
//   const x = 1;

//   // bar 함수는 클로저였지만 곧바로 소멸한다.
//   // 일반적으로 클로저라고 하지 않는다.
//   function bar() {
//     debugger;
//     // 상위 스코프의 식별자를 참조한다.
//     console.log(x);
//   }
//   bar();
// }

// foo();


function foo() {
  const x = 1;
  const y = 2;

  // 클로저
  function bar() {
    debugger;

    console.log(x);
  }
  return bar;
}

const bar = foo();
bar();
