export default function(): void {
  //* Destructuring
  //* Array destructuring

  let input: number[] = [1, 2];
  let [first, second] = input;

  function baz([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
  }

  baz([1, 2]);

  let [one, ...rest] = [1, 2, 3, 4];
  console.log(one);
  console.log(rest);

  //* Object destructuring
  let o: { a: string; b: number; c: boolean } = {
    a: "foo",
    b: 12,
    c: true
  };

  let { a, b } = o;
  console.log(a);
  console.log(b);

  let { ...pass } = o;
  let total: number = pass.b + pass.a.length;
  console.log(total);

  function defaultValue(wholeObject: { a: string; b?: number }) {
    let { a, b = 1001 } = wholeObject;

    console.log(a);
    console.log(b);
  }

  //* Spread Operator
  let array1: number[] = [1, 2, 3, 4];
  let array2: number[] = [1, 5, 3, 6];

  let spreadArray: number[] = [...array1, ...array2];
  console.log(spreadArray); //! [1, 2, 3, 4, 1, 5, 3, 6]

  let defaults: { food: string; price: string; ambiance: string } = {
    food: "spicy",
    price: "$$",
    ambiance: "noisy"
  };

  let search = { ...defaults, food: "rich" };

  console.log(search); //! {food: "rich", price: "$$", ambiance: "noisy"}
}
