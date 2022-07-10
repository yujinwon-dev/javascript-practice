// prototype은 유전자라고 생각해라
function 기계() {
  // 여기에 쓰면 자식이 직접 가짐
  this.q = 'strike';
  this.w = 'snowball';
}

// prototype에 무언가를 추가하면 자식들이 사용 가능 -> 상속
// ex) nunu.name으로 사용 가능. 하지만 nunu를 출력하면 q, w 속성만 가짐
//  object에서 자료를 뽑을 때 일어나는 일:
//  -> nunu가 name을 갖고 있지 않으므로 nunu의 부모 유전자(__proto__ 오브젝트?)를 찾아봄(prototype chain) -> 거기에 name이 있으면 출력하기 때문
// 부모만 name을 갖고 있고 자식이 끌어다 쓸 수 있음
기계.prototype.name = 'won';  // 생성자 함수가 생성하는 객체에 __proto__를 이렇게 설정하겠다는 의미
const nunu = new 기계();
// 그렇다면 배열에 .length, .sort를 붙여서 사용할 수 있는 이유는? 우리는 추가 안 했는데?
// 어레이는 new Array(4, 2, 1) 이렇게 내부적으로 생성됨 (오브젝트 등도 마찬가지)
// 그러면 부모 유전자에 .sort .length 등이 있기 때문에 사용할 수 있는 것

// 그렇다면 모든 array 자료형에서 쓸 수 있는 함수를 추가하려면?
Array.prototype.함수 = function() {}

///////////////////

const Bmw = function (color) {
  const c = color;
  // 이렇게 하면 컬러를 바꿀 수는 없고 얻을 수만 있다는데 인스턴스.c = "blue" 이건 불가능한가?
  this.getColor = function () {
    console.log(c);
  }
}
