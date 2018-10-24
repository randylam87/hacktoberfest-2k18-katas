export const firstMondayOfEveryMonth = (year) => {
    var result = [];
    var d = new Date(year,0,1,0,0,0,0);

    while (d.getFullYear() === year) {
    
        while (d.getDay() !== 1) {
            d.setDate(d.getDate() + 1);
        }

        result[d.getMonth()] = d.getDate();
        d.setDate(1);
        d.setMonth(d.getMonth() + 1);
    }

    return {
        'Jan': result[0],
        'Feb': result[1],
        'Mar': result[2],
        'Apr': result[3],
        'May': result[4],
        'Jun': result[5],
        'Jul': result[6],
        'Aug': result[7],
        'Sep': result[8],
        'Oct': result[9],
        'Nov': result[10],
        'Dec': result[11]
    };
};
