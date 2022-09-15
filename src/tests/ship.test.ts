import { Ship } from "../factories/ship";

describe('Ship', ()=> {
    let ship: Ship

    beforeEach(() =>{
        ship = new Ship(5)
    })
    
    test('ship is right length', () => {
        expect(ship).toEqual({length: 5, isHit: [], sunk: false})
    })
})