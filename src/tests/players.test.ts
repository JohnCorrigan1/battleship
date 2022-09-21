import { Player } from "./../factories/players";
import { Ship } from "./../factories/ship";

describe("Player", () => {
  let me: Player;
  let computer: Player;
  let patrol: Ship;
  let playerPatrol: Ship;

  beforeEach(() => {
    me = new Player("me", "computer");
    computer = new Player("computer", "me");
    playerPatrol = new Ship(2, "playerPatrol")
    patrol = new Ship(2, "patrol");
    computer.gameboard.placeShip(patrol, 9, false);
    me.gameboard.placeShip(playerPatrol, 9, false)
    me.attack(9, computer);
    me.attack(10, computer)
    computer.randomAttack(me)
  });

  test("player can place ships", () => {
    expect(computer.gameboard.placedShips.length).toEqual(1);
  });

  test("player can attack", () => {
    expect(patrol.isHit.includes(9)).toBe(true)
  })

  test("player can sink ship", () => {
    expect(patrol.isSunk()).toBe(true)
  })

  test("game ends", () => {
    expect(me.gameboard.isOver()).toBe(false)
  })

  test("computer random attack", () => {
    expect(computer.shots.length).toBe(1)
  })

});
