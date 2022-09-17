import './styles.css'
import { GameBoard } from './factories/gameboard'
import { Ship } from './factories/ship'
import { Player } from './factories/players'

const body = document.querySelector('body')

const test = document.createElement('h1')
test.textContent = ('hello')
test.classList.add('test')

body?.appendChild(test)

// let me: Player = new Player('me', 'computer')
// let computer: Player = new Player('computer', 'me')

// const players = [me, computer]

// me.attack(10, computer)