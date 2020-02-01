
function Board () {
    function drawBoard () {
        let result = []
        for (let i = 0; i < 4; i++) {
            result.push(new Array(4));
        }
        return result;
    }

    return {
        boardMap: drawBoard(),
        placeTile: function (y, x, tile) {
            this.boardMap[y][x] = tile.count;
            tile.location[0] = y;
            tile.location[1] = x; 
            console.log(tile);
        }
    }
}



export default Board 