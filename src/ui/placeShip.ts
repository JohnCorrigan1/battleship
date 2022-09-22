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

let calls: number = 0;

const placedShips: string[] = [];


export default function placeShip(playerName: string) {

  calls++
  let position: any;

  const info = document.querySelector(".info");
  info?.classList.remove("info");
  info?.classList.add("hide");

  const place = document.querySelector(".place")!;
  place?.classList.remove("hide");
  const grid = document.querySelector(".grid-container")!;

  const ships = document.querySelector(".ships");
  const rotateButton = document.querySelector(".rotate");
  const carrier = document.querySelector(".carrier")!;
  const destroyer = document.querySelector(".destroyer")!;
  const submarine = document.querySelector(".submarine")!;
  const patrol = document.querySelector(".patrol")!;


if(calls === 1) {
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
    if(placedShips.length === 4){
    place.innerHTML = ''
    renderGrids(playerName);
    }
  });
}
  checkBoard()


  const randomlyPlace = <HTMLButtonElement>(
    document.querySelector(".randomly-place")
  );
  randomlyPlace?.addEventListener("click", function () {
    humanShips.forEach((ship) => {
      human.gameboard.randomlyPlaceShips(ship);
    });
    randomlyPlace.disabled = true;
    grid.innerHTML = "";
    checkBoard();
  });


function checkBoard(){
   let count: any = 0;
  grid.innerHTML = ''
  for (let i = 0; i < hBoard.length; i++) {
    for (let j = 0; j < hBoard[i].length; j++) {
      count++;
      const gridItem = document.createElement("div");
      gridItem.setAttribute("data-hposition", count);
      if (!Number.isInteger(hBoard[i][j])) {
        gridItem.classList.add("ship-here");
      }
      gridItem.classList.add("grid-item");
      grid?.appendChild(gridItem);
    }
  }
}

  events();

  function events() {
    const draggables = document.querySelectorAll(".draggable")!;

    draggables.forEach((draggable) => {
        draggable.addEventListener("dragstart", () => {
            draggable.classList.add('dragging')
        });
        
        draggable.addEventListener("dragend", (ev) => {
            const shipElement: any = ev.target
            const currentPos = parseInt(position.dataset.hposition)
            const shipName = shipElement.id;
            
            placeShipDragged(shipName, currentPos)
            placeShip(playerName)
        })
    });
    
    const gridItem = document.querySelectorAll(".grid-item")
    gridItem.forEach(item => {
        item.addEventListener("dragover", (e) => {
           position = e.target
        })
    })
  }

  function placeShipDragged(shipName: string, currentPos: number) {
    if(randomlyPlace.disabled === false){
      randomlyPlace.disabled = true
    }
    if (shipName === "carrier") {
      if (carrier.classList.contains("rotated")) {
        if(human.gameboard.validPlacement(currentPos, 5, false)){
        human.gameboard.placeShip(hCarrier, currentPos, false);
        ships?.removeChild(carrier)
        placedShips.push(shipName)
        }
        else{
          carrier.classList.remove('dragging')
          return
        }
      } else {
        if(human.gameboard.validPlacement(currentPos, 5, true)){
        human.gameboard.placeShip(hCarrier, currentPos, true);
        ships?.removeChild(carrier)
        placedShips.push(shipName)
      }
      else{
        carrier.classList.remove('dragging')
      }
    }
    }
    if (shipName === "destroyer") {
      if (destroyer.classList.contains("rotated")) {
        if(human.gameboard.validPlacement(currentPos, 4, false)){
        human.gameboard.placeShip(hDestroyer, currentPos, false);
        ships?.removeChild(destroyer)
        placedShips.push(shipName)
        }
        else{
          destroyer.classList.remove('dragging')
          return
        }
      } else {
        if(human.gameboard.validPlacement(currentPos, 4, true)){
        human.gameboard.placeShip(hDestroyer, currentPos, true);
        ships?.removeChild(destroyer)
        placedShips.push(shipName)
      }
      else{
        destroyer.classList.remove('dragging')
      }
    }
    }
    if (shipName === "submarine") {
      if (submarine.classList.contains("rotated")) {
        if(human.gameboard.validPlacement(currentPos, 3, false)){
        human.gameboard.placeShip(hSubmarine, currentPos, false);
        ships?.removeChild(submarine)
        placedShips.push(shipName)
        }
        else{
          submarine.classList.remove('dragging')
          return
        }
      } else {
        if(human.gameboard.validPlacement(currentPos, 3, true)){
        human.gameboard.placeShip(hSubmarine, currentPos, true);
        ships?.removeChild(submarine)
        placedShips.push(shipName)
      }
      else{
        submarine.classList.remove('dragging')
      }
    }
    }
    if (shipName === "patrol") {
      if (patrol.classList.contains("rotated")) {
        if(human.gameboard.validPlacement(currentPos, 2, false)){
        human.gameboard.placeShip(hPatrol, currentPos, false);
        ships?.removeChild(patrol)
        placedShips.push(shipName)
        }
        else{
          patrol.classList.remove('dragging')
          return
        }
      } else {
        if(human.gameboard.validPlacement(currentPos, 2, true)){
        human.gameboard.placeShip(hPatrol, currentPos, true);
        ships?.removeChild(patrol)
        placedShips.push(shipName)
      }
      else{
        patrol.classList.remove('dragging')
      }
    }
    }
}

}

export { humanShips, computerShips, human, computer, hBoard, cBoard };