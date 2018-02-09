'use strict';

/**
 * Objective have x cards with one number in common by card
 * This algo is valid only if n = prime number
 * @param  {Number} n Greater than 3 && Prime number (3,5,7,11,...)
 * @return {Array} output
 */
export default (n = 3) => {

    if (n < 3) {
        throw new Error('Invalid number');
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            throw new Error('Invalid number');
        }
    }

    let output = [];

    /**
     * Create first cards
     * 
     * Example with n = 3:
     * 
     * [ 0, 1, 2, 3 ],
     * [ 0, 4, 5, 6 ],
     * [ 0, 7, 8, 9 ],
     * [ 0, 10, 11, 12 ]
     */
    for (let r = 0; r <= n; r++) {
        output.push([]);
        output[r].push(0);
        for (let i = 0; i < n; i++) {
            output[r].push(n * r + i + 1);
        }
    }

    /**
     * Create the rest of the cards
     * 
     * Example with n = 3:
     * 
     * x = (r * i + c) % 3;
     * 
     * x in grid:
     *
     * For i = 0:
     * [ 0, 0, 0 ],
     * [ 1, 1, 1 ],
     * [ 2, 2, 2 ],
     * 
     * For i = 1:
     * [ 0, 1, 2 ],
     * [ 1, 2, 0 ],
     * [ 2, 0, 1 ],
     * 
     * For i = 2:
     * [ 0, 2, 1 ],
     * [ 1, 0, 2 ],
     * [ 2, 1, 0 ],
     * 
     * 
     * [ r + 1, 4 + (3 * i) + x, 4 + (3 * i) + x, 4 + (3 * i) + x ]
     * Is:
     * [ 0 + 1, 4 + 0 + 0, 4 + 3 + 0, 4 + 6 + 0],
     * [ 0 + 1, 4 + 0 + 1, 4 + 3 + 1, 4 + 6 + 1],
     * [ 0 + 1, 4 + 0 + 2, 4 + 3 + 2, 4 + 6 + 2],
     * [ 0 + 1, 4 + 0 + 0, 4 + 3 + 1, 4 + 6 + 2],
     * [ 0 + 1, 4 + 0 + 1, 4 + 3 + 2, 4 + 6 + 0],
     * [ 0 + 1, 4 + 0 + 2, 4 + 3 + 0, 4 + 6 + 1],
     * [ 0 + 1, 4 + 0 + 0, 4 + 3 + 2, 4 + 6 + 1],
     * [ 0 + 1, 4 + 0 + 1, 4 + 3 + 0, 4 + 6 + 2],
     * [ 0 + 1, 4 + 0 + 2, 4 + 3 + 1, 4 + 6 + 0]
     *
     * Output:
     * [ 1, 4, 7, 10 ],
     * [ 1, 5, 8, 11 ],
     * [ 1, 6, 9, 12 ],
     * [ 2, 4, 8, 12 ],
     * [ 2, 5, 9, 10 ],
     * [ 2, 6, 7, 11 ],
     * [ 3, 4, 9, 11 ],
     * [ 3, 5, 7, 12 ],
     * [ 3, 6, 8, 10 ]
     */
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            let data = [];
            output.push(data);
            data.push(r + 1);
            for (let i = 0; i < n; i++) {
                data.push(n + 1 + n * i + (r * i + c) % n);
            }
        }
    }

    return output;
}