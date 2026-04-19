const sumAll = function(lowest, highest) {
    let res = 0;

    if (lowest > highest) {
        [lowest, highest] = [highest, lowest];
    }
    if (lowest % 1 != 0 && lowest % 1 != 0 || lowest < 0 || highest < 0 || !Number.isInteger(lowest) || !Number.isInteger(highest)){
        return "ERROR";
    }


    for (i = lowest; i <= highest; i++){
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
