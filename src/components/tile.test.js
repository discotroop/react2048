import Tile from './tile'

let sample = Tile();

test('tiles initialize with a count of 2 or 4', () => {
    function isTwoOrFour (count) {
        if (count === 2 || count === 4) {
            return true;
        } else {
            return false;
        }
    }
    expect(isTwoOrFour(sample.count)).toBe(true);
});

test('tiles double count on matched contact', () => {
    sample.count = 2;
    sample.contact(2);
    expect(sample.count).toBe(4);
})