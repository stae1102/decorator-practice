class A {
  b: string = 'Hello';

  get c(): string {
    return `${this.b} World!`;
  }

  d(
    @ParameterDecorator e: string,
    @ParameterDecorator f: string,
    @ParameterDecorator g: string
  ): void {
    console.log(e, f, g);
  }
}

function ParameterDecorator(target: any, key: string, index: number) {
  console.log(target);
  console.log(key);
  console.log(index);
}
