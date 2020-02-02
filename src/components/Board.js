
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
        this.boardMap[y][x] = tile;
        tile.location[0] = y;
        tile.location[1] = x; 
    },
    moveTileRight: function () {
        this.boardMap.forEach(function (row) {
            for (let i = 4; i > 0; i--) {
                if (row[i] === 0) {
                    row.pop();
                    row.unshift(0);
                }
            }
        })
    },
    moveTileLeft: function () {
        this.boardMap.forEach(function (row) {
            for (let i = 0; i < row.length; i++) {
                if (row[i] === 0) {
                    row.shift();
                    row.push(0);
                }
            }
        })
    }

    }

}




export default Board 