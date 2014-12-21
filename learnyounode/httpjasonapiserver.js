var http = require('http'),
    url = require('url'),
    port = process.argv[2];

http.createServer(function(request, response){
    var urlElements = url.parse(request.url, true),
        date;

     response.writeHead(200, {'Content-Type':'application/json'});

    if(urlElements.pathname === '/api/parsetime') {
        date = new Date(urlElements.query.iso);
        response.end(JSON.stringify({'hour':date.getHours(), 'minute':date.getMinutes(), 'second':date.getSeconds()}));
    }
    else if(urlElements.pathname === '/api/unixtime') {
        date = Date.parse(urlElements.query.iso);
        response.end(JSON.stringify({'unixtime':date}));
    }
}).listen(Number(port));
