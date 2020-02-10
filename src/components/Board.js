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
    // tileMatch: function (a, b) {
    //     if (a.count === b.count) {
    //         a.count += b.count;
    //         console.log(a.count);
    //         return a.count;
    //     } else {
    //         return false;
    //     }
    // },
    checkMatches: function (array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i].count === array[i + 1].count) {
                array[i].count += array[i + 1].count;
                array[i + 1].count = 0; 
                i++
            }
        }
        array = this.filterNumberedTiles(array);
        return array;
    },

    moveTileRow: function (row) {
        const that = this;
        let filtered = that.filterNumberedTiles(row);

        let blankTile = () => Tile(0);
        blankTile.count = 0;

        let mockRow = [blankTile, blankTile, blankTile, blankTile];
            
        if (filtered.length === 1) {

            mockRow[3] = filtered[0];
            row = mockRow;
            return row;
        } else if (filtered.length > 1) {
            filtered.reverse();
            filtered = this.checkMatches(filtered);
            
            while (filtered.length < 4) {
                filtered.push(blankTile());
            }
            filtered.reverse();
            }
            row = filtered;
            return row;
    },
    moveTileRight() {
        for (let i = 0; i < this.boardMap.length; i++) {
            this.boardMap[i] = this.moveTileRow(this.boardMap[i]);
        }
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