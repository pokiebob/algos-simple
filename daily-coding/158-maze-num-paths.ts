/**
 *                              #158 [Medium] - WAYS TO MOVE THROUGH MAZE
 * 
 * You are given an N by M matrix of 0s and 1s. Starting from the top left corner, how many ways are there to reach the bottom right corner?
 * You can only move right and down. 0 represents an empty space while 1 represents a wall you cannot walk through.
 * For example, given the following matrix:
 * [[0, 0, 1],
 * [0, 0, 1],
 * [1, 0, 0]]
* Return two, as there are only two ways to get to the bottom right:
* 
* Right, down, down, right
* Down, right, down, right
* The top left corner and bottom right corner will always be 0.
*/

const OFFSETS = [
    { y: 1, x: 0 }, // down
    { y: 0, x: 1 } // right
];

type Matrix = number[][];

interface Position { y: number, x: number }

const canMove = (matrix: Matrix, pos: Position): boolean =>
    pos.y >= 0 && pos.y < matrix.length &&
    pos.x >= 0 && pos.y < matrix[0].length &&
    matrix[pos.y][pos.x] === 0;

/**
 * Ways to move to the bottom right starting from top left.
 */
const paths = (matrix: Matrix, MAX_DEPTH = 10) => {
    /**
     * Depth first traversal
     */
    const move = (pos: Position, depth: number = 0) => {
        if (depth > MAX_DEPTH) {
            console.log('aborting');
            return;
        }
        // Reach bottom right?
        if (pos.y === matrix.length - 1 && pos.x === matrix[0].length - 1) {
            console.log('Bottom right');
            return;
        }

        // Move right, move down
        OFFSETS.forEach(offset => {
            const newPos = { y: pos.y + offset.y, x: pos.x + offset.x };
            if (canMove(matrix, newPos)) {
                move(newPos);
            }
        })
    }
}
