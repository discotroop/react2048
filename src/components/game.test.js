import Game from './game.js'

test('game has access to board', () => {
    let sampleGame = Game();
    expect(sampleGame.board.boardMap[0][0].count).toBe(0);
});
test('Game.random(), returns a random number between 0 and 3', () => {
    let sampleGame = Game();
    let randomNum = sampleGame.random();
    expect(randomNum).toBeGreaterThan(-1);
    expect(randomNum).toBeLessThan(4);
});
test('game.placeTile calls board.placeTile with a legal move', () => {
    let sampleGame = Game();
    for (let i = 0; i < 5; i++) {
        sampleGame.placeTile();
    }
    let tiles = [];
    sampleGame.board.boardMap.forEach((arr) => {
        arr.forEach((tile) => {
            if (tile.count > 0)
            tiles.push(tile)
        });
    });
    sampleGame.checkLoss()
    expect(tiles.length).toBe(5);
})


describe('check last tile looks for game ending moves', () =>  {
    test('checkMoveRight returns false when on the edge', () => {
        let sampleGame = Game();
        let edge = sampleGame.checkMoveRight(2, 0, 3)
        expect(edge).toBe(false);
    });
    test('checkMoveLeft returns false when on the edge', () => {
        let sampleGame = Game();
        let edge = sampleGame.checkMoveLeft(2, 0, 0)
        expect(edge).toBe(false);
    });
    test('checkMoveDownreturns false when on the edge', () => {
        let sampleGame = Game();
        let edge = sampleGame.checkMoveDown(2, 3, 3)
        expect(edge).toBe(false);
    });
    test('checkMoveUp returns false when on the edge', () => {
        let sampleGame = Game();
        let edge = sampleGame.checkMoveUp(2, 0, 0)
        expect(edge).toBe(false);
    });
})

describe('checkWin, checks for winning counts', () => {
    test('TEMP returns 1 on finding 2048', () => {
        let sampleGame = Game();
        sampleGame.board.boardMap[0][0].count = 2048;
        let result = sampleGame.checkWin()
        expect(result).toBe(1);
    });
    test('TEMP returns 0 on no 2048', () => {
        let sampleGame = Game();
        let result = sampleGame.checkWin()
        expect(result).toBe(0);
    });
})