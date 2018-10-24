export const arrayAddition = (firstArray, secondArray) => {
    let newArray = [];
    if (
        firstArray instanceof Array  === false
        || secondArray instanceof Array  === false
    ) {
        throw 'Passed parameters should be Arrays';
    }

    if (firstArray.length === 0
    || secondArray.length === 0
    ) {
        throw 'Arrays should not be empty';
    }

    let biggerArrayLength = firstArray.length > secondArray.length ? firstArray.length : secondArray.length;

    for (let i = 0; i < biggerArrayLength; i++) {
        if (
            (typeof firstArray[i] !== "number" && typeof firstArray[i] !== "undefined")
            || (typeof secondArray[i] !== "number" && typeof secondArray[i] !== "undefined" )
        ) {
            throw 'Arrays should only contain Integers'
        }
        newArray[i] = (isNaN(firstArray[i]) || isNaN(secondArray[i])) ? firstArray[i] || secondArray[i] : firstArray[i] + secondArray[i];
    }

    return newArray;
};
