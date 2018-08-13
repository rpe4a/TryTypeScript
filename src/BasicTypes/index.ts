export default function(): void {
  //* boolean
  let isDone: boolean = false;

  //* number
  let decimal: number = 6;
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;

  //* string
  let fullName: string = "Bob Dylan";
  let sentence: string = `${fullName} with age ${isDone ? decimal : 60}`;

  //* Array
  let numbers: number[] = [1, 2, 3, 4, 5];
  let strings: Array<string> = ["1", "2", "3"];

  //* Tuple
  let tuple: [string, number] = ["hello", 10];
  //!   tuple = [10, "error"];

  console.log(tuple[0].substring(1));
  //!  console.log(tuple[1].substring(1))

  //* Enum

  enum Color {
    Red = 1,
    Green,
    Blue
  }

  let red: Color = Color.Red;
  let strColor: string = Color[2];

  console.log(red);
  console.log(strColor);

  //* Any
  let dynamic: any = "dynamic";
  dynamic = false;
  let notSure: any[] = [0, "1", false];

  //* Object
  let el: object = {};
  //! el = 5;
  el = null;

  //* Type assertions
  let any: any = "it's string";
  let strLength: number = (any as string).length;
  let strLength2: number = (<string>any).length;

}
