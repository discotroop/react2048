import Tile from './tile.js'

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
            const filtered = row.filter(tile => tile.count > 0);
            const blankTile = Tile();
            blankTile.count = 0;
            if (filtered.length > 1) {
                let prevIndex = filtered.length - 1;
                let nextIndex = prevIndex - 1;
                let previous = filtered[prevIndex];
                let nexttile = filtered[nextIndex];
                while (nextIndex > -1) {
                    let prev = previous;

                    if (prev.count === nexttile.count) {
                        nexttile.count += prev.count;
                        filtered.pop()
                        prevIndex--
                        console.log(filtered[prevIndex])
                        nextIndex = prevIndex--;
                    } else {
                        nextIndex--
                    }

                }
            }
            row = [blankTile, blankTile, blankTile, blankTile];
            for (let i = filtered.length - 1; i > -1; i--) {
                row.shift();
                row.push(filtered[i]);
            }
        })
    },
    moveTileLeft: function () {
        this.boardMap.forEach(function (row) {
            for (let i = 0; i < 3; i++) {
                if (row[i] === 0) {
                    row.shift();
                    row.push(0);
                }
            }
        })
    },
    moveTileDown: function () {
     console.log("what to do")
    }

    }

}




export default Board 