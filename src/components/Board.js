
function Board () {
    function drawBoard () {
        let result = []
        let xArr = () => [0, 0, 0, 0];
        for (let i = 0; i < 4; i++) {
            result.push(xArr());
        }
        return result;
    }

return {
    boardMap: drawBoard(),
    tiles: [],
    placeTile: function (y, x, tile) {
        this.boardMap[y][x] = tile.count;
        tile.location[0] = y;
        tile.location[1] = x; 
    },
    down: function () {
        for (let i = 2; i > -1; i--) {
            let row = this.boardMap[i]
            for (let j = 0; j < row.length; j++) {
                let currentTile = row[j];
                this.boardMap[3][j] = currentTile;
                row[j] = 0;
                }
            }
        }
    }

}



export default Board 