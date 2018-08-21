export default function(): void {
  //* Functions

  interface IAdd {
    (x: number, y: number): number;
  }

  function add(x: number, y: number): number {
    return x + y;
  }

  let myAdd: IAdd = function(x, y) {
    return x + y;
  };

  let myAdd2: (x: number, y: number) => number = (x, y) => {
    return x + y;
  };

  //* this parameters
  interface Card {
    suit: string;
    card: number;
  }
  interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
  }
  let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function(this: Deck) {
      return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);

        return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
      };
    }
  };

  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();

  interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
  }

  //* WOW! Function Overloads
  let suits = ["hearts", "spades", "clubs", "diamonds"];

  function pickCard(a: { suit: string; card: number }[]): number;
  function pickCard(a: number): { suit: string; card: number };
  function pickCard(this: void, a: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof a == "object") {
      let pickedCard = Math.floor(Math.random() * a.length);
      return pickedCard;
    }
    // Otherwise just let them pick the card
    if (typeof a == "number") {
      let pickedSuit = Math.floor(a / 13);
      return { suit: suits[pickedSuit], card: a % 13 };
    }
  }
}
