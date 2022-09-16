// import { Ship } from './ship'

import { Ship } from "./ship";

export class GameBoard {
  //10 * 10 gameboard
  //each item(grid div spot on board) labeled 1-100
  //need to keep track of missed shots as well as hits
  //need to place ships
  //check if placement is in gameboard with ship length/board length/height
  //place ships randomly for ai

  board: any[][];
  hits: number[];
  misses: number[];

  constructor() {
    this.board = [];
    this.createBoard();
    this.hits = [];
    this.misses = [];
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
    if (vertical) {
      for (let i = 0; i < ship.length; i++) {
        for (let j = 0; j < this.board.length; j++) {
          if (this.board[j].includes(start)) {
            let index = this.board[j].indexOf(start);
            this.board[j][index] = ship.name;
          }
        }
        start += 10;
      }
    } else {
      for (let i = 0; i < ship.length; i++) {
        for (let j = 0; j < this.board.length; j++) {
          if (this.board[j].includes(start)) {
            let index = this.board[j].indexOf(start);
            this.board[j][index] = ship.name;
          }
        }
        start += 1;
      }
    }
  }

  recieveAttack(position: number) {
    //determine if a ship is on that position
    //if it is call ship hit function and push to hits
    //else push to misses
    //also need to push hit to the ship hit array
    let column: number;
    let str = position.toString();
    if (str.length < 2) {
      column = position - 1;
    } else {
      str.slice(1, 1);
      column = parseInt(str) - 1;
    }

    let row = parseInt(str.slice(0, 1)) - 1;

    console.log(column, row);

    if (!Number.isInteger(this.board[row][column])) {
      this.hits.push(position);
    } else {
      this.misses.push(position);
    }

    // for(let j = 0; j < this.board.length; j++){
    //   if(this.board[j].includes(position)){
    //     let index = this.board[j].indexOf(position)
    //     console.log(index)
    //     console.log(j)
    //     //if this position has ship its a hit!
    //     if(this.board[j][index] === 0){
    //       this.attackHits.push(position)
    //       console.log(position)
    //     }
    //     else{ //if no ship its a miss!
    //       this.misses.push(position)
    //     }
    //     return
    //   }
    // }
  }
}
