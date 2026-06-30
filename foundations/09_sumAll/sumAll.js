const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) ) {
        return "ERROR";
    }
    if(a <= 0 || b <= 0) {
        return "ERROR";
    }
    if(a > b) {
        n = a - b + 1;
    } else {
        n = b - a + 1;
    }
    return (a + b) * n / 2;
};

// Do not edit below this line
module.exports = sumAll;
