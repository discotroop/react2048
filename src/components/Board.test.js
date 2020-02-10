import Board from './Board'
import Tile from './tile'


// Draw boardMap
test('boardMap is an array of length 4', () => {
    let sampleBoard = Board();

    expect((sampleBoard.boardMap.length)).toBe(4);
});
test('boardMap has subarrays of length 4', () => {
    let sampleBoard = Board();

    expect(sampleBoard.boardMap[2].length).toBe(4);
})

// Place tiles
test('Board can place tiles into boardMap', () => {
    let sampleBoard = Board();
    let sampleTile = Tile();

    sampleBoard.placeTile(0, 1, sampleTile);
    expect(sampleBoard.boardMap[0][1].count).toBe(sampleTile.count);
})


// Move single tiles
test('Board can move tiles right', () => {
    let sampleBoard = Board();
    let tile = Tile();
    const count = tile.count;
    sampleBoard.placeTile(0, 1, tile)

    sampleBoard.moveTileRight();
    expect(sampleBoard.boardMap[0][3].count).toBe(count);
})
test('Board can move tiles left', () => {
    let sampleBoard = Board();
    const tile = Tile();
    const count = tile.count;
    sampleBoard.placeTile(0, 3, tile)

    sampleBoard.moveTileLeft();
    expect(sampleBoard.boardMap[0][0].count).toBe(count);
});
test.skip('Board can move tiles down', () => {
    let sampleBoard = Board();
    const tile = Tile();
    const count = tile.count;
    sampleBoard.placeTile(0, 3, tile)

    sampleBoard.moveTileDown();
    expect(sampleBoard.boardMap[3][3].count).toBe(count);
});

test('MoveTileRow can handle two matching tiles', () => {
    let sampleBoard = Board();
    let tile = Tile();
    let tile2 = Tile();
    tile.count = 2;
    tile2.count = 2;
    sampleBoard.placeTile(0, 3, tile);
    sampleBoard.placeTile(0, 2, tile2);
    let sampleRow = sampleBoard.boardMap[0];
    sampleRow = sampleBoard.moveTileRow(sampleRow);
    expect(sampleRow[3].count).toBe(4);
});
test('MoveTileRow can handle two sets of matching tiles', () => {
    let sampleBoard = Board();
    let tile = new Tile();
    let tile2 = new Tile();
    let tile3 = new Tile();
    let tile4 = new Tile();
    tile.count = 2;
    tile2.count = 2;
    tile3.count = 4;
    tile4.count = 4;
    sampleBoard.placeTile(0, 3, tile);
    sampleBoard.placeTile(0, 2, tile2);
    sampleBoard.placeTile(0, 1, tile3);
    sampleBoard.placeTile(0, 0, tile4);
    let sampleRow = sampleBoard.boardMap[0];
    sampleRow = sampleBoard.moveTileRow(sampleRow);
    expect(sampleRow[3].count).toBe(4);
    expect(sampleRow[2].count).toBe(8);
})


// Add tiles 
describe('board can add tiles on right move', () => {
    test("it adds two matching tiles in a row", () => {
    let sampleBoard = Board();
    let tile1 = Tile();
    let tile2 = Tile();
    tile1.count = 2;
    tile2.count = 2;
    sampleBoard.placeTile(0, 1, tile1)
    sampleBoard.placeTile(0, 3, tile2)

    sampleBoard.moveTileRight();
    expect(sampleBoard.boardMap[0][3].count).toBe(4);

    })
    test('it adds 4 matching tiles in a row, two sets of two', () => {
    let sampleBoard = Board();
    let tile1 = Tile();
    let tile2 = Tile();
    let tile3 = Tile();
    let tile4 = Tile();
    tile1.count = 2;
    tile2.count = 2;
    tile3.count = 2;
    tile4.count = 2;
    const total = 4;
    sampleBoard.placeTile(0, 0, tile1)
    sampleBoard.placeTile(0, 1, tile2)
    sampleBoard.placeTile(0, 2, tile3)
    sampleBoard.placeTile(0, 3, tile4)
    
    sampleBoard.moveTileRight();
    expect(sampleBoard.boardMap[0][3].count).toBe(total);
    expect(sampleBoard.boardMap[0][2].count).toBe(total);

    })

})