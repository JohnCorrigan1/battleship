import renderGrids from "./renderGameBoards";
import { Player } from "./../factories/players";
import { Ship } from "./../factories/ship";

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

export default function placeShip(playerName: string) {

    const manuallyPlacedShips: any[][] = []
  
  let position: any;

  const info = document.querySelector(".info");
  info?.classList.remove("info");
  info?.classList.add("hide");

  const place = document.querySelector(".place")!;
  place?.classList.remove("hide");

  const grid1 = document.querySelector(".grid-container")!;
  const title1 = document.querySelector(".title-1")!;
  title1.textContent = playerName;

  const ships = document.querySelector(".ships");
  const rotateButton = document.querySelector(".rotate");
  const carrier = document.querySelector(".carrier")!;
  const destroyer = document.querySelector(".destroyer");
  const submarine = document.querySelector(".submarine");
  const patrol = document.querySelector(".patrol");

  rotateButton?.addEventListener("click", function () {
    if (carrier?.classList.contains("rotated")) {
      ships?.classList.remove("ships-horizontal");
      ships?.classList.add("ships-vertical");
      carrier.classList.remove("rotated");
      destroyer?.classList.remove("rotated");
      submarine?.classList.remove("rotated");
      patrol?.classList.remove("rotated");
    } else {
      ships?.classList.remove("ships-vertical");
      ships?.classList.add("ships-horizontal");
      carrier?.classList.add("rotated");
      destroyer?.classList.add("rotated");
      submarine?.classList.add("rotated");
      patrol?.classList.add("rotated");
    }
  });

  const startButton = document.querySelector(".start-game");
  startButton?.addEventListener("click", function () {
    // grid1.classList.add('hide')
    place.innerHTML = "";
    renderGrids(playerName);
  });

  let count: any = 0;
  for (let i = 0; i < hBoard.length; i++) {
    for (let j = 0; j < hBoard[i].length; j++) {
      count++;
      const gridItem = document.createElement("div");
      gridItem.setAttribute("data-hposition", count);
      gridItem.classList.add("grid-item");
      grid1?.appendChild(gridItem);
    }
  }

  const randomlyPlace = <HTMLButtonElement>(
    document.querySelector(".randomly-place")
  );
  randomlyPlace?.addEventListener("click", function () {
    humanShips.forEach((ship) => {
      human.gameboard.randomlyPlaceShips(ship);
    });
    randomlyPlace.disabled = true;
    grid1.innerHTML = "";
    checkBoard();
  });

  function checkBoard() {
    grid1.innerHTML = ''
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

// function checkBoard(){
//     const gridItems = document.querySelectorAll('.grid-item')
//     gridItems.forEach(item => {
//         if(item.)
//     })
// }
  events();

  function events() {
    const draggables = document.querySelectorAll(".draggable")!;

    draggables.forEach((draggable) => {
        // draggable.addEventListener("dragstart", () => {
        //     console.log("drag start");
        // });
        
        draggable.addEventListener("dragend", (ev) => {
            // console.log(ev.target)
            const shipElement: any = ev.target
            // console.log(position)
            const currentPos = parseInt(position.dataset.hposition)
            // console.log(currentPos)
            // console.log(ship.id)
            const shipName = shipElement.id;

            const current = [shipName, currentPos]

            manuallyPlacedShips.push(current)
            // placeShipDragged(currentPos, shipName)
            // console.log(hBoard)
            // console.log(manuallyPlacedShips)

            // placeShipDragged(currentPos, shipName)
            checkPlaced(manuallyPlacedShips)
            // grid1.innerHTML = ''
            // checkBoard()
        })
    });
    
    const gridItem = document.querySelectorAll(".grid-item")
    gridItem.forEach(item => {
        item.addEventListener("dragover", (e) => {
           position = e.target
            // console.log(position)
        })
    })
  }

  function placeShipDragged(position: number, name: string) {
    if (name === "carrier") {
      if (carrier.classList.contains("rotated")) {
        human.gameboard.placeShip(hCarrier, position, false);
      } else {
        human.gameboard.placeShip(hCarrier, position, true);
      }
    }
    if (name === "destroyer") {
      if (carrier.classList.contains("rotated")) {
        human.gameboard.placeShip(hDestroyer, position, false);
      } else {
        human.gameboard.placeShip(hDestroyer, position, true);
      }
    }
    if (name === "submarine") {
      if (carrier.classList.contains("rotated")) {
        human.gameboard.placeShip(hSubmarine, position, false);
      } else {
        human.gameboard.placeShip(hSubmarine, position, true);
      }
    }
    if (name === "patrol") {
      if (carrier.classList.contains("rotated")) {
        human.gameboard.placeShip(hPatrol, position, false);
      } else {
        human.gameboard.placeShip(hPatrol, position, true);
      }
    }
    // checkBoard();
}

function checkPlaced(arr: any){
    if(arr.length === 4){
        arr.forEach((item: any) => {
            placeShipDragged(item[1], item[0])
        })
        console.log(hBoard)
        grid1.innerHTML = "";
        checkBoard()
    }
    else{
        return
    }
  }
}

export { humanShips, computerShips, human, computer, hBoard, cBoard };
