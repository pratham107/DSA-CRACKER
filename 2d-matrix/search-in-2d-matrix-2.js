
const searchiN2DMatrixTwo = (matrix, target) => {
    let row = 0;
    let col = matrix[0].length - 1;
    let n = matrix.length;

    while (row < n && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            col--
        } else {
            row++;
        }
    }
    return false;
}


const matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]];
let target = 30;

const isValuePresent = searchiN2DMatrixTwo(matrix, target)

console.log(isValuePresent)