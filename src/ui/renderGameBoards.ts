import { humanShips, computerShips, human, computer, hBoard, cBoard } from "../ui/placeShip";

export default function renderGrids(playerName: string) {
  const place = document.querySelector('.place')
    place?.classList.add('hide')

  const main = document.querySelector("#main")!;
  main.classList.remove("hide");
  main.classList.add("main");

  const grid1 = document.querySelector(".grid-container1")!;
  const title1 = document.querySelector(".title-1")!;
  title1.textContent = playerName;
  const sunken1 = document.querySelector(".sunken1");

  const grid2 = document.querySelector(".grid-container2")!;
  const title2 = document.querySelector(".title-2")!;
  title2.textContent = "Computer";
  const sunken2 = document.querySelector(".sunken2");

  const whoWon = document.querySelector(".who-won");
  const restart = document.createElement("button");
  restart.classList.add("restart");
  restart.textContent = "Restart";
  restart.addEventListener("click", function () {
    location.reload();
  });


  computerShips.forEach((ship) => {
    computer.gameboard.randomlyPlaceShips(ship);
  });

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

  for (let i = 0; i < cBoard.length; i++) {
    for (let j = 0; j < cBoard[i].length; j++) {
      const gridItem = document.createElement("div");
      gridItem.setAttribute("cposition", cBoard[i][j]);
      // gridItem.textContent = board[i][j]
      gridItem.classList.add("grid-item");
      gridItem.classList.add("ai-grid");
      gridItem.addEventListener("click", function () {
        if (
          gridItem.classList.contains("hit") ||
          gridItem.classList.contains("miss") ||
          human.gameboard.isOver() ||
          computer.gameboard.isOver()
        ) {
          return;
        }
        if (!Number.isInteger(cBoard[i][j])) {
          gridItem.classList.add("hit");
          let isSunk: boolean = false;
          computer.gameboard.recieveAttack(i, j);
          computer.gameboard.placedShips.forEach((ship) => {
            if (ship.name === cBoard[i][j]) {
              isSunk = ship.sunk;
            }
          });
          if (isSunk) {
            const sunken = document.createElement("h2");
            sunken.textContent = cBoard[i][j];
            sunken2?.appendChild(sunken);

            if (computer.gameboard.isOver()) {
              const winner = document.createElement("h1");
              winner.textContent = "Winner: " + playerName + "!";
              whoWon?.appendChild(winner);
              whoWon?.appendChild(restart);
            }
          }
        } else {
          gridItem.classList.add("miss");
          gridItem.textContent = "X"
        }
        let position: any;
        position = computer.randomAttack(human);
        const item = document.querySelector(`[hposition="${position}"]`)!;
        let temp: number = position;
        let newPosition: string = human.gameboard.convertPosition(temp);
        let row: number = human.gameboard.getRow(newPosition);
        let col: number = human.gameboard.getCol(newPosition);
        if (!Number.isInteger(human.gameboard.board[row][col])) {
          item?.classList.remove('ship-here')
          item?.classList.add("hit");
          let isSunk1: boolean = false;
          human.gameboard.recieveAttack(i, j);
          human.gameboard.placedShips.forEach((ship) => {
            if (ship.name === hBoard[row][col]) {
              isSunk1 = ship.sunk;
            }
          });
          if (isSunk1) {
            const sunken = document.createElement("h2");
            sunken.textContent = hBoard[row][col];
            sunken1?.appendChild(sunken);

            if (human.gameboard.isOver()) {
              const winner = document.createElement("h1");
              winner.textContent = "Winner: Computer!";
              whoWon?.appendChild(winner);
              whoWon?.appendChild(restart);
            }
          }
        } else {
          item?.classList.add("miss");
          item.textContent = "X"
        }
      });
      grid2?.appendChild(gridItem);
    }
  }
}