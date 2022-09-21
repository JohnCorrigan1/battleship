import { GameBoard } from "../factories/gameboard";
import { Ship } from "../factories/ship"

describe('Gameboard', () => {
    let game: GameBoard
    let destroyer: Ship;
    let carrier: Ship;
    beforeEach(() => {
        game = new GameBoard()        
        carrier = new Ship(5, "carrier");
        game.placeShip(carrier, 10, true)
        destroyer = new Ship(4, "destroyer")
        game.placeShip(destroyer, 91, false)
        game.recieveAttack(0, 9)
        game.recieveAttack(0, 8)
    })

    test('gameboard size', () => {
        expect(game.board.length).toBe(10)
    })

    test('placing ship vertically start', () => {
        expect(game.board[0][9]).toBe("carrier")
    })

    test('placing ship vertically end', () => {
        expect(game.board[4][9]).toBe("carrier")
    })

    test('placing ship horizontally start', () => {
        expect(game.board[9][0]).toBe("destroyer")
    })

    test('placing ship horizontally end', () => {
        expect(game.board[9][3]).toBe("destroyer")
    })

    test('attack hit', () => {
        expect(game.hits.includes(9)).toBe(true)
    })

    test('attack miss', () => {
        expect(game.misses.includes(8)).toBe(true)
    })
    
})