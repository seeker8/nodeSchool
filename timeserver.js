var net = require('net'),
    strftime = require('strftime'),
    port = process.argv[2];


net.createServer(function(socket){
     socket.end(strftime('%Y-%m-%d %H:%M%n', new Date()));
}).listen(port);
