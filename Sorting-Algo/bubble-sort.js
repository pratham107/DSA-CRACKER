function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let isSwap = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwap = true;
      }
    }

    if (!isSwap) break; 
  }

  return arr;
}

console.log(bubbleSort([5, 6, 4, 3, 5, 2, 1, 2, 4]));