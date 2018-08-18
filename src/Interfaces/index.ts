export default function(): void {
  //* Interfaces
  interface ILabel {
    label: string | null;
  }

  function printLabel(labelObject: ILabel) {
    console.log(labelObject.label);
  }

  let lo = { size: 10, label: "Size 10" };
  printLabel(lo);

  //* Optional Properties
  interface ISquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any; //* данный интерфейс может иметь сколько угодно дополнительных свойст типа any
  }

  function createSquare(
    config: ISquareConfig
  ): { color: string; area: number } {
    let newSquareConfig: { color: string; area: number } = {
      color: "white",
      area: 10
    };

    if (config.color) newSquareConfig.color = config.color;
    if (config.width) newSquareConfig.area = config.width * config.width;

    return newSquareConfig;
  }

  //* Readonly properties
  interface Point {
    readonly x: number;
    readonly y: number;
  }

  let point: Point = { x: 10, y: 15 };
  //! point.x = 15;

  let ro: ReadonlyArray<number> = [1, 2, 3, 4];
  //! ro[0] = 5;

  //* Function Types
  interface ISearchFunc {
    (source: string, subString: string): boolean;
  }

  let searchFunc: ISearchFunc = function(source, subString) {
    return source.search(subString) > -1;
  };

  //* Indexable Types

  interface StringArray {
    [index: number]: string;
  }

  let strArray: StringArray = ["cat", "dog"];

  interface Dictionary {
    [index: string]: string;
  }

  let dictionary: Dictionary = { one: "1", two: "2", three: "3" };
  dictionary["four"] = "4";

  let one: string = dictionary["four"];

  console.log(one);

  //* WOW! ReadonlyIndexable Types
  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }

  interface ReadonlyDictionary {
    readonly [index: string]: string;
  }

  //* Class Types
  interface IClock {
    time: Date;
    tick(): void;
  }

  interface IClockConstructor {
    new (h: number, m: number): IClock; //* for constructor
  }
  
  interface ICreateClock {
    (ctor: IClockConstructor, h: number, m: number): IClock;
  }

  let createClock: ICreateClock = function(ctr, h, m) {
    return new ctr(h, m);
  };

  class DigitalClock implements IClock {
    public time: Date;
    constructor(h: number, m: number) {}

    tick(): void {
      console.log("boop beep");
    }
  }

  let digitalClock: IClock = createClock(DigitalClock, 10, 10);

  //* Extending Interfaces
  interface Shape {
    color: string;
  }

  interface Line {
    line: number;
  }

  interface Triangle extends Shape, Line {
    width: number;
  }
  
}
