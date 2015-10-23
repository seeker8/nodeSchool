var q = require('q');
var defered = q.defer();

defered.promise.then(function(){console.log("RESOLVED!");}, function(error){console.log("REJECTED!")});

setTimeout(defered.reject, 300);
