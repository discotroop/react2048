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
test('Board can move tiles right', () => {
    let sampleBoard = Board();
    const tile = Tile();
    const count = tile.count;
    sampleBoard.placeTile(0, 1, tile)

    sampleBoard.moveTileRight();
    expect(sampleBoard.boardMap[0][3].count).toBe(count);
})