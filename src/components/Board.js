import Tile from './tile.js'

function Board () {
    let newTile = () => Tile(0);
    function drawBoard () {
        let result = []
        let xArr = () => [newTile(), newTile(), newTile(), newTile()];
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
    makeVerticalRows: function (arr) {
        let mockArr = [[], [], [], []];
        arr.forEach(function(array) {
            array.forEach(function(tile, index) {
                mockArr[index].push(tile);
            });
        });
        return mockArr;
    },
    moveTileRow: function (row) {
        let filtered = this.filterNumberedTiles(row);
        let blankTile = () => Tile(0);
        let mockRow = [blankTile(), blankTile(), blankTile(), blankTile()];
        
        if (filtered.length === 0) {
            return row;
        } else if (filtered.length === 1) {
            mockRow[3] = filtered[0];
            row = mockRow;
            return row;
        } else if (filtered.length > 1) {
            filtered.reverse();
            filtered = this.checkMatches(filtered);
                while (filtered.length < 4) {
                    filtered.push(blankTile());
                }
            }
        filtered.reverse();
        row = filtered;
        return row;
    },
    moveTileRight() {
        for (let i = 0; i < this.boardMap.length; i++) {
            this.boardMap[i] = this.moveTileRow(this.boardMap[i]);
        }
    },
    moveTileLeft: function () {
        for (let i = 0; i < this.boardMap.length; i++) {
            this.boardMap[i] = this.moveTileRow(this.boardMap[i].reverse());
            this.boardMap[i].reverse();
        }
    },
    moveTileDown: function () {
        let workingArr = this.makeVerticalRows(this.boardMap);
        for (let i = 1; i < workingArr.length; i++) {
            workingArr[i] = this.moveTileRow(workingArr[i]);
        }
        this.boardMap = this.makeVerticalRows(workingArr)
    },
    moveTileUp: function () {
        let workingArr = this.makeVerticalRows(this.boardMap);
        for (let i = 0; i < workingArr.length; i++) {
            let reversed = workingArr[i].reverse();
            workingArr[i] = this.moveTileRow(reversed);
            workingArr[i].reverse();
        }
        this.boardMap = this.makeVerticalRows(workingArr);
        console.log(this.boardMap)
    }

}

}




export default Board 