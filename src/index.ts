import './styles.css'
import { GameBoard } from './factories/gameboard'
import { Ship } from './factories/ship'

const body = document.querySelector('body')

const test = document.createElement('h1')
test.textContent = ('hello')
test.classList.add('test')

body?.appendChild(test)

