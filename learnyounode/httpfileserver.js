var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    file = process.argv[3];

http.createServer(function(request, response){
     fs.createReadStream(file).pipe(response);
}).listen(port);

