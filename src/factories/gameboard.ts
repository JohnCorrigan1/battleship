// import { Ship } from './ship'

import { Ship } from "./ship";

export class GameBoard {
  //check if placement is in gameboard with ship length/board length/height
  //place ships randomly for ai

  board: any[][];
  hits: number[];
  misses: number[];
  placedShips: Ship[];
  gameOver: boolean;
  sunkShips: Ship[];

  constructor() {
    this.board = [];
    this.createBoard();
    this.hits = [];
    this.misses = [];
    this.placedShips = [];
    this.gameOver = false;
    this.sunkShips = [];
  }

  createBoard() {
    let count = 0;
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        count++;
        this.board[i][j] = count;
      }
    }
  }

  placeShip(ship: Ship, start: number, vertical: boolean) {
    if (vertical && this.validPlacement(start, ship.length, true) === true) {
      for (let i = 0; i < ship.length; i++) {
        for (let j = 0; j < this.board.length; j++) {
          if (this.board[j].includes(start)) {
            let index = this.board[j].indexOf(start);
            this.board[j][index] = ship.name;
          }
        }
        start += 10;
      }
      this.placedShips.push(ship);
    } else if (
      !vertical &&
      this.validPlacement(start, ship.length, false) === true
    ) {
      for (let i = 0; i < ship.length; i++) {
        for (let j = 0; j < this.board.length; j++) {
          if (this.board[j].includes(start)) {
            let index = this.board[j].indexOf(start);
            this.board[j][index] = ship.name;
          }
        }
        start += 1;
      }
      this.placedShips.push(ship);
    }
  }

  recieveAttack(row: number, column: number) {
    let position = row + column;

    if (!Number.isInteger(this.board[row][column])) {
      this.hits.push(position);
      this.placedShips.forEach((ship) => {
        if (ship.name === this.board[row][column]) {
          ship.hit(position);
          ship.isSunk();
          if (ship.isSunk()) {
            this.sunkShips.push(ship);
          }
          return;
        }
      });
    } else {
      this.misses.push(position);
      return;
    }
  }

  isOver() {
    if (this.sunkShips.length === 4) {
      return true;
    }
    return false;
  }

  validPlacement(position: number, length: number, isVertical: boolean) {
    let newPosition = this.convertPosition(position);
    let row = this.getRow(newPosition);
    let column = this.getCol(newPosition);

    if (isVertical && row + length > 10) {
      return false;
    } else if (!isVertical && column + length > 10) {
      return false;
    }

    if (isVertical) {
      for (let i = 0; i < length; i++) {
        if (!Number.isInteger(this.board[row][column])) {
          return false;
        } else {
          row++;
        }
      }
    } else {
      for (let i = 0; i < length; i++) {
        if (!Number.isInteger(this.board[row][column])) {
          return false;
        } else {
          column++;
        }
      }
    }
    return true;
  }

  randomlyPlaceShips(ship: Ship) {
    let valid: boolean = false;
    let position: number;
    let direction: boolean;
    while (!valid) {
      position = Math.floor(Math.random() * 100) + 1;
      if (Math.random() < 0.5) {
        direction = true;
      } else {
        direction = false;
      }

      if (this.validPlacement(position, ship.length, direction)) {
        valid = true;
        this.placeShip(ship, position, direction);
        // return
      } else {
        valid = false;
      }
    }
  }

  convertPosition(position: number) {
    let column: number;
    let str = position.toString();
    let row: number;
    if (position < 11) {
      column = position - 1;
      row = 0;
    } else if (position === 100) {
      row = 9;
      column = 9;
    } else if (position % 10 === 0) {
      row = parseInt(str.slice(0, 1));
      column = 9;
    } else {
      row = parseInt(str.slice(0, 1));
      column = parseInt(str.slice(1, 2)) - 1;
    }

    let strRow: string = row.toString();
    let strCol: string = column.toString();

    let newPosition = strRow + strCol;

    return newPosition;
  }

  getCol(str: string) {
    return parseInt(str.slice(1, 2));
  }

  getRow(str: string) {
    return parseInt(str.slice(0, 1));
  }
}
