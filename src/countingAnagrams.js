export const countingAnagrams = (str) => {
    var count = 0;
    var i = 0;
    str = str.split(/\s+/);
    for(var k = 0; k < str.length; k++)
    {
        str[k] = str[k].split("");
        str[k].sort();
        str[k] = str[k].join("");
    }
    while(i < str.length - 1)
    {
        var flag = 0;
        var n1 = str[i].length;
        for(var j = i + 1; j < str.length; j++)
        {
            var n2 = str[j].length;
            if(n1 == n2 && n1 > 1 && n2 > 1)
            {
                    if(str[i] == str[j])
                    {
                        if(flag == 0)
                            count = count + 1;

                        flag = flag + 1;
                        str.splice(j, 1);
                    }
            }
        }
    i = i + 1;
    }
    return count;
};
