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
        // tile.location[0] = y;
        // tile.location[1] = x; 
    },
    filterNumberedTiles: function (row) {
        return row.filter(tile => tile.count > 0);
    },

    moveTileRow: function (row) {
        const that = this;
        let filtered = that.filterNumberedTiles(row);

        const blankTile = Tile();
        blankTile.count = 0;
        let mockRow = [blankTile, blankTile, blankTile, blankTile];
            
            if (filtered.length === 1) {
                mockRow[3] = filtered[0];
            } else if (filtered.length > 1) {
                let prevIndex = filtered.length - 1;
                let nextIndex = prevIndex - 1;
                let tempRow = mockRow;
                do {
                    if(filtered[prevIndex].count === filtered[nextIndex].count) {
                        filtered[nextIndex].count += filtered[prevIndex].count;
                        tempRow.shift();
                        tempRow.push(filtered[nextIndex]);
                        prevIndex = prevIndex - 2;
                        nextIndex = prevIndex - 1;
                    } else {
                        nextIndex--;
                    }
                }
                while (nextIndex > -1) 
                mockRow = tempRow;
            }
            row = mockRow;
            return row;
    },
    moveTileRight() {
        let that = this;
        let passingArr = this.boardMap;
        passingArr.forEach((row) => {
            row = that.moveTileRow(row);
            console.log(passingArr[0]);
            return row;
        })
        console.log(passingArr);
        this.boardMap = passingArr;
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