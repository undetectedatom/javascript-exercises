const repeatString = function(content, times) {
    res = "";
    if (times < 0){
        return "ERROR";
    }
    for(i = 0; i < times; i ++){
        res += content;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
