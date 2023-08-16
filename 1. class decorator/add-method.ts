function ClassDecorator(constructor: typeof A) {
  console.log(constructor);
  console.log(constructor.prototype);
  console.log(constructor.prototype.c);
  const method = constructor.prototype.d;

  constructor.prototype.d = function (e: string) {
    method(e);
    console.log('d를 호출할 때 같이 호출합니다!');
  };
}

@ClassDecorator
// 1. class
class A {
  // 2. property
  b: string = 'Hello';

  // 3. accessor
  get c(): string {
    return `${this.b} World!`;
  }

  // 4. method
  d(/* 5. parameter */ e: string): void {
    console.log(e);
  }
}

new A().d('Hello world!');
