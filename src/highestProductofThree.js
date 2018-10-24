export const highestProductofThree = (integers) => {
    let sorted = integers.sort((a, b) => b - a);
    let len = sorted.length;
    if ((sorted[len - 1] * sorted[len - 2]) > (sorted[0] * sorted[1]) && sorted[0] > 0) {
        return sorted[0] * (sorted[len - 1] * sorted[len - 2]);
    } else {
        return sorted[0] * sorted[1] * sorted[2];
    }
}