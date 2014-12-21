var q = require('q'),
    defer = q.defer();

defer.promise.then(function(){
    console.log('RESOLVED!');
});

setTimeout(defer.resolve, 300);
