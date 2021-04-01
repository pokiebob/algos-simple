/**
 *          #195 [Hard] - NUMBER OF ELEMENTS IN SORTED MATRIX
 * 
 * This problem was asked by Google.

Let A be an N by M matrix in which every row and every column is sorted.

Given i1, j1, i2, and j2, compute the number of elements of M smaller than M[i1, j1] and larger than M[i2, j2].

For example, given the following matrix:

[[1, 3, 7, 10, 15, 20],
 [2, 6, 9, 14, 22, 25],
 [3, 8, 10, 15, 25, 30],
 [10, 11, 12, 23, 30, 35],
 [20, 25, 30, 35, 40, 45]]
And i1 = 1, j1 = 1, i2 = 3, j2 = 3, return 15 as there are 15 numbers in the matrix smaller than 6 or greater than 23.

 */

/**
 *           2  6  7  
 *           3 [8] 10 
 *           4  9  11 
 *           5  10 12    
 *           -- -- --
 * count<8 = 4  1  1  = 6
 */
const countSmaller = (mat: number[][], i: number, j: number): number => {
    const [M, N] = [mat.length, mat[0].length];
    const target = mat[i][j];
    let count = 0;

    // Traversing from right to left
    for (let col = N - 1; col >= 0; col--) {
        let row = 0;
        // find the first num that's > than (i, j) elem
        while (row < M && mat[row][col] < target) {
            row++;
        }
        count += row;
        console.log({ row, col, count });
    }
    return count;
}


const countLarger = (mat: number[][], i: number, j: number): number => {
    const [M, N] = [mat.length, mat[0].length];
    const target = mat[i][j];
    let count = 0;

    // Traversing from right to left
    for (let col = N - 1; col >= 0; col--) {
        let row = 0;
        // find the first num that's > than (i, j) elem
        while (row < M && mat[row][col] <= target) {
            row++;
        }
        const matches = N - row - 1;
        count += matches;
        console.log({ row, col, matches, count });
    }
    return count;
}



/**
 * ASSERTIONS
 */
const test1 = [
    [2, 6, 7],
    [3, 8, 10],
    [4, 9, 11],
    [5, 10, 12]
];
// console.log(countSmaller(test1, 1, 1) === 6);
// console.log(countLarger(test1, 1, 1) === 5);

const test2 = [
    [1, 3, 7, 10, 15, 20],
    [2, 6, 9, 14, 22, 25],
    [3, 8, 10, 15, 25, 30],
    [10, 11, 12, 23, 30, 35],
    [20, 25, 30, 35, 40, 45]];

console.log(countSmaller(test2, 1, 1) === 4);
console.log(countLarger(test2, 3, 3)); // wrong
