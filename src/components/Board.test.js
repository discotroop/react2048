import Board from './Board'
import Tile from './tile'

let sampleBoard = Board();
let sampleTile = Tile();

// Draw boardMap
test('boardMap is an array of length 4', () => {
    expect((sampleBoard.boardMap.length)).toBe(4);
});
test('boardMap has subarrays of length 4', () => {
    expect(sampleBoard.boardMap[2].length).toBe(4);
})

// Place tiles
test('Board can place tiles into boardMap', () => {
    sampleBoard.placeTile(0, 1, sampleTile);
    expect(sampleBoard.boardMap[0][1]).toBe(sampleTile.count);
})
test('Board can move tiles down', () => {
    console.log(sampleBoard);
    sampleBoard.down();
    expect(sampleBoard.boardMap[3][1]).toBe(sampleTile.count);
})