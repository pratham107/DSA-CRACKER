var countPrimes = function(n) {
    if (n <= 2) return 0;

    let bucket = new Array(n).fill(true);

    bucket[0] = false;
    bucket[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (!bucket[i]) continue;

        for (let j = i * i; j < n; j += i) {
            bucket[j] = false;
        }
    }

    let count = 0;

    for (let i = 2; i < n; i++) {
        if (bucket[i]) count++;
    }

    return count;
};

