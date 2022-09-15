import './styles.css'
import { GameBoard } from './factories/gameboard'

const body = document.querySelector('body')

const test = document.createElement('h1')
test.textContent = ('hello')
test.classList.add('test')

body?.appendChild(test)

let newGame = new GameBoard()
console.log(newGame.board)