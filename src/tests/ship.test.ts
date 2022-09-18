import { Ship } from "../factories/ship";
import { GameBoard } from "../factories/gameboard"

describe("Ship", () => {
  let patrol: Ship;
  let game: GameBoard;
  let carrier: Ship;
  let small: Ship
  let destroyer: Ship;
  let computer: Ship;

  beforeEach(() => {
    game = new GameBoard()
    patrol = new Ship(2, "patrol");
    small = new Ship(2, "small")
    carrier = new Ship(2, "carrier")
    destroyer = new Ship(4, "destroyer")
    computer = new Ship(3, "computer")
    game.placeShip(patrol, 1, true)
    game.recieveAttack(0, 0)
    game.recieveAttack(1, 0)
    game.placeShip(small, 9, false)
    game.recieveAttack(0, 8)
    game.recieveAttack(0, 9)
    game.placeShip(destroyer, 90, true)
    game.randomlyPlaceShips(computer)
  });

  test("ship is right length", () => {
    expect(patrol.length).toEqual(2);
  });

  test("ship sunk", () => {
    expect(patrol.isSunk()).toBe(true);
  });

  test("hitting same spot", () => {
    carrier.hit(10)
    carrier.hit(10)
    expect(carrier.isSunk()).toBe(false);
  })

  test("ship sinks", () => {
    expect(small.isSunk()).toBe(true)
  })

  test("game ends", () => {
    expect(game.isOver()).toBe(true)
  })

  test("invalid placement", () => {
    expect(game.placedShips.length).toBe(3)
  })


})
