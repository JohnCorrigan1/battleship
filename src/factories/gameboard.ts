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
  placedShips: Ship[];

  constructor() {
    this.board = [];
    this.createBoard();
    this.hits = [];
    this.misses = [];
    this.placedShips = []
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
    this.placedShips.push(ship)
  }

  recieveAttack(position: number) {
    //determine if a ship is on that position
    //if it is call ship hit function and push to hits
    //else push to misses
    //also need to push hit to the ship hit array
    let column: number;
    let str = position.toString();
    let row: number;
    if (position < 11) {
      column = position - 1;
      row = 0;
    } else {
      // str.slice(1, 1);
      row = parseInt(str.slice(0, 1)) - 1;
      column = parseInt(str.slice(1, 2)) - 1;
    }

    if (!Number.isInteger(this.board[row][column])) {
      this.hits.push(position);
      this.placedShips.forEach(ship =>{
        if(ship.name === this.board[row][column]){
          ship.hit(position)
          return
        }
      })
      // console.log(this.board[row][column])
      // let ship = this.board[row][column].name
      // console.log(ship)
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
