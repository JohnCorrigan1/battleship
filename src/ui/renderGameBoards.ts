import { GameBoard } from "../factories/gameboard"
import { Player } from "../factories/players"
import { Ship } from "../factories/ship"

export default function renderGrids(playerName: string){

const body = document.querySelector('body')

const grid1 = document.querySelector('.grid-container1')
const title1 = document.querySelector('.title-1')!
title1.textContent = playerName

const grid2 = document.querySelector('.grid-container2')
const title2 = document.querySelector('.title-2')!
title2.textContent = "Computer"

let human = new Player("human", "computer")
let computer = new Player("computer", "human")
let board = human.gameboard.board
let carrier = new Ship(5, "carrier")
let destroyer = new Ship(4, "destroyer")
let submarine = new Ship(3, "submarine")
let patrol = new Ship(2, "patrol")

const allShips = [carrier, destroyer, submarine, patrol]

// allShips.forEach(ship => {
//     computer.gameboard.randomlyPlaceShips(ship);
//     human.gameboard.randomlyPlaceShips(ship);
// })

allShips.forEach(ship => {
    computer.gameboard.randomlyPlaceShips(ship);
    human.gameboard.randomlyPlaceShips(ship);
})

for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
        const gridItem = document.createElement('div')
        gridItem.setAttribute("position", board[i][j])
        // gridItem.textContent = board[i][j]
        if(!Number.isInteger(board[i][j])){
            gridItem.classList.add('ship-here')
        }
        gridItem.classList.add('grid-item')
        grid1?.appendChild(gridItem)
    }
}


for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
        const gridItem = document.createElement('div')
        gridItem.setAttribute("position", board[i][j])
        // gridItem.textContent = board[i][j]
        gridItem.classList.add('grid-item')
        gridItem.classList.add('ai-grid')
        gridItem.addEventListener('click', function(){
            if(!Number.isInteger(board[i][j])){
                gridItem.classList.add('hit')
            }
            else{
            gridItem.classList.add('miss')
            }
        })
        grid2?.appendChild(gridItem)
    }
}


const gridItem = document.querySelectorAll('.grid-item')



}
