export const calculateRectangeVolume = (args) => {
    if (Array.isArray(args) && args.every(innerArr => Array.isArray(innerArr) && innerArr.length == 3)) {
        return args.map(innerArr => innerArr.reduce((acc, el) => acc * el));
    } else {
        throw `Error arguments:` + args;
    }
};
