function countWords(inputWords) {
    // SOLUTION GOES HERE
    var res = {};
    return inputWords.reduce(function(prev, next, index, array){
        debugger;
        prev[next] = (prev[next] || 0) + 1;
        return prev;
     }, res);
} 
module.exports = countWords
