// import { Ship } from './ship'

export class GameBoard {
  //10 * 10 gameboard
  //each item(grid div spot on board) labeled 1-100
  //need to keep track of missed shots as well as hits
  //need to place ships
  //check if placement is in gameboard with ship length/board length/height
  //place ships randomly for ai

  board: number[][];
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
        count++
        this.board[i][j] = count;
      }
    }
  }

  recieveAttack(position: number){
    //determine if a ship is on that position
    //if it is call ship hit function and push to hits
    //else push to misses
    this.hits.push(position)
  }
}
