const removeFromArray = function(myArray, ...removeThis) {
    return myArray.filter(singleOne => !removeThis.includes(singleOne));
};


// removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
// Do not edit below this line
module.exports = removeFromArray;
