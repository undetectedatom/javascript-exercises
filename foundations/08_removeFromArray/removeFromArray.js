const removeFromArray = function(array, ...restArgs) {
    let rest = new Set(restArgs);
    let i = 0;
    for(let i = array.length - 1; i >= 0; i--) {
        let item = array[i];
        if(rest.has(item)) {
            array.splice(i, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
