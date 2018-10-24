export const sumOfPerfectSquares = (n) => {
    if(n < 4) {
        return n;
    }
    let lowest = n;
    for(let i = 1; i <= n; i++) {
        if(Math.pow(i, 2) <= n) {
            let b = 1 + sumOfPerfectSquares(n - Math.pow(i, 2));
            lowest = lowest < b ? lowest : b;
        } else {
            break;
        }
    }
    return lowest;
};