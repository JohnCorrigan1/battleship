import { GameBoard } from "../factories/gameboard"
import { Player } from "../factories/players"
import { Ship } from "../factories/ship"

export default function renderGrids(playerName: string){

const body = document.querySelector('body')

const grid1 = document.querySelector('.grid-container1')
const title1 = document.querySelector('.title-1')!
title1.textContent = playerName
const sunken1 = document.querySelector('.sunken1')

const grid2 = document.querySelector('.grid-container2')
const title2 = document.querySelector('.title-2')!
title2.textContent = "Computer"
const sunken2 = document.querySelector('.sunken2')

let human = new Player("human", "computer")
let computer = new Player("computer", "human")
let hBoard = human.gameboard.board
let cBoard = computer.gameboard.board
let hCarrier = new Ship(5, "carrier")
let hDestroyer = new Ship(4, "destroyer")
let hSubmarine = new Ship(3, "submarine")
let hPatrol = new Ship(2, "patrol")
let cCarrier = new Ship(5, "carrier")
let cDestroyer = new Ship(4, "destroyer")
let cSubmarine = new Ship(3, "submarine")
let cPatrol = new Ship(2, "patrol")

const humanShips = [hCarrier, hDestroyer, hSubmarine, hPatrol]
const computerShips = [cCarrier, cDestroyer, cSubmarine, cPatrol]

// allShips.forEach(ship => {
//     computer.gameboard.randomlyPlaceShips(ship);
//     human.gameboard.randomlyPlaceShips(ship);
// })

computerShips.forEach(ship => {
    computer.gameboard.randomlyPlaceShips(ship);
    
})
humanShips.forEach(ship => {
    human.gameboard.randomlyPlaceShips(ship);
    
})

let count: any = 0;
for(let i = 0; i < hBoard.length; i++){
    for(let j = 0; j < hBoard[i].length; j++){
        count++
        const gridItem = document.createElement('div')
        gridItem.setAttribute("hposition", count)
        // gridItem.textContent = board[i][j]
        if(!Number.isInteger(hBoard[i][j])){
            gridItem.classList.add('ship-here')
        }
        gridItem.classList.add('grid-item')
        grid1?.appendChild(gridItem)
    }
}


for(let i = 0; i < cBoard.length; i++){
    for(let j = 0; j < cBoard[i].length; j++){
        const gridItem = document.createElement('div')
        gridItem.setAttribute("cposition", cBoard[i][j])
        // gridItem.textContent = board[i][j]
        gridItem.classList.add('grid-item')
        gridItem.classList.add('ai-grid')
        gridItem.addEventListener('click', function(){
            if(gridItem.classList.contains('hit') || gridItem.classList.contains('miss')){
                return
            }
            if(!Number.isInteger(cBoard[i][j])){
                gridItem.classList.add('hit')
                let isSunk: boolean = false;
                computer.gameboard.recieveAttack(i, j);
                computer.gameboard.placedShips.forEach((ship => {
                    if(ship.name === cBoard[i][j]){
                    isSunk = ship.sunk
                    }
                }))
                if(isSunk){
                    const sunken = document.createElement('h2')
                    sunken.textContent = cBoard[i][j]
                    sunken2?.appendChild(sunken)

                    if(computer.gameboard.isOver()){
                        alert("You win")
                    }
                }
            }
            else{
                gridItem.classList.add('miss')
            }
            let position: any
            position = computer.randomAttack(human)
            const item = document.querySelector(`[hposition="${position}"]`)
            let temp: number = position
            let newPosition: string = human.gameboard.convertPosition(temp)
            let row: number = human.gameboard.getRow(newPosition)
            let col: number = human.gameboard.getCol(newPosition)
            if(!Number.isInteger(human.gameboard.board[row][col])){
                item?.classList.add('hit')
                let isSunk1: boolean = false;
                human.gameboard.recieveAttack(i, j);
                human.gameboard.placedShips.forEach((ship => {
                    if(ship.name === hBoard[i][j]){
                    isSunk1 = ship.sunk
                    }
                }))
                if(isSunk1){
                    const sunken = document.createElement('h2')
                    sunken.textContent = hBoard[i][j]
                    sunken1?.appendChild(sunken)

                    if(human.gameboard.isOver()){
                        alert("You Lose")
                    }
                }
            }
            else{
                item?.classList.add('miss')
            }
        })
        grid2?.appendChild(gridItem)
    }
}


const gridItem = document.querySelectorAll('.grid-item')



}
