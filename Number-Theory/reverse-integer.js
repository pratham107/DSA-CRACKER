let reverseNumber = 0;
    let copy = Math.abs(x);

    const INT_MIN = -(2 ** 31);
    const INT_MAX = (2 ** 31) - 1;

    while (copy > 0) {
        let digit = copy % 10;

        reverseNumber = reverseNumber * 10 + digit;

        // Check after adding each digit
        if (reverseNumber > INT_MAX) {
            return 0;
        }

        copy = Math.floor(copy / 10);
    }

    reverseNumber = x > 0 ? reverseNumber : -reverseNumber;


    return reverseNumber;