function extractEachKth(inputArray, k) {
    return inputArray.filter((int, index) => {
        return (index + 1) % k != 0;
    });
}