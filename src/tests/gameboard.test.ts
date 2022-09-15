import { GameBoard } from "../factories/gameboard";

describe('Gameboard', () => {
    let game: GameBoard
    
    beforeEach(() => {
        game = new GameBoard()        
    })

    test('gameboard size', () => {
        expect(game.board.length).toBe(10)
    })
})