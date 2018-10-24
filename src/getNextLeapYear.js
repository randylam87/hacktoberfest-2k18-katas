export const getNextLeapYear = (year) => {
	if(year == null) return null;
	var nextLeapYear = 0;
	if(Object.prototype.toString.call(year) === "[object Date]") {
	nextLeapYear = year.getFullYear()+1;
	}
	else if(!isNaN(year) && parseInt(Number(year)) == year && !isNaN(parseInt(year, 10))) {
		nextLeapYear=year+1;
	}
	else return null;
	while (!(nextLeapYear%4==0 && (nextLeapYear%100!=0 || (nextLeapYear%100!=0 && nextLeapYear%400==0)))) {
			nextLeapYear++;
		}
	return nextLeapYear;
};
