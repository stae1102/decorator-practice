class A {
  b: string = 'Hello';

  get c(): string {
    return `${this.b} World!`;
  }

  @LogError
  d(e: string): void {
    if (Math.random() > 0.5) {
      throw Error('에러 발생!');
    }
    console.log(e);
  }
}

function LogError(target: any, key: string, desc: PropertyDescriptor) {
  const method = desc.value;

  desc.value = function (e: string) {
    try {
      method(e);
    } catch (err) {
      console.log('에러 처리 로직');
    }
  };
}

new A().d('Hello');
