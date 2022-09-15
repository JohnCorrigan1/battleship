export class Ship {
  length: number;
  isHit: number[];
  sunk: boolean;

  constructor(length: number) {
    this.length = length;
    this.isHit = [];
    this.sunk = false;
  }

  hit(position: number) {
    //marks the hit position with 1 aka "hit"
    this.isHit[position] = 1;
  }

  isSunk() {
    //checks each position of ship for hits if all are hit is sunk
    this.isHit.forEach((element) => {
      if (element !== 1) return false;
    });
    return true;
  }
}
