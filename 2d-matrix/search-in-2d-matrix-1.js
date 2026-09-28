

const binarySearch = (matrix, target) => {
    let left = 0;
    let right = matrix.length * matrix[0].length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length];

        if (midValue === target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};

const searchMatrix = (matrix, target) => {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    return binarySearch(matrix, target);
};


//2D Matrix
//     ↓
// Pretend it is 1D sorted array
//     ↓
// Binary Search
//     ↓
// mid
//     ↓
// Convert mid → row + column
//     ↓
// matrix[row][column]