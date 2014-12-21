function repeat(operation, num){
     if(num > 0) {
          operation();
          num --;
          return repeat(operation, num);
     }
}

module.exports = repeat;
