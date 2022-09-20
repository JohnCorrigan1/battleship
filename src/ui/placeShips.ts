import { Player } from "./../factories/players";
import { Ship } from "./../factories/ship";
import { GameBoard } from "../factories/gameboard";
import renderGrids from "./renderGameBoards";

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

export default function placeShips(playerName: string) {
  const info = document.querySelector(".info");
  info?.classList.remove("info");
  info?.classList.add("hide");

  const place = document.querySelector(".place")!;
  place?.classList.remove("hide");

  const container = document.querySelector(".place");
  //  const gridContainer = document.querySelector('.grid-container')!
  const grid1 = document.querySelector(".grid-container")!;
  const title1 = document.querySelector(".title-1")!;
  title1.textContent = playerName;

  const ships = document.querySelector(".ships");
  const rotateButton = document.querySelector(".rotate");
  const carrier = document.querySelector(".carrier")!;
  const destroyer = document.querySelector(".destroyer");
  const submarine = document.querySelector(".submarine");
  const patrol = document.querySelector(".patrol");

  const draggables = document.querySelectorAll(".draggable")!;
  let ship: any;
  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", (e) => {
      e.preventDefault();
      draggable.classList.remove("dragging");
      console.log("dropped");
      console.log(e.target);
      console.log(e);
      ship = e.target;
      // console.log(e.toElement.id)

      console.log(placeHere.dataset.hposition);
      console.log(ship.id);
      let shipPosition: number = parseInt(placeHere.dataset.hposition);
      let shipName = ship.id;
      placeShipDragged(shipPosition, shipName);
      checkBoard();
    });
  });

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
    grid1.innerHTML = "";
    // checkBoard();
  }

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

  let droppedAt: any;

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

  function checkBoard() {
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

  //   function checkGrid() {
  //     let gridItems = document.querySelectorAll('.grid-item')
  //     gridItems.forEach(item => {
  //         if (!Number.isInteger())
  //     })
  //   }

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

  let placeHere: any;
  const gridItem = document.querySelectorAll(".grid-item");
  gridItem.forEach((item) => {
    item.addEventListener("dragover", (e) => {
      placeHere = e.target;
    });
  });
}

export { humanShips, computerShips, human, computer, hBoard, cBoard };
