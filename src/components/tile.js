
function Tile (count) {
    function randomize() {
        let result = 0;
        let randomFloat = Math.random();

        if (randomFloat > 0.5) {
            result = 4;
        } else {
            result = 2;
        }
        return result;
    }
    let theCount = 0;
    
    if (arguments.length > 0) {
        theCount = count;
    } else {
        theCount = randomize();
    }

    return {
        count: theCount,
        // location: [0, 0],
        moves: [],
        contact: function (TileToMatchCount) {
            if (TileToMatchCount === this.count) {
                this.count += TileToMatchCount;
            } else {
                return;
            }
        },
        down: function () {
            this.location = [3, 0];
        }
    }
}




export default Tile 