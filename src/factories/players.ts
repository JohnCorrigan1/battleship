import { GameBoard } from "./gameboard";

export class Player {
    gameboard: GameBoard;
    name: string;
    shots: number[];
    oponent: string;

    constructor(name: string, oponent: string){
        this.gameboard = new GameBoard();
        this.name = name;
        this.shots = [];
        this.oponent = oponent
    }

    attack(position: number, oponent: Player){
        if(!this.shots.includes(position)){
            this.shots.push(position)
            oponent.gameboard.recieveAttack(position)
            if(oponent.gameboard.isOver()){
                console.log("gg")
            }
            
        }
    }


}