export default function(): void {
  let z: number = 1;
  const x: number = 2;

  z = 2;
  //! b = 3;

  function foo(input: boolean): number {
    let a: number = 100;

    if (input) {
      let b: number = a + 100;
      return b;
    }

    return x;
  }
}
