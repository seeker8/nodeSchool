var http = require('http'),
    bl = require('bl'),
    urls = [process.argv[2], process.argv[3], process.argv[4]],
    count = 0,
    results = {}
    length = urls.length;

urls.forEach(function(url){
    http.get(url, function(response){
        response.pipe(bl(function(error, data){
             if(error) {
                 console.log(error);
             }

             count++;
             results[url] = data;

             if(count === length) {
                 for(var i = 0; i < length; i++) {
                     console.log(results[urls[i]].toString());
                 }
             }
        }));
    });
});


