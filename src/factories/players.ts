import { GameBoard } from "./gameboard";

export class Player {
  gameboard: GameBoard;
  name: string;
  shots: number[];
  oponent: string;

  constructor(name: string, oponent: string) {
    this.gameboard = new GameBoard();
    this.name = name;
    this.shots = [];
    this.oponent = oponent;
  }

  attack(position: number, oponent: Player) {
    let newPosition = this.gameboard.convertPosition(position);
    let row = this.gameboard.getRow(newPosition);
    let col = this.gameboard.getCol(newPosition);
    if (!this.shots.includes(position)) {
      this.shots.push(position);
      oponent.gameboard.recieveAttack(row, col);
      if (oponent.gameboard.isOver()) {
        // console.log("gg")
      }
    }
  }

  randomAttack(opponent: Player) {
    let validShot: boolean = false;
    let position: number;
    while (!validShot) {
      position = Math.floor(Math.random() * 100) + 1;
      let newPosition = this.gameboard.convertPosition(position);
      let row = this.gameboard.getRow(newPosition);
      let col = this.gameboard.getCol(newPosition);
      if (!this.shots.includes(position)) {
        console.log(position);
        this.shots.push(position);
        opponent.gameboard.recieveAttack(row, col);
        validShot = true;
        // let str: string
        // str = row.toString() + col.toString()
        return position;
      }
    }
  }
}
