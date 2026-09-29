var generateMatrix = function (n) {
    let spiralMatrixArr = Array.from({ length: n }, () => Array(n).fill(0));

    let rowBegin = 0;
    let rowEnd = spiralMatrixArr.length - 1;
    let colBegin = 0;
    let colEnd = spiralMatrixArr[0].length - 1

    let count = 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        for (let i = colBegin; i <= colEnd; i++) {
            spiralMatrixArr[rowBegin][i] = count;
            count++;
        }
        rowBegin++;

        for (let i = rowBegin; i <= rowEnd; i++) {
            spiralMatrixArr[i][colEnd] = count;
            count++;
        }

        colEnd--;

        if (rowBegin <= rowEnd) {
            for (let i = colEnd; i >= colBegin; i--) {
                spiralMatrixArr[rowEnd][i] = count;
                count++;
            }
            rowEnd--;
        }



        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                spiralMatrixArr[i][colBegin] = count;
                count++
            }
            colBegin++
        }

    }
    return spiralMatrixArr;
};


console.log(generateMatrix(3))