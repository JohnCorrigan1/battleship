import { Ship } from "../factories/ship";

describe("Ship", () => {
  let ship: Ship;

  beforeEach(() => {
    ship = new Ship(2, "patrol");
  });

  test("ship is right length", () => {
    expect(ship).toEqual({ length: 2, isHit: [], sunk: false, name: "patrol" });
  });

  test("hitting ship", () => {
    expect(ship.hit(20)).toEqual([20]);
  });

  test("ship sunk", () => {
    ship.hit(1)
    ship.hit(2)
    expect(ship.isSunk()).toBe(true);
  });

  test("hitting same spot", () => {
    ship.hit(1)
    ship.hit(1)
    expect(ship.isSunk()).toBe(false);
  })
});
