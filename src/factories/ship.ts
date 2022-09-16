export class Ship {
  length: number;
  isHit: number[];
  sunk: boolean;
  name: string

  constructor(length: number, name: string) {
    this.length = length;
    this.isHit = [];
    this.sunk = false;
    this.name = name
  }

  hit(position: number) {
    //push position to ishit array
    if(!this.isHit.includes(position) && this.isHit.length < this.length){
    this.isHit.push(position);
    return this.isHit;
    }
  }

  isSunk() {
    //checks each position of ship for hits if all are hit is sunk
    if(this.isHit.length === this.length){
      this.sunk = true;
      return true;
    }
    return false;
  }
}
