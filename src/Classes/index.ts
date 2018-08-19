export default function(): void {
  //* Classes

  class Greeter {
    public greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }
    greet(): string {
      return "Hello, " + this.greeting;
    }
  }

  let greeter = new Greeter("world");

  //* Inheritance

  abstract class Animal {
    private _name: string;

    get Name(): string {
      return this._name || Animal.defaultName;
    }
    set Name(value: string) {
      this._name = value;
    }

    public constructor(name?: string) {
      this._name = name;
    }

    public move(distanceInMeters: number = 0): void {
      console.log(
        `${this._name || Animal.defaultName} moved ${distanceInMeters}m.`
      );
    }

    abstract mackSound(): void;

    public static defaultName: string = "Animal";
  }

  class Snake extends Animal {
    mackSound(): void {
      console.log("Shh!!!");
    }

    constructor(name?: string) {
      super(name);
    }

    move(distanceInMeters: number = 5): void {
      console.log("Slithering");
      super.move(distanceInMeters);
    }
  }

  let snake = new Snake();
  snake.move(10);
  console.log(snake.Name);
  console.log(snake instanceof Animal);
}
