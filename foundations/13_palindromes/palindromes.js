const palindromes = function (str) {
  str = str.replace(/[,\s.!]+/gi, "");
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (str.at(i).toLowerCase() != str.at(j).toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
