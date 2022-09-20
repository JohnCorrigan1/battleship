import { Player } from './../factories/players'
import{ Ship } from './../factories/ship'
import renderGrids from './renderGameBoards';


 let human = new Player("human", "computer");
 let computer = new Player("computer", "human");
 let hBoard = human.gameboard.board;
 let cBoard = computer.gameboard.board;
 let hCarrier = new Ship(5, "carrier");
 let hDestroyer = new Ship(4, "destroyer");
 let hSubmarine = new Ship(3, "submarine");
 let hPatrol = new Ship(2, "patrol");
 let cCarrier = new Ship(5, "carrier");
 let cDestroyer = new Ship(4, "destroyer");
 let cSubmarine = new Ship(3, "submarine");
 let cPatrol = new Ship(2, "patrol");

 const humanShips = [hCarrier, hDestroyer, hSubmarine, hPatrol];
 const computerShips = [cCarrier, cDestroyer, cSubmarine, cPatrol];

export default function placeShips(playerName: string){

    const info = document.querySelector('.info')
    info?.classList.remove("info");
     info?.classList.add("hide");

    const place = document.querySelector('.place')!
    place?.classList.remove('hide')

     const container = document.querySelector('.place')
    //  const gridContainer = document.querySelector('.grid-container')!
     const grid1 = document.querySelector(".grid-container")!;
     const title1 = document.querySelector(".title-1")!;
     title1.textContent = playerName;
    
     
   const startButton = document.querySelector('.start-game')
   startButton?.addEventListener('click', function(){
    // grid1.classList.add('hide')
    place.innerHTML = ''
    renderGrids(playerName)
   })

   let count: any = 0;
  for (let i = 0; i < hBoard.length; i++) {
    for (let j = 0; j < hBoard[i].length; j++) {
      count++;
      const gridItem = document.createElement("div");
      gridItem.setAttribute("hposition", count);
      // gridItem.textContent = board[i][j]
      
      gridItem.classList.add("grid-item");
      grid1?.appendChild(gridItem);
    }
  }

  function checkBoard(){
    let count: any = 0;
    for (let i = 0; i < hBoard.length; i++) {
      for (let j = 0; j < hBoard[i].length; j++) {
        count++;
        const gridItem = document.createElement("div");
        gridItem.setAttribute("hposition", count);
        // gridItem.textContent = board[i][j]
        if (!Number.isInteger(hBoard[i][j])) {
            gridItem.classList.add("ship-here");
          }
        gridItem.classList.add("grid-item");
        grid1?.appendChild(gridItem);
      }
    }
  }


  


   const randomlyPlace = <HTMLButtonElement> document.querySelector('.randomly-place')
   randomlyPlace?.addEventListener('click', function(){
    humanShips.forEach((ship) => {
        human.gameboard.randomlyPlaceShips(ship);
      });
      randomlyPlace.disabled = true;
      grid1.innerHTML = ''
      checkBoard()
   })
}

export { humanShips, computerShips, human, computer, hBoard, cBoard}