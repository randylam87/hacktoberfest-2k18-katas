export const nthSumNine = (nth) => {
  if(typeof nth == "number" && Number.isInteger(nth) && nth > 0 && nth < 50){
    var digitSum = (value) =>{
      var sum = 0;
      while (value) {
          sum += value % 10;
          value = Math.floor(value / 10);
      }
      return sum;
    };
  
    var i = 0;
    var rtn = 0;
    while(i != nth){
      rtn += 9;
      if(digitSum(rtn) == 9)
        i++;
    }
    return rtn;
  }
  else{
    throw -1;
  }
};
