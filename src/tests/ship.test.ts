import { Ship } from "../factories/ship";
import { GameBoard } from "../factories/gameboard"

describe("Ship", () => {
  let patrol: Ship;
  let game: GameBoard;
  let carrier: Ship;
  let small: Ship

  beforeEach(() => {
    game = new GameBoard()
    patrol = new Ship(2, "patrol");
    carrier = new Ship(5, "carrier")
    small = new Ship(2, "small")
    game.placeShip(carrier, 1, true)
    game.recieveAttack(1)
    game.recieveAttack(11)
    game.placeShip(small, 9, false)
    game.recieveAttack(9)
    game.recieveAttack(10)
  });

  test("ship is right length", () => {
    expect(patrol.length).toEqual(2);
  });

  test("hitting ship", () => {
    expect(patrol.hit(20)).toEqual([20]);
  });

  test("ship sunk", () => {
    patrol.hit(1)
    patrol.hit(2)
    expect(patrol.isSunk()).toBe(true);
  });

  test("hitting same spot", () => {
    patrol.hit(1)
    patrol.hit(1)
    expect(patrol.isSunk()).toBe(false);
  })

  test("ship recieves hit", () => {
    expect(carrier.isHit.includes(1)).toBe(true)
  })

  test("ship recieves hit, at end", () => {
    expect(carrier.isHit.includes(11)).toBe(true)
  })

  test("ship sinks", () => {
    expect(small.isSunk()).toBe(true)
  })
});
