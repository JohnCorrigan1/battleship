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

  constructor() {
    this.board = [];
    this.createBoard();
    this.hits = [];
    this.misses = [];
    this.placedShips = [];
    this.gameOver = false;
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
      this.placedShips.push(ship)
    } else if(!vertical && this.validPlacement(start, ship.length, false) === true) {
      for (let i = 0; i < ship.length; i++) {
        for (let j = 0; j < this.board.length; j++) {
          if (this.board[j].includes(start)) {
            let index = this.board[j].indexOf(start);
            this.board[j][index] = ship.name;
          }
        }
        start += 1;
      }
      this.placedShips.push(ship)
    }
  }

  recieveAttack(position: number) {
    let column: number;
    let str = position.toString();
    let row: number;
    if (position < 11) {
      column = position - 1;
      row = 0;
    } 
    else if(position === 100){
      row = 9
      column = 9
    }
    else {
   
      row = parseInt(str.slice(0, 1));
      column = parseInt(str.slice(1, 2)) - 1;
    }

    if (!Number.isInteger(this.board[row][column])) {
      this.hits.push(position);
      this.placedShips.forEach(ship =>{
        if(ship.name === this.board[row][column]){
          ship.hit(position)
          ship.isSunk()
          return
        }
      })
    } else {
      this.misses.push(position);
    }
  }

  isOver(){
    for(let i = 0; i < this.placedShips.length; i++){
      if(this.placedShips[i].sunk = false) return false;
    }
    return true;
  }

  validPlacement(position: number, length: number, isVertical: boolean){
    //get column and row from position

    let str = position.toString();
    let column: number;
    let row: number;
    if (position < 11) {
      column = position - 1;
      row = 0;
    }
    else if(position === 100){
      return false
    } 
    else {
   
      row = parseInt(str.slice(0, 1));
      column = parseInt(str.slice(1, 2));
    }

    let tempRow = row
    let tempColumn = column
    console.log(row, column)
    console.log(typeof this.board[tempRow][column] === 'string')

    for(let i = 0; i < length; i++){
      if(isVertical){
        if(typeof this.board[tempRow][column] === 'string'){
          return false
        }
        tempRow++
      }
      else if(!isVertical){
        if(typeof this.board[row][tempColumn] === 'string'){
          return false
        }
        tempColumn++
      }
    }
    
    //starting row plus length of ship must be 10 or less to be valid
      if(isVertical && row + length - 1  < 10){
        return true;
      }
      else if(!isVertical && column + length - 1 < 10){
        return true;
      }
      return false;
    }


  randomlyPlaceShips(ship: Ship){
    let valid: boolean = false;
    let position: number;
    let direction: boolean;
    while(!valid){
    position = Math.floor(Math.random() * 100) + 1;
    if(Math.random() < .5){
      direction = true
    }
    else{
      direction = false
    }
    if(this.validPlacement(position, ship.length, direction)){
      this.placeShip(ship, position, direction)
      valid = true;
      return
    }
  }
}
}
