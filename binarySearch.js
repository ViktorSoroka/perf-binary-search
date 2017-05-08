function search(arr, targetValue) {
    let min = 0;
    let max = arr.length - 1;
    // let attempts = 0;
    let guess;

    while (min <= max) {
        guess = min + Math.floor((max - min) / 2);
        // attempts++;
        if (arr[guess] === targetValue) {
            // console.log(attempts);
            return guess;
        }
        if (arr[guess] < targetValue) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }

    return -1;
}

module.exports = search;