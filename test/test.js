import assert from 'assert';
import { generate } from '../src/generator';

describe('generator', () => {

    it('Output with 4 symbols by card', function() {

        const cards = generate(3);
        
        assert.deepEqual(cards, [
            [ 0, 1, 2, 3 ],
            [ 0, 4, 5, 6 ],
            [ 0, 7, 8, 9 ],
            [ 0, 10, 11, 12 ],
            [ 1, 4, 7, 10 ],
            [ 1, 5, 8, 11 ],
            [ 1, 6, 9, 12 ],
            [ 2, 4, 8, 12 ],
            [ 2, 5, 9, 10 ],
            [ 2, 6, 7, 11 ],
            [ 3, 4, 9, 11 ],
            [ 3, 5, 7, 12 ],
            [ 3, 6, 8, 10 ] 
        ]);
    });

    it('Number of cards', function() {

        const n = 7;

        const cards = generate(n);

        assert.equal(cards.length, n * (n + 1) + 1);
    });

    it('Number by card', function() {

        const n = 7;

        const cards = generate(n);

        let numbers = {};

        cards.forEach((card) => {
        
            card.forEach((value) => {

                if (!numbers[value]) {
                    numbers[value] = 0;
                }

                numbers[value]++;
            });
        });

        for (let [key, value] of Object.entries(numbers)) {
            assert.equal(value, n + 1);
        }
    });

    it('Card has one number in common', function() {

        const n = 7;

        const cards = generate(n);

        cards.forEach(function (v1, i1) {

            cards.forEach(function (v2, i2) {

                if (i1 === i2) {
                    return;
                }

                let count = 0;

                v1.forEach(function (n) {
                    if (v2.indexOf(n) !== -1) {
                        count++;
                    }
                });

                assert.equal(count, 1);
            });
        });
    });
});