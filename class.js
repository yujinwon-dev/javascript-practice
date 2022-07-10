'use strict';

class Person {
  // constructor
  constructor(name, age) {
    // 속성 (field)
    this.name = name;
    this.age = age;
    
  }
  // 행동 (method)
  speak() {
    console.log(`${this.name} hello!`);
  }
}

const yj = new Person('yujin', 20);
console.log(yj.name);
console.log(yj.age);
yj.speak();


// Getters & Setters
// 만약에 numOfCoffee 라는 변수가 있다면 음수 값이 되면 안 됨 -> 그래서 음수값을 처리해줄 수 있도록 setter 사용하는 것
// 그리고 다른 사람이 이 값을 수정하게 하면 안 좋으니까 이 프로퍼티를 private으로 만드는 것
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    // getter를 정의하면 this.age는 메모리에서 읽어오는 게 아니라 getter 호출
    // setter를 정의하면 값 할당 시 바로 메모리에 할당하는 게 아니라 setter 호출
    // -> 따라서 콜스택 에러가 날 수 있으므로 getter/setter 안에서는 변수명을 조금 다르게 해줌
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Yj', 'Won', -1);
console.log(user1.age);


// Fields (public, private)
// Too soon!
class Experiment {
  publicField = 2;
  // private field: 클래스 외부에서 값을 읽거나 변경할 수 없음
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


// Static properties and methods
// Too soon!
class Article {
  // static 키워드를 붙이면 오브젝트 상관없이 클래스 자체에 연결됨
  // 클래스에 공통적으로 사용되는 거라면 static을 사용하면 메모리 사용 줄일 수 있음
  static publisher = 'DC';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
console.log(article1.publisher);  // undefined
console.log(Article.publisher);  // DC
Article.printPublisher();

// 상속 & 다양성
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// extends를 통해 상속하면 부모 클래스의 필드, 메서드 사용 가능
class Rectangle extends Shape {}
class Triangle extends Shape {
  // 메서드 오버라이딩 가능
  draw() {
    // 오버라이딩 시 부모 클래스에 있는 같은 이름의 메서드는 호출되지 않음
    // 호출하고 싶을 경우 super 키워드 사용
    super.draw();
    console.log('^_^');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// Class checking
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Object); // true (js의 모든 오브젝트는 Object를 상속)
