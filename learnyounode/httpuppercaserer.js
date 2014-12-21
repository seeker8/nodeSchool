var http = require('http'),
    map = require('through2-map'),
    port = process.argv[2];

http.createServer(function(request, response){
     request.pipe(map(function(data){
          return data.toString().toUpperCase();
     })).pipe(response);
}).listen(port);
