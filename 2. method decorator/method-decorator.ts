class A {
  b: string = 'Hello';

  get c(): string {
    return `${this.b} World!`;
  }

  @LogError
  d(e: string): void {
    console.log(e);
  }
}

function LogError(target: any, key: string, desc: PropertyDescriptor) {
  console.log(target);
  console.log(key);
  console.log(desc);
}
