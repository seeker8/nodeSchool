    function lessThanFifty(elem, index, array){
        return elem.message.length <  50;
    }

    function getMessage(elem){
        return elem.message;
    }
  function getShortMessages(messages) {
      // SOLUTION GOES HERE
     return messages.filter(lessThanFifty).map(getMessage);
    }

   module.exports = getShortMessages; 
