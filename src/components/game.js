import Board from './Board.js'
import Tile from './tile.js'

function Game () {
    return {
        loss: false,
        victory: false,
        board: Board(),
        newestTile: [],
        random: function () {
            let randomFloat = Math.random();
            let result = 0;
    
            if (randomFloat < 0.25) {
                result = 0;
            } else if (randomFloat < 0.5) {
                result = 1;
            } else if (randomFloat < 0.75) {
                result = 2;
            } else {
                result = 3;
            }
            return result;
        },
        getTileList: function () {
            let list = []
            this.board.boardMap.forEach((arr) => {
                arr.forEach((tile) => {
                    list.push(tile);
                })
            })
            return list; 
        },
        placeTile: function () {
            let x = this.random();
            let y = this.random();
            let tiles = this.filterTiles()
            if (tiles.length === 16) {
                return;
            } else if (this.board.boardMap[x][y].count < 2) {
                this.board.placeTile(x, y, Tile());
            } else {
                this.placeTile();
            }
            this.newestTile[0] = x;
            this.newestTile[1] = y;
        },

        /* move checks for final tile at end game */
        checkMoveRight: function (count, x, y) {
            let rightMove = this.board.boardMap[x][y + 1];
            if (rightMove === undefined) {
                return false;
            } else if (rightMove.count === count) {
                return true;
            } else {
                return false;
            }
        },
        checkMoveLeft: function(count, x, y) {
            let leftMove = this.board.boardMap[x][y - 1];
            if (leftMove === undefined) {
                return false;
            } else if (leftMove.count === count) {
                return true;
            } else {
                return false;
            }
        },
        checkMoveDown: function(count, x, y) {
            if (x === 0) {
                return false;
            } else {
                let downMove = this.board.boardMap[x - 1][y];
                if (downMove.count === count) {
                    return true
                } else {return false} 
            }
        },
        checkMoveUp: function(count, x, y) {
            if (x === 3) {
                return false;
            } else {
                let upMove = this.board.boardMap[x + 1][y];
                if (upMove.count === count) {
                    return true
                } else {
                return false;
            }
        }
        },
        tileHasMove: function (x, y) {
            let hasMove = false;
            let count = this.board.boardMap[x][y].count;
            if (this.checkMoveRight(count, x, y) === true) {
                hasMove = true;
                return hasMove;
            } else if (this.checkMoveLeft(count, x, y) === true) {
                hasMove = true;
                return hasMove;
            } else if (this.checkMoveDown(count, x, y) === true) {
                hasMove = true;
                return hasMove;
            } else if (this.checkMoveUp(count, x, y) === true) {
                hasMove = true;
                return hasMove;
            } else {
                return hasMove;
            }
        },
        anyTileHasMove() {
            for(let i = 0; i < this.board.boardMap.length; i++) {
                for(let j = 0; j <this.board.boardMap[i].length; j++) {
                    let result = this.tileHasMove(i, j);
                    if (result === true) {
                        return true;
                    }
                }
            }
            return false;
        },
        /* end move checks */
        filterTiles: function () {
            let tiles = []
            this.board.boardMap.forEach((arr) => {
                arr.forEach((tile) => {
                    if (tile.count > 0) {
                        tiles.push(tile);
                    }
                });
            });
            return tiles;
        },
        // Should see if there are no legal moves, returns true if no moves false if there are moves
        hasLost: function () {
            let loss = false;
            let tiles = this.filterTiles();
            if (tiles.length < 16) {
                return loss;
            } else if (this.anyTileHasMove() === true) {
                // if any tile can move return false;
                console.log(" has lost",  loss)
                return loss;
            } else {
                loss = true;
                return loss;
            }
        }, 
        checkWin: function () {
            let tiles = this.filterTiles();
            let winner = tiles.filter(tile => tile.count === 2048)
            if (winner.length > 0) {
                return 1;
            } else {
                return 0;
            }
        },
        newGame: function () {
            this.board = Board();
        }
}
}

export default Game