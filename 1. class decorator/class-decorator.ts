function ClassDecorator(constructor: typeof A) {
  console.log(constructor);
  console.log(constructor.prototype);
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
