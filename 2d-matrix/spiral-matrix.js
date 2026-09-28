/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let spiralArr=[]
    let colBegin = 0;
    let colEnd = matrix[0].length - 1;

    let rowBegin = 0;
    let rowEnd = matrix.length - 1;


  while (colBegin <= colEnd && rowBegin <= rowEnd) {

        // Left → Right
        for (let i = colBegin; i <= colEnd; i++) {
            spiralArr.push(matrix[rowBegin][i]);
        }
        rowBegin++;

        // Top → Bottom
        for (let i = rowBegin; i <= rowEnd; i++) {
            spiralArr.push(matrix[i][colEnd]);
        }
        colEnd--;

        // Right → Left
        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                spiralArr.push(matrix[rowEnd][i]);
            }
            rowEnd--;
        }

        // Bottom → Top
        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                spiralArr.push(matrix[i][colBegin]);
            }
            colBegin++;
        }
    }

 return spiralArr
};