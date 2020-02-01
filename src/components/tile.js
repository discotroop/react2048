
function Tile () {
    function randomize() {
        let randomFloat = Math.random();
        let result = 0;
        if (randomFloat > 0.5) {
            result = 4;
        } else {
            result = 2;
        }
        return result;
    }

    return {
        count: randomize(),
        location: [0, 0],
        contact: function (TileToMatchCount) {
            if (TileToMatchCount === this.count) {
                this.count += TileToMatchCount;
            } else {
                return;
            }
        }
    }
}




export default Tile 